/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { MapPin, Clock, Phone, Map, Navigation } from "lucide-react";

export default function GoogleMaps() {
  // Beautiful embedded standard map centered near lower Parel, Mumbai / luxury landmark
  const mapIframeUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8679166946055!2d72.8228308!3d18.992452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce86be0b9bf3%3A0xc3c51bd35e128189!2sHigh%20Street%20Phoenix!5e0!3m2!1sen!2sin!4v1717560000000!5m2!1sen!2sin";

  return (
    <section id="location" className="relative bg-black py-24 sm:py-32">
      <div className="absolute top-0 right-10 w-72 h-72 rounded-full bg-gold-400/2 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          
          {/* Physical coordinates and hours (Left 5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-sans text-[11px] tracking-[0.3em] text-gold-400 uppercase font-semibold">
              Visit our sanctuary
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mt-3 mb-6">
              The Physical <span className="italic text-gold-200">Refuge</span>
            </h2>
            <div className="w-16 h-[1px] bg-gold-300 mb-8" />

            <div className="space-y-6">
              {/* Address card */}
              <div className="flex items-start space-x-3.5 group">
                <div className="w-9 h-9 rounded-full border border-gold-400/20 bg-neutral-950 flex items-center justify-center text-gold-300 group-hover:bg-gold-400/5 transition-colors">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm text-white tracking-wide">Elite Boutique Address</h4>
                  <address className="font-sans text-xs text-gray-400 not-italic mt-1 pb-1 leading-relaxed">
                    Ground Suite, High Street Phoenix, Block 4,<br />
                    Senapati Bapat Marg, Lower Parel,<br />
                    Mumbai, Maharashtra — 400013
                  </address>
                </div>
              </div>

              {/* Hours card */}
              <div className="flex items-start space-x-3.5 group">
                <div className="w-9 h-9 rounded-full border border-gold-400/20 bg-neutral-950 flex items-center justify-center text-gold-300 group-hover:bg-gold-400/5 transition-colors">
                  <Clock className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm text-white tracking-wide">Session Hours</h4>
                  <p className="font-sans text-xs text-gray-400 mt-1 leading-relaxed">
                    Monday — Sunday: 9:00 AM — 9:00 PM <br />
                    <span className="text-[10px] text-gold-400 tracking-wider">Including National Holidays • By Appointment Only</span>
                  </p>
                </div>
              </div>

              {/* Instant Call hotline line */}
              <div className="flex items-start space-x-3.5 group">
                <div className="w-9 h-9 rounded-full border border-gold-400/20 bg-neutral-950 flex items-center justify-center text-gold-300 group-hover:bg-gold-400/5 transition-colors">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm text-white tracking-wide">Concierge Direct Hotline</h4>
                  <a
                    href="tel:+912249111111"
                    id="link-call-concierge"
                    className="font-mono text-xs text-gold-300 hover:text-gold-200 mt-1 block tracking-wider font-semibold"
                  >
                    +91 22 4911 1111
                  </a>
                </div>
              </div>
            </div>

            {/* Premium quick button directions */}
            <div className="mt-10">
              <a
                href="https://maps.app.goo.gl/9XzH8m8ZHeK5A1VTA"
                target="_blank"
                rel="noopener noreferrer"
                id="btn-google-maps-directions"
                className="inline-flex items-center space-x-2 border border-gold-300/30 text-gold-300 hover:text-white hover:border-gold-300 font-sans text-[11px] tracking-widest uppercase font-semibold px-6 py-3.5 rounded bg-neutral-950 hover:bg-gold-400/5 transition-colors cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Calculate GPS Route</span>
              </a>
            </div>
          </div>

          {/* Map display box (Right 7 columns) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-video sm:aspect-[4/3] lg:aspect-video rounded-2xl overflow-hidden border border-neutral-900 bg-neutral-950 shadow-2xl group p-1">
              <div className="absolute inset-0 bg-gold-400/[0.02] border border-gold-300/10 rounded-xl pointer-events-none z-10" />
              <iframe
                title="Aurelia Beauty Map View"
                src={mapIframeUrl}
                className="w-full h-full rounded-xl opacity-80 filter invert-90 hue-rotate-180 brightness-95 contrast-105"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
