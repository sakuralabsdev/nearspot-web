"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  Search,
  Printer,
  ChevronRight,
  ExternalLink,
  Info,
  Clock,
  Building,
  Mail,
  Lock,
  Eye,
  Database,
  MapPin,
  Car,
  CreditCard,
  UserCheck,
  CheckCircle2,
  FileText,
  ArrowUp,
  Share2,
  AlertCircle,
  Globe,
  Bell,
  Trash2,
  Key,
} from "lucide-react";

interface PrivacySection {
  id: string;
  number: string;
  title: string;
  summary: string;
  content: React.ReactNode;
}

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState<string>("overview");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const sections: PrivacySection[] = [
    {
      id: "overview",
      number: "1",
      title: "Introduction & Scope of this Privacy Policy",
      summary:
        "This Privacy Policy explains how Nearspot collects, uses, protects, and discloses your personal information when you use our mobile apps, website, merchant consoles, and parking telemetry services.",
      content: (
        <div className="space-y-4">
          <p>
            At <strong>Nearspot</strong> (&ldquo;<strong>we</strong>&rdquo;, &ldquo;<strong>us</strong>&rdquo;, &ldquo;<strong>our</strong>&rdquo;, operated by <strong>[Company Legal Name]</strong>), we take your privacy and the stewardship of your personal information seriously. This Privacy Policy governs your use of the Nearspot website, mobile applications, parking slot reservation interfaces, social media discovery feeds, and merchant management consoles (collectively, the &ldquo;<strong>Platform</strong>&rdquo; or &ldquo;<strong>Services</strong>&rdquo;).
          </p>
          <p>
            <strong>Effective Date:</strong> This Privacy Policy is effective as of <strong>[Effective Date]</strong> and applies to all users worldwide, including registered customers, guest visitors, and verified Business Partners.
          </p>
          <div className="p-4 rounded-xl bg-indigo-50/80 border border-indigo-200 text-indigo-900 text-sm space-y-1">
            <p className="font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              Our Core Privacy Promise
            </p>
            <p className="text-xs text-indigo-800 leading-relaxed">
              Nearspot exists to connect you with vibrant local businesses and streamline real-time parking. <strong>We do not sell your personal information or your precise geolocation coordinates to third-party data brokers.</strong> Telemetry data is utilized strictly to provide real-time navigation, verify slot availability, and execute confirmed reservations.
            </p>
          </div>
          <p>
            By downloading, accessing, or using Nearspot, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with our data handling practices, please discontinue use of our Services.
          </p>
        </div>
      ),
    },
    {
      id: "data-collection",
      number: "2",
      title: "Information We Collect",
      summary:
        "We collect information you give us directly (profile details, vehicle license plates for parking), location data (to show nearby deals and available stalls), and technical usage telemetry.",
      content: (
        <div className="space-y-4">
          <p>
            Depending on how you interact with Nearspot, we collect personal information across the following categories:
          </p>
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
              <h5 className="font-bold text-slate-900 text-xs flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-indigo-600" /> 1. Information You Provide Directly
              </h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>Account Details:</strong> Full name, email address, mobile telephone number, profile photograph, and account credentials.
                <br />
                <strong>Vehicle Information:</strong> Make, model, vehicle class, and license plate number (required to enable automated barrier gate entry and automated parking verification).
                <br />
                <strong>Social & Community Submissions:</strong> Reviews, ratings, comments, direct queries to local merchants, and multimedia content (photos or reels) shared on neighborhood venue feeds.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
              <h5 className="font-bold text-slate-900 text-xs flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-600" /> 2. Real-Time Geolocation & Proximity Data
              </h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                With your explicit permission, we collect precise GPS coordinates and altitude data from your mobile device while the app is active (and in the background if turn-by-turn parking navigation or geofenced flash deal alerts are enabled). You can modify or revoke location tracking at any time in your device settings.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
              <h5 className="font-bold text-slate-900 text-xs flex items-center gap-2">
                <Car className="w-4 h-4 text-emerald-600" /> 3. IoT Parking Telemetry & Camera Sensor Data
              </h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                When you enter, occupy, or exit a parking lot integrated with Nearspot, our smart cameras (Automatic Number Plate Recognition / ANPR) and ultrasonic/magnetic sensors record entry timestamps, bay occupancy status, and exit times to compute exact parking duration and open barrier arms.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
              <h5 className="font-bold text-slate-900 text-xs flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-amber-600" /> 4. Transactional & Payment Information
              </h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                Payment card transactions are tokenized and processed directly by PCI-DSS Level 1 certified payment gateways (e.g., Stripe). Nearspot does not store raw credit card numbers or CVV codes on our servers; we retain only payment tokens, transaction IDs, timestamps, and billing addresses.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
              <h5 className="font-bold text-slate-900 text-xs flex items-center gap-2">
                <Database className="w-4 h-4 text-purple-600" /> 5. Automated Device & Technical Logs
              </h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                IP address, device hardware model, operating system version, unique device identifiers (IDFA/GAID), mobile network operator, browser type, crash diagnostic logs, and platform interaction metrics.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "data-usage",
      number: "3",
      title: "How We Use Your Information (Legal Bases & Purposes)",
      summary:
        "We use your data to fulfill your reservations, guide you to open parking spaces, present neighborhood deals, detect fraud, and ensure platform security.",
      content: (
        <div className="space-y-4">
          <p>
            We process your personal information under established legal bases under applicable data protection laws (such as GDPR Art. 6 and CCPA/CPRA regulations):
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-100 text-slate-700 font-bold">
                <tr>
                  <th className="p-3 border-b border-slate-200">Purpose / Activity</th>
                  <th className="p-3 border-b border-slate-200">Data Utilized</th>
                  <th className="p-3 border-b border-slate-200">Legal Basis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-600">
                <tr>
                  <td className="p-3 font-medium text-slate-900">
                    Executing parking holds, table reservations & appointments
                  </td>
                  <td className="p-3">Name, phone, vehicle plate, payment token</td>
                  <td className="p-3 font-semibold text-indigo-600">Performance of Contract</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-slate-900">
                    Real-time parking vacancy routing & neighborhood discovery
                  </td>
                  <td className="p-3">Precise GPS coordinates, distance telemetry</td>
                  <td className="p-3 font-semibold text-indigo-600">Consent (device permissions)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-slate-900">
                    Automated gate entry via License Plate Recognition (LPR)
                  </td>
                  <td className="p-3">Plate number, entrance timestamp, gate camera capture</td>
                  <td className="p-3 font-semibold text-indigo-600">Contractual Performance / Legitimate Interest</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-slate-900">
                    Fraud prevention, no-show deterrence & platform security
                  </td>
                  <td className="p-3">IP address, transaction patterns, device ID</td>
                  <td className="p-3 font-semibold text-indigo-600">Legitimate Interest / Legal Duty</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-slate-900">
                    Transactional notifications & SMS arrival reminders
                  </td>
                  <td className="p-3">Phone number, email address</td>
                  <td className="p-3 font-semibold text-indigo-600">Contractual Performance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: "data-sharing",
      number: "4",
      title: "How We Share Your Information",
      summary:
        "We share only necessary booking details with the specific merchant or parking lot you book with. We do not sell your personal information.",
      content: (
        <div className="space-y-4">
          <p>
            Nearspot does not sell, rent, or monetize your personal data. We disclose your information only in the limited, operationally necessary circumstances described below:
          </p>
          <ul className="list-disc pl-5 space-y-2.5 text-slate-700 text-xs sm:text-sm">
            <li>
              <strong>With Local Business Partners:</strong> When you book a table, schedule a service appointment, or claim an exclusive voucher, we transmit your name, contact phone number, party size, and booking time to the merchant so they can prepare for your visit.
            </li>
            <li>
              <strong>With Parking Facility Operators & Barrier Gate Systems:</strong> When reserving a parking bay, your vehicle license plate and reservation window are transmitted to the host garage&rsquo;s automated barrier gate or valet terminal for frictionless, ticketless access.
            </li>
            <li>
              <strong>With Trusted Service Providers:</strong> We engage certified infrastructure vendors who process data strictly under our direction and bound by confidential data processing agreements (DPAs):
              <span className="block text-xs text-slate-500 mt-1 pl-2">
                • Cloud hosting and database infrastructure (e.g., AWS, Google Cloud)
                <br />
                • Mapping & navigation APIs (e.g., Mapbox, Google Maps API)
                <br />
                • Payment gateways (PCI-DSS compliant processors)
                <br />
                • SMS & push notification dispatchers (e.g., Twilio)
              </span>
            </li>
            <li>
              <strong>For Legal Compliance & Safety:</strong> We may disclose information if required by a valid subpoena, court order, or governmental law enforcement inquiry in <strong>[Jurisdiction/Country]</strong>, or to protect the physical safety of motorists and platform participants.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "location-telemetry",
      number: "5",
      title: "Geolocation & Parking Sensor Telemetry Specifics",
      summary:
        "Detailed explanation of our real-time GPS tracking, geofenced flash deals, and automated camera/sensor technology at parking lots.",
      content: (
        <div className="space-y-4">
          <p>
            Because Nearspot provides real-time physical space logistics, transparency regarding our geolocation architecture is paramount:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <MapPin className="w-4 h-4 text-indigo-600" />
                <span>Geofencing & Proximity Offers</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                When you enter within a 2-mile radius of participating venues during active flash sales, Nearspot sends localized push notifications if enabled. Your continuous path history is not archived or sold.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <Car className="w-4 h-4 text-emerald-600" />
                <span>Automated Plate Recognition (ANPR)</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Integrated lot cameras capture images of vehicle license plates strictly at entry and exit gates. These images are automatically cross-checked against your active reservation and purged in accordance with our retention policy.
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-600">
            <strong>Revoking Geolocation Access:</strong> You can disable location tracking at any time in your iOS or Android settings. Please note that disabling location will prevent Nearspot from displaying real-time stall distance, turn-by-turn garage navigation, or nearby flash offers.
          </p>
        </div>
      ),
    },
    {
      id: "cookies-tracking",
      number: "6",
      title: "Cookies, Local Storage & Tracking Technologies",
      summary:
        "We use essential cookies to keep you signed in, remember your preferences, and track aggregate website performance.",
      content: (
        <div className="space-y-4">
          <p>
            We use cookies, web beacons, and local storage tokens (&ldquo;<strong>Cookies</strong>&rdquo;) on our website and web applications:
          </p>
          <div className="space-y-2 text-xs text-slate-700">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900 block">Strictly Necessary Cookies:</span>
              <span>Essential for authentication, session integrity, CSRF security, and processing reservation checkouts.</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900 block">Preference & Functional Cookies:</span>
              <span>Remember your selected city, vehicle preferences (EV/Standard), and language preferences.</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900 block">Performance & Diagnostic Analytics:</span>
              <span>Help us understand user interaction, page load speeds, and optimize parking slot map rendering.</span>
            </div>
          </div>
          <p className="text-xs text-slate-600">
            You can configure your browser to reject all non-essential cookies. However, disabling certain cookies may impact the interactivity of our reservation calendars and interactive maps.
          </p>
        </div>
      ),
    },
    {
      id: "data-retention",
      number: "7",
      title: "Data Retention & Automatic Purge Schedules",
      summary:
        "We retain personal data only as long as necessary. Parking camera logs are purged on rolling cycles; financial records are held in line with tax laws.",
      content: (
        <div className="space-y-4">
          <p>
            Nearspot adheres to strict data minimization principles. We keep your information only as long as needed to satisfy the operational purposes for which it was gathered:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
            <li>
              <strong>Active Account Information:</strong> Stored for the lifetime of your Nearspot account. If you delete your account, personal identifiers are permanently scrubbed within thirty (30) days.
            </li>
            <li>
              <strong>Parking Camera Captures & Telemetry Logs:</strong> Automated number plate captures and gate sensor logs are purged on a rolling <strong>30-day schedule</strong>, unless retained longer for unresolved dispute resolution, overstay claims, or active police investigations.
            </li>
            <li>
              <strong>Financial & Invoicing Records:</strong> Transaction receipts, booking invoices, and VAT/tax records are archived for up to seven (7) years to comply with statutory accounting and tax regulations in <strong>[Jurisdiction/Country]</strong>.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "security-safeguards",
      number: "8",
      title: "Information Security & Storage Safeguards",
      summary:
        "We implement industry-standard encryption, firewalls, and role-based access control to keep your personal data and vehicle telemetry safe.",
      content: (
        <div className="space-y-4">
          <p>
            We implement comprehensive technical, administrative, and physical security measures designed to safeguard your information against unauthorized access, loss, or alteration:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
              <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-indigo-600" /> Encryption in Transit
              </span>
              <p className="text-slate-600">
                All data transmitted between your device, parking gates, and Nearspot servers is encrypted using modern TLS 1.3 protocols.
              </p>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
              <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-emerald-600" /> Encryption at Rest
              </span>
              <p className="text-slate-600">
                Databases containing vehicle plates, passwords, and user records are encrypted with AES-256 standard encryption.
              </p>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
              <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                <Key className="w-3.5 h-3.5 text-amber-600" /> Least-Privilege Access
              </span>
              <p className="text-slate-600">
                Strict multi-factor authentication (MFA) and role-based access limit internal staff access to personal customer records.
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500">
            While we apply robust defenses, no system or wireless transmission is 100% impenetrable. If you suspect an account compromise, contact our team immediately at <span className="font-mono text-indigo-600">[Contact Email]</span>.
          </p>
        </div>
      ),
    },
    {
      id: "your-rights",
      number: "9",
      title: "Your Privacy Rights & Choices (GDPR, CCPA & Global)",
      summary:
        "You have the right to access, correct, export, or delete your personal data at any time. You can also opt out of marketing communications.",
      content: (
        <div className="space-y-4">
          <p>
            Depending on your jurisdiction of residence (including the European Economic Area, United Kingdom, California, and other states/nations), you possess statutory privacy rights:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-indigo-600" /> Right to Know & Access
              </span>
              <p className="text-slate-600">
                Request a copy of the personal information we hold about you, including your reservation history and registered vehicles.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                <Trash2 className="w-3.5 h-3.5 text-rose-600" /> Right to Erasure (&ldquo;To Be Forgotten&rdquo;)
              </span>
              <p className="text-slate-600">
                Request permanent deletion of your account, vehicle license plate history, and profile data, subject to legal recordkeeping duties.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-emerald-600" /> Right to Rectification & Portability
              </span>
              <p className="text-slate-600">
                Correct inaccurate information or receive your booking data in a structured, machine-readable format (JSON/CSV).
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                <Bell className="w-3.5 h-3.5 text-amber-600" /> Right to Opt Out of Marketing
              </span>
              <p className="text-slate-600">
                Unsubscribe from promotional emails or disable geofenced deal push notifications directly through your account preferences.
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-600">
            <strong>How to Exercise Your Rights:</strong> Submit a verified request to our privacy desk at <span className="font-mono text-indigo-600">[Privacy Contact / DPO Email]</span>. We do not charge fees for reasonable requests and respond within statutory deadlines (usually thirty [30] days).
          </p>
        </div>
      ),
    },
    {
      id: "children-privacy",
      number: "10",
      title: "Children’s Privacy",
      summary:
        "Nearspot is not intended for or directed at children under the age of 18 (or 13/16 where applicable). We do not knowingly collect information from minors.",
      content: (
        <div className="space-y-4">
          <p>
            Our Services, including vehicle parking reservations and commercial appointments, are strictly restricted to individuals of legal majority (at least 18 years of age, or 16/13 where permitted by local laws with parental guardian authorization).
          </p>
          <p>
            We do not knowingly solicit or collect personal information from children under eighteen (18). If we learn that we have inadvertently collected data from a minor without verified parental consent, we will promptly delete that information from our servers. Parents or guardians who believe a child has provided us data may contact us at <span className="font-mono text-indigo-600">[Contact Email]</span>.
          </p>
        </div>
      ),
    },
    {
      id: "international-transfers",
      number: "11",
      title: "International Data Transfers",
      summary:
        "If you access Nearspot from outside our primary operating jurisdiction, your data may be processed in servers located in [Jurisdiction/Country] under Standard Contractual Clauses.",
      content: (
        <div className="space-y-4">
          <p>
            Nearspot operates servers and technical infrastructure primarily situated in <strong>[Jurisdiction/Country]</strong>. If you access the Platform from the European Economic Area (EEA), United Kingdom, Switzerland, or other regions with laws governing data collection, your information may be transferred to, stored, and processed in jurisdictions that have different data protection standards than your home country.
          </p>
          <p>
            Whenever we transfer personal information internationally, we ensure appropriate legal safeguards are in place, including European Commission-approved <strong>Standard Contractual Clauses (SCCs)</strong>, ensuring your data receives equivalent protection wherever processed.
          </p>
        </div>
      ),
    },
    {
      id: "policy-changes",
      number: "12",
      title: "Updates to this Privacy Policy",
      summary:
        "We may revise this policy periodically. We will notify you of material changes by updating the effective date and providing in-app notifications.",
      content: (
        <div className="space-y-4">
          <p>
            We may revise this Privacy Policy from time to time to reflect modifications in our parking telemetry systems, emerging features, legal obligations, or operational practices.
          </p>
          <p>
            When material changes occur, we will notify you by revising the &ldquo;Effective Date&rdquo; at the top of this document, sending an email notice to your registered email address, or displaying a prominent banner within the Nearspot app. We encourage you to review this page periodically. Continued use of Nearspot after the effective date of revisions constitutes your acknowledgment of the updated policy.
          </p>
        </div>
      ),
    },
    {
      id: "contact-dpo",
      number: "13",
      title: "Contact Us & Data Protection Officer (DPO)",
      summary:
        "Contact our dedicated Data Protection Officer or compliance desk with any questions, data subject requests, or regulatory inquiries.",
      content: (
        <div className="space-y-4">
          <p>
            If you have questions, complaints, feedback, or wish to exercise any of your statutory data rights, please contact our Data Protection Officer and compliance team:
          </p>
          <div className="p-6 rounded-2xl bg-slate-100 border border-slate-200 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Building className="w-4 h-4 text-indigo-600" />
              Nearspot Privacy & Data Governance Office
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              <div>
                <span className="font-semibold block text-slate-900">Legal Entity:</span>
                <span className="font-mono bg-white px-2 py-0.5 rounded border border-slate-200 inline-block mt-0.5">
                  [Company Legal Name]
                </span>
              </div>
              <div>
                <span className="font-semibold block text-slate-900">Dedicated Privacy Email:</span>
                <span className="font-mono bg-white px-2 py-0.5 rounded border border-slate-200 inline-block mt-0.5">
                  [Privacy Contact / DPO Email]
                </span>
              </div>
              <div>
                <span className="font-semibold block text-slate-900">General Support Email:</span>
                <span className="font-mono bg-white px-2 py-0.5 rounded border border-slate-200 inline-block mt-0.5">
                  [Contact Email]
                </span>
              </div>
              <div>
                <span className="font-semibold block text-slate-900">Mailing Address:</span>
                <span className="font-mono bg-white px-2 py-0.5 rounded border border-slate-200 inline-block mt-0.5">
                  [Mailing Address]
                </span>
              </div>
              <div>
                <span className="font-semibold block text-slate-900">Primary Jurisdiction:</span>
                <span className="font-mono bg-white px-2 py-0.5 rounded border border-slate-200 inline-block mt-0.5">
                  [Jurisdiction/Country]
                </span>
              </div>
              <div>
                <span className="font-semibold block text-slate-900">Regulatory Supervisory Authority:</span>
                <span>Data Protection Commissioner / Information Commissioner Office</span>
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
      const url = `${window.location.origin}/privacy#${id}`;
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
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-4">
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-800 font-semibold">Legal</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-indigo-600 font-medium">Privacy Policy</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Privacy & Data Protection Standards</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                Nearspot Privacy Policy
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Learn how Nearspot collects, handles, safeguards, and respects your personal data, real-time geolocation, vehicle license plates, and booking history.
              </p>
            </div>

            {/* Document metadata card */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 shrink-0 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-500">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Effective Date:</span>
                <span className="font-bold text-slate-800">[Effective Date]</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <Building className="w-3.5 h-3.5 text-emerald-600" />
                <span>Data Controller:</span>
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
                  href="/terms"
                  className="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold rounded-lg border border-indigo-200 flex items-center gap-1.5 transition-all"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Terms of Service
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
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Privacy Sections
                </h3>
                <span className="text-[11px] font-mono text-slate-400">
                  {sections.length} Topics
                </span>
              </div>

              {/* Quick Search */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter privacy topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
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
                          ? "bg-emerald-50 text-emerald-950 font-bold shadow-xs border-l-4 border-emerald-600"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <span
                        className={`text-[11px] font-mono px-1.5 py-0.5 rounded ${
                          isActive
                            ? "bg-emerald-600 text-white"
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
                    No matching topics found.
                  </p>
                )}
              </nav>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
                <p className="flex items-center gap-1 font-semibold text-slate-700">
                  <Info className="w-3.5 h-3.5 text-emerald-600" />
                  Dual-Layer Transparency:
                </p>
                <p>
                  Each section features an <strong>In Plain English</strong> breakdown next to formal legal provisions.
                </p>
              </div>
            </div>

            {/* DPO Contact Card */}
            <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white rounded-2xl p-5 shadow-md space-y-3">
              <h4 className="font-bold text-sm flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-400" /> Data Protection Officer (DPO)
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Have questions about your vehicle plate data, location permissions, or want to submit an official GDPR/CCPA data deletion request?
              </p>
              <div className="pt-1">
                <a
                  href="mailto:[Privacy Contact / DPO Email]"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-300 hover:underline"
                >
                  <span>[Privacy Contact / DPO Email]</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </aside>

          {/* MAIN PRIVACY CONTENT */}
          <main className="lg:col-span-8 space-y-12">
            {sections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-sm scroll-mt-24 space-y-6"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-sm">
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
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 text-emerald-950 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-600 text-white">
                      In Plain English
                    </span>
                    <span className="text-xs font-bold text-emerald-900">
                      Summary for Users & Business Owners
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-900/90 leading-relaxed font-medium">
                    {section.summary}
                  </p>
                </div>

                {/* Formal Legal Content */}
                <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-4">
                  {section.content}
                </div>
              </article>
            ))}

            {/* Return to top */}
            <div className="text-center pt-4">
              <a
                href="#overview"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-emerald-600 font-semibold text-xs shadow-sm transition-all"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Return to top of Privacy Policy</span>
              </a>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
