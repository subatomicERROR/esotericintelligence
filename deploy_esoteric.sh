#!/usr/bin/env bash
# deploy_esoteric.sh
# End-to-end: secure repo setup + Vite config + GitHub Pages deploy (+ Actions)

set -euo pipefail

### ─────────────────────────────────────────────────────────────────────────────
### CONFIG — adjust if needed
### ─────────────────────────────────────────────────────────────────────────────
PROJECT_DIR="${PROJECT_DIR:-$HOME/Projects/esoteric-intelligence-portal}"
REPO_URL="${REPO_URL:-https://github.com/subatomicERROR/esotericintelligence.git}"
REPO_OWNER="subatomicERROR"
REPO_NAME="esotericintelligence"
PAGES_URL="https://${REPO_OWNER}.github.io/${REPO_NAME}/"
DEFAULT_BRANCH="main"

# tools required
need() { command -v "$1" >/dev/null 2>&1 || { echo "❌ Missing: $1" >&2; exit 1; }; }
need git
need npm
need jq
need sed

### ─────────────────────────────────────────────────────────────────────────────
### STEP 0: move into project
### ─────────────────────────────────────────────────────────────────────────────
cd "$PROJECT_DIR" || { echo "❌ Project not found: $PROJECT_DIR"; exit 1; }
echo "📂 In project: $PWD"

test -f package.json || { echo "❌ package.json not found. Are you in the project root?"; exit 1; }
test -f index.html   || echo "⚠️  index.html not found (Vite may still work if using different entry)."

### ─────────────────────────────────────────────────────────────────────────────
### STEP 1: .gitignore + env safety
### ─────────────────────────────────────────────────────────────────────────────
echo "🛡️  Hardening .gitignore and env handling..."
# append (idempotent)
IGNORE_BLOCK='
# === Auto-added by deploy_esoteric.sh ===
node_modules
dist
.vscode
.DS_Store
*.log
.env.local
.env
.env*.local
# payment keys (examples)
stripe_*.json
paypal_*.json
'
touch .gitignore
# only append if not already present
if ! grep -q "Auto-added by deploy_esoteric.sh" .gitignore; then
  printf "%s\n" "$IGNORE_BLOCK" >> .gitignore
fi

# provide env example (never commit real keys)
if [ ! -f .env.example ]; then
  cat > .env.example <<'ENVX'
# Example environment variables (do NOT commit secrets)
# Copy to .env.local and fill in real values locally.
VITE_PUBLIC_APP_NAME="Esoteric Intelligence Portal"
# If you proxy API calls via your own backend, expose only the base URL:
VITE_API_BASE="/api"
ENVX
fi

### ─────────────────────────────────────────────────────────────────────────────
### STEP 2: Ensure Vite is configured for GitHub Pages
###  - base must be "/<repo_name>/"
### ─────────────────────────────────────────────────────────────────────────────
echo "⚙️  Ensuring vite.config.ts has correct base..."
if [ -f vite.config.ts ]; then
  # If base not present, append it; if present, rewrite value.
  if grep -q "base:" vite.config.ts; then
    # replace existing base
    sed -i 's|base:.*|base: "/'"${REPO_NAME}"'/",|' vite.config.ts
  else
    # inject base property inside export default defineConfig({...})
    awk -v rn="$REPO_NAME" '
      BEGIN{inCfg=0}
      /export default defineConfig\(\{/ {print; print "  base: \"/" rn "/\","; next}
      {print}
    ' vite.config.ts > vite.config.ts.tmp && mv vite.config.ts.tmp vite.config.ts
  fi
else
  # minimal config if missing
  cat > vite.config.ts <<EOF
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/${REPO_NAME}/",
});
EOF
fi

### ─────────────────────────────────────────────────────────────────────────────
### STEP 3: Update package.json (homepage, repo metadata, deploy scripts)
### ─────────────────────────────────────────────────────────────────────────────
echo "📝 Updating package.json (homepage, repo, scripts)..."
TMP_PKG="package.json.tmp.$$"
jq --arg homepage "${PAGES_URL}" \
   --arg repo "https://github.com/${REPO_OWNER}/${REPO_NAME}.git" \
   '
   .homepage = $homepage |
   .repository = ( .repository // {type:"git"} ) |
   .repository.url = $repo |
   .bugs = {"url": ("https://github.com/'"${REPO_OWNER}"'/'"${REPO_NAME}"'/issues")} |
   .author = (.author // "subatomicERROR") |
   .license = (.license // "MIT") |
   .scripts = (.scripts // {}) |
   .scripts.predeploy = "npm run build" |
   .scripts.deploy = "gh-pages -d dist"
   ' package.json > "$TMP_PKG"
mv "$TMP_PKG" package.json

# ensure gh-pages is installed
if ! jq -e '.devDependencies["gh-pages"]' package.json >/dev/null; then
  echo "📦 Installing gh-pages..."
  npm i -D gh-pages
fi

### ─────────────────────────────────────────────────────────────────────────────
### STEP 4: Create GitHub Actions workflow for auto-deploys (optional + recommended)
###  - Builds from main to GitHub Pages on every push
### ─────────────────────────────────────────────────────────────────────────────
echo "🤖 Creating GitHub Actions workflow (deploy-pages.yml)..."
mkdir -p .github/workflows
cat > .github/workflows/deploy-pages.yml <<'YML'
name: Deploy Vite app to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
YML

### ─────────────────────────────────────────────────────────────────────────────
### STEP 5: Git init + push to GitHub
### ─────────────────────────────────────────────────────────────────────────────
echo "🔧 Initializing git & pushing to ${REPO_URL} ..."
if [ ! -d .git ]; then
  git init -b "${DEFAULT_BRANCH}"
fi

# set remote (update if exists)
if git remote | grep -q '^origin$'; then
  git remote set-url origin "${REPO_URL}"
else
  git remote add origin "${REPO_URL}"
fi

# first commit
git add .
# Prevent accidental env commit (double safety)
git restore --staged .env.local 2>/dev/null || true
git commit -m "feat: initial secure deploy setup (Vite + Pages + Actions) 🚀" || echo "ℹ️ Nothing to commit."

# Try pushing
set +e
git push -u origin "${DEFAULT_BRANCH}"
PUSH_RC=$?
set -e
if [ $PUSH_RC -ne 0 ]; then
  echo "⚠️  Push failed (maybe remote has commits). Pulling with rebase then pushing..."
  git pull --rebase origin "${DEFAULT_BRANCH}" || true
  git push -u origin "${DEFAULT_BRANCH}" || {
    echo "❌ Could not push. Resolve git conflicts, then re-run this script."
    exit 1
  }
fi

### ─────────────────────────────────────────────────────────────────────────────
### STEP 6: Immediate deploy via gh-pages (so you get a live URL now)
###  - Also keep Actions workflow for future auto-deploys on push
### ─────────────────────────────────────────────────────────────────────────────
echo "🚀 Building & deploying (gh-pages) for immediate availability..."
npm run build
npx gh-pages -d dist -b gh-pages -m "chore: deploy via gh-pages 🌐" || {
  echo "⚠️ gh-pages deploy failed. You can rely on the GitHub Actions workflow to publish on the next push."
}

# ensure Pages static flag works fine
touch dist/.nojekyll || true

echo
echo "✅ Done!"
echo "🔗 Code repo:    https://github.com/${REPO_OWNER}/${REPO_NAME}"
echo "🌍 Live site:     ${PAGES_URL}"
echo
echo "Next:"
echo "  1) Keep your secrets in .env.local (NEVER commit)."
echo "  2) Push to '${DEFAULT_BRANCH}' and Actions will auto-deploy."
echo "  3) If you need server-side secrets (payments, API keys), proxy them via a backend."
