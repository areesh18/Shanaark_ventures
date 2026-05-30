import { useState } from "react";
import { Link } from "react-router-dom";

const MOCK_POSTS = [
  {
    id: 1,
    title: "Navigating Cross-Border Trade in the Caribbean: A 2026 Outlook",
    excerpt:
      "Discover the emerging supply chain opportunities between India and Suriname, and how early investors are capitalizing on new trade agreements.",
    category: "Market Trends",
    date: "May 12, 2026",
    readTime: "6 min read",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Why Your B2B Brand Needs a Comprehensive Design Kit",
    excerpt:
      "Consistency is revenue. Learn why enterprise clients trust companies that invest in cohesive, professional visual identities.",
    category: "Digital Growth",
    date: "May 08, 2026",
    readTime: "4 min read",
    isFeatured: false,
  },
  {
    id: 3,
    title: "The Ultimate Framework for CEO Decision Making in Volatile Markets",
    excerpt:
      "We break down the advisory frameworks used by top executives to navigate uncertainty, restructure operations, and maintain growth.",
    category: "Advisory",
    date: "April 29, 2026",
    readTime: "8 min read",
    isFeatured: false,
  },
  {
    id: 4,
    title: "SEO vs Paid Ads: Where Should Scaling Businesses Invest?",
    excerpt:
      "A deep dive into customer acquisition costs. When does it make sense to prioritize organic search over Facebook and TikTok marketing?",
    category: "Digital Growth",
    date: "April 15, 2026",
    readTime: "5 min read",
    isFeatured: false,
  },
];

const CATEGORIES = [
  "All",
  "Market Trends",
  "Digital Growth",
  "Advisory",
  "Company News",
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? MOCK_POSTS
      : MOCK_POSTS.filter((post) => post.category === activeCategory);

  const featuredPost =
    filteredPosts.find((post) => post.isFeatured) || filteredPosts[0];
  const regularPosts = filteredPosts.filter(
    (post) => post.id !== featuredPost?.id
  );

  return (
    <div className="min-h-screen bg-(--color-bg-primary) pt-24 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* ── 1. HEADER ───────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 animate-fade-up border-b border-(--color-border) pb-10 sm:pb-12 gap-8">

          {/* Title + subtitle */}
          <div className="max-w-2xl">
            <h1 className="text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl font-medium tracking-tighter text-(--color-text-primary) mb-3 sm:mb-4">
              Insights &{" "}
              <span className="font-serif-italic font-normal text-slate-500">
                Perspectives.
              </span>
            </h1>
            <p className="text-base sm:text-lg font-light tracking-tight text-(--color-text-secondary) leading-relaxed">
              Expert analysis, market trends, and strategic frameworks from the
              Shaanark Ventures team.
            </p>
          </div>

          {/* Subscribe form */}
          <div className="w-full md:w-auto shrink-0">
            <form className="flex w-full md:w-75 lg:w-[320px] relative">
              <input
                type="email"
                placeholder="Get updates in your inbox"
                className="w-full bg-(--color-bg-secondary) border border-(--color-border) rounded-full py-3 pl-5 pr-28 text-sm font-medium tracking-tight text-(--color-text-primary) focus:outline-none focus:border-(--color-dark) transition-all"
                required
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 bg-(--color-dark) text-white px-4 sm:px-5 rounded-full text-xs font-medium hover:bg-opacity-90 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* ── 2. CATEGORY FILTERS ─────────────────────────────── */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 mb-8 sm:mb-12 animate-fade-up delay-100 pb-1">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-tight transition-all whitespace-nowrap border shrink-0 ${
                activeCategory === category
                  ? "bg-(--color-dark) text-white border-(--color-dark)"
                  : "bg-transparent text-(--color-text-secondary) border-(--color-border) hover:border-(--color-text-secondary)"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ── 3. FEATURED POST ────────────────────────────────── */}
        {featuredPost && (
          <Link
            to={`/blog/${featuredPost.id}`}
            className="group block mb-8 sm:mb-12 animate-fade-up delay-200"
          >
            <div className="flex flex-col lg:flex-row bg-(--color-bg-secondary) border border-(--color-border) rounded-3xl sm:rounded-4xl overflow-hidden hover:shadow-lg transition-all duration-300">

              {/* Thumbnail */}
              <div className="w-full lg:w-1/2 h-52 sm:h-64 lg:h-auto bg-slate-200 relative overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-linear-to-tr from-slate-300 to-slate-100 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-slate-400 font-medium text-xs tracking-widest uppercase">
                    Featured Image
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 p-7 sm:p-10 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <span className="px-3 py-1 bg-white border border-(--color-border) rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-(--color-text-secondary)">
                    {featuredPost.category}
                  </span>
                  <span className="text-xs font-medium text-slate-400 tracking-tight">
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-(--color-text-primary) mb-3 sm:mb-4 group-hover:text-(--color-dark)/70 transition-colors leading-[1.15]">
                  {featuredPost.title}
                </h2>
                <p className="text-sm sm:text-base text-(--color-text-secondary) font-light leading-relaxed mb-6 sm:mb-8">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-(--color-dark) mt-auto">
                  Read Article
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* ── 4. POSTS GRID ───────────────────────────────────── */}
        {regularPosts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 animate-fade-up delay-300">
            {regularPosts.map((post) => (
              <Link
                to={`/blog/${post.id}`}
                key={post.id}
                className="group flex flex-col bg-white border border-(--color-border) rounded-[1.25rem] sm:rounded-3xl overflow-hidden hover:shadow-md hover:border-(--color-dark)/20 transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="w-full h-44 sm:h-48 bg-slate-100 relative overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-linear-to-tr from-slate-200 to-slate-50 group-hover:scale-105 transition-transform duration-700" />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 md:p-8 flex flex-col grow">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-(--color-text-secondary)">
                      {post.category}
                    </span>
                    <span className="text-[10px] sm:text-xs font-medium text-slate-400 tracking-tight">
                      {post.date}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg md:text-xl font-medium tracking-tight text-(--color-text-primary) mb-2 sm:mb-3 group-hover:text-(--color-dark)/70 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-(--color-text-secondary) text-sm font-light leading-relaxed mb-5 sm:mb-6 grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-medium text-(--color-text-primary) mt-auto">
                    Read More
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Empty state */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20 sm:py-32 border border-dashed border-(--color-border) rounded-3xl sm:rounded-4xl bg-(--color-bg-secondary)">
            <p className="text-(--color-text-secondary) font-light text-sm">
              No articles found in this category yet.
            </p>
          </div>
        )}

        {/* ── 5. BOTTOM CTA ───────────────────────────────────── */}
        <div className="mt-20 sm:mt-32 pt-12 sm:pt-16 border-t border-(--color-border) text-center animate-fade-up delay-400">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter text-(--color-text-primary) mb-4 sm:mb-6 leading-[1.1]">
            Ready to take{" "}
            <span className="font-serif-italic font-normal text-slate-500">
              action?
            </span>
          </h2>
          <p className="text-base sm:text-lg font-light tracking-tight text-(--color-text-secondary) mb-8 sm:mb-10 max-w-md sm:max-w-xl mx-auto leading-relaxed">
            Stop reading about growth and start executing it. Connect with our
            advisory team today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-(--color-dark) text-white text-sm font-medium hover:bg-opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm"
          >
            Book Consultation
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Blog;