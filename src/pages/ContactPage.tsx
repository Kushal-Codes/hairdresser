import React from 'react';
import { Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data/salonData';
import { AppointmentEnquiryPlanner } from '../components/booking/AppointmentEnquiryPlanner';

export function ContactPage() {
  return (
    <div className="bg-[#FFFAF9]">
      {/* Page Hero */}
      <section className="bg-[#F8E9EB]/70 border-b border-[#342A2D]/10 py-14 sm:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#A65C73]">
              VISIT OR TELEPHONE · 92 BOUGHTON, CHESTER
            </p>
            <h1 className="font-editorial text-4xl sm:text-6xl font-semibold text-[#342A2D]">
              Contact & Find Us.
            </h1>
            <p className="text-base sm:text-lg text-[#817278] leading-relaxed">
              We are situated at 92 Boughton, Chester, CH3 5AQ. Call us directly on{' '}
              <a
                href={BUSINESS_DETAILS.phoneTel}
                className="text-[#342A2D] font-semibold underline underline-offset-4 tabular-nums"
              >
                {BUSINESS_DETAILS.phoneDisplay}
              </a>{' '}
              or get in touch with our team on Facebook or Instagram.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details + Map & Directions */}
      <section className="py-16 sm:py-24 border-b border-[#342A2D]/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Address, Telephone, Socials, Hours Note */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#FFFFFF] border border-[#342A2D]/10 p-6 space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A65C73] uppercase">
                  <Phone className="w-4 h-4" />
                  <span>Main Salon Telephone</span>
                </div>
                <p className="font-editorial text-3xl font-semibold text-[#342A2D] tabular-nums">
                  {BUSINESS_DETAILS.phoneDisplay}
                </p>
                <p className="text-xs text-[#817278]">
                  Tap below to call the salon directly for appointments, colour consultations, or stylist enquiries.
                </p>
                <a
                  href={BUSINESS_DETAILS.phoneTel}
                  className="inline-flex items-center justify-center w-full py-3 px-4 text-xs font-semibold text-[#FFFFFF] bg-[#A65C73] hover:bg-[#342A2D] transition-colors tabular-nums"
                >
                  Call {BUSINESS_DETAILS.phoneDisplay}
                </a>
              </div>

              <div className="bg-[#FFFFFF] border border-[#342A2D]/10 p-6 space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A65C73] uppercase">
                  <MapPin className="w-4 h-4" />
                  <span>Salon Address</span>
                </div>
                <address className="not-italic font-editorial text-2xl font-semibold text-[#342A2D] space-y-0.5">
                  <p>The Hairdressers</p>
                  <p>92 Boughton</p>
                  <p>Chester, CH3 5AQ</p>
                </address>
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={BUSINESS_DETAILS.social.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#342A2D] bg-[#F8E9EB] hover:bg-[#EED5DB] transition-colors"
                  >
                    <span>Get Google Maps Directions</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#A65C73]" />
                  </a>
                  <a
                    href={BUSINESS_DETAILS.social.googleListingShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-[#342A2D] border border-[#342A2D]/20 hover:bg-[#F8E9EB] transition-colors"
                  >
                    <span>Google Business Profile</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#A65C73]" />
                  </a>
                </div>
              </div>

              <div className="bg-[#FFFFFF] border border-[#342A2D]/10 p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A65C73] uppercase">
                  <Clock className="w-4 h-4" />
                  <span>Opening Hours & Appointment Times</span>
                </div>
                <p className="text-sm font-medium text-[#342A2D]">
                  {BUSINESS_DETAILS.hoursSummary.directoryHours}
                </p>
                <p className="text-xs text-[#817278] leading-relaxed">
                  {BUSINESS_DETAILS.hoursSummary.recommendation}
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Map Frame + Social Channels */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-[#FFFFFF] border border-[#342A2D]/10 p-3">
                <div className="aspect-[16/10] w-full bg-[#F8E9EB] relative overflow-hidden">
                  <iframe
                    title="Map showing The Hairdressers at 92 Boughton, Chester, CH3 5AQ"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-2.8815%2C53.1885%2C-2.8675%2C53.1950&layer=mapnik&marker=53.1918%2C-2.8742"
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
                <div className="pt-3 px-2 flex flex-wrap items-center justify-between gap-2 text-xs text-[#817278]">
                  <span>92 Boughton, Chester, CH3 5AQ (Main A51 Boughton Corridor)</span>
                  <a
                    href={BUSINESS_DETAILS.social.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#A65C73] hover:underline"
                  >
                    Open Route Planner →
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a
                  href={BUSINESS_DETAILS.social.salonFacebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-[#FFFFFF] border border-[#342A2D]/10 hover:border-[#A65C73] transition-colors flex flex-col justify-between space-y-3"
                >
                  <div>
                    <p className="text-xs font-semibold text-[#A65C73]">
                      FACEBOOK
                    </p>
                    <h2 className="font-editorial text-2xl font-semibold text-[#342A2D] mt-1">
                      The Hairdressers Boughton
                    </h2>
                    <p className="text-xs text-[#817278] mt-1">
                      Message the salon team or view studio updates on Facebook.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#342A2D]">
                    Visit Facebook Page <ExternalLink className="w-3.5 h-3.5 text-[#A65C73]" />
                  </span>
                </a>

                <a
                  href={BUSINESS_DETAILS.social.jaimeleighInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-[#FFFFFF] border border-[#342A2D]/10 hover:border-[#A65C73] transition-colors flex flex-col justify-between space-y-3"
                >
                  <div>
                    <p className="text-xs font-semibold text-[#A65C73]">
                      INSTAGRAM
                    </p>
                    <h2 className="font-editorial text-2xl font-semibold text-[#342A2D] mt-1">
                      Salon & Stylist Portfolio
                    </h2>
                    <p className="text-xs text-[#817278] mt-1">
                      Browse our blonde, balayage, colour refresh, and restyle transformations.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#342A2D]">
                    Visit Instagram <ExternalLink className="w-3.5 h-3.5 text-[#A65C73]" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation & Appointment Enquiry Planner */}
      <section className="py-16 sm:py-24 bg-[#F8E9EB]/45">
        <div className="max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8">
          <AppointmentEnquiryPlanner />
        </div>
      </section>
    </div>
  );
}
