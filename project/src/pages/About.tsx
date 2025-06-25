import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12 md:py-20">
      <div className="text-center animate-fade-in">
        <div className="mb-12">
          <div className="w-32 h-32 bg-gradient-to-br from-primary-200 to-accent-100 rounded-full mx-auto mb-8 opacity-60"></div>
          
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-primary-800 mb-4 italic">
            About This Space
          </h1>
        </div>

        <div className="space-y-8 text-lg leading-relaxed text-primary-700 animate-slide-up">
          <p>
            Welcome to a quiet corner of the internet, where words are chosen carefully 
            and thoughts are allowed to breathe. This digital atelier serves as a sanctuary 
            for reflections on simplicity, beauty, and the art of intentional living.
          </p>

          <p>
            Inspired by the Japanese philosophy of Danshari—the practice of refusing, 
            disposing, and separating from excess—this space embraces minimalism not as 
            deprivation, but as a path to clarity and purpose.
          </p>

          <p className="italic">
            Here, we believe that in choosing less, we somehow receive more.
          </p>
        </div>

        <div className="mt-16 pt-12 border-t border-primary-200">
          <h2 className="font-serif text-2xl font-medium text-primary-800 mb-6">
            Our Contributors
          </h2>
          
          <div className="space-y-6 text-primary-600">
            <div>
              <h3 className="font-medium text-lg text-primary-800">Marie Dubois</h3>
              <p className="italic">Writer & Minimalism Advocate</p>
            </div>
            
            <div>
              <h3 className="font-medium text-lg text-primary-800">Jean-Claude Moreau</h3>
              <p className="italic">Typography Enthusiast & Design Philosopher</p>
            </div>
            
            <div>
              <h3 className="font-medium text-lg text-primary-800">Elena Rodriguez</h3>
              <p className="italic">Digital Wellness Researcher</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;