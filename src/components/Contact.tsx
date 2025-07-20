import React, { useState } from 'react';
import { Github, Mail, Send } from 'lucide-react';

interface ContactProps {
  darkMode?: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className={`py-20 transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-black'
          }`}>Get In Touch</h2>
          <div className={`w-20 h-1 mx-auto mb-4 transition-colors duration-300 ${
            darkMode ? 'bg-white' : 'bg-black'
          }`}></div>
          <p className={`max-w-2xl mx-auto transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Interested in working together? Feel free to reach out for collaborations, 
            internship opportunities, or just to say hello!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-black'
            }`}>Contact Information</h3>
            <p className={`mb-8 transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm currently looking for internship and freelancing opportunities in UI/UX, 
              debugging, testing, and web design. Feel free to reach out if you have an 
              opportunity that matches my skills.
            </p>
            
            <div className="space-y-4 mb-8">
              <a 
                href="mailto:your.email@gmail.com" 
                className={`flex items-center gap-3 transition-colors ${
                  darkMode 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-700 hover:text-black'
                }`}
              >
                <div className={`p-3 rounded-full transition-colors duration-300 ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  <Mail size={20} />
                </div>
                <span>your.email@gmail.com</span>
              </a>
              
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-3 transition-colors ${
                  darkMode 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-700 hover:text-black'
                }`}
              >
                <div className={`p-3 rounded-full transition-colors duration-300 ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  <Github size={20} />
                </div>
                <span>github.com/yourusername</span>
              </a>
            </div>
            
            <p className={`transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Response time: <span className="font-medium">within 24 hours</span>
            </p>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className={`block mb-2 text-sm font-medium transition-colors duration-300 ${
                  darkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white focus:ring-white' 
                      : 'bg-white border-gray-300 text-black focus:ring-black'
                  }`}
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className={`block mb-2 text-sm font-medium transition-colors duration-300 ${
                  darkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white focus:ring-white' 
                      : 'bg-white border-gray-300 text-black focus:ring-black'
                  }`}
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className={`block mb-2 text-sm font-medium transition-colors duration-300 ${
                  darkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white focus:ring-white' 
                      : 'bg-white border-gray-300 text-black focus:ring-black'
                  }`}
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  darkMode 
                    ? 'bg-white text-black hover:bg-gray-200 focus:ring-white' 
                    : 'bg-black text-white hover:bg-gray-800 focus:ring-black'
                }`}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
              
              {submitSuccess && (
                <div className="mt-4 p-3 bg-green-50 text-green-800 rounded-md">
                  Your message has been sent successfully. I'll get back to you soon!
                </div>
              )}
              
              {submitError && (
                <div className="mt-4 p-3 bg-red-50 text-red-800 rounded-md">
                  There was an error sending your message. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;