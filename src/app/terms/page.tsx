"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FileText,
  Shield,
  Search,
  Printer,
  ChevronRight,
  ExternalLink,
  AlertTriangle,
  Info,
  CheckCircle2,
  Clock,
  Building,
  Mail,
  Scale,
  Car,
  CreditCard,
  UserCheck,
  Ban,
  ArrowUp,
  Share2,
} from "lucide-react";

interface Section {
  id: string;
  number: string;
  title: string;
  summary: string;
  content: React.ReactNode;
}

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState<string>("introduction");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const sections: Section[] = [
    {
      id: "introduction",
      number: "1",
      title: "Introduction & Acceptance of Terms",
      summary:
        "By accessing Nearspot (via our website, mobile apps, or APIs), you agree to these legally binding Terms. If you do not agree, you must discontinue using Nearspot immediately.",
      content: (
        <div className="space-y-4">
          <p>
            Welcome to <strong>Nearspot</strong>. These Terms and Conditions (&ldquo;<strong>Terms</strong>&rdquo;, &ldquo;<strong>Agreement</strong>&rdquo;) constitute a legally binding agreement between you (&ldquo;<strong>User</strong>&rdquo;, &ldquo;<strong>you</strong>&rdquo;, or &ldquo;<strong>your</strong>&rdquo;, whether in your personal capacity or on behalf of an entity) and <strong>[Company Legal Name]</strong> (&ldquo;<strong>Nearspot</strong>&rdquo;, &ldquo;<strong>we</strong>&rdquo;, &ldquo;<strong>us</strong>&rdquo;, or &ldquo;<strong>our</strong>&rdquo;), governing your access to and use of the Nearspot website, mobile applications, parking management consoles, and related digital services (collectively, the &ldquo;<strong>Platform</strong>&rdquo; or &ldquo;<strong>Services</strong>&rdquo;).
          </p>
          <p>
            <strong>Effective Date:</strong> These Terms are effective as of <strong>[Effective Date]</strong> and supersede all prior agreements or representations.
          </p>
          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 text-sm space-y-1">
            <p className="font-bold flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              Important Notice Regarding Arbitration & Dispute Resolution
            </p>
            <p className="text-xs text-amber-800 leading-relaxed">
              Please review Section 12 carefully. It contains mandatory dispute resolution procedures and, where permitted by local law, an agreement to arbitrate on an individual basis rather than through jury trials or class action proceedings.
            </p>
          </div>
          <p>
            By registering an account, browsing neighborhood content, accessing parking availability data, claiming promotional offers, or booking an appointment or parking stall through Nearspot, you affirm that you are of legal age to form a binding contract and that you accept and agree to be governed by these Terms.
          </p>
        </div>
      ),
    },
    {
      id: "service-description",
      number: "2",
      title: "Service Description & Platform Intermediary Role",
      summary:
        "Nearspot is a digital technology platform and marketplace. We connect consumers with independent local businesses, service providers, and parking lot operators. Nearspot does not own, operate, or provide the underlying venue services or parking garages.",
      content: (
        <div className="space-y-4">
          <p>
            Nearspot operates a hyper-local technology platform that provides three primary suites of functionality:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>
              <strong>Hyper-Local Social Discovery:</strong> A multimedia feed enabling verified local businesses (&ldquo;<strong>Business Partners</strong>&rdquo;) to publish stories, reels, updates, menus, and flash promotional deals to nearby users.
            </li>
            <li>
              <strong>Smart Parking Slot Navigation & Hold:</strong> Real-time mapping, IoT sensor feeds, computer vision occupancy estimates, and pre-booking mechanisms for vehicular parking stalls operated by independent venues, commercial garages, and private property hosts.
            </li>
            <li>
              <strong>Appointment & Table Reservation System:</strong> Scheduling interfaces allowing users to request or book appointments, services, and dining reservations with local venues.
            </li>
          </ul>
          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 text-sm">
            <p className="font-semibold text-slate-900 mb-1">
              Independent Third-Party Provider Clarification:
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Nearspot is strictly an online marketplace and communication intermediary. Unless expressly stated otherwise in a separate written agreement, Nearspot does not operate restaurants, salons, clinics, retail storefronts, or parking lots. Nearspot does not employ parking attendants, valets, chefs, or stylists. The contract for the provision of any underlying goods, services, or vehicular parking space is executed directly between you and the respective Business Partner.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "account-registration",
      number: "3",
      title: "User Account Registration, Security & Eligibility",
      summary:
        "You must provide accurate information when registering, maintain your login credentials securely, and be at least 18 years old (or the age of legal majority in your jurisdiction).",
      content: (
        <div className="space-y-4">
          <p>
            <strong>Eligibility:</strong> You must be at least eighteen (18) years of age, or the age of legal majority in your jurisdiction of residence, to create a Nearspot account or execute bookings. If you are using the platform on behalf of a business entity, you represent and warrant that you possess the authorized legal power to bind that entity.
          </p>
          <p>
            <strong>Account Accuracy & Maintenance:</strong> When creating an account, you must provide accurate, current, and complete information, including a valid mobile phone number, email address, and (where vehicular parking is utilized) verified vehicle license plate data. You agree to promptly update your account information if any details change.
          </p>
          <p>
            <strong>Credential Security:</strong> You are solely responsible for maintaining the confidentiality of your login credentials (passwords, two-factor authentication tokens, or biometric logins). You agree to notify Nearspot immediately at <span className="font-mono text-indigo-600">[Contact Email]</span> upon discovering any unauthorized use or security compromise of your account.
          </p>
          <p>
            Nearspot shall not be held liable for any loss, damage, or unauthorized charges resulting from your failure to safeguard your account credentials.
          </p>
        </div>
      ),
    },
    {
      id: "bookings-reservations",
      number: "4",
      title: "Booking, Reservations & Parking Slot Confirmations",
      summary:
        "When you reserve a table, service appointment, or parking bay, you agree to show up on time and abide by the venue's rules. Repeated no-shows or blocking spaces beyond your reservation window may trigger penalties or account suspension.",
      content: (
        <div className="space-y-4">
          <p>
            <strong>Confirmation & QR Passes:</strong> A reservation or parking hold is only finalized once Nearspot issues a digital Confirmation Pass (typically bearing a confirmation code, QR pass, or license plate match confirmation). Displaying an unconfirmed or pending request does not entitle you to entry.
          </p>
          <p>
            <strong>Parking Stall Specifics:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>
              <strong>Grace Periods:</strong> Standard parking slot reservations include a designated hold window (default fifteen [15] minutes from scheduled arrival time) unless specified differently by the parking provider. If you fail to arrive within the grace period without notifying the lot operator via Nearspot, the stall may be released to general traffic.
            </li>
            <li>
              <strong>Overstay & Towing Policies:</strong> Parking beyond the paid reservation timeframe subjects your vehicle to overstay charges, ticketing, wheel clamping, or towing under the jurisdiction of the lot operator and local municipal regulations. Nearspot does not operate towing services and is not liable for enforcement actions taken by lot operators.
            </li>
            <li>
              <strong>Vehicle Size & Restrictions:</strong> Users must verify vehicle dimensions, height clearances, and charging specifications (for EV bays) prior to booking. Business Partners reserve the right to refuse vehicles exceeding facility clearance limits.
            </li>
          </ul>
          <p>
            <strong>No-Show Policy:</strong> Repeated failure to attend confirmed appointments or occupy reserved parking bays without prior timely cancellation causes commercial harm to Business Partners. Nearspot reserves the right to impose cancellation fees or place temporary booking holds on accounts exhibiting excessive no-show rates.
          </p>
        </div>
      ),
    },
    {
      id: "payments-refunds",
      number: "5",
      title: "Payments, Fees, Cancellations & Refund Policy",
      summary:
        "Nearspot facilitates payments via secure third-party processors. Cancellation windows and refunds depend on each merchant's stated policy and when you cancel relative to the booking time.",
      content: (
        <div className="space-y-4">
          <p>
            <strong>Payment Processing:</strong> Nearspot utilizes secure third-party payment gateways (e.g., Stripe, Adyen, Apple Pay, Google Pay). By providing payment card or account details, you authorize Nearspot and its payment processors to debit all accrued fees, deposits, booking surcharges, and applicable taxes.
          </p>
          <p>
            <strong>Pricing & Convenience Fees:</strong> All prices for items, meals, appointments, and parking are established by the respective Business Partner. Nearspot may levy a nominal technology or platform booking fee per transaction, which will be disclosed itemized at checkout prior to final payment confirmation.
          </p>
          <p>
            <strong>Cancellations & Refunds:</strong>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
              <span className="font-bold text-slate-900 block">Standard Parking Cancellations</span>
              <p className="text-slate-600 leading-relaxed">
                Full refund if cancelled at least 1 hour prior to the reservation start time. Cancellations within 1 hour may incur a 50% reservation hold fee.
              </p>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
              <span className="font-bold text-slate-900 block">Service & Venue Appointments</span>
              <p className="text-slate-600 leading-relaxed">
                Subject to the specific merchant&rsquo;s cancellation timeline (e.g., 2 hours, 24 hours). Non-refundable deposits are clearly indicated prior to checkout.
              </p>
            </div>
          </div>
          <p>
            <strong>Disputed Charges:</strong> If you believe an incorrect or unauthorized fee was assessed, you must notify Nearspot within thirty (30) days of the transaction date at <span className="font-mono text-indigo-600">[Contact Email]</span>. We will investigate the transaction in coordination with the merchant and payment gateway.
          </p>
        </div>
      ),
    },
    {
      id: "user-conduct",
      number: "6",
      title: "User Conduct & Prohibited Activities",
      summary:
        "Do not misuse Nearspot: no spamming fake reviews, scraping platform data, abusing parking slots, harassing merchants, or using automated bots.",
      content: (
        <div className="space-y-4">
          <p>
            As a condition of using Nearspot, you agree not to engage in any of the following prohibited behaviors:
          </p>
          <div className="space-y-2 text-sm text-slate-700">
            <div className="flex items-start gap-2.5">
              <Ban className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
              <span>
                <strong>Fraudulent Activity:</strong> Creating fictitious bookings, claiming promotional offers under multiple duplicate accounts, or falsifying vehicle license plate details.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <Ban className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
              <span>
                <strong>System Abuse & Scraping:</strong> Deploying spiders, crawlers, scrapers, or automated bots to extract business listings, parking availability telemetry, or user data.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <Ban className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
              <span>
                <strong>Defamatory or Inauthentic Reviews:</strong> Posting fraudulent reviews, retaliatory feedback, defamatory remarks, or extortionate ratings against businesses.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <Ban className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
              <span>
                <strong>Physical Interference & Unsafe Parking:</strong> Blocking emergency vehicle routes, parking across designated handicap bays without state permits, or vandalizing IoT parking hardware.
              </span>
            </div>
          </div>
          <p>
            Violation of conduct guidelines constitutes material breach of these Terms and may result in immediate account termination and legal action.
          </p>
        </div>
      ),
    },
    {
      id: "partner-obligations",
      number: "7",
      title: "Partner / Business Provider Obligations & Content Ownership",
      summary:
        "Merchants own their intellectual property and content, but grant Nearspot a license to display it. Business owners are responsible for honoring published offers, accurate slot availability, and service quality.",
      content: (
        <div className="space-y-4">
          <p>
            This section applies to all merchant venues, parking operators, retailers, and service providers utilizing the Nearspot Merchant Console:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>
              <strong>Accuracy of Telemetry & Offer Terms:</strong> Business Partners must ensure that all posted offers, operating hours, parking stall inventory, and sensor statuses accurately reflect real-world availability. If a parking sensor malfunctions, the operator must manually flag the slot within the console.
            </li>
            <li>
              <strong>Commitment to Honor Confirmations:</strong> Business Partners are legally obligated to honor validly confirmed reservations, parking passes, and redeemed promotional vouchers presented by Nearspot users.
            </li>
            <li>
              <strong>Merchant Content License:</strong> By posting photos, reels, menus, brand logos, or promotional videos to the Nearspot social feed, the Business Partner grants Nearspot a worldwide, non-exclusive, royalty-free, transferable license to host, display, distribute, and promote such content across the Platform.
            </li>
            <li>
              <strong>Regulatory Compliance:</strong> Business Partners warrant that they hold all required local municipal licenses, health inspections, garage operating permits, and commercial liability insurance policies.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "intellectual-property",
      number: "8",
      title: "Platform Intellectual Property Rights",
      summary:
        "Nearspot owns all platform code, designs, algorithms, trademarks, and user interfaces. You cannot copy or reverse-engineer our software.",
      content: (
        <div className="space-y-4">
          <p>
            <strong>Nearspot IP:</strong> The Nearspot name, logo, graphic designs, software algorithms, dynamic parking assignment engines, visual interfaces, documentation, and all underlying source code are the exclusive intellectual property of <strong>[Company Legal Name]</strong> and its licensors, protected by trademark, copyright, trade secret, and other intellectual property laws.
          </p>
          <p>
            <strong>Limited User License:</strong> Subject to your compliance with these Terms, Nearspot grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Platform strictly for personal or authorized business merchant purposes. You shall not decompile, reverse-engineer, modify, or create derivative works from the Platform.
          </p>
        </div>
      ),
    },
    {
      id: "disclaimers-liability",
      number: "9",
      title: "Disclaimers, Limitation of Liability & Third-Party Disputes",
      summary:
        "Nearspot is provided 'as is'. We are not responsible for disputes between users and merchants regarding food quality, service delays, vehicle damage, or parking lot conditions.",
      content: (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-900 text-slate-200 text-xs font-mono uppercase tracking-wide leading-relaxed">
            THE PLATFORM, INCLUDING LIVE PARKING DATA, BUSINESS OFFERS, AND RESERVATION TOOLS, IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR UNINTERRUPTED ACCURACY.
          </div>
          <p>
            <strong>Third-Party Service Disputes:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>
              <strong>Service Delivery & Quality:</strong> Any contract for services, food, retail merchandise, or parking is solely between you and the respective Business Partner. Nearspot has no control over and disclaims liability for the quality, safety, legality, hygiene, or suitability of items or services provided by merchants.
            </li>
            <li>
              <strong>Vehicular Damage & Lot Conditions:</strong> Nearspot is not liable for vehicle theft, denting, scratching, burglary, towing, physical property damage, or bodily injury occurring on parking facilities operated by third-party lot operators.
            </li>
            <li>
              <strong>Telemetry & Sensor Latency:</strong> While Nearspot employs sophisticated IoT, camera, and ultrasonic sensors, real-world parking occupancy can fluctuate rapidly. Nearspot does not warrant that a designated space will remain 100% unoccupied if another motorist enters illegally ahead of your arrival.
            </li>
          </ul>
          <p>
            <strong>Cap on Liability:</strong> TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL NEARSPOT, ITS OFFICERS, DIRECTORS, OR EMPLOYEES BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES. OUR TOTAL AGGREGATE LIABILITY ARISING FROM ANY CLAIM UNDER THESE TERMS SHALL NOT EXCEED THE GREATER OF: (A) THE TOTAL AMOUNT YOU PAID TO NEARSPOT IN PLATFORM FEES OVER THE THREE (3) MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED US DOLLARS ($100.00 USD).
          </p>
        </div>
      ),
    },
    {
      id: "termination",
      number: "10",
      title: "Account Suspension & Termination",
      summary:
        "We may suspend or terminate your account if you violate these terms, commit fraud, repeatedly fail to show up, or engage in abusive behavior.",
      content: (
        <div className="space-y-4">
          <p>
            <strong>Termination by You:</strong> You may close your Nearspot account at any time via your account settings or by contacting <span className="font-mono text-indigo-600">[Contact Email]</span>. Termination does not extinguish your obligation to pay any accrued or outstanding fees.
          </p>
          <p>
            <strong>Suspension or Termination by Nearspot:</strong> We reserve the right to immediately suspend, restrict, or permanently terminate your account and access to the Platform, without prior notice, if:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 text-sm">
            <li>You materially breach any provision of these Terms or related policies.</li>
            <li>We suspect fraudulent, deceptive, or abusive payment activities.</li>
            <li>You harass, threaten, or exhibit abusive conduct toward any merchant, parking attendant, or fellow user.</li>
            <li>Required to do so by applicable law, court order, or governmental authority.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "privacy-data",
      number: "11",
      title: "Privacy & Data Handling",
      summary:
        "Your privacy matters. Our Privacy Policy explains how we collect geolocation, vehicle license plates, and booking history to make local services work.",
      content: (
        <div className="space-y-4">
          <p>
            Your access to and use of Nearspot is also governed by our comprehensive <strong>Privacy Policy</strong>, which is incorporated herein by this reference.
          </p>
          <p>
            <strong>Location & Telemetry Data:</strong> In order to provide live parking availability, neighborhood feeds, and geofenced flash deals, Nearspot requests access to your device’s precise geolocation. You may withdraw location permissions at any time via your operating system settings, though doing so will disable localized parking navigation and proximity deals.
          </p>
          <p>
            <strong>License Plate & Vehicle Data:</strong> When utilizing automated barrier gates and camera-integrated parking lots, your license plate number is processed to validate your reservation pass and facilitate contactless gate opening.
          </p>
        </div>
      ),
    },
    {
      id: "governing-law",
      number: "12",
      title: "Governing Law, Dispute Resolution & Jurisdiction",
      summary:
        "These terms are governed by the laws of [Jurisdiction/Country]. Most disputes will be resolved through informal negotiation or binding individual arbitration.",
      content: (
        <div className="space-y-4">
          <p>
            <strong>Governing Law:</strong> These Terms and any dispute arising out of or related to your use of Nearspot shall be governed by and construed in accordance with the substantive laws of <strong>[Jurisdiction/Country]</strong>, without regard to its conflict of law principles.
          </p>
          <p>
            <strong>Informal Resolution First:</strong> Before initiating formal proceedings, you and Nearspot agree to attempt to resolve any dispute, controversy, or claim informally by contacting our legal affairs desk at <span className="font-mono text-indigo-600">[Contact Email]</span> for a period of thirty (30) business days.
          </p>
          <p>
            <strong>Binding Arbitration & Class Action Waiver:</strong> Where permitted by local statutory law, any unresolved controversy or dispute shall be resolved through confidential, binding individual arbitration administered by a recognized arbitral body in <strong>[Jurisdiction/Country]</strong>. YOU AND NEARSPOT AGREE THAT CLAIMS MAY ONLY BE BROUGHT IN AN INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.
          </p>
        </div>
      ),
    },
    {
      id: "amendments-contact",
      number: "13",
      title: "Amendments to Terms & Contact Information",
      summary:
        "We may update these terms periodically. If significant changes occur, we will notify you through the app or by email. Contact us anytime with questions.",
      content: (
        <div className="space-y-4">
          <p>
            <strong>Modifications:</strong> Nearspot reserves the right to amend or update these Terms at any time. When we make material alterations, we will provide notice by updating the &ldquo;Last Updated&rdquo; date at the top of this document, sending an email notice, or displaying an in-app prompt. Your continued use of Nearspot following the posting of amended Terms constitutes full acceptance.
          </p>
          <p>
            <strong>Severability:</strong> If any provision of these Terms is determined to be unlawful, void, or unenforceable, that provision shall be deemed severable and shall not affect the validity and enforceability of any remaining provisions.
          </p>
          <div className="mt-6 p-6 rounded-2xl bg-slate-100 border border-slate-200 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Building className="w-4 h-4 text-indigo-600" />
              Official Legal Inquiries & Notices
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              <div>
                <span className="font-semibold block text-slate-900">Company Legal Name:</span>
                <span className="font-mono bg-white px-2 py-0.5 rounded border border-slate-200 inline-block mt-0.5">
                  [Company Legal Name]
                </span>
              </div>
              <div>
                <span className="font-semibold block text-slate-900">Legal Contact Email:</span>
                <span className="font-mono bg-white px-2 py-0.5 rounded border border-slate-200 inline-block mt-0.5">
                  [Contact Email]
                </span>
              </div>
              <div>
                <span className="font-semibold block text-slate-900">Primary Jurisdiction:</span>
                <span className="font-mono bg-white px-2 py-0.5 rounded border border-slate-200 inline-block mt-0.5">
                  [Jurisdiction/Country]
                </span>
              </div>
              <div>
                <span className="font-semibold block text-slate-900">Compliance Desk:</span>
                <span>Nearspot Trust, Safety & Regulatory Office</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const filteredSections = sections.filter(
    (sec) =>
      sec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sec.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const copySectionLink = (id: string) => {
    if (typeof window !== "undefined") {
      const url = `${window.location.origin}/terms#${id}`;
      navigator.clipboard.writeText(url);
      setCopiedSection(id);
      setTimeout(() => setCopiedSection(null), 2500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-indigo-500 selection:text-white">
      <Navbar />

      {/* HEADER HERO */}
      <div className="bg-white border-b border-slate-200 pt-10 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-4">
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-800 font-semibold">Legal</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-indigo-600 font-medium">Terms and Conditions</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                <Scale className="w-3.5 h-3.5" />
                <span>Legal Document & User Agreement</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                Nearspot Terms and Conditions
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Please review these Terms carefully. They govern your use of the Nearspot social discovery feed, business offers, appointment scheduling, and real-time parking slot availability services.
              </p>
            </div>

            {/* Document details box */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 shrink-0 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-500">
                <Clock className="w-3.5 h-3.5 text-indigo-500" />
                <span>Effective Date:</span>
                <span className="font-bold text-slate-800">[Effective Date]</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <Building className="w-3.5 h-3.5 text-indigo-500" />
                <span>Entity:</span>
                <span className="font-bold text-slate-800">[Company Legal Name]</span>
              </div>
              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-700 font-semibold rounded-lg border border-slate-200 flex items-center gap-1.5 shadow-sm transition-all"
                >
                  <Printer className="w-3.5 h-3.5 text-slate-500" />
                  Print / PDF
                </button>
                <Link
                  href="/"
                  className="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold rounded-lg border border-indigo-200 flex items-center gap-1.5 transition-all"
                >
                  Back to Platform
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* STICKY SIDEBAR / TABLE OF CONTENTS */}
          <aside className="lg:col-span-4 sticky top-24 z-20 space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <FileText className="w-4 h-4 text-indigo-600" />
                  Table of Contents
                </h3>
                <span className="text-[11px] font-mono text-slate-400">
                  {sections.length} Sections
                </span>
              </div>

              {/* Quick Search */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter legal clauses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
              </div>

              {/* Navigation Links */}
              <nav className="space-y-1 max-h-[60vh] overflow-y-auto pr-1 text-xs">
                {filteredSections.map((sec) => {
                  const isActive = activeSection === sec.id;
                  return (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className={`flex items-start gap-2.5 p-2 rounded-xl transition-all ${
                        isActive
                          ? "bg-indigo-50 text-indigo-900 font-bold shadow-xs border-l-4 border-indigo-600"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <span
                        className={`text-[11px] font-mono px-1.5 py-0.5 rounded ${
                          isActive
                            ? "bg-indigo-600 text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {sec.number}
                      </span>
                      <span className="leading-snug flex-1">{sec.title}</span>
                    </a>
                  );
                })}

                {filteredSections.length === 0 && (
                  <p className="text-xs text-slate-400 text-center py-4">
                    No matching clauses found.
                  </p>
                )}
              </nav>

              {/* Notice pill */}
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
                <p className="flex items-center gap-1 font-semibold text-slate-700">
                  <Info className="w-3.5 h-3.5 text-indigo-500" />
                  Dual-Layer Structure:
                </p>
                <p>
                  Every section includes a highlighted <strong>Plain English Summary</strong> along with formal contractual clauses.
                </p>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-2xl p-5 shadow-md space-y-3">
              <h4 className="font-bold text-sm flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400" /> Need Legal Clarification?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                For questions regarding commercial partner licenses, parking lot sensor integrations, or privacy requests, reach out directly to our compliance officers.
              </p>
              <div className="pt-1">
                <a
                  href="mailto:[Contact Email]"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-300 hover:underline"
                >
                  <span>[Contact Email]</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </aside>

          {/* MAIN LEGAL SECTIONS */}
          <main className="lg:col-span-8 space-y-12">
            {sections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-sm scroll-mt-24 space-y-6"
              >
                {/* Header of Section */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-indigo-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-sm">
                      {section.number}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      {section.title}
                    </h2>
                  </div>

                  <button
                    onClick={() => copySectionLink(section.id)}
                    className="self-start sm:self-auto text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 flex items-center gap-1.5 transition-colors"
                    title="Copy direct anchor link"
                  >
                    <Share2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>{copiedSection === section.id ? "Link Copied!" : "Copy Link"}</span>
                  </button>
                </div>

                {/* Plain English Callout */}
                <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200/80 text-indigo-950 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-indigo-600 text-white">
                      In Plain English
                    </span>
                    <span className="text-xs font-bold text-indigo-900">
                      Summary for Users & Business Owners
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-indigo-900/90 leading-relaxed font-medium">
                    {section.summary}
                  </p>
                </div>

                {/* Formal Legal Text */}
                <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-4">
                  {section.content}
                </div>
              </article>
            ))}

            {/* Back to top button */}
            <div className="text-center pt-4">
              <a
                href="#introduction"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-indigo-600 font-semibold text-xs shadow-sm transition-all"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Return to top of document</span>
              </a>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
