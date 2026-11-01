import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';

export const Testimonials = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <div className="pt-28 pb-20 bg-[var(--bg-primary)] text-[var(--text-main)] min-h-screen transition-colors duration-200">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-xs font-medium text-[var(--text-muted)] shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
          <span>Verified Client Proof</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-main)] mb-6 text-balance">
          Endorsements from <span className="gold-gradient-text">Industry Leaders.</span>
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-3xl mx-auto font-light leading-relaxed">
          Read genuine reviews from managing directors, marketing executives, and entrepreneurs across Dubai who commissioned Rahman Creatives.
        </p>
      </section>

      {/* Metrics Bar */}
      <section className="py-10 bg-[var(--bg-secondary)] border-y border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <span className="text-3xl font-bold text-[var(--text-main)] tabular-nums">5.0 / 5.0</span>
              <p className="text-xs text-[var(--text-muted)] mt-1 font-medium">Average Review Score</p>
            </div>
            <div>
              <span className="text-3xl font-bold text-[#D4AF37] tabular-nums">98%</span>
              <p className="text-xs text-[var(--text-muted)] mt-1 font-medium">Direct Client Retainers</p>
            </div>
            <div>
              <span className="text-3xl font-bold text-[var(--text-main)] tabular-nums">40+</span>
              <p className="text-xs text-[var(--text-muted)] mt-1 font-medium">Delivered High-End Campaigns</p>
            </div>
            <div>
              <span className="text-3xl font-bold text-[var(--text-main)] tabular-nums">100%</span>
              <p className="text-xs text-[var(--text-muted)] mt-1 font-medium">Punctual Milestone Execution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="card-luxury p-8 sm:p-10 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <span className="text-xs font-mono text-[#D4AF37] px-2.5 py-1 rounded bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                    {item.projectType}
                  </span>
                </div>

                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-[#D4AF37]/20 absolute -top-4 -left-2 -z-0" />
                  <p className="text-base sm:text-lg text-[var(--text-main)] leading-relaxed italic relative z-10 font-light">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[var(--border-color)]/70 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-[var(--text-main)]">{item.author}</h4>
                  <p className="text-xs text-[var(--text-muted)]">
                    {item.role}, <span className="text-[#D4AF37] font-medium">{item.company}</span>
                  </p>
                </div>
                <div className="text-right text-xs text-[var(--text-muted)] font-mono">
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="p-10 rounded-3xl card-luxury border border-[#D4AF37]/40 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)] mb-3">
            Join Our Circle of Satisfied Clients
          </h2>
          <p className="text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-6 font-light">
            Let us demonstrate how thoughtful creative direction and technical precision can elevate your brand equity in Dubai.
          </p>
          <button
            onClick={onOpenEnquiry}
            className="px-8 py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#E5C378] text-slate-950 font-semibold text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer"
          >
            Start Your Project Enquiry
          </button>
        </div>
      </section>
    </div>
  );
};
