import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  MapPin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import {
  BUSINESS_DETAILS,
  SERVICE_CATEGORIES,
  GALLERY_ITEMS,
  STYLIST_PROFILES,
  VERIFIED_REVIEWS
} from '../data/salonData';
import { EditorialImage } from '../components/gallery/EditorialImage';
import { LightboxModal } from '../components/gallery/LightboxModal';
import type { GalleryItem } from '../data/salonData';

export function HomePage() {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(
    null
  );

  const featuredTransformations = GALLERY_ITEMS.slice(0, 5);
  const currentReview = VERIFIED_REVIEWS[activeReviewIndex];

  function handlePrevReview() {
    setActiveReviewIndex((prev) =>
      prev === 0 ? VERIFIED_REVIEWS.length - 1 : prev - 1
    );
  }

  function handleNextReview() {
    setActiveReviewIndex((prev) =>
      prev === VERIFIED_REVIEWS.length - 1 ? 0 : prev + 1
    );
  }

  return (
    <div>
      {/* SECTION 2: Signature Editorial Hero */}
      <section className="relative bg-gradient-to-b from-[#F8E9EB]/75 via-[#FFFAF9] to-[#FFFAF9] border-b border-[#342A2D]/10 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left Side: Editorial Typography & CTAs */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <div className="text-xs font-semibold tracking-[0.2em] text-[#A65C73]">
                THE HAIRDRESSERS · BOUGHTON, CHESTER
              </div>

              <h1
                className="font-editorial text-[#342A2D] font-normal leading-[1.06] tracking-tight"
                style={{ fontSize: 'clamp(2.65rem, 4.8vw, 4.5rem)' }}
              >
                Your Hair.{' '}
                <span className="italic font-normal text-[#A65C73] block sm:inline">
                  Beautifully Done.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#817278] leading-relaxed max-w-xl">
                From fresh cuts and beautiful colour to your next big hair
                transformation. Discover a welcoming, creative hair salon in the
                heart of Boughton.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider text-[#FFFFFF] bg-[#A65C73] hover:bg-[#342A2D] transition-colors duration-150 whitespace-nowrap"
                >
                  Book Your Appointment
                </Link>
                <Link
                  to="/our-work"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-[#342A2D] bg-[#FFFFFF] border border-[#342A2D]/20 hover:bg-[#F8E9EB] transition-colors duration-150 whitespace-nowrap"
                >
                  <span>Explore Our Work</span>
                  <ArrowRight className="w-4 h-4 text-[#A65C73]" />
                </Link>
              </div>

              <div className="pt-4 border-t border-[#342A2D]/10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#817278]">
                <span className="font-medium text-[#342A2D]">
                  92 Boughton, Chester, CH3 5AQ
                </span>
                <span aria-hidden="true">·</span>
                <a
                  href={BUSINESS_DETAILS.phoneTel}
                  className="font-semibold text-[#A65C73] hover:underline tabular-nums"
                >
                  01244 319991
                </a>
                <span aria-hidden="true">·</span>
                <span>Women’s, Gents’ & Family Hair</span>
              </div>
            </div>

            {/* Right Side: Asymmetric Dual-Frame Editorial Composition */}
            <div className="lg:col-span-6 relative grid grid-cols-12 gap-4 items-end">
              <div className="col-span-7 bg-[#FFFFFF] p-2.5 sm:p-3.5 border border-[#342A2D]/10 shadow-sm">
                <EditorialImage
                  src="/images/balayage/lived-in-blonde-balayage.jpg"
                  alt="Sun-kissed dimensional blonde waves at The Hairdressers, Boughton"
                  aspectClass="aspect-[4/5]"
                  caption="Sun-Kissed Blonde & Waves"
                  credit="92 Boughton"
                  priority
                />
              </div>

              <div className="col-span-5 flex flex-col justify-between space-y-3 sm:space-y-4">
                <div className="p-3 sm:p-4 bg-[#F8E9EB] border border-[#C98F9E]/30">
                  <p className="font-editorial italic text-base sm:text-lg text-[#342A2D] leading-snug">
                    “Colour, cut and a little confidence.”
                  </p>
                  <p className="text-[11px] sm:text-xs text-[#817278] mt-1">
                    92 Boughton, Chester
                  </p>
                </div>

                <div className="bg-[#FFFFFF] p-2 sm:p-3 border border-[#342A2D]/10 shadow-sm">
                  <EditorialImage
                    src="/images/hero/boughton-salon-detail.jpg"
                    alt="Colour refresh and layered restyle at The Hairdressers Chester"
                    aspectClass="aspect-[4/5]"
                    caption="Colour Refresh & Restyle"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Full-Width Key Salon Strip Below Hero Split */}
          <div className="mt-12 pt-8 border-t border-[#342A2D]/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div>
              <p className="font-semibold text-[#342A2D]">01. Specialist Colour & Blonding</p>
              <p className="text-[#817278] mt-1">
                Lived-in balayage, bespoke blonde toning, and full colour refreshes.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#342A2D]">02. Precision Cuts & Restyles</p>
              <p className="text-[#817278] mt-1">
                Tailored women’s cuts, bouncy blow-dries, and complete restyles.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#342A2D]">03. Gents’ Cuts & Barbering</p>
              <p className="text-[#817278] mt-1">
                Dedicated men’s haircutting and barbering by appointment at 92 Boughton.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#342A2D]">04. Personal Salon Care</p>
              <p className="text-[#817278] mt-1">
                Call <span className="tabular-nums font-medium text-[#342A2D]">01244 319991</span> to book your consultation or appointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Services Editorial ("Good Hair Starts Here.") */}
      <section className="py-16 sm:py-24 bg-[#FFFAF9] border-b border-[#342A2D]/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-[#A65C73]">
                THE BOUGHTON SERVICE EDIT
              </p>
              <h2 className="font-editorial text-3xl sm:text-5xl font-semibold text-[#342A2D] mt-2">
                Good Hair Starts Here.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#342A2D] hover:text-[#A65C73] transition-colors whitespace-nowrap"
            >
              <span>View Full Service Directory</span>
              <ArrowRight className="w-4 h-4 text-[#A65C73]" />
            </Link>
          </div>

          {/* Asymmetrical Editorial Service Composition */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Feature 1: Cut & Style (5 cols, 4:5 portrait) */}
            <article className="md:col-span-5 bg-[#FFFFFF] border border-[#342A2D]/10 p-5">
              <Link to="/services/womens-cuts" className="block">
                <EditorialImage
                  src="/images/cuts/restyle-layered-cut.jpg"
                  alt="Women's Haircuts, Layers and Restyling at The Hairdressers"
                  aspectClass="aspect-[4/5]"
                />
                <div className="pt-5 space-y-2">
                  <div className="text-xs text-[#817278]">
                    <span>01. Cut & Style · From £35 Cut & Blow-Dry</span>
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#342A2D]">
                    Women’s Haircuts & Restyling
                  </h3>
                  <p className="text-sm text-[#817278] leading-relaxed">
                    From £35 cut and blow-dries to £45 transformative restyles, £20 wash cut & blast, and £15 dry cuts.
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A65C73] pt-1">
                    Explore Cut & Style <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </article>

            {/* Feature 2 & 3 Stacked: Colour & Balayage + Highlights & Blonding (7 cols) */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <article className="bg-[#F8E9EB]/55 border border-[#342A2D]/10 p-5">
                <Link to="/services/colouring" className="block">
                  <EditorialImage
                    src="/images/colour/colour-refresh-brunette.jpg"
                    alt="Hair Colouring and Colour Refreshes in Boughton Chester"
                    aspectClass="aspect-[4/5]"
                  />
                  <div className="pt-4 space-y-2">
                    <p className="text-xs text-[#817278]">02. Colour & £60 Maintenance Package</p>
                    <h3 className="font-editorial text-2xl font-semibold text-[#342A2D]">
                      Hair Colouring & Glossing
                    </h3>
                    <p className="text-sm text-[#817278]">
                      Root regrowth tints, £60 colour maintenance packages (with cut & blow-dry), and full colour refreshes.
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A65C73] pt-1">
                      Explore Hair Colouring <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </article>

              <article className="bg-[#FFFFFF] border border-[#342A2D]/10 p-5">
                <Link to="/services/balayage-highlights" className="block">
                  <EditorialImage
                    src="/images/hero/boughton-blonde-editorial.jpg"
                    alt="Blonde Transformations, Balayage and Highlights"
                    aspectClass="aspect-[4/5]"
                  />
                  <div className="pt-4 space-y-2">
                    <p className="text-xs text-[#817278]">03. Highlights & Blonding</p>
                    <h3 className="font-editorial text-2xl font-semibold text-[#342A2D]">
                      Balayage & Blonde Work
                    </h3>
                    <p className="text-sm text-[#817278]">
                      Custom foil highlights, root melts, and creamy blonde transformations tailored to you.
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A65C73] pt-1">
                      Explore Balayage & Blonde <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </article>

              {/* Horizontal Editorial Feature inside right column: Men's Grooming */}
              <article className="sm:col-span-2 bg-[#FFFFFF] border border-[#342A2D]/10 p-5 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-5">
                  <EditorialImage
                    src="/images/barbering/gents-precision-cut.jpg"
                    alt="Men's haircuts and barbering at 92 Boughton"
                    aspectClass="aspect-[4/3]"
                  />
                </div>
                <div className="sm:col-span-7 space-y-2">
                  <p className="text-xs text-[#817278]">
                    04. Men’s Grooming & Barbering
                  </p>
                  <h3 className="font-editorial text-2xl font-semibold text-[#342A2D]">
                    Men’s Haircuts & Barbering
                  </h3>
                  <p className="text-sm text-[#817278] leading-relaxed">
                    Precision scissor-over-comb and clipper cuts by appointment in a calm, welcoming Boughton studio.
                  </p>
                  <Link
                    to="/services/mens-barbering"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A65C73] pt-1 hover:underline"
                  >
                    Explore Men’s Hair & Barbering <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            </div>
          </div>

          {/* Secondary Row: Blow-Dries, Children's Hair, Conditioning, and Upstairs Beauty */}
          <div className="mt-8 pt-8 border-t border-[#342A2D]/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_CATEGORIES.slice(3).map((cat, idx) => (
              <Link
                key={cat.id}
                to={cat.route}
                className="group p-5 bg-[#FFFFFF] border border-[#342A2D]/10 hover:border-[#A65C73] transition-colors flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <p className="text-xs text-[#817278]">
                    0{idx + 5}. {cat.shortTitle}
                  </p>
                  <h3 className="font-editorial text-xl font-semibold text-[#342A2D] group-hover:text-[#A65C73] transition-colors">
                    {cat.fullTitle}
                  </h3>
                  <p className="text-xs text-[#817278] leading-relaxed">
                    {cat.heroSummary}
                  </p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#A65C73]">
                  View Service Details <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Signature Colour Feature ("Colour Worth Falling For.") */}
      <section className="py-16 sm:py-24 bg-[#F8E9EB] border-b border-[#342A2D]/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 grid grid-cols-12 gap-4 items-center">
              <div className="col-span-7 bg-[#FFFFFF] p-2.5 border border-[#342A2D]/10">
                <EditorialImage
                  src="/images/blowdry/smooth-volume-blowdry.jpg"
                  alt="Bespoke blonde colour and bouncy curls at The Hairdressers Boughton"
                  aspectClass="aspect-[4/5]"
                  caption="Blonde Colour & Curls"
                />
              </div>
              <div className="col-span-5 bg-[#FFFFFF] p-2.5 border border-[#342A2D]/10">
                <EditorialImage
                  src="/images/colour/colour-refresh-brunette.jpg"
                  alt="Rich colour refresh and restyle at The Hairdressers Chester"
                  aspectClass="aspect-[4/5]"
                  caption="Colour Refresh & Restyle"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#A65C73]">
                BESPOKE COLOUR & BLONDING IN CHESTER
              </p>
              <h2 className="font-editorial text-4xl sm:text-5xl font-semibold text-[#342A2D] leading-tight">
                Colour Worth{' '}
                <span className="italic font-normal text-[#A65C73]">
                  Falling For.
                </span>
              </h2>
              <p className="text-base text-[#342A2D]/85 leading-relaxed">
                Whether you are looking for bright, creamy blonde ribbons, a low-maintenance root melt, or a full-head colour refresh and restyle, every colour service at 92 Boughton starts with a personal consultation.
              </p>

              <ul className="space-y-3 text-sm text-[#342A2D] border-t border-b border-[#342A2D]/12 py-5">
                <li className="flex items-baseline justify-between gap-4">
                  <span className="font-medium">Personalised Shade & Tone Consultations</span>
                  <span className="text-xs text-[#817278]">Tailored to your upkeep</span>
                </li>
                <li className="flex items-baseline justify-between gap-4">
                  <span className="font-medium">Blonde Transformations & Foil Highlights</span>
                  <span className="text-xs text-[#817278]">Bespoke tonal matching</span>
                </li>
                <li className="flex items-baseline justify-between gap-4">
                  <span className="font-medium">Colour Maintenance Package (Cut & Blow-Dry)</span>
                  <span className="text-xs font-semibold text-[#A65C73]">£60</span>
                </li>
              </ul>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Link
                  to="/services/colouring"
                  className="inline-flex items-center justify-center px-6 py-3 text-xs sm:text-sm font-semibold text-[#FFFFFF] bg-[#A65C73] hover:bg-[#342A2D] transition-colors whitespace-nowrap"
                >
                  Explore Colour Services
                </Link>
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center px-6 py-3 text-xs sm:text-sm font-semibold text-[#342A2D] bg-[#FFFAF9] border border-[#342A2D]/20 hover:bg-[#EED5DB] transition-colors whitespace-nowrap"
                >
                  Book a Colour Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Real Hair Transformations ("The Hair Edit.") */}
      <section className="py-16 sm:py-24 bg-[#FFFAF9] border-b border-[#342A2D]/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#A65C73]">
                SALON LOOKBOOK · 92 BOUGHTON
              </p>
              <h2 className="font-editorial text-4xl sm:text-5xl font-semibold text-[#342A2D] mt-1">
                The Hair Edit.
              </h2>
              <p className="text-base text-[#817278] mt-1">
                Real transformations. Beautiful results.
              </p>
            </div>
            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-[#FFFFFF] bg-[#342A2D] hover:bg-[#A65C73] transition-colors whitespace-nowrap"
            >
              <span>Explore Our Work</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Magazine-Inspired Asymmetric Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {featuredTransformations.map((item, index) => {
              const spanClass =
                index === 0
                  ? 'md:col-span-6'
                  : index === 1
                  ? 'md:col-span-6'
                  : 'md:col-span-4';
              return (
                <div
                  key={item.id}
                  className={`${spanClass} bg-[#FFFFFF] border border-[#342A2D]/10 p-4 flex flex-col justify-between`}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedGalleryItem(item)}
                    aria-label={`View salon look: ${item.title}`}
                    className="text-left w-full cursor-pointer focus-visible:outline-2 focus-visible:outline-[#A65C73]"
                  >
                    <EditorialImage
                      src={item.imagePath}
                      alt={item.altText}
                      aspectClass="aspect-[4/5]"
                    />
                    <div className="pt-4 space-y-1.5">
                      <div className="text-xs text-[#817278] flex flex-wrap items-center gap-1.5">
                        <span>{item.categories.join(' · ')}</span>
                        <span aria-hidden="true">/</span>
                        <span>Stylist: {item.stylist}</span>
                      </div>
                      <h3 className="font-editorial text-xl sm:text-2xl font-semibold text-[#342A2D] hover:text-[#A65C73] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#817278] line-clamp-2">
                        {item.editorialNote}
                      </p>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6: Meet Your Stylists */}
      <section className="py-16 sm:py-24 bg-[#F8E9EB]/50 border-b border-[#342A2D]/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#A65C73]">
                OUR TEAM · 92 BOUGHTON
              </p>
              <h2 className="font-editorial text-3xl sm:text-5xl font-semibold text-[#342A2D] mt-1">
                Meet Your Stylists.
              </h2>
              <p className="text-sm sm:text-base text-[#817278] mt-2 max-w-2xl">
                Experienced colourists, stylists, and barbers dedicated to warm, unhurried care in the heart of Boughton.
              </p>
            </div>
            <Link
              to="/team"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#342A2D] hover:text-[#A65C73] whitespace-nowrap"
            >
              <span>Meet the Full Team</span>
              <ArrowRight className="w-4 h-4 text-[#A65C73]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STYLIST_PROFILES.map((stylist) => (
              <article
                key={stylist.id}
                className="bg-[#FFFFFF] border border-[#342A2D]/10 p-5 flex flex-col justify-between"
              >
                <div>
                  <EditorialImage
                    src={stylist.portraitImage}
                    alt={`${stylist.name} — ${stylist.role} at The Hairdressers, Boughton`}
                    aspectClass="aspect-[4/5]"
                  />
                  <div className="pt-5 space-y-2.5">
                    <p className="text-xs text-[#A65C73] font-medium">
                      {stylist.role}
                    </p>
                    <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#342A2D]">
                      {stylist.name}
                    </h3>
                    <p className="text-xs text-[#817278] leading-relaxed">
                      {stylist.bio}
                    </p>
                    <div className="pt-2 text-xs text-[#342A2D]">
                      <span className="text-[#817278] block mb-1">
                        Specialties:
                      </span>
                      <span>{stylist.specialties.join(' · ')}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#342A2D]/10">
                  <a
                    href={stylist.phoneTel}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-[#FFFFFF] bg-[#A65C73] hover:bg-[#342A2D] transition-colors tabular-nums"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call 01244 319991 to Book
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: The Salon Experience ("A Little Time for You.") */}
      <section className="py-16 sm:py-24 bg-[#FFFAF9] border-b border-[#342A2D]/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-5">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#A65C73]">
                92 BOUGHTON · CHESTER CH3 5AQ
              </p>
              <h2 className="font-editorial text-4xl sm:text-5xl font-semibold text-[#342A2D]">
                A Little Time{' '}
                <span className="italic font-normal text-[#A65C73]">for You.</span>
              </h2>
              <p className="text-base text-[#817278] leading-relaxed">
                Clients describe The Hairdressers in Boughton as warm, friendly, and unpretentious—a place where you can sit back with a lovely cup of coffee while your stylist takes the time to listen.
              </p>
              <div className="space-y-3 pt-2 text-sm text-[#342A2D]">
                <p>
                  · <strong>Welcoming Conversations:</strong> Honest advice without salon intimidation.
                </p>
                <p>
                  · <strong>Whole-Community Care:</strong> Women’s colour and cuts, gents’ barbering, and children’s cuts under one roof.
                </p>
                <p>
                  · <strong>Convenient Boughton Location:</strong> Situated at 92 Boughton, moments from Chester city centre.
                </p>
              </div>
              <div className="pt-3">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#A65C73] hover:text-[#342A2D] transition-colors"
                >
                  <span>Read More About Our Boughton Studio</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#FFFFFF] p-3 sm:p-4 border border-[#342A2D]/10">
              <EditorialImage
                src="/images/salon/boughton-92-interior.jpg"
                alt="Interior and styling chairs at The Hairdressers, 92 Boughton, Chester"
                aspectClass="aspect-[4/3]"
                caption="The Hairdressers · 92 Boughton, Chester, CH3 5AQ"
                credit="Tel: 01244 319991"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Client Love (Customer Feedback Carousel) */}
      <section className="py-16 sm:py-24 bg-[#342A2D] text-[#FFFAF9] border-b border-[#342A2D]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 space-y-4">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#EED5DB]">
                CLIENT LOVE · TESTIMONIALS
              </p>
              <h2 className="font-editorial text-4xl sm:text-5xl font-semibold text-[#FFFAF9]">
                Words From Our Chairs.
              </h2>
              <p className="text-sm text-[#EED5DB]/80 leading-relaxed">
                Kind words from our regulars across Boughton and Chester.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrevReview}
                  aria-label="Previous client review"
                  className="w-11 h-11 border border-[#FFFAF9]/25 hover:bg-[#FFFAF9]/10 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5 text-[#EED5DB]" />
                </button>
                <button
                  type="button"
                  onClick={handleNextReview}
                  aria-label="Next client review"
                  className="w-11 h-11 border border-[#FFFAF9]/25 hover:bg-[#FFFAF9]/10 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5 text-[#EED5DB]" />
                </button>
                <span className="text-xs text-[#EED5DB]/75 pl-2 tabular-nums">
                  {activeReviewIndex + 1} / {VERIFIED_REVIEWS.length}
                </span>
              </div>
            </div>

            <div className="lg:col-span-8 bg-[#FFFAF9]/5 border border-[#FFFAF9]/15 p-8 sm:p-12">
              <div className="text-xs text-[#EED5DB] flex flex-wrap items-center gap-2 mb-4">
                <span>Stylist: {currentReview.stylistMentioned}</span>
                <span aria-hidden="true">·</span>
                <span>{currentReview.serviceMentioned}</span>
              </div>

              <blockquote className="font-editorial italic text-2xl sm:text-4xl text-[#FFFAF9] leading-snug">
                “{currentReview.quote}”
              </blockquote>

              <p className="text-sm text-[#EED5DB]/85 mt-4 leading-relaxed">
                {currentReview.contextSummary}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: Social Gallery ("Seen on the Feed.") */}
      <section className="py-16 sm:py-24 bg-[#FFFAF9] border-b border-[#342A2D]/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#A65C73]">
                STAY CONNECTED · CHESTER
              </p>
              <h2 className="font-editorial text-3xl sm:text-5xl font-semibold text-[#342A2D] mt-1">
                Seen on the Feed.
              </h2>
              <p className="text-sm text-[#817278] mt-1">
                Follow our latest transformations, seasonal colour inspiration, and salon updates from 92 Boughton.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={BUSINESS_DETAILS.social.salonFacebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#342A2D] bg-[#F8E9EB] border border-[#C98F9E]/40 hover:bg-[#EED5DB] transition-colors whitespace-nowrap"
              >
                <span>Follow on Facebook</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#A65C73]" />
              </a>
              <a
                href={BUSINESS_DETAILS.social.jaimeleighInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#342A2D] bg-[#FFFFFF] border border-[#342A2D]/20 hover:bg-[#F8E9EB] transition-colors whitespace-nowrap"
              >
                <span>Follow on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#A65C73]" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {GALLERY_ITEMS.slice(0, 4).map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedGalleryItem(item)}
                className="text-left group bg-[#FFFFFF] p-2.5 border border-[#342A2D]/10 cursor-pointer"
              >
                <EditorialImage
                  src={item.imagePath}
                  alt={item.altText}
                  aspectClass="aspect-[4/5]"
                  caption={item.title}
                />
                <p className="text-xs text-[#817278] mt-1">Stylist: {item.stylist}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: Appointment CTA ("Your Next Good Hair Day Awaits.") */}
      <section className="py-16 sm:py-24 bg-[#F8E9EB]">
        <div className="max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-xs font-semibold tracking-[0.22em] text-[#A65C73]">
            92 BOUGHTON · CHESTER · CH3 5AQ
          </p>
          <h2 className="font-editorial text-4xl sm:text-6xl font-semibold text-[#342A2D]">
            Your Next Good Hair Day{' '}
            <span className="italic font-normal text-[#A65C73]">Awaits.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#817278] max-w-xl mx-auto leading-relaxed">
            Ready for a colour refresh, bespoke blonde balayage, gents’ cut, or complete restyle? Speak directly with our team at 92 Boughton today.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider text-[#FFFFFF] bg-[#A65C73] hover:bg-[#342A2D] transition-colors whitespace-nowrap"
            >
              Book Appointment
            </Link>
            <a
              href={BUSINESS_DETAILS.phoneTel}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold text-[#342A2D] bg-[#FFFFFF] border border-[#342A2D]/25 hover:bg-[#EED5DB] transition-colors whitespace-nowrap tabular-nums"
            >
              <Phone className="w-4 h-4 text-[#A65C73]" />
              Call the Salon (01244 319991)
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-[#342A2D] bg-transparent border border-[#342A2D]/20 hover:bg-[#FFFFFF] transition-colors whitespace-nowrap"
            >
              <MapPin className="w-4 h-4 text-[#A65C73]" />
              Find Us in Boughton
            </Link>
          </div>
        </div>
      </section>

      <LightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />
    </div>
  );
}
