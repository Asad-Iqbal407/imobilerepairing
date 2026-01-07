"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useData } from "@/context/DataContext";
import Link from "next/link";
import Image from "next/image";
import { getServiceEmoji } from "@/lib/utils";

export default function Services() {
  const { services } = useData();
  const { t } = useLanguage();

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
              {t.services.title}
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              {t.services.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <div
                key={service.id}
                className="group bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden flex flex-col hover:-translate-y-2"
              >
                <div className="h-64 relative overflow-hidden bg-slate-100">
                  {service.image ? (
                    <Image
                      src={isValidUrl(service.image) ? service.image : "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1000&auto=format&fit=crop"}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl">{getServiceEmoji(service.title, service.description)}</div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-10 flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors flex items-center gap-3">
                    <span className="text-3xl">{getServiceEmoji(service.title, service.description)}</span>
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>
                <div className="px-10 py-8 bg-slate-50 border-t border-slate-100 flex items-center justify-between mt-auto group-hover:bg-blue-50 transition-colors">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">{t.common.from}</span>
                    <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
                      ${service.price}
                    </span>
                  </div>
                  <Link
                    href={`/get-quote?service=${encodeURIComponent(service.title)}`}
                    className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2 group/btn"
                  >
                    {t.common.getQuote}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Why Trust Our Repairs?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Certified Parts", desc: "We use only high-quality, certified replacement parts for all devices." },
              { title: "90-Day Warranty", desc: "All our repairs come with a comprehensive 90-day warranty for peace of mind." },
              { title: "Expert Technicians", desc: "Our team consists of highly skilled and experienced mobile technicians." }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
