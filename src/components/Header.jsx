import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight, Sun, Moon, Sparkles } from 'lucide-react';
import { SocialLinks } from './SocialLinks';

export const Header = ({
  currentPage,
  onNavigate,
  onOpenEnquiry,
  theme,
  onToggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when pressing Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--border-color)] shadow-lg shadow-black/10 py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          {/* Zone 1: Brand Wordmark (Shrink-safe) */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 sm:gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-md shrink-0 cursor-pointer"
            aria-label="Rahman Creatives Home"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[var(--bg-card)] border border-[#D4AF37]/50 flex items-center justify-center shadow-inner group-hover:border-[#D4AF37] transition-colors shrink-0">
              <span className="font-bold text-xs sm:text-sm tracking-widest text-[#D4AF37]">RC</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-[var(--text-main)] group-hover:text-[#D4AF37] transition-colors whitespace-nowrap">
                RAHMAN <span className="font-light text-[#D4AF37]">CREATIVES</span>
              </span>
            </div>
          </button>

          {/* Zone 2: Desktop Navigation Links (Visible on md and above) */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 text-sm tracking-wide transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded cursor-pointer ${
                    isActive
                      ? 'text-[#D4AF37] font-semibold'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Desktop Controls (Visible on md and above) */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] cursor-pointer"
              title={theme === 'light' ? 'Switch to Original Theme' : 'Switch to White Theme'}
              aria-label={theme === 'light' ? 'Switch to Original Theme' : 'Switch to White Theme'}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-[#D4AF37]" />
              ) : (
                <Sun className="w-4 h-4 text-[#D4AF37]" />
              )}
            </button>

            {/* Direct Dubai Phone Link */}
            <a
              href="tel:+971585223276"
              className="hidden lg:flex items-center gap-2 text-xs font-medium text-[var(--text-muted)] hover:text-[#D4AF37] transition-colors whitespace-nowrap py-2 px-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[#D4AF37]/40 shadow-sm"
              title="Call or WhatsApp Dubai Office"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="tabular-nums">+971 58 522 3276</span>
            </a>

            {/* Primary Action Button */}
            <button
              onClick={onOpenEnquiry}
              className="relative inline-flex items-center justify-center gap-2 px-4 lg:px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#D4AF37] rounded-lg shadow-md hover:shadow-[#D4AF37]/25 hover:brightness-105 active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer"
            >
              <span>Start Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Right Controls: Theme Toggle + Start Project (sm only) + Hamburger (ALWAYS VISIBLE on small screens) */}
          <div className="flex md:hidden items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Mobile Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[#D4AF37] shrink-0 cursor-pointer"
              title={theme === 'light' ? 'Switch to Original Theme' : 'Switch to White Theme'}
              aria-label={theme === 'light' ? 'Switch to Original Theme' : 'Switch to White Theme'}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-[#D4AF37]" />
              ) : (
                <Sun className="w-4 h-4 text-[#D4AF37]" />
              )}
            </button>

            {/* Start Project CTA on tablet/larger mobile */}
            <button
              onClick={onOpenEnquiry}
              className="hidden sm:inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold text-slate-950 bg-[#D4AF37] hover:bg-[#E5C378] rounded-lg shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Start Project</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>

            {/* Hamburger Menu Toggle Button - ALWAYS visible on small screens with shrink-0 and clear touch target */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center text-[var(--text-main)] bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[#D4AF37] hover:text-[#D4AF37] rounded-xl shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] shrink-0 cursor-pointer active:scale-95"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#D4AF37]" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer (Visible on md:hidden when open) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--bg-primary)] border-b border-[var(--border-color)] px-5 py-6 space-y-5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left text-base font-medium py-2.5 px-3 rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#D4AF37] bg-[var(--bg-card)] font-semibold'
                      : 'text-[var(--text-main)] hover:text-[#D4AF37] hover:bg-[var(--bg-card)]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Social Links on Mobile */}
          <div className="pt-3 border-t border-[var(--border-color)]">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#D4AF37] block mb-2.5">
              Connect on Social
            </span>
            <SocialLinks size="md" />
          </div>

          <div className="pt-3 border-t border-[var(--border-color)] flex flex-col gap-3">
            <a
              href="tel:+971585223276"
              className="flex items-center gap-2 text-sm text-[var(--text-muted)] py-2.5 px-3 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)]"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span className="tabular-nums">+971 58 522 3276 (Dubai)</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-slate-950 bg-[#D4AF37] rounded-lg shadow-md cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start Project Enquiry</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
