import { PenTool } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Welcome: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
      <div className="text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <div className="mb-8 animate-float">
          <PenTool className="w-16 h-16 text-accent-400 mx-auto mb-6" />
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-primary-800 mb-6 leading-tight">
          <span className="italic">Ink-Thread</span>
        </h1>

        <p className="text-xl md:text-2xl text-primary-600 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
          Thoughts worth holding
        </p>

        <div className="space-y-4">
          <Link
            to="/posts"
            className="glass-button inline-block font-medium tracking-wide"
          >
            Enter Blog
          </Link>

          <p className="text-primary-500 text-sm italic mt-6">
            A digital sanctuary for words
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;