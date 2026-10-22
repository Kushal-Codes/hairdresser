import fs from 'node:fs';
import path from 'node:path';

interface PlateSpec {
  filepath: string;
  width: number;
  height: number;
  bgStart: string;
  bgEnd: string;
  hairBase: string;
  hairHighlight: string;
  hairLowlight: string;
  style: 'blonde-waves' | 'brunette-gloss' | 'balayage-ribbons' | 'bob-restyle' | 'bouncy-blowdry' | 'mens-crop' | 'before-brass' | 'salon-arch' | 'charity-cut' | 'stylist-portrait' | 'beauty-upstairs';
  plateNumber: string;
  caption: string;
  subcaption: string;
}

const plates: PlateSpec[] = [
  {
    filepath: 'public/images/hero/boughton-blonde-editorial.svg',
    width: 960,
    height: 1200,
    bgStart: '#F9ECEF',
    bgEnd: '#EDE0E3',
    hairBase: '#D8BE98',
    hairHighlight: '#F5EBD6',
    hairLowlight: '#9E8160',
    style: 'blonde-waves',
    plateNumber: 'LOOKBOOK 01 · JAIMELEIGH PORTFOLIO',
    caption: 'Creamy Dimensional Blonde & Soft Wave Finish',
    subcaption: '92 Boughton · Chester'
  },
  {
    filepath: 'public/images/hero/boughton-salon-detail.svg',
    width: 800,
    height: 1000,
    bgStart: '#F5E7EA',
    bgEnd: '#E6D0D6',
    hairBase: '#5A3D31',
    hairHighlight: '#9A6F5A',
    hairLowlight: '#2D1D18',
    style: 'brunette-gloss',
    plateNumber: 'LOOKBOOK 02 · COLOUR & RESTYLE',
    caption: 'Colour Refresh & Precision Layered Restyle',
    subcaption: 'Hair by Jaimeleigh · Boughton'
  },
  {
    filepath: 'public/images/colour/colour-refresh-brunette.svg',
    width: 900,
    height: 1125,
    bgStart: '#F6EAEB',
    bgEnd: '#E5D2D7',
    hairBase: '#4A3228',
    hairHighlight: '#8C624D',
    hairLowlight: '#261813',
    style: 'brunette-gloss',
    plateNumber: 'ARCHIVE 03 · COLOUR REFRESH',
    caption: 'Rich Brunette Gloss & Multi-Tonal Dimension',
    subcaption: 'The Hairdressers · Chester'
  },
  {
    filepath: 'public/images/balayage/lived-in-blonde-balayage.svg',
    width: 900,
    height: 1125,
    bgStart: '#FAF0F2',
    bgEnd: '#EAD9DD',
    hairBase: '#CBB08A',
    hairHighlight: '#F7EFE0',
    hairLowlight: '#8B7050',
    style: 'balayage-ribbons',
    plateNumber: 'ARCHIVE 04 · BLONDE WORK',
    caption: 'Bespoke Blonde Toning & Seamless Root Melt',
    subcaption: 'Jaimeleigh (@jaimeleighrxhair)'
  },
  {
    filepath: 'public/images/cuts/restyle-layered-cut.svg',
    width: 900,
    height: 1125,
    bgStart: '#F7EBEE',
    bgEnd: '#E7D4DA',
    hairBase: '#7D5B46',
    hairHighlight: '#B68F72',
    hairLowlight: '#473124',
    style: 'bob-restyle',
    plateNumber: 'ARCHIVE 05 · PRECISION CUTTING',
    caption: 'Textured Collarbone Restyle & Face-Framing Layers',
    subcaption: '92 Boughton · Chester'
  },
  {
    filepath: 'public/images/blowdry/smooth-volume-blowdry.svg',
    width: 900,
    height: 1125,
    bgStart: '#FBF2F4',
    bgEnd: '#ECDCE0',
    hairBase: '#B99672',
    hairHighlight: '#E6CFAF',
    hairLowlight: '#755A3F',
    style: 'bouncy-blowdry',
    plateNumber: 'ARCHIVE 06 · FINISHING',
    caption: 'Bouncy Salon Blow-Dry & Polished Movement',
    subcaption: 'The Hairdressers · Chester'
  },
  {
    filepath: 'public/images/barbering/gents-precision-cut.svg',
    width: 960,
    height: 720,
    bgStart: '#EFECEB',
    bgEnd: '#DCD5D3',
    hairBase: '#3A302D',
    hairHighlight: '#63534E',
    hairLowlight: '#1E1816',
    style: 'mens-crop',
    plateNumber: 'ARCHIVE 07 · MEN’S GROOMING',
    caption: 'Gents’ Scissor & Clipper Tailored Cut',
    subcaption: 'Gents Cuts by Jaimeleigh · 92 Boughton'
  },
  {
    filepath: 'public/images/transformations/before-faded-warmth.svg',
    width: 900,
    height: 1125,
    bgStart: '#EFE8E6',
    bgEnd: '#DED3D0',
    hairBase: '#B88A58',
    hairHighlight: '#D4AB78',
    hairLowlight: '#735332',
    style: 'before-brass',
    plateNumber: 'BEFORE · CONSULTATION STAGE',
    caption: 'Outgrown Warmth & Uneven Ends Prior to Refresh',
    subcaption: 'Recorded Transformation Pair · Boughton'
  },
  {
    filepath: 'public/images/transformations/after-cool-creamy-blonde.svg',
    width: 900,
    height: 1125,
    bgStart: '#FAF0F2',
    bgEnd: '#EAD8DD',
    hairBase: '#DEC7A4',
    hairHighlight: '#FAF3E6',
    hairLowlight: '#9E8464',
    style: 'blonde-waves',
    plateNumber: 'AFTER · COLOUR REFRESH & RESTYLE',
    caption: 'Clean Creamy Blonde Tone & Fresh Restyled Ends',
    subcaption: 'Hair by Jaimeleigh · 92 Boughton'
  },
  {
    filepath: 'public/images/transformations/charity-12inch-donation.svg',
    width: 900,
    height: 1125,
    bgStart: '#F8EAEB',
    bgEnd: '#E8D4D8',
    hairBase: '#6B4C3B',
    hairHighlight: '#A37A62',
    hairLowlight: '#3D291F',
    style: 'charity-cut',
    plateNumber: 'ARCHIVE 08 · CLIENT MILESTONE',
    caption: '12-Inch Charity Restyle for The Little Princess Trust',
    subcaption: 'Stylist: Jenny · Verified Client Review'
  },
  {
    filepath: 'public/images/salon/boughton-92-interior.svg',
    width: 1280,
    height: 720,
    bgStart: '#FAF2F0',
    bgEnd: '#EADAD7',
    hairBase: '#A65C73',
    hairHighlight: '#EED5DB',
    hairLowlight: '#342A2D',
    style: 'salon-arch',
    plateNumber: '92 BOUGHTON · CHESTER CH3 5AQ',
    caption: 'A Welcoming, Unhurried Studio Atmosphere in Boughton',
    subcaption: 'Friendly Stylists · Personal Consultations · Great Coffee'
  },
  {
    filepath: 'public/images/team/stylist-jaimeleigh.svg',
    width: 800,
    height: 1000,
    bgStart: '#F9ECEF',
    bgEnd: '#E9D5DC',
    hairBase: '#C8A982',
    hairHighlight: '#F2E5D2',
    hairLowlight: '#7D6347',
    style: 'stylist-portrait',
    plateNumber: 'HAIR BY JAIMELEIGH · @JAIMELEIGHRXHAIR',
    caption: 'Jaimeleigh — Self-Employed Hairdresser & Barber',
    subcaption: 'Blonde Specialist · Colour Refreshes · Restyles · Gents’ Cuts'
  },
  {
    filepath: 'public/images/team/stylist-jenny.svg',
    width: 800,
    height: 1000,
    bgStart: '#F7EBEE',
    bgEnd: '#E5D1D7',
    hairBase: '#6E4F3D',
    hairHighlight: '#A67D65',
    hairLowlight: '#3A271C',
    style: 'stylist-portrait',
    plateNumber: 'THE HAIRDRESSERS TEAM · BOUGHTON',
    caption: 'Jenny — Senior Salon Stylist',
    subcaption: 'Precision Restyles · Family & Children’s Cuts · Classic Styling'
  },
  {
    filepath: 'public/images/team/stylist-beccie.svg',
    width: 800,
    height: 1000,
    bgStart: '#F8ECEE',
    bgEnd: '#E7D4D9',
    hairBase: '#8C624C',
    hairHighlight: '#C49A80',
    hairLowlight: '#4A3123',
    style: 'stylist-portrait',
    plateNumber: 'THE HAIRDRESSERS TEAM · BOUGHTON',
    caption: 'Beccie — Salon Hairstylist',
    subcaption: 'Signature Cuts · Colouring · Smooth & Volume Blow-Dries'
  },
  {
    filepath: 'public/images/beauty/upstairs-beauty-nails.svg',
    width: 960,
    height: 720,
    bgStart: '#FAF0F2',
    bgEnd: '#EBD8DE',
    hairBase: '#C98F9E',
    hairHighlight: '#F8E9EB',
    hairLowlight: '#817278',
    style: 'beauty-upstairs',
    plateNumber: '92 BOUGHTON · INDEPENDENT PRACTITIONERS',
    caption: 'Independent Nail & Beauty Professionals at 92 Boughton',
    subcaption: 'Enquire Direct for Current Resident Practitioner Availability'
  }
];

function renderHairArtwork(spec: PlateSpec): string {
  const { width, height, hairBase, hairHighlight, hairLowlight, style } = spec;
  const cx = width / 2;
  const cy = height * 0.46;

  if (style === 'salon-arch') {
    return `
      <!-- Architectural Salon Interior Mirrors & Stations -->
      <rect x="${width * 0.08}" y="${height * 0.12}" width="${width * 0.84}" height="${height * 0.72}" rx="8" fill="#FFFAF9" opacity="0.65" stroke="#D8C2C8" stroke-width="1.5"/>
      <!-- Arched Mirror 1 -->
      <path d="M ${width * 0.18} ${height * 0.74} L ${width * 0.18} ${height * 0.34} A ${width * 0.11} ${width * 0.11} 0 0 1 ${width * 0.40} ${height * 0.34} L ${width * 0.40} ${height * 0.74} Z" fill="url(#mirrorGrad)" stroke="#C98F9E" stroke-width="2.5"/>
      <!-- Arched Mirror 2 -->
      <path d="M ${width * 0.46} ${height * 0.74} L ${width * 0.46} ${height * 0.34} A ${width * 0.11} ${width * 0.11} 0 0 1 ${width * 0.68} ${height * 0.34} L ${width * 0.68} ${height * 0.74} Z" fill="url(#mirrorGrad)" stroke="#C98F9E" stroke-width="2.5"/>
      <!-- Ceramic Console Shelf -->
      <rect x="${width * 0.15}" y="${height * 0.63}" width="${width * 0.56}" height="10" rx="5" fill="#342A2D" opacity="0.8"/>
      <!-- Botanical Vessel & Warm Coffee Cup -->
      <ellipse cx="${width * 0.78}" cy="${height * 0.66}" rx="34" ry="52" fill="#A65C73" opacity="0.85"/>
      <path d="M ${width * 0.78} ${height * 0.62} Q ${width * 0.72} ${height * 0.42} ${width * 0.66} ${height * 0.32}" stroke="#817278" stroke-width="2.5" fill="none"/>
      <path d="M ${width * 0.78} ${height * 0.62} Q ${width * 0.82} ${height * 0.40} ${width * 0.86} ${height * 0.28}" stroke="#A65C73" stroke-width="2.5" fill="none"/>
      <circle cx="${width * 0.68}" cy="${height * 0.34}" r="14" fill="#EED5DB"/>
      <circle cx="${width * 0.85}" cy="${height * 0.30}" r="18" fill="#C98F9E" opacity="0.6"/>
    `;
  }

  if (style === 'mens-crop') {
    return `
      <!-- Refined Masculine Tailored Barbering Silhouette -->
      <circle cx="${cx}" cy="${cy}" r="${Math.min(width, height) * 0.33}" fill="#FFFFFF" opacity="0.55"/>
      <path d="M ${cx - 140} ${cy + 160} C ${cx - 145} ${cy + 40}, ${cx - 125} ${cy - 90}, ${cx} ${cy - 110} C ${cx + 125} ${cy - 90}, ${cx + 145} ${cy + 40}, ${cx + 140} ${cy + 160} Z" fill="#E6DCD8"/>
      <!-- Textured Scissor-Over-Comb Crown -->
      <path d="M ${cx - 135} ${cy - 20} C ${cx - 145} ${cy - 130}, ${cx - 60} ${cy - 185}, ${cx + 15} ${cy - 175} C ${cx + 105} ${cy - 165}, ${cx + 145} ${cy - 105}, ${cx + 132} ${cy - 15} C ${cx + 95} ${cy - 65}, ${cx - 65} ${cy - 75}, ${cx - 135} ${cy - 20} Z" fill="url(#hairMainGrad)"/>
      <!-- Precision Tapered Texture Lines -->
      <path d="M ${cx - 105} ${cy - 95} Q ${cx - 20} ${cy - 155} ${cx + 85} ${cy - 110}" stroke="${hairHighlight}" stroke-width="4" fill="none" opacity="0.75" stroke-linecap="round"/>
      <path d="M ${cx - 85} ${cy - 120} Q ${cx + 10} ${cy - 170} ${cx + 105} ${cy - 125}" stroke="${hairLowlight}" stroke-width="3" fill="none" opacity="0.85" stroke-linecap="round"/>
      <path d="M ${cx - 120} ${cy - 60} Q ${cx - 30} ${cy - 115} ${cx + 95} ${cy - 75}" stroke="${hairHighlight}" stroke-width="3" fill="none" opacity="0.65" stroke-linecap="round"/>
    `;
  }

  if (style === 'beauty-upstairs') {
    return `
      <!-- Minimalist Beauty & Nail Studio Composition -->
      <rect x="${cx - 220}" y="${cy - 150}" width="440" height="300" rx="140" fill="#FFFFFF" opacity="0.65" stroke="#EED5DB" stroke-width="2"/>
      <circle cx="${cx - 75}" cy="${cy}" r="72" fill="#EED5DB" opacity="0.85"/>
      <circle cx="${cx + 65}" cy="${cy - 15}" r="58" fill="#C98F9E" opacity="0.75"/>
      <rect x="${cx + 25}" y="${cy + 20}" width="95" height="110" rx="18" fill="#342A2D" opacity="0.85"/>
      <rect x="${cx + 52}" y="${cy - 18}" width="40" height="38" rx="6" fill="#A65C73"/>
    `;
  }

  // Flowing multi-tonal dimensional hair ribbons (Blonde waves, Brunette gloss, Balayage, Cut, Transformation)
  const waveAmplitude = style === 'before-brass' ? 18 : style === 'bob-restyle' ? 28 : 54;
  const hairBottom = style === 'bob-restyle' ? cy + 165 : cy + 310;

  let strands = '';
  for (let i = -6; i <= 6; i++) {
    const offsetX = i * 28;
    const strandColor = i % 3 === 0 ? hairHighlight : i % 2 === 0 ? hairBase : hairLowlight;
    const strandWidth = i % 2 === 0 ? 22 : 14;
    const opacity = style === 'before-brass' ? 0.68 : 0.9;
    strands += `
      <path d="M ${cx + offsetX * 0.45} ${cy - 210}
               C ${cx + offsetX - waveAmplitude} ${cy - 90},
                 ${cx + offsetX + waveAmplitude} ${cy + 30},
                 ${cx + offsetX * 1.15 - waveAmplitude * 0.7} ${cy + 140}
               C ${cx + offsetX * 1.2 + waveAmplitude} ${cy + 220},
                 ${cx + offsetX * 1.1 - waveAmplitude * 0.5} ${hairBottom - 30},
                 ${cx + offsetX * 1.05} ${hairBottom}"
            stroke="${strandColor}"
            stroke-width="${strandWidth}"
            stroke-linecap="round"
            fill="none"
            opacity="${opacity}" />
    `;
  }

  return `
    <!-- Editorial Studio Arch Framing -->
    <path d="M ${cx - 230} ${cy + 340} L ${cx - 230} ${cy - 120} A 230 230 0 0 1 ${cx + 230} ${cy - 120} L ${cx + 230} ${cy + 340} Z"
          fill="#FFFFFF" opacity="0.52" stroke="#EED5DB" stroke-width="2" />
    <!-- Crown & Silhouette Volume -->
    <ellipse cx="${cx}" cy="${cy - 40}" rx="175" ry="215" fill="url(#hairMainGrad)" opacity="0.95" />
    <!-- Multi-tonal Hand-Painted Balayage & Gloss Ribbons -->
    ${strands}
    <!-- Natural Studio Catchlight Sheen -->
    <ellipse cx="${cx - 45}" cy="${cy - 95}" rx="95" ry="28" transform="rotate(-14 ${cx - 45} ${cy - 95})" fill="${hairHighlight}" opacity="${style === 'before-brass' ? '0.18' : '0.45'}" />
    <ellipse cx="${cx + 35}" cy="${cy + 45}" rx="110" ry="32" transform="rotate(12 ${cx + 35} ${cy + 45})" fill="${hairHighlight}" opacity="${style === 'before-brass' ? '0.15' : '0.38'}" />
  `;
}

for (const spec of plates) {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${spec.width} ${spec.height}" width="${spec.width}" height="${spec.height}">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${spec.bgStart}" />
      <stop offset="100%" stop-color="${spec.bgEnd}" />
    </linearGradient>
    <linearGradient id="hairMainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${spec.hairHighlight}" />
      <stop offset="45%" stop-color="${spec.hairBase}" />
      <stop offset="100%" stop-color="${spec.hairLowlight}" />
    </linearGradient>
    <linearGradient id="mirrorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="50%" stop-color="#F8E9EB" />
      <stop offset="100%" stop-color="#EED5DB" />
    </linearGradient>
    <radialGradient id="softGlow" cx="75%" cy="22%" r="60%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.7" />
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Studio Canvas Backdrop -->
  <rect width="100%" height="100%" fill="url(#bgGrad)" />
  <rect width="100%" height="100%" fill="url(#softGlow)" />

  <!-- Editorial Border Hairline -->
  <rect x="24" y="24" width="${spec.width - 48}" height="${spec.height - 48}" fill="none" stroke="#342A2D" stroke-opacity="0.12" stroke-width="1" />

  <!-- Top Editorial Plate Header -->
  <text x="52" y="66" font-family="Manrope, sans-serif" font-size="13" font-weight="600" letter-spacing="2.5" fill="#817278">
    ${spec.plateNumber.replace(/&/g, '&amp;')}
  </text>
  <text x="${spec.width - 52}" y="66" text-anchor="end" font-family="Cormorant Garamond, Georgia, serif" font-style="italic" font-size="16" fill="#A65C73">
    The Hairdressers · Boughton
  </text>

  <!-- Central Art-Directed Hair / Salon Composition -->
  ${renderHairArtwork(spec)}

  <!-- Bottom Editorial Caption Scrim & Plate Details -->
  <rect x="24" y="${spec.height - 148}" width="${spec.width - 48}" height="124" fill="#FFFAF9" fill-opacity="0.92" />
  <line x1="24" y1="${spec.height - 148}" x2="${spec.width - 24}" y2="${spec.height - 148}" stroke="#342A2D" stroke-opacity="0.1" stroke-width="1" />

  <text x="52" y="${spec.height - 92}" font-family="Cormorant Garamond, Georgia, serif" font-size="28" font-weight="600" fill="#342A2D">
    ${spec.caption.replace(/&/g, '&amp;')}
  </text>
  <text x="52" y="${spec.height - 58}" font-family="DM Sans, sans-serif" font-size="14" fill="#817278" letter-spacing="0.5">
    ${spec.subcaption.replace(/&/g, '&amp;')}
  </text>
</svg>`;

  const fullPath = path.resolve(process.cwd(), spec.filepath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, svg, 'utf8');
}

console.log(`Generated ${plates.length} local art-directed salon plates.`);
