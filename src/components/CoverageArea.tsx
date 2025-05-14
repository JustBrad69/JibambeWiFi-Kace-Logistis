import React from 'react';
import { MapPin } from 'lucide-react';

const CoverageArea = () => {
  const coverageAreas = [
    { id: 1, name: 'Dina Market', description: 'Full coverage throughout the market area' },
    { id: 2, name: 'Part of Cheboosi', description: 'Strong signal in central and southern areas' },
    { id: 3, name: 'T Junction', description: 'Complete coverage around the junction and nearby shops' },
    { id: 4, name: 'Site & Service Estate', description: 'Available throughout the residential area' },
  ];

  return (
    <section id="coverage" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Coverage Areas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Jibambe Wifi is available in these locations. Look for the Jibambe Wifi network on your device when in these areas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coverageAreas.map((area) => (
            <div 
              key={area.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all border border-gray-200"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900">{area.name}</h3>
              </div>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoverageArea;