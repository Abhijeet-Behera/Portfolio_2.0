import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? darkMode 
            ? 'bg-gray-900/95 backdrop-blur-md shadow-md py-2' 
            : 'bg-white/95 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container px-4 mx-auto flex justify-between items-center">
        <a href="#hero" className={`text-2xl font-bold tracking-tighter transition-colors ${
          darkMode ? 'text-white' : 'text-black'
        }`}>
          Port<span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>folio</span>
        </a>
        
        <div className="flex items-center gap-4">
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {['About', 'Projects', 'Skills', 'Achievements', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className={`transition-colors duration-300 text-sm uppercase tracking-wide font-medium ${
                      darkMode 
                        ? 'text-gray-300 hover:text-white' 
                        : 'text-gray-700 hover:text-black'
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors duration-300 ${
              darkMode 
                ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        
        <button 
          className={`md:hidden focus:outline-none ${
            darkMode ? 'text-white' : 'text-black'
          }`}
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full shadow-md backdrop-blur-md ${
          darkMode ? 'bg-gray-900/95' : 'bg-white/95'
        }`}>
          <ul className="flex flex-col py-4">
            {['About', 'Projects', 'Skills', 'Achievements', 'Contact'].map((item) => (
              <li key={item} className="border-b border-gray-100 last:border-0">
                <a 
                  href={`#${item.toLowerCase()}`}
                  className={`block py-3 px-4 transition-colors duration-300 uppercase tracking-wide text-sm font-medium ${
                    darkMode 
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-gray-700 hover:text-black'
                  }`}
                  onClick={toggleMenu}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;