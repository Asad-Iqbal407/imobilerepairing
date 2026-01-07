"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { useData } from '@/context/DataContext';
import { useLanguage } from '@/context/LanguageContext';

export default function Shop() {
  const { addToCart } = useCart();
  const { products } = useData();
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const isValidUrl = (url: string) => {
    try {
      if (!url || typeof url !== 'string') return false;
      if (url.startsWith('/uploads/')) return true; // Local uploads are valid
      if (!url.startsWith('http') && !url.startsWith('/')) return false;
      new URL(url.startsWith('http') ? url : `http://localhost${url}`);
      return true;
    } catch {
      return false;
    }
  };

  const categories = [
    { id: 'All', label: t.shop.filterAll, icon: "🏷️" },
    { id: 'New Phones', label: t.shop.filterNewPhones, icon: "📱" },
    { id: 'Refurbished Phones', label: t.shop.filterRefurbishedPhones, icon: "🔄" },
    { id: '2nd Hand Phones', label: t.shop.filterSecondHandPhones, icon: "🤝" },
    { id: 'Tablets', label: t.shop.filterTablets, icon: "📟" },
    { id: 'Cables', label: t.shop.filterCables, icon: "🔌" },
    { id: 'Chargers', label: t.shop.filterChargers, icon: "⚡" },
    { id: 'Powerbanks', label: t.shop.filterPowerbanks, icon: "🔋" },
    { id: 'Earbuds', label: t.shop.filterEarbuds, icon: "🎧" },
    { id: 'Adapters', label: t.shop.filterAdapters, icon: "🔌" },
    { id: 'Speakers', label: t.shop.filterSpeakers, icon: "🔊" },
    { id: 'Cases', label: t.shop.filterCases, icon: "📱" },
    { id: 'Other', label: t.shop.filterOther, icon: "📦" }
  ];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category?.trim().toLowerCase() === activeCategory.trim().toLowerCase());

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-purple-600/10 -skew-x-12 -translate-x-1/4 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              {t.shop.title}
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              {t.shop.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-8 py-3 rounded-2xl font-bold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20 scale-105'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 shadow-sm'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden flex flex-col hover:-translate-y-2"
              >
                <div className="h-64 bg-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-10"></div>
                  <Image 
                    src={isValidUrl(product.image) ? product.image : "https://images.unsplash.com/photo-1560393464-5c69a73c5770?q=80&w=1000&auto=format&fit=crop"} 
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-600 uppercase tracking-wider border border-blue-100">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      {product.description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">{t.common.price}</span>
                      <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
                        ${product.price}
                      </span>
                    </div>
                    <button
                      onClick={() => addToCart({
                        id: product.id,
                        title: product.name,
                        price: product.price
                      })}
                      className="bg-blue-600 text-white p-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 group/btn active:scale-95"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover/btn:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
