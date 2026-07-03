'use client';

import React from 'react';
import { Wind, Activity, Layers, Sun, Shield } from 'lucide-react';

export default function Technology() {
  return (
    <div className="bg-brand-dark text-white min-h-screen">
      
      {/* ── HERO BANNER ── */}
      <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden border-b border-white/5">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 scale-105"
          style={{ backgroundImage: `url('/images/model-tracksuit.jpg')`, backgroundPosition: '50% 10%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/90 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 text-center space-y-6 z-10">
          <span className="text-brand-coral font-bold text-xs uppercase tracking-widest block animate-pulse">
            ON7 Engineered Fabrics
          </span>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            DRY-FIT AGILITY
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-400 font-medium">
            Active performance demands smart textiles. Discover how ON7 activewear accelerates cooling, manages moisture, and provides structural flexibility.
          </p>
        </div>
      </section>

      {/* ── SCIENCE SECTION ── */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Science Image Box */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/5 h-[450px]">
            <div 
              className="absolute inset-0 bg-cover bg-center grayscale opacity-80"
              style={{ backgroundImage: `url('/images/red-shorts.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 bg-brand-navy/90 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <h4 className="font-bold text-lg uppercase mb-1">Micro-Grid Mesh Zones</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Heat-mapping technology shows where the body sweats most. ON7 adds perforated micro-grids at the back collar and knee creases for structural breathing room.
              </p>
            </div>
          </div>

          {/* Science Text */}
          <div className="space-y-8">
            <div>
              <span className="text-brand-coral font-bold text-xs uppercase tracking-widest block mb-2">The Physics of Dry-Fit</span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Capillary Action Wicking</h2>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Standard cotton absorbs sweat and holds onto it, making garments heavy, cold, and uncomfortable. ON7 uses synthetic multi-channel polyester filaments. 
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              These fibers are hydrophobic (water-repelling) on the inside layer next to your skin, pushing sweat outward to a hydrophilic (water-binding) outer weave, spreading it instantly across a wide surface area for rapid evaporation.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex gap-3">
                <Wind className="w-5 h-5 text-brand-coral flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sm uppercase">Quick-Drying</h4>
                  <p className="text-gray-400 text-xs">Dries 3x faster than traditional active fabrics.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Activity className="w-5 h-5 text-brand-coral flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sm uppercase">Zero Weight</h4>
                  <p className="text-gray-400 text-xs">Maintains ultra-lightness even during heavy sweat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL BENCHMARKS ── */}
      <section className="bg-brand-navy/40 py-24 border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Technical Breakdown</h2>
            <p className="text-gray-400 text-sm mt-3">What goes into crafting high-stretch active threads.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-brand-navy/60 p-8 rounded-2xl border border-white/5 space-y-4">
              <Layers className="w-8 h-8 text-brand-coral" />
              <h3 className="font-bold text-lg uppercase">Poly-Spandex Weave</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                We blend premium polyester with high-grade elastane for structural recovery—your tracksuits will never lose their form.
              </p>
            </div>

            <div className="bg-brand-navy/60 p-8 rounded-2xl border border-white/5 space-y-4">
              <Sun className="w-8 h-8 text-brand-coral" />
              <h3 className="font-bold text-lg uppercase">UV Guard</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Integrated sun shield blocks harmful UV rays during outdoor athletics, morning runs, and field training.
              </p>
            </div>

            <div className="bg-brand-navy/60 p-8 rounded-2xl border border-white/5 space-y-4">
              <Shield className="w-8 h-8 text-brand-coral" />
              <h3 className="font-bold text-lg uppercase">Flatlock Stitches</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Seams are stitched flat against the body, removing the bulky ridges that rub and irritate during cardio.
              </p>
            </div>

            <div className="bg-brand-navy/60 p-8 rounded-2xl border border-white/5 space-y-4">
              <Activity className="w-8 h-8 text-brand-coral" />
              <h3 className="font-bold text-lg uppercase">Motion Panels</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Ergonomic side panels expand as you move, offering unrestrained shoulder, waist, and hip rotation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
