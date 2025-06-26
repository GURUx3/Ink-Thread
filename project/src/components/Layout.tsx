import { Feather } from 'lucide-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isWelcomePage = location.pathname === '/';

  const navItems = [
    { path: '/posts', label: 'Posts' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    {path : "/create" , label : "Create Post" , isCTA: true}
  ];

  if (isWelcomePage) {
    return <main>{children}</main>;
  }

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-primary-50/80 border-b border-primary-200/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/posts"
              className="flex items-center space-x-3 group transition-all duration-300"
            >
              <Feather className="w-6 h-6 text-accent-400 group-hover:text-accent-500 transition-colors duration-300" />
              <span className="font-serif text-xl font-medium text-primary-800 group-hover:text-accent-500 transition-colors duration-300">
                Ink-Thread
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
             {navItems.map((item) => (
  <Link
    key={item.path}
    to={item.path}
    className={`relative transition-all duration-300 ${
      item.isCTA
        ? 'px-4 py-2 rounded-md bg-accent-100 text-accent-600 hover:bg-accent-200 font-semibold'
        : location.pathname === item.path
        ? 'text-accent-500 font-medium'
        : 'text-primary-700 hover:text-accent-400 font-medium'
    }`}
  >
    {item.label}
    {!item.isCTA && location.pathname === item.path && (
      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent-400 rounded-full" />
    )}
  </Link>
))}

            </div>

            <div className="md:hidden">
              <button className="text-primary-700 hover:text-accent-400 transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>{children}</main>
    </div>
  );
};

export default Layout;