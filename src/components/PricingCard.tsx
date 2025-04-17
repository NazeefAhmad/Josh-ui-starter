
import React from 'react';
import Button from './Button';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
  buttonVariant?: 'primary' | 'white';
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  isPopular = false,
  buttonText = 'Order Now',
  buttonVariant = 'primary',
}) => {
  return (
    <div 
      className={cn(
        'rounded-lg shadow-md overflow-hidden', 
        isPopular ? 'bg-blue-500 text-white' : 'bg-white'
      )}
    >
      <div className="px-8 pt-8 pb-12 flex flex-col items-center">
        <h3 className="text-xl font-bold uppercase mb-2">{title}</h3>
        <p className="text-center text-sm mb-6">{description}</p>
        
        <div className="flex items-end mb-8">
          <span className="text-2xl mr-1">$</span>
          <span className="text-7xl font-bold">{price}</span>
          <div className="flex flex-col items-start ml-1 mb-1">
            <span className="text-sm">Per Month</span>
          </div>
        </div>
        
        <div className="w-full mb-8">
          {features.map((feature, index) => (
            <div key={index} className="py-3 text-center">
              {feature}
            </div>
          ))}
        </div>
        
        <Button 
          variant={isPopular ? 'white' : 'primary'} 
          className="w-full"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
