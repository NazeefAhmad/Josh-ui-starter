
import React from 'react';
import { SocialIcons, ContactIcons } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Pages</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="#" className="hover:text-blue-400">Features</a></li>
              <li><a href="#" className="hover:text-blue-400">Partners</a></li>
              <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Tomothy</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-400">Eleanor Edwards</a></li>
              <li><a href="#" className="hover:text-blue-400">Ted Robertson</a></li>
              <li><a href="#" className="hover:text-blue-400">Annette Russell</a></li>
              <li><a href="#" className="hover:text-blue-400">Jennie Mckinney</a></li>
              <li><a href="#" className="hover:text-blue-400">Gloria Richards</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Jane Black</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-400">Philip Jones</a></li>
              <li><a href="#" className="hover:text-blue-400">Product</a></li>
              <li><a href="#" className="hover:text-blue-400">Colleen Russell</a></li>
              <li><a href="#" className="hover:text-blue-400">Marvin Hawkins</a></li>
              <li><a href="#" className="hover:text-blue-400">Bruce Simmons</a></li>
            </ul>
          </div>
          
          <div>
            <div className="flex items-center mb-4">
              {ContactIcons.Location}
              <span className="ml-2">7480 Mistwood Hollo</span>
            </div>
            
            <div className="flex items-center mb-6">
              {ContactIcons.Phone}
              <span className="ml-2">(239) 555-0108</span>
            </div>
            
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-blue-400">{SocialIcons.Twitter}</a>
              <a href="#" className="hover:text-blue-400">{SocialIcons.Facebook}</a>
              <a href="#" className="hover:text-blue-400">{SocialIcons.LinkedIn}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
