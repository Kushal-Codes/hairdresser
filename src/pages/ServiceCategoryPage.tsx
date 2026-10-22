import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Phone, ArrowLeft, ArrowRight, CheckCircle2, Info } from 'lucide-react';
import {
  BUSINESS_DETAILS,
  SERVICE_CATEGORIES,
  GALLERY_ITEMS
} from '../data/salonData';
import { getServiceCategoryBySlug } from '../utils/salonLogic';
import { EditorialImage } from '../components/gallery/EditorialImage';

interface ServiceCategoryPageProps {
  slug: string;
}

export function ServiceCategoryPage({ slug }: ServiceCategoryPageProps) {
  const category = getServiceCategoryBySlug(slug);

  if (!category) {
    return <Navigate to="/services" replace />;
  }

  const isMensPage = slug === 'mens-barbering';

  const relatedGallery = GALLERY_ITEMS.filter((item) => {
    if (slug === 'womens-cuts') return item.categories.includes('Cuts');
    if (slug === 'colouring') return item.categories.includes('Colour');
    if (slug === 'balayage-highlights')
      return (
        item.categories.includes('Blonde') || item.categories.includes('Balayage')
      );
    if (slug === 'blow-dries') return item.categories.includes('Styling');
    if (slug === 'mens-barbering') return item.categories.includes("Men's Hair");
    if (slug === 'childrens-hair')
      return item.categories.includes('Transformations');
    return true;
  }).slice(0, 3);

  return (
    <div className="bg-[#FFFAF9]">
      {/* Breadcrumb & Hero */}
      <section
        className={`border-b border-[#342A2D]/10 py-12 sm:py-20 ${
          isMensPage ? 'bg-[#EFECEB]' : 'bg-[#F8E9EB]/65'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#817278] hover:text-[#342A2D] mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to All Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#A65C73]">
                {category.kicker}
              </p>
              <h1 className="font-editorial text-4xl sm:text-6xl font-semibold text-[#342A2D]">
                {category.fullTitle}
              </h1>
              <p className="text-base sm:text-lg text-[#342A2D]/85 leading-relaxed max-w-2xl">
                {category.heroSummary}
              </p>
              <p className="text-sm text-[#817278] leading-relaxed max-w-2xl">
                {category.editorialIntro}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={BUSINESS_DETAILS.phoneTel}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-[#FFFFFF] bg-[#A65C73] hover:bg-[#342A2D] transition-colors whitespace-nowrap tabular-nums"
                >
                  <Phone className="w-4 h-4" />
                  Call {BUSINESS_DETAILS.phoneDisplay} to Book
                </a>
                <Link
                  to="/booking"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-[#342A2D] bg-[#FFFFFF] border border-[#342A2D]/20 hover:bg-[#F8E9EB] transition-colors whitespace-nowrap"
                >
                  Prepare Consultation Enquiry
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#FFFFFF] p-3 border border-[#342A2D]/10">
              <EditorialImage
                src={category.heroImage}
                alt={category.fullTitle}
                aspectClass={
                  slug === 'mens-barbering' || slug === 'beauty-nails'
                    ? 'aspect-[4/3]'
                    : 'aspect-[4/5]'
                }
                caption={category.fullTitle}
                credit="92 Boughton, Chester"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Confirmed Services Breakdown & Pricing Guidance */}
      <section className="py-16 sm:py-24 border-b border-[#342A2D]/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-[#A65C73]">
                  SERVICE OPTIONS & CONSULTATION PRICING
                </p>
                <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#342A2D] mt-1">
                  Available Appointments
                </h2>
              </div>

              {category.isIndependentProvider && (
                <div className="p-5 bg-[#F8E9EB] border border-[#C98F9E]/50 flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#A65C73] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-[#342A2D] leading-relaxed">
                    <strong>Independent Practitioners at 92 Boughton:</strong> Nail and beauty services operating upstairs at the premises are run as independent businesses. They maintain separate booking diaries and price lists from the hair salon. Call{' '}
                    <a
                      href={BUSINESS_DETAILS.phoneTel}
                      className="underline font-semibold tabular-nums"
                    >
                      01244 319991
                    </a>{' '}
                    and our team will gladly put you in touch.
                  </div>
                </div>
              )}

              {category.skinTestRequired && (
                <div className="p-5 bg-[#F8E9EB]/70 border border-[#342A2D]/15 flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#A65C73] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-[#342A2D] leading-relaxed">
                    <strong>Colour Consultations & Skin Patch Testing:</strong> When booking a new colour or blonding service, please ask your stylist whether a 48-hour skin test and quick strand consultation is needed prior to your appointment.
                  </div>
                </div>
              )}

              <div className="divide-y divide-[#342A2D]/10 border-t border-b border-[#342A2D]/15 bg-[#FFFFFF]">
                {category.services.map((service) => (
                  <div
                    key={service.name}
                    className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1.5 max-w-xl">
                      <h3 className="font-editorial text-2xl font-semibold text-[#342A2D]">
                        {service.name}
                      </h3>
                      <p className="text-sm text-[#817278] leading-relaxed">
                        {service.description}
                      </p>
                      <p className="text-xs text-[#342A2D]/80 pt-1">
                        {service.stylistNote}
                        {service.consultationNote
                          ? ` · ${service.consultationNote}`
                          : ''}
                      </p>
                    </div>

                    <div className="sm:text-right shrink-0 space-y-2">
                      <p className="text-xs font-semibold text-[#A65C73]">
                        {service.priceDisplay}
                      </p>
                      <a
                        href={BUSINESS_DETAILS.phoneTel}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#342A2D] border border-[#342A2D]/20 hover:bg-[#F8E9EB] transition-colors tabular-nums"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#A65C73]" />
                        Enquire (01244 319991)
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar: What to Expect & Direct Contact */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="bg-[#FFFFFF] border border-[#342A2D]/10 p-6 space-y-4">
                <h3 className="font-editorial text-2xl font-semibold text-[#342A2D]">
                  What to Expect at 92 Boughton
                </h3>
                <ul className="space-y-3 text-sm text-[#817278]">
                  {category.whatToExpect.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#A65C73] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#342A2D] text-[#FFFAF9] p-6 space-y-4">
                <p className="text-xs tracking-[0.18em] text-[#EED5DB]">
                  DIRECT BOOKING
                </p>
                <h3 className="font-editorial text-2xl font-semibold">
                  Speak With a Stylist
                </h3>
                <p className="text-xs text-[#EED5DB]/80 leading-relaxed">
                  Call the salon to check diary availability or discuss your hair goals with Jaimeleigh, Jenny, or Beccie.
                </p>
                <a
                  href={BUSINESS_DETAILS.phoneTel}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold bg-[#A65C73] text-[#FFFFFF] hover:bg-[#C98F9E] hover:text-[#342A2D] transition-colors tabular-nums"
                >
                  <Phone className="w-4 h-4" />
                  Call {BUSINESS_DETAILS.phoneDisplay}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Portfolio Work & Other Service Categories */}
      <section className="py-16 bg-[#F8E9EB]/40">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-[#A65C73]">
                RECENT SALON RESULTS
              </p>
              <h2 className="font-editorial text-3xl font-semibold text-[#342A2D] mt-1">
                From Our Portfolio
              </h2>
            </div>
            <Link
              to="/our-work"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#342A2D] hover:text-[#A65C73]"
            >
              <span>View Full Lookbook</span>
              <ArrowRight className="w-4 h-4 text-[#A65C73]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedGallery.map((item) => (
              <div
                key={item.id}
                className="bg-[#FFFFFF] p-3.5 border border-[#342A2D]/10"
              >
                <EditorialImage
                  src={item.imagePath}
                  alt={item.altText}
                  aspectClass="aspect-[4/5]"
                  caption={item.title}
                  credit={item.stylist}
                />
              </div>
            ))}
          </div>

          {/* Quick Switcher to Other Service Pages */}
          <div className="pt-8 border-t border-[#342A2D]/10">
            <p className="text-xs font-semibold tracking-wider text-[#817278] uppercase mb-4">
              Explore Other Service Areas at 92 Boughton
            </p>
            <div className="flex flex-wrap gap-2">
              {SERVICE_CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  to={cat.route}
                  className={`px-4 py-2 text-xs font-medium border transition-colors ${
                    cat.slug === slug
                      ? 'bg-[#342A2D] text-[#FFFFFF] border-[#342A2D]'
                      : 'bg-[#FFFFFF] text-[#342A2D] border-[#342A2D]/15 hover:bg-[#F8E9EB]'
                  }`}
                >
                  {cat.fullTitle}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
