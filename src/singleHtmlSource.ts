/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function generateSingleHtml(): string {
  return `<!DOCTYPE html>
<html lang="pl" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MINI Koparka BEZ operatora - Wynajem Swarzędz</title>
    <!-- Tailwind CSS Play CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        grafit: '#232323',
                        budowlany: '#f4b400',
                        ciemny: '#1a1a1a',
                        jasny: '#f9fafb',
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        display: ['Space Grotesk', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #232323;
            color: #ffffff;
        }
        .font-display {
            font-family: 'Space Grotesk', sans-serif;
        }
        /* Custom styles for glassmorphism */
        .glass-card {
            background: rgba(35, 35, 35, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .glass-card-light {
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(229, 231, 235, 0.5);
        }
    </style>
</head>
<body class="bg-grafit text-white overflow-x-hidden">

    <!-- Sticky Navigation -->
    <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 md:px-8">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
            <!-- Logo & Brand -->
            <a href="#" class="flex items-center gap-3 group">
                <img src="https://i.ibb.co/4nmtgLQX/734784038-122108951451296257-554297994865160227-n.jpg" 
                     alt="Logo" class="w-10 h-10 rounded-lg object-cover border border-budowlany/50 group-hover:scale-105 transition-transform">
                <div class="leading-none">
                    <span class="font-display font-bold text-lg tracking-tight block text-white">MINI KOPARKA</span>
                    <span class="text-[10px] font-semibold text-budowlany tracking-widest uppercase block">Bez operatora</span>
                </div>
            </a>

            <!-- Desktop Menu -->
            <div class="hidden lg:flex items-center gap-8">
                <a href="#o-nas" class="text-sm font-medium hover:text-budowlany transition-colors">O nas</a>
                <a href="#zastosowanie" class="text-sm font-medium hover:text-budowlany transition-colors">Zastosowanie</a>
                <a href="#dane-techniczne" class="text-sm font-medium hover:text-budowlany transition-colors">Dane Techniczne</a>
                <a href="#wyposazenie" class="text-sm font-medium hover:text-budowlany transition-colors">Wyposażenie</a>
                <a href="#cennik" class="text-sm font-medium hover:text-budowlany transition-colors">Cennik</a>
                <a href="#kontakt" class="text-sm font-medium hover:text-budowlany transition-colors">Kontakt</a>
            </div>

            <!-- Header Phone CTA -->
            <div class="hidden sm:flex items-center gap-4">
                <a href="tel:501790550" class="flex items-center gap-2 text-sm font-semibold bg-budowlany text-grafit px-4 py-2 rounded-lg hover:bg-white hover:scale-105 transition-all shadow-md">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    <span>501 790 550</span>
                </a>
            </div>

            <!-- Mobile Menu Toggle -->
            <button id="mobile-menu-toggle" class="lg:hidden p-2 text-white hover:text-budowlany focus:outline-none" aria-label="Toggle Menu">
                <svg id="menu-icon-hamburger" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                <svg id="menu-icon-close" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
        </div>

        <!-- Mobile Menu Portal -->
        <div id="mobile-menu" class="hidden lg:hidden mt-3 mx-2 rounded-xl bg-[#1f1f1f] border border-white/10 p-5 shadow-2xl flex flex-col gap-4 animate-fadeIn">
            <a href="#o-nas" class="mobile-link text-base py-2 border-b border-white/5 hover:text-budowlany">O nas</a>
            <a href="#zastosowanie" class="mobile-link text-base py-2 border-b border-white/5 hover:text-budowlany">Zastosowanie</a>
            <a href="#dane-techniczne" class="mobile-link text-base py-2 border-b border-white/5 hover:text-budowlany">Dane Techniczne</a>
            <a href="#wyposazenie" class="mobile-link text-base py-2 border-b border-white/5 hover:text-budowlany">Wyposażenie</a>
            <a href="#cennik" class="mobile-link text-base py-2 border-b border-white/5 hover:text-budowlany">Cennik</a>
            <a href="#kontakt" class="mobile-link text-base py-2 hover:text-budowlany">Kontakt</a>
            <div class="pt-4 border-t border-white/5 flex flex-col gap-2">
                <a href="tel:501790550" class="flex items-center justify-center gap-2 text-sm font-bold bg-budowlany text-grafit py-3 rounded-lg shadow">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    Zadzwoń: 501 790 550
                </a>
                <a href="mailto:antarex.biuro@gmail.com" class="flex items-center justify-center gap-2 text-sm font-semibold border border-white/20 text-white py-3 rounded-lg">
                    <svg class="w-4 h-4 text-budowlany" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    Napisz e-mail
                </a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <header class="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 md:px-8 bg-cover bg-center overflow-hidden" 
            style="background-image: url('https://i.ibb.co/4nmtgLQX/734784038-122108951451296257-554297994865160227-n.jpg');">
        <!-- Dark Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-grafit via-grafit/85 to-black/80 z-10"></div>

        <!-- Construction Grid Decorative Pattern -->
        <div class="absolute inset-0 opacity-10 pointer-events-none z-15" 
             style="background-image: linear-gradient(#f4b400 1px, transparent 1px), linear-gradient(90deg, #f4b400 1px, transparent 1px); background-size: 50px 50px;">
        </div>

        <div class="relative max-w-5xl mx-auto text-center z-20 flex flex-col items-center">
            <!-- Badge -->
            <div class="inline-flex items-center gap-2 bg-budowlany/15 border border-budowlany/30 px-4 py-1.5 rounded-full mb-8 animate-bounce">
                <span class="w-2.5 h-2.5 rounded-full bg-budowlany block animate-ping"></span>
                <span class="text-budowlany font-display font-semibold text-xs uppercase tracking-wider">BEZ OPERATORA — SAMODZIELNA PRACA</span>
            </div>

            <!-- Logo Large (Optional Decorative) -->
            <div class="w-24 h-24 rounded-full overflow-hidden border-2 border-budowlany mb-6 shadow-2xl scale-95 hover:scale-105 transition-transform duration-300">
                <img src="https://i.ibb.co/4nmtgLQX/734784038-122108951451296257-554297994865160227-n.jpg" alt="Logo MINI Koparka" class="w-full h-full object-cover">
            </div>

            <!-- Main Title -->
            <h1 class="font-display font-bold text-4xl sm:text-5xl md:text-7xl text-white tracking-tight leading-none mb-4">
                MINI Koparka <span class="text-transparent bg-clip-text bg-gradient-to-r from-budowlany to-yellow-400">BEZ operatora</span>
            </h1>

            <!-- Subtitle -->
            <p class="font-display font-semibold text-xl sm:text-2xl text-budowlany mb-6 max-w-2xl leading-relaxed">
                Wynajem minikoparki z dostawą od 250 zł
            </p>

            <!-- Description -->
            <p class="text-gray-300 text-base sm:text-lg max-w-3xl mb-12 leading-relaxed font-light">
                Oferujemy wynajem nowoczesnej minikoparki bez operatora z dostawą pod wskazany adres. Idealne rozwiązanie do prac ogrodowych, ziemnych oraz niewielkich robót budowlanych.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a href="tel:501790550" class="flex items-center justify-center gap-3 bg-budowlany hover:bg-yellow-500 text-grafit font-display font-bold px-8 py-4 rounded-xl shadow-lg shadow-budowlany/20 transition-all hover:scale-105 group">
                    <svg class="w-5 h-5 text-grafit group-hover:animate-wiggle" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    ZADZWOŃ TERAZ
                </a>
                <a href="mailto:antarex.biuro@gmail.com" class="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-display font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105">
                    <svg class="w-5 h-5 text-budowlany" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    Napisz e-mail
                </a>
                <a href="#o-nas" class="flex items-center justify-center gap-2 text-gray-300 hover:text-white font-display font-medium px-6 py-4 hover:underline transition-all">
                    <span>O nas</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                </a>
            </div>
        </div>

        <!-- Wave Separator -->
        <div class="absolute bottom-0 left-0 right-0 z-20 overflow-hidden leading-[0]">
            <svg class="relative block w-full h-8 md:h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" preserveAspectRatio="none">
                <path d="M1200 120L0 0v120h1200V120z" fill="#232323"></path>
            </svg>
        </div>
    </header>

    <!-- O nas Section -->
    <section id="o-nas" class="py-24 px-4 md:px-8 bg-grafit relative">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <!-- Column Text -->
                <div class="lg:col-span-7 flex flex-col">
                    <span class="text-budowlany font-display font-semibold tracking-wider text-sm uppercase mb-3">PROFESJONALNY WYNAJEM</span>
                    <h2 class="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mb-6">
                        O nas & Nasza Misja
                    </h2>
                    <p class="text-gray-300 text-lg leading-relaxed mb-8">
                        Oferujemy wynajem nowoczesnej minikoparki o masie 1 tony bez operatora. Zapewniamy transport pod wskazany adres oraz krótkie szkolenie z obsługi urządzenia. Sprzęt jest nowy, sprawny i gotowy do natychmiastowej pracy. Dzięki temu zaoszczędzisz czas i pieniądze, realizując projekty samodzielnie i w dogodnym tempie.
                    </p>

                    <!-- Key highlights -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <!-- Item -->
                        <div class="flex items-start gap-3 bg-white/5 border border-white/5 rounded-xl p-4 hover:border-budowlany/25 transition-all">
                            <div class="p-2 rounded-lg bg-budowlany/10 text-budowlany mt-1">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                            </div>
                            <div>
                                <h4 class="font-display font-semibold text-white">Dostawa pod adres</h4>
                                <p class="text-xs text-gray-400">Dowozimy maszynę bezpośrednio na miejsce Twojej budowy.</p>
                            </div>
                        </div>
                        <!-- Item -->
                        <div class="flex items-start gap-3 bg-white/5 border border-white/5 rounded-xl p-4 hover:border-budowlany/25 transition-all">
                            <div class="p-2 rounded-lg bg-budowlany/10 text-budowlany mt-1">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                            </div>
                            <div>
                                <h4 class="font-display font-semibold text-white">Instruktaż obsługi</h4>
                                <p class="text-xs text-gray-400">Pokażemy Ci jak sprawnie i bezpiecznie sterować maszyną.</p>
                            </div>
                        </div>
                        <!-- Item -->
                        <div class="flex items-start gap-3 bg-white/5 border border-white/5 rounded-xl p-4 hover:border-budowlany/25 transition-all">
                            <div class="p-2 rounded-lg bg-budowlany/10 text-budowlany mt-1">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                            </div>
                            <div>
                                <h4 class="font-display font-semibold text-white">Bardzo niskie spalanie</h4>
                                <p class="text-xs text-gray-400">Nasz sprzęt spala jedynie około 1 litra oleju napędowego na godzinę.</p>
                            </div>
                        </div>
                        <!-- Item -->
                        <div class="flex items-start gap-3 bg-white/5 border border-white/5 rounded-xl p-4 hover:border-budowlany/25 transition-all">
                            <div class="p-2 rounded-lg bg-budowlany/10 text-budowlany mt-1">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            </div>
                            <div>
                                <h4 class="font-display font-semibold text-white">Dłuższy wynajem</h4>
                                <p class="text-xs text-gray-400">Możliwość elastycznego wynajmu na tygodnie lub miesiące.</p>
                            </div>
                        </div>
                        <!-- Item -->
                        <div class="flex items-start gap-3 bg-white/5 border border-white/5 rounded-xl p-4 hover:border-budowlany/25 transition-all">
                            <div class="p-2 rounded-lg bg-budowlany/10 text-budowlany mt-1">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            </div>
                            <div>
                                <h4 class="font-display font-semibold text-white">Atrakcyjne ceny</h4>
                                <p class="text-xs text-gray-400">Przejrzyste stawki bez ukrytych kosztów.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Column Photo -->
                <div class="lg:col-span-5 flex flex-col items-center">
                    <div class="relative group cursor-pointer overflow-hidden rounded-2xl border-2 border-budowlany/30 shadow-2xl max-w-md" onclick="openLightbox()">
                        <img src="https://i.ibb.co/HLnpFQ0Y/734815826-122108950143296257-3282694748968276781-n.jpg" 
                             alt="MINI Koparka do wynajęcia" 
                             class="w-full h-auto object-cover transform duration-500 group-hover:scale-105">
                        <!-- Hover Overlay Effect -->
                        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div class="bg-budowlany text-grafit p-4 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/></svg>
                            </div>
                        </div>
                        <div class="absolute bottom-4 left-4 right-4 bg-grafit/90 backdrop-blur border border-white/10 p-3 rounded-xl text-center">
                            <span class="text-xs font-semibold text-budowlany uppercase tracking-widest block">Galeria zdjęć</span>
                            <span class="text-sm font-display text-white block font-medium">Kliknij, aby powiększyć zdjęcie</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Modern Lightbox Modal -->
    <div id="lightbox" class="fixed inset-0 z-50 hidden bg-black/95 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300">
        <!-- Close Button -->
        <button onclick="closeLightbox()" class="absolute top-6 right-6 p-3 bg-white/15 hover:bg-budowlany hover:text-grafit text-white rounded-full transition-all duration-200 z-50 shadow-md">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
        <!-- Lightbox Content Container -->
        <div class="relative max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img id="lightbox-img" src="https://i.ibb.co/HLnpFQ0Y/734815826-122108950143296257-3282694748968276781-n.jpg" 
                 alt="Zdjęcie Powiększone" 
                 class="max-w-full max-h-[75vh] object-contain rounded-lg border border-white/10 shadow-2xl">
            <p class="text-gray-300 mt-4 text-center font-display font-medium text-sm sm:text-base">
                Nowoczesna 1-tonowa minikoparka — Gotowa do pracy bez operatora
            </p>
        </div>
    </div>

    <!-- Zastosowanie Section -->
    <section id="zastosowanie" class="py-24 px-4 md:px-8 bg-neutral-900 relative">
        <div class="max-w-7xl mx-auto">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="text-budowlany font-display font-semibold tracking-wider text-sm uppercase">WSZECHSTRONNOŚĆ MASZYNY</span>
                <h2 class="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mt-3 mb-4">
                    Do czego służy nasza minikoparka?
                </h2>
                <p class="text-gray-400 font-light">
                    Kompaktowe rozmiary pozwalają na wjazd w trudno dostępne miejsca i wykonanie szerokiego zakresu prac ziemnych.
                </p>
            </div>

            <!-- Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Card 1 -->
                <div class="bg-grafit/50 border border-white/5 rounded-2xl p-6 hover:border-budowlany/40 hover:-translate-y-1 transition-all group shadow-lg">
                    <div class="w-12 h-12 bg-budowlany/10 text-budowlany rounded-xl flex items-center justify-center mb-6 group-hover:bg-budowlany group-hover:text-grafit transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
                    </div>
                    <h3 class="font-display font-bold text-lg text-white mb-2">Instalacje wodno-kanalizacyjne</h3>
                    <p class="text-sm text-gray-400 leading-relaxed">Sprawne wykopywanie rowów pod rury wodociągowe, kanalizację, kable energetyczne czy światłowody.</p>
                </div>

                <!-- Card 2 -->
                <div class="bg-grafit/50 border border-white/5 rounded-2xl p-6 hover:border-budowlany/40 hover:-translate-y-1 transition-all group shadow-lg">
                    <div class="w-12 h-12 bg-budowlany/10 text-budowlany rounded-xl flex items-center justify-center mb-6 group-hover:bg-budowlany group-hover:text-grafit transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <h3 class="font-display font-bold text-lg text-white mb-2">Zakładanie ogrodów</h3>
                    <p class="text-sm text-gray-400 leading-relaxed">Szybkie przygotowanie terenu pod trawniki, plantacje roślinne, a także wykopywanie dołów pod nasadzenia drzew.</p>
                </div>

                <!-- Card 3 -->
                <div class="bg-grafit/50 border border-white/5 rounded-2xl p-6 hover:border-budowlany/40 hover:-translate-y-1 transition-all group shadow-lg">
                    <div class="w-12 h-12 bg-budowlany/10 text-budowlany rounded-xl flex items-center justify-center mb-6 group-hover:bg-budowlany group-hover:text-grafit transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>
                    </div>
                    <h3 class="font-display font-bold text-lg text-white mb-2">Odwodnienia i drenaż</h3>
                    <p class="text-sm text-gray-400 leading-relaxed">Wykopy pod rury drenażowe, studnie chłonne, zbiorniki retencyjne i instalacje deszczowe na posesji.</p>
                </div>

                <!-- Card 4 -->
                <div class="bg-grafit/50 border border-white/5 rounded-2xl p-6 hover:border-budowlany/40 hover:-translate-y-1 transition-all group shadow-lg">
                    <div class="w-12 h-12 bg-budowlany/10 text-budowlany rounded-xl flex items-center justify-center mb-6 group-hover:bg-budowlany group-hover:text-grafit transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                    </div>
                    <h3 class="font-display font-bold text-lg text-white mb-2">Mała architektura</h3>
                    <p class="text-sm text-gray-400 leading-relaxed">Kopanie pod fundamenty ogrodzeń, altanek, tarasów, układanie ścieżek, podjazdów z kostki i murków oporowych.</p>
                </div>

                <!-- Card 5 -->
                <div class="bg-grafit/50 border border-white/5 rounded-2xl p-6 hover:border-budowlany/40 hover:-translate-y-1 transition-all group shadow-lg">
                    <div class="w-12 h-12 bg-budowlany/10 text-budowlany rounded-xl flex items-center justify-center mb-6 group-hover:bg-budowlany group-hover:text-grafit transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/></svg>
                    </div>
                    <h3 class="font-display font-bold text-lg text-white mb-2">Wykopy fundamentowe</h3>
                    <p class="text-sm text-gray-400 leading-relaxed">Odpowiednie przygotowanie gruntu pod fundamenty garaży blaszanych, domków narzędziowych lub małych rozbudów.</p>
                </div>

                <!-- Card 6 -->
                <div class="bg-grafit/50 border border-white/5 rounded-2xl p-6 hover:border-budowlany/40 hover:-translate-y-1 transition-all group shadow-lg">
                    <div class="w-12 h-12 bg-budowlany/10 text-budowlany rounded-xl flex items-center justify-center mb-6 group-hover:bg-budowlany group-hover:text-grafit transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>
                    </div>
                    <h3 class="font-display font-bold text-lg text-white mb-2">Niwelacja terenu</h3>
                    <p class="text-sm text-gray-400 leading-relaxed">Profilowanie, wyrównywanie nierówności gruntu pod trawnik lub kostkę brukową przy pomocy szerokiej łyżki.</p>
                </div>

                <!-- Card 7 -->
                <div class="bg-grafit/50 border border-white/5 rounded-2xl p-6 hover:border-budowlany/40 hover:-translate-y-1 transition-all group shadow-lg">
                    <div class="w-12 h-12 bg-budowlany/10 text-budowlany rounded-xl flex items-center justify-center mb-6 group-hover:bg-budowlany group-hover:text-grafit transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 15H19"/></svg>
                    </div>
                    <h3 class="font-display font-bold text-lg text-white mb-2">Zasypywanie rowów</h3>
                    <p class="text-sm text-gray-400 leading-relaxed">Błyskawiczne zasypywanie uprzednio wykonanych wykopów liniowych oraz precyzyjne zagęszczanie podłoża.</p>
                </div>

                <!-- Card 8 -->
                <div class="bg-grafit/50 border border-white/5 rounded-2xl p-6 hover:border-budowlany/40 hover:-translate-y-1 transition-all group shadow-lg">
                    <div class="w-12 h-12 bg-budowlany/10 text-budowlany rounded-xl flex items-center justify-center mb-6 group-hover:bg-budowlany group-hover:text-grafit transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/></svg>
                    </div>
                    <h3 class="font-display font-bold text-lg text-white mb-2">Szerokie prace ziemne</h3>
                    <p class="text-sm text-gray-400 leading-relaxed">Dowolne usuwanie warstw ziemi, przemieszczanie gruntu w obrębie działki i karczowanie drobnych korzeni.</p>
                </div>

                <!-- Card 9 -->
                <div class="bg-grafit/50 border border-white/5 rounded-2xl p-6 hover:border-budowlany/40 hover:-translate-y-1 transition-all group shadow-lg">
                    <div class="w-12 h-12 bg-budowlany/10 text-budowlany rounded-xl flex items-center justify-center mb-6 group-hover:bg-budowlany group-hover:text-grafit transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>
                    </div>
                    <h3 class="font-display font-bold text-lg text-white mb-2">Przygotowanie terenu</h3>
                    <p class="text-sm text-gray-400 leading-relaxed">Uprzątnięcie i usunięcie zanieczyszczeń, darni, korzeni pod rozpoczęcie inwestycji ogrodowych lub budowlanych.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Dane techniczne Section -->
    <section id="dane-techniczne" class="py-24 px-4 md:px-8 bg-grafit relative">
        <div class="max-w-7xl mx-auto">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="text-budowlany font-display font-semibold tracking-wider text-sm uppercase">SPECYFIKACJA URZĄDZENIA</span>
                <h2 class="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mt-3 mb-4">
                    Dane Techniczne Minikoparki
                </h2>
                <p class="text-gray-400 font-light">
                    Kompaktowe parametry, które zapewniają maksymalną zwrotność przy zachowaniu solidnej siły kopania.
                </p>
            </div>

            <!-- Parameters Grid -->
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <!-- Param 1 -->
                <div class="bg-[#2a2a2a] border border-white/5 rounded-2xl p-6 text-center shadow-lg hover:border-budowlany/30 hover:-translate-y-1 transition-all">
                    <span class="text-budowlany text-3xl font-display font-bold block mb-1">1000 kg</span>
                    <span class="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-4">Masa maszyny</span>
                    <div class="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                        <div class="bg-budowlany h-full w-[60%]"></div>
                    </div>
                </div>
                <!-- Param 2 -->
                <div class="bg-[#2a2a2a] border border-white/5 rounded-2xl p-6 text-center shadow-lg hover:border-budowlany/30 hover:-translate-y-1 transition-all">
                    <span class="text-budowlany text-3xl font-display font-bold block mb-1">Diesel</span>
                    <span class="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-4">Rodzaj silnika</span>
                    <div class="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                        <div class="bg-budowlany h-full w-[100%]"></div>
                    </div>
                </div>
                <!-- Param 3 -->
                <div class="bg-[#2a2a2a] border border-white/5 rounded-2xl p-6 text-center shadow-lg hover:border-budowlany/30 hover:-translate-y-1 transition-all">
                    <span class="text-budowlany text-3xl font-display font-bold block mb-1">8,6 kW</span>
                    <span class="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-4">Moc silnika</span>
                    <div class="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                        <div class="bg-budowlany h-full w-[45%]"></div>
                    </div>
                </div>
                <!-- Param 4 -->
                <div class="bg-[#2a2a2a] border border-white/5 rounded-2xl p-6 text-center shadow-lg hover:border-budowlany/30 hover:-translate-y-1 transition-all">
                    <span class="text-budowlany text-3xl font-display font-bold block mb-1">360°</span>
                    <span class="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-4">Promień obrotu</span>
                    <div class="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                        <div class="bg-budowlany h-full w-[100%]"></div>
                    </div>
                </div>
                <!-- Param 5 -->
                <div class="bg-[#2a2a2a] border border-white/5 rounded-2xl p-6 text-center shadow-lg hover:border-budowlany/30 hover:-translate-y-1 transition-all">
                    <span class="text-budowlany text-3xl font-display font-bold block mb-1">1,2 km/h</span>
                    <span class="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-4">Prędkość jazdy</span>
                    <div class="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                        <div class="bg-budowlany h-full w-[30%]"></div>
                    </div>
                </div>
                <!-- Param 6 -->
                <div class="bg-[#2a2a2a] border border-white/5 rounded-2xl p-6 text-center shadow-lg hover:border-budowlany/30 hover:-translate-y-1 transition-all">
                    <span class="text-budowlany text-3xl font-display font-bold block mb-1">~1 l/h</span>
                    <span class="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-4">Średnie spalanie</span>
                    <div class="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                        <div class="bg-budowlany h-full w-[20%]"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Co zawiera wynajem & Dodatkowe akcesoria Section -->
    <section id="wyposazenie" class="py-24 px-4 md:px-8 bg-neutral-900 relative">
        <div class="max-w-7xl mx-auto">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="text-budowlany font-display font-semibold tracking-wider text-sm uppercase">KOMPLETNY ZESTAW RENTALOWY</span>
                <h2 class="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mt-3 mb-4">
                    Co zawiera cena wynajmu?
                </h2>
                <p class="text-gray-400 font-light">
                    W przeciwieństwie do innych wypożyczalni, u nas podstawowy osprzęt i instruktaż otrzymujesz w cenie bazowej wynajmu!
                </p>
            </div>

            <!-- Double Column: Included vs Additional Accessories -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                <!-- Included (W cenie) -->
                <div class="lg:col-span-5 bg-gradient-to-br from-grafit to-[#1e1e1e] border-2 border-budowlany rounded-2xl p-8 relative shadow-2xl flex flex-col justify-between">
                    <div class="absolute -top-4 left-6 bg-budowlany text-grafit text-xs font-bold font-display px-4 py-1 rounded-full uppercase tracking-wider shadow">
                        Zawsze w cenie
                    </div>
                    <div>
                        <h3 class="font-display font-bold text-2xl text-white mt-2 mb-6 flex items-center gap-2">
                            <span>Podstawowy Pakiet</span>
                            <span class="text-budowlany text-sm font-normal">(Bez dopłat)</span>
                        </h3>
                        <ul class="space-y-4">
                            <li class="flex items-center gap-3">
                                <span class="w-6 h-6 rounded-full bg-budowlany/20 text-budowlany flex items-center justify-center font-bold text-sm">✔</span>
                                <span class="font-medium text-white text-base">Łyżka 40 cm</span>
                            </li>
                            <li class="flex items-center gap-3">
                                <span class="w-6 h-6 rounded-full bg-budowlany/20 text-budowlany flex items-center justify-center font-bold text-sm">✔</span>
                                <span class="font-medium text-white text-base">Skarpówka 80 cm</span>
                            </li>
                            <li class="flex items-center gap-3">
                                <span class="w-6 h-6 rounded-full bg-budowlany/20 text-budowlany flex items-center justify-center font-bold text-sm">✔</span>
                                <span class="font-medium text-white text-base">Instruktaż obsługi na miejscu</span>
                            </li>
                            <li class="flex items-center gap-3">
                                <span class="w-6 h-6 rounded-full bg-budowlany/20 text-budowlany flex items-center justify-center font-bold text-sm">✔</span>
                                <span class="font-medium text-white text-base">Dostawa w okolicach Swarzędza</span>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-8 pt-6 border-t border-white/5">
                        <p class="text-xs text-gray-400 leading-relaxed">
                            Po dostarczeniu maszyny przechodzisz pełny instruktaż stanowiskowy. Nawet jeśli nigdy nie sterowałeś minikoparką, nauczysz się tego w 10 minut!
                        </p>
                    </div>
                </div>

                <!-- Additional accessories (Dodatkowe akcesoria) -->
                <div class="lg:col-span-7 flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-6">
                            <h3 class="font-display font-bold text-2xl text-white">Dodatkowe Akcesoria</h3>
                            <span class="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full text-budowlany font-medium">Dostępne za dodatkową opłatą</span>
                        </div>
                        <!-- Cards Grid -->
                        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            <!-- Acc 1 -->
                            <div class="bg-grafit border border-white/5 rounded-xl p-4 text-center hover:border-budowlany/20 transition-all flex flex-col items-center justify-center">
                                <div class="w-10 h-10 bg-budowlany/10 text-budowlany rounded-full flex items-center justify-center mb-3">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"/></svg>
                                </div>
                                <span class="font-display font-semibold text-sm text-white block">Świder</span>
                            </div>
                            <!-- Acc 2 -->
                            <div class="bg-grafit border border-white/5 rounded-xl p-4 text-center hover:border-budowlany/20 transition-all flex flex-col items-center justify-center">
                                <div class="w-10 h-10 bg-budowlany/10 text-budowlany rounded-full flex items-center justify-center mb-3">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                                </div>
                                <span class="font-display font-semibold text-sm text-white block">Łyżka 20 cm</span>
                            </div>
                            <!-- Acc 3 -->
                            <div class="bg-grafit border border-white/5 rounded-xl p-4 text-center hover:border-budowlany/20 transition-all flex flex-col items-center justify-center">
                                <div class="w-10 h-10 bg-budowlany/10 text-budowlany rounded-full flex items-center justify-center mb-3">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
                                </div>
                                <span class="font-display font-semibold text-sm text-white block">Młot udarowy</span>
                            </div>
                            <!-- Acc 4 -->
                            <div class="bg-grafit border border-white/5 rounded-xl p-4 text-center hover:border-budowlany/20 transition-all flex flex-col items-center justify-center">
                                <div class="w-10 h-10 bg-budowlany/10 text-budowlany rounded-full flex items-center justify-center mb-3">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"/></svg>
                                </div>
                                <span class="font-display font-semibold text-sm text-white block">Chwytak</span>
                            </div>
                            <!-- Acc 5 -->
                            <div class="bg-grafit border border-white/5 rounded-xl p-4 text-center hover:border-budowlany/20 transition-all flex flex-col items-center justify-center">
                                <div class="w-10 h-10 bg-budowlany/10 text-budowlany rounded-full flex items-center justify-center mb-3">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 15H19"/></svg>
                                </div>
                                <span class="font-display font-semibold text-sm text-white block">Skarpówka uchylna</span>
                            </div>
                            <!-- Acc 6 -->
                            <div class="bg-grafit border border-white/5 rounded-xl p-4 text-center hover:border-budowlany/20 transition-all flex flex-col items-center justify-center">
                                <div class="w-10 h-10 bg-budowlany/10 text-budowlany rounded-full flex items-center justify-center mb-3">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                                </div>
                                <span class="font-display font-semibold text-sm text-white block">Grabie</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Cennik i Transport Section -->
    <section id="cennik" class="py-24 px-4 md:px-8 bg-grafit relative">
        <div class="max-w-7xl mx-auto">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="text-budowlany font-display font-semibold tracking-wider text-sm uppercase">TRANSPARENTNE WARUNKI</span>
                <h2 class="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mt-3 mb-4">
                    Cennik oraz Koszty Transportu
                </h2>
                <p class="text-gray-400 font-light">
                    Oferujemy proste i jasne warunki cenowe. Brak ukrytych opłat za serwis czy czyszczenie maszyny!
                </p>
            </div>

            <!-- Bento-style Grid for Pricing and Transport -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
                <!-- Pricing Card -->
                <div class="lg:col-span-4 bg-[#2a2a2a] border border-white/5 rounded-2xl p-8 shadow-2xl flex flex-col justify-between hover:border-budowlany/20 transition-all">
                    <div>
                        <span class="text-xs font-semibold text-budowlany uppercase tracking-widest block mb-4">NAJLEPSZA OFERTA</span>
                        <h3 class="text-2xl font-display font-bold text-white mb-2">Wynajem Minikoparki</h3>
                        <p class="text-xs text-gray-400 mb-6">Wypożyczasz bez operatora i sam realizujesz swoje prace</p>
                        
                        <div class="mb-6">
                            <span class="text-gray-400 text-sm block">Cena za dobę już od:</span>
                            <div class="flex items-baseline gap-2 mt-1">
                                <span class="text-5xl font-display font-bold text-budowlany">250 zł</span>
                                <span class="text-gray-400 text-sm">/ doba</span>
                            </div>
                        </div>

                        <div class="space-y-3 pt-6 border-t border-white/5">
                            <div class="flex justify-between items-center text-sm">
                                <span class="text-gray-400">Kaucja zwrotna:</span>
                                <span class="text-white font-bold">500 zł</span>
                            </div>
                            <div class="flex justify-between items-center text-sm">
                                <span class="text-gray-400">Dłuższy wynajem:</span>
                                <span class="text-budowlany font-semibold">Ustalana indywidualnie</span>
                            </div>
                        </div>
                    </div>
                    <div class="mt-8">
                        <a href="#kontakt" class="block text-center w-full bg-budowlany hover:bg-yellow-500 text-grafit font-display font-bold py-3.5 rounded-xl shadow transition-all hover:scale-[1.02]">
                            ZAREZERWUJ TERMIN
                        </a>
                    </div>
                </div>

                <!-- Transport Table Card -->
                <div class="lg:col-span-8 bg-[#2a2a2a] border border-white/5 rounded-2xl p-8 shadow-2xl flex flex-col justify-between hover:border-budowlany/20 transition-all">
                    <div>
                        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6">
                            <h3 class="text-2xl font-display font-bold text-white">Cennik Transportu</h3>
                            <span class="text-xs font-semibold bg-green-500/10 border border-green-500/20 text-green-400 px-3 py-1 rounded-full uppercase tracking-wider">
                                Swarzędz & Okolice GRATIS
                            </span>
                        </div>

                        <!-- Table Responsive wrapper -->
                        <div class="overflow-x-auto">
                            <table class="w-full text-left text-sm border-collapse">
                                <thead>
                                    <tr class="border-b border-white/10 text-gray-400">
                                        <th class="pb-3 font-semibold font-display">Miejscowość dostawy</th>
                                        <th class="pb-3 text-right font-semibold font-display">Koszt transportu (w obie strony)</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-white/5">
                                    <tr class="hover:bg-white/[0.02] transition-colors">
                                        <td class="py-3.5 font-medium text-white flex items-center gap-2">
                                            <span class="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
                                            Swarzędz i okolice
                                        </td>
                                        <td class="py-3.5 text-right font-bold text-green-400">BEZPŁATNIE (0 zł)</td>
                                    </tr>
                                    <tr class="hover:bg-white/[0.02] transition-colors">
                                        <td class="py-3.5 text-gray-300">Kobylnica</td>
                                        <td class="py-3.5 text-right font-bold text-white">40 zł</td>
                                    </tr>
                                    <tr class="hover:bg-white/[0.02] transition-colors">
                                        <td class="py-3.5 text-gray-300">Gowarzewo</td>
                                        <td class="py-3.5 text-right font-bold text-white">60 zł</td>
                                    </tr>
                                    <tr class="hover:bg-white/[0.02] transition-colors">
                                        <td class="py-3.5 text-gray-300">Kostrzyn</td>
                                        <td class="py-3.5 text-right font-bold text-white">80 zł</td>
                                    </tr>
                                    <tr class="hover:bg-white/[0.02] transition-colors">
                                        <td class="py-3.5 text-gray-300">Poznań Centrum</td>
                                        <td class="py-3.5 text-right font-bold text-white">100 zł</td>
                                    </tr>
                                    <tr class="hover:bg-white/[0.02] transition-colors">
                                        <td class="py-3.5 text-gray-300">Pobiedziska</td>
                                        <td class="py-3.5 text-right font-bold text-white">120 zł</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-gray-400">
                        <svg class="w-4 h-4 text-budowlany flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        <span>Możliwy transport również do innych miejscowości — zadzwoń lub napisz w celu indywidualnej wyceny.</span>
                    </div>
                </div>
            </div>

            <!-- Interactive Delivery Calculator Box -->
            <div class="bg-gradient-to-r from-[#212121] to-[#2e2e2e] border border-white/10 rounded-2xl p-6 shadow-xl max-w-3xl mx-auto">
                <h4 class="font-display font-bold text-lg text-white mb-4 flex items-center gap-2">
                    <svg class="w-5 h-5 text-budowlany" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 11h.01M12 14h.01M12 17h.01M15 11h.01M15 14h.01M15 17h.01M18 11h.01M18 14h.01M18 17h.01M21 11h.01M21 14h.01M21 17h.01M4 21h16a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                    Kalkulator Kosztów Wynajmu z Dostawą
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                    <!-- Loc Select -->
                    <div>
                        <label for="calc-loc" class="text-xs text-gray-400 font-semibold block mb-2">Miejsce dostawy:</label>
                        <select id="calc-loc" onchange="calculatePrice()" class="w-full bg-[#1b1b1b] border border-white/10 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-budowlany">
                            <option value="0">Swarzędz i okolice (0 zł)</option>
                            <option value="40">Kobylnica (40 zł)</option>
                            <option value="60">Gowarzewo (60 zł)</option>
                            <option value="80">Kostrzyn (80 zł)</option>
                            <option value="100">Poznań Centrum (100 zł)</option>
                            <option value="120">Pobiedziska (120 zł)</option>
                        </select>
                    </div>
                    <!-- Days Count -->
                    <div>
                        <label for="calc-days" class="text-xs text-gray-400 font-semibold block mb-2">Liczba dób wynajmu:</label>
                        <input type="number" id="calc-days" value="1" min="1" oninput="calculatePrice()" class="w-full bg-[#1b1b1b] border border-white/10 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-budowlany">
                    </div>
                    <!-- Summary Display -->
                    <div class="bg-[#1b1b1b] border border-white/5 rounded-lg p-3 text-center">
                        <span class="text-[10px] text-gray-400 uppercase font-semibold block">Szacunkowy koszt:</span>
                        <span id="calc-result" class="text-2xl font-display font-bold text-budowlany block">250 zł</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Dlaczego warto Section -->
    <section class="py-24 px-4 md:px-8 bg-neutral-900 relative">
        <div class="max-w-7xl mx-auto">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="text-budowlany font-display font-semibold tracking-wider text-sm uppercase">KORZYŚCI DLA KLIENTA</span>
                <h2 class="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mt-3 mb-4">
                    Dlaczego warto wybrać naszą ofertę?
                </h2>
                <p class="text-gray-400 font-light">
                    Kładziemy nacisk na wygodę klienta, przejrzystość rozliczeń i sprawność techniczną oferowanego sprzętu.
                </p>
            </div>

            <!-- Icons Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Point 1 -->
                <div class="flex items-start gap-4 p-4 hover:bg-white/[0.01] rounded-2xl transition-all">
                    <div class="w-12 h-12 bg-budowlany/10 text-budowlany rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                    </div>
                    <div>
                        <h4 class="font-display font-bold text-lg text-white mb-2">Nowoczesna maszyna</h4>
                        <p class="text-sm text-gray-400 leading-relaxed">Nasz sprzęt jest nowy, sprawny technicznie i regularnie serwisowany, co minimalizuje ryzyko awarii.</p>
                    </div>
                </div>
                <!-- Point 2 -->
                <div class="flex items-start gap-4 p-4 hover:bg-white/[0.01] rounded-2xl transition-all">
                    <div class="w-12 h-12 bg-budowlany/10 text-budowlany rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    </div>
                    <div>
                        <h4 class="font-display font-bold text-lg text-white mb-2">Bardzo małe spalanie</h4>
                        <p class="text-sm text-gray-400 leading-relaxed">Wydajny silnik Diesel spala zaledwie około 1 litra oleju napędowego na godzinę, czyniąc pracę opłacalną.</p>
                    </div>
                </div>
                <!-- Point 3 -->
                <div class="flex items-start gap-4 p-4 hover:bg-white/[0.01] rounded-2xl transition-all">
                    <div class="w-12 h-12 bg-budowlany/10 text-budowlany rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    </div>
                    <div>
                        <h4 class="font-display font-bold text-lg text-white mb-2">Dostawa pod adres</h4>
                        <p class="text-sm text-gray-400 leading-relaxed">Nie martwisz się o transport. Dowozimy i odbieramy sprzęt z umówionego miejsca o wyznaczonym czasie.</p>
                    </div>
                </div>
                <!-- Point 4 -->
                <div class="flex items-start gap-4 p-4 hover:bg-white/[0.01] rounded-2xl transition-all">
                    <div class="w-12 h-12 bg-budowlany/10 text-budowlany rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                    </div>
                    <div>
                        <h4 class="font-display font-bold text-lg text-white mb-2">Instruktaż obsługi</h4>
                        <p class="text-sm text-gray-400 leading-relaxed">Dbamy o bezpieczną pracę. Przeprowadzamy krótkie szkolenie, pokazując jak operować koparką.</p>
                    </div>
                </div>
                <!-- Point 5 -->
                <div class="flex items-start gap-4 p-4 hover:bg-white/[0.01] rounded-2xl transition-all">
                    <div class="w-12 h-12 bg-budowlany/10 text-budowlany rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                    </div>
                    <div>
                        <h4 class="font-display font-bold text-lg text-white mb-2">Elastyczne terminy</h4>
                        <p class="text-sm text-gray-400 leading-relaxed">Dostosujemy czas najmu do Twojego projektu. Wynajmij na dzień, weekend lub cały miesiąc.</p>
                    </div>
                </div>
                <!-- Point 6 -->
                <div class="flex items-start gap-4 p-4 hover:bg-white/[0.01] rounded-2xl transition-all">
                    <div class="w-12 h-12 bg-budowlany/10 text-budowlany rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <div>
                        <h4 class="font-display font-bold text-lg text-white mb-2">Konkurencyjne ceny</h4>
                        <p class="text-sm text-gray-400 leading-relaxed">Gwarantujemy jedne z najlepszych cen najmu w okolicach Swarzędza i Poznania.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Kontakt & Formularz Section -->
    <section id="kontakt" class="py-24 px-4 md:px-8 bg-grafit relative">
        <div class="max-w-7xl mx-auto">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="text-budowlany font-display font-semibold tracking-wider text-sm uppercase">SKONTAKTUJ SIĘ</span>
                <h2 class="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mt-3 mb-4">
                    Zarezerwuj Termin
                </h2>
                <p class="text-gray-400 font-light">
                    Masz pytania dotyczące maszyny lub terminów? Zadzwoń, napisz lub skorzystaj z formularza kontaktowego.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <!-- Info Cards Column -->
                <div class="lg:col-span-5 flex flex-col justify-between">
                    <div class="space-y-6">
                        <!-- Card Tel -->
                        <a href="tel:501790550" class="block bg-[#2a2a2a] border border-white/5 p-6 rounded-2xl shadow-lg hover:border-budowlany/30 transition-all">
                            <div class="flex items-center gap-4">
                                <div class="w-12 h-12 bg-budowlany/10 text-budowlany rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                                </div>
                                <div>
                                    <span class="text-xs text-gray-400 uppercase tracking-widest block font-semibold">Telefon:</span>
                                    <span class="text-xl font-display font-bold text-white tracking-tight">501 790 550</span>
                                </div>
                            </div>
                        </a>

                        <!-- Card Email -->
                        <a href="mailto:antarex.biuro@gmail.com" class="block bg-[#2a2a2a] border border-white/5 p-6 rounded-2xl shadow-lg hover:border-budowlany/30 transition-all">
                            <div class="flex items-center gap-4">
                                <div class="w-12 h-12 bg-budowlany/10 text-budowlany rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                </div>
                                <div>
                                    <span class="text-xs text-gray-400 uppercase tracking-widest block font-semibold">E-mail:</span>
                                    <span class="text-xl font-display font-bold text-white tracking-tight">antarex.biuro@gmail.com</span>
                                </div>
                            </div>
                        </a>

                        <!-- Card Location -->
                        <div class="bg-[#2a2a2a] border border-white/5 p-6 rounded-2xl shadow-lg hover:border-budowlany/30 transition-all">
                            <div class="flex items-center gap-4">
                                <div class="w-12 h-12 bg-budowlany/10 text-budowlany rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                </div>
                                <div>
                                    <span class="text-xs text-gray-400 uppercase tracking-widest block font-semibold">Obszar działania:</span>
                                    <span class="text-xl font-display font-bold text-white tracking-tight">Swarzędz i okolice</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Facebook Button -->
                    <div class="mt-8">
                        <a href="https://www.facebook.com/profile.php?id=61588887734109" target="_blank" rel="noopener noreferrer" 
                           class="flex items-center justify-center gap-3 bg-[#1877F2] hover:bg-[#1565C0] text-white font-display font-semibold py-4 px-6 rounded-xl shadow-lg transition-all hover:scale-105">
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                            Odwiedź nas na Facebooku
                        </a>
                    </div>
                </div>

                <!-- Form Column -->
                <div class="lg:col-span-7">
                    <div class="bg-[#2a2a2a] border border-white/5 p-8 rounded-3xl shadow-2xl relative">
                        <h3 class="text-2xl font-display font-bold text-white mb-6">Napisz do nas</h3>
                        <form id="contact-form" onsubmit="handleFormSubmit(event)" class="space-y-4">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <!-- Name -->
                                <div>
                                    <label for="form-name" class="text-xs text-gray-400 font-semibold block mb-1">Imię:</label>
                                    <input type="text" id="form-name" required class="w-full bg-[#1e1e1e] border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-budowlany">
                                </div>
                                <!-- Tel -->
                                <div>
                                    <label for="form-phone" class="text-xs text-gray-400 font-semibold block mb-1">Telefon:</label>
                                    <input type="tel" id="form-phone" required class="w-full bg-[#1e1e1e] border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-budowlany">
                                </div>
                            </div>
                            <!-- Email -->
                            <div>
                                <label for="form-email" class="text-xs text-gray-400 font-semibold block mb-1">E-mail (opcjonalnie):</label>
                                <input type="email" id="form-email" class="w-full bg-[#1e1e1e] border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-budowlany">
                            </div>
                            <!-- Rent Date -->
                            <div>
                                <label for="form-date" class="text-xs text-gray-400 font-semibold block mb-1">Planowany termin wynajmu:</label>
                                <input type="text" id="form-date" placeholder="np. od 15.07 do 17.07" class="w-full bg-[#1e1e1e] border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-budowlany">
                            </div>
                            <!-- Msg -->
                            <div>
                                <label for="form-message" class="text-xs text-gray-400 font-semibold block mb-1">Wiadomość:</label>
                                <textarea id="form-message" rows="4" required class="w-full bg-[#1e1e1e] border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-budowlany" placeholder="Opisz krótko zakres prac lub podaj adres dostawy..."></textarea>
                            </div>

                            <!-- Submit Button -->
                            <button type="submit" class="w-full bg-budowlany hover:bg-yellow-500 text-grafit font-display font-bold py-4 rounded-xl shadow-lg transition-all hover:scale-[1.01]">
                                WYŚLIJ ZAPYTANIE
                            </button>
                        </form>

                        <!-- Form Success Portal Overlay -->
                        <div id="form-success-overlay" class="absolute inset-0 bg-[#2a2a2a]/95 rounded-3xl z-30 hidden flex flex-col items-center justify-center p-8 text-center transition-all duration-300">
                            <div class="w-16 h-16 bg-green-500/15 text-green-500 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                            </div>
                            <h3 class="text-2xl font-display font-bold text-white mb-2">Zapytanie zostało wysłane!</h3>
                            <p class="text-gray-300 text-sm max-w-sm mb-6">
                                Dziękujemy za kontakt, <span id="success-user-name" class="font-semibold text-budowlany"></span>. Odpowiemy lub oddzwonimy najszybciej jak to możliwe!
                            </p>
                            <button onclick="resetContactForm()" class="bg-white/5 border border-white/10 text-white font-medium px-6 py-2.5 rounded-lg hover:bg-white/10 text-xs tracking-wider uppercase transition-colors">
                                Wyślij kolejną wiadomość
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-[#191919] border-t border-white/5 py-12 px-4 md:px-8">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <!-- Brand & Info -->
            <div class="text-center md:text-left">
                <div class="flex items-center justify-center md:justify-start gap-3 mb-3">
                    <img src="https://i.ibb.co/4nmtgLQX/734784038-122108951451296257-554297994865160227-n.jpg" alt="Logo" class="w-8 h-8 rounded object-cover">
                    <span class="font-display font-bold text-lg text-white">MINI Koparka BEZ operatora</span>
                </div>
                <p class="text-xs text-gray-400">© 2026 MINI Koparka BEZ operatora. Wszystkie prawa zastrzeżone.</p>
            </div>

            <!-- Fast Contact -->
            <div class="flex flex-col items-center md:items-end text-sm text-gray-300 gap-1 text-center md:text-right">
                <span class="font-semibold text-budowlany">Swarzędz i okolice</span>
                <span>tel. <a href="tel:501790550" class="hover:text-budowlany font-semibold text-white">501 790 550</a></span>
                <span>email: <a href="mailto:antarex.biuro@gmail.com" class="hover:text-budowlany text-white">antarex.biuro@gmail.com</a></span>
            </div>
        </div>
    </footer>

    <!-- Vanilla Javascript Logic -->
    <script>
        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('bg-[#1e1e1e]/90', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-white/5');
                nav.classList.remove('py-4');
                nav.classList.add('py-2');
            } else {
                nav.classList.remove('bg-[#1e1e1e]/90', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-white/5');
                nav.classList.add('py-4');
                nav.classList.remove('py-2');
            }
        });

        // Mobile Menu Toggle
        const menuToggle = document.getElementById('mobile-menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const hamburger = document.getElementById('menu-icon-hamburger');
        const closeIcon = document.getElementById('menu-icon-close');

        menuToggle.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                hamburger.classList.add('hidden');
                closeIcon.classList.remove('hidden');
            } else {
                mobileMenu.classList.add('hidden');
                hamburger.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        });

        // Close menu on link click
        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                hamburger.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            });
        });

        // Lightbox Functions
        function openLightbox() {
            const lightbox = document.getElementById('lightbox');
            lightbox.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            const lightbox = document.getElementById('lightbox');
            lightbox.classList.add('hidden');
            document.body.style.overflow = '';
        }

        // Close lightbox on click outside the image
        document.getElementById('lightbox').addEventListener('click', (e) => {
            if (e.target.id === 'lightbox' || e.target.id === 'lightbox-img') {
                if (e.target.id === 'lightbox') {
                    closeLightbox();
                }
            }
        });

        // Escape Key closes Lightbox
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        });

        // Pricing and Delivery Calculator Function
        function calculatePrice() {
            const locSelect = document.getElementById('calc-loc');
            const daysInput = document.getElementById('calc-days');
            const resultSpan = document.getElementById('calc-result');

            let deliveryCost = parseFloat(locSelect.value) || 0;
            let days = parseInt(daysInput.value) || 1;
            if (days < 1) days = 1;

            // Simple pricing tiers:
            // 1-3 days: 250 zl/day
            // More days can have customized scale or simple 250 rate
            let rentalRate = 250;
            let totalRental = rentalRate * days;
            let grandTotal = totalRental + deliveryCost;

            resultSpan.innerText = grandTotal + ' zł';
        }

        // Form Submit handler
        function handleFormSubmit(e) {
            e.preventDefault();
            const name = document.getElementById('form-name').value;
            const phone = document.getElementById('form-phone').value;
            const message = document.getElementById('form-message').value;

            if (name && phone && message) {
                // Set name in portal screen
                document.getElementById('success-user-name').innerText = name;
                // Show portal screen
                document.getElementById('form-success-overlay').classList.remove('hidden');
            }
        }

        // Reset form
        function resetContactForm() {
            document.getElementById('contact-form').reset();
            document.getElementById('form-success-overlay').classList.add('hidden');
            calculatePrice(); // Reset calculator values too just in case
        }
    </script>
</body>
</html>`;
}
