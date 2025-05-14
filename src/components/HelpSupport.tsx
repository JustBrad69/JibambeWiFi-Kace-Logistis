import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const HelpSupport = () => {
  return (
    <section id="help" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#000080] mb-2">Help & Support</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions and learn how to get the most out of your Jibambe WiFi service.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <div className="bg-[#000080] p-4 text-white">
            <div className="flex items-center justify-center space-x-2">
              <HelpCircle className="h-6 w-6" />
              <h3 className="text-xl font-bold">Documentation</h3>
            </div>
          </div>
          
          <div className="h-[600px] overflow-y-auto p-6 md:p-8">
            <div className="prose max-w-none">
              <h2>📌 GENERAL INFORMATION</h2>
              <h3>What is Jibambe WiFi?</h3>
              <p>Jibambe WiFi is a reliable and affordable wireless internet service offering fast and stable connectivity to homes and businesses. We are committed to providing seamless online access at flexible rates that suit your lifestyle.</p>

              <h3>Who is this service for?</h3>
              <p>Our service is ideal for:</p>
              <ul>
                <li>Students and remote workers</li>
                <li>Small businesses</li>
                <li>Households that stream, game, or browse daily</li>
                <li>Guests and visitors in need of temporary WiFi access</li>
              </ul>

              <h2>💸 PAYMENTS & ACCESS</h2>
              <h3>How do I pay for Jibambe WiFi?</h3>
              <p>You can pay securely using our official Till Number, which is provided clearly on the website. No device ID is required for payment.</p>
              <p className="bg-blue-50 p-4 rounded-lg">💡 Always confirm you're sending payment to the official Till Number listed on our site.</p>

              <h2>🌐 INTERNET ACCESS & SPEEDS</h2>
              <h3>What speeds do you offer?</h3>
              <p>Speeds may vary based on location and network traffic, but Jibambe WiFi is optimized for:</p>
              <ul>
                <li>Video streaming</li>
                <li>Zoom/Google Meet calls</li>
                <li>Online classes</li>
                <li>Social media and general browsing</li>
              </ul>

              <h2>🛠️ TROUBLESHOOTING</h2>
              <h3>My internet is slow or not connecting — what should I do?</h3>
              <ul>
                <li>Ensure your payment was completed to the correct Till Number.</li>
                <li>Refresh your connection or restart your device.</li>
                <li>Check if your access time or daily data limit has expired.</li>
                <li>If the issue persists, contact our support team.</li>
              </ul>

              <h2>📧 CUSTOMER SUPPORT</h2>
              <h3>Support Hours:</h3>
              <p>Monday–Saturday: 8:00 AM – 6:00 PM<br />Sunday: Closed</p>

              <h2>🔒 SECURITY & PRIVACY</h2>
              <p>We use secure routing to ensure that your browsing experience is private and reliable. We do not share user data with third parties.</p>

              <h2>🔄 SERVICE UPDATES</h2>
              <p>Scheduled maintenance or updates will be announced on the website homepage. Urgent service interruptions will also be posted via email or notification banners on the site.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSupport;