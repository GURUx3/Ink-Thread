import React from 'react';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/posts';

const BlogHome: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <header className="text-center mb-16 animate-fade-in">
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-primary-800 mb-4 italic">
          Recent Writings
        </h1>
        <p className="text-primary-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Reflections on simplicity, beauty, and the art of intentional living
        </p>
      </header>

      <div className="space-y-12 md:space-y-16">
        {blogPosts.map((post, index) => (
          <div 
            key={post.id} 
            className="animate-slide-up"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <BlogCard post={post} />
          </div>
        ))}
      </div>

      <div className="text-center mt-20 pt-12 border-t border-primary-200">
        <p className="text-primary-500 italic">
          More thoughts coming soon...
        </p>
      </div>
    </div>
  );
};

export default BlogHome;