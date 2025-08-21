import React from 'react';
import ContentCard from '../components/ContentCard';
import { type PageProps } from '../types';

const PageHeader: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-white tracking-tight">{title}</h1>
        <p className="mt-2 text-lg text-brand-text-muted max-w-2xl mx-auto">{description}</p>
    </div>
);

const MyLibraryPage: React.FC<PageProps> = ({ purchasedItems, onPurchase, showToast, content }) => {
  const libraryContent = content.filter(item => purchasedItems.has(item.id));

  return (
    <div>
      <PageHeader
        title="My Library"
        description="Your personal collection of purchased insights. Access and download your content at any time."
      />
      {libraryContent.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {libraryContent.map(item => (
            <ContentCard 
              key={item.id} 
              item={item} 
              isPurchased={true}
              onPurchase={onPurchase} // Note: onPurchase won't be called for already purchased items
              showToast={showToast}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-brand-surface border border-brand-border rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-brand-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-white">Your library is empty</h3>
            <p className="mt-1 text-sm text-brand-text-muted">Start exploring and purchase content to add it to your collection.</p>
        </div>
      )}
    </div>
  );
};

export default MyLibraryPage;