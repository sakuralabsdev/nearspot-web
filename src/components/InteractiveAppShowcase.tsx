"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  Car,
  Tag,
  Calendar,
  Clock,
  Sparkles,
  MapPin,
  Heart,
  Share2,
  CheckCircle2,
  AlertCircle,
  BatteryCharging,
  Flame,
  ArrowRight,
  Filter,
  Check,
  ShieldAlert,
  Sliders,
  Settings,
  PlusCircle,
} from "lucide-react";

export default function InteractiveAppShowcase() {
  const [activeTab, setActiveTab] = useState<"social" | "parking" | "offers" | "booking">("parking");

  // Parking state
  const [selectedSlot, setSelectedSlot] = useState<string | null>("P-104");
  const [bookedSlot, setBookedSlot] = useState<string | null>(null);
  const [parkingFilter, setParkingFilter] = useState<"all" | "ev" | "standard">("all");
  const [businessSetupMode, setBusinessSetupMode] = useState<boolean>(false);

  // Social feed state
  const [likedPosts, setLikedPosts] = useState<number[]>([1]);

  // Offers state
  const [claimedOffers, setClaimedOffers] = useState<string[]>([]);

  // Booking state
  const [selectedDate, setSelectedDate] = useState("Today, 6:30 PM");
  const [selectedParty, setSelectedParty] = useState("2 Guests");
  const [reservationConfirmed, setReservationConfirmed] = useState(false);

  const parkingSlots = [
    { id: "P-101", type: "ev", status: "available", price: "$3.50/hr", distance: "20m from entry" },
    { id: "P-102", type: "standard", status: "occupied", price: "$2.50/hr", distance: "25m from entry" },
    { id: "P-103", type: "standard", status: "occupied", price: "$2.50/hr", distance: "30m from entry" },
    { id: "P-104", type: "standard", status: "available", price: "$2.50/hr", distance: "35m from entry" },
    { id: "P-105", type: "ev", status: "available", price: "$3.50/hr", distance: "40m from entry" },
    { id: "P-106", type: "standard", status: "occupied", price: "$2.50/hr", distance: "45m from entry" },
    { id: "P-107", type: "handicap", status: "available", price: "$2.00/hr", distance: "10m from entry" },
    { id: "P-108", type: "standard", status: "available", price: "$2.50/hr", distance: "50m from entry" },
  ];

  const filteredSlots = parkingSlots.filter((slot) => {
    if (parkingFilter === "ev") return slot.type === "ev";
    if (parkingFilter === "standard") return slot.type === "standard";
    return true;
  });

  const toggleLike = (id: number) => {
    if (likedPosts.includes(id)) {
      setLikedPosts(likedPosts.filter((item) => item !== id));
    } else {
      setLikedPosts([...likedPosts, id]);
    }
  };

  const handleClaimOffer = (code: string) => {
    if (!claimedOffers.includes(code)) {
      setClaimedOffers([...claimedOffers, code]);
    }
  };

  return (
    <div id="demo" className="w-full bg-white rounded-3xl border border-slate-200/80 shadow-2xl shadow-indigo-500/10 overflow-hidden">
      {/* Header bar / Tab Selector */}
      <div className="bg-slate-900 px-6 py-5 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
        <div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Live Interactive Preview
          </span>
          <h3 className="text-xl font-bold text-white mt-1">
            Experience Nearspot In Action
          </h3>
        </div>

        {/* Tab Buttons */}
        <div className="flex bg-slate-800 p-1.5 rounded-2xl gap-1 overflow-x-auto max-w-full">
          <button
            onClick={() => setActiveTab("parking")}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap ${
              activeTab === "parking"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-900/30"
                : "text-slate-300 hover:text-white hover:bg-slate-700/50"
            }`}
          >
            <Car className="w-4 h-4" />
            <span>Smart Parking Slots</span>
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse hidden sm:inline-block" />
          </button>

          <button
            onClick={() => setActiveTab("social")}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap ${
              activeTab === "social"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-900/30"
                : "text-slate-300 hover:text-white hover:bg-slate-700/50"
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Business Social Feed</span>
          </button>

          <button
            onClick={() => setActiveTab("offers")}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap ${
              activeTab === "offers"
                ? "bg-amber-600 text-white shadow-md shadow-amber-900/30"
                : "text-slate-300 hover:text-white hover:bg-slate-700/50"
            }`}
          >
            <Tag className="w-4 h-4" />
            <span>Flash Offers</span>
          </button>

          <button
            onClick={() => setActiveTab("booking")}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap ${
              activeTab === "booking"
                ? "bg-purple-600 text-white shadow-md shadow-purple-900/30"
                : "text-slate-300 hover:text-white hover:bg-slate-700/50"
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Slot Booking</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Live Parking Grid & Setup */}
      {activeTab === "parking" && (
        <div className="p-6 lg:p-8 bg-gradient-to-b from-slate-50 to-white">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left: Map & Real-time Lot Diagram */}
            <div className="w-full lg:w-7/12 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900">Grand Central Galleria Lot B</span>
                    <span className="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800">
                      Open 24/7
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-indigo-500" /> 450 Lexington Ave, 150m from Downtown Mall
                  </p>
                </div>

                {/* Filter / Mode switch */}
                <div className="flex items-center gap-2">
                  <div className="flex bg-slate-100 p-1 rounded-lg text-xs font-medium">
                    <button
                      onClick={() => setParkingFilter("all")}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        parkingFilter === "all" ? "bg-white shadow text-slate-900" : "text-slate-600"
                      }`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setParkingFilter("ev")}
                      className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1 ${
                        parkingFilter === "ev" ? "bg-white shadow text-emerald-700 font-bold" : "text-slate-600"
                      }`}
                    >
                      <BatteryCharging className="w-3 h-3 text-emerald-500" /> EV Only
                    </button>
                  </div>

                  <button
                    onClick={() => setBusinessSetupMode(!businessSetupMode)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 border ${
                      businessSetupMode
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100"
                    }`}
                  >
                    <Settings className="w-3.5 h-3.5" />
                    {businessSetupMode ? "Owner Setup Mode" : "Toggle Setup Tool"}
                  </button>
                </div>
              </div>

              {businessSetupMode && (
                <div className="p-3.5 bg-indigo-50/80 border border-indigo-200 rounded-xl text-xs text-indigo-900 flex items-start gap-2.5">
                  <Sliders className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Business Parking Setup Activated:</span> Click any slot below to reconfigure slot rates, assign EV charging status, or set automated camera/gate sensors.
                  </div>
                </div>
              )}

              {/* Graphical Parking Grid */}
              <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-inner">
                <div className="flex justify-between items-center text-xs text-slate-400 pb-4 border-b border-slate-800">
                  <span className="font-mono text-emerald-400">ENTRY GATE / SENSOR A1</span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded bg-emerald-500 inline-block" /> Available
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded bg-rose-500 inline-block" /> Occupied
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded bg-amber-400 inline-block" /> Selected
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5">
                  {filteredSlots.map((slot) => {
                    const isOccupied = slot.status === "occupied";
                    const isSelected = selectedSlot === slot.id;
                    const isJustBooked = bookedSlot === slot.id;

                    return (
                      <button
                        key={slot.id}
                        disabled={isOccupied}
                        onClick={() => {
                          setSelectedSlot(slot.id);
                          setBookedSlot(null);
                        }}
                        className={`p-3 rounded-xl border text-left transition-all relative flex flex-col justify-between h-28 group ${
                          isJustBooked
                            ? "bg-purple-900/60 border-purple-400 text-white ring-2 ring-purple-400"
                            : isSelected
                            ? "bg-indigo-950/80 border-amber-400 text-white ring-2 ring-amber-400"
                            : isOccupied
                            ? "bg-slate-800/40 border-slate-700/50 text-slate-500 cursor-not-allowed opacity-60"
                            : "bg-slate-800/90 border-slate-700 text-slate-200 hover:border-emerald-400 hover:bg-slate-800"
                        }`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <span className="font-mono font-bold text-sm tracking-wider">
                            {slot.id}
                          </span>
                          {slot.type === "ev" && (
                            <span className="p-1 rounded bg-emerald-500/20 text-emerald-300" title="EV Fast Charger">
                              <BatteryCharging className="w-3.5 h-3.5" />
                            </span>
                          )}
                          {slot.type === "handicap" && (
                            <span className="p-1 rounded bg-blue-500/20 text-blue-300 text-[10px] font-bold">
                              ACCESSIBLE
                            </span>
                          )}
                        </div>

                        <div>
                          <div className="text-[11px] font-medium text-slate-300">
                            {slot.price}
                          </div>
                          <div className="text-[10px] font-mono mt-0.5">
                            {isJustBooked ? (
                              <span className="text-purple-300 font-bold">RESERVED BY YOU</span>
                            ) : isOccupied ? (
                              <span className="text-rose-400">OCCUPIED</span>
                            ) : isSelected ? (
                              <span className="text-amber-300 font-bold">SELECTED</span>
                            ) : (
                              <span className="text-emerald-400">AVAILABLE</span>
                            )}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Drive-way Clearance: 4.2m</span>
                  <span className="text-emerald-400 font-semibold">Live Camera & Ultrasonic Sensors Syncing</span>
                </div>
              </div>
            </div>

            {/* Right: Reservation & Business Setup panel */}
            <div className="w-full lg:w-5/12 bg-white rounded-2xl border border-slate-200 p-6 space-y-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-base">
                    {businessSetupMode ? "Setup Slot Rules & Pricing" : "Reserve This Slot Now"}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {businessSetupMode
                      ? "Nearspot Merchant Parking Setup Console"
                      : "Guaranteed parking hold for 45 minutes ahead of arrival"}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  {selectedSlot || "—"}
                </div>
              </div>

              {!businessSetupMode ? (
                <>
                  <div className="space-y-3 bg-slate-50 p-4 rounded-xl text-xs text-slate-600 border border-slate-100">
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span>Rate per Hour</span>
                      <span className="font-semibold text-slate-900">$2.50 / hr</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span>Arrival Grace Period</span>
                      <span className="font-semibold text-emerald-700">15 mins free hold</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span>EV Charger Availability</span>
                      <span className="font-semibold text-slate-900">
                        {selectedSlot === "P-101" || selectedSlot === "P-105" ? "Included (Level 2)" : "None at this slot"}
                      </span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Security & Gate</span>
                      <span className="font-semibold text-slate-900">License Plate QR Scanner</span>
                    </div>
                  </div>

                  {bookedSlot ? (
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2">
                      <div className="flex items-center gap-2 font-bold text-sm">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        <span>Slot {bookedSlot} Reserved Successfully!</span>
                      </div>
                      <p className="text-xs text-emerald-700">
                        Your pass is active. Navigate via GPS directly to Bay {bookedSlot}. Entry barrier will scan your app QR code.
                      </p>
                      <button
                        onClick={() => setBookedSlot(null)}
                        className="mt-2 text-xs font-semibold text-emerald-800 underline block"
                      >
                        Reset / Book another spot
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        if (selectedSlot) setBookedSlot(selectedSlot);
                      }}
                      className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
                    >
                      <Check className="w-4 h-4" />
                      <span>Confirm & Hold Slot {selectedSlot}</span>
                    </button>
                  )}

                  <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-slate-400" />
                    Covered by Nearspot Verified Parking Protection Policy
                  </div>
                </>
              ) : (
                /* Business setup mode details */
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700">Assign Sensor Type</label>
                    <select className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white">
                      <option>Nearspot AI Camera Feed (Automated Plate Recognition)</option>
                      <option>Ultrasonic Ceiling Sensor Node</option>
                      <option>Manual Attendant / Valet App</option>
                      <option>Barrier Gate Barcode Reader</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700">Dynamic Pricing Mode</label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-lg border border-indigo-200 bg-indigo-50/50">
                        <span className="font-bold text-indigo-900 block">Flat Rate</span>
                        <span className="text-slate-500 text-[10px]">$2.50 / hour flat</span>
                      </div>
                      <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50">
                        <span className="font-bold text-slate-700 block">Peak Hours Surge</span>
                        <span className="text-slate-500 text-[10px]">Autoscale with venue demand</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      alert("Parking slot configuration saved to Nearspot Merchant Hub!");
                      setBusinessSetupMode(false);
                    }}
                    className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl"
                  >
                    Save Slot Parameters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Business Social Media Feed */}
      {activeTab === "social" && (
        <div className="p-6 lg:p-8 bg-slate-50">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-900 text-base">Hyper-Local Business Stories & Posts</h4>
                <p className="text-xs text-slate-500">Live community updates from venues within 2.5 miles of you</p>
              </div>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full">
                Active Neighborhood Feed
              </span>
            </div>

            {/* Post 1 */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-500 to-rose-500 flex items-center justify-center text-white font-bold text-sm shadow">
                    OB
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-slate-900 text-sm">Oak & Barrel Bistro</span>
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 fill-indigo-100" />
                      <span className="text-xs text-slate-400">• 18 min ago</span>
                    </div>
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-rose-500" /> Downtown Promenade • 4 parking bays free
                    </p>
                  </div>
                </div>
                <button className="px-3 py-1 text-xs font-bold text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                  + Follow
                </button>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                🍞 Just pulled our wood-fired sourdough pizzas out of the oven! Today’s special includes wild truffles and smoked buffalo mozzarella. 
                Show this post at checkout for <strong className="text-indigo-600">20% off craft beverages</strong> before 7 PM!
              </p>

              {/* Media banner simulation */}
              <div className="w-full h-48 rounded-xl bg-gradient-to-r from-amber-900 via-rose-900 to-slate-900 relative flex items-end p-4 text-white overflow-hidden shadow-inner">
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
                <div className="relative z-10 flex items-center justify-between w-full">
                  <div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-slate-950 uppercase tracking-wider">
                      Chef Special
                    </span>
                    <h5 className="font-bold text-base mt-1">Wood-Fired Truffle Margherita</h5>
                  </div>
                  <button
                    onClick={() => setActiveTab("booking")}
                    className="px-3 py-1.5 rounded-lg bg-white text-slate-900 font-bold text-xs hover:bg-slate-100 transition-all shadow"
                  >
                    Reserve Table
                  </button>
                </div>
              </div>

              {/* Interactions */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-500">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => toggleLike(1)}
                    className={`flex items-center gap-1.5 font-semibold transition-colors ${
                      likedPosts.includes(1) ? "text-rose-600" : "text-slate-600 hover:text-rose-600"
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${likedPosts.includes(1) ? "fill-rose-600 text-rose-600" : ""}`} />
                    <span>{likedPosts.includes(1) ? "43 Likes" : "42 Likes"}</span>
                  </button>
                  <button className="flex items-center gap-1.5 font-semibold hover:text-indigo-600">
                    <MessageSquare className="w-4 h-4" />
                    <span>8 Comments</span>
                  </button>
                </div>
                <button className="flex items-center gap-1 font-semibold hover:text-indigo-600">
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-sm shadow">
                    VF
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-slate-900 text-sm">Velocity Fitness & Wellness</span>
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 fill-indigo-100" />
                      <span className="text-xs text-slate-400">• 42 min ago</span>
                    </div>
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-teal-500" /> Uptown Plaza • Free 2-hour parking validation
                    </p>
                  </div>
                </div>
                <button className="px-3 py-1 text-xs font-bold text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                  + Follow
                </button>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                ⚡ Afternoon HIIT & Recovery session starting at 5:00 PM today. We’ve enabled real-time slot check-in on Nearspot — 6 workout stations left!
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-500">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => toggleLike(2)}
                    className={`flex items-center gap-1.5 font-semibold transition-colors ${
                      likedPosts.includes(2) ? "text-rose-600" : "text-slate-600 hover:text-rose-600"
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${likedPosts.includes(2) ? "fill-rose-600 text-rose-600" : ""}`} />
                    <span>{likedPosts.includes(2) ? "29 Likes" : "28 Likes"}</span>
                  </button>
                  <button className="flex items-center gap-1.5 font-semibold hover:text-indigo-600">
                    <MessageSquare className="w-4 h-4" />
                    <span>4 Comments</span>
                  </button>
                </div>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Instant Pass Available
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Flash Offers & Deals */}
      {activeTab === "offers" && (
        <div className="p-6 lg:p-8 bg-slate-50">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="font-bold text-slate-900 text-base">Exclusive Neighborhood Flash Offers</h4>
                <p className="text-xs text-slate-500">Geofenced discounts created by verified business owners</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-amber-600 fill-amber-500" /> 14 Active Near You
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Offer 1 */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between hover:border-amber-300 transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-black bg-rose-100 text-rose-700">
                      50% OFF
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Ends in 3h 12m
                    </span>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-base">Lumière Hair & Spa</h5>
                    <p className="text-xs text-slate-500">Full Signature Styling & Head Spa</p>
                  </div>
                  <p className="text-xs text-slate-600">
                    Valid for weekday off-peak appointments booked directly via the Nearspot calendar.
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  {claimedOffers.includes("SPA50") ? (
                    <div className="p-2.5 bg-emerald-50 text-emerald-800 rounded-xl text-center font-mono text-xs font-bold">
                      COUPON: NEAR-LUMIERE-50
                    </div>
                  ) : (
                    <button
                      onClick={() => handleClaimOffer("SPA50")}
                      className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-md shadow-amber-500/20 transition-all"
                    >
                      Claim 50% Off Voucher
                    </button>
                  )}
                </div>
              </div>

              {/* Offer 2 */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between hover:border-amber-300 transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-black bg-emerald-100 text-emerald-700">
                      FREE PARKING
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Valid Today
                    </span>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-base">Artisan Bean Roastery</h5>
                    <p className="text-xs text-slate-500">With purchase of $15 or more</p>
                  </div>
                  <p className="text-xs text-slate-600">
                    Automatically validates 90 minutes in North Bay parking stalls when ordering in-store.
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  {claimedOffers.includes("PARKFREE") ? (
                    <div className="p-2.5 bg-emerald-50 text-emerald-800 rounded-xl text-center font-mono text-xs font-bold">
                      COUPON: FREEPARK-BEAN
                    </div>
                  ) : (
                    <button
                      onClick={() => handleClaimOffer("PARKFREE")}
                      className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-md shadow-amber-500/20 transition-all"
                    >
                      Unlock Free Parking Pass
                    </button>
                  )}
                </div>
              </div>

              {/* Offer 3 */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between hover:border-amber-300 transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-black bg-indigo-100 text-indigo-700">
                      BUY 1 GET 1
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Happy Hour
                    </span>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-base">Rooftop Lounge 9</h5>
                    <p className="text-xs text-slate-500">Sunset Mocktails & Tapas</p>
                  </div>
                  <p className="text-xs text-slate-600">
                    Flash promo for early birds seating between 4:30 PM and 6:30 PM.
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  {claimedOffers.includes("BOGO9") ? (
                    <div className="p-2.5 bg-emerald-50 text-emerald-800 rounded-xl text-center font-mono text-xs font-bold">
                      COUPON: ROOF9-BOGO
                    </div>
                  ) : (
                    <button
                      onClick={() => handleClaimOffer("BOGO9")}
                      className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-md shadow-amber-500/20 transition-all"
                    >
                      Claim BOGO Deal
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Slot / Table Booking */}
      {activeTab === "booking" && (
        <div className="p-6 lg:p-8 bg-slate-50">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
            <div>
              <h4 className="font-bold text-slate-900 text-base">Book Appointment & Parking Together</h4>
              <p className="text-xs text-slate-500">
                Reserve your spot at the venue and bundle a reserved parking bay in one frictionless tap.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">Select Venue / Provider</label>
                <div className="p-3 rounded-xl border border-slate-200 bg-slate-50/70 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-sm text-slate-900 block">The Botanist Garden Restaurant</span>
                    <span className="text-xs text-slate-500">Italian Cuisine • Main Street District</span>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded bg-indigo-100 text-indigo-700">
                    Verified Partner
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">Date & Time Slot</label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white"
                  >
                    <option>Today, 6:30 PM (Peak)</option>
                    <option>Today, 8:00 PM</option>
                    <option>Tomorrow, 1:00 PM (Lunch)</option>
                    <option>Tomorrow, 7:00 PM</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">Party / Vehicle Size</label>
                  <select
                    value={selectedParty}
                    onChange={(e) => setSelectedParty(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white"
                  >
                    <option>2 Guests (Standard Table)</option>
                    <option>4 Guests (Booth Table)</option>
                    <option>6+ Guests (Family Table)</option>
                    <option>1 Vehicle (Sedan / SUV)</option>
                  </select>
                </div>
              </div>

              {/* Add parking checkbox */}
              <div className="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/60 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-xs text-slate-900 block">Bundle Guaranteed Parking</span>
                    <span className="text-[11px] text-slate-500">Reserved Slot P-104 held 30 mins before arrival</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-800">+$2.50</span>
              </div>

              {reservationConfirmed ? (
                <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-purple-900 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-purple-600" />
                    <span>Booking Confirmed & QR Pass Generated!</span>
                  </div>
                  <p className="text-xs text-purple-700">
                    Your appointment for {selectedParty} at {selectedDate} has been confirmed by the venue manager.
                    Slot P-104 is locked for your arrival.
                  </p>
                  <button
                    onClick={() => setReservationConfirmed(false)}
                    className="mt-2 text-xs font-semibold text-purple-800 underline block"
                  >
                    Make another booking
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setReservationConfirmed(true)}
                  className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-lg shadow-purple-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Reservation & Parking Hold</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
