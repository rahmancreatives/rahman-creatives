import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProjectPopup } from './components/ProjectPopup';
import { ProjectEnquiryModal } from './components/ProjectEnquiryModal';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Testimonials } from './pages/Testimonials';
import { Blog } from './pages/Blog';
import { BlogArticle } from './pages/BlogArticle';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentParam, setCurrentParam] = useState('');
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryPreselectedService, setEnquiryPreselectedService] = useState('');
  
  // Theme state: 'dark' (original color) or 'light' (white theme)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('rc_theme') || 'dark';
    }
    return 'dark';
  });

  // Apply theme class to document element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
    localStorage.setItem('rc_theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Synchronize with URL hash for bookmarking and back button
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (!hash) {
        setCurrentPage('home');
        setCurrentParam('');
        return;
      }

      const parts = hash.split('/');
      const page = parts[0] || 'home';
      const param = parts[1] || '';

      setCurrentPage(page);
      setCurrentParam(param);
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const handleNavigate = (page, param) => {
    setCurrentPage(page);
    setCurrentParam(param || '');
    if (param) {
      window.location.hash = `#/${page}/${param}`;
    } else {
      window.location.hash = `#/${page}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiry = (serviceName) => {
    setEnquiryPreselectedService(serviceName || '');
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-main)] font-sans selection:bg-[#D4AF37]/30 selection:text-white transition-colors duration-200">
      {/* Global Header with Theme Switcher */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenEnquiry={() => handleOpenEnquiry()}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <Home onNavigate={handleNavigate} onOpenEnquiry={handleOpenEnquiry} />
        )}
        {currentPage === 'about' && (
          <About onNavigate={handleNavigate} onOpenEnquiry={handleOpenEnquiry} />
        )}
        {currentPage === 'services' && (
          <Services onNavigate={handleNavigate} onOpenEnquiry={handleOpenEnquiry} />
        )}
        {currentPage === 'service-detail' && (
          <ServiceDetail
            slug={currentParam}
            onNavigate={handleNavigate}
            onOpenEnquiry={handleOpenEnquiry}
          />
        )}
        {currentPage === 'testimonials' && (
          <Testimonials onNavigate={handleNavigate} onOpenEnquiry={handleOpenEnquiry} />
        )}
        {currentPage === 'blog' && (
          <Blog onNavigate={handleNavigate} />
        )}
        {currentPage === 'blog-article' && (
          <BlogArticle
            slug={currentParam}
            onNavigate={handleNavigate}
            onOpenEnquiry={handleOpenEnquiry}
          />
        )}
        {currentPage === 'contact' && (
          <Contact onNavigate={handleNavigate} />
        )}
        {currentPage === 'privacy' && (
          <PrivacyPolicy onNavigate={handleNavigate} />
        )}
      </main>

      {/* Global Footer with Clickable Social Media Links */}
      <Footer
        onNavigate={handleNavigate}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* Mandatory 30-Second Promotional Enquiry Popup */}
      <ProjectPopup
        onStartProject={() => handleOpenEnquiry()}
        isFormOpen={isEnquiryOpen}
      />

      {/* Interactive Project Enquiry Modal */}
      <ProjectEnquiryModal
        isOpen={isEnquiryOpen}
        onClose={handleCloseEnquiry}
        preselectedService={enquiryPreselectedService}
      />
    </div>
  );
}
