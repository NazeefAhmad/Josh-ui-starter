
import React from 'react';
import Button from './Button';

const ContactForm: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <h3 className="text-xl font-semibold mb-6 text-center">Contact Us</h3>
      
      <form className="space-y-6">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-full bg-gray-100 border-0"
          />
        </div>
        
        <div>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-full bg-gray-100 border-0"
          />
        </div>
        
        <div>
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-3xl bg-gray-100 border-0 min-h-[150px]"
          />
        </div>
        
        <div className="pt-2">
          <Button className="w-full">Send</Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
