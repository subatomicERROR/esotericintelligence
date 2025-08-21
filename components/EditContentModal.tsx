import React, { useState, useEffect } from 'react';
import { type ContentItem, ContentType, ContentCategory } from '../types';

interface EditContentModalProps {
  item: ContentItem;
  onSave: (item: ContentItem) => void;
  onClose: () => void;
  showToast: (message: string, type: 'success' | 'error') => void;
}

const InputField: React.FC<{ label: string; id: string; children: React.ReactNode }> = ({ label, id, children }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-brand-text-muted mb-1">{label}</label>
        {children}
    </div>
);

const EditContentModal: React.FC<EditContentModalProps> = ({ item, onSave, onClose, showToast }) => {
  const [formData, setFormData] = useState<ContentItem>(item);

  useEffect(() => {
    // Handle escape key to close modal
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    let processedValue: any = value;
    if (type === 'checkbox') {
        processedValue = (e.target as HTMLInputElement).checked;
    } else if (name === 'price') {
        processedValue = parseFloat(value) || 0;
    }

    setFormData(prev => ({ ...prev, [name]: processedValue }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
        setFormData(prev => ({...prev, pdfUrl: file.name}));
        showToast(`File "${file.name}" is staged.`, 'success');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.author) {
        showToast('Title and Author are required fields.', 'error');
        return;
    }
    onSave(formData);
  };

  return (
    <div 
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
        onClick={onClose}
        aria-modal="true"
        role="dialog"
    >
      <div 
        className="bg-brand-surface border border-brand-border rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-brand-border">
          <h2 className="text-xl font-bold text-white">{item.id.startsWith('new-') ? 'Create New Content' : 'Edit Content'}</h2>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4 flex-grow">
          <InputField label="Title" id="title">
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required className="w-full bg-black/20 border border-brand-border rounded-md p-2 text-brand-text focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </InputField>
          <InputField label="Author" id="author">
            <input type="text" id="author" name="author" value={formData.author} onChange={handleChange} required className="w-full bg-black/20 border border-brand-border rounded-md p-2 text-brand-text focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </InputField>
          <InputField label="Preview Text" id="preview">
            <textarea id="preview" name="preview" value={formData.preview} onChange={handleChange} rows={4} className="w-full bg-black/20 border border-brand-border rounded-md p-2 text-brand-text focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </InputField>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField label="Category" id="category">
                <select id="category" name="category" value={formData.category} onChange={handleChange} className="w-full bg-black/20 border border-brand-border rounded-md p-2 text-brand-text focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    {Object.values(ContentCategory).map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
            </InputField>
            <InputField label="Type" id="type">
                <select id="type" name="type" value={formData.type} onChange={handleChange} className="w-full bg-black/20 border border-brand-border rounded-md p-2 text-brand-text focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    {Object.values(ContentType).map(type => <option key={type} value={type}>{type}</option>)}
                </select>
            </InputField>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField label="Price (₹)" id="price">
                <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} min="0" step="1" className="w-full bg-black/20 border border-brand-border rounded-md p-2 text-brand-text focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </InputField>
            <InputField label="File Upload" id="file-upload">
                <label className="w-full bg-black/20 border border-brand-border rounded-md p-2 text-brand-text-muted hover:text-white hover:border-white/50 cursor-pointer flex items-center justify-center transition-colors">
                    <span>{formData.pdfUrl ? formData.pdfUrl : 'Attach PDF/Text'}</span>
                    <input type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.txt,.md" />
                </label>
            </InputField>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <input type="checkbox" id="published" name="published" checked={formData.published} onChange={handleChange} className="h-4 w-4 rounded border-brand-border text-indigo-600 focus:ring-indigo-500 bg-black/20" />
                <label htmlFor="published" className="text-sm font-medium text-brand-text-muted">Published</label>
            </div>
            <div className="flex items-center gap-2">
                <input type="checkbox" id="isPremium" name="isPremium" checked={formData.isPremium} onChange={handleChange} className="h-4 w-4 rounded border-brand-border text-indigo-600 focus:ring-indigo-500 bg-black/20" />
                <label htmlFor="isPremium" className="text-sm font-medium text-brand-text-muted">Premium</label>
            </div>
          </div>
        </form>
        <div className="p-4 bg-black/20 border-t border-brand-border flex justify-end gap-4">
          <button type="button" onClick={onClose} className="bg-white/5 hover:bg-white/10 text-white font-bold py-2 px-4 rounded-lg transition-colors">Cancel</button>
          <button type="submit" onClick={handleSubmit} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default EditContentModal;