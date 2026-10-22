import React from 'react';
import { BUSINESS_DETAILS } from '../data/salonData';

export function PrivacyPage() {
  return (
    <div className="bg-[#FFFAF9]">
      <section className="bg-[#F8E9EB]/70 border-b border-[#342A2D]/10 py-14 sm:py-20">
        <div className="max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#A65C73]">
            PRIVACY & SALON POLICIES · 92 BOUGHTON
          </p>
          <h1 className="font-editorial text-4xl sm:text-5xl font-semibold text-[#342A2D]">
            Privacy Policy & Salon Guidelines.
          </h1>
          <p className="text-sm sm:text-base text-[#817278] leading-relaxed">
            How The Hairdressers (92 Boughton, Chester, CH3 5AQ) protects your personal information, alongside our client guidelines for consultations, skin testing, and appointments.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Privacy Policy */}
          <div className="bg-[#FFFFFF] border border-[#342A2D]/10 p-6 sm:p-10 space-y-5">
            <h2 className="font-editorial text-3xl font-semibold text-[#342A2D]">
              1. Client Privacy & Data Protection Notice (UK GDPR)
            </h2>
            <div className="space-y-4 text-sm text-[#817278] leading-relaxed">
              <p>
                <strong className="text-[#342A2D]">Data Controller:</strong>{' '}
                {BUSINESS_DETAILS.name}, {BUSINESS_DETAILS.address.full}. Telephone:{' '}
                {BUSINESS_DETAILS.phoneDisplay}.
              </p>
              <p>
                <strong className="text-[#342A2D]">How Enquiry Data is Handled:</strong>{' '}
                When you use our online Appointment Enquiry Planner, your consultation details are formatted locally in your browser so you can share them directly with the salon when calling {BUSINESS_DETAILS.phoneDisplay} or messaging our social channels. We never sell or share client contact details with third-party marketers.
              </p>
              <p>
                <strong className="text-[#342A2D]">In-Salon Consultation Records:</strong>{' '}
                Where colour services require skin patch testing or formula records, your stylist maintains those notes solely for your safety and service continuity in accordance with UK data protection regulations.
              </p>
            </div>
          </div>

          {/* Skin Patch Testing */}
          <div className="bg-[#FFFFFF] border border-[#342A2D]/10 p-6 sm:p-10 space-y-4">
            <h2 className="font-editorial text-3xl font-semibold text-[#342A2D]">
              2. Colour Consultations & Skin Patch Testing
            </h2>
            <p className="text-sm text-[#817278] leading-relaxed">
              Client safety is our highest priority. If you are a new colour client at 92 Boughton or have not had a colour service with us within the past six months, please let us know when booking so your stylist can arrange a quick 48-hour skin patch test prior to your appointment.
            </p>
          </div>

          {/* Appointments & Cancellations */}
          <div className="bg-[#FFFFFF] border border-[#342A2D]/10 p-6 sm:p-10 space-y-4">
            <h2 className="font-editorial text-3xl font-semibold text-[#342A2D]">
              3. Appointments & Notice of Changes
            </h2>
            <p className="text-sm text-[#817278] leading-relaxed">
              If you need to reschedule or cancel your appointment, we kindly ask that you telephone the salon on <strong className="text-[#342A2D] tabular-nums">01244 319991</strong> with at least 24–48 hours’ notice wherever possible so we can offer the time to another client.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
