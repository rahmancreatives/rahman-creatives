import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react';
import { servicesData } from '../data/services';
import { SocialLinks } from './SocialLinks';

export const Footer = ({ onNavigate, onOpenEnquiry }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-color)] text-[var(--text-muted)] pt-16 pb-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[var(--border-color)]">
          {/* Column 1 & 2: Agency Identity + Social Links */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[var(--bg-card)] border border-[#D4AF37]/60 flex items-center justify-center">
                <span className="font-bold text-sm tracking-widest text-[#D4AF37]">RC</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-[var(--text-main)]">
                RAHMAN <span className="font-light text-[#D4AF37]">CREATIVES</span>
              </span>
            </div>

            <p className="text-sm text-[var(--text-muted)] max-w-sm leading-relaxed font-light">
              Dubai-based creative and digital services agency helping businesses build authority, engage audiences, and scale their commercial footprint through cinematic video, bespoke branding, web architecture, and organic search.
            </p>

            {/* Clickable Social Media Icons: Facebook, TikTok, LinkedIn, X, Instagram */}
            <div className="pt-1">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#D4AF37] block mb-2.5">
                Official Social Media
              </span>
              <SocialLinks size="md" />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/971585223276?text=Hello%20Rahman%20Creatives,%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-[#D4AF37]/50 text-xs font-medium text-[var(--text-main)] transition-all shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp Concierge</span>
              </a>

              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#D4AF37] hover:bg-[#E5C378] text-xs font-semibold text-slate-950 transition-all shadow-sm cursor-pointer"
              >
                <span>Start Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#D4AF37] mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[var(--text-main)] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[var(--text-main)] transition-colors"
                >
                  About Rahman &amp; Agency
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[var(--text-main)] transition-colors"
                >
                  All Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('testimonials')}
                  className="hover:text-[var(--text-main)] transition-colors"
                >
                  Client Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="hover:text-[var(--text-main)] transition-colors"
                >
                  Insights &amp; Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[var(--text-main)] transition-colors"
                >
                  Contact &amp; Enquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Confirmed Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#D4AF37] mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <button
                    onClick={() => onNavigate('service-detail', svc.slug)}
                    className="hover:text-[var(--text-main)] transition-colors text-left"
                  >
                    {svc.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Verified Contact Details */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#D4AF37] mb-4">
              Dubai Headquarters
            </h3>
            <ul className="space-y-3 text-sm text-[var(--text-muted)]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Downtown Dubai &amp; Business Bay, United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href="tel:+971585223276"
                  className="hover:text-[var(--text-main)] transition-colors tabular-nums"
                >
                  +971 58 522 3276
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href="mailto:rahmancreatives13@gmail.com"
                  className="hover:text-[var(--text-main)] transition-colors break-all"
                >
                  rahmancreatives13@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <p>
            &copy; {currentYear} Rahman Creatives. All rights reserved. Registered in Dubai, UAE.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={() => onNavigate('privacy')}
              className="hover:text-[var(--text-main)] transition-colors"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span>Terms of Engagement</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span className="text-[#D4AF37]/90 font-medium">Dubai Creative Agency</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
