import React from 'react';
import { Phone, ExternalLink, CheckCircle2 } from 'lucide-react';
import { BUSINESS_DETAILS, STYLIST_PROFILES } from '../data/salonData';
import { AppointmentEnquiryPlanner } from '../components/booking/AppointmentEnquiryPlanner';

export function BookingPage() {
  return (
    <div className="bg-[#FFFAF9]">
      {/* Hero */}
      <section className="bg-[#F8E9EB]/70 border-b border-[#342A2D]/10 py-14 sm:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#A65C73]">
              BOOKING & APPOINTMENT INFORMATION · 92 BOUGHTON
            </p>
            <h1 className="font-editorial text-4xl sm:text-6xl font-semibold text-[#342A2D]">
              Book Your Appointment.
            </h1>
            <p className="text-base sm:text-lg text-[#817278] leading-relaxed">
              We keep booking personal and straightforward. Speak directly with the salon on{' '}
              <a
                href={BUSINESS_DETAILS.phoneTel}
                className="text-[#342A2D] font-semibold underline underline-offset-4 tabular-nums whitespace-nowrap"
              >
                {BUSINESS_DETAILS.phoneDisplay}
              </a>{' '}
              or message your preferred stylist channel below.
            </p>
          </div>
        </div>
      </section>

      {/* Three Official Booking Channels */}
      <section className="py-16 sm:py-20 border-b border-[#342A2D]/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Channel 1: Telephone */}
            <div className="bg-[#FFFFFF] border border-[#342A2D]/12 p-7 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold tracking-wider text-[#A65C73]">
                  01. PRIMARY BOOKING METHOD
                </p>
                <h2 className="font-editorial text-3xl font-semibold text-[#342A2D]">
                  Call the Salon
                </h2>
                <p className="text-sm text-[#817278] leading-relaxed">
                  For the fastest response, diary checks, restyles, and family appointments with Jenny, Beccie, or Jaimeleigh, call 92 Boughton directly.
                </p>
              </div>

              <a
                href={BUSINESS_DETAILS.phoneTel}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 text-xs font-semibold text-[#FFFFFF] bg-[#A65C73] hover:bg-[#342A2D] transition-colors tabular-nums"
              >
                <Phone className="w-4 h-4" />
                Call {BUSINESS_DETAILS.phoneDisplay}
              </a>
            </div>

            {/* Channel 2: Official Salon Facebook */}
            <div className="bg-[#FFFFFF] border border-[#342A2D]/12 p-7 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold tracking-wider text-[#A65C73]">
                  02. SALON SOCIAL CHANNEL
                </p>
                <h2 className="font-editorial text-3xl font-semibold text-[#342A2D]">
                  Message the Salon
                </h2>
                <p className="text-sm text-[#817278] leading-relaxed">
                  Reach out to the broader salon via our official Facebook page (<strong>The Hairdressers Boughton</strong>) with your preferred service and availability.
                </p>
              </div>

              <a
                href={BUSINESS_DETAILS.social.salonFacebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 text-xs font-semibold text-[#342A2D] bg-[#F8E9EB] hover:bg-[#EED5DB] transition-colors"
              >
                <span>Message on Facebook</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#A65C73]" />
              </a>
            </div>

            {/* Channel 3: Instagram */}
            <div className="bg-[#FFFFFF] border border-[#342A2D]/12 p-7 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold tracking-wider text-[#A65C73]">
                  03. INSTAGRAM ENQUIRIES
                </p>
                <h2 className="font-editorial text-3xl font-semibold text-[#342A2D]">
                  Connect on Instagram
                </h2>
                <p className="text-sm text-[#817278] leading-relaxed">
                  Enquiring about blonde transformations, colour refreshes, restyles, or gents’ cuts? Connect via Instagram or call the salon directly.
                </p>
              </div>

              <a
                href={BUSINESS_DETAILS.social.jaimeleighInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 text-xs font-semibold text-[#342A2D] bg-[#FFFFFF] border border-[#342A2D]/20 hover:bg-[#F8E9EB] transition-colors"
              >
                <span>Message on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#A65C73]" />
              </a>
            </div>
          </div>

          {/* Stylist-by-Stylist Booking Matrix */}
          <div className="bg-[#FFFFFF] border border-[#342A2D]/10 p-6 sm:p-8 space-y-6">
            <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#342A2D]">
              Stylist Booking Directory
            </h2>
            <div className="divide-y divide-[#342A2D]/10">
              {STYLIST_PROFILES.map((stylist) => (
                <div
                  key={stylist.id}
                  className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div>
                    <p className="font-editorial text-2xl font-semibold text-[#342A2D]">
                      {stylist.name}
                    </p>
                    <p className="text-xs text-[#817278]">
                      {stylist.role} · {stylist.specialties.join(' / ')}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={stylist.phoneTel}
                      className="px-4 py-2 text-xs font-semibold text-[#FFFFFF] bg-[#342A2D] hover:bg-[#A65C73] transition-colors tabular-nums"
                    >
                      Call 01244 319991
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Consultation Enquiry Planner */}
          <AppointmentEnquiryPlanner />

          {/* Helpful Booking Checklist */}
          <div className="p-6 sm:p-8 bg-[#F8E9EB]/50 border border-[#342A2D]/10 space-y-4">
            <h3 className="font-editorial text-2xl font-semibold text-[#342A2D]">
              Before You Book: Helpful Notes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-[#817278]">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A65C73] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#342A2D]">Personal Diary Confirmation:</strong> Because appointments are tailored to your hair and stylist, your slot is confirmed directly with our team at 92 Boughton.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A65C73] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#342A2D]">Colour & Blonding:</strong> Let us know if you are planning a major colour change so we can allow enough time and arrange any required patch test.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A65C73] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#342A2D]">Beauty & Nail Services:</strong> Call 01244 319991 if you would like details for resident nail or beauty treatments at 92 Boughton.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
