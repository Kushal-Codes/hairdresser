import {
  GALLERY_ITEMS,
  SERVICE_CATEGORIES,
  STYLIST_PROFILES,
  FAQ_ITEMS,
  type GalleryFilterCategory,
  type GalleryItem,
  type ServiceCategory,
  type FAQItem
} from '../data/salonData';

export const GALLERY_FILTER_CATEGORIES: GalleryFilterCategory[] = [
  'All',
  'Colour',
  'Balayage',
  'Blonde',
  'Brunette',
  'Cuts',
  'Styling',
  "Men's Hair",
  'Transformations'
];

export function filterGalleryItems(
  items: GalleryItem[],
  activeFilter: GalleryFilterCategory,
  stylistName?: string
): GalleryItem[] {
  return items.filter((item) => {
    const matchesCategory =
      activeFilter === 'All' || item.categories.includes(activeFilter);
    const matchesStylist =
      !stylistName ||
      stylistName === 'All' ||
      item.stylist.toLowerCase().includes(stylistName.toLowerCase());
    return matchesCategory && matchesStylist;
  });
}

export function getServiceCategoryBySlug(slug: string): ServiceCategory | undefined {
  return SERVICE_CATEGORIES.find((cat) => cat.slug === slug);
}

export function filterFAQsByCategory(
  items: FAQItem[],
  category: string,
  searchQuery = ''
): FAQItem[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();
  return items.filter((faq) => {
    const matchesCat = category === 'All' || faq.category === category;
    const matchesSearch =
      !normalizedQuery ||
      faq.question.toLowerCase().includes(normalizedQuery) ||
      faq.answer.toLowerCase().includes(normalizedQuery);
    return matchesCat && matchesSearch;
  });
}

export interface AppointmentEnquiryInput {
  clientName: string;
  clientPhone: string;
  preferredStylist: string;
  serviceCategory: string;
  preferredDays: string;
  notes: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof AppointmentEnquiryInput, string>>;
}

export function validateAppointmentEnquiry(
  input: AppointmentEnquiryInput
): ValidationResult {
  const errors: Partial<Record<keyof AppointmentEnquiryInput, string>> = {};

  if (!input.clientName || input.clientName.trim().length < 2) {
    errors.clientName = 'Please enter your name (at least 2 characters).';
  }

  const cleanedPhone = (input.clientPhone || '').replace(/[\s\-()]/g, '');
  if (!cleanedPhone || !/^(\+44|0)[0-9]{9,10}$/.test(cleanedPhone)) {
    errors.clientPhone =
      'Please enter a valid UK telephone or mobile number (e.g. 07700 900123 or 01244 319991).';
  }

  if (!input.serviceCategory || input.serviceCategory.trim().length === 0) {
    errors.serviceCategory = 'Please select the service you are enquiring about.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
}

export function formatEnquiryBrief(input: AppointmentEnquiryInput): string {
  const lines = [
    `Appointment Enquiry — THE HAIRDRESSERS (92 Boughton, Chester)`,
    `Client Name: ${input.clientName.trim()}`,
    `Callback Phone: ${input.clientPhone.trim()}`,
    `Service Requested: ${input.serviceCategory}`,
    `Preferred Stylist: ${input.preferredStylist || 'First Available Stylist'}`,
    `Preferred Days/Times: ${input.preferredDays.trim() || 'Flexible'}`,
  ];
  if (input.notes.trim()) {
    lines.push(`Hair Notes: ${input.notes.trim()}`);
  }
  return lines.join('\n');
}

export function getVerifiedStylistCount(): number {
  return STYLIST_PROFILES.length;
}

export function getTotalCataloguedServicesCount(): number {
  return SERVICE_CATEGORIES.reduce((acc, cat) => acc + cat.services.length, 0);
}
