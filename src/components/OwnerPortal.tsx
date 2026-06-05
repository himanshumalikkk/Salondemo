/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Booking } from "../types";
import { SERVICES } from "../data";
import { X, Calendar, User, Phone, Check, Settings, Trash2, Download, Table, BarChart2, DollarSign, ListFilter, Users, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface OwnerPortalProps {
  onClose: () => void;
  bookings: Booking[];
  onClearAll: () => void;
  onBookingStatusChange: (id: string, status: "pending" | "confirmed" | "completed") => void;
}

export default function OwnerPortal({ onClose, bookings, onClearAll, onBookingStatusChange }: OwnerPortalProps) {
  const [activeTab, setActiveTab] = useState<"bookings" | "settings" | "analytics">("bookings");
  const [whatsappNumberInput, setWhatsappNumberInput] = useState("+919999999999");
  const [isSavedNotify, setIsSavedNotify] = useState(false);

  // Load configured WhatsApp number on mount
  useEffect(() => {
    const num = localStorage.getItem("aurelia_whatsapp_number") || "+919999999999";
    setWhatsappNumberInput(num);
  }, []);

  const saveSettings = () => {
    localStorage.setItem("aurelia_whatsapp_number", whatsappNumberInput);
    setIsSavedNotify(true);
    setTimeout(() => {
      setIsSavedNotify(false);
      window.location.reload(); // Quick refresh to update the global phone trigger references
    }, 1500);
  };

  // Helper metrics
  const totalBookings = bookings.length;
  const pendingBookings = bookings.filter((b) => b.status === "pending").length;
  const completedBookings = bookings.filter((b) => b.status === "completed").length;

  // Potential revenue based on custom prices
  const potentialRevenue = bookings.reduce((accum, curr) => {
    const matchService = SERVICES.find((s) => s.title === curr.serviceId);
    return accum + (matchService ? matchService.startingPrice : 1500);
  }, 0);

  // Export logs to JSON
  const exportToJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(bookings, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `aurelia_bookings_export_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Export to CSV format for Google Sheets Import
  const exportToCSV = () => {
    const headerRow = "ID,Name,Phone,Service,PreferredDate,Status,CreatedOn\n";
    const dataRows = bookings.map((b) => {
      const cleanName = b.name.replace(/,/g, " ");
      const cleanMessage = b.message.replace(/,/g, " ");
      return `${b.id},"${cleanName}","${b.phone}","${b.serviceId}","${b.date}","${b.status}","${b.createdAt}"`;
    }).join("\n");
    const blob = new Blob([headerRow + dataRows], { type: "text/csv;charset=utf-8;" });
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", blobUrl);
    link.setAttribute("download", `aurelia_sheets_ready_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
      {/* Container */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="w-full max-w-5xl h-[90vh] md:h-[80vh] flex flex-col justify-between bg-[#0a0a0a] border border-gold-300/20 rounded-2xl overflow-hidden shadow-2xl shadow-black relative"
      >
        {/* Absolute top glowing bar */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold-300 to-gold-400" />
        
        {/* Header toolbar */}
        <div className="p-6 border-b border-neutral-900 flex justify-between items-center bg-[#0d0d0d]">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded border border-gold-300/30 flex items-center justify-center text-gold-300 font-serif text-sm bg-black font-semibold">
              O
            </div>
            <div>
              <h2 className="font-serif text-base tracking-wide text-white uppercase font-medium">Boutique Owner Backstage</h2>
              <p className="font-sans text-[10px] tracking-widest text-gold-400/80 uppercase font-bold">Aurelia Sync Console v1.0.4</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 border border-neutral-800 rounded hover:text-gold-300 hover:border-gold-300/30 transition-colors cursor-pointer"
            title="Exit Admin Console"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Portal Inner Body with left segment tab selective links */}
        <div className="flex-grow flex flex-col md:flex-row overflow-hidden bg-black/40">
          
          {/* Left panel options */}
          <div className="md:w-52 border-b md:border-b-0 md:border-r border-neutral-900 p-4 space-y-2 flex flex-row md:flex-col justify-start md:justify-start flex-wrap gap-2 md:gap-0">
            <button
              onClick={() => setActiveTab("bookings")}
              className={`w-full text-left h-11 px-4.5 rounded font-sans text-xs uppercase tracking-wider font-semibold flex items-center space-x-2.5 transition-colors cursor-pointer ${
                activeTab === "bookings" ? "bg-gold-400 text-black font-bold" : "text-gray-400 hover:bg-neutral-900 hover:text-white"
              }`}
            >
              <Table className="w-4 h-4" />
              <span>Registry Logs</span>
            </button>
            <button
              onClick={() => setActiveTab("analytics")}
              className={`w-full text-left h-11 px-4.5 rounded font-sans text-xs uppercase tracking-wider font-semibold flex items-center space-x-2.5 transition-colors cursor-pointer ${
                activeTab === "analytics" ? "bg-gold-400 text-black font-bold" : "text-gray-400 hover:bg-neutral-900 hover:text-white"
              }`}
            >
              <BarChart2 className="w-4 h-4" />
              <span>Dashboard Analytica</span>
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`w-full text-left h-11 px-4.5 rounded font-sans text-xs uppercase tracking-wider font-semibold flex items-center space-x-2.5 transition-colors cursor-pointer ${
                activeTab === "settings" ? "bg-gold-400 text-black font-bold" : "text-gray-400 hover:bg-neutral-900 hover:text-white"
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>Gateway Settings</span>
            </button>
          </div>

          {/* Right main panel display viewport */}
          <div className="flex-grow overflow-y-auto p-6 bg-[#040404]/30">
            
            {/* Log list log viewer */}
            {activeTab === "bookings" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-lg text-white font-medium">Bespoke Appointment Logs</h3>
                    <p className="font-sans text-xs text-gray-400">Total list of clients synchronized locally and formatted for Google Sheets sync.</p>
                  </div>
                  
                  {bookings.length > 0 && (
                    <div className="flex items-center space-x-2.5 flex-wrap gap-2">
                      <button
                        onClick={exportToCSV}
                        className="h-9 px-3.5 border border-gold-300/25 rounded font-sans text-[10px] tracking-widest text-gold-300 hover:text-white hover:border-gold-300 uppercase font-semibold flex items-center space-x-1"
                        title="Download standard CSV sheet formatting file"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>CSV Google Sheet</span>
                      </button>
                      <button
                        onClick={exportToJSON}
                        className="h-9 px-3.5 border border-neutral-800 rounded font-sans text-[10px] tracking-widest text-gray-400 hover:text-white uppercase font-semibold flex items-center space-x-1"
                      >
                        <span>JSON Payload</span>
                      </button>
                      <button
                        onClick={onClearAll}
                        className="h-9 px-3.5 bg-rose-500/10 hover:bg-rose-500 hover:text-black border border-rose-500/20 rounded font-sans text-[10px] tracking-widest text-rose-400 uppercase font-semibold flex items-center space-x-1 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Purge Lists</span>
                      </button>
                    </div>
                  )}
                </div>

                {bookings.length === 0 ? (
                  <div className="text-center py-16 border border-dashed border-neutral-900 rounded-xl bg-neutral-950/40">
                    <Table className="w-10 h-10 text-neutral-800 mx-auto mb-4" />
                    <h4 className="font-serif text-sm font-semibold text-white">Registry Empty</h4>
                    <p className="font-sans text-xs text-gray-400 mt-1 max-w-sm mx-auto leading-relaxed">Bookings and consultations submitted from the frontpage forms will materialize here instantly.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto border border-neutral-900 rounded-xl bg-neutral-950/40">
                    <table className="w-full text-left font-sans text-xs">
                      <thead className="bg-[#0b0b0b] font-sans text-[10px] uppercase tracking-wider text-gray-500 border-b border-neutral-900">
                        <tr>
                          <th className="p-4.5 font-semibold">Client Name</th>
                          <th className="p-4.5 font-semibold">Contact Details</th>
                          <th className="p-4.5 font-semibold">Desired Packages</th>
                          <th className="p-4.5 font-semibold">Ritual Date</th>
                          <th className="p-4.5 font-semibold">Log Status</th>
                          <th className="p-4.5 font-semibold">Progress Handlers</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-900 text-gray-300">
                        {bookings.map((booking) => (
                          <tr key={booking.id} className="hover:bg-neutral-900/10 transition-colors">
                            <td className="p-4.5 font-serif font-medium text-white">
                              {booking.name}
                            </td>
                            <td className="p-4.5 font-mono tracking-wider text-gray-400">
                              {booking.phone}
                            </td>
                            <td className="p-4.5 text-gold-200">
                              {booking.serviceId}
                            </td>
                            <td className="p-4.5 font-mono">
                              {booking.date}
                            </td>
                            <td className="p-4.5">
                              <span className={`inline-block px-2.5 py-1 rounded text-[9px] tracking-widest uppercase font-bold ${
                                booking.status === "completed"
                                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                  : booking.status === "confirmed"
                                  ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                                  : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                              }`}>
                                {booking.status}
                              </span>
                            </td>
                            <td className="p-4.5 flex gap-2.5">
                              {booking.status === "pending" && (
                                <button
                                  onClick={() => onBookingStatusChange(booking.id, "confirmed")}
                                  className="h-7 px-3.5 bg-blue-500/15 hover:bg-blue-500 hover:text-black rounded text-[9px] uppercase tracking-widest font-bold font-sans transition-colors"
                                >
                                  Confirm
                                </button>
                              )}
                              {booking.status !== "completed" && (
                                <button
                                  onClick={() => onBookingStatusChange(booking.id, "completed")}
                                  className="h-7 px-3.5 bg-emerald-500/15 hover:bg-emerald-500 hover:text-black rounded text-[9px] uppercase tracking-widest font-bold font-sans transition-colors"
                                >
                                  Complete
                                </button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* Analytics Dashboard panel */}
            {activeTab === "analytics" && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-lg text-white font-medium">Boutique Metrics & Performance</h3>
                  <p className="font-sans text-xs text-gray-400">Track incoming client appointments, potential revenues, and salon interest categories.</p>
                </div>

                {/* Macro metrics card row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Estimator potential income */}
                  <div className="p-5 bg-[#090909] border border-neutral-900 rounded-xl">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-sans text-[10px] tracking-widest text-[#7a7a7a] uppercase font-bold">POTENTIAL INTERESTS</span>
                      <DollarSign className="w-4 h-4 text-gold-400" />
                    </div>
                    <span className="font-serif text-2xl font-light text-white tracking-wide">
                      ₹{potentialRevenue.toLocaleString("en-IN")}
                    </span>
                    <p className="font-sans text-[10px] text-gray-500 mt-1 leading-relaxed">Estimated revenues from recorded consultation logs</p>
                  </div>

                  {/* Booking count metric */}
                  <div className="p-5 bg-[#090909] border border-neutral-900 rounded-xl">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-sans text-[10px] tracking-widest text-[#7a7a7a] uppercase font-bold">TOTAL APPOINTMENTS</span>
                      <Table className="w-4 h-4 text-gold-400" />
                    </div>
                    <span className="font-serif text-2xl font-light text-white tracking-wide">
                      {totalBookings}
                    </span>
                    <p className="font-sans text-[10px] text-gray-500 mt-1 leading-relaxed">Active luxury files signed of all statuses</p>
                  </div>

                  {/* Pending tickets */}
                  <div className="p-5 bg-[#090909] border border-neutral-900 rounded-xl">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-sans text-[10px] tracking-widest text-[#7a7a7a] uppercase font-bold">PENDING ACTIONS</span>
                      <RefreshCw className="w-4 h-4 text-amber-500" />
                    </div>
                    <span className="font-serif text-2xl font-light text-amber-400 tracking-wide">
                      {pendingBookings}
                    </span>
                    <p className="font-sans text-[10px] text-gray-500 mt-1 leading-relaxed">Bookings awaiting host concierge callback</p>
                  </div>

                  {/* Completed success ticket count */}
                  <div className="p-5 bg-[#090909] border border-neutral-900 rounded-xl">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-sans text-[10px] tracking-widest text-[#7a7a7a] uppercase font-bold">COMPLETED LUXE RITUALS</span>
                      <Check className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="font-serif text-2xl font-light text-emerald-300 tracking-wide">
                      {completedBookings}
                    </span>
                    <p className="font-sans text-[10px] text-gray-500 mt-1 leading-relaxed">Happy patrons marked verified and resolved</p>
                  </div>
                </div>

                {/* Simulated database setup instructions */}
                <div className="p-6 border border-gold-300/10 rounded-xl bg-gold-400/5">
                  <h4 className="font-serif text-sm font-semibold text-gold-300 mb-2">Simulated Live Google Sheeting Channel</h4>
                  <p className="font-sans text-xs text-gray-300 leading-relaxed mb-4">
                    In production, our webhook routes inputs directly to Google Apps Script or Zapier webhooks. You can install standard Drizzle schemas or connect relational databases seamlessly if requested. For demo/review, download files above as spreadsheet-compliant CSV templates!
                  </p>
                  <div className="flex items-center space-x-2.5 font-mono text-[9px] text-[#8c8c8c] tracking-widest uppercase">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    <span>Active Gateway Connection Status: Listening on Port 3000</span>
                  </div>
                </div>
              </div>
            )}

            {/* Configuration panel */}
            {activeTab === "settings" && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-lg text-white font-medium">Bespoke Redirect Integrations</h3>
                  <p className="font-sans text-xs text-gray-400">Configure parameters like Target WhatsApp mobile hotline and test links.</p>
                </div>

                <div className="space-y-4 max-w-md p-6 bg-neutral-950/50 border border-neutral-900 rounded-xl">
                  {/* Whatsapp redirect config field */}
                  <div className="space-y-2">
                    <label htmlFor="input-owner-whatsapp" className="text-[10px] uppercase font-sans tracking-[0.2em] font-semibold text-gray-400 block">
                      Target WhatsApp Business Number
                    </label>
                    <input
                      id="input-owner-whatsapp"
                      type="text"
                      placeholder="e.g. +91 99999 99999"
                      value={whatsappNumberInput}
                      onChange={(e) => setWhatsappNumberInput(e.target.value)}
                      className="w-full h-11 px-4 rounded bg-black border border-neutral-800 font-sans text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gold-300"
                    />
                    <p className="font-sans text-[10px] text-gray-500 leading-relaxed">
                      Enter the genuine phone (including code with no spacing, e.g. <b>919999999999</b>). On submission, clients will load this phone directly in WhatsApp.
                    </p>
                  </div>

                  {/* Save actions action button */}
                  <button
                    onClick={saveSettings}
                    className="h-10 px-5 bg-gold-400 hover:bg-gold-500 text-black font-sans text-[10px] font-bold tracking-widest uppercase rounded flex items-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <Check className="w-4 h-4" />
                    <span>Commit Settings</span>
                  </button>

                  <AnimatePresence>
                    {isSavedNotify && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="py-1 text-[10px] font-sans text-emerald-400 uppercase font-semibold"
                      >
                        ✓ Gateway Settings Saved! Re-orienting workspace...
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Footer controls segment */}
        <div className="p-4 border-t border-neutral-900 bg-[#0d0d0d] flex items-center justify-between text-[10px] font-sans text-gray-500 tracking-widest uppercase">
          <span>Aurelia Salon Portal Office</span>
          <span>Security Level: SSL Secured</span>
        </div>
      </motion.div>
    </div>
  );
}
