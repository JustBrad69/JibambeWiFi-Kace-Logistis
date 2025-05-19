import React, { useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

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

const VoiceflowWidget = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
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
  }, []);

  return (
    <button
      onClick={() => {
        setIsOpen(!isOpen);
        const chatWidget = document.querySelector('.vfrc-launcher');
        if (chatWidget) {
          (chatWidget as HTMLElement).click();
        }
      }}
      className="fixed bottom-5 right-5 z-50 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      style={{ width: '60px', height: '60px' }}
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};

export default VoiceflowWidget;