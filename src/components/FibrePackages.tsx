import React from 'react';
import { Clock, Users, Download } from 'lucide-react';
import PackageCard from './PackageCard';

const FibrePackages = () => {
  const fibrePackages = [
    {
      id: 1,
      name: 'PPPOE 5Mbps',
      price: 1500,
      duration: '30 Days',
      devices: 'Unlimited devices',
      highlight: false,
    },
    {
      id: 2,
      name: 'PPPOE 8Mbps',
      price: 2000,
      duration: '30 Days',
      devices: 'Unlimited devices',
      highlight: false,
    },
    {
      id: 3,
      name: 'PPPOE 10Mbps',
      price: 2500,
      duration: '30 Days',
      devices: 'Unlimited devices',
      highlight: true,
    },
    {
      id: 4,
      name: 'PPPOE 15Mbps',
      price: 3000,
      duration: '30 Days',
      devices: 'Unlimited devices',
      highlight: false,
    },
    {
      id: 5,
      name: 'PPPOE 20Mbps',
      price: 4500,
      duration: '30 Days',
      devices: 'Unlimited devices',
      highlight: true,
    },
    {
      id: 6,
      name: 'PPPOE 30Mbps',
      price: 6000,
      duration: '30 Days',
      devices: 'Unlimited devices',
      highlight: false,
    },
    {
      id: 7,
      name: 'PPPOE 40Mbps',
      price: 7500,
      duration: '30 Days',
      devices: 'Unlimited devices',
      highlight: false,
    },
    {
      id: 8,
      name: 'PPPOE 50Mbps',
      price: 10000,
      duration: '30 Days',
      devices: 'Unlimited devices',
      highlight: true,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#000080] mb-2">Jibambe Fibre</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience lightning-fast fibre internet with unlimited devices. Perfect for homes and businesses that demand high-speed connectivity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {fibrePackages.map((pkg) => (
            <PackageCard key={pkg.id} packageData={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FibrePackages;
