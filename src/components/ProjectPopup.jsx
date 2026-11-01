import React, { useState, useEffect, useCallback } from 'react';
import { X, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

const POPUP_CONFIG = {
  INITIAL_DELAY_MS: 30000,
  STORAGE_KEY_DISMISSED: 'rahman_creatives_popup_dismissed_session',
  STORAGE_KEY_SUBMITTED: 'rahman_creatives_enquiry_submitted_session',
};

export const ProjectPopup = ({ onStartProject, isFormOpen = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const checkEligibility = useCallback(() => {
    if (typeof window === 'undefined') return false;
    const isDismissed = sessionStorage.getItem(POPUP_CONFIG.STORAGE_KEY_DISMISSED);
    const isSubmitted = sessionStorage.getItem(POPUP_CONFIG.STORAGE_KEY_SUBMITTED);
    return !isDismissed && !isSubmitted && !isFormOpen;
  }, [isFormOpen]);

  useEffect(() => {
    if (!checkEligibility()) return;

    const timer = setTimeout(() => {
      if (checkEligibility()) {
        setIsOpen(true);
      }
    }, POPUP_CONFIG.INITIAL_DELAY_MS);

    return () => clearTimeout(timer);
  }, [checkEligibility]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleDismiss();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleDismiss = () => {
    setIsOpen(false);
    sessionStorage.setItem(POPUP_CONFIG.STORAGE_KEY_DISMISSED, 'true');
  };

  const handleStartProjectClick = () => {
    setIsOpen(false);
    sessionStorage.setItem(POPUP_CONFIG.STORAGE_KEY_DISMISSED, 'true');
    onStartProject();
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-heading"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-300"
    >
      <div
        className="relative w-full max-w-lg bg-[var(--bg-secondary)] border border-[#D4AF37]/50 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden transform animate-in zoom-in-95 duration-200"
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 35px -5px rgba(212, 175, 55, 0.25)',
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-2 text-[var(--text-muted)] hover:text-[var(--text-main)] rounded-lg hover:bg-[var(--bg-card)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AF37]">
            Dubai Creative Consultation
          </span>
        </div>

        <h3
          id="popup-heading"
          className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)] mb-3"
        >
          Let’s Create Something Exceptional.
        </h3>

        <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed mb-6 font-light">
          Have a project in mind? Tell us what you’re planning, and let’s explore how Rahman Creatives can help elevate your brand, web experience, and media visibility.
        </p>

        <div className="grid grid-cols-2 gap-2 mb-6 p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
          <div className="flex items-center gap-2 text-xs text-[var(--text-main)]">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>Direct Principal Lead</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[var(--text-main)]">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>Turnkey UAE Delivery</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleStartProjectClick}
            className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-5 text-sm font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#D4AF37] rounded-xl shadow-lg hover:shadow-[#D4AF37]/30 hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleDismiss}
            className="w-full sm:w-auto py-3 px-5 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] rounded-xl hover:bg-[var(--bg-card)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
};
