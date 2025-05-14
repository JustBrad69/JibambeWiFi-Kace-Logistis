import React from 'react';
import { CreditCard, PhoneCall, Mail, ArrowRight } from 'lucide-react';

const PaymentInfo = () => {
  return (
    <section id="payment" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#000080] mb-2">Payment Information</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pay for your Jibambe Wifi packages easily using M-Pesa. Simply send the payment to our till number.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="bg-[#000080] p-4 text-center text-white">
            <h3 className="text-xl font-bold">M-Pesa Payment Details</h3>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-600 mb-1">M-Pesa Till Number:</p>
                <div className="flex items-center justify-center md:justify-start">
                  <CreditCard className="h-5 w-5 text-[#000080] mr-2" />
                  <span className="text-2xl font-bold text-[#000080]">5624982</span>
                </div>
              </div>
              
              <div className="hidden md:block">
                <ArrowRight className="h-8 w-8 text-gray-400" />
              </div>
              
              <div className="text-center md:text-left">
                <p className="text-gray-600 mb-1">Till Name:</p>
                <p className="text-xl font-semibold text-[#000080]">Kace Logistics Limited</p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-[#000080] mb-2">How to Pay:</h4>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>Go to M-Pesa on your phone</li>
                <li>Select "Lipa na M-Pesa"</li>
                <li>Select "Buy Goods and Services"</li>
                <li>Enter Till Number: <strong>5624982</strong></li>
                <li>Enter the amount for your chosen package</li>
                <li>Enter your M-Pesa PIN and confirm</li>
                <li>Once payment is confirmed, connect to Jibambe Wifi</li>
              </ol>
            </div>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <PhoneCall className="h-6 w-6 text-[#000080] mr-3" />
              <h3 className="text-xl font-semibold text-[#000080]">Call or WhatsApp</h3>
            </div>
            <p className="text-gray-700 mb-4">For support or inquiries, contact us via phone or WhatsApp:</p>
            <a href="tel:0707374749" className="text-xl font-bold text-[#000080] hover:underline">0707374749</a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <Mail className="h-6 w-6 text-[#000080] mr-3" />
              <h3 className="text-xl font-semibold text-[#000080]">Email Us</h3>
            </div>
            <p className="text-gray-700 mb-4">For business inquiries or support tickets, email us at:</p>
            <a href="mailto:info@kacelogisticsltd.com" className="text-lg font-bold text-[#000080] hover:underline break-all">info@kacelogisticsltd.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentInfo;