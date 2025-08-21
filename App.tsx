import React, { useState, useCallback, useEffect } from 'react';
import NeuralNetworkBackground from './components/NeuralNetworkBackground';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import QuantumPage from './pages/QuantumPage';
import SpiritualPage from './pages/SpiritualPage';
import ResearchPage from './pages/ResearchPage';
import MyLibraryPage from './pages/MyLibraryPage';
import AdminDashboard from './pages/AdminDashboard';
import Toast from './components/Toast';
import { type Page, type ContentItem } from './types';
import { MOCK_CONTENT } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Home');
  const [purchasedItems, setPurchasedItems] = useState<Set<string>>(new Set());
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [allContent, setAllContent] = useState<ContentItem[]>(MOCK_CONTENT);

  const showToast = useCallback((message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  }, []);

  const handlePurchase = (item: ContentItem) => {
    setPurchasedItems(prev => new Set(prev).add(item.id));
  };

  const renderPage = useCallback(() => {
    const pageProps = { purchasedItems, onPurchase: handlePurchase, showToast, content: allContent };
    switch (currentPage) {
      case 'Home':
        return <HomePage {...pageProps} />;
      case 'Quantum':
        return <QuantumPage {...pageProps} />;
      case 'Spiritual':
        return <SpiritualPage {...pageProps} />;
      case 'Research':
        return <ResearchPage {...pageProps} />;
      case 'My Library':
        return <MyLibraryPage {...pageProps} />;
      case 'Admin':
        return <AdminDashboard showToast={showToast} content={allContent} setContent={setAllContent} purchasedItems={purchasedItems} />;
      default:
        return <HomePage {...pageProps} />;
    }
  }, [currentPage, purchasedItems, showToast, allContent]);

  return (
    <div className="bg-transparent text-brand-text font-sans antialiased min-h-screen">
      <NeuralNetworkBackground />
      <div className="relative z-10 flex flex-col min-h-screen pointer-events-none">
        <div className="pointer-events-auto">
          <Header 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage}
          />
        </div>
        <main className="flex-grow py-8">
          <div className="container w-full px-4 sm:px-6 lg:px-8 pointer-events-auto mx-auto">
            {renderPage()}
          </div>
        </main>
        <div className="pointer-events-auto">
          <Footer />
        </div>
      </div>
      {toast && <Toast message={toast.message} type={toast.type} onDismiss={() => setToast(null)} />}
    </div>
  );
};

export default App;
