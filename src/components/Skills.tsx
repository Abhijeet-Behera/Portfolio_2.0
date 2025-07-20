import React from 'react';
import { skillCategories } from '../data/skills';

interface SkillsProps {
  darkMode?: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  return (
    <section id="skills" className={`py-20 transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-black'
          }`}>Skills</h2>
          <div className={`w-20 h-1 mx-auto mb-4 transition-colors duration-300 ${
            darkMode ? 'bg-white' : 'bg-black'
          }`}></div>
          <p className={`max-w-2xl mx-auto transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            My technical skills and areas of expertise across various technologies, 
            frameworks, and programming languages.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className={`p-6 rounded-lg transition-colors duration-300 ${
              darkMode ? 'bg-gray-800' : 'bg-gray-50'
            }`}>
              <h3 className={`text-xl font-bold mb-6 transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-black'
              }`}>{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className={`font-medium transition-colors duration-300 ${
                        darkMode ? 'text-gray-200' : 'text-gray-700'
                      }`}>{skill.name}</span>
                      <span className={`text-sm transition-colors duration-300 ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {skill.level === 1 && "Beginner"}
                        {skill.level === 2 && "Elementary"}
                        {skill.level === 3 && "Intermediate"}
                        {skill.level === 4 && "Advanced"}
                        {skill.level === 5 && "Expert"}
                      </span>
                    </div>
                    <div className={`w-full rounded-full h-2 transition-colors duration-300 ${
                      darkMode ? 'bg-gray-600' : 'bg-gray-200'
                    }`}>
                      <div 
                        className={`h-2 rounded-full transition-all duration-700 ease-in-out ${
                          darkMode ? 'bg-white' : 'bg-black'
                        }`}
                        style={{width: `${skill.level * 20}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;