import { LeaderCompany, SolutionInfo, SolutionType, NetworkNode, ErpModuleData, ProjectWork, Testimonial, PricingPlan, FaqItem } from '../types';

export const LOGO_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuBNXCKZngDeDKxhzYD7mjejWbPYtvHqmfSpksfC5aXEINtpDufEeQLR15K7iMneKBjcyiXvoB5x9qSVjZDyTeF1RinkOKrZAjjnWpZQTiS0LUHRK7fx9UEWnltK-ochmPbLgEdzhchc740ckIJ1gcNxogPGxQUGUAwNN6g-5ef5XoWdXynVISkx6zjC5Ayzz4VV1TUzFVV_F1EuB7-VdeqesqAEbPwOoKbhYw5HUd1_HRVAR7fPAaU";

export const DASHBOARD_3D_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDw0-hlXQgfv6C-o8AsLYddmMqmc_wfENQKuPTtMw3Q1xj4L1Da_HwWnBBUgPkEpq53EnJ36yYwpXBJV_AVHh8GNqNuBXFV_BgfxFXQgIRnqGOTh9WIhL2hIe3bpqKsJ3_xW15n-axWML4z3p-8-E5di5Fy-eisKHlfXXy7Fi27li6MTc5K_NwCdz51mtLA3LNAglGAHa0q8cZFFOCc8nPmjNAv1SVJeeRkabBexpp5HJPa-Dlm7vE";

export const LEADERS_DATA: LeaderCompany[] = [
  {
    id: 'kmf-nandini',
    name: 'KMF NANDINI',
    logoText: 'NANDINI',
    fontStyle: 'font-extrabold tracking-wider text-[#005338]',
    description: 'Automated POS telemetry and cold-chain supply distribution ERP across 14 district milk unions in Karnataka.',
    metrics: '₹1,200 Cr Daily Settlement • 100% Audit Precision',
    industry: 'Dairy & Agriculture Federation',
  },
  {
    id: 'manipal',
    name: 'MANIPAL',
    logoText: 'MANIPAL',
    fontStyle: 'font-bold tracking-widest text-[#3525cd]',
    description: 'Unified campus administration, NEP 2020 grading, and student portal for 35,000+ students in Manipal & Bengaluru.',
    metrics: 'sub-0.3s Result Portal Load • 100% Online Fee Collection',
    industry: 'Higher Education & Hospitals',
  },
  {
    id: 'titan',
    name: 'TITAN',
    logoText: 'TITAN',
    fontStyle: 'font-light tracking-[0.3em] uppercase',
    description: 'Cloud showroom booking & warranty verification engines engineered at Electronic City campus.',
    metrics: '450+ Karnataka Outlets • 12M Annual Scan Tokens',
    industry: 'Precision Retail & Eyewear',
  },
  {
    id: 'nps',
    name: 'NPS GROUP',
    logoText: 'NPS',
    fontStyle: 'font-serif font-black text-[28px]',
    description: 'End-to-end K-12 ERP covering automated timetable generation, CBSE/ICSE marksheets & parent app broadcasts.',
    metrics: '28 Campuses • 45,000 Parents Connected',
    industry: 'K-12 School Network',
  },
  {
    id: 'canara',
    name: 'CANARA BANK',
    logoText: 'CANARA',
    fontStyle: 'font-extrabold uppercase tracking-tight text-[#3525cd]',
    description: 'Digital fee collection portal integration and automated scholar fund disbursements across Karnataka institutions.',
    metrics: '₹480 Cr Fee Disbursed • ISO 27001 Certified',
    industry: 'Banking & Financial Tech',
  },
  {
    id: 'tvs',
    name: 'TVS MOTOR',
    logoText: 'TVS',
    fontStyle: 'font-black italic tracking-tighter text-[#0b1c30]',
    description: 'Dealer service appointment scheduling and spare parts inventory web app for Karnataka dealerships.',
    metrics: '120 Karnataka Service Hubs • 0.1s Booking Sync',
    industry: 'Automotive & Mobility',
  },
];

export const SOLUTIONS_DATA: Record<SolutionType, SolutionInfo> = {
  'school-erp': {
    id: 'school-erp',
    title: 'Karnataka School ERP (Vidya Engine)',
    category: 'Karnataka Education Administration',
    description: 'Specialized for Karnataka State Board (KSEEB), CBSE, and ICSE schools. Built-in NEP 2020 CCE grading, Razorpay UPI fee collection, and Kannada/English SMS alerts.',
    icon: 'school',
    color: '#3525cd',
    bgLight: 'rgba(53, 37, 205, 0.08)',
    accentColor: 'text-[#3525cd]',
    badgeColor: 'bg-[#3525cd]/10 text-[#3525cd]',
    features: [
      'NEP 2020 Aligned Multilingual Report Cards (English & Kannada)',
      'Automated Biometric & RFID Student Attendance with Parent WhatsApp Sync',
      'Razorpay, PhonePe & PayU Integrated Online Fee Engine with Auto-GST Receipts',
      'KSEEB / CBSE Exam Management, Hall Tickets & Instant Marksheet Generator',
      'GPS School Bus Live Tracking for Bengaluru & Karnataka Traffic Routes'
    ],
    modules: [
      { name: 'Vidya SIS (Student Information System)', desc: 'Complete 360-degree digital profile, Aadhaar integration & academic history.' },
      { name: 'Fee & GST Ledger Engine', desc: 'Custom fee slabs, term-wise instalments, auto SMS reminders & tally export.' },
      { name: 'AI Timetable Generator', desc: 'Karnataka State syllabus class & substitute teacher scheduler.' },
      { name: 'Parent-Teacher App (Kannada/English)', desc: 'Instant homework, fee receipts, circular broadcasts & bus GPS tracking.' }
    ],
    startingPrice: '₹4,999 / month'
  },
  'web-dev': {
    id: 'web-dev',
    title: 'High-Speed Web Development',
    category: 'Digital Experience & E-Commerce',
    description: 'Custom React & Vite architectures hosted on Bengaluru edge servers. Ultra-fast page speeds, localized SEO, and WhatsApp business chat integration.',
    icon: 'language',
    color: '#855300',
    bgLight: 'rgba(254, 166, 25, 0.12)',
    accentColor: 'text-[#855300]',
    badgeColor: 'bg-[#fea619]/20 text-[#855300]',
    features: [
      'Sub-20ms TTFB Page Speeds via Bengaluru Electronic City Edge CDN',
      'WhatsApp Business Floating Chat & Instant Order Lead Forms',
      'Integrated Indian Payment Gateways (Razorpay, Cashfree, BHIM UPI)',
      'Localized Karnataka SEO, Schema Markup & Google My Business Integration',
      'Enterprise Web Application Firewall with SSL & DDoS Protection'
    ],
    modules: [
      { name: 'Brand Design & Kannada UI Kit', desc: 'Custom typography, responsive color themes & localized UI components.' },
      { name: 'High-Converting Landing Pages', desc: 'Optimized for local Indian leads with instant phone call & WhatsApp CTA.' },
      { name: 'Headless E-Commerce Integration', desc: 'Fast checkout with UPI QR codes, PIN code delivery checker & COD support.' },
      { name: 'Content Management Portal', desc: 'Empower staff to publish updates, notices, and blogs easily.' }
    ],
    startingPrice: '₹24,999 one-time setup'
  },
  'business-services': {
    id: 'business-services',
    title: 'Business POS & Operations Suite',
    category: 'Retail, Restaurant & Salon Tech',
    description: 'Cloud POS engineered for South Indian restaurants, Darshinis, retail outlets, and salons. GST auto-invoicing, inventory control, and kitchen display systems (KDS).',
    icon: 'storefront',
    color: '#005338',
    bgLight: 'rgba(0, 110, 75, 0.1)',
    accentColor: 'text-[#005338]',
    badgeColor: 'bg-[#006e4b]/15 text-[#005338]',
    features: [
      '3-Tap Express Billing Cloud POS for Quick-Service Darshinis & Retail',
      'Automated GST Tax Invoicing (CGST/SGST) & E-Way Bill Generation',
      'Kitchen Display System (KDS) & Handheld Captain Billing Tablets',
      'Ingredient-Level Inventory Tracking & Low-Stock WhatsApp Alerts',
      'Customer Loyalty Points & Automated Birthday Discount Offers'
    ],
    modules: [
      { name: 'Omnichannel POS System', desc: 'Fast thermal printer integration, UPI QR code displays & Zomato/Swiggy sync.' },
      { name: 'Smart Booking Calendar', desc: 'Self-service client appointment portal for salons & diagnostic labs.' },
      { name: 'Raw Material Recipe Manager', desc: 'Track ingredient usage per dish (e.g. coffee beans, ghee, rice stock).' },
      { name: 'Multi-Branch Ledger CRM', desc: 'Consolidated sales reports across Indiranagar, Koramangala & Mysuru outlets.' }
    ],
    startingPrice: '₹2,999 / month'
  }
};

export const GLOBAL_NETWORK_NODES: NetworkNode[] = [
  { id: 'blr-ecity', city: 'Bengaluru (Electronic City)', country: 'India', latency: 0.4, status: 'optimal', servers: 256, coordinates: { x: 42, y: 55 } },
  { id: 'blr-[#3525cd]', city: 'Bengaluru (Devanahalli)', country: 'India', latency: 0.5, status: 'optimal', servers: 192, coordinates: { x: 46, y: 50 } },
  { id: 'mys-hebbal', city: 'Mysuru (Hebbal Cyber Hub)', country: 'India', latency: 0.8, status: 'optimal', servers: 128, coordinates: { x: 38, y: 62 } },
  { id: 'mng-coastal', city: 'Mangaluru (Coastal Tech PoP)', country: 'India', latency: 1.1, status: 'optimal', servers: 96, coordinates: { x: 28, y: 58 } },
  { id: 'hbl-dharwad', city: 'Hubballi-Dharwad (IIT Hub)', country: 'India', latency: 1.3, status: 'optimal', servers: 80, coordinates: { x: 32, y: 40 } },
  { id: 'blg-gateway', city: 'Belagavi (Enterprise Node)', country: 'India', latency: 1.4, status: 'good', servers: 64, coordinates: { x: 26, y: 32 } },
  { id: 'maa-chennai', city: 'Chennai (Express Highway)', country: 'India', latency: 1.8, status: 'optimal', servers: 140, coordinates: { x: 62, y: 56 } },
  { id: 'hyd-hitec', city: 'Hyderabad (HITEC City)', country: 'India', latency: 2.1, status: 'optimal', servers: 160, coordinates: { x: 52, y: 38 } },
];

export const ERP_PREVIEW_MODULES: Record<string, ErpModuleData> = {
  school: {
    id: 'school',
    title: 'Karnataka Vidya ERP Suite',
    metricLabel: 'ENROLLED KARNATAKA STUDENTS',
    metricValue: '1,84,520',
    growth: '+28.4% YoY Expansion',
    chartData: [
      { label: 'Q1 2024', value: 45000 },
      { label: 'Q2 2024', value: 78000 },
      { label: 'Q3 2024', value: 112000 },
      { label: 'Q4 2024', value: 145000 },
      { label: 'Q1 2025', value: 184520 },
    ],
    quickActions: ['Enrol Student (Aadhaar)', 'Generate Term Fee QR Code', 'Send WhatsApp Circular (Kannada)'],
    stats: [
      { label: 'Active Campuses', value: '248' },
      { label: 'Staff Attendance', value: '99.2%' },
      { label: 'UPI Fee Collected', value: '₹18.4 Cr' },
    ]
  },
  web: {
    id: 'web',
    title: 'Karnataka Edge CDN & Traffic Engine',
    metricLabel: 'MONTHLY KARNATAKA VISITORS',
    metricValue: '3.82M',
    growth: '+42.5% TTFB Speed Gain',
    chartData: [
      { label: 'Jan', value: 820000 },
      { label: 'Feb', value: 1450000 },
      { label: 'Mar', value: 2100000 },
      { label: 'Apr', value: 3100000 },
      { label: 'May', value: 3820000 },
    ],
    quickActions: ['Purge Electronic City Cache', 'Deploy Festival Offer Page', 'Run GST Portal Check'],
    stats: [
      { label: 'Edge TTFB', value: '12ms' },
      { label: 'PageSpeed Score', value: '99/100' },
      { label: 'Uptime SLA', value: '100%' },
    ]
  },
  business: {
    id: 'business',
    title: 'Business Cloud POS & GST Ledger',
    metricLabel: 'MONTHLY REVENUE PROCESSED',
    metricValue: '₹14.85 Crores',
    growth: '+31.2% Margin Efficiency',
    chartData: [
      { label: 'Week 1', value: 32000000 },
      { label: 'Week 2', value: 36500000 },
      { label: 'Week 3', value: 39000000 },
      { label: 'Week 4', value: 41000000 },
    ],
    quickActions: ['3-Tap Express Billing', 'Raw Material Stock Audit', 'Export GSTR-1 Ledger'],
    stats: [
      { label: 'Active POS Terminals', value: '420' },
      { label: 'Avg Darshini Time', value: '45 sec' },
      { label: 'Repeat UPI Customers', value: '74%' },
    ]
  }
};

export const FEATURED_PROJECTS: ProjectWork[] = [
  {
    id: 'work-1',
    title: 'Unified District School ERP & State Board Sync',
    client: 'Sri Jayachamarajendra Education Trust',
    location: 'Mysuru & Mandya, Karnataka',
    category: 'School ERP',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    description: 'Digitized 18 K-12 campuses with NEP 2020 CCE grade cards, RFID gate attendance, and Razorpay UPI fee collection. Parents receive automated fee receipts and report cards in Kannada via WhatsApp.',
    tags: ['NEP 2020', 'KSEEB Syllabus', 'Razorpay UPI', 'WhatsApp Bot'],
    impactMetric: '100% Fee Collection Efficiency • 24,000 Students'
  },
  {
    id: 'work-2',
    title: 'Namma Bengaluru Metro Retail & Kiosk POS Network',
    client: 'Bengaluru Transit Commercial Outlets',
    location: 'Namma Metro Green & Purple Lines',
    category: 'Retail & POS',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    description: 'High-speed cloud POS terminals deployed across 42 metro station food courts and beverage kiosks. Features 3-tap touch billing, dynamic UPI QR display, and offline transaction buffering.',
    tags: ['Express Billing', 'Dynamic UPI QR', 'Offline Sync', 'GST Tax Ledger'],
    impactMetric: '< 25 Sec Billing Speed • ₹4.2 Cr Monthly Sales'
  },
  {
    id: 'work-3',
    title: 'Mysuru Heritage Hotel Suite & Dining Reservation Engine',
    client: 'Royal Orchid & Heritage Stay Consortium',
    location: 'Mysuru, Karnataka',
    category: 'Web & Cloud',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    description: 'Sub-second luxury booking platform and banquet management system. Features interactive room tour, local currency processing, and automated GST invoice emailing.',
    tags: ['React Edge CDN', 'Fast Booking', 'GST Automation', 'Razorpay'],
    impactMetric: '+48% Direct Bookings • 99.8 PageSpeed'
  },
  {
    id: 'work-4',
    title: 'Electronic City Tech Park Employee Meal & Smart Card Portal',
    client: 'Bengaluru IT Corridor Food Courts',
    location: 'Electronic City Phase 1, Bengaluru',
    category: 'Retail & POS',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    description: 'Unified smart card RFID balance top-up and kitchen display system (KDS) handling 12,000 daily meals during peak tech office lunch hours.',
    tags: ['RFID Smart Card', 'Kitchen Display KDS', 'Swiggy/Zomato Aggregator'],
    impactMetric: '12,000 Meals Daily • 0 Waiting Queue Delay'
  },
  {
    id: 'work-5',
    title: 'Mangaluru Coastal Seafood Export & Logistics Web Portal',
    client: 'Karavali Marine Exporters Association',
    location: 'Mangaluru, Karnataka',
    category: 'Web & Cloud',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    description: 'Real-time cold-chain tracking portal, consignment certificate generator, and multilingual buyer dashboard built for global exporters in Dakshina Kannada.',
    tags: ['Cold-Chain Telemetry', 'Multilingual (Kannada/English)', 'PDF Invoice Generator'],
    impactMetric: '100% Export Document Compliance'
  },
  {
    id: 'work-6',
    title: 'Indiranagar & Koramangala Gourmet Bakery Cloud POS',
    client: 'Bengaluru Specialty Artisanal Bakers',
    location: 'Indiranagar & HSR Layout, Bengaluru',
    category: 'Retail & POS',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    description: 'Multi-outlet POS with live ingredient inventory tracking (flour, butter, cocoa batch numbers) and WhatsApp digital bill delivery reducing paper waste.',
    tags: ['Batch Tracking', 'WhatsApp e-Bill', 'Loyalty Points'],
    impactMetric: '65% Paper Savings • 4.9 Star Rating'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sri B.S. Vishwanath',
    role: 'Managing Trustee',
    organization: 'Sri Channabasaveshwara School Network',
    location: 'Mysuru, Karnataka',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'InfynLabs Vidya ERP completely transformed our 12 schools across Mysuru and Hassan. Generating NEP 2020 report cards and collecting term fees via UPI on WhatsApp has reduced our admin workload by 70%.',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Ananya Kulkarni',
    role: 'Vice President - Digital Transformation',
    organization: 'Indiranagar Hospitality Alliance',
    location: 'Bengaluru, Karnataka',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    quote: 'Our 18 restaurant locations in Koramangala and HSR Layout run smoothly on InfynLabs POS. The 3-tap billing speed and instant GSTR-1 tax compliance export saved us over 40 hours during monthly filing.',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Capt. Rajesh Shetty',
    role: 'Chief Technology Officer',
    organization: 'Coastal Infrastructure & Logistics',
    location: 'Mangaluru, Karnataka',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    quote: 'The website performance and sub-15ms edge CDN speed provided by InfynLabs impressed our global maritime partners. Their team understands Indian regulatory compliance and local business needs intimately.',
    rating: 5
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Vidya ERP Starter',
    description: 'Ideal for independent schools & single-location academies',
    monthlyPriceRupees: '4,999',
    annualDiscount: 'Save 20% on annual billing (₹3,999/mo)',
    popular: false,
    features: [
      'Up to 500 Active Students & 40 Staff',
      'NEP 2020 Compliant Marksheets & CCE Grading',
      'UPI & NetBanking Online Fee Collection (Razorpay)',
      'Automated Parent SMS Alerts (English & Kannada)',
      'Student Attendance & Leave Portal',
      'Email & Phone Support (Bengaluru Working Hours)'
    ],
    ctaText: 'Start 14-Day Free Trial'
  },
  {
    id: 'institutional-pro',
    name: 'Institutional Pro (NEP 2020)',
    description: 'Designed for growing school groups, colleges & campuses',
    monthlyPriceRupees: '12,499',
    annualDiscount: 'Save 20% on annual billing (₹9,999/mo)',
    popular: true,
    features: [
      'Up to 2,500 Students & Unlimited Staff',
      'Biometric & RFID Gate Attendance Sync',
      'WhatsApp Business API for Automated Circulars & e-Receipts',
      'Tally & GST Accountant Ledger Auto-Export',
      'GPS School Bus Live Location Tracking App',
      'AI Timetable Generator & Exam Seating Allocator',
      'Dedicated Account Manager in Bengaluru'
    ],
    ctaText: 'Deploy Institutional Pro'
  },
  {
    id: 'enterprise-custom',
    name: 'Enterprise Tech Suite',
    description: 'For university networks, retail chains & custom web platforms',
    monthlyPriceRupees: '29,999',
    annualDiscount: 'Custom SLAs & Multi-Campus Volume Discount',
    popular: false,
    features: [
      'Unlimited Campuses, Outlets & User Accounts',
      'Custom React/Vite Web Development + Dedicated Edge PoP',
      'Multi-Location Cloud POS with Kitchen Display Systems (KDS)',
      'Bank-Grade ISO 27001 & SOC2 Compliance Audit',
      'Custom API Integrations (Tally, ERPNext, Salesforce)',
      '24/7 Priority Emergency Support Line'
    ],
    ctaText: 'Talk to Solution Architect'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Is InfynLabs Vidya ERP compliant with Karnataka State Board (KSEEB) and NEP 2020?',
    answer: 'Yes, absolutely. Our Vidya ERP comes pre-configured with National Education Policy (NEP 2020) continuous evaluation standards, grading structures, and customizable marksheet formats approved for CBSE, ICSE, and Karnataka SSLC/State Board schools.',
    category: 'ERP & Board Sync'
  },
  {
    question: 'How does online fee collection work for parents in Karnataka?',
    answer: 'We integrate directly with RBI-approved payment gateways including Razorpay, PayU, and PhonePe. Parents can pay tuition and bus fees via BHIM UPI, Google Pay, Paytm, credit/debit cards, or NetBanking. Dynamic receipts and GST invoices are sent instantly to parents over WhatsApp.',
    category: 'Billing & UPI'
  },
  {
    question: 'Are Kannada language communications supported for circulars and parent notifications?',
    answer: 'Yes! All parent communication channels—including automated SMS, WhatsApp broadcasts, and mobile app notices—support full Unicode Kannada and English, ensuring every parent stays informed in their preferred language.',
    category: 'ERP & Board Sync'
  },
  {
    question: 'Where is our institutional data stored and hosted?',
    answer: 'All data is strictly hosted within Tier-4 Data Centres in India (Bengaluru Electronic City & Devanahalli). We comply 100% with Indian Data Protection laws (DPDP Act 2023) and ISO 27001 standards with daily encrypted backups.',
    category: 'Security & Cloud'
  },
  {
    question: 'Can InfynLabs POS generate GSTR-1 and GSTR-3B tax reports for our business?',
    answer: 'Yes! Our POS and business services suite automatically calculates CGST and SGST on every transaction and lets you export 1-click GST filing statements compatible with CA software like Tally Prime.',
    category: 'Billing & UPI'
  }
];
