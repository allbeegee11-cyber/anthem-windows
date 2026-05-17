export interface EstimateRequest {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  serviceType: 'Residential' | 'Commercial' | 'Screen & Frame Detail';
  frequency: 'One-time' | 'Bi-annual' | 'Quarterly' | 'Bi-monthly' | 'Tri-annual' | 'Other';
  approximatePanes: number;
}

export const FREQUENCIES = [
  'One-time',
  'Bi-annual',
  'Quarterly',
  'Bi-monthly',
  'Tri-annual',
  'Other'
] as const;

export const SERVICES = [
  {
    id: 'residential',
    title: 'Residential Window Cleaning',
    description: 'Perfect for homes of all sizes. Includes screens and tracks.',
    basePrice: 120
  },
  {
    id: 'commercial',
    title: 'Commercial Business Cleaning',
    description: 'Professional appearance for your storefront or office.',
    basePrice: 180
  },
  {
    id: 'screen-frame',
    title: 'Screen & Frame Detail',
    description: 'Deep detailing for screens and frames. FREE on your first job!',
    basePrice: 150
  }
];
