/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Users, Star, Award, ShieldCheck } from "lucide-react";

export default function TrustBar() {
  const trustItems = [
    {
      id: "trust-clients",
      icon: <Users className="w-6 h-6 text-gold-400" />,
      metric: "1000+",
      label: "Happy Clients Served",
      description: "Elite celebrities & beautiful return customers"
    },
    {
      id: "trust-stars",
      icon: (
        <div className="flex items-center space-x-0.5">
          <Star className="w-5 h-5 text-gold-400 fill-gold-400" />
          <Star className="w-5 h-5 text-gold-400 fill-gold-400" />
          <Star className="w-5 h-5 text-gold-400 fill-gold-400" />
          <Star className="w-5 h-5 text-gold-400 fill-gold-400" />
          <Star className="w-5 h-5 text-gold-400 fill-gold-400" />
        </div>
      ),
      metric: "4.9 Stars",
      label: "Google Verified Reviews",
      description: "The highest rated bespoke beauty hub"
    },
    {
      id: "trust-certified",
      icon: <Award className="w-6 h-6 text-gold-400" />,
      metric: "Certified Pros",
      label: "International Specialists",
      description: "Trained in Milan, Paris, London, & Mumbai"
    },
    {
      id: "trust-products",
      icon: <ShieldCheck className="w-6 h-6 text-gold-400" />,
      metric: "100% Premium",
      label: "Elite Global Brands",
      description: "Sulfate-free, clinical organic care formulations"
    }
  ];

  return (
    <section className="relative z-20 bg-gradient-to-r from-neutral-950 via-[#121212] to-neutral-950 py-12 border-y border-gold-300/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-y md:divide-y-0 lg:divide-x divide-gold-400/10">
          {trustItems.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col items-center text-center px-4 ${
                index > 0 ? "pt-8 md:pt-0" : ""
              }`}
            >
              {/* Luxury Icon Frame */}
              <div className="w-14 h-14 rounded-full border border-gold-300/20 bg-neutral-900 flex items-center justify-center mb-4 shadow-inner shadow-black">
                {item.icon}
              </div>
              <span className="font-serif text-2xl lg:text-3xl text-white font-light tracking-wide mb-1">
                {item.metric}
              </span>
              <span className="font-sans text-xs tracking-widest text-gold-300 uppercase font-medium mb-1">
                {item.label}
              </span>
              <span className="font-sans text-[11px] text-gray-400 tracking-wider font-light">
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
