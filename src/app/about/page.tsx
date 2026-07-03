'use client';

import React from 'react';
import { ShieldAlert, Users, Award, Building2 } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-brand-light min-h-screen">
      
      {/* ── HERO BANNER ── */}
      <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden bg-brand-dark text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 scale-105"
          style={{ backgroundImage: `url('/images/model-tracksuit.jpg')`, backgroundPosition: '50% 20%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/95 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 text-center space-y-6 z-10">
          <span className="text-brand-coral font-bold text-xs uppercase tracking-widest block">
            Our Roots & Vision
          </span>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            THE STORY OF ON7
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-400 font-medium leading-relaxed">
            Crafting premium athletic wear that bridges the gap between raw functionality and cutting-edge streetwear aesthetics.
          </p>
        </div>
      </section>

      {/* ── CORE VISION STORY ── */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text block */}
          <div className="space-y-6">
            <div>
              <span className="text-brand-coral font-bold text-xs uppercase tracking-widest block mb-2">Designed in Punjab</span>
              <h2 className="text-3xl md:text-5xl font-black text-brand-dark uppercase tracking-tight">
                Jalandhar & Ludhiana's Premium Textile Innovation
              </h2>
            </div>
            <p className="text-brand-grey text-sm leading-relaxed">
              Ludhiana is globally recognized as the textile powerhouse of India. It is here that **Vipul Bansal** conceptualized **ON7®** with a singular focus: to engineer athletic tracksuits, shorts, and joggers that equal international luxury sportswear standards at an honest price.
            </p>
            <p className="text-brand-grey text-sm leading-relaxed">
              To bring this activewear catalog to our customers directly, we have opened our premium flagship experience center at **Gumber Complex, shop no 5, upstair Punjab & Sind Bank Kapurthala Road, Bawa Khel, Jalandhar**. This experience center acts as our primary customer support desk, retail showroom, and fast-track shipping terminal.
            </p>
            <p className="text-brand-grey text-sm leading-relaxed">
              We spent months working alongside local spinning mills and stitching workshops in Punjab to perfect our dry-fit polyester weave. We didn't want cheap, stiff athletic wear; we wanted fabrics that feel like a second skin, move like water, and breathe during high-intensity training.
            </p>
            <p className="text-brand-grey text-sm leading-relaxed">
              Today, ON7 stands as a growing signature of performance and durability—trusted by bodybuilders, track runners, and gym enthusiasts nationwide.
            </p>
          </div>

          {/* Image/Visual Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden h-80 bg-gray-100 shadow-md">
              <img src="/images/model-tracksuit.jpg" alt="Model tracksuit" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden h-80 bg-gray-100 shadow-md translate-y-6">
              <img src="/images/red-shorts.jpg" alt="Sports shorts logo detail" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES BANNER ── */}
      <section className="bg-white py-24 border-t border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-brand-coral/10 text-brand-coral flex items-center justify-center mx-auto">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-brand-dark uppercase text-md">Athletes First</h4>
              <p className="text-brand-grey text-xs">Developed and tested alongside professional gym-goers and fitness coaches.</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-brand-coral/10 text-brand-coral flex items-center justify-center mx-auto">
                <Building2 className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-brand-dark uppercase text-md">Local Manufacturing</h4>
              <p className="text-brand-grey text-xs">Made proudly in Ludhiana, Punjab, supporting regional craftsmanship and workshops.</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-brand-coral/10 text-brand-coral flex items-center justify-center mx-auto">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-brand-dark uppercase text-md">Premium Trim QA</h4>
              <p className="text-brand-grey text-xs">We inspect every single zipper, drawcord, and stitching block to ensure zero-defect logs.</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-brand-coral/10 text-brand-coral flex items-center justify-center mx-auto">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-brand-dark uppercase text-md">Secure Design</h4>
              <p className="text-brand-grey text-xs">Our fabrics block harmful UV-rays and are completely allergy-safe against skin chafing.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
