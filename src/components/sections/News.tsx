import React from 'react';
import Card from '../ui/Card';

const newsArticles = [
  {
    id: 1,
    title: 'The Power of Grid Design',
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'May 10, 2024'
  },
  {
    id: 2,
    title: 'New Digital Studio Launch',
    image: 'https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'May 5, 2024'
  },
  {
    id: 3,
    title: 'Creative Trends 2025',
    image: 'https://images.pexels.com/photos/7047432/pexels-photo-7047432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'April 28, 2024'
  }
];

const News: React.FC = () => {
  return (
    <section id="news" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title">LATEST NEWS</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <a 
              key={article.id} 
              href="#" 
              className="block group"
            >
              <Card className="h-full">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <p className="text-pink-400 text-sm mb-2">{article.date}</p>
                <h3 className="text-xl font-semibold group-hover:text-pink-500 transition-colors">
                  {article.title}
                </h3>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;