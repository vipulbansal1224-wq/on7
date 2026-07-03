'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Menu, X, Phone, Mail, MapPin, ArrowRight, Facebook, Instagram } from 'lucide-react';
import './globals.css';

// ON7 Logo Component using actual logo images (logo-1.jpeg and logo-2.jpeg) with 3D flip
const Logo = ({ light = false }: { light?: boolean }) => {
  const [flipped, setFlipped] = useState(false);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setFlipped(!flipped);
  };

  return (
    <div 
      onClick={handleLogoClick}
      className="flex items-center select-none cursor-pointer transition-transform duration-500 hover:scale-105"
      style={{ perspective: '1000px' }}
    >
      <div 
        className="relative transition-transform duration-700"
        style={{ 
          transformStyle: 'preserve-3d', 
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          width: '76px',
          height: '76px'
        }}
      >
        {/* Front Logo */}
        <div 
          className="absolute inset-0"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <img 
            src={light ? '/images/logo-dark.jpg' : '/images/logo-light.jpg'} 
            alt="ON7 Logo" 
            className="w-full h-full object-contain rounded"
          />
        </div>
        
        {/* Back Logo */}
        <div 
          className="absolute inset-0"
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)' 
          }}
        >
          <img 
            src={light ? '/images/logo-light.jpg' : '/images/logo-dark.jpg'} 
            alt="ON7 Logo Flipped" 
            className="w-full h-full object-contain rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Collection', href: '/collection' },
    { name: 'Dry-Fit Tech', href: '/technology' },
    { name: 'Our Story', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy', href: '/privacy-policy' },
    { name: 'Terms', href: '/terms-of-sale' },
  ];

  return (
    <html lang="en">
      <head>
        <title>ON7® Sportswear | Premium Engineered Activewear</title>
        <meta name="description" content="Discover ON7 Activewear. High-performance Dry-Fit tracksuits, athletic shorts, and joggers engineered for athletes." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-brand-light text-brand-dark font-sans antialiased overflow-x-hidden">
        {/* Navigation Header */}
        <header className={`fixed top-0 left-0 right-0 z-50 transition-custom ${
          scrolled ? 'glass-nav py-3 shadow-lg' : 'bg-transparent py-5'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/">
                <Logo light={scrolled || pathname === '/' || pathname === '/technology' || pathname === '/about'} />
              </Link>

              {/* Desktop Nav Links */}
              <nav className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  const isHeroDark = pathname === '/' || pathname === '/technology' || pathname === '/about';
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-sm font-semibold tracking-wide uppercase transition-all duration-300 relative py-1 ${
                        isActive
                          ? 'text-brand-coral'
                          : scrolled
                            ? 'text-gray-300 hover:text-white'
                            : isHeroDark
                              ? 'text-white/80 hover:text-white'
                              : 'text-brand-dark/80 hover:text-brand-coral'
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-coral rounded-full" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Action Icons */}
              <div className="hidden md:flex items-center gap-4">
                <button className={`p-2 rounded-full transition-colors ${
                  scrolled || pathname === '/' || pathname === '/technology' || pathname === '/about'
                    ? 'text-white hover:bg-white/10'
                    : 'text-brand-dark hover:bg-brand-dark/5'
                }`}>
                  <ShoppingBag className="w-5 h-5" />
                </button>
                <Link
                  href="/collection"
                  className="bg-brand-coral hover:bg-brand-coral/90 text-white font-bold text-xs uppercase px-5 py-2.5 rounded-full transition-custom shadow-md shadow-brand-coral/20 tracking-wider"
                >
                  Shop Now
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center gap-4">
                <button className={`p-2 rounded-full transition-colors ${
                  scrolled || pathname === '/' || pathname === '/technology' || pathname === '/about'
                    ? 'text-white'
                    : 'text-brand-dark'
                }`}>
                  <ShoppingBag className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`p-2 rounded-full transition-colors ${
                    scrolled || pathname === '/' || pathname === '/technology' || pathname === '/about'
                      ? 'text-white hover:bg-white/10'
                      : 'text-brand-dark hover:bg-brand-dark/5'
                  }`}
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Drawer Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden fixed inset-0 top-[60px] bg-brand-dark/95 backdrop-blur-lg z-40 transition-custom flex flex-col justify-between py-8 px-6">
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-xl font-bold uppercase tracking-wider ${
                      pathname === link.href ? 'text-brand-coral' : 'text-gray-300'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-4">
                <Link
                  href="/collection"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-brand-coral text-white font-bold text-center uppercase py-4 rounded-xl shadow-lg"
                >
                  Browse Catalog
                </Link>
              </div>
            </div>
          )}
        </header>

        {/* Content Wrapper */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Premium Brand Footer */}
        <footer className="bg-brand-dark text-white border-t border-white/5 pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              {/* Brand Col */}
            <div className="space-y-6">
                <Logo light />
                <p className="text-gray-400 text-sm leading-relaxed">
                  ON7® is premium performance activewear designed for extreme comfort, sweat-wicking agility, and athletic precision. Engineered for those who move.
                </p>
                <div className="flex gap-4 items-center">
                  <a href="https://facebook.com/on7active" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-coral transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://instagram.com/on7active" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-coral transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <span className="text-xs text-gray-500 uppercase tracking-wider ml-2">@ON7Active</span>
                </div>
            </div>

              {/* Links Col */}
              <div>
                <h4 className="text-white uppercase font-bold text-xs tracking-widest mb-6">Product Catalog</h4>
                <ul className="space-y-3">
                  {['High-Stretch Tracksuits', 'Dry-Fit Sports Shorts', 'Athletic Gym Pants', 'Compression Layers', 'Accessories'].map((item) => (
                    <li key={item}>
                      <Link href="/collection" className="text-gray-400 hover:text-brand-coral text-sm transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Info Col */}
              <div>
                <h4 className="text-white uppercase font-bold text-xs tracking-widest mb-6">Technology & Design</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/technology" className="text-gray-400 hover:text-brand-coral text-sm transition-colors">
                      Dry-Fit Agility Fabric
                    </Link>
                  </li>
                  <li>
                    <Link href="/technology" className="text-gray-400 hover:text-brand-coral text-sm transition-colors">
                      Micro-Grid Ventilation
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-400 hover:text-brand-coral text-sm transition-colors">
                      Jasspaul Bawa Vision
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-400 hover:text-brand-coral text-sm transition-colors">
                      Become a Retailer
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Col */}
              <div>
                <h4 className="text-white uppercase font-bold text-xs tracking-widest mb-6">ON7 Head Office</h4>
                <ul className="space-y-4 text-gray-400 text-sm">
                  <li className="flex gap-3">
                    <MapPin className="w-5 h-5 text-brand-coral flex-shrink-0" />
                    <span>Gumber Complex, shop no 5, upstair Punjab & Sind Bank Kapurthala Road, Bawa Khel, Jalandhar Punjab 144021</span>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="w-5 h-5 text-brand-coral flex-shrink-0" />
                    <span>+91 83605 40321</span>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="w-5 h-5 text-brand-coral flex-shrink-0" />
                    <span>care@on7.in</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
              <p className="text-xs text-gray-400 leading-relaxed">
                © {new Date().getFullYear()} ON7 Activewear. All rights reserved. <br className="sm:hidden" />
                <span className="text-white font-semibold">Site created by IIBS (Innovative Ideas & Business Solutions) - 9988776628</span>
              </p>
              <div className="flex gap-6 text-xs text-gray-500 font-medium">
                <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms-of-sale" className="hover:text-white transition-colors">Terms of Sale</Link>
                <Link href="/secure-checkout" className="hover:text-white transition-colors">Secure Checkout</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
