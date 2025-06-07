import React, { useState, useEffect } from 'react';
import { Activity, TrendingUp, TrendingDown, Wifi } from 'lucide-react';

const TrafficChecker = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [networkStats, setNetworkStats] = useState({
    users: Math.floor(Math.random() * 50) + 10,
    speed: Math.floor(Math.random() * 30) + 20,
    status: 'Good'
  });

  useEffect(() => {
    // Update network stats every 30 seconds
    const interval = setInterval(() => {
      setNetworkStats({
        users: Math.floor(Math.random() * 50) + 10,
        speed: Math.floor(Math.random() * 30) + 20,
        status: Math.random() > 0.3 ? 'Good' : 'Moderate'
      });
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Good':
        return 'text-green-600';
      case 'Moderate':
        return 'text-yellow-600';
      default:
        return 'text-red-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Good':
        return <TrendingUp className="h-4 w-4" />;
      case 'Moderate':
        return <Activity className="h-4 w-4" />;
      default:
        return <TrendingDown className="h-4 w-4" />;
    }
  };

  return (
    <>
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-32 right-5 z-40 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
        aria-label="Check Network Traffic"
      >
        <Activity className="h-6 w-6" />
      </button>

      {isVisible && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="traffic-modal-title"
        >
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div 
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
              onClick={() => setIsVisible(false)}
            >
              <div className="absolute inset-0 bg-gray-500 bg-opacity-75"></div>
            </div>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-blue-600 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Wifi className="h-6 w-6" />
                    <h2 id="traffic-modal-title" className="text-xl font-bold">Network Traffic</h2>
                  </div>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="text-white hover:text-gray-200 transition-colors p-2 rounded-full hover:bg-blue-700"
                    aria-label="Close modal"
                  >
                    ×
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Current Network Status</h3>
                    <div className={`inline-flex items-center space-x-2 ${getStatusColor(networkStats.status)}`}>
                      {getStatusIcon(networkStats.status)}
                      <span className="font-medium">{networkStats.status}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">{networkStats.users}</div>
                      <div className="text-sm text-gray-600">Active Users</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">{networkStats.speed} Mbps</div>
                      <div className="text-sm text-gray-600">Avg Speed</div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Network Information</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Coverage: Dina Market & surrounding areas</li>
                      <li>• Peak hours: 6 PM - 10 PM</li>
                      <li>• Best performance: Early morning & afternoon</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TrafficChecker;