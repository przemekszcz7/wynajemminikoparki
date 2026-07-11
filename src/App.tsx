/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Wrench, 
  HardHat, 
  Sprout, 
  Droplet, 
  Layers, 
  Construction, 
  Activity, 
  Gauge, 
  Zap, 
  RotateCw, 
  Plus, 
  Check, 
  ExternalLink, 
  Calendar, 
  User, 
  X, 
  ChevronRight, 
  Info, 
  Calculator, 
  ShieldCheck, 
  Clock,
  Menu,
  CheckCircle,
  Award,
  Compass
} from 'lucide-react';

export default function App() {
  // Navigation Mobile Menu State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Delivery Calculator State
  const [calcLocationCost, setCalcLocationCost] = useState(0);
  const [calcDays, setCalcDays] = useState(1);

  // Transport Options
  const transportOptions = [
    { name: 'Swarzędz i okolice', cost: 0, isFree: true },
    { name: 'Kobylnica', cost: 40, isFree: false },
    { name: 'Gowarzewo', cost: 60, isFree: false },
    { name: 'Kostrzyn', cost: 80, isFree: false },
    { name: 'Poznań Centrum', cost: 100, isFree: false },
    { name: 'Pobiedziska', cost: 120, isFree: false },
  ];

  // Calculate total rental price
  const baseRate = 250;
  const totalRentalPrice = (baseRate * (calcDays || 1)) + Number(calcLocationCost);

  return (
    <div className="min-h-screen bg-[#232323] text-white flex flex-col font-sans selection:bg-[#f4b400] selection:text-neutral-900">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#232323]/90 backdrop-blur-md border-b border-white/5 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group" id="nav-logo">
            <img 
              src="https://i.ibb.co/4nmtgLQX/734784038-122108951451296257-554297994865160227-n.jpg" 
              alt="MINI Koparka Logo" 
              className="w-10 h-10 rounded-lg object-cover border border-[#f4b400]/50 group-hover:scale-105 transition-transform"
            />
            <div className="leading-none">
              <span className="font-display font-bold text-lg tracking-tight block text-white">MINI KOPARKA</span>
              <span className="text-[10px] font-semibold text-[#f4b400] tracking-widest uppercase block">Bez operatora</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#o-nas" className="text-sm font-medium hover:text-[#f4b400] transition-colors">O nas</a>
            <a href="#zastosowanie" className="text-sm font-medium hover:text-[#f4b400] transition-colors">Zastosowanie</a>
            <a href="#dane-techniczne" className="text-sm font-medium hover:text-[#f4b400] transition-colors">Dane Techniczne</a>
            <a href="#wyposazenie" className="text-sm font-medium hover:text-[#f4b400] transition-colors">Wyposażenie</a>
            <a href="#cennik" className="text-sm font-medium hover:text-[#f4b400] transition-colors">Cennik</a>
            <a href="#kontakt" className="text-sm font-medium hover:text-[#f4b400] transition-colors">Kontakt</a>
          </div>

          {/* Quick Call Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a 
              href="tel:501790550" 
              className="flex items-center gap-2 text-sm font-bold bg-[#f4b400] text-neutral-900 px-5 py-2.5 rounded-xl hover:bg-white hover:scale-105 transition-all shadow-lg shadow-[#f4b400]/10"
              id="cta-nav-call"
            >
              <Phone className="w-4 h-4 fill-neutral-900 stroke-none" />
              <span>501 790 550</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#f4b400] focus:outline-none transition-colors"
            id="mobile-menu-btn"
            aria-label="Menu mobilne"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 mx-2 rounded-2xl bg-[#1f1f1f] border border-white/10 p-5 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <a 
              href="#o-nas" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium py-2.5 border-b border-white/5 hover:text-[#f4b400] transition-colors"
            >
              O nas
            </a>
            <a 
              href="#zastosowanie" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium py-2.5 border-b border-white/5 hover:text-[#f4b400] transition-colors"
            >
              Zastosowanie
            </a>
            <a 
              href="#dane-techniczne" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium py-2.5 border-b border-white/5 hover:text-[#f4b400] transition-colors"
            >
              Dane Techniczne
            </a>
            <a 
              href="#wyposazenie" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium py-2.5 border-b border-white/5 hover:text-[#f4b400] transition-colors"
            >
              Wyposażenie
            </a>
            <a 
              href="#cennik" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium py-2.5 border-b border-white/5 hover:text-[#f4b400] transition-colors"
            >
              Cennik & Kalkulator
            </a>
            <a 
              href="#kontakt" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium py-2 hover:text-[#f4b400] transition-colors"
            >
              Kontakt
            </a>
            <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
              <a 
                href="tel:501790550" 
                className="flex items-center justify-center gap-2 text-sm font-bold bg-[#f4b400] text-neutral-900 py-3.5 rounded-xl shadow-md"
              >
                <Phone className="w-4 h-4 fill-neutral-900 stroke-none" />
                Zadzwoń: 501 790 550
              </a>
              <a 
                href="mailto:antarex.biuro@gmail.com" 
                className="flex items-center justify-center gap-2 text-sm font-semibold border border-white/20 text-white py-3.5 rounded-xl hover:bg-white/5 transition-colors"
              >
                <Mail className="w-4 h-4 text-[#f4b400]" />
                Napisz e-mail
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Header Section */}
      <header 
        className="relative min-h-screen flex items-center justify-center pt-32 pb-24 px-4 md:px-8 bg-cover bg-center overflow-hidden" 
        style={{ backgroundImage: "url('https://i.ibb.co/4nmtgLQX/734784038-122108951451296257-554297994865160227-n.jpg')" }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#232323] via-[#232323]/85 to-black/80 z-10"></div>

        {/* Construction Grid Overlay (decorative pattern) */}
        <div 
          className="absolute inset-0 opacity-[0.06] pointer-events-none z-15" 
          style={{ 
            backgroundImage: "linear-gradient(#f4b400 1px, transparent 1px), linear-gradient(90deg, #f4b400 1px, transparent 1px)", 
            backgroundSize: "40px 40px" 
          }}
        ></div>

        {/* Content Container */}
        <div className="relative max-w-5xl mx-auto text-center z-20 flex flex-col items-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#f4b400]/15 border border-[#f4b400]/30 px-4 py-2 rounded-full mb-8 animate-pulse">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f4b400] block animate-ping"></span>
            <span className="text-[#f4b400] font-display font-semibold text-xs tracking-wider uppercase">Wynajem bez operatora — Samodzielna robota</span>
          </div>

          {/* Large Logo Container */}
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#f4b400] mb-6 shadow-2xl scale-95 hover:scale-105 transition-transform duration-300">
            <img 
              src="https://i.ibb.co/4nmtgLQX/734784038-122108951451296257-554297994865160227-n.jpg" 
              alt="Logo MINI Koparka" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Big Headline */}
          <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-8xl text-white tracking-tight leading-none mb-4">
            MINI Koparka <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4b400] to-yellow-400">BEZ operatora</span>
          </h1>

          {/* Tagline */}
          <p className="font-display font-semibold text-xl sm:text-3xl text-[#f4b400] mb-6 max-w-2xl leading-relaxed">
            Wynajem minikoparki z dostawą od 250 zł
          </p>

          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mb-12 leading-relaxed font-light">
            Oferujemy wynajem nowoczesnej minikoparki bez operatora z dostawą pod wskazany adres. Idealne rozwiązanie do prac ogrodowych, ziemnych oraz niewielkich robót budowlanych.
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4">
            <a 
              href="tel:501790550" 
              className="flex items-center justify-center gap-3 bg-[#f4b400] hover:bg-yellow-500 text-neutral-900 font-display font-bold px-8 py-4 rounded-2xl shadow-xl shadow-[#f4b400]/20 transition-all hover:scale-105"
              id="hero-call-cta"
            >
              <Phone className="w-5 h-5 fill-neutral-900 stroke-none" />
              <span>ZADZWOŃ: 501 790 550</span>
            </a>
            
            <a 
              href="mailto:antarex.biuro@gmail.com" 
              className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-display font-semibold px-8 py-4 rounded-2xl transition-all hover:scale-105"
              id="hero-email-cta"
            >
              <Mail className="w-5 h-5 text-[#f4b400]" />
              <span>NAPISZ E-MAIL</span>
            </a>

            <a 
              href="#o-nas" 
              className="flex items-center justify-center gap-2 text-gray-300 hover:text-white font-display font-medium px-6 py-4 hover:underline transition-all"
            >
              <span>O nas</span>
              <ChevronRight className="w-4 h-4 text-[#f4b400] rotate-90" />
            </a>
          </div>

        </div>

        {/* Angled Transition Separator */}
        <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden leading-[0]">
          <svg className="relative block w-full h-8 md:h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 0v120h1200V120z" className="fill-[#232323]"></path>
          </svg>
        </div>
      </header>

      {/* O nas Section */}
      <section id="o-nas" className="py-24 px-4 md:px-8 bg-[#232323] relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col">
              <span className="text-[#f4b400] font-display font-semibold tracking-wider text-sm uppercase mb-3 block">Kompleksowa usługa</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mb-6">
                Wynajmij sprzęt i działaj sam
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
                Oferujemy wynajem nowoczesnej minikoparki o masie 1 tony bez operatora. Zapewniamy transport pod wskazany adres oraz krótkie szkolenie z obsługi urządzenia. Sprzęt jest nowy, sprawny i gotowy do pracy. Dzięki temu z łatwością, tanio i profesjonalnie zrealizujesz swoje zamierzenia.
              </p>

              {/* USP Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* USP 1 */}
                <div className="flex items-start gap-3.5 bg-white/5 border border-white/5 rounded-2xl p-4 hover:border-[#f4b400]/20 hover:bg-white/[0.08] transition-all">
                  <div className="p-2.5 rounded-xl bg-[#f4b400]/10 text-[#f4b400] mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white">Dostawa pod adres</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">Dowozimy maszynę w wyznaczone miejsce o umówionej godzinie.</p>
                  </div>
                </div>

                {/* USP 2 */}
                <div className="flex items-start gap-3.5 bg-white/5 border border-white/5 rounded-2xl p-4 hover:border-[#f4b400]/20 hover:bg-white/[0.08] transition-all">
                  <div className="p-2.5 rounded-xl bg-[#f4b400]/10 text-[#f4b400] mt-1">
                    <HardHat className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white">Instruktaż obsługi</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">Pokażemy Ci jak sprawnie i bezproblemowo sterować minikoparką.</p>
                  </div>
                </div>

                {/* USP 3 */}
                <div className="flex items-start gap-3.5 bg-white/5 border border-white/5 rounded-2xl p-4 hover:border-[#f4b400]/20 hover:bg-white/[0.08] transition-all">
                  <div className="p-2.5 rounded-xl bg-[#f4b400]/10 text-[#f4b400] mt-1">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white">Bardzo niskie spalanie</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">Silnik Diesel zużywa tylko około 1 litra oleju napędowego na godzinę.</p>
                  </div>
                </div>

                {/* USP 4 */}
                <div className="flex items-start gap-3.5 bg-white/5 border border-white/5 rounded-2xl p-4 hover:border-[#f4b400]/20 hover:bg-white/[0.08] transition-all">
                  <div className="p-2.5 rounded-xl bg-[#f4b400]/10 text-[#f4b400] mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white">Możliwość najmu na dłużej</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">Oferujemy atrakcyjne stawki przy wynajmie na tygodnie lub miesiące.</p>
                  </div>
                </div>

                {/* USP 5 */}
                <div className="flex items-start gap-3.5 bg-white/5 border border-white/5 rounded-2xl p-4 hover:border-[#f4b400]/20 hover:bg-white/[0.08] transition-all sm:col-span-2">
                  <div className="p-2.5 rounded-xl bg-[#f4b400]/10 text-[#f4b400] mt-1">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white">Atrakcyjne ceny</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">Płacisz tylko za czysty wynajem sprzętu budowlanego, oszczędzając na drogich usługach operatorskich.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Photo Column with Lightbox Trigger */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div 
                onClick={() => setLightboxOpen(true)}
                className="relative group cursor-pointer overflow-hidden rounded-3xl border-2 border-[#f4b400]/20 shadow-2xl max-w-md transition-all duration-300 hover:border-[#f4b400]/50"
                id="photo-lightbox-trigger"
              >
                <img 
                  src="https://i.ibb.co/HLnpFQ0Y/734815826-122108950143296257-3282694748968276781-n.jpg" 
                  alt="Zdjęcie Minikoparki Swarzędz" 
                  className="w-full h-auto object-cover transform duration-500 group-hover:scale-105"
                />
                
                {/* Visual indicator of hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-[#f4b400] text-neutral-900 p-4 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Plus className="w-6 h-6 stroke-[3]" />
                  </div>
                </div>

                {/* Info Overlay Box */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#232323]/95 backdrop-blur border border-white/10 p-3.5 rounded-2xl text-center shadow-lg">
                  <span className="text-[10px] font-bold text-[#f4b400] uppercase tracking-widest block mb-0.5">Galeria Sprzętu</span>
                  <span className="text-sm font-display text-white block font-medium">Kliknij, aby otworzyć galerię w powiększeniu</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          id="lightbox-modal"
        >
          {/* Close button */}
          <button 
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 p-3 bg-white/10 text-white rounded-full hover:bg-[#f4b400] hover:text-neutral-900 transition-all z-50"
          >
            <X className="w-6 h-6 stroke-[2.5]" />
          </button>
          
          {/* Main Image content */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center"
          >
            <img 
              src="https://i.ibb.co/HLnpFQ0Y/734815826-122108950143296257-3282694748968276781-n.jpg" 
              alt="MINI Koparka powiększona" 
              className="max-w-full max-h-[75vh] object-contain rounded-2xl border border-white/10 shadow-2xl"
            />
            <p className="text-gray-300 mt-4 text-center font-display font-medium text-sm sm:text-base">
              Nowoczesna 1-tonowa minikoparka — Gotowa do pracy bezpośrednio u Ciebie!
            </p>
          </div>
        </div>
      )}

      {/* Zastosowanie Section */}
      <section id="zastosowanie" className="py-24 px-4 md:px-8 bg-[#f9fafb] text-neutral-900 relative">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#f4b400] font-display font-semibold tracking-wider text-sm uppercase block">Wszechstronna maszyna</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-neutral-900 tracking-tight mt-3 mb-4">
              Zastosowanie minikoparki
            </h2>
            <p className="text-neutral-600 font-light text-base sm:text-lg">
              Dzięki swoim kompaktowym gabarytom i niskiej wadze (1000 kg), nasza minikoparka świetnie sprawdza się w pracach, do których tradycyjny ciężki sprzęt nie ma dostępu.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white border border-neutral-200/60 rounded-3xl p-6 hover:shadow-xl hover:border-[#f4b400]/40 hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 bg-[#f4b400]/10 text-[#f4b400] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#f4b400] group-hover:text-neutral-900 transition-all">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-neutral-900 mb-2">wykopy pod instalacje wodno-kanalizacyjne</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Idealne rozwiązanie do wykopów pod rury wodne, odpływy kanalizacyjne, drenaże posesji, a także kable energetyczne czy światłowody.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-neutral-200/60 rounded-3xl p-6 hover:shadow-xl hover:border-[#f4b400]/40 hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 bg-[#f4b400]/10 text-[#f4b400] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#f4b400] group-hover:text-neutral-900 transition-all">
                <Sprout className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-neutral-900 mb-2">zakładanie ogrodów</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Przygotowanie podłoża pod trawniki, plantacje roślinne, nasadzenia dużych krzewów oraz prace przy aranżacji architektury ogrodowej.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-neutral-200/60 rounded-3xl p-6 hover:shadow-xl hover:border-[#f4b400]/40 hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 bg-[#f4b400]/10 text-[#f4b400] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#f4b400] group-hover:text-neutral-900 transition-all">
                <Droplet className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-neutral-900 mb-2">odwodnienia</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Wykonywanie drenaży opaskowych budynków, studni chłonnych, odprowadzenia wód deszczowych i rowków odwadniających.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-neutral-200/60 rounded-3xl p-6 hover:shadow-xl hover:border-[#f4b400]/40 hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 bg-[#f4b400]/10 text-[#f4b400] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#f4b400] group-hover:text-neutral-900 transition-all">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-neutral-900 mb-2">mała architektura</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Prace przygotowawcze pod budowę płotów, ogrodzeń, ścieżek z kostki brukowej, tarasów, altan czy drewutni ogrodowych.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white border border-neutral-200/60 rounded-3xl p-6 hover:shadow-xl hover:border-[#f4b400]/40 hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 bg-[#f4b400]/10 text-[#f4b400] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#f4b400] group-hover:text-neutral-900 transition-all">
                <HardHat className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-neutral-900 mb-2">wykopy fundamentowe</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Kopanie ław pod fundamenty mniejszych budynków gospodarczych, garaży blaszanych, wiat samochodowych oraz ogrodzeń.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white border border-neutral-200/60 rounded-3xl p-6 hover:shadow-xl hover:border-[#f4b400]/40 hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 bg-[#f4b400]/10 text-[#f4b400] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#f4b400] group-hover:text-neutral-900 transition-all">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-neutral-900 mb-2">niwelacja terenu</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Precyzyjne wyrównywanie i profilowanie gruntu pod dalsze inwestycje — siew trawników, podbudowę dróg i chodników.
              </p>
            </div>

            {/* Card 7 */}
            <div className="bg-white border border-neutral-200/60 rounded-3xl p-6 hover:shadow-xl hover:border-[#f4b400]/40 hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 bg-[#f4b400]/10 text-[#f4b400] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#f4b400] group-hover:text-neutral-900 transition-all">
                <Construction className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-neutral-900 mb-2">zasypywanie rowów</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Szybkie zasypywanie uprzednio wykonanych instalacji, wyrównywanie uskoków ziemnych oraz formowanie nasypów.
              </p>
            </div>

            {/* Card 8 */}
            <div className="bg-white border border-neutral-200/60 rounded-3xl p-6 hover:shadow-xl hover:border-[#f4b400]/40 hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 bg-[#f4b400]/10 text-[#f4b400] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#f4b400] group-hover:text-neutral-900 transition-all">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-neutral-900 mb-2">prace ziemne</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Wszelkiego rodzaju ogólne roboty ziemne, usuwanie warstwy próchniczej (czarnoziemu) oraz przemieszczanie gruntu.
              </p>
            </div>

            {/* Card 9 */}
            <div className="bg-white border border-neutral-200/60 rounded-3xl p-6 hover:shadow-xl hover:border-[#f4b400]/40 hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 bg-[#f4b400]/10 text-[#f4b400] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#f4b400] group-hover:text-neutral-900 transition-all">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-neutral-900 mb-2">przygotowanie terenu</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Karczowanie drobnych korzeni, usuwanie kamieni, darni oraz ogólne uporządkowanie działki przed budową.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Dane techniczne Section */}
      <section id="dane-techniczne" className="py-24 px-4 md:px-8 bg-[#232323] relative">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#f4b400] font-display font-semibold tracking-wider text-sm uppercase block">Parametry techniczne</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mt-3 mb-4">
              Specyfikacja Maszyny
            </h2>
            <p className="text-gray-400 font-light">
              Poznaj techniczne właściwości naszej 1-tonowej minikoparki, które przekładają się na komfortową i bezawaryjną eksploatację.
            </p>
          </div>

          {/* Grid Layout of parameters with custom meter rings */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            
            {/* Param 1 */}
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6 text-center hover:border-[#f4b400]/30 transition-all group">
              <span className="text-[#f4b400] font-display font-bold text-3xl block mb-1">1000 kg</span>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-4">masa</span>
              <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#f4b400] h-full w-[60%] group-hover:scale-x-105 transition-transform origin-left"></div>
              </div>
            </div>

            {/* Param 2 */}
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6 text-center hover:border-[#f4b400]/30 transition-all group">
              <span className="text-[#f4b400] font-display font-bold text-3xl block mb-1">Diesel</span>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-4">silnik Diesel</span>
              <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#f4b400] h-full w-[100%] group-hover:scale-x-105 transition-transform origin-left"></div>
              </div>
            </div>

            {/* Param 3 */}
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6 text-center hover:border-[#f4b400]/30 transition-all group">
              <span className="text-[#f4b400] font-display font-bold text-3xl block mb-1">8,6 kW</span>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-4">moc</span>
              <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#f4b400] h-full w-[45%] group-hover:scale-x-105 transition-transform origin-left"></div>
              </div>
            </div>

            {/* Param 4 */}
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6 text-center hover:border-[#f4b400]/30 transition-all group">
              <span className="text-[#f4b400] font-display font-bold text-3xl block mb-1">360°</span>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-4">obrót 360°</span>
              <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#f4b400] h-full w-[100%] group-hover:scale-x-105 transition-transform origin-left"></div>
              </div>
            </div>

            {/* Param 5 */}
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6 text-center hover:border-[#f4b400]/30 transition-all group">
              <span className="text-[#f4b400] font-display font-bold text-3xl block mb-1">1,2 km/h</span>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-4">prędkość</span>
              <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#f4b400] h-full w-[35%] group-hover:scale-x-105 transition-transform origin-left"></div>
              </div>
            </div>

            {/* Param 6 */}
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6 text-center hover:border-[#f4b400]/30 transition-all group">
              <span className="text-[#f4b400] font-display font-bold text-3xl block mb-1">~1 l/h</span>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-4">spalanie</span>
              <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#f4b400] h-full w-[20%] group-hover:scale-x-105 transition-transform origin-left"></div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Co zawiera wynajem & Dodatkowe akcesoria Section */}
      <section id="wyposazenie" className="py-24 px-4 md:px-8 bg-[#f9fafb] text-neutral-900 relative">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#f4b400] font-display font-semibold tracking-wider text-sm uppercase block">Kompletny pakiet osprzętu</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-neutral-900 tracking-tight mt-3 mb-4">
              Wyposażenie & Dodatki
            </h2>
            <p className="text-neutral-600 font-light">
              Zapewniamy wszystkie niezbędne narzędzia do pracy w cenie podstawowej oraz oferujemy przydatne akcesoria pomocnicze.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Included in rent - W cenie */}
            <div className="lg:col-span-5 bg-[#232323] border-2 border-[#f4b400] text-white rounded-3xl p-8 relative shadow-xl flex flex-col justify-between">
              
              <div className="absolute -top-4 left-6 bg-[#f4b400] text-neutral-900 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow font-display">
                Zawarte w cenie wynajmu
              </div>

              <div>
                <h3 className="font-display font-bold text-2xl mb-8 mt-2">Podstawowy Zestaw</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#f4b400]/15 text-[#f4b400] flex items-center justify-center">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <span className="font-semibold text-white">✔ Łyżka 40 cm</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#f4b400]/15 text-[#f4b400] flex items-center justify-center">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <span className="font-semibold text-white">✔ Skarpówka 80 cm</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#f4b400]/15 text-[#f4b400] flex items-center justify-center">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <span className="font-semibold text-white">✔ Instruktaż obsługi</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#f4b400]/15 text-[#f4b400] flex items-center justify-center">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <span className="font-semibold text-white">✔ Dostawa w okolicach Swarzędza</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 text-xs text-gray-400">
                <p className="leading-relaxed">
                  Każdorazowo przeprowadzamy krótki instruktaż bezpiecznej obsługi koparki. Urządzenie jest intuicyjne w obsłudze — nauczysz się wszystkiego w kilkanaście minut.
                </p>
              </div>
            </div>

            {/* Additional accessories - Dodatkowe akcesoria */}
            <div className="lg:col-span-7 bg-white border border-neutral-200 rounded-3xl p-8 flex flex-col justify-between">
              
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
                  <h3 className="font-display font-bold text-2xl text-neutral-900">Dodatkowe akcesoria</h3>
                  <span className="text-xs bg-amber-500/10 border border-amber-500/20 text-amber-700 font-bold px-3 py-1 rounded-full">
                    Dostępne za dodatkową opłatą
                  </span>
                </div>

                {/* Grid of extras */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  
                  {/* Item 1 */}
                  <div className="bg-neutral-50 border border-neutral-200/60 hover:border-[#f4b400]/30 p-5 rounded-2xl text-center flex flex-col items-center justify-center transition-all group">
                    <div className="w-12 h-12 rounded-full bg-[#f4b400]/10 text-[#f4b400] flex items-center justify-center mb-3 group-hover:bg-[#f4b400] group-hover:text-neutral-900 transition-colors">
                      <RotateCw className="w-5 h-5" />
                    </div>
                    <span className="font-display font-semibold text-sm text-neutral-900">Świder</span>
                  </div>

                  {/* Item 2 */}
                  <div className="bg-neutral-50 border border-neutral-200/60 hover:border-[#f4b400]/30 p-5 rounded-2xl text-center flex flex-col items-center justify-center transition-all group">
                    <div className="w-12 h-12 rounded-full bg-[#f4b400]/10 text-[#f4b400] flex items-center justify-center mb-3 group-hover:bg-[#f4b400] group-hover:text-neutral-900 transition-colors">
                      <Plus className="w-5 h-5" />
                    </div>
                    <span className="font-display font-semibold text-sm text-neutral-900">Łyżka 20 cm</span>
                  </div>

                  {/* Item 3 */}
                  <div className="bg-neutral-50 border border-neutral-200/60 hover:border-[#f4b400]/30 p-5 rounded-2xl text-center flex flex-col items-center justify-center transition-all group">
                    <div className="w-12 h-12 rounded-full bg-[#f4b400]/10 text-[#f4b400] flex items-center justify-center mb-3 group-hover:bg-[#f4b400] group-hover:text-neutral-900 transition-colors">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <span className="font-display font-semibold text-sm text-neutral-900">Młot udarowy</span>
                  </div>

                  {/* Item 4 */}
                  <div className="bg-neutral-50 border border-neutral-200/60 hover:border-[#f4b400]/30 p-5 rounded-2xl text-center flex flex-col items-center justify-center transition-all group">
                    <div className="w-12 h-12 rounded-full bg-[#f4b400]/10 text-[#f4b400] flex items-center justify-center mb-3 group-hover:bg-[#f4b400] group-hover:text-neutral-900 transition-colors">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="font-display font-semibold text-sm text-neutral-900">Chwytak</span>
                  </div>

                  {/* Item 5 */}
                  <div className="bg-neutral-50 border border-neutral-200/60 hover:border-[#f4b400]/30 p-5 rounded-2xl text-center flex flex-col items-center justify-center transition-all group">
                    <div className="w-12 h-12 rounded-full bg-[#f4b400]/10 text-[#f4b400] flex items-center justify-center mb-3 group-hover:bg-[#f4b400] group-hover:text-neutral-900 transition-colors">
                      <Layers className="w-5 h-5" />
                    </div>
                    <span className="font-display font-semibold text-sm text-neutral-900">Skarpówka uchylna</span>
                  </div>

                  {/* Item 6 */}
                  <div className="bg-neutral-50 border border-neutral-200/60 hover:border-[#f4b400]/30 p-5 rounded-2xl text-center flex flex-col items-center justify-center transition-all group">
                    <div className="w-12 h-12 rounded-full bg-[#f4b400]/10 text-[#f4b400] flex items-center justify-center mb-3 group-hover:bg-[#f4b400] group-hover:text-neutral-900 transition-colors">
                      <Construction className="w-5 h-5" />
                    </div>
                    <span className="font-display font-semibold text-sm text-neutral-900">Grabie</span>
                  </div>

                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs text-neutral-500">
                <Info className="w-4 h-4 text-[#f4b400] flex-shrink-0" />
                <span>Zapytaj o dostępność powyższych akcesoriów podczas składania zamówienia telefonicznego lub mailowego.</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Cennik & Transport Section */}
      <section id="cennik" className="py-24 px-4 md:px-8 bg-[#232323] relative">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#f4b400] font-display font-semibold tracking-wider text-sm uppercase block">Bezpieczne i jasne warunki</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mt-3 mb-4">
              Cennik i Koszt Dostawy
            </h2>
            <p className="text-gray-400 font-light">
              Uczciwe ceny, bez ukrytych dopłat. Dla dłuższego wynajmu oferujemy indywidualne wyceny z rabatami.
            </p>
          </div>

          {/* Bento-style Layout for Prices & Transport rates */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
            
            {/* Pricing Box (Left) */}
            <div className="lg:col-span-4 bg-white/5 border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:border-[#f4b400]/20 transition-all">
              <div>
                <span className="text-xs font-semibold text-[#f4b400] uppercase tracking-widest block mb-4">NAJNIŻSZA STAWKA</span>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Wynajem dobowy</h3>
                <p className="text-xs text-gray-400 mb-6 leading-relaxed">Kompaktowy sprzęt dostarczony bezpośrednio pod Twój adres.</p>

                <div className="mb-8">
                  <span className="text-gray-400 text-xs block">Cena wynajmu za dobę już od:</span>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-5xl font-display font-bold text-[#f4b400]">250 zł</span>
                    <span className="text-gray-400 text-sm">/ doba</span>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-white/5 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Kaucja zwrotna:</span>
                    <span className="text-white font-bold bg-white/5 px-3 py-1 rounded-lg">500 zł</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Dłuższy wynajem:</span>
                    <span className="text-[#f4b400] font-semibold text-right">Ustalana indywidualnie</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a 
                  href="#kontakt" 
                  className="block text-center w-full bg-[#f4b400] hover:bg-yellow-500 text-neutral-900 font-display font-bold py-4 rounded-xl shadow-lg transition-all hover:scale-[1.02]"
                >
                  ZAPYTAJ O TERMIN
                </a>
              </div>
            </div>

            {/* Transport Table Box (Right) */}
            <div className="lg:col-span-8 bg-white/5 border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:border-[#f4b400]/20 transition-all">
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-8">
                  <h3 className="text-2xl font-display font-bold text-white">Tabela Kosztów Transportu</h3>
                  <span className="text-xs bg-green-500/10 border border-green-500/20 text-green-400 font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Swarzędz i okolice darmowa dostawa
                  </span>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-white/10 text-gray-400 text-xs uppercase tracking-wider font-display">
                        <th className="pb-3.5 font-semibold">Miejscowość</th>
                        <th className="pb-3.5 text-right font-semibold">Koszt transportu (w obie strony)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-4 font-semibold text-white flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block animate-pulse"></span>
                          Swarzędz i okolice
                        </td>
                        <td className="py-4 text-right font-bold text-green-400">BEZPŁATNIE (0 zł)</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-4 text-gray-300">Kobylnica</td>
                        <td className="py-4 text-right font-bold text-white">40 zł</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-4 text-gray-300">Gowarzewo</td>
                        <td className="py-4 text-right font-bold text-white">60 zł</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-4 text-gray-300">Kostrzyn</td>
                        <td className="py-4 text-right font-bold text-white">80 zł</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-4 text-gray-300">Poznań Centrum</td>
                        <td className="py-4 text-right font-bold text-white">100 zł</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-4 text-gray-300">Pobiedziska</td>
                        <td className="py-4 text-right font-bold text-white">120 zł</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 text-xs text-gray-400 flex items-center gap-2">
                <Info className="w-4 h-4 text-[#f4b400] flex-shrink-0" />
                <span>Dostarczamy minikoparkę również do innych okolicznych lokalizacji. Skontaktuj się z nami w celu wyceny!</span>
              </div>
            </div>

          </div>

          {/* Interactive Cost Calculator */}
          <div className="bg-gradient-to-r from-neutral-800 to-neutral-700 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f4b400]/5 rounded-full blur-2xl pointer-events-none"></div>
            
            <h4 className="font-display font-bold text-xl text-white mb-6 flex items-center gap-2.5">
              <Calculator className="w-5 h-5 text-[#f4b400]" />
              <span>Interaktywny Kalkulator Kosztów</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
              
              {/* Location Select */}
              <div className="flex flex-col">
                <label htmlFor="calc-loc" className="text-xs text-gray-300 font-semibold mb-2 block">
                  Wybierz miejsce dostawy:
                </label>
                <select 
                  id="calc-loc"
                  value={calcLocationCost}
                  onChange={(e) => setCalcLocationCost(Number(e.target.value))}
                  className="bg-neutral-900 border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#f4b400] transition-colors"
                >
                  {transportOptions.map((opt, idx) => (
                    <option key={idx} value={opt.cost}>
                      {opt.name} ({opt.isFree ? 'Gratis' : `+${opt.cost} zł`})
                    </option>
                  ))}
                </select>
              </div>

              {/* Days input */}
              <div className="flex flex-col">
                <label htmlFor="calc-days" className="text-xs text-gray-300 font-semibold mb-2 block">
                  Liczba dób wynajmu:
                </label>
                <input 
                  type="number" 
                  id="calc-days"
                  min="1"
                  value={calcDays}
                  onChange={(e) => setCalcDays(Math.max(1, parseInt(e.target.value) || 1))}
                  className="bg-neutral-900 border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#f4b400] transition-colors"
                />
              </div>

              {/* Calculated results */}
              <div className="bg-neutral-900/60 border border-white/5 rounded-xl p-4 text-center">
                <span className="text-[10px] text-gray-400 uppercase font-bold block mb-0.5">Łączna kwota (szacunkowo)</span>
                <span className="text-3xl font-display font-bold text-[#f4b400] block">
                  {totalRentalPrice} zł
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Dlaczego warto Section */}
      <section className="py-24 px-4 md:px-8 bg-neutral-900 relative">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#f4b400] font-display font-semibold tracking-wider text-sm uppercase block">Twoje korzyści</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mt-3 mb-4">
              Dlaczego akurat nasza oferta?
            </h2>
            <p className="text-gray-400 font-light">
              Stawiamy na najwyższy standard sprzętu budowlanego oraz pełne zadowolenie każdego klienta.
            </p>
          </div>

          {/* Cards Grid with icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Advantage 1 */}
            <div className="flex items-start gap-4 p-4 hover:bg-white/[0.02] rounded-2xl transition-all">
              <div className="w-12 h-12 bg-[#f4b400]/10 text-[#f4b400] rounded-xl flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-white mb-2">Nowoczesna maszyna</h4>
                <p className="text-sm text-gray-400 leading-relaxed">Regularnie serwisowana, nowa minikoparka, gotowa do pracy w każdych, nawet najcięższych warunkach.</p>
              </div>
            </div>

            {/* Advantage 2 */}
            <div className="flex items-start gap-4 p-4 hover:bg-white/[0.02] rounded-2xl transition-all">
              <div className="w-12 h-12 bg-[#f4b400]/10 text-[#f4b400] rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-white mb-2">Bardzo małe spalanie</h4>
                <p className="text-sm text-gray-400 leading-relaxed">Ekologiczny silnik wysokoprężny o zużyciu zaledwie około 1 litra oleju napędowego na motogodzinę.</p>
              </div>
            </div>

            {/* Advantage 3 */}
            <div className="flex items-start gap-4 p-4 hover:bg-white/[0.02] rounded-2xl transition-all">
              <div className="w-12 h-12 bg-[#f4b400]/10 text-[#f4b400] rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-white mb-2">Dostawa pod adres</h4>
                <p className="text-sm text-gray-400 leading-relaxed">Komfort dostawy bez konieczności organizowania własnego transportu. Dostarczamy maszynę bezpośrednio pod dom.</p>
              </div>
            </div>

            {/* Advantage 4 */}
            <div className="flex items-start gap-4 p-4 hover:bg-white/[0.02] rounded-2xl transition-all">
              <div className="w-12 h-12 bg-[#f4b400]/10 text-[#f4b400] rounded-xl flex items-center justify-center flex-shrink-0">
                <HardHat className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-white mb-2">Instruktaż obsługi</h4>
                <p className="text-sm text-gray-400 leading-relaxed">Bezstresowy start. Uczymy obsługi sprzętu od podstaw na miejscu, przekazując najważniejsze wskazówki BHP i techniczne.</p>
              </div>
            </div>

            {/* Advantage 5 */}
            <div className="flex items-start gap-4 p-4 hover:bg-white/[0.02] rounded-2xl transition-all">
              <div className="w-12 h-12 bg-[#f4b400]/10 text-[#f4b400] rounded-xl flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-white mb-2">Elastyczne terminy</h4>
                <p className="text-sm text-gray-400 leading-relaxed">Dostosujemy się do Twoich potrzeb terminowych. Rezerwacja maszyn na konkretne dnie z krótkim wyprzedzeniem.</p>
              </div>
            </div>

            {/* Advantage 6 */}
            <div className="flex items-start gap-4 p-4 hover:bg-white/[0.02] rounded-2xl transition-all">
              <div className="w-12 h-12 bg-[#f4b400]/10 text-[#f4b400] rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-white mb-2">Konkurencyjne ceny</h4>
                <p className="text-sm text-gray-400 leading-relaxed">Zapewniamy jedne z najbardziej atrakcyjnych cen najmu minikoparki na rynku lokalnym.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" className="py-24 px-4 md:px-8 bg-[#232323] relative">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#f4b400] font-display font-semibold tracking-wider text-sm uppercase block">Zarezerwuj termin już dziś</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mt-3 mb-4">
              Kontakt i Rezerwacja
            </h2>
            <p className="text-gray-400 font-light text-base">
              Zadzwoń do nas, wyślij e-mail lub odwiedź nasz profil na Facebooku. Odpowiemy niezwłocznie i ustalimy wszystkie szczegóły.
            </p>
          </div>

          {/* Grid with 4 Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            
            {/* Contact Card 1: Phone */}
            <a 
              href="tel:501790550"
              className="block bg-white/5 border border-white/5 hover:border-[#f4b400]/30 rounded-2xl p-6 shadow-lg transition-all hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#f4b400]/10 text-[#f4b400] rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 fill-[#f4b400] stroke-none" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold block mb-0.5">Zadzwoń:</span>
                  <span className="text-lg font-display font-bold text-white tracking-tight block">501 790 550</span>
                </div>
              </div>
            </a>

            {/* Contact Card 2: Email */}
            <a 
              href="mailto:antarex.biuro@gmail.com"
              className="block bg-white/5 border border-white/5 hover:border-[#f4b400]/30 rounded-2xl p-6 shadow-lg transition-all hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#f4b400]/10 text-[#f4b400] rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#f4b400]" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold block mb-0.5">E-mail:</span>
                  <span className="text-lg font-display font-bold text-white tracking-tight block">antarex.biuro</span>
                  <span className="text-xs text-gray-400 font-mono">@gmail.com</span>
                </div>
              </div>
            </a>

            {/* Contact Card 3: Location */}
            <div className="bg-white/5 border border-white/5 hover:border-[#f4b400]/30 rounded-2xl p-6 shadow-lg transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#f4b400]/10 text-[#f4b400] rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#f4b400]" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold block mb-0.5">Lokalizacja główna:</span>
                  <span className="text-lg font-display font-bold text-white tracking-tight block">Swarzędz i okolice</span>
                </div>
              </div>
            </div>

            {/* Contact Card 4: Facebook */}
            <a 
              href="https://www.facebook.com/profile.php?id=61588887734109" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-white/5 border border-white/5 hover:border-[#1877F2]/30 rounded-2xl p-6 shadow-lg transition-all hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1877F2]/10 text-[#1877F2] rounded-xl flex items-center justify-center">
                  <Facebook className="w-6 h-6 fill-[#1877F2] stroke-none" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold block mb-0.5">Social Media:</span>
                  <span className="text-lg font-display font-bold text-white tracking-tight block">Nasz Facebook</span>
                </div>
              </div>
            </a>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#191919] border-t border-white/5 py-16 px-4 md:px-8 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo & Trademark */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <img 
                src="https://i.ibb.co/4nmtgLQX/734784038-122108951451296257-554297994865160227-n.jpg" 
                alt="Logo Stopka" 
                className="w-8 h-8 rounded object-cover"
              />
              <span className="font-display font-bold text-lg text-white">MINI Koparka BEZ operatora</span>
            </div>
            <p className="text-xs text-gray-400 font-light">
              © 2026 MINI Koparka BEZ operatora. Wszystkie prawa zastrzeżone. Swarzędz i okolice.
            </p>
          </div>

          {/* Contact summaries */}
          <div className="flex flex-col items-center md:items-end text-sm text-gray-300 gap-1.5 text-center md:text-right">
            <span className="font-semibold text-[#f4b400] font-display">Swarzędz i okolice</span>
            <span>tel. <a href="tel:501790550" className="hover:text-[#f4b400] font-bold text-white transition-colors">501 790 550</a></span>
            <span>email: <a href="mailto:antarex.biuro@gmail.com" className="hover:text-[#f4b400] text-white transition-colors">antarex.biuro@gmail.com</a></span>
          </div>

        </div>
      </footer>

    </div>
  );
}
