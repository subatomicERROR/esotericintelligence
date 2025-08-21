import React, { useState, useMemo } from 'react';
import { type ContentItem, ContentType, ContentCategory, type AdminDashboardProps } from '../types';
import EditContentModal from '../components/EditContentModal';

const StatCard: React.FC<{ title: string; value: string | number; icon: React.ReactNode }> = ({ title, value, icon }) => (
    <div className="bg-brand-surface border border-brand-border rounded-lg p-4 flex items-center">
        <div className="p-3 rounded-full bg-indigo-500/20 text-indigo-400 mr-4">{icon}</div>
        <div>
            <p className="text-sm font-medium text-brand-text-muted">{title}</p>
            <p className="text-2xl font-bold text-white">{value}</p>
        </div>
    </div>
);

const AdminDashboard: React.FC<AdminDashboardProps> = ({ showToast, content, setContent, purchasedItems }) => {
  const [editingItem, setEditingItem] = useState<ContentItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = useMemo(() => {
    const purchasedContent = content.filter(item => purchasedItems.has(item.id));
    const totalRevenue = purchasedContent.reduce((sum, item) => sum + item.price, 0);
    return {
      revenue: `₹${totalRevenue.toLocaleString()}`,
      sold: purchasedItems.size,
      total: content.length,
    }
  }, [content, purchasedItems]);

  const handleSave = (itemToSave: ContentItem) => {
    const isNew = !content.some(item => item.id === itemToSave.id);
    if (isNew) {
      setContent([itemToSave, ...content]);
      showToast('New content created successfully.', 'success');
    } else {
      setContent(content.map(item => item.id === itemToSave.id ? itemToSave : item));
      showToast(`"${itemToSave.title}" updated successfully.`, 'success');
    }
    closeModal();
  };

  const handleCreateNew = () => {
    setEditingItem({
      id: `new-${Date.now()}`,
      title: '',
      author: '',
      preview: '',
      category: ContentCategory.Quantum,
      type: ContentType.Article,
      price: 0,
      isPremium: true,
      published: false,
      createdAt: new Date().toISOString(),
    });
    setIsModalOpen(true);
  };

  const handleEdit = (item: ContentItem) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this item? This action cannot be undone.")) {
       const itemToDelete = content.find(i => i.id === id);
       setContent(content.filter(item => item.id !== id));
       showToast(`"${itemToDelete?.title}" has been deleted.`, 'success');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  return (
    <>
      <div className="space-y-8">
        <div>
            <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-brand-text-muted mt-1">Manage your digital content and view store analytics.</p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard title="Total Revenue" value={stats.revenue} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>} />
            <StatCard title="Items Sold" value={stats.sold} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4z" /></svg>} />
            <StatCard title="Total Content" value={stats.total} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>} />
        </div>
        
        <div className="bg-brand-surface border border-brand-border rounded-lg p-6 sm:p-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-white">Manage Content</h2>
                <button 
                    onClick={handleCreateNew}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" /></svg>
                    Create New
                </button>
            </div>
          
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-brand-border">
                <thead className="bg-black/20">
                    <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-brand-text-muted uppercase tracking-wider">Title / Author</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-brand-text-muted uppercase tracking-wider">Price</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-brand-text-muted uppercase tracking-wider">Status</th>
                    <th scope="col" className="relative px-6 py-3 text-right text-xs font-medium text-brand-text-muted uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-brand-border">
                    {content.map((item) => (
                    <tr key={item.id} className="hover:bg-black/10">
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-white">{item.title}</div>
                            <div className="text-sm text-brand-text-muted">{item.author}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-text-muted">
                            {item.isPremium ? `₹${item.price}` : 'Free'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            item.published ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                            }`}>
                            {item.published ? 'Published' : 'Draft'}
                        </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-4">
                          <button onClick={() => handleEdit(item)} className="text-indigo-400 hover:text-indigo-300">Edit</button>
                          <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:text-red-400">Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
      </div>
      {isModalOpen && editingItem && (
        <EditContentModal 
            item={editingItem}
            onSave={handleSave}
            onClose={closeModal}
            showToast={showToast}
        />
      )}
    </>
  );
};

export default AdminDashboard;