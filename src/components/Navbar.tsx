"use client";

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const { items } = useCart();
  const { language, setLanguage, t } = useLanguage();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="group flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-blue-600/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-2xl font-black text-slate-900 tracking-tight">
                {t.common.shopName}
              </span>
            </Link>
            <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
              {[
                { href: "/", label: t.common.home },
                { href: "/services", label: t.common.services },
                { href: "/shop", label: t.common.shop },
                { href: "/contact", label: t.common.contact },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-500 hover:text-blue-600 inline-flex items-center px-1 pt-1 text-sm font-bold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-6">
            {/* Language Switcher */}
            <div className="flex p-1 bg-slate-100 rounded-xl">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                  language === 'en'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('pt')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                  language === 'pt'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                PT
              </button>
            </div>

            <Link href="/cart" className="group relative p-2.5 text-slate-500 hover:text-blue-600 bg-slate-50 rounded-xl transition-all hover:bg-blue-50">
              <span className="sr-only">{t.common.cart}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-[10px] font-black text-white bg-blue-600 rounded-full border-2 border-white shadow-sm">
                  {itemCount}
                </span>
              )}
            </Link>
            <Link 
              href="/get-quote"
              className="bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-600/20 active:scale-95"
            >
              {t.common.getQuote}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
