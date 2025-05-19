import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

declare global {
  interface Window {
    voiceflow: {
      chat: {
        load: (config: {
          verify: { projectID: string };
          url: string;
          versionID: string;
          voice: { url: string };
        }) => void;
      };
    };
  }
}

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
    }
  }, [isOpen]);

  const openWhatsApp = () => {
    window.open(`https://wa.me/254707374749`, '_blank');
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-5 z-50 flex flex-col gap-3">
          <div 
            className="bg-white rounded-lg shadow-lg p-4 animate-fade-in cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => {
              const chatWidget = document.querySelector('.vfrc-launcher');
              if (chatWidget) {
                (chatWidget as HTMLElement).click();
              }
            }}
          >
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
          </div>
          
          <div 
            className="bg-white rounded-lg shadow-lg p-4 animate-fade-in cursor-pointer hover:shadow-xl transition-shadow"
            onClick={openWhatsApp}
          >
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-5 right-5 z-50 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg transition-all transform hover:scale-105 ${isOpen ? 'rotate-90' : ''}`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </>
  );
};

export default WhatsAppWidget;