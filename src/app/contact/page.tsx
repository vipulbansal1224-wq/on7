'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, HelpCircle, Check } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setSubmitted(true);
      setTimeout(() => {
        setFormState({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }
  };

  const faqs = [
    {
      q: "How long does shipping take within India?",
      a: "Orders are dispatched from Ludhiana within 24 hours. Metro cities (Delhi, Mumbai, Bangalore) receive delivery in 2-3 business days. Other regions take 4-5 business days."
    },
    {
      q: "Can I exchange my tracksuit for another size?",
      a: "Yes! We offer a hassle-free 7-day exchange window. Simply contact us with your order ID and the desired size, and we will handle the rest."
    },
    {
      q: "Do you offer wholesale bulk pricing?",
      a: "Absolutely. If you run a gym, athletic team, or retail shop and wish to place custom bulk orders, email us at wholesale@on7.in or send an inquiry below."
    }
  ];

  return (
    <div className="bg-brand-light min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="border-b border-gray-200 pb-8 mb-16">
          <span className="text-brand-coral font-bold text-xs uppercase tracking-widest block mb-2">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-black text-brand-dark uppercase tracking-tight">Contact ON7 Team</h1>
          <p className="text-brand-grey text-sm font-medium mt-2">Have a question about sizes, shipping, or bulk orders? Drop us a line.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT: Info & Form */}
          <div className="space-y-12">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-8">
              <h3 className="font-bold text-xl uppercase text-brand-dark">Send Inquiry</h3>
              
              {submitted ? (
                <div className="bg-green-50 text-green-700 p-6 rounded-2xl border border-green-200 flex items-center gap-3 animate-fade-in">
                  <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm">Message Sent Successfully!</h4>
                    <p className="text-xs text-green-600">Vipul Bansal and the ON7 support team will contact you shortly.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-xxs font-bold text-brand-grey uppercase tracking-wider block">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Ramesh Singh"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-brand-coral focus:ring-1 focus:ring-brand-coral outline-none bg-brand-light transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xxs font-bold text-brand-grey uppercase tracking-wider block">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. ramesh@gmail.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-brand-coral focus:ring-1 focus:ring-brand-coral outline-none bg-brand-light transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xxs font-bold text-brand-grey uppercase tracking-wider block">Your Message</label>
                    <textarea 
                      rows={5}
                      required
                      placeholder="Write your size, exchange, or wholesale query here..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-brand-coral focus:ring-1 focus:ring-brand-coral outline-none bg-brand-light transition-colors resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-brand-dark hover:bg-brand-coral text-white py-4 rounded-xl font-bold uppercase text-xs tracking-wider transition-custom shadow flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Direct Details Card */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                <MapPin className="w-5 h-5 text-brand-coral" />
                <h4 className="font-bold text-xs uppercase text-brand-dark">Head Office</h4>
                <p className="text-brand-grey text-xxs leading-relaxed">1224 Phase 2 Dugri, near Comm Center, Ludhiana, Punjab 141013</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                <Phone className="w-5 h-5 text-brand-coral" />
                <h4 className="font-bold text-xs uppercase text-brand-dark">Call Support</h4>
                <p className="text-brand-grey text-xxs leading-relaxed">+91 98765 43210 <br/>(Mon - Sat: 9 AM - 6 PM)</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                <Mail className="w-5 h-5 text-brand-coral" />
                <h4 className="font-bold text-xs uppercase text-brand-dark">Support Email</h4>
                <p className="text-brand-grey text-xxs leading-relaxed">care@on7.in <br/>wholesale@on7.in</p>
              </div>
            </div>
          </div>

          {/* RIGHT: FAQs */}
          <div className="space-y-8">
            <h3 className="font-bold text-xl uppercase text-brand-dark flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-brand-coral" /> Support FAQs
            </h3>
            
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                  <h4 className="font-bold text-sm text-brand-dark uppercase tracking-tight">
                    {faq.q}
                  </h4>
                  <p className="text-brand-grey text-xs leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

            {/* Ludhiana Map Placement Block */}
            <div className="bg-brand-dark text-white p-8 rounded-3xl space-y-4">
              <span className="text-brand-coral font-bold text-xxs uppercase tracking-widest">Store Pickup Available</span>
              <h4 className="font-bold text-lg uppercase">Pick up directly from Ludhiana</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                If you reside in Ludhiana, Punjab, you are welcome to pick up your order directly from our warehouse/office in Dugri to save on shipping times and try sizes on site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
