import React from 'react';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

export const PrivacyPolicy = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-20 bg-[var(--bg-primary)] text-[var(--text-main)] min-h-screen transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs font-medium text-[var(--text-muted)] hover:text-[#D4AF37] transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>

        <div className="space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-xs font-medium text-[#D4AF37]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Legal &amp; Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-main)] tracking-tight">
            Privacy Policy &amp; Terms of Engagement
          </h1>
          <p className="text-xs text-[var(--text-muted)]">
            Last Updated: February 2026 · Registered in Dubai, United Arab Emirates
          </p>
        </div>

        <div className="card-luxury p-8 sm:p-10 rounded-2xl space-y-8 text-sm sm:text-base text-[var(--text-muted)] font-light leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[var(--text-main)]">1. Introduction &amp; Commitment</h2>
            <p>
              Rahman Creatives (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), operating in Dubai, United Arab Emirates, is dedicated to protecting the privacy and proprietary intellectual property of our clients, prospective partners, and visitors. This policy describes how we collect, safeguard, and process personal and commercial data through our website and digital services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[var(--text-main)]">2. Information Collection</h2>
            <p>
              When submitting a project enquiry or contacting us via WhatsApp, phone, or email, we collect:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs sm:text-sm">
              <li>Contact details (name, email address, corporate telephone number).</li>
              <li>Organizational affiliations and business details.</li>
              <li>Project briefs, scope requirements, timeline targets, and estimated budgets.</li>
              <li>Non-identifiable analytics regarding session duration and navigation.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[var(--text-main)]">3. Non-Disclosure &amp; Confidentiality</h2>
            <p>
              We treat all project discussions, unpublished media assets, proprietary business strategies, and raw footage under strict confidentiality. We never sell, lease, or monetize client information to third-party ad networks or brokers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[var(--text-main)]">4. Intellectual Property Rights</h2>
            <p>
              Upon final settlement of project milestones, all agreed deliverables—including master video files, vector branding assets, custom web source code, and design files—are transferred fully to the commissioning client, as stipulated in individual Statements of Work (SOW).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[var(--text-main)]">5. Governing Law</h2>
            <p>
              These policies and engagements are governed by the applicable laws of the Emirate of Dubai and federal laws of the United Arab Emirates.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-[var(--border-color)]">
            <h2 className="text-lg font-bold text-[var(--text-main)]">6. Inquiries &amp; Data Officer Contact</h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              For any inquiries regarding data protection or confidentiality, contact us directly at{' '}
              <a href="mailto:rahmancreatives13@gmail.com" className="text-[#D4AF37] hover:underline font-medium">
                rahmancreatives13@gmail.com
              </a>{' '}
              or via telephone at{' '}
              <a href="tel:+971585223276" className="text-[#D4AF37] hover:underline font-medium">
                +971 58 522 3276
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
