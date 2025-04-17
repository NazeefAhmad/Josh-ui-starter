
import React, { useState } from 'react';

interface TestimonialProps {
  quote: string;
  image: string;
  name: string;
  title: string;
}

interface TestimonialSectionProps {
  testimonials: TestimonialProps[];
  companyLogo: string;
}

const Testimonial: React.FC<TestimonialSectionProps> = ({ testimonials, companyLogo }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-4">Testimonials</h2>
      
      <div className="flex justify-center mb-12">
        <img src={companyLogo} alt="Company logo" className="h-16" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-xl text-gray-700">
          {testimonials[activeIndex].quote}
        </p>
      </div>
      
      <div className="flex flex-col items-center">
        <img 
          src={testimonials[activeIndex].image} 
          alt={testimonials[activeIndex].name} 
          className="w-16 h-16 rounded-full object-cover mb-4" 
        />
        <h4 className="font-bold">{testimonials[activeIndex].name}</h4>
        <p className="text-gray-600">{testimonials[activeIndex].title}</p>
      </div>
      
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`View testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
