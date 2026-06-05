/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import BeforeAfter from "./components/BeforeAfter";
import WhyChooseUs from "./components/WhyChooseUs";
import Team from "./components/Team";
import Reviews from "./components/Reviews";
import AppointmentBooking from "./components/AppointmentBooking";
import GoogleMaps from "./components/GoogleMaps";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import OwnerPortal from "./components/OwnerPortal";
import { Booking } from "./types";

export default function App() {
  const [selectedService, setSelectedService] = useState<string>("");
  const [isOwnerPortalOpen, setIsOwnerPortalOpen] = useState<boolean>(false);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [configuredWhatsAppNumber, setConfiguredWhatsAppNumber] = useState("+919999999999");

  // Sync bookings and settings from local storage on mount
  useEffect(() => {
    const savedBookings = localStorage.getItem("aurelia_bookings");
    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }

    const savedPhone = localStorage.getItem("aurelia_whatsapp_number");
    if (savedPhone) {
      setConfiguredWhatsAppNumber(savedPhone);
    }
  }, []);

  // Update bookmarks and metrics reactively
  const handleBookingAdded = (newBooking: Booking) => {
    setBookings((prev) => [...prev, newBooking]);
  };

  // Change individual client status inside owner desk
  const handleBookingStatusChange = (id: string, status: "pending" | "confirmed" | "completed") => {
    const updated = bookings.map((b) => (b.id === id ? { ...b, status } : b));
    setBookings(updated);
    localStorage.setItem("aurelia_bookings", JSON.stringify(updated));
  };

  // Wipe diagnostic test bookings
  const handleClearAllBookings = () => {
    if (window.confirm("Perform hard reset? This will purge all consultation datasets from active logs.")) {
      setBookings([]);
      localStorage.removeItem("aurelia_bookings");
    }
  };

  // Smooth scroll links
  const scrollToSection = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Pre-fill selection from service cards
  const selectServiceAndScroll = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToSection("booking");
  };

  // Pre-filled instant WhatsApp redirect for specific card triggers
  const executeWhatsAppDirectBooking = (serviceTitle: string) => {
    const messageTemplate = `Hi, I would like to book an appointment.

Name: Guest Client
Phone: [Your Phone]
Service: ${serviceTitle}
Date: [Desired Date]`;
    
    const cleanNum = configuredWhatsAppNumber.replace(/[^0-9]/g, "");
    const formattedUrl = `https://api.whatsapp.com/send?phone=${cleanNum}&text=${encodeURIComponent(messageTemplate)}`;
    window.open(formattedUrl, "_blank", "noopener,noreferrer");
  };

  // Pre-filled premium general greeting WhatsApp trigger
  const executeInstantWhatsAppGreeting = () => {
    const generalMessage = "Hi, I would like to book a luxury beauty appointment at Aurelia Salon.";
    const cleanNum = configuredWhatsAppNumber.replace(/[^0-9]/g, "");
    const formattedUrl = `https://api.whatsapp.com/send?phone=${cleanNum}&text=${encodeURIComponent(generalMessage)}`;
    window.open(formattedUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-gray-200 selection:bg-gold-400 selection:text-black antialiased relative">
      
      {/* Premium background noise texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(18,18,18,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      {/* Main Luxury Header */}
      <Header
        onOpenDashboard={() => setIsOwnerPortalOpen(true)}
        onBookClick={() => scrollToSection("booking")}
      />

      {/* Hero core presentation wrapper */}
      <Hero
        onBookOnWhatsApp={executeInstantWhatsAppGreeting}
        onViewServices={() => scrollToSection("services")}
      />

      {/* Premium Trust bar */}
      <TrustBar />

      {/* Services Showcase catalog list */}
      <Services
        onBookNow={selectServiceAndScroll}
        onBookOnWhatsApp={executeWhatsAppDirectBooking}
      />

      {/* Immersive Before-After slider compare engine */}
      <BeforeAfter />

      {/* Core brand values list */}
      <WhyChooseUs />

      {/* Specialized master stylists list */}
      <Team
        onStylistConsultClick={(stylistName) =>
          selectServiceAndScroll(`Private VIP Masterclass Session with ${stylistName}`)
        }
      />

      {/* Immersive client reviews slider */}
      <Reviews />

      {/* High-conversion secure appointment form scheduler */}
      <AppointmentBooking
        initialService={selectedService}
        onBookingAdded={handleBookingAdded}
      />

      {/* GPS Location maps panel */}
      <GoogleMaps />

      {/* Luxury Accordion List Faqs */}
      <Faqs />

      {/* Immersive Footer block with sticky actions indicators */}
      <Footer
        onStickyBookClick={() => scrollToSection("booking")}
        onInstantWhatsAppTrigger={executeInstantWhatsAppGreeting}
      />

      {/* Core Secretariat Management Console (Owner Backstage drawer portal) */}
      {isOwnerPortalOpen && (
        <OwnerPortal
          onClose={() => setIsOwnerPortalOpen(false)}
          bookings={bookings}
          onClearAll={handleClearAllBookings}
          onBookingStatusChange={handleBookingStatusChange}
        />
      )}

    </div>
  );
}
