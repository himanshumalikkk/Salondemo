/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { MessageSquare, ArrowRight, Star, Award, ShieldCheck, Heart } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onBookOnWhatsApp: () => void;
  onViewServices: () => void;
}

export default function Hero({ onBookOnWhatsApp, onViewServices }: HeroProps) {
  // Use the auto-generated image from the AI or fallback to high-end salon assets if necessary
  const heroImage = "/src/assets/images/luxury_salon_hero_1780638607965.png";

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white pt-20">
      {/* Absolute background image with parralax effect, subtle gold tint & black gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Aurelia Luxury Salon Reception"
          className="w-full h-full object-cover object-center opacity-45 scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-radial-gradient-to-r from-transparent via-black/10 to-black/90 pointer-events-none" />
      </div>

      {/* Decorative luxury architectural details */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-gold-400/80 to-transparent hidden lg:block" />
      <div className="absolute bottom-10 left-12 hidden xl:block">
        <div className="flex flex-col space-y-4 font-mono text-[9px] tracking-[0.3em] text-gray-500 uppercase">
          <span>LON // EST: 2012</span>
          <span>MUM // CHIC: 2018</span>
          <span>DXB // GLOW: 2024</span>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 pb-24 md:py-32">
        {/* Sparkle badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold-400/10 to-gold-400/20 border border-gold-300/30 px-3.5 py-1.5 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span className="font-sans text-[10px] tracking-[0.25em] text-gold-300 uppercase font-medium">
            AWWWARDS NOMINEE • THE PARAGON OF BEAUTY
          </span>
        </motion.div>

        {/* Elegant Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6 leading-[1.1]"
        >
          Transform Your Look <br />
          <span className="italic text-gold-200 font-normal">With Expert Beauty Care</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto font-sans text-sm sm:text-base md:text-lg text-gray-300 tracking-wide font-light mb-12 sm:leading-relaxed"
        >
          Professional Hair, Makeup, Skin & Beauty Services Tailored For You
        </motion.p>

        {/* Actions Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          {/* Primary CTA - WhatsApp Booking */}
          <button
            onClick={onBookOnWhatsApp}
            id="btn-hero-whatsapp-booking"
            className="w-full sm:w-auto h-14 flex items-center justify-center space-x-3 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 text-black font-sans text-xs tracking-widest uppercase font-bold px-8 rounded-full shadow-xl shadow-gold-400/25 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <MessageSquare className="w-4.5 h-4.5 fill-current" />
            <span>Book Appointment on WhatsApp</span>
          </button>

          {/* Secondary CTA - View Services */}
          <button
            onClick={onViewServices}
            id="btn-hero-view-services"
            className="w-full sm:w-auto h-14 flex items-center justify-center space-x-2 border border-gold-300/40 text-gold-300 hover:text-white hover:border-gold-300 font-sans text-xs tracking-widest uppercase font-semibold px-8 rounded-full bg-black/30 hover:bg-gold-400/10 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>View Services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Floating scroll down hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center space-y-2 cursor-pointer"
          onClick={onViewServices}
        >
          <span className="text-[9px] tracking-[0.3em] uppercase text-gray-400">Discover More</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-gold-300 to-transparent animate-bounce" />
        </motion.div>
      </div>

      {/* Subtle zoom animation styling */}
      <style>{`
        @keyframes subtle-zoom {
          0% { transform: scale(1.02); }
          100% { transform: scale(1.08); }
        }
      `}</style>
    </section>
  );
}
