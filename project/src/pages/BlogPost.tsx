import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/posts';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/posts" replace />;
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-12 md:py-20">
      <div className="mb-8 animate-fade-in">
        <Link 
          to="/posts"
          className="inline-flex items-center text-primary-600 hover:text-accent-400 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span className="font-medium">Back to posts</span>
        </Link>
      </div>

      <header className="mb-12 animate-slide-up">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-primary-800 mb-6 leading-tight">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-primary-600 mb-8">
          <span className="font-medium text-lg">{post.author}</span>
          <span className="w-1 h-1 bg-primary-400 rounded-full"></span>
          <span>{post.date}</span>
          <span className="w-1 h-1 bg-primary-400 rounded-full"></span>
          <span>{post.readTime}</span>
        </div>
      </header>

      <div className="prose prose-lg max-w-none animate-slide-up" style={{ animationDelay: '0.2s' }}>
        {post.content.split('\n\n').map((paragraph, index) => (
          <p 
            key={index} 
            className="text-primary-700 leading-relaxed mb-8 text-lg md:text-xl"
            style={{ 
              lineHeight: '1.8',
              animationDelay: `${0.3 + index * 0.1}s` 
            }}
          >
            {paragraph}
          </p>
        ))}
      </div>

      <footer className="mt-16 pt-12 border-t border-primary-200 animate-fade-in">
        <div className="text-center">
          <p className="text-primary-600 italic mb-4">
            Thank you for reading
          </p>
          <Link 
            to="/posts"
            className="inline-flex items-center text-accent-400 hover:text-accent-500 transition-colors duration-300 font-medium"
          >
            Explore more writings
            <span className="ml-2 transform hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
};

export default BlogPost;