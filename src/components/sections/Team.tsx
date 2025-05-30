import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: 'John Smith',
    position: 'Creative Director',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Emily Parker',
    position: 'UI Designer',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Michael Chen',
    position: 'Consultant',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">OUR TEAM</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="flex flex-col items-center"
            >
              <div className="relative mb-4 w-48 h-48 rounded-full overflow-hidden border-4 border-pink-500 transform transition-transform duration-500 hover:scale-105 hover:rotate-3">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-pink-400">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;