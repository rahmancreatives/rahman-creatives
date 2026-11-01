import React from 'react';
import { ArrowLeft, Clock, Calendar, Share2, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blog';
import { SocialLinks } from '../components/SocialLinks';

export const BlogArticle = ({ slug, onNavigate, onOpenEnquiry }) => {
  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <div className="pt-28 pb-20 bg-[var(--bg-primary)] text-[var(--text-main)] min-h-screen transition-colors duration-200">
      {/* Back button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <button
          onClick={() => onNavigate('blog')}
          className="inline-flex items-center gap-2 text-xs font-medium text-[var(--text-muted)] hover:text-[#D4AF37] transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Insights</span>
        </button>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Article Meta */}
        <div className="space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-xs font-medium text-[#D4AF37]">
            <span>{post.category}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-[var(--text-main)] tracking-tight leading-tight text-balance">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-y border-[var(--border-color)] pb-4 text-xs text-[var(--text-muted)]">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover border border-[#D4AF37]"
              />
              <div>
                <span className="block font-semibold text-[var(--text-main)]">{post.author.name}</span>
                <span className="text-[11px] text-[var(--text-muted)]">{post.author.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-[var(--text-muted)]">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </div>
              <button
                onClick={handleShare}
                className="p-1.5 rounded-lg hover:bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[#D4AF37] transition-colors"
                title="Share Article"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden mb-12 border border-[var(--border-color)] max-h-[480px]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Body */}
        <div className="max-w-none text-[var(--text-muted)] space-y-6 text-base sm:text-lg leading-relaxed font-light">
          <p className="text-xl font-normal text-[var(--text-main)] leading-relaxed border-l-2 border-[#D4AF37] pl-4 italic">
            {post.excerpt}
          </p>

          <div className="whitespace-pre-line space-y-4">
            {post.content}
          </div>
        </div>

        {/* Author bio box */}
        <div className="mt-16 p-8 rounded-2xl card-luxury flex flex-col sm:flex-row items-center gap-6">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-20 h-20 rounded-full object-cover border-2 border-[#D4AF37] shrink-0"
          />
          <div className="text-center sm:text-left space-y-2">
            <h3 className="text-lg font-bold text-[var(--text-main)]">{post.author.name}</h3>
            <p className="text-xs text-[#D4AF37] font-semibold">{post.author.role}</p>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed font-light">
              Leading the creative vision, luxury video storytelling, and brand architecture for Rahman Creatives from Downtown Dubai.
            </p>
            <div className="pt-2">
              <SocialLinks size="sm" />
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-12 border-t border-[var(--border-color)]">
          <h3 className="text-xl font-bold text-[var(--text-main)] mb-6">Further Reading</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((rel) => (
              <div
                key={rel.id}
                onClick={() => {
                  onNavigate('blog-article', rel.slug);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="card-luxury p-6 rounded-2xl cursor-pointer group"
              >
                <span className="text-xs text-[#D4AF37] font-medium block mb-2">{rel.category}</span>
                <h4 className="text-base font-bold text-[var(--text-main)] group-hover:text-[#D4AF37] transition-colors mb-2 line-clamp-2">
                  {rel.title}
                </h4>
                <div className="flex items-center gap-1 text-xs text-[#D4AF37] font-semibold mt-4">
                  <span>Read Story</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl card-luxury border border-[#D4AF37]/40 text-center space-y-4">
          <h3 className="text-2xl font-bold text-[var(--text-main)]">
            Transform Your Brand in Dubai
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-md mx-auto font-light">
            Discuss your upcoming project directly with Rahman and our creative director team.
          </p>
          <button
            onClick={onOpenEnquiry}
            className="px-6 py-2.5 rounded-xl bg-[#D4AF37] text-slate-950 font-semibold text-xs tracking-wider uppercase hover:bg-[#E5C378] transition-all shadow-md cursor-pointer"
          >
            Start Project Discussion
          </button>
        </div>
      </article>
    </div>
  );
};
