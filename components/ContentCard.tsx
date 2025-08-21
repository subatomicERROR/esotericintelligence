import React from 'react';
import { type ContentItem } from '../types';

interface ContentCardProps {
  item: ContentItem;
  isPurchased: boolean;
  onPurchase: (item: ContentItem) => void;
  showToast: (message: string, type: 'success' | 'error') => void;
}

const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);


const ContentCard: React.FC<ContentCardProps> = ({ item, isPurchased, onPurchase, showToast }) => {

  const handlePayment = () => {
    if (item.price <= 0 || isPurchased) return;

    const options = {
      key: "rzp_test_R7agmXiZNDS0Dh", // Your Test Key ID
      amount: item.price * 100, // Amount in the smallest currency unit
      currency: "INR",
      name: "Esoteric Intelligence",
      description: `Purchase: ${item.title}`,
      handler: function (response: any) {
        console.log('Payment successful', response);
        showToast('Payment successful!', 'success');
        onPurchase(item);
      },
      prefill: {
        name: "Test User",
        email: "test.user@example.com",
        contact: "9999999999",
      },
      notes: {
        itemId: item.id,
      },
      theme: {
        color: "#111827", // A deep, neutral dark color to align with the site's theme.
        backdrop_color: "rgba(0, 0, 0, 0.85)", // Darkens the background for a more immersive feel.
      },
    };

    try {
        const rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', function (response: any){
            showToast(`Payment failed: ${response.error.description}`, 'error');
            console.error('Payment failed', response.error);
        });
        rzp1.open();
    } catch(error) {
        console.error("Razorpay error: ", error);
        showToast("Could not load payment gateway.", 'error');
    }
  };

  const handleDownload = () => {
    if (!item.pdfUrl) {
      showToast('No file available for this item.', 'error');
      return;
    }
    showToast(`Preparing download for "${item.title}"...`, 'success');

    // Simulate creating and downloading a file for demonstration
    const fileContent = `This is a placeholder for the premium content:\n\nTitle: ${item.title}\nAuthor: ${item.author}\n\nThank you for your purchase from Esoteric Intelligence.`;
    const blob = new Blob([fileContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${item.title.replace(/[^a-zA-Z0-9]/g, '_')}.txt`; // download as a .txt file
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const renderActionButton = () => {
    if (isPurchased && item.isPremium) {
      return (
        <button
          onClick={handleDownload}
          className="text-sm font-semibold text-white px-4 py-2 rounded-md transition-colors flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700"
        >
          <DownloadIcon className="w-4 h-4" /> Download
        </button>
      );
    }

    if (!item.isPremium || item.price <= 0) {
      return (
         <button
            disabled
            className="text-sm font-semibold bg-white/10 text-brand-text-muted cursor-default px-4 py-2 rounded-md"
         >
            Free Access
        </button>
      )
    }

    return (
       <button 
          onClick={handlePayment}
          className="text-sm font-semibold text-white px-4 py-2 rounded-md transition-colors flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10"
        >
          Buy for ₹{item.price}
        </button>
    )
  }

  return (
    <div className="bg-brand-surface border border-brand-border rounded-lg p-6 flex flex-col hover:border-white/20 hover:scale-[1.02] transition-all duration-300 ease-in-out relative overflow-hidden">
      {item.isPremium && (
         <div className="absolute top-3 right-3 bg-green-500/10 text-green-400 text-xs font-bold px-2 py-1 rounded-full flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            Premium
         </div>
      )}
      <div className="flex-grow">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-text-muted">{item.type}</span>
        <h3 className="text-xl font-bold mt-2 text-white">{item.title}</h3>
        <p className="text-brand-text-muted mt-3 text-sm flex-grow">{item.preview}</p>
      </div>
      <div className="mt-6 pt-4 border-t border-brand-border flex justify-between items-center">
        <p className="text-xs text-brand-text-muted">By {item.author}</p>
        {renderActionButton()}
      </div>
    </div>
  );
};

export default ContentCard;