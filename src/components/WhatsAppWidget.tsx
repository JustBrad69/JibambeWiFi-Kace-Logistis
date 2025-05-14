import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/254707374749`, '_blank');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-3 w-72 border border-gray-200 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="bg-green-500 rounded-full p-2 mr-2">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-semibold">Chat with Us</h3>
            </div>
            <button 
              onClick={toggleWidget}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <p className="text-gray-600 text-sm mb-4">
            Have questions about Jibambe Wifi? Chat with our support team on WhatsApp.
          </p>
          
          <button
            onClick={openWhatsApp}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg flex items-center justify-center"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Start Chat
          </button>
        </div>
      )}
      
      <button
        onClick={toggleWidget}
        className={`bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all transform hover:scale-105 ${isOpen ? 'rotate-90' : ''}`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default WhatsAppWidget;