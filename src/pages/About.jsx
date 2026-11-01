import React from 'react';
import { Award, Target, ShieldCheck, HeartHandshake, Sparkles, Phone } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { SocialLinks } from '../components/SocialLinks';

export const About = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <div className="pt-28 pb-20 bg-[var(--bg-primary)] text-[var(--text-main)] min-h-screen transition-colors duration-200">
      {/* Hero Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-xs font-medium text-[var(--text-muted)] shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
          <span>The Rahman Creatives Story</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-main)] mb-6 text-balance">
          Pioneering Creative &amp; Digital Distinction in <span className="gold-gradient-text">Dubai.</span>
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-3xl mx-auto font-light leading-relaxed">
          We exist to empower forward-thinking corporate leaders, real estate pioneers, and luxury brands with visual narratives and digital platforms that command respect in the UAE and beyond.
        </p>
      </section>

      {/* Founder Spotlight with the CEO Reference Photo */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="card-luxury rounded-3xl p-8 sm:p-12 border border-[var(--border-color)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/50 shadow-2xl relative">
              <img
                src="/assets/aistudio/Rahman_c705311a.jpg"
                alt="Rahman - Founder & Creative Director, Rahman Creatives"
                className="w-full h-auto object-cover max-h-[600px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-75" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[var(--bg-primary)]/90 backdrop-blur-md border border-[var(--border-color)]">
                <h3 className="text-lg font-bold text-[var(--text-main)]">Rahman</h3>
                <p className="text-xs text-[#D4AF37] font-semibold">Founder &amp; Creative Director</p>
                <p className="text-[11px] text-[var(--text-muted)] mt-1">Downtown Dubai Headquarters</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              <span>Executive Vision</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-main)] leading-tight">
              &ldquo;In Dubai’s fast-moving market, authenticity and uncompromising quality are the only true moats.&rdquo;
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-light">
              <p>
                Rahman established <strong className="text-[var(--text-main)] font-medium">Rahman Creatives</strong> to offer Dubai businesses something distinctly absent in conventional agencies: senior-level creative direction united seamlessly with bleeding-edge technical execution.
              </p>
              <p>
                Rather than treating video production, brand design, web engineering, and SEO as disconnected silos, our studio operates as a synchronized creative force. Every frame of video captured in 8K, every bespoke typographic letterform, and every line of code is orchestrated toward a single commercial objective: elevating your brand’s perceived value and driving verified pipeline growth.
              </p>
              <p>
                Our clients do not pass through layers of junior project coordinators. When you engage with Rahman Creatives, you work directly with passionate craftspeople who treat your brand reputation with the same devotion as our own.
              </p>
            </div>

            {/* Social media links for CEO & Agency */}
            <div className="pt-2">
              <span className="text-xs text-[var(--text-muted)] font-medium block mb-2">Connect with our studio:</span>
              <SocialLinks size="sm" />
            </div>

            <div className="pt-4 border-t border-[var(--border-color)] grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <span className="text-lg font-bold text-[var(--text-main)] tabular-nums">Downtown</span>
                <span className="block text-xs text-[var(--text-muted)]">Executive Studio</span>
              </div>
              <div>
                <span className="text-lg font-bold text-[#D4AF37] tabular-nums">100%</span>
                <span className="block text-xs text-[var(--text-muted)]">Principal-Led</span>
              </div>
              <div>
                <span className="text-lg font-bold text-[var(--text-main)] tabular-nums">GCC &amp; Global</span>
                <span className="block text-xs text-[var(--text-muted)]">Market Reach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          badge="Guiding Principles"
          title="The Values That Govern Every Deliverable"
          description="We uphold four uncompromising standards in every client engagement."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Award className="w-5 h-5 text-[#D4AF37]" />,
              title: 'Aesthetic Restraint',
              desc: 'True luxury and authority stem from negative space, typography, and purposeful pacing—not visual clutter.',
            },
            {
              icon: <Target className="w-5 h-5 text-[#D4AF37]" />,
              title: 'Commercial Intent',
              desc: 'Every video, layout, and campaign must drive tangible business outcomes: qualified inbound leads and high brand valuation.',
            },
            {
              icon: <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />,
              title: 'Radical Integrity',
              desc: 'We tell clients the truth about what will work, what will not, and refuse to inflate scopes or make unverified claims.',
            },
            {
              icon: <HeartHandshake className="w-5 h-5 text-[#D4AF37]" />,
              title: 'Long-Term Partnership',
              desc: 'We build enduring relationships. Our clients rely on us as their trusted creative and digital consigliere in Dubai.',
            },
          ].map((val, idx) => (
            <div key={idx} className="p-6 rounded-2xl card-luxury">
              <div className="w-10 h-10 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center mb-4">
                {val.icon}
              </div>
              <h3 className="text-base font-bold text-[var(--text-main)] mb-2">{val.title}</h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed font-light">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dubai Presence & Consultation CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="p-10 rounded-3xl card-luxury border border-[#D4AF37]/40 shadow-xl">
          <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37] flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)] mb-3">
            Schedule an Executive Briefing
          </h2>
          <p className="text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Meet with Rahman and our creative director in Downtown Dubai or via private video conference to assess your brand’s next leap.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenEnquiry}
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#E5C378] text-slate-950 font-semibold text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer"
            >
              Start Project Discussion
            </button>
            <a
              href="tel:+971585223276"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-main)] text-xs font-medium transition-all"
            >
              Call +971 58 522 3276
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
