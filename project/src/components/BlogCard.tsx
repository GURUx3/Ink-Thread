import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../data/posts';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="group cursor-pointer">
      <Link to={`/post/${post.id}`} className="block">
        <div className="space-y-4 p-6 rounded-lg transition-all duration-500 hover:bg-white/40 hover:shadow-lg">
          <div className="space-y-2">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-primary-800 group-hover:text-accent-500 transition-colors duration-300 leading-tight">
              {post.title}
            </h2>
            
            <div className="flex items-center space-x-4 text-sm text-primary-600">
              <span className="font-medium">{post.author}</span>
              <span className="w-1 h-1 bg-primary-400 rounded-full"></span>
              <span>{post.date}</span>
              <span className="w-1 h-1 bg-primary-400 rounded-full"></span>
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <p className="text-primary-700 leading-relaxed text-lg">
            {post.excerpt}
          </p>
          
          <div className="pt-2">
            <span className="text-accent-400 font-medium group-hover:text-accent-500 transition-colors duration-300">
              Read more
              <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;