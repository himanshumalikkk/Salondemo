/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar, Compass, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onOpenDashboard: () => void;
  onBookClick: () => void;
}

export default function Header({ onOpenDashboard, onBookClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Transformations", href: "#before-after" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Stylists", href: "#team" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQs", href: "#faqs" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md py-4 border-b border-gold-300/20"
            : "bg-gradient-to-b from-black/80 to-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Elegant Luxury Monogram & Title */}
            <a href="#hero" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 border border-gold-300 rounded-full flex items-center justify-center bg-black/40 group-hover:bg-gold-500/10 transition-colors duration-300">
                <span className="font-serif text-lg tracking-widest text-gold-300 font-semibold group-hover:scale-110 transition-transform duration-300">A</span>
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

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-sans text-xs tracking-widest text-gray-300 hover:text-gold-300 uppercase transition-colors duration-300 font-medium hover:scale-105"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA action shortcuts */}
            <div className="hidden sm:flex items-center space-x-4">
              <button
                onClick={onOpenDashboard}
                className="text-[10px] tracking-widest text-gold-400 hover:text-gold-300 uppercase border border-gold-400/30 px-3 py-1.5 rounded bg-gold-400/5 hover:bg-gold-400/10 transition-all duration-300"
              >
                Owner Portal
              </button>
              
              <button
                onClick={onBookClick}
                className="flex items-center space-x-2 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-black font-sans text-xs tracking-widest uppercase font-semibold px-5 py-3 rounded-full shadow-lg shadow-gold-500/15 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <Calendar className="w-4.5 h-4.5" />
                <span>Book Now</span>
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center space-x-3 lg:hidden">
              <button
                onClick={onOpenDashboard}
                className="text-[9px] tracking-wider text-gold-400 border border-gold-400/20 px-2 py-1 rounded bg-gold-400/5 mr-1"
              >
                Portal
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 mr-1 rounded bg-neutral-900/40 text-gold-300 hover:text-white transition-colors border border-neutral-800"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[73px] left-0 w-full z-40 bg-black/98 border-b border-gold-300/20 shadow-2xl overflow-y-auto lg:hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-lg text-sm text-center font-sans tracking-widest text-gray-200 hover:text-gold-300 uppercase transition-colors font-medium border-b border-neutral-900"
                >
                  {item.label}
                </a>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-4">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenDashboard();
                  }}
                  className="py-3 text-xs tracking-widest text-center text-gold-400 border border-gold-400/30 bg-gold-400/5 rounded font-medium uppercase"
                >
                  Owner Portal
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onBookClick();
                  }}
                  className="py-3 text-xs tracking-widest text-center bg-gold-400 text-black font-semibold rounded uppercase shadow-md shadow-gold-400/20"
                >
                  Book Instant
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
