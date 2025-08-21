import React, { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onDismiss: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onDismiss }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true); // Trigger fade-in
    const timer = setTimeout(() => {
        setVisible(false);
        // Wait for fade-out animation before calling onDismiss
        setTimeout(onDismiss, 300); 
    }, 2700);

    return () => clearTimeout(timer);
  }, [onDismiss]);

  const baseClasses = "fixed bottom-5 left-1/2 -translate-x-1/2 flex items-center px-6 py-3 rounded-lg text-white shadow-lg transition-all duration-300 ease-in-out z-50";
  const typeClasses = {
    success: 'bg-green-600/80 backdrop-blur-sm border border-green-500/50',
    error: 'bg-red-600/80 backdrop-blur-sm border border-red-500/50',
  };
  const visibilityClasses = visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5';

  const SuccessIcon = () => (
    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  );

  const ErrorIcon = () => (
    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  );

  return (
    <div className={`${baseClasses} ${typeClasses[type]} ${visibilityClasses}`}>
      {type === 'success' ? <SuccessIcon /> : <ErrorIcon />}
      <span className="font-medium">{message}</span>
    </div>
  );
};

export default Toast;
