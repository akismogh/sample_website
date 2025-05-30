import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Urban Architecture',
    category: 'Design'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Code Development',
    category: 'Technology'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Modern Workspace',
    category: 'Productivity'
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Technology Innovation',
    category: 'Research'
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/16129703/pexels-photo-16129703/free-photo-of-futuristic-keyboard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Gaming Experience',
    category: 'Entertainment'
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'AI Research',
    category: 'Technology'
  }
];

const Projects: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">CASE STUDIES</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="relative overflow-hidden rounded-xl aspect-video group"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent p-6 flex flex-col justify-end transition-opacity duration-300 ${
                hoveredId === project.id ? 'opacity-100' : 'opacity-0 sm:opacity-70'
              }`}>
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-pink-400">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;