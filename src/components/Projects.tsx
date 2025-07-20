import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

interface ProjectsProps {
  darkMode?: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className={`py-20 transition-colors duration-300 ${
      darkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-black'
          }`}>Projects</h2>
          <div className={`w-20 h-1 mx-auto mb-4 transition-colors duration-300 ${
            darkMode ? 'bg-white' : 'bg-black'
          }`}></div>
          <p className={`max-w-2xl mx-auto transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A selection of my recent work and personal projects that showcase my skills in UI/UX design, 
            front-end and back-end development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`group rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              }`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                  hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <a 
                    href={project.link || '#'} 
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="View project"
                  >
                    <ExternalLink size={20} className="text-black" />
                  </a>
                  <a 
                    href="#" 
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="View code on GitHub"
                  >
                    <Github size={20} className="text-black" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-black'
                }`}>{project.title}</h3>
                <p className={`mb-4 transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className={`text-xs px-2 py-1 rounded transition-colors duration-300 ${
                        darkMode 
                          ? 'bg-gray-600 text-gray-200' 
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;