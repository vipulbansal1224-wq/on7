import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-brand-light min-h-screen pt-32 pb-24 text-brand-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
          <p>
            Welcome to the ON7 Activewear Privacy Policy. This policy describes how we collect, use, and protect your personal information when you use our website or purchase our premium activewear products.
          </p>

          <h2 className="text-xl font-bold uppercase text-brand-dark mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, such as your name, email address, shipping address, and payment information when you place an order, create an account, or contact our support team.
          </p>

          <h2 className="text-xl font-bold uppercase text-brand-dark mt-8 mb-4">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to process your orders, communicate with you about your purchases, provide customer support, and send you promotional offers if you have opted in to receive them. We do not sell your personal information to third parties.
          </p>

          <h2 className="text-xl font-bold uppercase text-brand-dark mt-8 mb-4">3. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal information during transmission and storage. All payment transactions are encrypted using secure socket layer technology (SSL) and stored with AES-256 encryption.
          </p>

          <h2 className="text-xl font-bold uppercase text-brand-dark mt-8 mb-4">4. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact our team at:
            <br />
            <strong>Email:</strong> care@on7.in
            <br />
            <strong>Address:</strong> Gumber Complex, shop no 5, upstair Punjab & Sind Bank Kapurthala Road, Bawa Khel, Jalandhar Punjab 144021
          </p>
          
          <p className="pt-8 text-xs text-gray-400">Last Updated: July 2026</p>
        </div>
      </div>
    </div>
  );
}
