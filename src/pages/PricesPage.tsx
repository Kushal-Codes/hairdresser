import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Sparkles } from 'lucide-react';
import { SERVICE_CATEGORIES, BUSINESS_DETAILS } from '../data/salonData';

export function PricesPage() {
  return (
    <div className="bg-[#FFFAF9]">
      {/* Page Hero */}
      <section className="bg-[#F8E9EB]/70 border-b border-[#342A2D]/10 py-14 sm:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#A65C73]">
              SERVICE GUIDE & PRICING · 92 BOUGHTON
            </p>
            <h1 className="font-editorial text-4xl sm:text-6xl font-semibold text-[#342A2D]">
              Service Guide & Pricing.
            </h1>
            <p className="text-base sm:text-lg text-[#817278] leading-relaxed">
              Explore our salon prices for cutting, blow-dries, styling, and colour maintenance below. For bespoke blonding, balayage, or colour transformations, we provide a personal quote during your consultation.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={BUSINESS_DETAILS.phoneTel}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-[#FFFFFF] bg-[#A65C73] hover:bg-[#342A2D] transition-colors tabular-nums"
              >
                <Phone className="w-4 h-4" />
                Call {BUSINESS_DETAILS.phoneDisplay} to Book
              </a>
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-[#342A2D] bg-[#FFFFFF] border border-[#342A2D]/20 hover:bg-[#F8E9EB] transition-colors"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Categorised Pricing & Service Table */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Signature Package Callout */}
          <div className="p-6 sm:p-8 bg-[#FFFFFF] border border-[#342A2D]/15 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A65C73] uppercase">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>Signature Salon Package · £60</span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#342A2D]">
                Colour Maintenance Package — £60
              </h2>
              <p className="text-xs sm:text-sm text-[#817278] leading-relaxed">
                Includes a root touch-up OR all-over colour refresh, tailored haircut, and full salon blow-dry finish. Skin patch testing is required 48 hours prior for new colour clients.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href={BUSINESS_DETAILS.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-[#FFFFFF] bg-[#A65C73] hover:bg-[#342A2D] transition-colors tabular-nums"
              >
                <Phone className="w-4 h-4" />
                Call 01244 319991 to Book
              </a>
            </div>
          </div>

          {/* Service Groups */}
          {SERVICE_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="bg-[#FFFFFF] border border-[#342A2D]/10 overflow-hidden"
            >
              <div className="p-6 sm:px-8 bg-[#F8E9EB]/55 border-b border-[#342A2D]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="text-xs font-semibold tracking-wider text-[#A65C73]">
                    {category.kicker}
                  </p>
                  <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#342A2D]">
                    {category.fullTitle}
                  </h2>
                </div>
                <Link
                  to={category.route}
                  className="text-xs font-semibold text-[#342A2D] hover:text-[#A65C73] underline underline-offset-4 whitespace-nowrap"
                >
                  View Service Details →
                </Link>
              </div>

              <div className="divide-y divide-[#342A2D]/10">
                {category.services.map((service) => (
                  <div
                    key={service.name}
                    className="p-6 sm:px-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
                  >
                    <div className="md:col-span-5">
                      <h3 className="font-editorial text-xl font-semibold text-[#342A2D]">
                        {service.name}
                      </h3>
                      <p className="text-xs text-[#817278] mt-1">
                        {service.description}
                      </p>
                    </div>

                    <div className="md:col-span-3 text-xs text-[#817278]">
                      <span className="block text-[#342A2D] font-medium">
                        {service.stylistNote}
                      </span>
                      {service.consultationNote && (
                        <span className="block mt-0.5">
                          {service.consultationNote}
                        </span>
                      )}
                    </div>

                    <div className="md:col-span-2 text-sm font-semibold text-[#A65C73] tabular-nums">
                      {service.priceDisplay}
                    </div>

                    <div className="md:col-span-2 md:text-right">
                      <a
                        href={BUSINESS_DETAILS.phoneTel}
                        className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-[#342A2D] border border-[#342A2D]/20 hover:bg-[#F8E9EB] transition-colors whitespace-nowrap tabular-nums"
                      >
                        Call 01244 319991
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Consultation & Patch Test Guidance */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 bg-[#F8E9EB]/50 border border-[#342A2D]/10 space-y-2">
              <h3 className="font-editorial text-2xl font-semibold text-[#342A2D]">
                Colour Consultations
              </h3>
              <p className="text-xs text-[#817278] leading-relaxed">
                Planning a major blonde transformation or colour refresh & restyle? Pop into 92 Boughton or call us so your stylist can assess your hair and confirm your exact quote.
              </p>
            </div>
            <div className="p-6 bg-[#F8E9EB]/50 border border-[#342A2D]/10 space-y-2">
              <h3 className="font-editorial text-2xl font-semibold text-[#342A2D]">
                Skin Testing Advice
              </h3>
              <p className="text-xs text-[#817278] leading-relaxed">
                For new colour clients, please check with your stylist when booking whether a quick 48-hour skin patch test is required prior to your appointment.
              </p>
            </div>
            <div className="p-6 bg-[#F8E9EB]/50 border border-[#342A2D]/10 space-y-2">
              <h3 className="font-editorial text-2xl font-semibold text-[#342A2D]">
                Changes & Cancellations
              </h3>
              <p className="text-xs text-[#817278] leading-relaxed">
                If you need to rearrange your appointment time, please telephone 01244 319991 with as much notice as possible so we can offer the slot to another client.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
