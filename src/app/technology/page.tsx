'use client';

import React from 'react';
import { Wind, Activity, Layers, Sun, Shield, Droplets, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Technology() {
  return (
    <div className="bg-brand-dark text-white min-h-screen pt-16">
      
      {/* ── HERO BANNER ── */}
      <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden border-b border-white/5">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 scale-105"
          style={{ backgroundImage: `url('/images/model-tracksuit.jpg')`, backgroundPosition: '50% 10%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/90 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 text-center space-y-6 z-10">
          <span className="text-brand-coral font-bold text-xs md:text-sm uppercase tracking-widest block animate-pulse">
            ON7 Engineered Fabrics
          </span>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            DRY-FIT AGILITY
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-lg text-gray-400 font-medium leading-relaxed">
            Active performance demands smart textiles. Discover how ON7 activewear accelerates cooling, manages moisture, and provides structural flexibility for everyday athletes and professional trainers alike.
          </p>
        </div>
      </section>

      {/* ── SCIENCE SECTION ── */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Science Image Box */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/5 h-[400px] lg:h-[550px]">
            <div 
              className="absolute inset-0 bg-cover bg-center grayscale opacity-80 transition-transform duration-1000 hover:scale-105"
              style={{ backgroundImage: `url('/images/red-shorts.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 bg-brand-navy/90 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl">
              <h4 className="font-bold text-lg uppercase mb-2">Micro-Grid Mesh Zones</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Heat-mapping technology shows where the body sweats most. ON7 adds perforated micro-grids at the back collar and knee creases for structural breathing room without losing durability.
              </p>
            </div>
          </div>

          {/* Science Text */}
          <div className="space-y-8">
            <div>
              <span className="text-brand-coral font-bold text-xs uppercase tracking-widest block mb-2">The Physics of Dry-Fit</span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Capillary Action Wicking</h2>
            </div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Standard cotton absorbs sweat and holds onto it, making garments heavy, cold, and uncomfortable. ON7 uses synthetic multi-channel polyester filaments. 
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              These fibers are hydrophobic (water-repelling) on the inside layer next to your skin, pushing sweat outward to a hydrophilic (water-binding) outer weave, spreading it instantly across a wide surface area for rapid evaporation.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <Wind className="w-6 h-6 text-brand-coral flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sm uppercase">Quick-Drying</h4>
                  <p className="text-gray-400 text-xs mt-1">Dries 3x faster than traditional active fabrics.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <Activity className="w-6 h-6 text-brand-coral flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sm uppercase">Zero Weight</h4>
                  <p className="text-gray-400 text-xs mt-1">Maintains ultra-lightness even during heavy sweat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT INTEGRATION & FEATURES ── */}
      <section className="bg-brand-navy/30 py-24 border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-coral font-bold text-xs uppercase tracking-widest block mb-2">Applied Engineering</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">How We Build Our Gear</h2>
            <p className="text-gray-400 text-sm md:text-base mt-4">
              Our Dry-Fit technology isn't just theory. It's woven into every single product in the ON7 catalog. Here is how our different product lines utilize our signature textile tech.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Tracksuits Info */}
            <div className="group bg-brand-dark border border-white/10 rounded-3xl overflow-hidden shadow-2xl transition-all hover:border-brand-coral/50 flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img src="/images/product-1.jpg" alt="ON7 Tracksuits" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black uppercase text-white mb-3">Pro Tracksuits</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  Engineered for pre-game warmups and intense outdoor sessions. The outer shell blocks wind, while the inner Dry-Fit fleece lining rapidly wicks moisture away from your core, keeping your temperature regulated.
                </p>
                <Link href="/collection" className="flex items-center gap-2 text-brand-coral font-bold text-sm uppercase hover:text-white transition-colors">
                  Shop Tracksuits <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Shorts Info */}
            <div className="group bg-brand-dark border border-white/10 rounded-3xl overflow-hidden shadow-2xl transition-all hover:border-brand-coral/50 flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img src="/images/product-2.jpg" alt="ON7 Shorts" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black uppercase text-white mb-3">Agility Shorts</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  Built for maximum leg drive. We use a 4-way stretch poly-spandex blend that moves dynamically. The laser-cut ventilation holes at the hem ensure maximum airflow where you need it most during heavy lifting or running.
                </p>
                <Link href="/collection" className="flex items-center gap-2 text-brand-coral font-bold text-sm uppercase hover:text-white transition-colors">
                  Shop Shorts <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Joggers Info */}
            <div className="group bg-brand-dark border border-white/10 rounded-3xl overflow-hidden shadow-2xl transition-all hover:border-brand-coral/50 flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img src="/images/product-3.jpg" alt="ON7 Joggers" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black uppercase text-white mb-3">Tapered Joggers</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  Combining streetwear aesthetics with athletic performance. Our joggers feature articulated knees and zippered pockets. The moisture-management fabric ensures sweat doesn't weigh you down during leg day.
                </p>
                <Link href="/collection" className="flex items-center gap-2 text-brand-coral font-bold text-sm uppercase hover:text-white transition-colors">
                  Shop Joggers <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── TECHNICAL BENCHMARKS ── */}
      <section className="bg-brand-dark py-24 border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Technical Breakdown</h2>
            <p className="text-gray-400 text-sm md:text-base mt-4">What goes into crafting high-stretch active threads.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="bg-brand-navy/60 p-8 rounded-2xl border border-white/5 space-y-4 hover:bg-brand-navy/80 transition-colors">
              <Layers className="w-8 h-8 text-brand-coral" />
              <h3 className="font-bold text-lg uppercase">Poly-Spandex Weave</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                We blend premium polyester with high-grade elastane for structural recovery—your tracksuits will never lose their form, even after 100 washes.
              </p>
            </div>

            <div className="bg-brand-navy/60 p-8 rounded-2xl border border-white/5 space-y-4 hover:bg-brand-navy/80 transition-colors">
              <Droplets className="w-8 h-8 text-brand-coral" />
              <h3 className="font-bold text-lg uppercase">Odor Control</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Embedded anti-microbial silver ions prevent the growth of odor-causing bacteria, keeping your gym gear smelling fresh post-workout.
              </p>
            </div>

            <div className="bg-brand-navy/60 p-8 rounded-2xl border border-white/5 space-y-4 hover:bg-brand-navy/80 transition-colors">
              <Shield className="w-8 h-8 text-brand-coral" />
              <h3 className="font-bold text-lg uppercase">Flatlock Stitches</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Seams are stitched flat against the body, removing the bulky ridges that rub and irritate during cardio or heavy training sessions.
              </p>
            </div>

            <div className="bg-brand-navy/60 p-8 rounded-2xl border border-white/5 space-y-4 hover:bg-brand-navy/80 transition-colors">
              <Activity className="w-8 h-8 text-brand-coral" />
              <h3 className="font-bold text-lg uppercase">Motion Panels</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Ergonomic side panels expand as you move, offering unrestrained shoulder, waist, and hip rotation for complex lifting movements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8">Feel the Difference</h2>
          <Link href="/collection" className="inline-flex items-center gap-3 bg-brand-coral text-white font-bold text-sm md:text-base uppercase px-10 py-5 rounded-full hover:bg-white hover:text-brand-dark transition-all shadow-lg hover:shadow-xl">
            Upgrade Your Activewear <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
