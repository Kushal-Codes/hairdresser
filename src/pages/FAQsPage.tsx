import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Search } from 'lucide-react';
import { FAQ_ITEMS, BUSINESS_DETAILS } from '../data/salonData';
import { filterFAQsByCategory } from '../utils/salonLogic';

const CATEGORIES = [
  'All',
  'Booking',
  'Colour & Consultations',
  'Services & Team',
  'Visiting 92 Boughton'
];

export function FAQsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const filteredFaqs = filterFAQsByCategory(
    FAQ_ITEMS,
    selectedCategory,
    searchQuery
  );

  return (
    <div className="bg-[#FFFAF9]">
      {/* Page Hero */}
      <section className="bg-[#F8E9EB]/70 border-b border-[#342A2D]/10 py-14 sm:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#A65C73]">
              HELPFUL ANSWERS · 92 BOUGHTON, CHESTER
            </p>
            <h1 className="font-editorial text-4xl sm:text-6xl font-semibold text-[#342A2D]">
              Frequently Asked Questions.
            </h1>
            <p className="text-base sm:text-lg text-[#817278] leading-relaxed">
              Everything you need to know about booking an appointment, colour consultations, our stylists, and visiting 92 Boughton.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Filter & Accordion */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Search & Category Controls */}
          <div className="space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 text-[#817278] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="search"
                aria-label="Search frequently asked questions"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. patch test, blonde, booking, gents)..."
                className="w-full pl-10 pr-4 py-3 text-sm bg-[#FFFFFF] border border-[#342A2D]/20 text-[#342A2D] focus:outline-none focus:border-[#A65C73]"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#342A2D] text-[#FFFFFF]'
                      : 'bg-[#F8E9EB] text-[#342A2D] hover:bg-[#EED5DB]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion List */}
          <div className="divide-y divide-[#342A2D]/12 border-t border-b border-[#342A2D]/15 bg-[#FFFFFF]">
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="p-6">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <div>
                      <span className="text-xs text-[#A65C73] font-medium block mb-1">
                        {faq.category}
                      </span>
                      <h2 className="font-editorial text-2xl font-semibold text-[#342A2D]">
                        {faq.question}
                      </h2>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#A65C73] shrink-0 transition-transform duration-150 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="pt-4 text-sm text-[#817278] leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Direct Support Callout */}
          <div className="p-8 bg-[#F8E9EB] border border-[#C98F9E]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="font-editorial text-2xl font-semibold text-[#342A2D]">
                Still Have a Question?
              </h3>
              <p className="text-xs sm:text-sm text-[#817278] mt-1">
                Give our friendly team a quick ring at 92 Boughton and we’ll be happy to help.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href={BUSINESS_DETAILS.phoneTel}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-[#FFFFFF] bg-[#A65C73] hover:bg-[#342A2D] transition-colors tabular-nums"
              >
                <Phone className="w-4 h-4" />
                Call {BUSINESS_DETAILS.phoneDisplay}
              </a>
              <Link
                to="/booking"
                className="inline-flex items-center px-5 py-3 text-xs font-semibold text-[#342A2D] bg-[#FFFFFF] border border-[#342A2D]/20 hover:bg-[#EED5DB] transition-colors"
              >
                Booking Information
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
