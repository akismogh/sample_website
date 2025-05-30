import React from 'react';
import Button from '../ui/Button';

const CtaBanner: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-600 to-indigo-700 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
          Contact us to discuss how we can enhance your digital experience.
        </p>
        <Button variant="primary" size="large">
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default CtaBanner;