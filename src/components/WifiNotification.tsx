import React, { useState, useEffect } from 'react';
import { Wifi } from 'lucide-react';

const WifiNotification = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show notification after a delay for better UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Auto-hide after some time
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleClick = () => {
    window.location.href = '#packages';
    setIsVisible(false);
  };

  return (
    <div 
      onClick={handleClick}
      className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 cursor-pointer ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}
    >
      <div className="bg-gray-900 text-white rounded-lg shadow-lg p-4 max-w-xs w-full hover:bg-gray-800">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mr-3">
            <Wifi className="h-5 w-5 text-blue-400" />
          </div>
          <div>
            <h4 className="font-medium text-sm text-gray-300">Sign in to a Wi-Fi network</h4>
            <p className="font-semibold">Jibambe Wifi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WifiNotification;