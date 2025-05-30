import React from 'react';
import Button from '../ui/Button';
import { CalendarDays } from 'lucide-react';

const events = [
  {
    id: 1,
    date: 'May 22',
    title: 'Tokyo Design Week',
    location: 'Roppongi, Tokyo'
  },
  {
    id: 2,
    date: 'May 24',
    title: 'Web Summit 2024',
    location: 'Nakanoshima, Osaka'
  },
  {
    id: 3,
    date: 'May 27',
    title: 'Digital Future Expo',
    location: 'Hakata, Fukuoka'
  }
];

const Events: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title">UPCOMING EVENTS</h2>
        
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {events.map((event) => (
              <li 
                key={event.id} 
                className="bg-gray-800 rounded-lg p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between transform transition-all duration-300 hover:bg-gray-800/80 hover:shadow-lg hover:shadow-pink-500/5 hover:translate-x-1"
              >
                <div className="flex items-start md:items-center mb-4 md:mb-0">
                  <div className="text-pink-500 mr-4">
                    <CalendarDays size={24} />
                  </div>
                  <div>
                    <div className="text-pink-400 text-sm font-medium">{event.date}</div>
                    <h3 className="text-white text-lg font-semibold">{event.title}</h3>
                    <p className="text-gray-400 text-sm">{event.location}</p>
                  </div>
                </div>
                <Button variant="accent" size="small">Details</Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Events;