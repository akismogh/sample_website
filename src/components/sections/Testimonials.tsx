import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Thanks to UPWIZZ, our UX has improved and our sales have increased!",
    author: "Amy Tonners",
    position: "Service Strategy Lead"
  },
  {
    id: 2,
    content: "They are reliable and respond quickly. Excellent creative work and delivery.",
    author: "Connie Saito",
    position: "Marketing Director"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">TESTIMONIALS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-gray-800 rounded-xl p-6 relative shadow-lg hover:shadow-pink-500/10 transition-all duration-300"
            >
              <div className="absolute -top-4 -left-4 text-pink-500 bg-gray-900 rounded-full p-2">
                <Quote size={24} />
              </div>
              <blockquote className="text-lg mt-6 mb-4">{testimonial.content}</blockquote>
              <div className="flex items-center">
                <div className="w-12 h-1 bg-pink-500 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;