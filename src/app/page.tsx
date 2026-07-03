'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, HeartHandshake, Star, Flame, Trophy, Instagram, Facebook } from 'lucide-react';

export default function Home() {
  // Size Finder State
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [recommendedSize, setRecommendedSize] = useState<string | null>(null);

  const calculateSize = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseFloat(height);
    const w = parseFloat(weight);
    
    if (h && w) {
      // Basic sizing logic for activewear
      if (w < 60) setRecommendedSize('S');
      else if (w < 72) setRecommendedSize('M');
      else if (w < 84) setRecommendedSize('L');
      else if (w < 95) setRecommendedSize('XL');
      else setRecommendedSize('XXL');
    }
  };

  const testimonials = [
    {
      name: "Sandeep Kumar",
      role: "State Level Athlete",
      rating: 5,
      comment: "ON7 tracksuits are incredibly flexible. The 4-way stretch is perfect for track sprints and gym workouts. The Jalandhar store guided me to the exact size."
    },
    {
      name: "Vikas Sharma",
      role: "Gym Owner & Coach",
      rating: 5,
      comment: "The Dry-Fit technology actually works. Unlike other local brands, the colors of these tracksuits don't fade after machine washes. Highly recommended for daily training."
    },
    {
      name: "Gagan Preet",
      role: "Fitness Influencer",
      rating: 5,
      comment: "Super premium fit! The black-blue track pants look very stylish. The fabrics are very lightweight and moisture-wicking during cardio sessions."
    }
  ];

  const socialFeed = [
    { id: 1, type: 'instagram', image: '/images/model-tracksuit.jpg', likes: '1.2k', link: 'https://instagram.com' },
    { id: 2, type: 'facebook', image: '/images/red-shorts.jpg', likes: '840', link: 'https://facebook.com' },
    { id: 3, type: 'instagram', image: '/images/tracksuit-flat.jpg', likes: '1.5k', link: 'https://instagram.com' },
    { id: 4, type: 'facebook', image: '/images/grey-pants.jpg', likes: '920', link: 'https://facebook.com' }
  ];

  return (
    <div className="relative">
      
      {/* ── HERO BANNER SECTION ── */}
      <section className="relative h-screen bg-brand-dark flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 transition-all duration-1000 scale-105"
          style={{ backgroundImage: `url('/images/model-tracksuit.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-8 z-10 pt-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-xs font-semibold uppercase tracking-widest text-brand-coral animate-pulse">
            <Zap className="w-3.5 h-3.5" /> High-Agility Performance Wear
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            ENGINEERED TO <br/>
            <span className="text-gradient-coral">CONQUER</span>
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

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 z-10">
          <span className="text-xxs uppercase tracking-widest text-gray-400 font-bold">Scroll Down</span>
          <div className="w-1 h-6 bg-white/20 rounded-full overflow-hidden">
            <div className="w-full h-1/2 bg-brand-coral rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ── CORE TECH SPECS ── */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark uppercase tracking-tight">
              ON7 Engineered Advantage
            </h2>
            <p className="text-brand-grey text-md font-medium mt-4">
              Designed in Punjab, engineered for performance. We select premium fibers that support natural body cooling and fluid flexibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-light p-8 rounded-2xl border border-gray-200/60 transition-custom scale-hover">
              <div className="w-12 h-12 rounded-xl bg-brand-coral/10 text-brand-coral flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark uppercase mb-3">Dry-Fit Technology</h3>
              <p className="text-brand-grey text-sm leading-relaxed">
                Hydrophobic fabrics draw moisture away from the skin, moving sweat to the surface where it evaporates instantly.
              </p>
            </div>

            <div className="bg-brand-light p-8 rounded-2xl border border-gray-200/60 transition-custom scale-hover">
              <div className="w-12 h-12 rounded-xl bg-brand-coral/10 text-brand-coral flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark uppercase mb-3">4-Way Stretch</h3>
              <p className="text-brand-grey text-sm leading-relaxed">
                Woven with high-grade spandex elasticity, providing complete physical mobility during squats, sprints, and jumps.
              </p>
            </div>

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

      {/* ── INTERACTIVE SIZE FINDER SECTION ── */}
      <section className="py-24 bg-brand-light border-b border-gray-200/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            {/* Title block */}
            <div className="space-y-4">
              <span className="text-brand-coral font-bold text-xs uppercase tracking-widest block">Fit Guide</span>
              <h2 className="text-3xl md:text-4xl font-black text-brand-dark uppercase tracking-tight">Find Your Perfect ON7 Fit</h2>
              <p className="text-brand-grey text-sm leading-relaxed">
                Since high-performance sportswear needs to sit perfectly, enter your height and weight details to check our recommended size catalog (S, M, L, XL, XXL).
              </p>
            </div>

            {/* Form & Result */}
            <div className="bg-brand-light p-6 rounded-2xl border border-gray-200">
              {recommendedSize ? (
                <div className="text-center space-y-4 animate-fade-in">
                  <span className="text-brand-grey text-xs uppercase font-bold tracking-wider">Your Recommended Size is</span>
                  <div className="text-6xl font-black text-brand-coral font-display">{recommendedSize}</div>
                  <button 
                    onClick={() => setRecommendedSize(null)}
                    className="text-xs text-brand-dark underline font-bold uppercase tracking-wider hover:text-brand-coral transition-colors"
                  >
                    Reset Sizer
                  </button>
                </div>
              ) : (
                <form onSubmit={calculateSize} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xxs font-bold text-brand-grey uppercase tracking-wider block mb-1">Height (cm)</label>
                      <input 
                        type="number" 
                        required 
                        placeholder="e.g. 175"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className="w-full px-3 py-2 bg-white rounded-lg border border-gray-200 outline-none text-sm focus:border-brand-coral"
                      />
                    </div>
                    <div>
                      <label className="text-xxs font-bold text-brand-grey uppercase tracking-wider block mb-1">Weight (kg)</label>
                      <input 
                        type="number" 
                        required 
                        placeholder="e.g. 70"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="w-full px-3 py-2 bg-white rounded-lg border border-gray-200 outline-none text-sm focus:border-brand-coral"
                      />
                    </div>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-brand-dark hover:bg-brand-coral text-white py-3 rounded-xl font-bold uppercase text-xs tracking-wider transition-colors shadow"
                  >
                    Calculate Size
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ── CATEGORY GRID WITH DYNAMIC BANNERS ── */}
      <section className="py-24 bg-white">
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

      {/* ── CUSTOMER TESTIMONIALS SECTION ── */}
      <section className="py-24 bg-brand-light border-t border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-coral font-bold text-xs uppercase tracking-widest block mb-2">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark uppercase tracking-tight">Trusted by Athletes</h2>
            <p className="text-brand-grey text-sm mt-3">Read how gym owners, trainers, and athletes review ON7 activewear.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex text-amber-400">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-brand-dark/90 text-sm italic leading-relaxed">
                    "{t.comment}"
                  </p>
                </div>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                  <div className="w-10 h-10 rounded-full bg-brand-coral/10 text-brand-coral flex items-center justify-center font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-brand-dark uppercase">{t.name}</h4>
                    <span className="text-xxs text-brand-grey font-semibold block">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL WALL SECTION (Instagram & Facebook Mock Grid) ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-coral font-bold text-xs uppercase tracking-widest block mb-2">Social Feed</span>
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark uppercase tracking-tight">ON7 Social Wall</h2>
            <p className="text-brand-grey text-sm mt-3">Tag us at **@ON7Active** on Instagram & Facebook to get featured.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {socialFeed.map(post => (
              <a 
                key={post.id}
                href={post.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative h-72 rounded-2xl overflow-hidden shadow border border-gray-200 block"
              >
                <img 
                  src={post.image} 
                  alt="Social post" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white gap-2">
                  {post.type === 'instagram' ? <Instagram className="w-8 h-8" /> : <Facebook className="w-8 h-8" />}
                  <span className="text-xs font-bold uppercase tracking-wider">{post.likes} Likes</span>
                </div>
              </a>
            ))}
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
            <span className="text-brand-coral font-bold text-xs uppercase tracking-widest block">Punjab Experience Store</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              VISIT OUR FLAGSHIP STORE IN JALANDHAR
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Every detail in ON7 gear is scrutinized—from the flatlock stitch seams that avoid chafing, to the micro-grid mesh zones built for heat dissipation. Drop by our Jalandhar complex (above Punjab & Sind Bank) to experience the fabric line.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="bg-white text-brand-dark hover:bg-brand-coral hover:text-white font-bold px-8 py-4 rounded-full transition-custom inline-flex items-center gap-2 text-sm uppercase tracking-wider"
              >
                Find Us on Map
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
