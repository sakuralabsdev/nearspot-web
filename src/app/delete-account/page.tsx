"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  UserX,
  Store,
  Smartphone,
  Globe,
  Mail,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  Download,
  Clock,
  Trash2,
  ChevronRight,
  ArrowRight,
  FileText,
  Building,
  Car,
  KeyRound,
  Send,
  Lock,
} from "lucide-react";

export default function DeleteAccountPage() {
  const [activeTab, setActiveTab] = useState<"user" | "business">("user");

  // Interactive deletion form states
  const [accountType, setAccountType] = useState<"user" | "business">("user");
  const [emailInput, setEmailInput] = useState("");
  const [reasonInput, setReasonInput] = useState("No longer using the app");
  const [confirmedCheck, setConfirmedCheck] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !confirmedCheck) return;
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-indigo-500 selection:text-white">
      <Navbar />

      {/* HERO SECTION */}
      <div className="bg-white border-b border-slate-200 pt-10 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-4">
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/privacy" className="hover:text-indigo-600 transition-colors">
              Privacy & Legal
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-rose-600 font-medium">Account & Data Deletion</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-800 border border-rose-200">
                <Trash2 className="w-3.5 h-3.5 text-rose-600" />
                <span>Account Deletion & Right to Erasure</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                How to Delete Your Nearspot Account
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Step-by-step instructions for permanently closing your Nearspot consumer user account or commercial business/parking provider profile, along with data erasure timelines.
              </p>
            </div>

            {/* Quick compliance badges */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 shrink-0 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>App Store & Google Play Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>GDPR & CCPA Right to Erasure</span>
              </div>
              <div className="pt-1 flex items-center gap-2">
                <a
                  href="#self-service-form"
                  className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-lg shadow-xs transition-all flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  Request Deletion Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        {/* TAB SELECTOR: CONSUMER VS BUSINESS */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm flex gap-2">
            <button
              onClick={() => setActiveTab("user")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "user"
                  ? "bg-slate-900 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <UserX className="w-4 h-4 text-rose-400" />
              <span>Consumer / User Account</span>
            </button>
            <button
              onClick={() => setActiveTab("business")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "business"
                  ? "bg-slate-900 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <Store className="w-4 h-4 text-purple-400" />
              <span>Business & Parking Partner Account</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT 8 COLS: STEP-BY-STEP INSTRUCTIONS */}
          <div className="lg:col-span-8 space-y-10">
            {/* TAB 1: CONSUMER USER INSTRUCTIONS */}
            {activeTab === "user" ? (
              <div className="space-y-8">
                {/* Intro summary */}
                <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
                    <UserX className="w-6 h-6 text-rose-600" />
                    Deleting Your Personal Nearspot Account
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Closing your consumer account will permanently remove your personal profile, vehicle license plate associations, saved payment tokens, and reservation logs from active systems.
                  </p>

                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs space-y-1.5">
                    <span className="font-bold flex items-center gap-1.5 text-amber-800">
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                      Before You Proceed:
                    </span>
                    <ul className="list-disc pl-4 space-y-1 text-amber-800/90">
                      <li>Ensure you have no pending or active parking reservations or table appointments.</li>
                      <li>Any unredeemed flash offer vouchers or reward points will be permanently forfeited.</li>
                      <li>You can download an archive of your booking history before deletion.</li>
                    </ul>
                  </div>
                </div>

                {/* Option 1: Mobile App Walkthrough */}
                <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                        Method 1 (Fastest)
                      </span>
                      <h3 className="text-lg font-bold text-slate-900">
                        In-App Self-Service Deletion (iOS & Android)
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600">
                    You can initiate deletion directly from your mobile phone inside the Nearspot app:
                  </p>

                  <div className="space-y-3 pt-1">
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                      <span className="w-6 h-6 rounded-lg bg-slate-900 text-white font-bold flex items-center justify-center shrink-0">
                        1
                      </span>
                      <div>
                        <strong className="text-slate-900 block">Open Nearspot & Go to Profile</strong>
                        <span className="text-slate-600">
                          Tap your avatar / profile icon at the bottom right corner of the screen.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                      <span className="w-6 h-6 rounded-lg bg-slate-900 text-white font-bold flex items-center justify-center shrink-0">
                        2
                      </span>
                      <div>
                        <strong className="text-slate-900 block">Open Settings & Privacy</strong>
                        <span className="text-slate-600">
                          Tap the Gear icon (⚙️) in the top-right corner and select <strong>&ldquo;Account Security & Privacy&rdquo;</strong>.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                      <span className="w-6 h-6 rounded-lg bg-slate-900 text-white font-bold flex items-center justify-center shrink-0">
                        3
                      </span>
                      <div>
                        <strong className="text-slate-900 block">Select &ldquo;Delete Account&rdquo;</strong>
                        <span className="text-slate-600">
                          Scroll to the bottom of the security menu and tap <strong>&ldquo;Delete Account & Erase Data&rdquo;</strong>.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                      <span className="w-6 h-6 rounded-lg bg-slate-900 text-white font-bold flex items-center justify-center shrink-0">
                        4
                      </span>
                      <div>
                        <strong className="text-slate-900 block">Verify with Passcode or SMS OTP</strong>
                        <span className="text-slate-600">
                          Enter your account password or the 6-digit confirmation code dispatched to your registered phone number.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                      <span className="w-6 h-6 rounded-lg bg-rose-600 text-white font-bold flex items-center justify-center shrink-0">
                        5
                      </span>
                      <div>
                        <strong className="text-rose-700 block">Confirm Permanent Erasure</strong>
                        <span className="text-slate-600">
                          Tap the red confirmation button. You will be instantly signed out of all devices and receive a confirmation email.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Option 2: Web Dashboard Walkthrough */}
                <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                        Method 2
                      </span>
                      <h3 className="text-lg font-bold text-slate-900">
                        Web Browser Dashboard Deletion
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600">
                    If you don&rsquo;t have the mobile app installed, you can delete your account from any desktop or mobile web browser:
                  </p>

                  <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
                    <li>Sign in to your account at <strong>nearspot.com/login</strong>.</li>
                    <li>Click on your name in the upper navigation bar and choose <strong>&ldquo;Account Settings&rdquo;</strong>.</li>
                    <li>Navigate to the <strong>&ldquo;Data & Privacy&rdquo;</strong> tab.</li>
                    <li>Under the &ldquo;Delete Account&rdquo; panel, click <strong>&ldquo;Permanently Close Account&rdquo;</strong>.</li>
                    <li>Type &ldquo;DELETE&rdquo; in the confirmation input box to authorize the request.</li>
                  </ol>
                </div>
              </div>
            ) : (
              /* TAB 2: BUSINESS & PARKING PARTNER INSTRUCTIONS */
              <div className="space-y-8">
                {/* Intro summary */}
                <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
                    <Store className="w-6 h-6 text-purple-600" />
                    Closing a Business, Venue or Parking Lot Account
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Closing a commercial merchant account or parking garage facility involves de-registering IoT sensors, canceling active customer holds, settling balance payouts, and releasing physical storefront listings.
                  </p>

                  <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 text-purple-900 text-xs space-y-2">
                    <span className="font-bold flex items-center gap-1.5 text-purple-900">
                      <Building className="w-4 h-4 text-purple-600 shrink-0" />
                      Commercial Merchant Closure Requirements:
                    </span>
                    <ul className="list-disc pl-4 space-y-1 text-purple-900/90">
                      <li><strong>Pending Reservations:</strong> All pending table bookings, service appointments, and pre-booked parking bays must either be honored or formally canceled with full automated refunds to customers.</li>
                      <li><strong>Outstanding Balance & Payouts:</strong> Any remaining net earnings accrued from slot fees or promotional sales must be transferred to your connected business bank account before final termination.</li>
                      <li><strong>Hardware & Sensor Unlinking:</strong> Connected ANPR barrier cameras, ultrasonic ceiling nodes, or valet terminals will be unlinked and cease sending telemetry.</li>
                    </ul>
                  </div>
                </div>

                {/* Merchant Steps */}
                <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                      <Store className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                        Merchant Console Steps
                      </span>
                      <h3 className="text-lg font-bold text-slate-900">
                        Deactivating Your Venue & Parking Console
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-3 pt-1">
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                      <span className="w-6 h-6 rounded-lg bg-slate-900 text-white font-bold flex items-center justify-center shrink-0">
                        1
                      </span>
                      <div>
                        <strong className="text-slate-900 block">Access Nearspot Merchant Hub</strong>
                        <span className="text-slate-600">
                          Log in with your administrator credentials at <strong>nearspot.com/merchant</strong>.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                      <span className="w-6 h-6 rounded-lg bg-slate-900 text-white font-bold flex items-center justify-center shrink-0">
                        2
                      </span>
                      <div>
                        <strong className="text-slate-900 block">Deactivate Live Booking & Parking Inventory</strong>
                        <span className="text-slate-600">
                          Navigate to <strong>Settings &gt; Venue Status</strong> and toggle your venue to <strong>&ldquo;Temporarily Closed / Delisted&rdquo;</strong> to halt all new consumer traffic.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                      <span className="w-6 h-6 rounded-lg bg-slate-900 text-white font-bold flex items-center justify-center shrink-0">
                        3
                      </span>
                      <div>
                        <strong className="text-slate-900 block">Trigger Final Merchant Payout</strong>
                        <span className="text-slate-600">
                          Go to <strong>Billing & Payouts</strong> and click &ldquo;Request Final Settlement&rdquo; to disburse any unpaid reservation revenues.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                      <span className="w-6 h-6 rounded-lg bg-slate-900 text-white font-bold flex items-center justify-center shrink-0">
                        4
                      </span>
                      <div>
                        <strong className="text-slate-900 block">Unbind IoT Parking Hardware</strong>
                        <span className="text-slate-600">
                          Under <strong>Parking Hardware</strong>, click &ldquo;Disconnect All Gate Nodes & Cameras&rdquo;. This resets your API keys and clears camera stream authorizations.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                      <span className="w-6 h-6 rounded-lg bg-rose-600 text-white font-bold flex items-center justify-center shrink-0">
                        5
                      </span>
                      <div>
                        <strong className="text-rose-700 block">Submit Business Closure Request</strong>
                        <span className="text-slate-600">
                          Click &ldquo;Permanently Decommission Venue&rdquo; or email our merchant operations team at <span className="font-mono text-indigo-600">[Contact Email]</span>.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WHAT GETS DELETED VS WHAT GETS RETAINED */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-600" />
                Data Erasure Scope: What Gets Deleted vs. Retained
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* Deleted */}
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Permanently Deleted within 30 Days</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1.5 text-emerald-950/90 leading-relaxed">
                    <li>Your full name, username, and profile picture.</li>
                    <li>Vehicle license plate records and car dimensions.</li>
                    <li>Real-time GPS history and saved favorite places.</li>
                    <li>Active push notification tokens and email subscriptions.</li>
                    <li>Saved payment card tokens from gateway vaults.</li>
                    <li>Direct chat messages and merchant inquiries.</li>
                  </ul>
                </div>

                {/* Retained */}
                <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-1.5 font-bold text-slate-800">
                    <Clock className="w-4 h-4 text-slate-500" />
                    <span>Statutorily Retained (By Law)</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1.5 text-slate-600 leading-relaxed">
                    <li>
                      <strong>Tax & Invoicing Records:</strong> VAT, receipts, and merchant payouts are archived for 7 years as required by financial regulations in <strong>[Jurisdiction/Country]</strong>.
                    </li>
                    <li>
                      <strong>Anonymized Telemetry:</strong> Aggregated, non-personally identifiable traffic counts (e.g. &ldquo;Lot B had 80% occupancy on Friday&rdquo;).
                    </li>
                    <li>
                      <strong>Dispute & Fraud Records:</strong> Records essential for active chargebacks, police requests, or unpaid parking enforcement fines.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FREQUENTLY ASKED QUESTIONS */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-indigo-600" />
                Frequently Asked Questions
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <strong className="text-slate-900 block">
                    Is there a recovery grace period if I change my mind?
                  </strong>
                  <p className="text-slate-600 leading-relaxed">
                    Yes. We provide a <strong>14-day recovery grace period</strong>. If you log back into your account within 14 calendar days of your deletion request, you can cancel the deletion process. After 14 days, your data is permanently and irreversibly purged from our active databases.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <strong className="text-slate-900 block">
                    What happens to the reviews and ratings I posted?
                  </strong>
                  <p className="text-slate-600 leading-relaxed">
                    Your public reviews will be de-identified and labeled as &ldquo;Deleted User&rdquo;, with your profile photo and username completely removed. If you prefer to have your review text completely eradicated, you can delete your reviews individually prior to initiating account deletion.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <strong className="text-slate-900 block">
                    Can I download my reservation and parking data first?
                  </strong>
                  <p className="text-slate-600 leading-relaxed">
                    Under GDPR and CCPA data portability rules, you have the right to export your data. In the Nearspot mobile app or web dashboard, navigate to <strong>Settings &gt; Data &gt; Download My Data Archive</strong> to receive a secure link with your booking history and receipts in JSON or CSV format.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT 4 COLS: INTERACTIVE DELETION REQUEST WIZARD */}
          <aside className="lg:col-span-4 sticky top-24 z-20 space-y-6">
            <div id="self-service-form" className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-5">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-rose-50 text-rose-700 px-2 py-0.5 rounded border border-rose-200">
                  Online Self-Service Tool
                </span>
                <h3 className="font-bold text-slate-900 text-base">
                  Submit Deletion Request
                </h3>
                <p className="text-xs text-slate-500">
                  Submit an automated deletion ticket directly from this page without logging in.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-3 text-xs">
                  <div className="flex items-center gap-2 font-bold text-sm text-emerald-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Deletion Request Dispatched!</span>
                  </div>
                  <p className="leading-relaxed">
                    We have dispatched a verification link to <strong>{emailInput}</strong>.
                  </p>
                  <p className="text-emerald-800 leading-relaxed">
                    Please check your inbox (and spam folder) within the next 24 hours and click the verification button to authorize account closure.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setEmailInput("");
                      setConfirmedCheck(false);
                    }}
                    className="w-full py-2 bg-emerald-700 text-white font-bold rounded-xl text-center hover:bg-emerald-800 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitRequest} className="space-y-4 text-xs">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">
                      Account Classification
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setAccountType("user")}
                        className={`py-2 px-3 rounded-xl border text-center font-semibold transition-all ${
                          accountType === "user"
                            ? "border-rose-500 bg-rose-50/60 text-rose-800"
                            : "border-slate-200 text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        Individual User
                      </button>
                      <button
                        type="button"
                        onClick={() => setAccountType("business")}
                        className={`py-2 px-3 rounded-xl border text-center font-semibold transition-all ${
                          accountType === "business"
                            ? "border-purple-500 bg-purple-50/60 text-purple-800"
                            : "border-slate-200 text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        Business Partner
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">
                      Registered Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 text-slate-900 transition-all"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">
                      Reason for Leaving (Optional)
                    </label>
                    <select
                      value={reasonInput}
                      onChange={(e) => setReasonInput(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 text-slate-800 transition-all"
                    >
                      <option>No longer need parking or local deals</option>
                      <option>Privacy or location tracking concerns</option>
                      <option>Relocating to another city</option>
                      <option>Duplicate or secondary account</option>
                      <option>Technical difficulty or app issues</option>
                      <option>Other / prefer not to say</option>
                    </select>
                  </div>

                  <div className="flex items-start gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="confirm-delete-check"
                      required
                      checked={confirmedCheck}
                      onChange={(e) => setConfirmedCheck(e.target.checked)}
                      className="mt-0.5 rounded border-slate-300 text-rose-600 focus:ring-rose-500 cursor-pointer"
                    />
                    <label
                      htmlFor="confirm-delete-check"
                      className="text-[11px] text-slate-600 leading-snug cursor-pointer select-none"
                    >
                      I confirm that I wish to permanently delete this Nearspot account and forfeit any active vouchers, parking passes, or reward balances.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={!confirmedCheck || !emailInput}
                    className="w-full py-2.5 px-4 bg-rose-600 hover:bg-rose-700 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold rounded-xl shadow-md shadow-rose-600/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Send Verification Email</span>
                  </button>
                </form>
              )}
            </div>

            {/* Email Support Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-md space-y-3">
              <h4 className="font-bold text-sm flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400" /> Prefer Email Assistance?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                You can also email our privacy and support team directly from your registered email address with the subject &ldquo;Account Deletion Request&rdquo;.
              </p>
              <div className="pt-1 text-xs">
                <span className="text-slate-400 block text-[11px]">Direct Support Desk:</span>
                <a
                  href="mailto:[Contact Email]"
                  className="font-mono font-bold text-amber-300 hover:underline block mt-0.5"
                >
                  [Contact Email]
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
