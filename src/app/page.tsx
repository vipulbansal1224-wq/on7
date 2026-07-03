'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, HeartHandshake, Compass } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative">
      {/* ── HERO BANNER SECTION ── */}
      <section className="relative h-screen bg-brand-dark flex items-center justify-center overflow-hidden">
        {/* Immersive background image overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 transition-all duration-1000 scale-105"
          style={{ backgroundImage: `url('/images/model-tracksuit.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />

        {/* Hero Text Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-8 z-10 pt-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-xs font-semibold uppercase tracking-widest text-brand-coral animate-pulse">
            <Zap className="w-3.5 h-3.5" /> High-Agility Performance Wear
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            ENGINEERED TO <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-coral via-[#ff7c62] to-[#ffb8a8]">CONQUER</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-300 font-medium leading-relaxed">
            Introducing ON7® Sportswear. Lightweight, moisture-wicking dry-fit gear constructed to withstand your most intense athletic training sessions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/collection"
              className="group bg-brand-coral hover:bg-brand-coral/95 text-white font-bold px-8 py-4 rounded-full transition-custom shadow-lg shadow-brand-coral/30 flex items-center gap-2 text-sm uppercase tracking-wider"
            >
              Shop Collection 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
            <Link
              href="/technology"
              className="border border-white/20 hover:border-white bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-full transition-custom flex items-center gap-2 text-sm uppercase tracking-wider"
            >
              Explore Tech
            </Link>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 z-10">
          <span className="text-xxs uppercase tracking-widest text-gray-400 font-bold">Scroll Down</span>
          <div className="w-1 h-6 bg-white/20 rounded-full overflow-hidden">
            <div className="w-full h-1/2 bg-brand-coral rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ── CORE TECH SPECS (Grid) ── */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark uppercase tracking-tight">
              ON7 Engineered Advantage
            </h2>
            <p className="text-brand-grey text-md font-medium mt-4">
              Designed in Ludhiana, engineered for performance. We select premium fibers that support natural body cooling and fluid flexibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-brand-light p-8 rounded-2xl border border-gray-200/60 transition-custom scale-hover">
              <div className="w-12 h-12 rounded-xl bg-brand-coral/10 text-brand-coral flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark uppercase mb-3">Dry-Fit Technology</h3>
              <p className="text-brand-grey text-sm leading-relaxed">
                Hydrophobic fabrics draw moisture away from the skin, moving sweat to the surface where it evaporates instantly.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-brand-light p-8 rounded-2xl border border-gray-200/60 transition-custom scale-hover">
              <div className="w-12 h-12 rounded-xl bg-brand-coral/10 text-brand-coral flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark uppercase mb-3">4-Way Stretch</h3>
              <p className="text-brand-grey text-sm leading-relaxed">
                Woven with high-grade spandex elasticity, providing complete physical mobility during squats, sprints, and jumps.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-brand-light p-8 rounded-2xl border border-gray-200/60 transition-custom scale-hover">
              <div className="w-12 h-12 rounded-xl bg-brand-coral/10 text-brand-coral flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark uppercase mb-3">Anti-Odor Stitch</h3>
              <p className="text-brand-grey text-sm leading-relaxed">
                Silver-ion infused threads combat odor-causing bacteria, keeping your activewear fresh through back-to-back routines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORY GRID WITH DYNAMIC BANNERS ── */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <span className="text-brand-coral font-bold text-xs uppercase tracking-widest block mb-2">Category Showcase</span>
              <h2 className="text-3xl md:text-5xl font-black text-brand-dark uppercase tracking-tight">Shop by Performance</h2>
            </div>
            <Link
              href="/collection"
              className="group text-brand-dark hover:text-brand-coral font-bold text-sm uppercase tracking-wider flex items-center gap-2 transition-colors border-b-2 border-brand-dark/10 hover:border-brand-coral/20 pb-1"
            >
              Browse Full Catalog <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category 1: Tracksuits */}
            <div className="group relative h-[500px] rounded-3xl overflow-hidden shadow-md transition-custom hover:shadow-xl">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('/images/tracksuit-flat.jpg')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white space-y-2">
                <span className="text-xxs bg-brand-coral text-white font-bold uppercase px-3 py-1 rounded-full tracking-wider">Premium Line</span>
                <h3 className="text-2xl font-black uppercase">Active Tracksuits</h3>
                <p className="text-gray-300 text-xs leading-normal">
                  Zip-up jackets and tapered joggers matching active aesthetics.
                </p>
                <Link href="/collection?filter=tracksuits" className="inline-flex items-center gap-1 text-xs text-brand-coral font-bold pt-2 uppercase tracking-widest hover:text-white transition-colors">
                  View Tracksuits <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Category 2: Sports Shorts */}
            <div className="group relative h-[500px] rounded-3xl overflow-hidden shadow-md transition-custom hover:shadow-xl">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('/images/red-shorts.jpg')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white space-y-2">
                <span className="text-xxs bg-brand-coral text-white font-bold uppercase px-3 py-1 rounded-full tracking-wider">Dry Fit</span>
                <h3 className="text-2xl font-black uppercase">Gym Shorts</h3>
                <p className="text-gray-300 text-xs leading-normal">
                  Branded shorts showing signature ON7 circular logo graphics.
                </p>
                <Link href="/collection?filter=shorts" className="inline-flex items-center gap-1 text-xs text-brand-coral font-bold pt-2 uppercase tracking-widest hover:text-white transition-colors">
                  View Shorts <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Category 3: Track Pants */}
            <div className="group relative h-[500px] rounded-3xl overflow-hidden shadow-md transition-custom hover:shadow-xl">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('/images/grey-pants.jpg')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white space-y-2">
                <span className="text-xxs bg-brand-coral text-white font-bold uppercase px-3 py-1 rounded-full tracking-wider">4-Way Stretch</span>
                <h3 className="text-2xl font-black uppercase">Athletic Joggers</h3>
                <p className="text-gray-300 text-xs leading-normal">
                  Snug-cuff, elastic waist gym pants designed for squats and running.
                </p>
                <Link href="/collection?filter=pants" className="inline-flex items-center gap-1 text-xs text-brand-coral font-bold pt-2 uppercase tracking-widest hover:text-white transition-colors">
                  View Joggers <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FULL WIDTH MARKETING HERO BANNER ── */}
      <section className="relative py-32 bg-brand-dark text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('/images/model-tracksuit.jpg')`, backgroundPosition: '50% 20%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-2xl space-y-6">
            <span className="text-brand-coral font-bold text-xs uppercase tracking-widest block">Ludhiana Premium Design</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              ENGINEERED FOR THE UNSTOPPABLE
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Every detail in ON7 gear is scrutinized—from the flatlock stitch seams that avoid chafing, to the micro-grid mesh zones built for heat dissipation. Step up your wardrobe.
            </p>
            <div className="pt-4">
              <Link
                href="/about"
                className="bg-white text-brand-dark hover:bg-brand-coral hover:text-white font-bold px-8 py-4 rounded-full transition-custom inline-flex items-center gap-2 text-sm uppercase tracking-wider"
              >
                Learn Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
