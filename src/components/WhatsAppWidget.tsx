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
        <div className="fixed bottom-24 right-5 z-40 flex flex-col gap-3">
          <button 
            className="w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all hover:scale-105 shadow-lg"
            onClick={() => {
              const chatWidget = document.querySelector('.vfrc-launcher');
              if (chatWidget) {
                (chatWidget as HTMLElement).click();
              }
            }}
          >
            <MessageCircle className="h-6 w-6 text-white" />
          </button>
          
          <button 
            className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-all hover:scale-105 shadow-lg"
            onClick={openWhatsApp}
          >
            <MessageCircle className="h-6 w-6 text-white" />
          </button>
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