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
    <div className="pt-32 pb-24 bg-(--color-bg-primary)">
      <div className="max-w-4xl mx-auto px-5">

        {/* category */}

        <span className="text-xs uppercase tracking-widest text-slate-500">
          {post.category}
        </span>

        {/* title */}

        <h1 className="text-5xl md:text-7xl tracking-tighter leading-none mt-4 mb-8">
          {post.title}
        </h1>

        {/* meta */}

        <div className="flex gap-4 text-sm text-slate-500 mb-12">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        {/* hero image */}

        <img
          src={post.image}
          alt={post.title}
          className="w-full rounded-4xl mb-16"
        />

        {/* article */}

        <article className="prose prose-lg max-w-none">
          <ReactMarkdown>
            {post.content}
          </ReactMarkdown>
        </article>

      </div>
    </div>
  );
};

export default BlogDetail;