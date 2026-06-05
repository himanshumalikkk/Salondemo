/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { BEFORE_AFTER_PAIRS } from "../data";
import { Sparkles, Eye, Scissors, MoveLeft, MoveRight, ChevronRight, X, Play } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function BeforeAfter() {
  const [selectedPairIndex, setSelectedPairIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isResizing, setIsResizing] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const activePair = BEFORE_AFTER_PAIRS[selectedPairIndex];

  // Handle slide drag interaction
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isResizing) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizing) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isResizing]);

  const triggerStart = () => {
    setIsResizing(true);
  };

  return (
    <section id="before-after" className="relative bg-[#0d0d0d] py-24 sm:py-32 border-t border-gold-300/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_bottom,rgba(175,124,36,0.03),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="font-sans text-[11px] tracking-[0.3em] text-gold-400 uppercase font-semibold">
            Bespoke transformations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mt-3 mb-6">
            Visual <span className="italic text-gold-200">Transformations</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold-300 mx-auto mb-6" />
          <p className="font-sans text-xs sm:text-sm text-gray-400 tracking-wider leading-relaxed">
            Drag the golden slider to reveal the breath-taking depth of our custom hair balayages, elite facial peptide therapies, and immaculate nail extensions.
          </p>
        </div>

        {/* Dynamic Split-Screen compare widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* List of select cases (Left 4 columns) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <span className="font-sans text-[10px] tracking-widest text-[#6c6c6c] uppercase font-semibold mb-2 block">
              SELECT RITUAL TRANSFORMATION CASE:
            </span>
            {BEFORE_AFTER_PAIRS.map((pair, index) => (
              <button
                key={pair.id}
                onClick={() => {
                  setSelectedPairIndex(index);
                  setSliderPosition(50); // Reset position
                }}
                className={`w-full text-left p-5 rounded-lg border transition-all duration-300 flex items-start space-x-3 cursor-pointer ${
                  selectedPairIndex === index
                    ? "bg-gradient-to-r from-neutral-900 to-[#151515] border-gold-400/40 shadow-lg shadow-black"
                    : "bg-transparent border-neutral-900 text-gray-400 hover:bg-neutral-900/35 hover:text-white"
                }`}
              >
                <div className="mt-1 w-5 h-5 rounded-full border border-gold-400/30 flex items-center justify-center bg-black/40 text-[9px] font-mono text-gold-300 font-bold">
                  0{index + 1}
                </div>
                <div>
                  <h3 className={`font-serif text-sm tracking-wide font-medium ${
                    selectedPairIndex === index ? "text-gold-300" : "text-gray-300"
                  }`}>
                    {pair.title}
                  </h3>
                  <p className="font-sans text-[11px] text-gray-500 font-light mt-1.5 leading-relaxed truncate-3-lines">
                    {pair.description}
                  </p>
                </div>
              </button>
            ))}

            <button
              onClick={() => setIsLightboxOpen(true)}
              className="mt-4 h-12 border border-dashed border-gold-400/35 hover:border-gold-400/80 rounded-lg text-xs font-sans tracking-widest text-gold-400 hover:text-gold-200 transition-all duration-300 uppercase flex items-center justify-center space-x-2"
            >
              <Eye className="w-4 h-4" />
              <span>Launch Comparative Lightbox</span>
            </button>
          </div>

          {/* Interactive slider component (Right 8 columns) */}
          <div className="lg:col-span-8 flex flex-col items-center">
            <div
              ref={containerRef}
              className="relative w-full aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-900 shadow-2xl select-none group cursor-ew-resize"
              onMouseDown={triggerStart}
              onTouchStart={triggerStart}
            >
              {/* After Product (Shown fully underneath / right side) */}
              <div className="absolute inset-0 z-0">
                <img
                  src={activePair.afterUrl}
                  alt="Transformation After State"
                  className="w-full h-full object-cover pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 right-6 z-10 bg-black/75 border border-gold-400/20 px-3 py-1 rounded text-[10px] uppercase tracking-widest text-gold-300 font-medium font-sans">
                  AFTER RITUAL
                </div>
              </div>

              {/* Before Product (Layered on top / left side, clipped by percentage) */}
              <div
                className="absolute inset-0 z-10 pointer-events-none overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={activePair.beforeUrl}
                  alt="Transformation Before State"
                  className="w-full h-full object-cover pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6 bg-black/75 border border-neutral-800 px-3 py-1 rounded text-[10px] uppercase tracking-widest text-gray-400 font-medium font-sans">
                  BEFORE RITUAL
                </div>
              </div>

              {/* The Slider line division */}
              <div
                className="absolute top-0 bottom-0 z-20 w-[2px] bg-gradient-to-b from-gold-300 via-gold-400 to-gold-300 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Visual Handle Button centered */}
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full border border-gold-400 bg-neutral-950 flex items-center justify-center shadow-2xl shadow-gold-400/40 text-gold-300">
                  <div className="flex space-x-0.5 animate-pulse">
                    <MoveLeft className="w-3.5 h-3.5" />
                    <MoveRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Micro instructions spacer info */}
            <div className="flex items-center space-x-2 mt-4 text-[10px] font-sans tracking-widest text-gray-500 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400/50" />
              <span>Tap & Drag golden bar to explore the flawless gradient</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lights out immersive comparative Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/98 flex flex-col justify-between p-4 md:p-8"
          >
            {/* Header toolbar */}
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto border-b border-neutral-900 pb-4">
              <div className="flex flex-col">
                <span className="font-serif text-lg text-gold-300 italic">{activePair.title}</span>
                <span className="text-[10px] tracking-widest uppercase font-sans text-gray-500">Immersive side-by-side assessment</span>
              </div>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-2.5 rounded-full border border-neutral-800 text-yellow-50 hover:text-gold-300 hover:border-gold-300/30 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Dual Cinematic Side-by-Side Images */}
            <div className="flex-grow flex items-center justify-center max-w-7xl mx-auto w-full my-6 md:my-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
                {/* Before details */}
                <div className="relative group rounded-xl overflow-hidden border border-neutral-900 backdrop-blur-md bg-neutral-950 flex flex-col justify-between">
                  <div className="p-4 bg-neutral-950 flex justify-between items-center border-b border-neutral-900">
                    <span className="font-sans text-[10px] tracking-widest text-gray-400 uppercase font-medium">PRE-SERVICE CASE</span>
                    <span className="font-mono text-[9px] text-gray-500">01_DAMAGE_LOG.JPG</span>
                  </div>
                  <div className="aspect-square sm:aspect-video md:aspect-[4/3] flex items-center justify-center overflow-hidden">
                    <img
                      src={activePair.beforeUrl}
                      alt="Before Fullscreen"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-4 bg-neutral-950 font-sans text-xs text-gray-400 leading-relaxed font-light">
                    Client presented with dehydrated cuticle layers and dull color density from atmospheric oxidation.
                  </div>
                </div>

                {/* After details */}
                <div className="relative group rounded-xl overflow-hidden border border-gold-400/25 bg-neutral-950 flex flex-col justify-between shadow-2xl shadow-gold-500/5">
                  <div className="p-4 bg-neutral-950 flex justify-between items-center border-b border-gold-400/20">
                    <span className="font-sans text-[10px] tracking-widest text-gold-300 uppercase font-bold">POST-RITUAL STYLING</span>
                    <span className="font-mono text-[9px] text-gold-400">02_AURELIA_GLOW.PNG</span>
                  </div>
                  <div className="aspect-square sm:aspect-video md:aspect-[4/3] flex items-center justify-center overflow-hidden">
                    <img
                      src={activePair.afterUrl}
                      alt="After Fullscreen"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-4 bg-neutral-950 font-sans text-xs text-gray-300 leading-relaxed font-light">
                    Applied nourishing oils, cuticle glaze seal, and multi-dimensional highlights to produce optimal moisture.
                  </div>
                </div>
              </div>
            </div>

            {/* Footer controls spacer */}
            <div className="flex items-center justify-center py-4 border-t border-neutral-900 w-full text-center">
              <span className="text-[10px] tracking-[0.2em] font-sans uppercase text-gray-500">Aurelia Custom Medical-Grade Cosmetic Care Portfolio</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
