import React, { useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { BUSINESS_DETAILS } from '../../data/salonData';

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFAF9] text-[#342A2D]">
      <Header />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />

      {/* Refined Mobile Sticky Booking Bar (Strict 48px + 56px header = 104px = 12.3% of mobile viewport) */}
      <div
        aria-label="Quick Mobile Booking Bar"
        className="sm:hidden fixed bottom-0 inset-x-0 z-30 h-12 bg-[#FFFAF9]/95 backdrop-blur-md border-t border-[#342A2D]/15 px-3 flex items-center justify-between gap-2"
      >
        <a
          href={BUSINESS_DETAILS.phoneTel}
          className="flex-1 inline-flex items-center justify-center gap-1.5 h-9 text-xs font-semibold text-[#342A2D] bg-[#F8E9EB] border border-[#C98F9E]/40 whitespace-nowrap tabular-nums"
        >
          <Phone className="w-3.5 h-3.5 text-[#A65C73]" />
          Call {BUSINESS_DETAILS.phoneDisplay}
        </a>
        <Link
          to="/booking"
          className="flex-1 inline-flex items-center justify-center gap-1.5 h-9 text-xs font-semibold text-[#FFFFFF] bg-[#A65C73] whitespace-nowrap"
        >
          <Calendar className="w-3.5 h-3.5" />
          Book / Enquire
        </Link>
      </div>
    </div>
  );
}
