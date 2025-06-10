import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Packages from './components/Packages';
import CoverageArea from './components/CoverageArea';
import PaymentInfo from './components/PaymentInfo';
import HelpSupport from './components/HelpSupport';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import WifiNotification from './components/WifiNotification';
import VoiceflowChatbot from './components/VoiceflowChatbot';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative">
      <div 
        className="fixed inset-0 pointer-events-none z-0" 
        style={{
          backgroundImage: 'url("/kace-logo-bg.webp")',
          backgroundRepeat: 'repeat',
          backgroundSize: '300px',
          opacity: '0.15',
          filter: 'grayscale(1) contrast(0.8)',
          mixBlendMode: 'multiply',
        }}
        aria-hidden="true"
      />
      <Header />
      <main id="main-content" className="flex-grow relative z-10">
        <Hero />
        <WifiNotification />
        <Packages />
        <CoverageArea />
        <PaymentInfo />
        <HelpSupport />
      </main>
      <Footer />
      <WhatsAppWidget />
      <VoiceflowChatbot />
    </div>
  );
}

export default App;