export interface NavItem {
  label: string;
  id: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Specification {
  label: string;
  value: string;
  detail: string;
}

export interface SponsorTier {
  id: string;
  name: string;
  price: string;
  benefits: string[];
  color: string;
  highlight?: boolean;
  detailedDescription?: string;
  detailedBenefits?: string[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}