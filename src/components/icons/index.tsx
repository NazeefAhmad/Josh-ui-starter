
import React from 'react';
import { Facebook, Twitter, Linkedin, MapPin, Phone, Mail, Play } from 'lucide-react';

export const SocialIcons = {
  Twitter: <Twitter className="w-5 h-5" />,
  Facebook: <Facebook className="w-5 h-5" />,
  LinkedIn: <Linkedin className="w-5 h-5" />,
};

export const ContactIcons = {
  Location: <MapPin className="w-5 h-5" />,
  Phone: <Phone className="w-5 h-5" />,
  Email: <Mail className="w-5 h-5" />,
};

export const FeatureIcons = {
  TypeFeature: (
    <div className="flex items-center space-x-1">
      <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
      <div className="w-6 h-6 bg-blue-500 rounded"></div>
    </div>
  ),
  DesignData: (
    <div className="w-8 h-8 text-blue-500">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3l18 18M10.5 10.5L3 18M21 3l-7.5 7.5"/>
      </svg>
    </div>
  ),
  FastAction: (
    <div className="w-8 h-8 text-blue-500">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"/>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
        <path d="M2 2l7.586 7.586"/>
        <circle cx="11" cy="11" r="2"/>
      </svg>
    </div>
  ),
  PlayButton: (
    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
      <Play className="w-8 h-8 text-white" />
    </div>
  ),
};

export const CompanyLogos = {
  IBM: "/lovable-uploads/96e87d75-0808-4c9a-af84-39d341f87125.png",
  Google: "/lovable-uploads/dd373d9b-4e89-44e3-b436-7a61bd3140e5.png",
  Amazon: "/lovable-uploads/1d8cb330-f23b-4afc-9216-06736497c53f.png",
  Microsoft: "/lovable-uploads/33652b12-142d-4b18-a02b-893c15d9b0eb.png",
  Uber: "/lovable-uploads/288c5619-cdee-422b-91ee-7bebac039125.png", 
  Dropbox: "/lovable-uploads/ce47b649-23b2-4d7c-90ac-552ff2124fb9.png",
  Figma: "/lovable-uploads/b18b7b46-c24d-402d-bcba-0271661acdbb.png",
  Woman: "/lovable-uploads/77ec9ce3-d00f-4242-bb6f-3edcb1402f87.png",
  Map: "/lovable-uploads/2a6a2aeb-5b58-43f6-9d0e-3e1d199d63d5.png",
};
