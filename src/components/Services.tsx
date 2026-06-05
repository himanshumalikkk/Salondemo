/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Service } from "../types";
import { SERVICES } from "../data";
import { Scissors, Palette, Sparkles, Heart, Flower, Layers, Smile, Crown, Calendar, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ServicesProps {
  onBookNow: (serviceTitle: string) => void;
  onBookOnWhatsApp: (serviceTitle: string) => void;
}

export default function Services({ onBookNow, onBookOnWhatsApp }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { key: "all", label: "All Offerings" },
    { key: "hair", label: "Hair Artistry" },
    { key: "skin", label: "Elite Skin" },
    { key: "makeup", label: "Couture Makeup" },
    { key: "nails", label: "Nail Studio" },
    { key: "grooming", label: "Grooming Lounge" }
  ];

  const filteredServices = SERVICES.filter(service => {
    if (activeCategory === "all") return true;
    return service.category === activeCategory;
  });

  // Map icon names to Lucide icons
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Scissors": return <Scissors className="w-5 h-5 text-gold-300" />;
      case "Palette": return <Palette className="w-5 h-5 text-gold-300" />;
      case "Sparkles": return <Sparkles className="w-5 h-5 text-gold-300" />;
      case "Heart": return <Heart className="w-5 h-5 text-gold-300" />;
      case "Flower": return <Flower className="w-5 h-5 text-gold-300" />;
      case "Layers": return <Layers className="w-5 h-5 text-gold-300" />;
      case "Smile": return <Smile className="w-5 h-5 text-gold-300" />;
      case "Crown": return <Crown className="w-5 h-5 text-gold-300" />;
      default: return <Sparkles className="w-5 h-5 text-gold-300" />;
    }
  };

  return (
    <section id="services" className="relative bg-black py-24 sm:py-32">
      {/* Decorative vertical lines and lighting effects */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
      <div className="absolute right-0 top-1/4 w-80 h-80 rounded-full bg-gold-400/3 blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-80 h-80 rounded-full bg-gold-400/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="font-sans text-[11px] tracking-[0.3em] text-gold-400 uppercase font-semibold">
            The Apothecary & Suite
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mt-3 mb-6">
            Our Luxury <span className="italic text-gold-200">Services</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold-300 mx-auto mb-6" />
          <p className="font-sans text-xs sm:text-sm text-gray-400 tracking-wider leading-relaxed">
            Every ritual is conducted by certified master technicians using elite, bio-active elements designed to restore balance, radiance, and flawless charm.
          </p>
        </div>

        {/* Category Selective Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`h-11 px-5 rounded-full font-sans text-[11px] tracking-widest uppercase font-semibold border transition-all duration-300 cursor-pointer ${
                activeCategory === cat.key
                  ? "bg-gold-400 text-black border-gold-400 shadow-md shadow-gold-400/10"
                  : "bg-neutral-900/50 text-gray-400 border-neutral-800 hover:text-white hover:border-gold-400/35"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Services Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={service.id}
                id={`card-service-${service.id}`}
                className="group relative flex flex-col justify-between bg-[#0a0a0a] border border-neutral-900 rounded-xl overflow-hidden hover:border-gold-400/40 transition-all duration-500 hover:-translate-y-1.5"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />

                  {/* Absolute luxury category badge */}
                  <div className="absolute top-4 left-4 flex items-center space-x-1.5 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-gold-400/20">
                    {renderIcon(service.iconName)}
                    <span className="font-sans text-[9px] tracking-widest text-gold-300 uppercase font-semibold">
                      {service.category}
                    </span>
                  </div>

                  {/* Absolute core price badge */}
                  <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-xs px-3.5 py-1.5 rounded-md border border-neutral-800">
                    <span className="font-serif text-sm font-semibold text-gold-300">
                      ₹{service.startingPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="font-sans text-[8px] text-gray-400 uppercase tracking-wider block leading-tight">
                      starting price
                    </span>
                  </div>
                </div>

                {/* Info and action panel */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-serif text-base text-white tracking-wide font-medium group-hover:text-gold-300 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <span className="font-mono text-[9px] text-gray-500 tracking-wider">
                        {service.duration}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-gray-400 tracking-wide font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Combined premium CTAs */}
                  <div className="grid grid-cols-2 gap-2 mt-auto">
                    {/* Booking in app */}
                    <button
                      onClick={() => onBookNow(service.title)}
                      className="h-10 text-[9px] tracking-wider font-semibold font-sans text-white border border-neutral-800 rounded bg-[#101010] hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all duration-300 uppercase"
                    >
                      Book Free Consultation
                    </button>

                    {/* High conversion Direct WhatsApp */}
                    <button
                      onClick={() => onBookOnWhatsApp(service.title)}
                      className="h-10 text-[9px] tracking-wider font-semibold font-sans bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500 hover:text-black hover:border-emerald-500 rounded transition-all duration-300 uppercase flex items-center justify-center space-x-1"
                    >
                      <MessageSquare className="w-3 h-3 fill-current" />
                      <span>WhatsApp Appointment</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
