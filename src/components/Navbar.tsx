"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Car,
  Compass,
  Tag,
  Calendar,
  Menu,
  X,
  Sparkles,
  Store,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-amber-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <MapPin className="w-5 h-5 fill-white/20 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight bg-gradient-to-r from-slate-900 via-indigo-950 to-indigo-700 bg-clip-text text-transparent">
                Nearspot
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 -mt-1">
                Local • Social • Parking
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <Link
              href="/#features"
              className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-100/70 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Compass className="w-4 h-4 text-indigo-500" />
              <span>Discover</span>
            </Link>
            <Link
              href="/#parking"
              className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-100/70 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Car className="w-4 h-4 text-emerald-500" />
              <span>Live Parking</span>
              <span className="px-1.5 py-0.5 text-[10px] font-bold bg-emerald-100 text-emerald-700 rounded-full animate-pulse">
                Live
              </span>
            </Link>
            <Link
              href="/#offers"
              className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-100/70 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Tag className="w-4 h-4 text-amber-500" />
              <span>Deals & Offers</span>
            </Link>
            <Link
              href="/#for-business"
              className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-100/70 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Store className="w-4 h-4 text-purple-500" />
              <span>For Business</span>
            </Link>
            <Link
              href="/terms"
              className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-100/70 rounded-lg transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-100/70 rounded-lg transition-colors"
            >
              Privacy
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/#for-business"
              className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-indigo-600 border border-slate-200 hover:border-indigo-300 rounded-xl transition-all hover:bg-indigo-50/50"
            >
              List Business
            </Link>
            <Link
              href="/#app-download"
              className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm shadow-indigo-600/30 rounded-xl transition-all flex items-center gap-1.5 hover:shadow-indigo-600/50 hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Get App</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-3">
          <Link
            href="/#features"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 font-medium"
          >
            <Compass className="w-5 h-5 text-indigo-500" />
            Discover Social Feed
          </Link>
          <Link
            href="/#parking"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 font-medium"
          >
            <Car className="w-5 h-5 text-emerald-500" />
            Real-time Parking Slots
          </Link>
          <Link
            href="/#offers"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 font-medium"
          >
            <Tag className="w-5 h-5 text-amber-500" />
            Flash Offers & Deals
          </Link>
          <Link
            href="/#for-business"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 font-medium"
          >
            <Store className="w-5 h-5 text-purple-500" />
            Business & Parking Setup
          </Link>
          <Link
            href="/terms"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 font-medium"
          >
            Terms and Conditions
          </Link>
          <Link
            href="/privacy"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 font-medium"
          >
            Privacy Policy
          </Link>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Link
              href="/#for-business"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl border border-slate-200 font-semibold text-slate-700"
            >
              List Your Venue / Parking
            </Link>
            <Link
              href="/#app-download"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-600/30"
            >
              Download Nearspot
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
