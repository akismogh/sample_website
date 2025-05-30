import React from 'react';
import Button from '../ui/Button';
import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-xl font-bold mb-4">UPWIZZ</h4>
            <p className="text-gray-400 mb-4">Accelerating your digital experience.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-pink-500 transition-colors">Services</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-pink-500 transition-colors">Projects</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-pink-500 transition-colors">Team</a></li>
              <li><a href="#news" className="text-gray-400 hover:text-pink-500 transition-colors">News</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <p className="text-gray-400 mb-2">info@upwizz.com</p>
            <p className="text-gray-400">Tokyo, Japan</p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Newsletter</h4>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <Button variant="accent" size="small">Subscribe</Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-center">© 2025 UPWIZZ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;