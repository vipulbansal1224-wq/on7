'use client';

import React, { useState, useEffect } from 'react';
import { ShieldAlert, Trash2, Edit, Plus, LogOut, Check, ArrowLeft, RefreshCw } from 'lucide-react';

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

export default function AdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  // CRUD States
  const [productsList, setProductsList] = useState<Product[]>([]);
  const [activeTab, setActiveTab] = useState<'list' | 'form'>('list');
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Form Fields
  const [formName, setFormName] = useState('');
  const [formCategory, setFormCategory] = useState<'tracksuits' | 'shorts' | 'pants'>('tracksuits');
  const [formPrice, setFormPrice] = useState('₹1,499');
  const [formImageNum, setFormImageNum] = useState('1');
  const [formTag, setFormTag] = useState('');
  const [formSizes, setFormSizes] = useState<string[]>(["M", "L", "XL"]);
  const [formDesc, setFormDesc] = useState('');

  const [notification, setNotification] = useState<string | null>(null);

  // Check login state on mount
  useEffect(() => {
    const auth = sessionStorage.getItem('on7_admin_auth');
    if (auth === 'true') {
      setIsLoggedIn(true);
    }
    loadProducts();
  }, []);

  const loadProducts = () => {
    const stored = localStorage.getItem('on7_products');
    if (stored) {
      setProductsList(JSON.parse(stored));
    } else {
      // Build default 61 products if none exist in localStorage
      const defaults = Array.from({ length: 61 }, (_, idx) => {
        const id = idx + 1;
        const categories: ('tracksuits' | 'shorts' | 'pants')[] = ['tracksuits', 'shorts', 'pants'];
        const category = categories[idx % 3];
        const prices = ["₹2,499", "₹899", "₹1,499", "₹2,299", "₹949", "₹1,299"];
        const price = prices[idx % prices.length];
        const sizes = id % 2 === 0 ? ["S", "M", "L", "XL", "XXL"] : ["M", "L", "XL"];
        
        let tag = undefined;
        if (id % 5 === 0) tag = "Best Seller";
        else if (id % 7 === 0) tag = "New Arrival";
        
        return {
          id,
          name: category === 'tracksuits' ? "ON7® Pro-Agility Active Tracksuit" : category === 'shorts' ? "ON7® High-Performance Training Shorts" : "ON7® Tapered Fit Gym Jogger Pants",
          category,
          price,
          image: `/images/product-${id}.jpg`,
          tag,
          sizes,
          desc: "High-end activewear from the ON7 collection. Designed with dry-fit hydrophobic yarn for temperature regulation and flatlock seam stitching."
        };
      });
      localStorage.setItem('on7_products', JSON.stringify(defaults));
      setProductsList(defaults);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'jain@2030' || password === 'admin@on7') {
      setIsLoggedIn(true);
      setLoginError(false);
      sessionStorage.setItem('on7_admin_auth', 'true');
    } else {
      setLoginError(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('on7_admin_auth');
  };

  const resetForm = () => {
    setFormName('');
    setFormCategory('tracksuits');
    setFormPrice('₹1,499');
    setFormImageNum('1');
    setFormTag('');
    setFormSizes(["M", "L", "XL"]);
    setFormDesc('');
    setEditingProduct(null);
  };

  const handleEditClick = (prod: Product) => {
    setEditingProduct(prod);
    setFormName(prod.name);
    setFormCategory(prod.category);
    setFormPrice(prod.price);
    
    // Extract product number from image path e.g. "/images/product-5.jpg" -> 5
    const match = prod.image.match(/product-(\d+)/);
    setFormImageNum(match ? match[1] : '1');
    
    setFormTag(prod.tag || '');
    setFormSizes(prod.sizes);
    setFormDesc(prod.desc);
    setActiveTab('form');
  };

  const handleDeleteClick = (id: number) => {
    if (confirm(`Are you sure you want to delete Product #${id}?`)) {
      const updated = productsList.filter(p => p.id !== id);
      localStorage.setItem('on7_products', JSON.stringify(updated));
      setProductsList(updated);
      showNotice(`Product #${id} Deleted!`);
    }
  };

  const handleSizeToggle = (size: string) => {
    if (formSizes.includes(size)) {
      setFormSizes(formSizes.filter(s => s !== size));
    } else {
      setFormSizes([...formSizes, size]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formPrice) return;

    let updatedList = [...productsList];

    if (editingProduct) {
      // Edit mode
      updatedList = productsList.map(p => {
        if (p.id === editingProduct.id) {
          return {
            ...p,
            name: formName,
            category: formCategory,
            price: formPrice,
            image: `/images/product-${formImageNum}.jpg`,
            tag: formTag || undefined,
            sizes: formSizes,
            desc: formDesc || "Premium athletic activewear designed by ON7."
          };
        }
        return p;
      });
      showNotice("Product details updated successfully!");
    } else {
      // Add mode
      const nextId = productsList.length > 0 ? Math.max(...productsList.map(p => p.id)) + 1 : 1;
      const newProd: Product = {
        id: nextId,
        name: formName,
        category: formCategory,
        price: formPrice,
        image: `/images/product-${formImageNum}.jpg`,
        tag: formTag || undefined,
        sizes: formSizes,
        desc: formDesc || "Premium athletic activewear designed by ON7."
      };
      updatedList.unshift(newProd); // Add to beginning of grid
      showNotice("New product added to catalog!");
    }

    localStorage.setItem('on7_products', JSON.stringify(updatedList));
    setProductsList(updatedList);
    resetForm();
    setActiveTab('list');
  };

  const showNotice = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const resetToFactoryDefaults = () => {
    if (confirm("⚠️ Warning: This will delete all custom modifications and restore the original 61 products. Proceed?")) {
      localStorage.removeItem('on7_products');
      loadProducts();
      showNotice("Restored to 61 default activewear products!");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="bg-brand-dark min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-brand-navy/60 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-full bg-brand-coral/10 text-brand-coral flex items-center justify-center mx-auto mb-4 border border-brand-coral/30">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <h2 className="text-white text-3xl font-black uppercase tracking-tight font-display">Admin Portal</h2>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Access Restricted to ON7 Team</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xxs font-bold text-gray-400 uppercase tracking-widest block">Access Password</label>
              <input 
                type="password" 
                required
                placeholder="Enter password (e.g. jain@2030)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-brand-dark rounded-xl border border-white/10 text-white text-sm outline-none focus:border-brand-coral transition-colors"
              />
            </div>

            {loginError && (
              <p className="text-red-500 text-xs font-bold text-center">❌ Invalid password. Please try again.</p>
            )}

            <button 
              type="submit"
              className="w-full bg-brand-coral hover:bg-brand-coral/95 text-white py-3 rounded-xl font-bold uppercase text-xs tracking-wider transition-colors shadow-lg shadow-brand-coral/20"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-light min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dashboard Header */}
        <div className="border-b border-gray-200 pb-8 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-brand-coral font-bold text-xs uppercase tracking-widest block mb-2">ON7 Manager Console</span>
            <h1 className="text-4xl md:text-5xl font-black text-brand-dark uppercase tracking-tight">System Admin Panel</h1>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={resetToFactoryDefaults}
              className="bg-white hover:bg-red-50 text-red-500 border border-red-200 font-bold text-xs uppercase px-5 py-3 rounded-xl transition-colors flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" /> Reset Defaults
            </button>
            <button 
              onClick={handleLogout}
              className="bg-brand-dark hover:bg-brand-coral text-white font-bold text-xs uppercase px-5 py-3 rounded-xl transition-colors flex items-center gap-2 shadow"
            >
              <LogOut className="w-4 h-4" /> Log Out
            </button>
          </div>
        </div>

        {/* Floating Notification */}
        {notification && (
          <div className="fixed top-24 right-8 bg-brand-dark text-white border border-brand-coral/30 px-6 py-4 rounded-2xl shadow-2xl z-50 flex items-center gap-3 animate-fade-in font-semibold text-sm">
            <Check className="w-5 h-5 text-brand-coral" /> {notification}
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-8 gap-4">
          <button 
            onClick={() => { setActiveTab('list'); resetForm(); }}
            className={`pb-4 px-2 font-bold text-sm uppercase tracking-wide border-b-2 transition-all ${
              activeTab === 'list' 
                ? 'border-brand-coral text-brand-coral' 
                : 'border-transparent text-brand-grey hover:text-brand-dark'
            }`}
          >
            Product List ({productsList.length})
          </button>
          <button 
            onClick={() => setActiveTab('form')}
            className={`pb-4 px-2 font-bold text-sm uppercase tracking-wide border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'form' 
                ? 'border-brand-coral text-brand-coral' 
                : 'border-transparent text-brand-grey hover:text-brand-dark'
            }`}
          >
            <Plus className="w-4 h-4" /> {editingProduct ? 'Edit Product' : 'Add New Product'}
          </button>
        </div>

        {/* TAB 1: PRODUCT LIST PANEL */}
        {activeTab === 'list' && (
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-brand-light text-brand-grey text-xxs font-bold uppercase tracking-wider border-b border-gray-200">
                    <th className="py-4 px-6">Product details</th>
                    <th className="py-4 px-6">Category</th>
                    <th className="py-4 px-6">Price</th>
                    <th className="py-4 px-6">Sizes</th>
                    <th className="py-4 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm font-medium">
                  {productsList.map(prod => (
                    <tr key={prod.id} className="hover:bg-brand-light/50 transition-colors">
                      <td className="py-4 px-6 flex items-center gap-4">
                        <img 
                          src={prod.image} 
                          alt={prod.name} 
                          className="w-12 h-12 object-cover rounded-lg bg-gray-100 border border-gray-200" 
                        />
                        <div>
                          <div className="font-bold text-brand-dark uppercase tracking-tight">{prod.name}</div>
                          <div className="text-xxs text-brand-coral font-bold uppercase tracking-wider mt-0.5">
                            ID #{prod.id} {prod.tag ? `| ${prod.tag}` : ''}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-brand-grey uppercase text-xs font-bold">{prod.category}</td>
                      <td className="py-4 px-6 font-display font-black text-brand-dark">{prod.price}</td>
                      <td className="py-4 px-6">
                        <div className="flex gap-1">
                          {prod.sizes.map(s => (
                            <span key={s} className="text-xxs font-bold text-brand-grey bg-brand-light border border-gray-200 px-2 py-0.5 rounded">
                              {s}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button 
                            onClick={() => handleEditClick(prod)}
                            className="p-2 bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleDeleteClick(prod.id)}
                            className="p-2 bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: ADD / EDIT PRODUCT FORM */}
        {activeTab === 'form' && (
          <div className="max-w-3xl bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-sm space-y-8">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => { setActiveTab('list'); resetForm(); }}
                className="p-2 bg-brand-light border border-gray-200 hover:bg-gray-200/50 rounded-full transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <h3 className="font-bold text-xl uppercase text-brand-dark">
                {editingProduct ? `Edit Product (ID #${editingProduct.id})` : 'Create New Product'}
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Product Name */}
                <div className="space-y-1.5">
                  <label className="text-xxs font-bold text-brand-grey uppercase tracking-wider block">Product Name *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. ON7® Elite Performance Tracksuit"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-brand-coral outline-none bg-brand-light transition-colors"
                  />
                </div>

                {/* Category */}
                <div className="space-y-1.5">
                  <label className="text-xxs font-bold text-brand-grey uppercase tracking-wider block">Category *</label>
                  <select 
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value as any)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-brand-coral outline-none bg-brand-light transition-colors"
                  >
                    <option value="tracksuits">Tracksuits</option>
                    <option value="shorts">Shorts</option>
                    <option value="pants">Joggers & Pants</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Price */}
                <div className="space-y-1.5">
                  <label className="text-xxs font-bold text-brand-grey uppercase tracking-wider block">Price (with ₹) *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. ₹1,499"
                    value={formPrice}
                    onChange={(e) => setFormPrice(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-brand-coral outline-none bg-brand-light transition-colors font-semibold"
                  />
                </div>

                {/* Image Number selector */}
                <div className="space-y-1.5">
                  <label className="text-xxs font-bold text-brand-grey uppercase tracking-wider block">Image Number (1 to 61) *</label>
                  <input 
                    type="number" 
                    required
                    min="1"
                    max="61"
                    placeholder="Pick image index"
                    value={formImageNum}
                    onChange={(e) => setFormImageNum(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-brand-coral outline-none bg-brand-light transition-colors font-semibold"
                  />
                </div>

                {/* Tag */}
                <div className="space-y-1.5">
                  <label className="text-xxs font-bold text-brand-grey uppercase tracking-wider block">Highlight Tag (Optional)</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Best Seller, New Arrival"
                    value={formTag}
                    onChange={(e) => setFormTag(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-brand-coral outline-none bg-brand-light transition-colors"
                  />
                </div>
              </div>

              {/* Sizes checkboxes */}
              <div className="space-y-2">
                <label className="text-xxs font-bold text-brand-grey uppercase tracking-wider block">Available Sizes</label>
                <div className="flex gap-4">
                  {["S", "M", "L", "XL", "XXL"].map(size => {
                    const isChecked = formSizes.includes(size);
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => handleSizeToggle(size)}
                        className={`w-12 h-12 rounded-xl font-bold text-sm transition-all border flex items-center justify-center ${
                          isChecked 
                            ? 'bg-brand-dark border-brand-dark text-white' 
                            : 'bg-brand-light border-gray-200 text-brand-grey hover:bg-gray-200/50'
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-1.5">
                <label className="text-xxs font-bold text-brand-grey uppercase tracking-wider block">Product Description</label>
                <textarea 
                  rows={4}
                  placeholder="Enter detailed activewear specifications..."
                  value={formDesc}
                  onChange={(e) => setFormDesc(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-brand-coral outline-none bg-brand-light transition-colors resize-none"
                />
              </div>

              {/* Submit buttons */}
              <div className="flex gap-4">
                <button 
                  type="button" 
                  onClick={() => { setActiveTab('list'); resetForm(); }}
                  className="w-1/2 bg-gray-100 hover:bg-gray-200 text-brand-dark py-4 rounded-xl font-bold uppercase text-xs tracking-wider transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="w-1/2 bg-brand-dark hover:bg-brand-coral text-white py-4 rounded-xl font-bold uppercase text-xs tracking-wider transition-colors shadow"
                >
                  {editingProduct ? 'Save Changes' : 'Publish Product'}
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
