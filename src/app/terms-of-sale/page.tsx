import React from 'react';

export default function TermsOfSale() {
  return (
    <div className="bg-brand-light min-h-screen pt-32 pb-24 text-brand-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-8">Terms of Sale</h1>
        
        <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
          <p>
            These Terms of Sale govern your purchase of ON7 Activewear products. By placing an order, you agree to be bound by these terms.
          </p>

          <h2 className="text-xl font-bold uppercase text-brand-dark mt-8 mb-4">1. Order Processing and Shipping</h2>
          <p>
            Orders are typically processed within 24 hours from our Jalandhar warehouse. Delivery to metro cities usually takes 2-3 business days, while other regions may take 4-5 business days. We are not responsible for delays caused by third-party courier services.
          </p>

          <h2 className="text-xl font-bold uppercase text-brand-dark mt-8 mb-4">2. Returns and Exchanges</h2>
          <p>
            We offer a 7-day exchange window for all our activewear products, provided they are unworn, unwashed, and in their original packaging with all tags attached. Please contact our support team to initiate an exchange. 
          </p>

          <h2 className="text-xl font-bold uppercase text-brand-dark mt-8 mb-4">3. Pricing and Availability</h2>
          <p>
            All prices are in Indian Rupees (INR) and are inclusive of GST. We reserve the right to change prices or discontinue products at any time without prior notice.
          </p>

          <h2 className="text-xl font-bold uppercase text-brand-dark mt-8 mb-4">4. Defective Items</h2>
          <p>
            Every product passes through our strict QA process. However, if you receive a defective item, please report it within 48 hours of delivery with photographic evidence, and we will arrange a free replacement.
          </p>
          
          <p className="pt-8 text-xs text-gray-400">Last Updated: July 2026</p>
        </div>
      </div>
    </div>
  );
}
