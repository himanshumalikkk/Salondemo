/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { FAQS } from "../data";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Faqs() {
  const [expandedId, setExpandedId] = useState<string | null>("faq-1"); // Open first item by default

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="relative bg-[#0d0d0d] py-24 sm:py-32 border-t border-gold-300/10">
      <div className="absolute inset-x-0 bottom-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
      <div className="absolute left-1/4 bottom-10 w-96 h-96 rounded-full bg-gold-400/1 blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="font-sans text-[11px] tracking-[0.3em] text-gold-400 uppercase font-semibold">
            Commonly Asked Inquiries
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mt-3 mb-6">
            Bespoke <span className="italic text-gold-200">Clarifications</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold-300 mx-auto" />
          <p className="font-sans text-xs sm:text-sm text-gray-400 tracking-wider leading-relaxed">
            Need details on scheduling, VIP residency service, or allergens? Find our vetted, comprehensive responses below.
          </p>
        </div>

        {/* Faqs Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-lg border border-neutral-900 bg-neutral-950 overflow-hidden transition-all duration-300 hover:border-gold-300/25"
              >
                {/* Trigger head */}
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="w-full p-5 md:p-6 flex items-center justify-between text-left text-white cursor-pointer select-none focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start space-x-3.5 pr-4">
                    <span className="font-serif text-xs text-gold-400 uppercase font-mono mt-0.5 tracking-wider">
                      {faq.category}
                    </span>
                    <h3 className="font-serif text-sm sm:text-base tracking-wide font-medium">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="text-gold-300 flex-shrink-0">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Expanded answer slot */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-6 md:px-6 md:pb-7 pt-0 border-t border-neutral-900 font-sans text-xs sm:text-sm text-gray-400 leading-relaxed font-light tracking-wide pl-16">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
