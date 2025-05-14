import React from 'react';
import { Clock, Users, Wifi } from 'lucide-react';

interface PackageProps {
  packageData: {
    id: number;
    name: string;
    price: number;
    duration: string;
    appHours: string;
    devices: number;
    highlight: boolean;
    color: string;
  };
}

const PackageCard: React.FC<PackageProps> = ({ packageData }) => {
  const { name, price, duration, appHours, devices, highlight, color } = packageData;
  
  return (
    <div className={`rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all ${color} border ${highlight ? 'border-blue-900' : 'border-gray-200'}`}>
      <div className={`p-4 ${highlight ? 'bg-blue-900 text-white' : 'bg-gray-50'}`}>
        <h3 className="text-xl font-bold text-center">{name}</h3>
      </div>
      
      <div className="p-6">
        <div className="flex justify-center mb-4">
          <div className="flex items-start">
            <span className="text-gray-500 text-lg mt-1">Ksh</span>
            <span className="text-yellow-500 text-5xl font-bold">{price}</span>
          </div>
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-blue-900 mr-2" />
            <span className="text-gray-700">{duration}</span>
          </div>
          
          <div className="flex items-center">
            <Wifi className="h-5 w-5 text-blue-900 mr-2" />
            <span className="text-gray-700">Get <strong>{appHours}</strong> in App</span>
          </div>
          
          <div className="flex items-center">
            <Users className="h-5 w-5 text-blue-900 mr-2" />
            <span className="text-gray-700">{devices} {devices > 1 ? 'Devices' : 'Device'}</span>
          </div>
        </div>
        
        <button className={`w-full py-2 rounded-full font-semibold transition-colors ${
          highlight 
            ? 'bg-yellow-500 hover:bg-yellow-600 text-blue-900' 
            : 'bg-blue-900 hover:bg-blue-800 text-white'
        }`}>
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default PackageCard;