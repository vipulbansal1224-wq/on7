import React from 'react';
import { ShieldCheck, Lock, CreditCard } from 'lucide-react';

export default function SecureCheckout() {
  return (
    <div className="bg-brand-light min-h-screen pt-32 pb-24 text-brand-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 text-center">
        
        <div className="w-20 h-20 bg-brand-coral/10 text-brand-coral rounded-full flex items-center justify-center mx-auto mb-8">
          <ShieldCheck className="w-10 h-10" />
        </div>
        
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">100% Secure Checkout</h1>
        <p className="text-brand-grey max-w-2xl mx-auto mb-12">
          Your security is our top priority. We use industry-leading encryption and security protocols to ensure your payment information is safe.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="p-8 border border-gray-100 rounded-2xl bg-gray-50/50">
            <Lock className="w-8 h-8 text-brand-dark mb-4" />
            <h3 className="font-bold uppercase tracking-wider mb-2">SSL Encryption</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Every transaction made on the ON7 website is protected by 256-bit Secure Socket Layer (SSL) encryption, preventing third parties from accessing your sensitive data.
            </p>
          </div>

          <div className="p-8 border border-gray-100 rounded-2xl bg-gray-50/50">
            <CreditCard className="w-8 h-8 text-brand-dark mb-4" />
            <h3 className="font-bold uppercase tracking-wider mb-2">Trusted Gateways</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              We process payments exclusively through PCI-DSS compliant payment gateways like Razorpay and Stripe. We do not store your credit card information on our servers.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
