import React from 'react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
          alt="Team working together" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
      </div>
      
      <div className="container mx-auto relative z-10 px-4 text-center md:text-left md:max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white animate-fade-in">
          CREATIVE<br />SOLUTIONS
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay">
          Accelerating digital experiences for global clients
        </p>
        <div className="animate-fade-in-delay-2">
          <Button variant="primary" size="large">
            Download Brochure
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;