import React from 'react';
import { WifiIcon, Clock, Smartphone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 md:py-24">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Fast & Affordable <span className="text-blue-200">Internet</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl opacity-90">
            Connect with Jibambe Wifi for reliable internet access at competitive prices
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center transition-transform hover:scale-105">
              <WifiIcon className="h-10 w-10 mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">Fast Connection</h3>
              <p className="text-sm opacity-80">Reliable speeds for browsing, streaming and downloads</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center transition-transform hover:scale-105">
              <Clock className="h-10 w-10 mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">Flexible Plans</h3>
              <p className="text-sm opacity-80">From hourly to monthly packages to suit your needs</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center transition-transform hover:scale-105">
              <Smartphone className="h-10 w-10 mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">Multi-Device</h3>
              <p className="text-sm opacity-80">Connect multiple devices with our family packages</p>
            </div>
          </div>
          
          <a 
            href="#packages" 
            className="mt-10 bg-blue-200 hover:bg-blue-300 text-blue-900 font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg inline-block"
          >
            View Packages
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;