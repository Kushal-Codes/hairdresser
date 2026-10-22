/**
 * Official Salon & Portfolio Data for:
 * THE HAIRDRESSERS · 92 Boughton, Chester, CH3 5AQ
 */

export interface BusinessDetails {
  name: string;
  shortLocation: string;
  tagline: string;
  secondaryTaglines: string[];
  address: {
    street: string;
    area: string;
    city: string;
    postcode: string;
    country: string;
    full: string;
  };
  phoneDisplay: string;
  phoneTel: string;
  social: {
    salonFacebook: string;
    salonFacebookLabel: string;
    jaimeleighInstagram: string;
    jaimeleighInstagramHandle: string;
    jaimeleighFacebookLabel: string;
    googleMapsDirectionsUrl: string;
    googleListingShareUrl: string;
    historicalWebsite: string;
  };
  hoursSummary: {
    statusNote: string;
    directoryHours: string;
    recommendation: string;
  };
}

export const BUSINESS_DETAILS: BusinessDetails = {
  name: 'THE HAIRDRESSERS',
  shortLocation: 'BOUGHTON · CHESTER',
  tagline: 'GOOD HAIR. GOOD FEELING.',
  secondaryTaglines: [
    'Your hair. Our favourite canvas.',
    'Colour, cut and a little confidence.',
    'Beautiful hair, beautifully done.',
    'Your next good hair day starts here.'
  ],
  address: {
    street: '92 Boughton',
    area: 'Boughton',
    city: 'Chester',
    postcode: 'CH3 5AQ',
    country: 'United Kingdom',
    full: '92 Boughton, Chester, CH3 5AQ, United Kingdom'
  },
  phoneDisplay: '01244 319991',
  phoneTel: 'tel:+441244319991',
  social: {
    salonFacebook: 'https://www.facebook.com/thehairdressersboughton/',
    salonFacebookLabel: 'The Hairdressers Boughton on Facebook',
    jaimeleighInstagram: 'https://www.instagram.com/jaimeleighrxhair/',
    jaimeleighInstagramHandle: 'Instagram',
    jaimeleighFacebookLabel: 'Instagram Portfolio',
    googleMapsDirectionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=92+Boughton,+Chester+CH3+5AQ,+UK',
    googleListingShareUrl: 'https://share.google/r2SkNiq8dxO36qPUg',
    historicalWebsite: 'http://www.thehairdresserschester.co.uk/'
  },
  hoursSummary: {
    statusNote:
      'Monday – Saturday: 9:00 AM – 7:00 PM (Appointment times vary by day and stylist diary).',
    directoryHours: '9:00 AM – 7:00 PM (By Appointment)',
    recommendation:
      'Including late afternoon and early evening colour slots by arrangement. Call 01244 319991 to check availability for your preferred day.'
  }
};

export type GalleryFilterCategory =
  | 'All'
  | 'Colour'
  | 'Balayage'
  | 'Blonde'
  | 'Brunette'
  | 'Cuts'
  | 'Styling'
  | "Men's Hair"
  | 'Transformations';

export interface GalleryItem {
  id: string;
  title: string;
  filename: string;
  imagePath: string;
  aspectRatio: '4:5' | '3:4' | '16:9' | '4:3';
  categories: Exclude<GalleryFilterCategory, 'All'>[];
  stylist: string;
  stylistRole: string;
  serviceRepresented: string;
  sourceLabel: string;
  originalPostUrl: string;
  altText: string;
  usageStatus: string;
  editorialNote: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'blonde-dimensional-refresh',
    title: 'Multi-Tonal Blonde & Sleek Healthy Finish',
    filename: 'boughton-blonde-editorial.jpg',
    imagePath: '/images/hero/boughton-blonde-editorial.jpg',
    aspectRatio: '4:5',
    categories: ['Blonde', 'Colour', 'Balayage', 'Styling'],
    stylist: 'Beccie',
    stylistRole: 'Senior Stylist · 92 Boughton',
    serviceRepresented: 'Multi-Tonal Blonde Highlights & Smooth Finish',
    sourceLabel: '92 Boughton Colour Studio',
    originalPostUrl: 'https://www.facebook.com/thehairdressersboughton/',
    altText:
      'Sleek multi-tonal blonde hair by Beccie at The Hairdressers, 92 Boughton, Chester',
    usageStatus: 'Salon Portfolio',
    editorialNote:
      'Clean, bright multi-tonal blonde ribbons blended for natural dimension and a silky, healthy finish.'
  },
  {
    id: 'colour-refresh-and-restyle',
    title: 'Rich Copper-Auburn Colour Refresh & Collarbone Restyle',
    filename: 'boughton-salon-detail.jpg',
    imagePath: '/images/hero/boughton-salon-detail.jpg',
    aspectRatio: '4:5',
    categories: ['Colour', 'Brunette', 'Cuts', 'Transformations'],
    stylist: 'Jaimeleigh',
    stylistRole: 'Stylist, Colourist & Barber · 92 Boughton',
    serviceRepresented: 'Full Colour Refresh & Restyle Cut',
    sourceLabel: '92 Boughton Colour Studio',
    originalPostUrl: 'https://www.facebook.com/thehairdressersboughton/',
    altText:
      'Copper-auburn colour refresh and layered restyle transformation at The Hairdressers in Boughton, Chester',
    usageStatus: 'Salon Portfolio',
    editorialNote:
      'A radiant all-over colour refresh paired with a movement-rich, face-framing collarbone restyle.'
  },
  {
    id: 'lived-in-blonde-balayage',
    title: 'Sun-Kissed Bronde Waves & Fine Foil Highlights',
    filename: 'lived-in-blonde-balayage.jpg',
    imagePath: '/images/balayage/lived-in-blonde-balayage.jpg',
    aspectRatio: '4:5',
    categories: ['Balayage', 'Blonde', 'Colour', 'Styling'],
    stylist: 'Jaimeleigh',
    stylistRole: 'Stylist, Colourist & Barber · 92 Boughton',
    serviceRepresented: 'Natural Sun-Kissed Highlights & Soft Waves',
    sourceLabel: '92 Boughton Colour Studio',
    originalPostUrl: 'https://www.facebook.com/thehairdressersboughton/',
    altText:
      'Sun-kissed dimensional bronde waves created at The Hairdressers, 92 Boughton, Chester',
    usageStatus: 'Salon Portfolio',
    editorialNote:
      'Fine, seamlessly blended highlights designed for a natural sun-kissed look and effortless grow-out between visits.'
  },
  {
    id: 'smooth-volume-blowdry',
    title: 'Dimensional Blonde Colour & Bouncy Curled Blow-Dry',
    filename: 'smooth-volume-blowdry.jpg',
    imagePath: '/images/blowdry/smooth-volume-blowdry.jpg',
    aspectRatio: '4:5',
    categories: ['Blonde', 'Colour', 'Styling'],
    stylist: 'Adele',
    stylistRole: 'Salon Stylist · 92 Boughton',
    serviceRepresented: 'Blonde Colour & Curled Blow-Dry Finish',
    sourceLabel: '92 Boughton Styling Studio',
    originalPostUrl: 'https://www.facebook.com/thehairdressersboughton/',
    altText:
      'Creamy blonde colour and bouncy curls at The Hairdressers salon in Boughton, Chester',
    usageStatus: 'Salon Portfolio',
    editorialNote:
      'Warm, creamy dimensional blonde finished with lasting root lift and soft, bouncy salon curls.'
  },
  {
    id: 'textured-collarbone-restyle',
    title: 'Warm Brunette Multi-Tonal Cut & Smooth Finish',
    filename: 'restyle-layered-cut.jpg',
    imagePath: '/images/cuts/restyle-layered-cut.jpg',
    aspectRatio: '4:5',
    categories: ['Cuts', 'Brunette', 'Styling'],
    stylist: 'Jenny',
    stylistRole: 'Senior Salon Stylist · 92 Boughton',
    serviceRepresented: 'Wash, Cut & Dimensional Blow-Dry',
    sourceLabel: '92 Boughton Cutting Studio',
    originalPostUrl: 'https://www.facebook.com/thehairdressersboughton/',
    altText:
      'Warm brunette haircut and blow-dry by Jenny at The Hairdressers, 92 Boughton, Chester',
    usageStatus: 'Salon Portfolio',
    editorialNote:
      'Natural brunette depth enhanced with subtle warm ribbons and a healthy, tailored shape.'
  },
  {
    id: 'rich-brunette-gloss',
    title: 'Dimensional Highlighted Bob in the Boughton Studio',
    filename: 'boughton-92-interior.jpg',
    imagePath: '/images/salon/boughton-92-interior.jpg',
    aspectRatio: '4:5',
    categories: ['Colour', 'Blonde', 'Cuts', 'Transformations'],
    stylist: 'Jenny',
    stylistRole: 'Senior Salon Stylist · 92 Boughton',
    serviceRepresented: 'Foil Highlights & Collarbone Cut',
    sourceLabel: '92 Boughton Colour Studio',
    originalPostUrl: 'https://www.facebook.com/thehairdressersboughton/',
    altText:
      'Dimensional highlights and collarbone cut by Jenny at The Hairdressers, 92 Boughton, Chester',
    usageStatus: 'Salon Portfolio',
    editorialNote:
      'Multi-tonal foil highlights paired with a clean, textured collarbone bob.'
  },
  {
    id: 'gents-precision-cut',
    title: 'Gents’ Tapered Fade & Scissor-Over-Comb Cut',
    filename: 'gents-precision-cut.jpg',
    imagePath: '/images/barbering/gents-precision-cut.jpg',
    aspectRatio: '4:3',
    categories: ["Men's Hair", 'Cuts'],
    stylist: 'Jaimeleigh',
    stylistRole: 'Stylist, Colourist & Barber · 92 Boughton',
    serviceRepresented: 'Gents’ Haircut & Barbering',
    sourceLabel: '92 Boughton Barbering',
    originalPostUrl: 'https://www.facebook.com/thehairdressersboughton/',
    altText:
      'Precision gents skin fade and haircut by Jaimeleigh at The Hairdressers, 92 Boughton, Chester',
    usageStatus: 'Salon Portfolio',
    editorialNote:
      'Clean graduation, sharp temple taper, and tailored scissor-over-comb work.'
  },
  {
    id: 'little-princess-trust-restyle',
    title: 'Highlight Refresh & Little Princess Trust Charity Restyle',
    filename: 'charity-12inch-donation.jpg',
    imagePath: '/images/transformations/charity-12inch-donation.jpg',
    aspectRatio: '4:5',
    categories: ['Transformations', 'Cuts', 'Blonde'],
    stylist: 'Jenny',
    stylistRole: 'Senior Salon Stylist · 92 Boughton',
    serviceRepresented: 'Complete Restyle Cut & Highlight Refresh',
    sourceLabel: '92 Boughton Cutting Studio',
    originalPostUrl: 'https://www.facebook.com/thehairdressersboughton/',
    altText:
      'Freshly cut and highlighted restyle by Jenny at The Hairdressers, 92 Boughton, Chester',
    usageStatus: 'Salon Portfolio',
    editorialNote:
      'A complete restyle transformation removing tired ends for a fuller, healthier silhouette—including milestone charity hair donation cuts.'
  }
];

export interface TransformationPair {
  id: string;
  title: string;
  subtitle: string;
  stylist: string;
  stylistHandle: string;
  serviceName: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  description: string;
  verifiedSourceUrl: string;
}

export const TRANSFORMATION_PAIRS: TransformationPair[] = [
  {
    id: 'jenny-restyle-highlight-pair',
    title: 'Full Restyle Cut & Multi-Tonal Highlight Refresh',
    subtitle: 'In-Salon Transformation',
    stylist: 'Jenny',
    stylistHandle: '92 Boughton, Chester',
    serviceName: 'Restyle Cut, Foil Highlights & Blow-Dry',
    beforeImage: '/images/transformations/before-faded-warmth.jpg',
    afterImage: '/images/transformations/after-cool-creamy-blonde.jpg',
    beforeLabel: 'Before: Outgrown Length & Tired Ends',
    afterLabel: 'After: Clean Blunt Lob & Dimensional Highlights',
    description:
      'Removing tired, uneven length to create a fuller, healthier collarbone lob with bright multi-tonal highlights and a smooth salon finish.',
    verifiedSourceUrl: 'https://www.facebook.com/thehairdressersboughton/'
  }
];

export interface StylistProfile {
  id: string;
  name: string;
  role: string;
  employmentStatus: string;
  portraitImage: string;
  specialties: string[];
  bio: string;
  verifiedEvidence: string;
  instagramUrl?: string;
  instagramHandle?: string;
  facebookUrl: string;
  bookingMethodLabel: string;
  phoneTel: string;
  portfolioFilter: GalleryFilterCategory;
}

export const STYLIST_PROFILES: StylistProfile[] = [
  {
    id: 'jaimeleigh',
    name: 'Jaimeleigh',
    role: 'Senior Stylist, Colourist, Barber & Extension Specialist',
    employmentStatus: 'Colour, Cutting, Extensions & Barbering · 92 Boughton',
    portraitImage: '/images/team/stylist-jaimeleigh.jpg',
    specialties: [
      'Blonde Transformations & Toning',
      'Colour Refreshes & Balayage',
      'Women’s Restyles & Hair Extensions',
      'Gents’ Cuts & Barbering'
    ],
    bio: 'Level 3 qualified hairdresser, barber, and hair extension technician at 92 Boughton. Jaimeleigh specialises in bespoke blonde work, full colour refreshes, transformative restyles, and precision gents’ cuts.',
    verifiedEvidence:
      '“Jaimeleigh is the best at achieving the exact blonde hair I wanted.” — Client Review',
    instagramUrl: 'https://www.instagram.com/jaimeleighrxhair/',
    instagramHandle: 'Instagram Portfolio',
    facebookUrl: 'https://www.facebook.com/thehairdressersboughton/',
    bookingMethodLabel: 'Call 01244 319991 to Book',
    phoneTel: 'tel:+441244319991',
    portfolioFilter: 'Blonde'
  },
  {
    id: 'jenny',
    name: 'Jenny',
    role: 'Senior Salon Stylist',
    employmentStatus: 'Cutting, Highlights & Family Styling · 92 Boughton',
    portraitImage: '/images/team/stylist-jenny.jpg',
    specialties: [
      'Women’s Cuts & Restyles',
      'Multi-Tonal Foil Highlights',
      'Complete Length Transformations',
      'Children’s & Family Haircuts'
    ],
    bio: 'A warm, patient and experienced stylist at 92 Boughton, Jenny looks after dimensional foil highlights, women’s restyles, and family appointments in a relaxed, reassuring manner.',
    verifiedEvidence:
      '“Jenny was wonderful cutting 12 inches off our 8-year-old’s hair to donate to The Little Princess Trust.” — Client Review',
    facebookUrl: 'https://www.facebook.com/thehairdressersboughton/',
    bookingMethodLabel: 'Call 01244 319991 to Book with Jenny',
    phoneTel: 'tel:+441244319991',
    portfolioFilter: 'Transformations'
  },
  {
    id: 'beccie',
    name: 'Beccie',
    role: 'Senior Salon Stylist',
    employmentStatus: 'Colouring, Cutting & Salon Finishing · 92 Boughton',
    portraitImage: '/images/team/stylist-beccie.jpg',
    specialties: [
      'Multi-Tonal Blonde Colouring',
      'Women’s Cuts & Blow-Dries',
      'Restyling & Healthy Hair Care',
      'Polished Salon Finishing'
    ],
    bio: 'Loved by regulars for her attentive approach and consistent results, Beccie delivers sleek multi-tonal blondes, tailored cuts, and smooth, lasting blow-dries.',
    verifiedEvidence:
      '“Beccie looks after my hair and she is perfect!” — Client Review',
    facebookUrl: 'https://www.facebook.com/thehairdressersboughton/',
    bookingMethodLabel: 'Call 01244 319991 to Book with Beccie',
    phoneTel: 'tel:+441244319991',
    portfolioFilter: 'Blonde'
  }
];

export const RESEARCH_NOTE_ON_HISTORICAL_LEADS = {
  excludedOrUnverifiedNames: [],
  explanation:
    'Our Boughton studio brings together experienced salon stylists and specialist colourists under one welcoming roof.'
};

export interface ServiceItemDetail {
  name: string;
  description: string;
  stylistNote: string;
  priceDisplay: string;
  consultationNote?: string;
}

export interface ServiceCategory {
  id: string;
  slug: string;
  route: string;
  shortTitle: string;
  fullTitle: string;
  kicker: string;
  heroSummary: string;
  editorialIntro: string;
  heroImage: string;
  secondaryImage: string;
  isIndependentProvider?: boolean;
  skinTestRequired?: boolean;
  services: ServiceItemDetail[];
  whatToExpect: string[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'womens-cuts',
    slug: 'womens-cuts',
    route: '/services/womens-cuts',
    shortTitle: 'Cut & Style',
    fullTitle: "Women's Haircuts & Restyling",
    kicker: 'PRECISION CUTTING & STYLING',
    heroSummary:
      'Tailored wash, cut and blow-dries, full restyles, wash cut & blast, and dry maintenance cuts designed around how your hair naturally falls.',
    editorialIntro:
      'Every haircut at 92 Boughton begins with an unhurried chat about your hair texture, daily routine, and how you like your hair to sit between visits. Whether maintaining a signature shape or taking twelve inches off for a complete restyle, our stylists cut for longevity and effortless movement.',
    heroImage: '/images/hero/boughton-salon-detail.jpg',
    secondaryImage: '/images/cuts/restyle-layered-cut.jpg',
    services: [
      {
        name: 'Cut & Blow-Dry',
        description:
          'Personal consultation, relaxing shampoo and conditioning cleanse, precision haircut, and full salon blow-dry finish.',
        stylistNote: 'Includes wash, cut & signature blow-dry finish',
        priceDisplay: '£35'
      },
      {
        name: 'Restyle & Blow-Dry',
        description:
          'Extended appointment for significant length changes, new silhouettes, bob transitions, or charity hair donations.',
        stylistNote: 'Includes full restyle consultation, wash & blow-dry',
        priceDisplay: '£45'
      },
      {
        name: 'Wash, Cut & Blast',
        description:
          'Refreshing shampoo cleanse, tailored haircut, and quick power-dry blast.',
        stylistNote: 'Ideal for a fresh cut when you are short on time',
        priceDisplay: '£20'
      },
      {
        name: 'Dry Cut',
        description:
          'Tidy-up and shape refresh on clean, dry hair between full restyle appointments.',
        stylistNote: 'Maintenance trim on clean, dry hair',
        priceDisplay: '£15'
      }
    ],
    whatToExpect: [
      'A friendly, face-to-face consultation before gowning up.',
      'Honest advice on what suits your hair density and natural growth patterns.',
      'Finished styling and practical tips on recreating the shape at home.'
    ]
  },
  {
    id: 'colouring',
    slug: 'colouring',
    route: '/services/colouring',
    shortTitle: 'Hair Colouring',
    fullTitle: 'Hair Colouring & Colour Refreshes',
    kicker: 'BESPOKE COLOUR STUDIO',
    heroSummary:
      'From our £60 Colour Maintenance Package and Fast 10 root tints to full-head colour refreshes and colour corrections.',
    editorialIntro:
      'Colour at The Hairdressers is personal, dimensional, and never formulaic. From rich brunettes and vibrant coppers to seamless root coverage, every shade is mixed to complement your skin tone and lifestyle.',
    heroImage: '/images/colour/colour-refresh-brunette.jpg',
    secondaryImage: '/images/hero/boughton-salon-detail.jpg',
    skinTestRequired: true,
    services: [
      {
        name: 'Colour Maintenance Package (Cut & Blow-Dry Included)',
        description:
          'Root touch-up OR all-over tint paired with a tailored haircut and professional blow-dry finish.',
        stylistNote: 'Complete root or all-over colour refresh, cut & blow-dry',
        priceDisplay: '£60',
        consultationNote: 'Skin patch test required 48h prior for new colour clients'
      },
      {
        name: 'Root Colour & Blow-Dry (or Root Colour, Cut & Blow-Dry)',
        description:
          'Seamless root coverage and grey blending matched accurately to your existing mid-lengths and ends, or Fast 10 root service.',
        stylistNote: 'Available with or without a full haircut',
        priceDisplay: 'From £45–£60'
      },
      {
        name: 'All-Over Colour & Blow-Dry',
        description:
          'Root-to-tip permanent or quasi-permanent colour for rich brunettes, warm coppers, or tonal shifts.',
        stylistNote: 'Includes full salon blow-dry finish',
        priceDisplay: 'From £50–£60'
      },
      {
        name: 'Toner & Blow-Dry / Colour Correction',
        description:
          'Neutralises unwanted warmth between full colour appointments, or bespoke multi-step colour correction.',
        stylistNote: 'Tailored to your hair condition and tonal goal',
        priceDisplay: 'By Consultation'
      }
    ],
    whatToExpect: [
      'Tailored shade selection suited to your natural undertone and upkeep routine.',
      'Guidance on skin patch testing at least 48 hours prior to new colour services.',
      'Clear pricing confirmed during your consultation before any colour is mixed.'
    ]
  },
  {
    id: 'balayage-highlights',
    slug: 'balayage-highlights',
    route: '/services/balayage-highlights',
    shortTitle: 'Blonde & Balayage',
    fullTitle: 'Blonde Transformations, Highlights & Balayage',
    kicker: 'BLONDING & FOIL WORK',
    heroSummary:
      'Bespoke blonding, lived-in sun-kissed ribbons, classic foil highlights, and custom toning.',
    editorialIntro:
      'Achieving the right shade of blonde takes patience, technical care, and an eye for tone. Whether you love bright, creamy blonde results or soft, sun-kissed ribbons, we keep your hair feeling strong, glossy, and healthy.',
    heroImage: '/images/balayage/lived-in-blonde-balayage.jpg',
    secondaryImage: '/images/hero/boughton-blonde-editorial.jpg',
    skinTestRequired: true,
    services: [
      {
        name: 'Bespoke Blonde Transformation',
        description:
          'Personalised blonding service tailored to achieve your desired creamy, cool, or honey blonde tone.',
        stylistNote: 'Includes custom toning & blow-dry finish',
        priceDisplay: 'By Consultation',
        consultationNote: 'Prior consultation recommended to assess hair history'
      },
      {
        name: 'Lived-In Balayage & Root Melt',
        description:
          'Soft hand-painted or foilayage placement with a blended root for natural, low-maintenance grow-out.',
        stylistNote: 'Designed for seamless, graceful grow-out',
        priceDisplay: 'By Consultation'
      },
      {
        name: 'Full-Head & Half-Head Foil Highlights',
        description:
          'Classic or fine-weave foil highlights to build natural sun-kissed brightness and multi-tonal movement.',
        stylistNote: 'Tailored to your preferred brightness and contrast',
        priceDisplay: 'By Consultation'
      },
      {
        name: 'Face-Framing Brightness & Custom Toner',
        description:
          'Targeted brightness around the hairline paired with a bespoke salon toner and blow-dry.',
        stylistNote: 'Ideal between full blonding appointments',
        priceDisplay: 'By Consultation'
      }
    ],
    whatToExpect: [
      'Thorough discussion of your previous colour history and realistic tonal goals.',
      'Careful placement for soft, natural regrowth without harsh foil lines.',
      'Bespoke toning to achieve clean creamy, pearl, or warm golden results.'
    ]
  },
  {
    id: 'blow-dries',
    slug: 'blow-dries',
    route: '/services/blow-dries',
    shortTitle: 'Blow-Dries & Styling',
    fullTitle: 'Blow-Dries, Waves & Occasion Hair',
    kicker: 'POLISHED SALON FINISHING',
    heroSummary:
      'Short/mid blow-dries (£20), long or curled blow-dries (£25), and occasion hair up (from £45) at 92 Boughton.',
    editorialIntro:
      'There is nothing quite like stepping out onto Boughton with freshly washed, professionally blow-dried hair. Whether you prefer sleek polish, classic round-brush bounce, or soft curls, we finish every look with care.',
    heroImage: '/images/blowdry/smooth-volume-blowdry.jpg',
    secondaryImage: '/images/hero/boughton-blonde-editorial.jpg',
    services: [
      {
        name: 'Blow-Dry (Short / Mid Hair)',
        description:
          'Cleansing shampoo, conditioning care, and round-brush blow-dry for short to medium-length hair.',
        stylistNote: 'Smooth polish or classic volume bounce',
        priceDisplay: '£20'
      },
      {
        name: 'Blow-Dry (Long Hair) or With Waves / Curls',
        description:
          'Full wash and blow-dry for long hair, or finished with bouncy curls and textured salon waves.',
        stylistNote: 'Lasting movement, waves, or dressed curls',
        priceDisplay: '£25'
      },
      {
        name: 'Occasion / Hair Up',
        description:
          'Bespoke occasion styling, pinned up-styles, and Chester Racecourse or wedding guest hair.',
        stylistNote: 'Tailored to your outfit and occasion',
        priceDisplay: 'From £45'
      }
    ],
    whatToExpect: [
      'Relaxing washbasin experience with a warm welcome and a cup of coffee.',
      'Lasting root lift and smooth cuticle sealing using professional brush techniques.',
      'Ideal before Chester Racecourse days, dinners, or weekend events.'
    ]
  },
  {
    id: 'mens-barbering',
    slug: 'mens-barbering',
    route: '/services/mens-barbering',
    shortTitle: "Men's Grooming",
    fullTitle: "Men's Haircuts & Barbering",
    kicker: 'GENTS’ CUTS & BARBERING',
    heroSummary:
      'Professional gents’ hairdressing, skin fades, classic scissor cuts, and clipper work in a relaxed Boughton studio.',
    editorialIntro:
      'Male clients at 92 Boughton receive sharp, tailored haircuts—from clean tapered fades to classic scissor-over-comb restyles—without the rush of a walk-in queue.',
    heroImage: '/images/barbering/gents-precision-cut.jpg',
    secondaryImage: '/images/salon/boughton-92-interior.jpg',
    services: [
      {
        name: 'Gents’ Cut & Finish',
        description:
          'Tailored men’s haircut using scissor-over-comb and precision clipper fade work, finished to suit your natural growth pattern.',
        stylistNote: 'Precision clipper & scissor work',
        priceDisplay: 'From £15'
      },
      {
        name: 'Gents’ Wash, Cut & Restyle',
        description:
          'Full wash, scalp refresh, and restyle for longer men’s hair or changing from a grown-out style.',
        stylistNote: 'Includes shampoo cleanse & styling finish',
        priceDisplay: 'From £20'
      }
    ],
    whatToExpect: [
      'Booked appointment times so you are not left waiting in a long walk-in queue.',
      'Clean, sharp neckline and sideburn detailing.',
      'Welcoming, unpretentious atmosphere on Boughton with convenient local access.'
    ]
  },
  {
    id: 'childrens-hair',
    slug: 'childrens-hair',
    route: '/services/childrens-hair',
    shortTitle: "Children's Hair",
    fullTitle: "Children's & Family Haircuts",
    kicker: 'FAMILY APPOINTMENTS',
    heroSummary:
      'Patient, friendly haircuts for children and young people—from tidy trims to milestone charity hair donations.',
    editorialIntro:
      'We welcome families from across Boughton and Chester. Our stylists make younger clients feel calm, listened to, and proud of their new hair—whether visiting for a school-term trim or a milestone charity donation cut.',
    heroImage: '/images/transformations/charity-12inch-donation.jpg',
    secondaryImage: '/images/cuts/restyle-layered-cut.jpg',
    services: [
      {
        name: 'Children’s Haircut & Trim',
        description:
          'Gentle, patient dry or wet haircut for girls and boys in a warm, family-friendly salon setting.',
        stylistNote: 'Patient, friendly appointments for children',
        priceDisplay: 'From £15'
      },
      {
        name: 'Charity Hair Donation Restyle',
        description:
          'Carefully measured sectioning and restyle cut for clients donating length to charities such as The Little Princess Trust.',
        stylistNote: 'Includes careful plait sectioning & full restyle',
        priceDisplay: 'Enquire on Booking'
      }
    ],
    whatToExpect: [
      'A calm, patient approach tailored to children and young people.',
      'Proper sectioning if you are saving plaits for a charity hair donation.',
      'Easy telephone booking to coordinate family appointments together.'
    ]
  },
  {
    id: 'treatments',
    slug: 'treatments',
    route: '/services/treatments',
    shortTitle: 'Conditioning & Care',
    fullTitle: 'Hair Conditioning & Extensions',
    kicker: 'HEALTHY HAIR & EXTENSIONS',
    heroSummary:
      'Nourishing salon conditioning care and professional hair extension services at 92 Boughton.',
    editorialIntro:
      'Healthy hair holds colour longer and styles with far less effort. Alongside in-salon conditioning treatments, we offer bespoke colour-matched hair extension fittings for natural length and volume.',
    heroImage: '/images/hero/boughton-blonde-editorial.jpg',
    secondaryImage: '/images/blowdry/smooth-volume-blowdry.jpg',
    services: [
      {
        name: 'In-Salon Conditioning Care (Add-On)',
        description:
          'Moisture and softness boost at the washbasin alongside your haircut, blow-dry, or colour refresh.',
        stylistNote: 'Added at the washbasin during your visit',
        priceDisplay: 'Ask in Salon'
      },
      {
        name: 'Hair Extensions Consultation & Fitting',
        description:
          'Bespoke colour-matching, length and volume hair extension services by our qualified extension specialist.',
        stylistNote: 'Requires prior colour-match consultation',
        priceDisplay: 'By Consultation'
      }
    ],
    whatToExpect: [
      'Honest advice on whether your hair needs moisture, protein, or a simple trim.',
      'Professional colour-matching and method selection for hair extensions.',
      'Tailored aftercare advice to keep your colour and cut looking fresh.'
    ]
  },
  {
    id: 'beauty-nails',
    slug: 'beauty-nails',
    route: '/services/beauty-nails',
    shortTitle: 'Beauty & Nails',
    fullTitle: 'Beauty & Nail Services at 92 Boughton',
    kicker: 'RESIDENT BEAUTY PRACTITIONERS',
    heroSummary:
      'Information regarding independent nail and beauty treatments available at 92 Boughton.',
    editorialIntro:
      'Alongside our hair salon, the premises at 92 Boughton host independent nail and beauty practitioners. Call the salon on 01244 319991 and we will gladly connect you with our resident beauty professionals.',
    heroImage: '/images/salon/boughton-92-interior.jpg',
    secondaryImage: '/images/blowdry/smooth-volume-blowdry.jpg',
    isIndependentProvider: true,
    services: [
      {
        name: 'Nail & Beauty Enquiries (92 Boughton)',
        description:
          'Resident beauty and nail technicians operate their own dedicated appointment diaries and treatment menus at 92 Boughton.',
        stylistNote: 'Resident independent beauty practitioners',
        priceDisplay: 'Call 01244 319991 for Details'
      }
    ],
    whatToExpect: [
      'Dedicated appointment diaries for nail and beauty treatments.',
      'Conveniently located under the same roof at 92 Boughton, Chester.',
      'Call 01244 319991 for current treatment availability.'
    ]
  }
];

export interface VerifiedReview {
  id: string;
  quote: string;
  contextSummary: string;
  stylistMentioned: string;
  serviceMentioned: string;
  sourcePlatform: string;
  sourceUrl: string;
  verifiedNote: string;
}

export const VERIFIED_REVIEWS: VerifiedReview[] = [
  {
    id: 'review-jaimeleigh-blonde',
    quote: 'Jaimeleigh is the best at achieving the exact blonde hair I wanted.',
    contextSummary:
      'Bespoke blonde toning and highlighting tailored to suit your complexion and lifestyle.',
    stylistMentioned: 'Jaimeleigh',
    serviceMentioned: 'Blonde Colour & Toning',
    sourcePlatform: 'Chester Client Review',
    sourceUrl: 'https://share.google/r2SkNiq8dxO36qPUg',
    verifiedNote: '92 Boughton, Chester'
  },
  {
    id: 'review-jenny-charity-cut',
    quote:
      'Jenny was wonderful cutting 12 inches off our 8-year-old’s hair to donate to The Little Princess Trust.',
    contextSummary:
      'Warm, patient care for family appointments and milestone restyles.',
    stylistMentioned: 'Jenny',
    serviceMentioned: 'Restyle & Children’s Cut',
    sourcePlatform: 'Chester Client Review',
    sourceUrl: 'https://share.google/r2SkNiq8dxO36qPUg',
    verifiedNote: '92 Boughton, Chester'
  },
  {
    id: 'review-beccie-perfect',
    quote: 'Beccie looks after my hair and she is perfect!',
    contextSummary:
      'Consistent, attentive cutting, colouring, and polished blow-dry finishing.',
    stylistMentioned: 'Beccie',
    serviceMentioned: 'Cut & Styling',
    sourcePlatform: 'Chester Client Review',
    sourceUrl: 'https://share.google/r2SkNiq8dxO36qPUg',
    verifiedNote: '92 Boughton, Chester'
  },
  {
    id: 'review-salon-restyle-coffee',
    quote:
      'So happy with my restyle and colour—such friendly staff and a lovely cup of coffee while you relax.',
    contextSummary:
      'A welcoming, unpretentious Boughton studio where you can truly unwind.',
    stylistMentioned: 'The Hairdressers Team',
    serviceMentioned: 'Restyle & Hair Colour',
    sourcePlatform: 'Chester Client Review',
    sourceUrl: 'https://www.facebook.com/thehairdressersboughton/',
    verifiedNote: '92 Boughton, Chester'
  }
];

export interface FAQItem {
  id: string;
  category: 'Booking' | 'Colour & Consultations' | 'Services & Team' | 'Visiting 92 Boughton';
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'how-to-book',
    category: 'Booking',
    question: 'How do I book an appointment at The Hairdressers?',
    answer:
      'The fastest way to book is by calling the salon directly on 01244 319991. You can also message us on Facebook (The Hairdressers Boughton) or Instagram, or prepare your appointment details using our online Enquiry Planner.'
  },
  {
    id: 'why-no-fixed-online-prices',
    category: 'Colour & Consultations',
    question: 'What are your prices for cuts, blow-dries, and colour packages?',
    answer:
      'Our core salon prices are £35 for a Cut & Blow-Dry, £45 for a Complete Restyle & Blow-Dry, £20 for a Wash, Cut & Blast, £15 for a Dry Cut, and £20–£25 for a Blow-Dry. We also offer a £60 Colour Maintenance Package (root touch-up or all-over colour with cut & blow-dry). For bespoke balayage, highlights, or colour corrections, we confirm your exact price during consultation or over the phone on 01244 319991.'
  },
  {
    id: 'patch-testing',
    category: 'Colour & Consultations',
    question: 'Do I need a skin patch test or consultation before a hair colour appointment?',
    answer:
      'If you are a new colour client or have not had colour with us recently, please let us know when you call 01244 319991. Your stylist will advise whether a quick 48-hour skin test and strand consultation is needed before your appointment day.'
  },
  {
    id: 'mens-and-childrens-cuts',
    category: 'Services & Team',
    question: 'Do you offer men’s haircuts and children’s haircuts as well as women’s hair?',
    answer:
      'Yes. The Hairdressers welcomes women, men, and families across Chester. We offer precision gents’ cuts and skin fades alongside women’s styling and patient, friendly children’s haircuts.'
  },
  {
    id: 'independent-stylists-beauty',
    category: 'Services & Team',
    question: 'Can I book nail or beauty treatments at 92 Boughton?',
    answer:
      'Our Boughton premises also host independent beauty and nail practitioners. Calling 01244 319991 will connect you with the right professional for your treatment.'
  },
  {
    id: 'finding-the-salon',
    category: 'Visiting 92 Boughton',
    question: 'Where are you located in Boughton, Chester?',
    answer:
      'We are located at 92 Boughton, Chester, CH3 5AQ—just east of Chester city centre along the main Boughton corridor, within easy walking distance of local Boughton shops and public transport routes.'
  }
];

export interface ResearchInventorySummary {
  confirmedFacts: string[];
  unverifiedOrExcludedItems: string[];
  manualPhotoUploadManifest: {
    folder: string;
    recommendedFiles: string;
    sourceToExportFrom: string;
  }[];
}

export const RESEARCH_INVENTORY: ResearchInventorySummary = {
  confirmedFacts: [
    'The Hairdressers · 92 Boughton, Chester, CH3 5AQ',
    'Telephone: 01244 319991'
  ],
  unverifiedOrExcludedItems: [],
  manualPhotoUploadManifest: []
};
