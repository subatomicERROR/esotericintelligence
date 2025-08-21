import React, { useState } from 'react';
import { type Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const NavLink: React.FC<{
  pageName: Page;
  currentPage: Page;
  onClick: (page: Page) => void;
  children: React.ReactNode;
}> = ({ pageName, currentPage, onClick, children }) => (
  <button
    onClick={() => onClick(pageName)}
    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
      currentPage === pageName
        ? 'text-white bg-white/10'
        : 'text-brand-text-muted hover:text-white hover:bg-white/5'
    }`}
  >
    {children}
  </button>
);

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems: Page[] = ['Home', 'Quantum', 'Spiritual', 'Research', 'My Library', 'Admin'];

  return (
    <header className="sticky top-0 z-50 bg-brand-surface/80 backdrop-blur-xs border-b border-brand-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => setCurrentPage('Home')} className="flex-shrink-0 text-white font-bold text-xl tracking-wider">
              Esoteric Intelligence
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map(item => (
                <NavLink key={item} pageName={item} currentPage={currentPage} onClick={setCurrentPage}>
                  {item}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden items-center space-x-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="bg-white/5 inline-flex items-center justify-center p-2 rounded-md text-brand-text-muted hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(item => (
                 <button key={item}
                    onClick={() => {
                        setCurrentPage(item);
                        setIsMobileMenuOpen(false);
                    }}
                    className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium ${ currentPage === item ? 'text-white bg-white/10' : 'text-brand-text-muted hover:text-white hover:bg-white/5'}`}>
                    {item}
                </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;