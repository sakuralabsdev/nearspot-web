"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveAppShowcase from "@/components/InteractiveAppShowcase";
import {
  MapPin,
  Car,
  Tag,
  Calendar,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Users,
  Compass,
  ArrowRight,
  CheckCircle,
  Clock,
  Layers,
  Smartphone,
  Store,
  Sliders,
  Award,
  Zap,
  ChevronRight,
  Search,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-indigo-500 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-white via-indigo-50/30 to-slate-50">
          {/* Ambient Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-indigo-200/40 via-purple-100/30 to-amber-100/30 blur-3xl -z-10 pointer-events-none rounded-full" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-indigo-50 border border-indigo-200/70 text-indigo-700 shadow-sm shadow-indigo-100">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Next-Gen Local Discovery & Live Parking Network</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
                Your Neighborhood Social Hub,{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-500 bg-clip-text text-transparent">
                  Flash Deals & Live Parking
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Discover trending local businesses, stream real-time stories and deals, book appointments, and secure guaranteed parking bays before you even leave home.
              </p>

              {/* Live Search Mockup */}
              <div className="max-w-xl mx-auto pt-2">
                <div className="bg-white p-2 rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-200/90 flex flex-col sm:flex-row items-center gap-2">
                  <div className="flex items-center gap-2 px-3 py-2 w-full sm:w-auto flex-1 text-slate-400">
                    <Search className="w-4 h-4 text-indigo-500 shrink-0" />
                    <input
                      type="text"
                      placeholder="Search cafes, salons, or parking near you..."
                      className="w-full text-xs sm:text-sm bg-transparent outline-none text-slate-800 placeholder:text-slate-400"
                      readOnly
                      defaultValue="Downtown Plaza & 4th Ave"
                    />
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <span className="hidden sm:inline-block text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                      34 Free Spots
                    </span>
                    <a
                      href="#demo"
                      className="w-full sm:w-auto px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-indigo-600/30 text-center"
                    >
                      Explore
                    </a>
                  </div>
                </div>

                {/* Quick tags */}
                <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-500 pt-3">
                  <span className="font-semibold text-slate-400">Popular:</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer">
                    ☕ Specialty Coffee
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer">
                    ⚡ EV Fast Charging
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer">
                    🍕 50% Dinner Deals
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer">
                    💇 Hair Salons
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Demo Block */}
            <div className="mt-14 max-w-5xl mx-auto">
              <InteractiveAppShowcase />
            </div>
          </div>
        </section>

        {/* STATS BANNER */}
        <section className="border-y border-slate-200 bg-white py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  15,000+
                </p>
                <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                  Local Businesses Active
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-black text-emerald-600 tracking-tight">
                  185,000+
                </p>
                <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                  Live Parking Slots Monitored
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-black text-indigo-600 tracking-tight">
                  4.2M+
                </p>
                <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                  Exclusive Offers Redeemed
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-black text-purple-600 tracking-tight">
                  99.4%
                </p>
                <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                  Slot Booking Reliability
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CORE PILLARS SECTION */}
        <section id="features" className="py-20 lg:py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-black uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                All-In-One Platform
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Everything You Need to Connect With Your City
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Nearspot combines social media community engagement with hyper-precise local logistics: parking setups, deals, and reservation systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1: Social Media for Businesses */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Social Media Tailored for Neighborhood Commerce
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Post real-time reels, daily menu specials, new inventory alerts, and event updates. Customers follow venues and see instant updates within their geographic radius.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Video stories & behind-the-scenes reels</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Real-time community reviews & verified customer Q&A</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Geo-targeted push broadcasts for local followers</span>
                  </li>
                </ul>
              </div>

              {/* Feature 2: Smart Parking Slots & Setup */}
              <div id="parking" className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Live Parking Slot Availability & Setup
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Never circle the block again. Venues and independent garages connect sensors or use Nearspot’s digital lot manager to show real-time slot occupancy and accept pre-bookings.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Automated camera / ultrasonic IoT sensor integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>EV charging status, disabled bays & valet gates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Guaranteed 30-minute arrival hold with QR entry pass</span>
                  </li>
                </ul>
              </div>

              {/* Feature 3: Deals & Flash Offers */}
              <div id="offers" className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
                  <Tag className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Dynamic Flash Offers & Digital Coupons
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Turn slow hours into bustling foot traffic. Businesses can launch spontaneous 2-hour discounts or happy hours that notify active users within walking distance.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Time-decaying countdown deals & BOGO coupons</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>One-tap coupon redemption via POS or mobile scanner</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Bundled free parking vouchers on minimum spend</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FOR BUSINESSES: PARKING SETUP & MERCHANT TOOLS */}
        <section id="for-business" className="py-20 lg:py-28 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-700 border border-purple-200">
                  <Store className="w-3.5 h-3.5" />
                  <span>Nearspot Merchant & Venue Suite</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  Turn Your Parking & Storefront Into a High-Revenue Magnet
                </h2>

                <p className="text-slate-600 text-base leading-relaxed">
                  Whether you manage a boutique cafe, a busy medical clinic, a rooftop lounge, or a 50-space private parking lot, Nearspot gives you the digital tools to fill seats and parking bays seamlessly.
                </p>

                <div className="space-y-4 pt-2">
                  {/* Step 1 */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">
                        Create Your Business Page & Story Feed
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        Upload your profile, menus, operational hours, photos, and post your first neighborhood reel in under 3 minutes.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">
                        Configure Your Parking Slot Setup
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        Map your parking stalls: choose between automatic License Plate Recognition (LPR) cameras, sensor pods, or manual attendant check-in.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="w-9 h-9 rounded-xl bg-amber-600 text-white font-bold flex items-center justify-center shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">
                        Automate Bookings, Flash Offers & Revenue
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        Accept pre-paid slot deposits, reduce no-shows with automated SMS reminders, and launch deals during quiet hours.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#demo"
                    className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl shadow-lg transition-all text-center flex items-center justify-center gap-2"
                  >
                    <span>Register Your Business Free</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/terms#partner-obligations"
                    className="px-6 py-3 border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold text-sm rounded-xl text-center"
                  >
                    Review Partner Terms
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Setup Mockup */}
              <div className="bg-slate-950 rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-slate-800 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-xs font-mono text-slate-400 ml-2">Nearspot Merchant Console v2.4</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    LIVE
                  </span>
                </div>

                {/* Dashboard Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">Today’s Parking Occupancy</span>
                    <span className="text-2xl font-black text-emerald-400 mt-1 block">88%</span>
                    <span className="text-[10px] text-slate-400">28 / 32 Slots Booked</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">Offer Redemptions</span>
                    <span className="text-2xl font-black text-amber-400 mt-1 block">142</span>
                    <span className="text-[10px] text-slate-400">+$2,840 Estimated Spend</span>
                  </div>
                </div>

                {/* Slot Manager preview */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-200">Parking Hardware & Gate Sync</span>
                    <span className="text-emerald-400 font-mono">Sensors Connected</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between p-2 rounded bg-slate-800/80">
                      <span>LPR Camera North Gate</span>
                      <span className="text-emerald-400 font-semibold">Active (99.8% match)</span>
                    </div>
                    <div className="flex justify-between p-2 rounded bg-slate-800/80">
                      <span>Bay 1-12 Ultrasonic Sensors</span>
                      <span className="text-emerald-400 font-semibold">Broadcasting 1000ms</span>
                    </div>
                    <div className="flex justify-between p-2 rounded bg-slate-800/80">
                      <span>EV Charging Station 1 & 2</span>
                      <span className="text-amber-400 font-semibold">In Use (22kW delivery)</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-slate-400 bg-slate-900/50 p-3 rounded-xl border border-slate-800/60 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Instant payouts processed daily directly to your business bank account.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST & TRANSPARENCY SECTION */}
        <section className="py-16 bg-slate-100/70 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900">
                    Transparent, Legally Sound & Secure By Design
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                    Nearspot operates strictly as a platform connecting users with independent businesses and parking providers. All bookings, payments, and slot holds are protected by comprehensive legal terms.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Link
                  href="/terms"
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
                >
                  Read Terms & Conditions
                </Link>
                <Link
                  href="/terms#disclaimers"
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-50 transition-all"
                >
                  Liability Policy
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* APP DOWNLOAD CTA */}
        <section id="app-download" className="py-20 lg:py-28 bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center mx-auto text-indigo-300">
              <Smartphone className="w-8 h-8" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Get Started with Nearspot Today
            </h2>
            <p className="text-slate-300 text-base max-w-xl mx-auto">
              Join hundreds of thousands of users exploring verified offers, neighborhood feeds, and effortless parking slots. Available for iOS, Android, and web.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => alert("Nearspot iOS app link simulated")}
                className="px-6 py-3.5 rounded-2xl bg-white text-slate-900 font-bold text-sm shadow-xl hover:bg-slate-100 transition-all flex items-center gap-3"
              >
                <span>Download for iOS (App Store)</span>
              </button>
              <button
                onClick={() => alert("Nearspot Android APK link simulated")}
                className="px-6 py-3.5 rounded-2xl bg-indigo-600 text-white font-bold text-sm shadow-xl hover:bg-indigo-500 transition-all flex items-center gap-3"
              >
                <span>Download for Android (Google Play)</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
