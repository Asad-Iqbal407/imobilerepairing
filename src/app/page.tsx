"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import ReviewSection from "@/components/ReviewSection";

export default function Home() {
  const { t } = useLanguage();

  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: t.home.fastTurnaround,
      desc: t.home.fastTurnaroundDesc,
      color: "blue"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: t.home.qualityParts,
      desc: t.home.qualityPartsDesc,
      color: "emerald"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t.home.bestPrices,
      desc: t.home.bestPricesDesc,
      color: "amber"
    }
  ];

  const stats = [
    { label: "Repairs Done", value: "5,000+" },
    { label: "Happy Customers", value: "99%" },
    { label: "Expert Technicians", value: "15+" },
    { label: "Years Experience", value: "10+" }
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-8 animate-in slide-in-from-left duration-1000">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                #1 Rated {t.common.shopName}
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
                {t.home.heroTitle.split(' ').slice(0, -1).join(' ')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">{t.home.heroTitle.split(' ').pop()}</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 max-w-xl leading-relaxed">
                {t.home.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/get-quote"
                  className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 hover:-translate-y-1 flex items-center gap-2 group"
                >
                  {t.common.getQuote}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm"
                >
                  {t.home.ourServices}
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-xs font-bold text-white">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full rounded-full" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-500 font-medium">Trusted by 5,000+ users</p>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block animate-in zoom-in duration-1000">
              <div className="relative z-10 bg-gradient-to-tr from-slate-800 to-slate-700 p-2 rounded-[3rem] shadow-2xl border border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" 
                  alt="Repair Technician" 
                  className="rounded-[2.5rem] w-full h-auto shadow-inner"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce">
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">Status</p>
                    <p className="text-slate-900 font-bold">Repair Success</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/30 rounded-full blur-[100px] z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center space-y-1">
                <p className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">{stat.value}</p>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em]">{t.home.whyChooseUs}</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">Experience Excellence in Mobile Repair</h3>
            <p className="text-xl text-slate-500 leading-relaxed">We combine technical expertise with premium parts to deliver the best repair service in the city.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="group p-8 bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100">
                <div className={`w-16 h-16 rounded-2xl bg-${feature.color}-50 text-${feature.color}-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h4>
                <p className="text-slate-500 leading-relaxed text-lg">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em]">{t.home.whatWeRepair}</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">Comprehensive Solutions</h3>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all text-lg"
            >
              {t.home.viewAllServices}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: t.home.screenRepair, icon: "📱", color: "blue" },
              { name: t.home.batteryReplacement, icon: "🔋", color: "emerald" },
              { name: t.home.waterDamage, icon: "💧", color: "cyan" },
              { name: t.home.chargingPort, icon: "🔌", color: "amber" }
            ].map((service, i) => (
              <div key={i} className="relative group overflow-hidden rounded-3xl bg-slate-50 border border-slate-100 p-8 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 grayscale group-hover:grayscale-0">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{service.name}</h4>
                <p className="text-slate-500 text-sm">Professional repair with warranty included.</p>
                <div className={`absolute bottom-0 left-0 h-1 bg-${service.color}-500 w-0 group-hover:w-full transition-all duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewSection />

      {/* CTA Section */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto relative rounded-[3rem] bg-slate-900 overflow-hidden p-12 md:p-24">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 translate-x-1/4"></div>
          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-8">
            <h3 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">Ready to Get Your Device Fixed?</h3>
            <p className="text-xl text-slate-400 leading-relaxed">
              Don't let a broken screen or dead battery slow you down. Get a free quote online or visit our shop today.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                href="/get-quote"
                className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 hover:-translate-y-1"
              >
                Get a Free Quote Now
              </Link>
              <Link
                href="/contact"
                className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-bold text-xl hover:bg-slate-100 transition-all hover:-translate-y-1"
              >
                {t.home.contactUs}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
