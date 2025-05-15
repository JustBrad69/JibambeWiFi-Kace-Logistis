import React from 'react';
import { Clock, Users, Wifi } from 'lucide-react';

interface PackageProps {
  packageData: {
    id: number;
    name: string;
    price: number;
    duration: string;
    devices: number;
    highlight: boolean;
  };
}

const PackageCard: React.FC<PackageProps> = ({ packageData }) => {
  const { name, price, duration, devices, highlight } = packageData;
  
  return (
    <div className={`rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all bg-white border ${highlight ? 'border-[#000080]' : 'border-gray-200'}`}>
      <div className={`p-4 ${highlight ? 'bg-[#000080]' : 'bg-[#000080]'} text-white`}>
        <h3 className="text-xl font-bold text-center">{name}</h3>
      </div>
      
      <div className="p-6">
        <div className="flex justify-center mb-4">
          <div className="flex items-start">
            <span className="text-gray-500 text-lg mt-1">Ksh</span>
            <span className="text-[#89CFF0] text-5xl font-bold">{price}</span>
          </div>
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-[#000080] mr-2" />
            <span className="text-gray-700">{duration}</span>
          </div>
          
          <div className="flex items-center">
            <Users className="h-5 w-5 text-[#000080] mr-2" />
            <span className="text-gray-700">{devices} {devices > 1 ? 'Devices' : 'Device'}</span>
          </div>
        </div>
        
        <a 
          href="#contact"
          className="block w-full py-2 rounded-full font-semibold bg-[#000080] hover:bg-[#000060] text-white transition-colors text-center"
        >
          GET STARTED
        </a>
      </div>
    </div>
  );
};

export default PackageCard;