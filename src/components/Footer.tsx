import React from "react";
import Link from "next/link";
import {
  MapPin,
  Car,
  Tag,
  ShieldCheck,
  Mail,
  Phone,
  FileText,
  Heart,
  Globe,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-amber-500 flex items-center justify-center text-white shadow-md">
                <MapPin className="w-5 h-5 fill-white/20 stroke-[2.5]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Nearspot
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              The hyper-local social media network and reservation platform for
              discovering vibrant businesses, grabbing real-time offers,
              and navigating verified parking slot availability in seconds.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-400 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Live Network Active
              </span>
              <span>120+ Metro Areas</span>
            </div>
          </div>

          {/* For Consumers */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#features"
                  className="hover:text-white transition-colors"
                >
                  Local Stories & Reels
                </Link>
              </li>
              <li>
                <Link
                  href="/#parking"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Car className="w-3.5 h-3.5 text-emerald-400" />
                  Live Parking Slots
                </Link>
              </li>
              <li>
                <Link
                  href="/#offers"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Tag className="w-3.5 h-3.5 text-amber-400" />
                  Flash Deals & Vouchers
                </Link>
              </li>
              <li>
                <Link
                  href="/#demo"
                  className="hover:text-white transition-colors"
                >
                  Book Appointments
                </Link>
              </li>
            </ul>
          </div>

          {/* For Businesses */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">
              For Businesses
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#for-business"
                  className="hover:text-white transition-colors"
                >
                  Claim Business Page
                </Link>
              </li>
              <li>
                <Link
                  href="/#parking-setup"
                  className="hover:text-white transition-colors"
                >
                  Parking Slot Hardware & IoT
                </Link>
              </li>
              <li>
                <Link
                  href="/#for-business"
                  className="hover:text-white transition-colors"
                >
                  Host Flash Sales
                </Link>
              </li>
              <li>
                <Link
                  href="/#for-business"
                  className="hover:text-white transition-colors"
                >
                  Merchant Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">
              Trust & Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/terms"
                  className="hover:text-indigo-400 text-slate-300 transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-400" />
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-indigo-400 text-indigo-300 font-medium transition-colors flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms#cancellations"
                  className="hover:text-white transition-colors"
                >
                  Refund & Cancellation Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms#partner-obligations"
                  className="hover:text-white transition-colors"
                >
                  Partner Code of Conduct
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Nearspot Platform Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5" /> Global / EN
            </span>
            <span>•</span>
            <Link href="/terms" className="hover:text-slate-200 underline">
              Terms
            </Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-slate-200 underline">
              Privacy
            </Link>
            <span>•</span>
            <span className="text-slate-500">
              Made with precision for local communities
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
