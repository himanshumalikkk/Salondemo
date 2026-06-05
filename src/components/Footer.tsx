/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Share2, MessageSquare, ArrowUp, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FooterProps {
  onStickyBookClick: () => void;
  onInstantWhatsAppTrigger: () => void;
}

export default function Footer({ onStickyBookClick, onInstantWhatsAppTrigger }: FooterProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="relative bg-[#070707] border-t border-gold-300/10 pt-20 pb-28 md:pb-12 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-neutral-900">
            
            {/* Branding Column */}
            <div className="flex flex-col space-y-6">
              <a href="#hero" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 border border-gold-300 rounded-full flex items-center justify-center bg-black/40 text-gold-300 font-serif text-lg tracking-widest font-semibold">
                  A
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-xl tracking-[0.25em] text-white uppercase font-light">
                    AURELIA
                  </span>
                  <span className="text-[9px] tracking-[0.45em] text-gold-300 uppercase font-mono font-medium -mt-1">
                    LUXURY SALON & SPA
                  </span>
                </div>
              </a>
              <p className="font-sans text-xs text-gray-400 leading-relaxed font-light tracking-wide">
                Bespoke hair, skin, couture makeup, and gentlemen's barbering curated for elite guests. Our luxury centers operate under medical-grade safety standards in Mumbai, London & Dubai.
              </p>
              
              {/* Social Channels Row */}
              <div className="flex items-center space-x-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-neutral-950 border border-neutral-900 flex items-center justify-center hover:text-gold-300 hover:border-gold-300/35 transition-all text-gray-400"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-neutral-950 border border-neutral-900 flex items-center justify-center hover:text-gold-300 hover:border-gold-300/35 transition-all text-gray-400"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-neutral-950 border border-neutral-900 flex items-center justify-center hover:text-gold-300 hover:border-gold-300/35 transition-all text-gray-400"
                  aria-label="Follow us on Youtube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Navigation Directory Link */}
            <div>
              <h3 className="font-serif text-sm text-white tracking-wider font-semibold mb-6 uppercase">
                The Sanctuary Directory
              </h3>
              <ul className="space-y-3.5 font-sans text-xs">
                <li>
                  <a href="#services" className="hover:text-gold-300 tracking-wide transition-colors">Our Design Services</a>
                </li>
                <li>
                  <a href="#before-after" className="hover:text-gold-300 tracking-wide transition-colors">Before & After Slider</a>
                </li>
                <li>
                  <a href="#why-us" className="hover:text-gold-300 tracking-wide transition-colors">Vetted Quality Standards</a>
                </li>
                <li>
                  <a href="#team" className="hover:text-gold-300 tracking-wide transition-colors">Meet Master Stylists</a>
                </li>
                <li>
                  <a href="#location" className="hover:text-gold-300 tracking-wide transition-colors">Sanctuary Coordinates</a>
                </li>
                <li>
                  <a href="#faqs" className="hover:text-gold-300 tracking-wide transition-colors">Frequently Asked FAQs</a>
                </li>
              </ul>
            </div>

            {/* Contact details */}
            <div className="space-y-6">
              <h3 className="font-serif text-sm text-white tracking-wider font-semibold uppercase">
                Direct Contact
              </h3>
              
              <ul className="space-y-4 font-sans text-xs tracking-wide font-light">
                <li className="flex items-center space-x-3 cursor-pointer group">
                  <span className="text-gold-300"><Phone className="w-4 h-4" /></span>
                  <a href="tel:+912249111111" className="hover:text-gold-300 transition-colors font-mono tracking-wider">
                    +91 22 4911 1111
                  </a>
                </li>
                <li className="flex items-center space-x-3 cursor-pointer group">
                  <span className="text-gold-300"><Mail className="w-4 h-4" /></span>
                  <a href="mailto:concierge@aureliasalon.com" className="hover:text-gold-300 transition-colors font-mono">
                    concierge@aureliasalon.com
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-gold-300 mt-0.5"><MapPin className="w-4 h-4" /></span>
                  <span className="text-gray-400 font-light leading-relaxed">
                    Ground Suite, High Street Phoenix, Lower Parel, Mumbai, MH, 400013
                  </span>
                </li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div>
              <h3 className="font-serif text-sm text-white tracking-wider font-semibold mb-6 uppercase">
                The Elite Circle
              </h3>
              <p className="font-sans text-xs text-gray-400 font-light leading-relaxed mb-4">
                Register to receive priority booking notifications, early-bird bridal slot openings, and private luxury wellness articles.
              </p>
              
              <div className="flex rounded overflow-hidden border border-neutral-800 focus-within:border-gold-300/60 transition-colors">
                <input
                  type="email"
                  placeholder="Private Email..."
                  className="w-full h-11 px-4.5 bg-black font-sans text-xs text-white focus:outline-none placeholder-gray-600"
                  aria-label="Email Address for newsletter"
                />
                <button
                  onClick={() => alert("Deeply honored. Welcome to the Aurelia Elite Circle.")}
                  className="bg-gold-400 hover:bg-gold-550 text-black px-4.5 font-sans text-xs uppercase font-bold tracking-widest cursor-pointer transition-colors"
                >
                  Join
                </button>
              </div>
            </div>

          </div>

          {/* Copyright line */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between font-sans text-[11px] text-gray-600 tracking-wider">
            <span>© {currentYear} Aurelia Salon & Spa. Designed for Haute-Couture.</span>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <span className="cursor-pointer hover:text-gold-300 transition-colors">Privacy Policy</span>
              <span className="cursor-pointer hover:text-gold-300 transition-colors">Bespoke Terms</span>
              <span className="cursor-pointer hover:text-gold-300 transition-colors tracking-widest font-serif">₹ INR // DXB // LON</span>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING ACTION TRIGGER BAR (STAYS FLOATING ON THE BOTTOM-RIGHT FOR ALL SCREENS) */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col space-y-3">
        {/* Floating WhatsApp Bubble */}
        <button
          onClick={onInstantWhatsAppTrigger}
          id="btn-whatsapp-floating"
          className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#1ebd5d] text-white flex items-center justify-center shadow-lg shadow-emerald-500/15 group hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          title="Connect via WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-current" />
          {/* Animated visual badge to guide hand */}
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-black animate-ping" />
        </button>

        {/* Floating Scroll Top Trigger */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={scrollToTop}
              className="w-13 h-13 rounded-full bg-neutral-900 border border-neutral-800 text-gold-300 flex items-center justify-center shadow-lg hover:border-gold-300/30 hover:text-white transition-all duration-300 cursor-pointer"
              title="Scroll back to top"
            >
              <ArrowUp className="w-5 h-5 pointer-events-none" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* MOBILE-FIRST COMPACT STICKY BOTTOM TOOLBAR (COMPLY WITH TOUCH EXPERIENCES & STICKY WHATSAPP REQUIREMENTS) */}
      <div className="fixed bottom-0 left-0 w-full z-45 bg-[#080808]/95 backdrop-blur-md border-t border-gold-300/10 px-4 py-3 grid grid-cols-2 gap-3.5 md:hidden">
        {/* Direct WhatsApp trigger */}
        <button
          onClick={onInstantWhatsAppTrigger}
          id="btn-whatsapp-mobile-sticky"
          className="h-12 flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#1ebd5d] text-black rounded-full font-sans text-[11px] tracking-widest uppercase font-bold shadow-md shadow-emerald-500/10 active:scale-[0.97] transition-all duration-300 cursor-pointer"
        >
          <MessageSquare className="w-4 h-4 fill-current text-black" />
          <span>WhatsApp Quick Book</span>
        </button>

        {/* Regular Reservation Form link */}
        <button
          onClick={onStickyBookClick}
          id="btn-consult-mobile-sticky"
          className="h-12 flex items-center justify-center space-x-2 bg-gradient-to-r from-gold-400 to-gold-300 text-black rounded-full font-sans text-[11px] tracking-widest uppercase font-semibold active:scale-[0.97] transition-all duration-300 cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-black" />
          <span>Book Ritual</span>
        </button>
      </div>
    </>
  );
}
