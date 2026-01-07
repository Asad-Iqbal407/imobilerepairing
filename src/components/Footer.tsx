"use client";

import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                {t.common.shopName}
              </span>
            </div>
            <p className="text-slate-400 text-lg max-w-sm leading-relaxed">
              {t.common.footerDesc}
            </p>
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.411 2.865 8.139 6.839 9.465.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.152-1.11-1.459-1.11-1.459-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.137 20.138 22 16.41 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-blue-500 mb-8">{t.common.contact}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 group cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="group-hover:text-white transition-colors">{t.common.address}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 group cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="group-hover:text-white transition-colors">{t.common.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 group cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="group-hover:text-white transition-colors">{t.common.email}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-blue-500 mb-8">{t.common.hours}</h3>
            <ul className="space-y-4">
              <li className="flex justify-between text-slate-400">
                <span>Mon-Fri</span>
                <span className="text-white font-bold">9am - 7pm</span>
              </li>
              <li className="flex justify-between text-slate-400">
                <span>Sat</span>
                <span className="text-white font-bold">10am - 5pm</span>
              </li>
              <li className="flex justify-between text-slate-400">
                <span>Sun</span>
                <span className="text-blue-500 font-bold">Closed</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} {t.common.shopName}. {t.common.rights}</p>
          <div className="flex gap-8 text-sm font-bold text-slate-500">
            <Link href="/terms" className="hover:text-white cursor-pointer transition-colors">{t.common.terms}</Link>
            <Link href="/cookies" className="hover:text-white cursor-pointer transition-colors">{t.common.cookies}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
