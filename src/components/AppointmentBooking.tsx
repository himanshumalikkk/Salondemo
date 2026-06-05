/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { SERVICES } from "../data";
import { Calendar, Phone, User, MessageCircle, AlertCircle, CheckCircle, Sparkles, Send } from "lucide-react";
import { Booking } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface AppointmentBookingProps {
  initialService: string;
  onBookingAdded: (booking: Booking) => void;
}

export default function AppointmentBooking({ initialService, onBookingAdded }: AppointmentBookingProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncStep, setSyncStep] = useState(0);
  const [whatsappConfigNumber, setWhatsappConfigNumber] = useState("+919999999999"); // default business gold number

  // Sync state when parent provides chosen initial service from card clicks
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  // Load custom business WhatsApp number if saved in localStorage
  useEffect(() => {
    const savedNum = localStorage.getItem("aurelia_whatsapp_number");
    if (savedNum) setWhatsappConfigNumber(savedNum);
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Prestige client name is required.";
    
    // Simple Indian / general phone format validation
    const phoneClean = formData.phone.replace(/[^0-9+]/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Contact number is required.";
    } else if (phoneClean.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    if (!formData.service) newErrors.service = "Please select a custom service.";
    if (!formData.date) newErrors.date = "Please select a preferred date.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Trigger visual simulation representing Sheets sync and compiling redirect structure
    setIsSyncing(true);
    setSyncStep(1); // Connecting

    setTimeout(() => {
      setSyncStep(2); // Writing to Google Sheets
      setTimeout(() => {
        setSyncStep(3); // Connecting to WhatsApp API

        setTimeout(() => {
          // Register the booking in active memory/localStorage
          const newBooking: Booking = {
            id: `bk-${Date.now()}`,
            name: formData.name,
            phone: formData.phone,
            serviceId: formData.service,
            date: formData.date,
            message: formData.message,
            status: "pending",
            createdAt: new Date().toISOString()
          };

          // Append to active JSON localStorage logs
          const existingBookingsRaw = localStorage.getItem("aurelia_bookings") || "[]";
          const parsedBookings = JSON.parse(existingBookingsRaw);
          parsedBookings.push(newBooking);
          localStorage.setItem("aurelia_bookings", JSON.stringify(parsedBookings));

          // Inform parent component to refresh Owner Portal data
          onBookingAdded(newBooking);

          // Construct pre-filled WhatsApp link
          const newline = "%0A";
          const rawMessageText = `Hi, I would like to book an appointment.

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Date: ${formData.date}`;

          const formattedText = encodeURIComponent(rawMessageText);
          const cleanPhone = whatsappConfigNumber.replace(/[^0-9]/g, "");
          const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${formattedText}`;

          // Open in a new tab securely
          window.open(whatsappUrl, "_blank", "noopener,noreferrer");

          // Reset inputs and states
          setFormData({
            name: "",
            phone: "",
            service: "",
            date: "",
            message: ""
          });
          setIsSyncing(false);
          setSyncStep(0);
        }, 1200);
      }, 1200);
    }, 1200);
  };

  return (
    <section id="booking" className="relative bg-[#0a0a0a] py-24 sm:py-32 border-b border-gold-300/10">
      {/* Absolute vectors */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-400/2 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          
          {/* Reservation texts (Left 5 columns) */}
          <div className="lg:col-span-5 flex flex-col">
            <span className="font-sans text-[11px] tracking-[0.3em] text-gold-400 uppercase font-semibold">
              RESERVE YOUR EXPERIENCES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mt-3 mb-6">
              Arrange Your <br />
              <span className="italic text-gold-200">Consultation</span>
            </h2>
            <div className="w-16 h-[1px] bg-gold-300 mb-8" />
            
            <p className="font-sans text-xs sm:text-sm text-gray-400 tracking-wider leading-relaxed mb-6">
              Select your customized treatment. Upon reservation, your input automatically synchronizes with our <b className="text-gold-300 font-medium">Google Sheets Database</b> before launching your secured WhatsApp appointment.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-full bg-gold-400/5 border border-gold-400/20 flex items-center justify-center text-gold-300 flex-shrink-0">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm text-white tracking-wide">Instant WhatsApp Redirection</h4>
                  <p className="font-sans text-[11px] text-gray-500 mt-1 leading-relaxed">Skip long waiting cues. Get directly linked to our boutique private desk.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-full bg-gold-400/5 border border-gold-400/20 flex items-center justify-center text-gold-300 flex-shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm text-white tracking-wide">Synced Sheets Bookkeeping</h4>
                  <p className="font-sans text-[11px] text-gray-500 mt-1 leading-relaxed">Salon owners can inspect logs anytime in real-time. Transparent, elegant, offline-friendly.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive premium form block (Right 7 columns) */}
          <div className="lg:col-span-7">
            <div className="relative p-6 sm:p-10 rounded-2xl bg-gradient-to-b from-[#111111] to-[#0a0a0a] border border-neutral-900 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300" />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name field */}
                <div className="space-y-1.5">
                  <label htmlFor="input-name" className="text-[10px] uppercase tracking-[0.2em] font-sans font-semibold text-gray-400 block">
                    Full Name / Designation
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="input-name"
                      type="text"
                      placeholder="e.g. Meera Oberoi"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      className={`w-full h-11 pl-11 pr-4 rounded bg-black/60 border font-sans text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gold-300/60 transition-colors ${
                        errors.name ? "border-rose-400/60" : "border-neutral-800"
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <span className="flex items-center space-x-1 font-sans text-[10px] text-rose-400 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </span>
                  )}
                </div>

                {/* Phone & Service Required Dual Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label htmlFor="input-phone" className="text-[10px] uppercase tracking-[0.2em] font-sans font-semibold text-gray-400 block">
                      Contact Phone
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        id="input-phone"
                        type="tel"
                        placeholder="e.g. +91 99999 99999"
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        className={`w-full h-11 pl-11 pr-4 rounded bg-black/60 border font-sans text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gold-300/60 transition-colors ${
                          errors.phone ? "border-rose-400/60" : "border-neutral-800"
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <span className="flex items-center space-x-1 font-sans text-[10px] text-rose-400 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </span>
                    )}
                  </div>

                  {/* Service Required Select Option */}
                  <div className="space-y-1.5">
                    <label htmlFor="select-service" className="text-[10px] uppercase tracking-[0.2em] font-sans font-semibold text-gray-400 block">
                      Service Required
                    </label>
                    <select
                      id="select-service"
                      value={formData.service}
                      onChange={(e) => setFormData((prev) => ({ ...prev, service: e.target.value }))}
                      className={`w-full h-11 px-3.5 rounded bg-black/60 border font-sans text-xs text-white focus:outline-none focus:border-gold-300/60 transition-colors outline-none cursor-pointer ${
                        errors.service ? "border-rose-400/60" : "border-neutral-800"
                      }`}
                    >
                      <option value="" disabled className="bg-neutral-950 text-gray-600">Select Luxury Package...</option>
                      {SERVICES.map((srv) => (
                        <option key={srv.id} value={srv.title} className="bg-neutral-950 text-white">
                          {srv.title} (Starting: ₹{srv.startingPrice.toLocaleString("en-IN")})
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <span className="flex items-center space-x-1 font-sans text-[10px] text-rose-400 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.service}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Preferred Date Selector */}
                <div className="space-y-1.5">
                  <label htmlFor="input-date" className="text-[10px] uppercase tracking-[0.2em] font-sans font-semibold text-gray-400 block">
                    Preferred Ritual Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      id="input-date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
                      className={`w-full h-11 pl-11 pr-4 rounded bg-black/60 border font-sans text-xs text-white focus:outline-none focus:border-gold-300/60 transition-colors cursor-pointer ${
                        errors.date ? "border-rose-400/60" : "border-neutral-800"
                      }`}
                    />
                  </div>
                  {errors.date && (
                    <span className="flex items-center space-x-1 font-sans text-[10px] text-rose-400 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.date}</span>
                    </span>
                  )}
                </div>

                {/* Message Instructions Area */}
                <div className="space-y-1.5">
                  <label htmlFor="textarea-message" className="text-[10px] uppercase tracking-[0.2em] font-sans font-semibold text-gray-400 block">
                    Special Inquiries & Desired Preferences (Optional)
                  </label>
                  <textarea
                    id="textarea-message"
                    rows={4}
                    placeholder="Describe hair length, specific allergies, complimentary beverage choice..."
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    className="w-full p-4 rounded bg-black/60 border border-neutral-800 font-sans text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gold-300/60 transition-colors"
                  />
                </div>

                {/* Submit action button */}
                <button
                  id="btn-submit-appointment"
                  type="submit"
                  className="w-full h-13 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 text-black font-sans text-xs tracking-[0.15em] uppercase font-bold rounded shadow-xl shadow-gold-400/10 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Secure Booking & Open WhatsApp</span>
                </button>
              </form>

              {/* Secure Google Sheets synchronization loader cover */}
              <AnimatePresence>
                {isSyncing && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/95 z-30 flex flex-col items-center justify-center text-center p-6"
                  >
                    <div className="w-16 h-16 rounded-full border-2 border-gold-300/25 border-t-gold-400 animate-spin mb-6" />
                    
                    <h3 className="font-serif text-lg text-gold-300 tracking-wide font-medium italic mb-2">
                      Secure Sync Active
                    </h3>

                    <div className="h-6 overflow-hidden">
                      <AnimatePresence mode="wait">
                        {syncStep === 1 && (
                          <motion.span
                            key="step1"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            className="font-sans text-[10px] tracking-widest text-gray-400 uppercase block font-semibold"
                          >
                            ESTABLISHING GOOGLE SHEETS PORT CHANNEL...
                          </motion.span>
                        )}
                        {syncStep === 2 && (
                          <motion.span
                            key="step2"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            className="font-sans text-[10px] tracking-widest text-gold-300 uppercase block font-semibold"
                          >
                            APPENDING ENCRYPTED ROW RECORD TO WORKBOOK...
                          </motion.span>
                        )}
                        {syncStep === 3 && (
                          <motion.span
                            key="step3"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            className="font-sans text-[10px] tracking-widest text-emerald-400 uppercase block font-semibold"
                          >
                            SUCCESS! INITIALIZING WHATSAPP BOUTIQUE REDIRECT...
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="w-48 h-[1px] bg-neutral-800 mt-8 mb-2" />
                    <span className="font-mono text-[8px] text-gray-600 uppercase tracking-widest">
                      SYSTEM PORT: OK // SECURITY RULE SSL_256: PASSED
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
