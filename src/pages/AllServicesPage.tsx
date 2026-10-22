import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { SERVICE_CATEGORIES, BUSINESS_DETAILS } from '../data/salonData';
import { EditorialImage } from '../components/gallery/EditorialImage';

export function AllServicesPage() {
  return (
    <div className="bg-[#FFFAF9]">
      {/* Page Hero */}
      <section className="bg-[#F8E9EB]/70 border-b border-[#342A2D]/10 py-14 sm:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#A65C73]">
              COMPLETE SERVICE CATALOGUE · 92 BOUGHTON
            </p>
            <h1 className="font-editorial text-4xl sm:text-6xl font-semibold text-[#342A2D]">
              All Hair & Studio Services.
            </h1>
            <p className="text-base sm:text-lg text-[#817278] leading-relaxed">
              Every service we publish reflects work genuinely offered at The Hairdressers, 92 Boughton, Chester. Explore our eight specialist service areas below or call{' '}
              <a
                href={BUSINESS_DETAILS.phoneTel}
                className="text-[#342A2D] font-semibold underline underline-offset-4 tabular-nums"
              >
                {BUSINESS_DETAILS.phoneDisplay}
              </a>{' '}
              for a personal consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Catalogue Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICE_CATEGORIES.map((category, index) => (
            <article
              key={category.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-16 border-b border-[#342A2D]/10 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div
                className={`lg:col-span-5 ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <div className="bg-[#FFFFFF] p-3 border border-[#342A2D]/10">
                  <EditorialImage
                    src={category.heroImage}
                    alt={category.fullTitle}
                    aspectClass={
                      category.slug === 'mens-barbering' ||
                      category.slug === 'beauty-nails'
                        ? 'aspect-[4/3]'
                        : 'aspect-[4/5]'
                    }
                    caption={category.fullTitle}
                  />
                </div>
              </div>

              <div
                className={`lg:col-span-7 space-y-5 ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <div className="text-xs text-[#A65C73] font-semibold tracking-wider">
                  {category.kicker}
                </div>

                <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#342A2D]">
                  {category.fullTitle}
                </h2>

                <p className="text-sm sm:text-base text-[#817278] leading-relaxed">
                  {category.editorialIntro}
                </p>

                {category.isIndependentProvider && (
                  <div className="p-4 bg-[#F8E9EB] border border-[#C98F9E]/40 text-xs text-[#342A2D]">
                    <strong>Important Notice:</strong> Beauty and nail treatments at 92 Boughton are operated by independent beauty professionals based at the premises rather than directly provided by the hair salon.
                  </div>
                )}

                <div className="pt-2 divide-y divide-[#342A2D]/10 border-t border-b border-[#342A2D]/10">
                  {category.services.map((srv) => (
                    <div
                      key={srv.name}
                      className="py-3.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2"
                    >
                      <div>
                        <p className="font-medium text-sm text-[#342A2D]">
                          {srv.name}
                        </p>
                        <p className="text-xs text-[#817278] mt-0.5">
                          {srv.stylistNote}
                        </p>
                      </div>
                      <span className="text-xs font-medium text-[#A65C73] shrink-0">
                        {srv.priceDisplay}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    to={category.route}
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-[#FFFFFF] bg-[#A65C73] hover:bg-[#342A2D] transition-colors whitespace-nowrap"
                  >
                    <span>Explore {category.shortTitle}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={BUSINESS_DETAILS.phoneTel}
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-[#342A2D] bg-[#FFFFFF] border border-[#342A2D]/20 hover:bg-[#F8E9EB] transition-colors whitespace-nowrap tabular-nums"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#A65C73]" />
                    Call {BUSINESS_DETAILS.phoneDisplay}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
