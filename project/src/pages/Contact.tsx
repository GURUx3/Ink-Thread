import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-12 md:py-20">
        <div className="text-center animate-fade-in">
          <div className="w-16 h-16 bg-accent-400 rounded-full flex items-center justify-center mx-auto mb-8">
            <Send className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="font-serif text-4xl font-medium text-primary-800 mb-4 italic">
            Message Sent
          </h1>
          
          <p className="text-lg text-primary-600 mb-8 leading-relaxed">
            Thank you for reaching out. Your thoughts have been received, 
            and we'll respond thoughtfully in due time.
          </p>
          
          <button 
            onClick={() => setIsSubmitted(false)}
            className="text-accent-400 hover:text-accent-500 transition-colors duration-300 font-medium"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-12 md:py-20">
      <header className="text-center mb-12 animate-fade-in">
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-primary-800 mb-4 italic">
          Get in Touch
        </h1>
        <p className="text-lg text-primary-600 leading-relaxed">
          Share your thoughts, questions, or simply say hello. 
          Every message is read with care and intention.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-8 animate-slide-up">
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder=" "
            required
            className="ghost-input peer"
          />
          <label htmlFor="name" className="ghost-label peer-focus:-top-6 peer-focus:text-accent-500 peer-focus:text-xs peer-[&:not(:placeholder-shown)]:-top-6 peer-[&:not(:placeholder-shown)]:text-accent-500 peer-[&:not(:placeholder-shown)]:text-xs">
            Your Name
          </label>
        </div>

        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=" "
            required
            className="ghost-input peer"
          />
          <label htmlFor="email" className="ghost-label peer-focus:-top-6 peer-focus:text-accent-500 peer-focus:text-xs peer-[&:not(:placeholder-shown)]:-top-6 peer-[&:not(:placeholder-shown)]:text-accent-500 peer-[&:not(:placeholder-shown)]:text-xs">
            Email Address
          </label>
        </div>

        <div className="relative">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder=" "
            required
            rows={6}
            className="ghost-input peer resize-none"
          />
          <label htmlFor="message" className="ghost-label peer-focus:-top-6 peer-focus:text-accent-500 peer-focus:text-xs peer-[&:not(:placeholder-shown)]:-top-6 peer-[&:not(:placeholder-shown)]:text-accent-500 peer-[&:not(:placeholder-shown)]:text-xs">
            Your Message
          </label>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full glass-button flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-primary-400 border-t-transparent rounded-full animate-spin"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </div>
      </form>

      <div className="text-center mt-12 pt-8 border-t border-primary-200">
        <p className="text-primary-500 italic text-sm">
          We typically respond within 24-48 hours
        </p>
      </div>
    </div>
  );
};

export default Contact;