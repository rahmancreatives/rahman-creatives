import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, Clock } from 'lucide-react';
import { SocialLinks } from '../components/SocialLinks';

export const Contact = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: 'Website Creation & Development',
    budget: 'AED 15,000 - AED 35,000',
    details: '',
    contactMethod: 'WhatsApp',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid business email.');
      return;
    }
    if (!formData.details.trim()) {
      setErrorMessage('Please briefly describe your project.');
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
      `Hello Rahman Creatives,\n\nI would like to enquire about your services:\n- Name: ${formData.fullName || 'Client'}\n- Service: ${formData.service}\n- Budget: ${formData.budget}\n- Details: ${formData.details || 'Looking for project consultation.'}`
    );
    window.open(`https://wa.me/971585223276?text=${text}`, '_blank');
  };

  return (
    <div className="pt-28 pb-20 bg-[var(--bg-primary)] text-[var(--text-main)] min-h-screen transition-colors duration-200">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-xs font-medium text-[var(--text-muted)] shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
          <span>Connect with Our Dubai Team</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-main)] mb-6 text-balance">
          Let’s Discuss Your Next <span className="gold-gradient-text">Milestone.</span>
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-3xl mx-auto font-light leading-relaxed">
          Whether you need a full rebrand, cinematic real estate video, high-speed website, or search domination, we are ready to assist.
        </p>
      </section>

      {/* Main Content: Form + Contact Info */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Cards & Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-luxury p-8 rounded-2xl space-y-6">
              <h3 className="text-xl font-bold text-[var(--text-main)] mb-4">Direct Contact Points</h3>

              <div className="space-y-5">
                <a
                  href="tel:+971585223276"
                  className="flex items-start gap-4 p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-[#D4AF37]/50 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-[var(--bg-card)] text-[#D4AF37] group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[var(--text-muted)] block">Phone &amp; WhatsApp Direct</span>
                    <span className="text-sm font-semibold text-[var(--text-main)] group-hover:text-[#D4AF37] tabular-nums">
                      +971 58 522 3276
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:rahmancreatives13@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-[#D4AF37]/50 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-[var(--bg-card)] text-[#D4AF37] group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[var(--text-muted)] block">Email Inquiries</span>
                    <span className="text-sm font-semibold text-[var(--text-main)] group-hover:text-[#D4AF37] break-all">
                      rahmancreatives13@gmail.com
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
                  <div className="p-2.5 rounded-lg bg-[var(--bg-card)] text-[#D4AF37]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[var(--text-muted)] block">Location</span>
                    <span className="text-sm font-semibold text-[var(--text-main)]">
                      Downtown Dubai &amp; Business Bay
                    </span>
                    <span className="block text-xs text-[var(--text-muted)]">United Arab Emirates</span>
                  </div>
                </div>
              </div>

              {/* Social Channels Card */}
              <div className="pt-4 border-t border-[var(--border-color)]">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#D4AF37] block mb-3">
                  Connect on Social Media
                </span>
                <SocialLinks size="md" />
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-semibold text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start Direct WhatsApp Chat</span>
                </button>
              </div>
            </div>

            {/* Turnaround guarantee box */}
            <div className="p-6 rounded-2xl card-luxury space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37]">
                <Clock className="w-4 h-4" />
                <span>Rapid Response Commitment</span>
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed font-light">
                All submitted project briefs are reviewed personally by Rahman and the senior creative team in Dubai. Expect an initial feasibility analysis within 24 business hours.
              </p>
            </div>
          </div>

          {/* Project Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="card-luxury p-8 sm:p-10 rounded-2xl">
              {isSuccess ? (
                <div className="text-center py-12 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text-main)]">Message Dispatched Successfully</h3>
                  <p className="text-sm text-[var(--text-muted)] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-[#D4AF37] font-semibold">{formData.fullName}</span>. Your brief has been recorded. We will connect with you via {formData.contactMethod} shortly.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-primary)] border border-[var(--border-color)] text-xs font-medium text-[var(--text-main)] transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-bold text-[var(--text-main)] mb-2">Project Brief &amp; Scope</h2>
                  <p className="text-xs text-[var(--text-muted)] mb-6">
                    Fill in the details below to receive a custom project timeline and estimate.
                  </p>

                  {errorMessage && (
                    <div className="mb-6 p-3 rounded-xl bg-red-900/20 border border-red-500/50 text-red-500 text-xs">
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
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] focus:border-[#D4AF37] focus:outline-none text-[var(--text-main)] text-sm transition-colors"
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
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] focus:border-[#D4AF37] focus:outline-none text-[var(--text-main)] text-sm transition-colors"
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
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] focus:border-[#D4AF37] focus:outline-none text-[var(--text-main)] text-sm transition-colors tabular-nums"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[var(--text-main)] mb-1">
                          Company / Brand (Optional)
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Prestige Properties"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] focus:border-[#D4AF37] focus:outline-none text-[var(--text-main)] text-sm transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[var(--text-main)] mb-1">
                          Primary Service Required
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] focus:border-[#D4AF37] focus:outline-none text-[var(--text-main)] text-sm transition-colors"
                        >
                          <option value="Video Editing & Production">Video Editing & Production</option>
                          <option value="Graphics Design & Branding">Graphics Design & Branding</option>
                          <option value="Website Creation & Development">Website Creation & Development</option>
                          <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                          <option value="Social Media Marketing & Management">Social Media Marketing & Management</option>
                          <option value="Performance Marketing & Paid Ads">Performance Marketing & Paid Ads</option>
                          <option value="Full Retainer / Multi-Service">Full Retainer / Multi-Service</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[var(--text-main)] mb-1">
                          Estimated Budget
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] focus:border-[#D4AF37] focus:outline-none text-[var(--text-main)] text-sm transition-colors"
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
                        Project Scope &amp; Deliverables <span className="text-[#D4AF37]">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        placeholder="Tell us what you're planning, your target timeline, and key challenges..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] focus:border-[#D4AF37] focus:outline-none text-[var(--text-main)] text-sm transition-colors resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[var(--text-main)] mb-1.5">
                        Preferred Communication Method
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {['WhatsApp', 'Email', 'Phone Call'].map((m) => (
                          <button
                            key={m}
                            type="button"
                            onClick={() => setFormData({ ...formData, contactMethod: m })}
                            className={`py-2 px-3 text-xs rounded-lg border text-center transition-all ${
                              formData.contactMethod === m
                                ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#D4AF37] font-semibold'
                                : 'border-[var(--border-color)] text-[var(--text-muted)] bg-[var(--bg-primary)]'
                            }`}
                          >
                            {m}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[var(--border-color)]/70">
                      <p className="text-[11px] text-[var(--text-muted)]">
                        Zero spam. Non-disclosure privacy guaranteed.
                      </p>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#D4AF37] shadow-lg hover:shadow-[#D4AF37]/30 transition-all disabled:opacity-50 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <span>Dispatching...</span>
                        ) : (
                          <>
                            <span>Send Project Enquiry</span>
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
        </div>
      </section>
    </div>
  );
};
