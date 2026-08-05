export type SolutionType = 'school-erp' | 'web-dev' | 'business-services';

export interface LeaderCompany {
  id: string;
  name: string;
  logoText: string;
  fontStyle: string;
  description: string;
  metrics: string;
  industry: string;
}

export interface SolutionInfo {
  id: SolutionType;
  title: string;
  category: string;
  description: string;
  icon: string;
  color: string;
  bgLight: string;
  accentColor: string;
  badgeColor: string;
  features: string[];
  modules: { name: string; desc: string }[];
  startingPrice: string;
}

export interface NetworkNode {
  id: string;
  city: string;
  country: string;
  latency: number;
  status: 'optimal' | 'good' | 'maintenance';
  servers: number;
  coordinates: { x: number; y: number }; // percentage on map
}

export interface ProjectWork {
  id: string;
  title: string;
  client: string;
  location: string;
  category: 'School ERP' | 'Web & Cloud' | 'Retail & POS';
  image: string;
  description: string;
  tags: string[];
  impactMetric: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  location: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPriceRupees: string;
  annualDiscount: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'ERP & Board Sync' | 'Billing & UPI' | 'Security & Cloud';
}

export interface ErpModuleData {
  id: string;
  title: string;
  metricLabel: string;
  metricValue: string;
  growth: string;
  chartData: { label: string; value: number }[];
  quickActions: string[];
  stats: { label: string; value: string }[];
}

export type ModalType = 
  | null 
  | 'free-trial' 
  | 'book-demo' 
  | 'sign-in' 
  | 'solution-detail' 
  | 'network-map' 
  | 'leader-case-study';
