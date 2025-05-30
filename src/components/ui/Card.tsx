import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface CardProps {
  icon?: LucideIcon;
  title?: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  image, 
  children,
  className = ''
}) => {
  return (
    <div className={`card ${className}`}>
      {Icon && (
        <div className="mb-4 text-pink-500">
          <Icon size={32} />
        </div>
      )}
      
      {image && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={title || 'Card image'} 
            className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      )}
      
      {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
      {description && <p className="text-gray-400">{description}</p>}
      {children}
    </div>
  );
};

export default Card;