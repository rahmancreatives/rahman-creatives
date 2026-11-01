import React, { useState } from 'react';
import { X, CheckCircle2, Send, MessageCircle } from 'lucide-react';

export const ProjectEnquiryModal = ({
  isOpen,
  onClose,
  preselectedService = '',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: preselectedService || 'Website Creation & Development',
    budget: 'AED 15,000 - AED 35,000',
    details: '',
    contactMethod: 'WhatsApp',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid business email address.');
      return;
    }
    if (!formData.details.trim()) {
      setErrorMessage('Please provide a brief summary of your project.');
      return;
    }

    setIsSubmitting(true);

    fetch('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .catch(() => {})
      .finally(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('rahman_creatives_enquiry_submitted_session', 'true');
        }
      });
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Rahman Creatives,\n\nI would like to discuss a project:\n- Name: ${formData.fullName || 'Client'}\n- Service: ${formData.service}\n- Budget: ${formData.budget}\n- Details: ${formData.details || 'Looking for project consultation.'}`
    );
    window.open(`https://wa.me/971585223276?text=${text}`, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
    >
      <div className="relative w-full max-w-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl p-6 sm:p-8 shadow-2xl my-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[var(--text-muted)] hover:text-[var(--text-main)] rounded-lg hover:bg-[var(--bg-card)] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 space-y-5 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-main)]">Project Enquiry Received</h3>
            <p className="text-[var(--text-muted)] max-w-md mx-auto text-sm leading-relaxed">
              Thank you, <span className="text-[#D4AF37] font-medium">{formData.fullName}</span>. Your project brief has been recorded. Rahman and our creative director team in Dubai will review your requirements and respond within 24 hours.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleWhatsAppDirect}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-semibold text-xs tracking-wide uppercase transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open Instant WhatsApp Chat</span>
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-main)] text-xs font-medium transition-all"
              >
                Return to Site
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Start Your Project
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)]">
                Let’s Shape Your Vision
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
                Tell us about your brand goals. We provide honest feasibility, creative direction, and transparent scope.
              </p>
            </div>

            {errorMessage && (
              <div className="mb-5 p-3 rounded-lg bg-red-900/20 border border-red-500/50 text-red-500 text-xs">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[var(--text-main)] mb-1">
                    Full Name <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Tariq Al-Hashimi"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] focus:border-[#D4AF37] focus:outline-none text-[var(--text-main)] text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[var(--text-main)] mb-1">
                    Business Email <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. tariq@company.ae"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] focus:border-[#D4AF37] focus:outline-none text-[var(--text-main)] text-sm transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[var(--text-main)] mb-1">
                    Phone / WhatsApp (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 000 0000"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] focus:border-[#D4AF37] focus:outline-none text-[var(--text-main)] text-sm transition-colors tabular-nums"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[var(--text-main)] mb-1">
                    Company / Organization (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Prestige Properties"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] focus:border-[#D4AF37] focus:outline-none text-[var(--text-main)] text-sm transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[var(--text-main)] mb-1">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] focus:border-[#D4AF37] focus:outline-none text-[var(--text-main)] text-sm transition-colors"
                  >
                    <option value="Video Editing & Production">Video Editing & Production</option>
                    <option value="Graphics Design & Branding">Graphics Design & Branding</option>
                    <option value="Website Creation & Development">Website Creation & Development</option>
                    <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                    <option value="Social Media Marketing & Management">Social Media Marketing & Management</option>
                    <option value="Performance Marketing & Paid Ads">Performance Marketing & Paid Ads</option>
                    <option value="Full Creative & Growth Retainer">Full Creative & Growth Retainer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[var(--text-main)] mb-1">
                    Estimated Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] focus:border-[#D4AF37] focus:outline-none text-[var(--text-main)] text-sm transition-colors"
                  >
                    <option value="Under AED 15,000">Under AED 15,000</option>
                    <option value="AED 15,000 - AED 35,000">AED 15,000 - AED 35,000</option>
                    <option value="AED 35,000 - AED 75,000">AED 35,000 - AED 75,000</option>
                    <option value="AED 75,000+ (Enterprise)">AED 75,000+ (Enterprise)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[var(--text-main)] mb-1">
                  Project Details &amp; Goals <span className="text-[#D4AF37]">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Describe your current challenge, target audience, timeline, or key objectives..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] focus:border-[#D4AF37] focus:outline-none text-[var(--text-main)] text-sm transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[var(--text-main)] mb-1.5">
                  Preferred Contact Channel
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['WhatsApp', 'Email', 'Phone Call'].map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setFormData({ ...formData, contactMethod: method })}
                      className={`py-2 px-3 text-xs rounded-lg border text-center transition-all ${
                        formData.contactMethod === method
                          ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#D4AF37] font-semibold'
                          : 'border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-main)] bg-[var(--bg-card)]'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[var(--border-color)]">
                <p className="text-[11px] text-[var(--text-muted)]">
                  Direct review by Rahman &amp; senior creatives in Dubai. Zero spam.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#D4AF37] shadow-lg hover:shadow-[#D4AF37]/30 hover:brightness-105 active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Sending Brief...</span>
                  ) : (
                    <>
                      <span>Submit Project Brief</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
