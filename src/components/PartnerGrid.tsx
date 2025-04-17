
import React from 'react';

interface PartnerProps {
  name: string;
  logo: string;
}

interface PartnerGridProps {
  partners: PartnerProps[];
}

const PartnerGrid: React.FC<PartnerGridProps> = ({ partners }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {partners.map((partner, index) => (
        <div key={index} className="flex flex-col items-center justify-center p-6 bg-white border border-gray-100 rounded-sm">
          <p className="text-sm text-gray-500 mb-2">Client Name</p>
          <img 
            src={partner.logo} 
            alt={partner.name} 
            className="h-10 object-contain" 
          />
        </div>
      ))}
    </div>
  );
};

export default PartnerGrid;
