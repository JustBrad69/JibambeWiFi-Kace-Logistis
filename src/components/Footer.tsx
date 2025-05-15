import React from 'react';
import { Wifi, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#000080] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Wifi className="h-6 w-6 text-[#89CFF0] mr-2" />
              <span className="text-xl font-bold">Jibambe <span className="text-[#89CFF0]">Wifi</span></span>
            </div>
            <p className="text-[#89CFF0] mb-4">
              Fast and affordable internet service for everyone. Connect easily and enjoy seamless browsing.
            </p>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="#packages" className="text-[#89CFF0] hover:text-white transition-colors">Packages</a></li>
              <li><a href="#coverage" className="text-[#89CFF0] hover:text-white transition-colors">Coverage Areas</a></li>
              <li><a href="#payment" className="text-[#89CFF0] hover:text-white transition-colors">Payment Information</a></li>
              <li><button onClick={() => document.getElementById('help-support-button')?.click()} className="text-[#89CFF0] hover:text-white transition-colors">Help & Support</button></li>
            </ul>
          </div>
          
          <div id="contact">
            <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-[#89CFF0] mr-2 mt-0.5" />
                <span>0707374749</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-[#89CFF0] mr-2 mt-0.5" />
                <span>info@kacelogisticsltd.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#89CFF0] mr-2 mt-0.5" />
                <span>Dina Market, Cheboosi, T Junction, Site & Service Estate</span>
              </li>
              <li className="flex items-start">
                <CreditCard className="h-5 w-5 text-[#89CFF0] mr-2 mt-0.5" />
                <span>M-Pesa Till: 5624982 (Kace Logistics Limited)</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 mt-6 border-t border-[#000060] text-center">
          <p className="text-[#89CFF0] text-sm">
            &copy; {new Date().getFullYear()} Jibambe Wifi - A service by Kace Logistics Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const CreditCard = (props: any) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={props.className?.includes('w-') ? undefined : props.width || 24} 
      height={props.className?.includes('h-') ? undefined : props.height || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={props.className}
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
};

export default Footer;