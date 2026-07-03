'use client';

import React, { useState } from 'react';
import { Filter, ShoppingBag, Eye, SlidersHorizontal, Check } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: 'tracksuits' | 'shorts' | 'pants';
  price: string;
  image: string;
  tag?: string;
  sizes: string[];
  desc: string;
}

export default function Collection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [cartFeedback, setCartFeedback] = useState<number | null>(null);

  const products: Product[] = [
    {
      id: 1,
      name: "ON7® Engineered Performance Tracksuit",
      category: "tracksuits",
      price: "₹2,499",
      image: "/images/model-tracksuit.jpg",
      tag: "Best Seller",
      sizes: ["S", "M", "L", "XL", "XXL"],
      desc: "Dry-fit performance tracksuit featuring a high-stretch mock neck jacket and tapered athletic joggers."
    },
    {
      id: 2,
      name: "ON7® Branded Gym Training Shorts",
      category: "shorts",
      price: "₹899",
      image: "/images/red-shorts.jpg",
      tag: "Hot Release",
      sizes: ["M", "L", "XL", "XXL"],
      desc: "Lightweight workout shorts carrying our iconic circular logo prints with multi-panel athletic stripes."
    },
    {
      id: 3,
      name: "ON7® Micro-Panel Casual Tracksuit",
      category: "tracksuits",
      price: "₹2,299",
      image: "/images/tracksuit-flat.jpg",
      sizes: ["S", "M", "L", "XL"],
      desc: "Designed for everyday recovery workouts. Features black polyester layout with blue panel detailing."
    },
    {
      id: 4,
      name: "ON7® Agility Fit Joggers",
      category: "pants",
      price: "₹1,499",
      image: "/images/grey-pants.jpg",
      tag: "New Color",
      sizes: ["S", "M", "L", "XL", "XXL"],
      desc: "High-mobility steel grey sweatpants with zippered hip pockets and custom ankle-rib elastic cuffs."
    },
    {
      id: 5,
      name: "ON7® Elite Tracksuit (Slate Navy)",
      category: "tracksuits",
      price: "₹2,599",
      image: "/images/tracksuit-flat.jpg",
      sizes: ["M", "L", "XL"],
      desc: "Premium track jacket and track pants combo with dynamic ventilation mesh inserts."
    },
    {
      id: 6,
      name: "ON7® Training Shorts (Carbon Black)",
      category: "shorts",
      price: "₹949",
      image: "/images/red-shorts.jpg",
      sizes: ["S", "M", "L", "XL"],
      desc: "Ultra-breathable micro-mesh training shorts. Engineered to withstand intense high-interval running."
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const handleAddToCart = (id: number) => {
    setCartFeedback(id);
    setTimeout(() => setCartFeedback(null), 1500);
  };

  const categories = [
    { key: 'all', label: 'All Gear' },
    { key: 'tracksuits', label: 'Tracksuits' },
    { key: 'shorts', label: 'Shorts' },
    { key: 'pants', label: 'Joggers & Pants' }
  ];

  return (
    <div className="bg-brand-light min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="border-b border-gray-200 pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-brand-coral font-bold text-xs uppercase tracking-widest block mb-2">ON7 Catalog</span>
            <h1 className="text-4xl md:text-5xl font-black text-brand-dark uppercase tracking-tight">Activewear Collection</h1>
          </div>
          
          {/* Active Product Count */}
          <div className="text-brand-grey text-sm font-semibold flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm">
            <SlidersHorizontal className="w-4 h-4 text-brand-coral" />
            Showing {filteredProducts.length} premium products
          </div>
        </div>

        {/* Catalog layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* LEFT: Filters Panel (Desktop) */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6">
              <h3 className="text-xs uppercase font-bold text-brand-dark tracking-widest flex items-center gap-2">
                <Filter className="w-4 h-4 text-brand-coral" /> Filter Categories
              </h3>
              
              <div className="flex flex-col gap-2">
                {categories.map(cat => (
                  <button
                    key={cat.key}
                    onClick={() => setSelectedCategory(cat.key)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-between ${
                      selectedCategory === cat.key
                        ? 'bg-brand-dark text-white shadow-md'
                        : 'bg-brand-light hover:bg-gray-200/55 text-brand-dark'
                    }`}
                  >
                    {cat.label}
                    {selectedCategory === cat.key && <Check className="w-4 h-4 text-brand-coral" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Grid List */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <div 
                  key={product.id} 
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm transition-custom hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
                >
                  {/* Card Image */}
                  <div className="relative h-80 overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Tags */}
                    {product.tag && (
                      <span className="absolute top-4 left-4 bg-brand-coral text-white text-xxs font-extrabold uppercase px-3 py-1 rounded-full tracking-wider shadow-md">
                        {product.tag}
                      </span>
                    )}

                    {/* Actions Overlay */}
                    <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <button className="bg-white hover:bg-brand-coral text-brand-dark hover:text-white p-3 rounded-full transition-colors shadow-md">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="font-bold text-brand-dark text-md uppercase leading-tight group-hover:text-brand-coral transition-colors line-clamp-2">
                          {product.name}
                        </h4>
                      </div>
                      <p className="text-gray-400 text-xs line-clamp-2 font-medium">
                        {product.desc}
                      </p>
                      
                      {/* Sizes Showcase */}
                      <div className="flex gap-1.5 pt-2">
                        {product.sizes.map(size => (
                          <span key={size} className="text-xxs font-bold text-brand-grey bg-brand-light px-2 py-0.5 border border-gray-200 rounded">
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                      <span className="font-display font-black text-xl text-brand-dark">{product.price}</span>
                      <button 
                        onClick={() => handleAddToCart(product.id)}
                        className={`font-semibold text-xs uppercase px-4 py-2.5 rounded-full tracking-wide transition-custom flex items-center gap-1.5 shadow ${
                          cartFeedback === product.id
                            ? 'bg-brand-coral text-white'
                            : 'bg-brand-dark hover:bg-brand-coral text-white hover:text-white'
                        }`}
                      >
                        {cartFeedback === product.id ? (
                          <>
                            <Check className="w-3.5 h-3.5" /> Added
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5" /> Add To Bag
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
