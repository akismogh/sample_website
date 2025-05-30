import React from 'react';

const clientLogos = [
  { id: 1, name: 'Microsoft' },
  { id: 2, name: 'Google' },
  { id: 3, name: 'Apple' },
  { id: 4, name: 'Amazon' },
  { id: 5, name: 'Meta' }
];

const Clients: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">CLIENTS</h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clientLogos.map((client) => (
            <div 
              key={client.id}
              className="text-2xl md:text-3xl font-bold text-gray-500 hover:text-pink-500 transition-colors duration-300"
            >
              {client.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;