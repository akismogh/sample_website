import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'accent' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick,
  className = ''
}) => {
  const baseClasses = 'inline-block rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 transform hover:scale-105';
  
  const variantClasses = {
    primary: 'bg-pink-500 hover:bg-pink-600 text-white focus:ring-pink-500',
    accent: 'bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500',
    outline: 'bg-transparent border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white focus:ring-pink-500'
  };
  
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-5 py-2',
    large: 'px-6 py-3'
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;