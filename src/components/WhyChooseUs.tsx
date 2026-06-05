/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Award, ShieldCheck, Sparkles, UserCheck, HeartHandshake, Smile } from "lucide-react";

export default function WhyChooseUs() {
  const values = [
    {
      id: "val-stylists",
      icon: <Award className="w-6 h-6 text-gold-400" />,
      title: "Experienced Stylists",
      description: "Our artists undergo rigorous annual masterclasses in Paris and Milan, keeping our hand-craft on the cutting edge of global haute couture."
    },
    {
      id: "val-products",
      icon: <ShieldCheck className="w-6 h-6 text-gold-400" />,
      title: "Premium Products Only",
      description: "We are partnered directly with L'Oréal Professionnel Paris, Olaplex, and Shiseido Labs to formulate bio-active hair, scalp and skin solutions."
    },
    {
      id: "val-hygiene",
      icon: <Sparkles className="w-6 h-6 text-gold-400" />,
      title: "Medical-Grade Hygiene",
      description: "Enjoy zero anxiety with autoclave-sterilized combs, surgical-grade facial tools, disposable linen, and purified air extraction systems."
    },
    {
      id: "val-consultation",
      icon: <UserCheck className="w-6 h-6 text-gold-400" />,
      title: "Personalized Consultations",
      description: "We analyze skin reflectivity, facial bone-structure angles, and hair shaft porosity before every brushstroke to guarantee a custom finish."
    },
    {
      id: "val-luxury",
      icon: <HeartHandshake className="w-6 h-6 text-gold-400" />,
      title: "Affordable Luxury Pricing",
      description: "Experience 5-star royal hospitality, custom espresso bars, and premium outcomes at balanced, transparent rates with zero hidden fees."
    },
    {
      id: "val-care",
      icon: <Smile className="w-6 h-6 text-gold-400" />,
      title: "Post-Service VIP Care",
      description: "At Aurelia, our care doesn't stop. Enjoy complimentary 7-day touchups on nail designs and personalized hair care tracking checklists."
    }
  ];

  return (
    <section id="why-us" className="relative bg-black py-24 sm:py-32">
      {/* Background gradients */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold-400/2 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="font-sans text-[11px] tracking-[0.3em] text-gold-400 uppercase font-semibold">
            Bespoke values
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mt-3 mb-6">
            Why Discerning Clients <br />
            <span className="italic text-gold-200">Choose Aurelia</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold-300 mx-auto mb-6" />
          <p className="font-sans text-xs sm:text-sm text-gray-400 tracking-wider leading-relaxed">
            We reject mass-produced catalog styles. Here, custom hair structure, skin biology, and individual comfort are handled as fine arts.
          </p>
        </div>

        {/* Feature Grid Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val) => (
            <div
              key={val.id}
              className="group p-8 rounded-xl bg-gradient-to-b from-[#0a0a0a] to-neutral-950/70 border border-neutral-900 transition-all duration-500 hover:border-gold-400/25 hover:-translate-y-1 hover:shadow-xl hover:shadow-black"
            >
              {/* Premium Icon Ring */}
              <div className="w-12 h-12 rounded-full border border-gold-300/15 bg-neutral-900 flex items-center justify-center mb-6 text-gold-300 group-hover:scale-110 group-hover:bg-gold-400/5 group-hover:text-gold-200 transition-all duration-500">
                {val.icon}
              </div>

              <h3 className="font-serif text-lg text-white mb-3 tracking-wide font-medium group-hover:text-gold-300 transition-colors">
                {val.title}
              </h3>
              
              <p className="font-sans text-xs text-gray-400 leading-relaxed font-light tracking-wide">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
