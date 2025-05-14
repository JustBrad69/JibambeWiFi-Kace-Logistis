import React, { useState, useEffect, useCallback } from 'react';
import { HelpCircle, X } from 'lucide-react';

const HelpSupport = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEscape = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleEscape]);

  return (
    <>
      <button
        id="help-support-button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-5 z-40 bg-[#000080] hover:bg-[#000060] text-white rounded-full p-4 shadow-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#000080]"
        aria-label="Open Help & Support"
      >
        <HelpCircle className="h-6 w-6" />
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div 
              className="fixed inset-0 transition-opacity modal-backdrop" 
              aria-hidden="true"
              onClick={() => setIsOpen(false)}
            >
              <div className="absolute inset-0 bg-gray-500 bg-opacity-75"></div>
            </div>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full modal-content">
              <div className="bg-[#000080] p-4 text-white flex justify-between items-center sticky top-0 z-10">
                <div className="flex items-center space-x-2">
                  <HelpCircle className="h-6 w-6" />
                  <h2 id="modal-title" className="text-xl font-bold">Help & Support</h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-200 transition-colors p-2 rounded-full hover:bg-[#000060] focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Close modal"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="max-h-[70vh] overflow-y-auto p-6 modal-scroll">
                <div className="prose max-w-none space-y-6">
                  <section>
                    <h2 className="text-2xl font-bold text-[#000080] flex items-center gap-2">
                      📌 GENERAL INFORMATION
                    </h2>
                    <div className="mt-4 space-y-4">
                      <h3 className="text-xl font-semibold">What is Jibambe WiFi?</h3>
                      <p className="text-gray-700">
                        Jibambe WiFi is a reliable and affordable wireless internet service offering fast and stable connectivity to homes and businesses. We are committed to providing seamless online access at flexible rates that suit your lifestyle.
                      </p>

                      <h3 className="text-xl font-semibold">Who is this service for?</h3>
                      <p className="text-gray-700">Our service is ideal for:</p>
                      <ul className="list-disc pl-5 text-gray-700">
                        <li>Students and remote workers</li>
                        <li>Small businesses</li>
                        <li>Households that stream, game, or browse daily</li>
                        <li>Guests and visitors in need of temporary WiFi access</li>
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-[#000080] flex items-center gap-2">
                      💸 PAYMENTS & ACCESS
                    </h2>
                    <div className="mt-4 space-y-4">
                      <h3 className="text-xl font-semibold">How do I pay for Jibambe WiFi?</h3>
                      <p className="text-gray-700">
                        You can pay securely using our official Till Number, which is provided clearly on the website. No device ID is required for payment.
                      </p>
                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                        <p className="text-blue-800">
                          💡 Always confirm you're sending payment to the official Till Number listed on our site.
                        </p>
                      </div>

                      <h3 className="text-xl font-semibold">Do I need to register a device to access the internet?</h3>
                      <p className="text-gray-700">
                        No. Once you pay using the Till Number, your access is automatically granted without needing to link or register your device manually.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-[#000080] flex items-center gap-2">
                      🌐 INTERNET ACCESS & SPEEDS
                    </h2>
                    <div className="mt-4 space-y-4">
                      <h3 className="text-xl font-semibold">What speeds do you offer?</h3>
                      <p className="text-gray-700">
                        Speeds may vary based on location and network traffic, but Jibambe WiFi is optimized for:
                      </p>
                      <ul className="list-disc pl-5 text-gray-700">
                        <li>Video streaming</li>
                        <li>Zoom/Google Meet calls</li>
                        <li>Online classes</li>
                        <li>Social media and general browsing</li>
                      </ul>

                      <h3 className="text-xl font-semibold">Is the connection stable for online meetings or classes?</h3>
                      <p className="text-gray-700">
                        Yes. Jibambe WiFi is tested and tuned for consistent performance during video calls and remote work.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-[#000080] flex items-center gap-2">
                      🛠️ TROUBLESHOOTING
                    </h2>
                    <div className="mt-4 space-y-4">
                      <h3 className="text-xl font-semibold">My internet is slow or not connecting — what should I do?</h3>
                      <ul className="list-disc pl-5 text-gray-700">
                        <li>Ensure your payment was completed to the correct Till Number.</li>
                        <li>Refresh your connection or restart your device.</li>
                        <li>Check if your access time or daily data limit has expired.</li>
                        <li>If the issue persists, contact our support team.</li>
                      </ul>

                      <h3 className="text-xl font-semibold">How can I check my usage or time remaining?</h3>
                      <p className="text-gray-700">
                        Currently, usage tracking is not available on the website. We recommend noting your start time manually for now. Future updates may include automated access logs.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-[#000080] flex items-center gap-2">
                      📧 CUSTOMER SUPPORT
                    </h2>
                    <div className="mt-4 space-y-4">
                      <h3 className="text-xl font-semibold">How can I reach support?</h3>
                      <p className="text-gray-700">If you experience issues or need help, you can:</p>
                      <ul className="list-disc pl-5 text-gray-700">
                        <li>Use the contact form on the website</li>
                        <li>Email us via our official business email</li>
                        <li>Chat with us through the support option on the homepage</li>
                      </ul>

                      <h3 className="text-xl font-semibold">Support Hours:</h3>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-700">
                          Monday–Saturday: 8:00 AM – 6:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-[#000080] flex items-center gap-2">
                      🔒 SECURITY & PRIVACY
                    </h2>
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold">Is my data safe when I use Jibambe WiFi?</h3>
                      <p className="text-gray-700">
                        Yes. We use secure routing to ensure that your browsing experience is private and reliable. We do not share user data with third parties.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-[#000080] flex items-center gap-2">
                      🔄 SERVICE UPDATES
                    </h2>
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold">How will I know if the service is down or under maintenance?</h3>
                      <p className="text-gray-700">
                        Scheduled maintenance or updates will be announced on the website homepage. Urgent service interruptions will also be posted via email or notification banners on the site.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-[#000080] flex items-center gap-2">
                      📍 COVERAGE
                    </h2>
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold">Where is Jibambe WiFi available?</h3>
                      <p className="text-gray-700">
                        Jibambe WiFi currently serves select areas. Coverage expansion is ongoing. Visit the homepage or contact us to confirm availability in your area.
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HelpSupport;