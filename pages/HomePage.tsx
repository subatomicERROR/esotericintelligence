import React from 'react';
import ContentCard from '../components/ContentCard';
import { type PageProps } from '../types';

// Helper components for icons to keep the main component clean
const FeatureIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-500/20 text-indigo-400 mb-4">
        {children}
    </div>
);

const GridIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>;
const CreditCardIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>;
const LibraryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>;
const SparklesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L11 15l-4 6h10l-4-6 4.293-4.293a1 1 0 011.414 0L21 12M5 12a2 2 0 100-4 2 2 0 000 4z" /></svg>;


const HomePage: React.FC<PageProps> = ({ purchasedItems, onPurchase, showToast, content }) => {
  const featuredContent = content.filter(c => c.published).slice(0, 3);
  
  return (
    <div className="space-y-24">
      <section className="text-center pt-20 pb-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
          Unlock the Universe Within
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-brand-text-muted">
          Unlock profound insights through a next-generation digital marketplace for wisdom, research, and discovery.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredContent.map(item => (
            <ContentCard 
              key={item.id} 
              item={item}
              isPurchased={purchasedItems.has(item.id)}
              onPurchase={onPurchase}
              showToast={showToast}
            />
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold text-white mb-12 text-center">A Marketplace for Modern Seekers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-brand-surface border border-brand-border p-6 rounded-lg">
                <FeatureIcon><SparklesIcon /></FeatureIcon>
                <h3 className="text-xl font-bold text-white">Immersive Experience</h3>
                <p className="text-brand-text-muted mt-2">A unique, bio-neural network aesthetic sets the tone for deep exploration.</p>
            </div>
            <div className="bg-brand-surface border border-brand-border p-6 rounded-lg">
                <FeatureIcon><GridIcon /></FeatureIcon>
                <h3 className="text-xl font-bold text-white">Curated & Organized</h3>
                <p className="text-brand-text-muted mt-2">Browse content by category with intelligent filtering to find exactly what you need.</p>
            </div>
            <div className="bg-brand-surface border border-brand-border p-6 rounded-lg">
                <FeatureIcon><CreditCardIcon /></FeatureIcon>
                <h3 className="text-xl font-bold text-white">Seamless & Secure Payments</h3>
                <p className="text-brand-text-muted mt-2">Secure checkout powered by Razorpay ensures smooth, trusted transactions.</p>
            </div>
            <div className="bg-brand-surface border border-brand-border p-6 rounded-lg">
                <FeatureIcon><LibraryIcon /></FeatureIcon>
                <h3 className="text-xl font-bold text-white">Your Personal Library</h3>
                <p className="text-brand-text-muted mt-2">Every purchase is stored in a “My Library” section for lifetime access and downloads.</p>
            </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Simple & Secure Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-brand-surface border border-brand-border p-8 rounded-lg">
                <div className="text-3xl font-bold text-indigo-400 mb-2">1</div>
                <h3 className="text-xl font-bold text-white">Discover & Browse</h3>
                <p className="text-brand-text-muted mt-2">Explore our curated collections and find insights that resonate with you.</p>
            </div>
             <div className="bg-brand-surface border border-brand-border p-8 rounded-lg">
                <div className="text-3xl font-bold text-indigo-400 mb-2">2</div>
                <h3 className="text-xl font-bold text-white">Purchase Securely</h3>
                <p className="text-brand-text-muted mt-2">Unlock content with a simple, secure payment through our trusted gateway.</p>
            </div>
             <div className="bg-brand-surface border border-brand-border p-8 rounded-lg">
                <div className="text-3xl font-bold text-indigo-400 mb-2">3</div>
                <h3 className="text-xl font-bold text-white">Access Instantly</h3>
                <p className="text-brand-text-muted mt-2">Your new content appears in your personal library, ready to download.</p>
            </div>
        </div>
      </section>

      <section className="text-center max-w-3xl mx-auto">
         <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
         <p className="text-lg text-brand-text-muted">
            At Esoteric Intelligence, we believe knowledge should be sacred, interactive, and alive. This portal is not just a store—it’s a living library where deep thinkers and seekers gain access to curated insights, while creators retain full control and ownership.
         </p>
      </section>

    </div>
  );
};

export default HomePage;