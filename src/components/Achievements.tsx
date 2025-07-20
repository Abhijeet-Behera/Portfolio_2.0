import React from 'react';
import { achievements } from '../data/achievements';

interface AchievementsProps {
  darkMode?: boolean;
}

const Achievements: React.FC<AchievementsProps> = ({ darkMode }) => {
  return (
    <section id="achievements" className={`py-20 transition-colors duration-300 ${
      darkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-black'
          }`}>Achievements & Experience</h2>
          <div className={`w-20 h-1 mx-auto mb-4 transition-colors duration-300 ${
            darkMode ? 'bg-white' : 'bg-black'
          }`}></div>
          <p className={`max-w-2xl mx-auto transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A timeline of my professional journey, accomplishments, and significant milestones.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 transition-colors duration-300 ${
              darkMode ? 'bg-gray-600' : 'bg-gray-300'
            }`}></div>
            
            {/* Timeline items */}
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`relative z-10 flex flex-col md:flex-row items-start mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 transition-colors duration-300 ${
                  darkMode 
                    ? 'bg-white border-gray-800' 
                    : 'bg-black border-white'
                }`}></div>
                
                {/* Content */}
                <div className={`pl-8 md:pl-0 w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                }`}>
                  <div className={`p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${
                    darkMode ? 'bg-gray-700' : 'bg-white'
                  }`}>
                    <span className={`inline-block px-3 py-1 mb-4 text-sm font-medium rounded transition-colors duration-300 ${
                      darkMode 
                        ? 'bg-gray-600 text-gray-200' 
                        : 'bg-gray-200 text-gray-700'
                    }`}>
                      {achievement.year}
                    </span>
                    <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                      darkMode ? 'text-white' : 'text-black'
                    }`}>{achievement.title}</h3>
                    <p className={`transition-colors duration-300 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;