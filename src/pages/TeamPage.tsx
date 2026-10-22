import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ExternalLink } from 'lucide-react';
import {
  STYLIST_PROFILES,
  GALLERY_ITEMS
} from '../data/salonData';
import { EditorialImage } from '../components/gallery/EditorialImage';

export function TeamPage() {
  return (
    <div className="bg-[#FFFAF9]">
      {/* Page Hero */}
      <section className="bg-[#F8E9EB]/70 border-b border-[#342A2D]/10 py-14 sm:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#A65C73]">
              OUR TEAM · 92 BOUGHTON, CHESTER
            </p>
            <h1 className="font-editorial text-4xl sm:text-6xl font-semibold text-[#342A2D]">
              Meet the Stylists.
            </h1>
            <p className="text-base sm:text-lg text-[#817278] leading-relaxed">
              The Hairdressers brings together experienced hairstylists, specialist colourists, and barbers under one welcoming roof at 92 Boughton, Chester.
            </p>
          </div>
        </div>
      </section>

      {/* Dedicated Stylist Sections & Portfolios */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {STYLIST_PROFILES.map((stylist, index) => {
            const stylistPortfolio = GALLERY_ITEMS.filter((item) =>
              item.stylist.toLowerCase().includes(stylist.name.toLowerCase())
            );

            return (
              <article
                key={stylist.id}
                id={stylist.id}
                className="pb-20 border-b border-[#342A2D]/12 space-y-12"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div
                    className={`lg:col-span-5 ${
                      index % 2 === 1 ? 'lg:order-2' : ''
                    }`}
                  >
                    <div className="bg-[#FFFFFF] p-3.5 border border-[#342A2D]/10">
                      <EditorialImage
                        src={stylist.portraitImage}
                        alt={`${stylist.name} — ${stylist.role}`}
                        aspectClass="aspect-[4/5]"
                        caption={`${stylist.name} · ${stylist.role}`}
                        credit="92 Boughton, Chester"
                      />
                    </div>
                  </div>

                  <div
                    className={`lg:col-span-7 space-y-5 ${
                      index % 2 === 1 ? 'lg:order-1' : ''
                    }`}
                  >
                    <div className="text-xs font-semibold tracking-wider text-[#A65C73]">
                      {stylist.employmentStatus}
                    </div>

                    <h2 className="font-editorial text-4xl sm:text-5xl font-semibold text-[#342A2D]">
                      {stylist.name}
                    </h2>

                    <p className="text-base text-[#342A2D]/85 leading-relaxed">
                      {stylist.bio}
                    </p>

                    <blockquote className="p-4 bg-[#F8E9EB]/70 border border-[#342A2D]/10 font-editorial italic text-lg text-[#342A2D] leading-relaxed">
                      {stylist.verifiedEvidence}
                    </blockquote>

                    <div className="space-y-2 pt-1">
                      <p className="text-xs font-semibold tracking-wider text-[#817278] uppercase">
                        Specialties & Services
                      </p>
                      <p className="text-sm font-medium text-[#342A2D]">
                        {stylist.specialties.join(' · ')}
                      </p>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <a
                        href={stylist.phoneTel}
                        className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-[#FFFFFF] bg-[#A65C73] hover:bg-[#342A2D] transition-colors whitespace-nowrap tabular-nums"
                      >
                        <Phone className="w-4 h-4" />
                        Call 01244 319991 to Book with {stylist.name}
                      </a>

                      {stylist.instagramUrl && (
                        <a
                          href={stylist.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-[#342A2D] bg-[#FFFFFF] border border-[#342A2D]/20 hover:bg-[#F8E9EB] transition-colors whitespace-nowrap"
                        >
                          <span>Instagram Portfolio</span>
                          <ExternalLink className="w-3.5 h-3.5 text-[#A65C73]" />
                        </a>
                      )}

                      <Link
                        to="/booking"
                        className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-[#342A2D] bg-[#FFFFFF] border border-[#342A2D]/20 hover:bg-[#F8E9EB] transition-colors whitespace-nowrap"
                      >
                        <span>Request Consultation</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Stylist's Dedicated Work Showcase */}
                {stylistPortfolio.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-editorial text-2xl font-semibold text-[#342A2D]">
                        Selected Work by {stylist.name}
                      </h3>
                      <Link
                        to="/our-work"
                        className="text-xs font-semibold text-[#A65C73] hover:underline"
                      >
                        View Full Gallery →
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {stylistPortfolio.map((work) => (
                        <div
                          key={work.id}
                          className="bg-[#FFFFFF] p-3 border border-[#342A2D]/10"
                        >
                          <EditorialImage
                            src={work.imagePath}
                            alt={work.altText}
                            aspectClass={
                              work.aspectRatio === '4:3'
                                ? 'aspect-[4/3]'
                                : 'aspect-[4/5]'
                            }
                            caption={work.title}
                          />
                          <p className="text-xs text-[#817278] mt-1">
                            {work.serviceRepresented}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
