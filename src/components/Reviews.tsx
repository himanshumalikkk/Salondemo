/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { TESTIMONIALS } from "../data";
import { Star, ChevronLeft, ChevronRight, CheckCircle, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevReview = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Autoplay reviews every 8 seconds
  useEffect(() => {
    const interval = setInterval(nextReview, 8000);
    return () => clearInterval(interval);
  }, []);

  const activeReview = TESTIMONIALS[activeIndex];

  return (
    <section id="reviews" className="relative bg-black py-24 sm:py-32 overflow-hidden">
      {/* Absolute design decorations */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-gold-400/2 blur-[140px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-emerald-400/1 blur-[140px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-[11px] tracking-[0.3em] text-gold-400 uppercase font-semibold">
            Social Proof & Praises
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mt-3 mb-6">
            Words From Our <span className="italic text-gold-200">Patrons</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold-300 mx-auto" />
          
          {/* Main Google Rating summary */}
          <div className="flex items-center justify-center space-x-2 mt-4 text-xs font-sans tracking-widest uppercase text-gray-500">
            <span className="font-bold text-white">4.9 / 5.0</span>
            <div className="flex text-gold-400">
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span>Based on 380+ Google Reviews</span>
          </div>
        </div>

        {/* Carousel slide container */}
        <div className="relative min-h-[320px] md:min-h-[260px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeReview.id}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.5 }}
              className="text-center flex flex-col items-center"
            >
              {/* Giant decorative gold quotes */}
              <span className="font-serif text-7xl text-gold-400/20 leading-none h-6 block mb-4">“</span>
              
              <blockquote className="font-sans text-base sm:text-lg md:text-xl text-gray-200 font-light leading-relaxed mb-8 max-w-3xl">
                {activeReview.reviewText}
              </blockquote>

              <div className="w-10 h-[1.5px] bg-gold-400/40 mb-6" />

              {/* Patron Bio Details */}
              <div className="flex items-center space-x-3.5 text-left">
                <img
                  src={activeReview.avatarUrl}
                  alt={activeReview.name}
                  className="w-12 h-12 rounded-full border border-gold-400/30 object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div>
                  <div className="flex items-center space-x-1.5">
                    <span className="font-serif text-sm font-semibold text-white tracking-wide">
                      {activeReview.name}
                    </span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 fill-black" title="Verified Customer" />
                    <span className="text-[10px] text-emerald-400 tracking-widest font-sans uppercase font-medium">VERIFIED BUYER</span>
                  </div>
                  <span className="text-[11px] text-gray-500 font-mono tracking-wider block">
                    {activeReview.role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Controls Buttons */}
        <div className="flex items-center justify-center space-x-6 mt-12">
          <button
            onClick={prevReview}
            className="w-11 h-11 rounded-full border border-neutral-900 bg-neutral-950 flex items-center justify-center text-gray-400 hover:text-gold-300 hover:border-gold-300/30 transition-all duration-300 hover:-translate-x-0.5 cursor-pointer"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {/* Pagination Indicators */}
          <div className="flex space-x-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === index ? "w-6 bg-gold-400" : "w-1.5 bg-neutral-800"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextReview}
            className="w-11 h-11 rounded-full border border-neutral-900 bg-neutral-950 flex items-center justify-center text-gray-400 hover:text-gold-300 hover:border-gold-300/30 transition-all duration-300 hover:translate-x-0.5 cursor-pointer"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
