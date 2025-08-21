import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-surface/50 border-t border-brand-border mt-12">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-brand-text-muted">
        <p className="text-sm">&copy; {new Date().getFullYear()} Esoteric Intelligence. All Rights Reserved.</p>
        <p className="text-xs opacity-50 mt-2">NEURAL BIO-NEURAL-INTERFACE</p>
      </div>
    </footer>
  );
};

export default Footer;