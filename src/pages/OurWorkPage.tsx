import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import {
  GALLERY_ITEMS,
  TRANSFORMATION_PAIRS,
  BUSINESS_DETAILS,
  type GalleryFilterCategory,
  type GalleryItem
} from '../data/salonData';
import {
  GALLERY_FILTER_CATEGORIES,
  filterGalleryItems
} from '../utils/salonLogic';
import { EditorialImage } from '../components/gallery/EditorialImage';
import { BeforeAfterSlider } from '../components/gallery/BeforeAfterSlider';
import { LightboxModal } from '../components/gallery/LightboxModal';

export function OurWorkPage() {
  const [activeFilter, setActiveFilter] = useState<GalleryFilterCategory>('All');
  const [selectedStylist, setSelectedStylist] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = filterGalleryItems(
    GALLERY_ITEMS,
    activeFilter,
    selectedStylist
  );

  return (
    <div className="bg-[#FFFAF9]">
      {/* Page Header */}
      <section className="bg-[#F8E9EB]/70 border-b border-[#342A2D]/10 py-14 sm:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#A65C73]">
              SALON LOOKBOOK · 92 BOUGHTON, CHESTER
            </p>
            <h1 className="font-editorial text-4xl sm:text-6xl font-semibold text-[#342A2D]">
              The Hair Edit.
            </h1>
            <p className="text-base sm:text-lg text-[#817278] leading-relaxed">
              Beautiful cuts, bespoke colour, and real transformations created by our stylists at 92 Boughton.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Before & After Transformation Spotlight */}
      <section className="py-12 sm:py-16 border-b border-[#342A2D]/10 bg-[#FFFAF9]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-[#A65C73]">
                BEFORE & AFTER TRANSFORMATION
              </p>
              <h2 className="font-editorial text-3xl font-semibold text-[#342A2D] mt-1">
                Restyle & Multi-Tonal Highlight Refresh
              </h2>
            </div>
            <p className="text-xs text-[#817278]">
              Drag the slider to compare before and after
            </p>
          </div>

          {TRANSFORMATION_PAIRS.map((pair) => (
            <BeforeAfterSlider key={pair.id} pair={pair} />
          ))}
        </div>
      </section>

      {/* Filterable Editorial Lookbook */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Interactive Filter Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#342A2D]/10">
            <div
              role="group"
              aria-label="Filter portfolio by hair service category"
              className="flex flex-wrap items-center gap-1.5"
            >
              {GALLERY_FILTER_CATEGORIES.map((category) => {
                const isActive = activeFilter === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveFilter(category)}
                    className={`px-3.5 py-2 text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-[#342A2D] text-[#FFFFFF]'
                        : 'bg-[#F8E9EB]/70 text-[#342A2D] hover:bg-[#EED5DB]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <label
                htmlFor="stylist-filter"
                className="text-xs font-medium text-[#817278] whitespace-nowrap"
              >
                Stylist:
              </label>
              <select
                id="stylist-filter"
                value={selectedStylist}
                onChange={(e) => setSelectedStylist(e.target.value)}
                className="px-3 py-2 text-xs font-medium bg-[#FFFFFF] border border-[#342A2D]/20 text-[#342A2D] focus:outline-none focus:border-[#A65C73]"
              >
                <option value="All">All Stylists</option>
                <option value="Jaimeleigh">Jaimeleigh</option>
                <option value="Jenny">Jenny</option>
                <option value="Beccie">Beccie</option>
                <option value="Adele">Adele</option>
              </select>
            </div>
          </div>

          {/* Count & Active State Indicator */}
          <div className="flex items-center justify-between text-xs text-[#817278]">
            <span>
              Showing <strong className="text-[#342A2D] tabular-nums">{filteredItems.length}</strong> salon looks
              {activeFilter !== 'All' ? ` in ${activeFilter}` : ''}
              {selectedStylist !== 'All' ? ` by ${selectedStylist}` : ''}
            </span>
            {(activeFilter !== 'All' || selectedStylist !== 'All') && (
              <button
                type="button"
                onClick={() => {
                  setActiveFilter('All');
                  setSelectedStylist('All');
                }}
                className="text-[#A65C73] font-semibold hover:underline cursor-pointer"
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Lookbook Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <article
                  key={item.id}
                  className="bg-[#FFFFFF] border border-[#342A2D]/10 p-4 flex flex-col justify-between"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedItem(item)}
                    aria-label={`View details for ${item.title}`}
                    className="text-left w-full cursor-pointer"
                  >
                    <EditorialImage
                      src={item.imagePath}
                      alt={item.altText}
                      aspectClass={
                        item.aspectRatio === '4:3'
                          ? 'aspect-[4/3]'
                          : 'aspect-[4/5]'
                      }
                    />
                    <div className="pt-4 space-y-2">
                      <div className="text-xs text-[#817278] flex flex-wrap items-center gap-1.5">
                        <span>{item.categories.join(' · ')}</span>
                        <span aria-hidden="true">/</span>
                        <span>Stylist: {item.stylist}</span>
                      </div>
                      <h3 className="font-editorial text-2xl font-semibold text-[#342A2D] hover:text-[#A65C73] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#817278] leading-relaxed">
                        {item.editorialNote}
                      </p>
                    </div>
                  </button>

                  <div className="mt-5 pt-3 border-t border-[#342A2D]/10 flex items-center justify-between text-xs">
                    <span className="text-[#817278]">{item.serviceRepresented}</span>
                    <button
                      type="button"
                      onClick={() => setSelectedItem(item)}
                      className="font-semibold text-[#A65C73] hover:underline cursor-pointer shrink-0 ml-2"
                    >
                      View Look →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center bg-[#F8E9EB]/50 border border-[#342A2D]/10 space-y-3">
              <p className="font-editorial text-2xl text-[#342A2D]">
                No looks match this filter combination.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveFilter('All');
                  setSelectedStylist('All');
                }}
                className="px-5 py-2.5 text-xs font-semibold bg-[#A65C73] text-[#FFFFFF] cursor-pointer"
              >
                Show All Salon Work
              </button>
            </div>
          )}

          {/* Bottom Booking Banner */}
          <div className="mt-16 p-8 sm:p-12 bg-[#F8E9EB] border border-[#C98F9E]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <p className="text-xs font-semibold tracking-wider text-[#A65C73]">
                INSPIRED BY A LOOK?
              </p>
              <h2 className="font-editorial text-3xl font-semibold text-[#342A2D]">
                Discuss Your Next Transformation With Our Stylists
              </h2>
              <p className="text-sm text-[#817278]">
                Found a style or colour you love? Call 01244 319991 to arrange your personal consultation at 92 Boughton.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={BUSINESS_DETAILS.phoneTel}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-[#FFFFFF] bg-[#A65C73] hover:bg-[#342A2D] transition-colors tabular-nums"
              >
                <Phone className="w-4 h-4" />
                Call {BUSINESS_DETAILS.phoneDisplay}
              </a>
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-[#342A2D] bg-[#FFFFFF] border border-[#342A2D]/20 hover:bg-[#EED5DB] transition-colors"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <LightboxModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}
