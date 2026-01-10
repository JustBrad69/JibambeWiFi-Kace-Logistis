import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppWidget = () => {
  const openWhatsApp = () => {
    window.open(`https://wa.me/254113325179`, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-5 left-5 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      style={{ width: '60px', height: '60px' }}
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};

export default WhatsAppWidget;