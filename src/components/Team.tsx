/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { STYLISTS } from "../data";
import { Star, MessageSquare } from "lucide-react";

interface TeamProps {
  onStylistConsultClick: (stylistName: string) => void;
}

export default function Team({ onStylistConsultClick }: TeamProps) {
  return (
    <section id="team" className="relative bg-[#0d0d0d] py-24 sm:py-32 border-y border-gold-300/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_bottom,rgba(175,124,36,0.02),transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="font-sans text-[11px] tracking-[0.3em] text-gold-400 uppercase font-semibold">
            The curators of style
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mt-3 mb-6">
            Meet Our Master <span className="italic text-gold-200">Stylists</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold-300 mx-auto mb-6" />
          <p className="font-sans text-xs sm:text-sm text-gray-400 tracking-wider leading-relaxed">
            Our elite team combines decades of international credentials to bring Paris, Milan and Bollywood red-carpet quality directly to you.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STYLISTS.map((stylist) => (
            <div
              key={stylist.id}
              className="group relative bg-[#080808] border border-neutral-900 rounded-xl overflow-hidden hover:border-gold-400/30 transition-all duration-500"
            >
              {/* Profile Image with subtle luxury aspect ratios (e.g. 3:4 portrait) */}
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-950">
                <img
                  src={stylist.imageUrl}
                  alt={stylist.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Floating Experience indicator */}
                <div className="absolute top-4 right-4 bg-black/85 backdrop-blur-md px-3 py-1 rounded border border-gold-300/20 text-[9px] tracking-widest text-gold-300 font-sans uppercase font-bold">
                  {stylist.experience} EXP
                </div>

                {/* Dark Overlay which fades/slides upward on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
              </div>

              {/* Body details */}
              <div className="p-6">
                <span className="text-[9px] tracking-[0.2em] text-gold-400 uppercase font-sans font-semibold">
                  {stylist.role}
                </span>
                
                <h3 className="font-serif text-base text-white tracking-wide font-medium mt-1 mb-3">
                  {stylist.name}
                </h3>
                
                <p className="font-sans text-[11px] text-gray-400 font-light leading-relaxed mb-4 min-h-[50px]">
                  {stylist.bio}
                </p>

                {/* Tags details */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {stylist.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] font-sans tracking-wide text-gray-400 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                {/* Private session shortcut CTA */}
                <button
                  onClick={() => onStylistConsultClick(stylist.name)}
                  className="w-full h-10 border border-gold-300/20 text-gold-300 group-hover:bg-gold-400 group-hover:text-black group-hover:border-gold-400 font-sans text-[10px] tracking-widest font-semibold uppercase rounded transition-all duration-300"
                >
                  Book Private Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
