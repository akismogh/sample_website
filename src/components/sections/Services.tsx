import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Map, Brain, Film, ShoppingCart, Layers, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Map,
    title: 'Digital Strategy',
    description: 'We develop strategic plans using digital tools for business acceleration.'
  },
  {
    icon: Brain,
    title: 'Web Design',
    description: 'UI/UX designs for customer-first digital experiences.'
  },
  {
    icon: Film,
    title: 'Visual Media',
    description: 'Creative production for branding, commercials, and interactive content.'
  },
  {
    icon: ShoppingCart,
    title: 'eCommerce',
    description: 'Integrated marketing and development support for online stores.'
  },
  {
    icon: Layers,
    title: 'Content Creation',
    description: 'Planning and producing quality content for various platforms.'
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Advertising, SEO, and social media strategies to improve conversions.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">OUR SERVICES</h2>
        <p className="section-subtitle">
          We provide digital strategies and creative services to solve business challenges.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="transform transition-all duration-300 hover:translate-y-[-5px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="primary">Download Service Guide</Button>
        </div>
      </div>
    </section>
  );
};

export default Services;