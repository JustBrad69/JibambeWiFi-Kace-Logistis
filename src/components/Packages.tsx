import React from 'react';
import { Clock, Users, Download } from 'lucide-react';
import PackageCard from './PackageCard';

const Packages = () => {
  const packages = [
    {
      id: 1,
      name: 'KUMI',
      price: 10,
      duration: '1 Hour',
      appHours: '1 HOUR',
      devices: 1,
      highlight: false,
      color: 'bg-gray-100',
    },
    {
      id: 2,
      name: 'MBAO',
      price: 20,
      duration: '2 Hours',
      appHours: '2.5 HOURS',
      devices: 1,
      highlight: false,
      color: 'bg-gray-100',
    },
    {
      id: 3,
      name: '8-HOUR',
      price: 50,
      duration: '8 Hours',
      appHours: '9 HOURS',
      devices: 1,
      highlight: false,
      color: 'bg-gray-100',
    },
    {
      id: 4,
      name: 'DAILY',
      price: 80,
      duration: '24 Hours',
      appHours: '26 HOURS',
      devices: 1,
      highlight: true,
      color: 'bg-blue-50',
    },
    {
      id: 5,
      name: 'DAILY DUO',
      price: 140,
      duration: '24 Hours',
      appHours: '26 HOURS',
      devices: 2,
      highlight: false,
      color: 'bg-gray-100',
    },
    {
      id: 6,
      name: 'WEEKLY SOLO',
      price: 280,
      duration: '7 Days',
      appHours: 'Unlimited',
      devices: 1,
      highlight: true,
      color: 'bg-blue-50',
    },
    {
      id: 7,
      name: 'WEEKLY DUO',
      price: 380,
      duration: '7 Days',
      appHours: 'Unlimited',
      devices: 2,
      highlight: false,
      color: 'bg-gray-100',
    },
    {
      id: 8,
      name: 'MONTHLY SOLO',
      price: 720,
      duration: '30 Days',
      appHours: 'Unlimited',
      devices: 1,
      highlight: true,
      color: 'bg-blue-50',
    },
    {
      id: 9,
      name: 'MONTHLY DUO',
      price: 1000,
      duration: '30 Days',
      appHours: 'Unlimited',
      devices: 2,
      highlight: false,
      color: 'bg-gray-100',
    },
    {
      id: 10,
      name: 'FAMILY x3',
      price: 1300,
      duration: '30 Days',
      appHours: 'Unlimited',
      devices: 3,
      highlight: false,
      color: 'bg-gray-100',
    },
    {
      id: 11,
      name: 'FAMILY x4',
      price: 1600,
      duration: '30 Days',
      appHours: 'Unlimited',
      devices: 4,
      highlight: false,
      color: 'bg-gray-100',
    },
    {
      id: 12,
      name: 'FAMILY x5',
      price: 1800,
      duration: '30 Days',
      appHours: 'Unlimited',
      devices: 5,
      highlight: false,
      color: 'bg-gray-100',
    },
    {
      id: 13,
      name: 'FAMILY x6',
      price: 2000,
      duration: '30 Days',
      appHours: 'Unlimited',
      devices: 6,
      highlight: false,
      color: 'bg-gray-100',
    },
    {
      id: 14,
      name: 'QUARTERLY DUO',
      price: 2700,
      duration: '90 Days',
      appHours: 'Unlimited',
      devices: 2,
      highlight: false,
      color: 'bg-gray-100',
    },
    {
      id: 15,
      name: 'QTRLY FAMILY x3',
      price: 3500,
      duration: '90 Days',
      appHours: 'Unlimited',
      devices: 3,
      highlight: false,
      color: 'bg-gray-100',
    },
    {
      id: 16,
      name: 'QTRLY FAMILY x4',
      price: 4200,
      duration: '90 Days',
      appHours: 'Unlimited',
      devices: 4,
      highlight: false,
      color: 'bg-gray-100',
    },
    {
      id: 17,
      name: 'QTRLY FAMILY x5',
      price: 4800,
      duration: '90 Days',
      appHours: 'Unlimited',
      devices: 5,
      highlight: false,
      color: 'bg-gray-100',
    },
    {
      id: 18,
      name: 'QTRLY FAMILY x6',
      price: 5300,
      duration: '90 Days',
      appHours: 'Unlimited',
      devices: 6,
      highlight: false,
      color: 'bg-gray-100',
    },
  ];

  return (
    <section id="packages" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Affordable Internet Packages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the package that suits your needs. From hourly access to family plans, we've got you covered.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-gray-700">Flexible durations</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-gray-700">Multiple device options</span>
            </div>
            <div className="flex items-center">
              <Download className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-gray-700">Unlimited browsing</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} packageData={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;