import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { blogs } from "../../data/blogs";

const BlogDetail = () => {
  const { slug } = useParams();

  const post = blogs.find((blog) => blog.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Blog not found
      </div>
    );
  }

  return (
    <div className="pt-20 md:pt-32 pb-16 md:pb-24 bg-(--color-bg-primary)">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        {/* category */}

        <span className="text-xs uppercase tracking-widest text-slate-500">
          {post.category}
        </span>

        {/* title */}

        <h1 className="text-4xl sm:text-5xl md:text-7xl tracking-tighter leading-[1.05] mt-3 mb-6 md:mb-8">
          {post.title}
        </h1>

        {/* meta */}

        <div className="flex gap-3 text-xs sm:text-sm text-slate-500 mb-8 md:mb-12">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        {/* hero image */}

        <img
          src={post.image}
          alt={post.title}
          className="w-full rounded-2xl md:rounded-4xl mb-10 md:mb-16"
        />

        {/* article */}

        <article className="prose prose-base md:prose-lg max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;
