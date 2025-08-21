import React, { useState, useMemo } from 'react';
import ContentCard from '../components/ContentCard';
import { ContentCategory, type PageProps } from '../types';
import StoreControls from '../components/StoreControls';

const PageHeader: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="mb-12">
        <h1 className="text-4xl font-bold text-white tracking-tight">{title}</h1>
        <p className="mt-2 text-lg text-brand-text-muted">{description}</p>
    </div>
);

const ResearchPage: React.FC<PageProps> = ({ purchasedItems, onPurchase, showToast, content }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');

  const filteredAndSortedContent = useMemo(() => {
    let items = content.filter(
      item => item.category === ContentCategory.Research && item.published
    );

    if (searchQuery) {
      items = items.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.preview.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    switch (sortOrder) {
      case 'price-asc':
        items.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        items.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
      default:
        items.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
    }

    return items;
  }, [content, searchQuery, sortOrder]);


  return (
    <div>
      <PageHeader
        title="Scientific Research"
        description="Access peer-reviewed papers and in-depth analysis on the frontiers of consciousness studies."
      />
       <StoreControls 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {filteredAndSortedContent.length > 0 ? (
          filteredAndSortedContent.map(item => (
            <ContentCard 
              key={item.id} 
              item={item} 
              isPurchased={purchasedItems.has(item.id)}
              onPurchase={onPurchase}
              showToast={showToast}
            />
          ))
        ) : (
          <p className="text-brand-text-muted col-span-full text-center">No content found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default ResearchPage;