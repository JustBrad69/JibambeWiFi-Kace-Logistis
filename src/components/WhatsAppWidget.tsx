import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Bot, Phone } from 'lucide-react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.onload = () => {
        window.voiceflow.chat.load({
          verify: { projectID: '673c6d77f98e49f3930cbe7c' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          voice: {
            url: "https://runtime-api.voiceflow.com"
          }
        });
      };
      script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

  const openWhatsApp = () => {
    window.open(`https://wa.me/254707374749`, '_blank');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-3 w-72 border border-gray-200 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="bg-blue-500 rounded-full p-2 mr-2">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-semibold">Chat Options</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="space-y-3">
            <button
              onClick={() => {
                const chatWidget = document.querySelector('.vfrc-launcher');
                if (chatWidget) {
                  (chatWidget as HTMLElement).click();
                }
                setIsOpen(false);
              }}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center"
            >
              <Bot className="h-5 w-5 mr-2" />
              Chat with AI Assistant
            </button>
            
            <button
              onClick={openWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Chat on WhatsApp
            </button>
          </div>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg transition-all transform hover:scale-105 ${isOpen ? 'rotate-90' : ''}`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default WhatsAppWidget;