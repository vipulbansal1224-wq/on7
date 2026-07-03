'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Menu, X, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import './globals.css';

// Stylized ON7 SVG Logo Component
const Logo = ({ light = false }: { light?: boolean }) => (
  <div className="flex items-center gap-2 select-none">
    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 ${
      light ? 'border-white text-white' : 'border-brand-coral text-brand-coral'
    }`}>
      <svg className="w-5 h-5" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeDasharray="210 50" />
        <path d="M38 62 L62 38 M62 38 H46 M62 38 V54" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <span className={`font-display font-black text-2xl tracking-tighter ${
      light ? 'text-white' : 'text-brand-dark'
    }`}>
      ON<span className={light ? 'text-white' : 'text-brand-coral'}>7</span>
    </span>
  </div>
);

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
                <Logo light={scrolled ? true : false || pathname === '/technology' || pathname === '/about'} />
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
                <div className="flex gap-4">
                  {/* Social Handles */}
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Follow Us: @ON7Active</span>
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
                      Vipul Bansal Vision
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
                    <span>1224, Phase 2, Dugri, Near Comm Center, Ludhiana, Punjab 141013, India</span>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="w-5 h-5 text-brand-coral flex-shrink-0" />
                    <span>+91 98765 43210</span>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="w-5 h-5 text-brand-coral flex-shrink-0" />
                    <span>care@on7.in</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs text-gray-500">
                © {new Date().getFullYear()} ON7 Activewear. All rights reserved. Created in Ludhiana, Punjab.
              </p>
              <div className="flex gap-6 text-xs text-gray-500">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Sale</a>
                <a href="#" className="hover:text-white">Secure Checkout</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
