import React from 'react';
import { Github, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  darkMode?: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={`py-12 transition-colors duration-300 ${
      darkMode ? 'bg-black text-white' : 'bg-black text-white'
    }`}>
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">
              Port<span className={darkMode ? 'text-gray-500' : 'text-gray-400'}>folio</span>
            </h2>
            <p className={darkMode ? 'text-gray-500' : 'text-gray-400'}>
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
          
          <div className="flex gap-4 mb-6 md:mb-0">
            <a 
              href="mailto:your.email@gmail.com" 
              className={`p-3 rounded-full transition-colors ${
                darkMode 
                  ? 'bg-gray-700 hover:bg-gray-600' 
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-colors ${
                darkMode 
                  ? 'bg-gray-700 hover:bg-gray-600' 
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className={`p-3 rounded-full transition-colors focus:outline-none ${
              darkMode 
                ? 'bg-gray-700 hover:bg-gray-600' 
                : 'bg-gray-800 hover:bg-gray-700'
            }`}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;