"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { useData } from '@/context/DataContext';
import { useLanguage } from '@/context/LanguageContext';
import DynamicText from '@/components/DynamicText';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Tag } from 'lucide-react';
import { ProductSkeleton } from '@/components/Skeleton';
import { isValidUrl } from '@/lib/utils';

export default function ShopClient() {
  const { addToCart } = useCart();
  const { products, isLoading } = useData();
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('All');

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
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {isLoading ? (
                Array.from({ length: 8 }).map((_, i) => (
                  <ProductSkeleton key={`skeleton-${i}`} />
                ))
              ) : (
                filteredProducts.map((product, index) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={product.id || `product-${index}`}
                    className="group bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden flex flex-col hover:-translate-y-2"
                  >
                    <div className="h-64 bg-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
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
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black bg-blue-50 text-blue-600 uppercase tracking-widest border border-blue-100">
                            <Tag className="w-3 h-3" />
                            <DynamicText text={product.category} />
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                          <DynamicText text={product.name} />
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                          <DynamicText text={product.description} />
                        </p>
                      </div>
                      <div className="mt-4 flex items-center justify-between pt-6 border-t border-slate-50">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none mb-1.5">{t.common.price}</span>
                          <span className="text-2xl font-black text-slate-900 tracking-tight">
                            ${product.price}
                          </span>
                        </div>
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={() => addToCart({
                            id: product.id,
                            title: product.name,
                            price: product.price
                          })}
                          className="bg-blue-600 text-white p-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 group/btn"
                        >
                          <Plus className="h-6 w-6 group-hover/btn:rotate-90 transition-transform duration-300" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
