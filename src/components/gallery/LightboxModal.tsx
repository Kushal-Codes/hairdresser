import React, { useEffect } from 'react';
import { X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { GalleryItem } from '../../data/salonData';
import { BUSINESS_DETAILS } from '../../data/salonData';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export function LightboxModal({ item, onClose }: LightboxModalProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (item) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      className="fixed inset-0 z-50 bg-[#342A2D]/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#FFFAF9] border border-[#342A2D]/20 shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close gallery preview"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-10 h-10 bg-[#FFFAF9]/90 hover:bg-[#F8E9EB] text-[#342A2D] flex items-center justify-center border border-[#342A2D]/15 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="md:col-span-7 bg-[#F8E9EB] flex items-center justify-center">
          <img
            src={item.imagePath}
            alt={item.altText}
            referrerPolicy="no-referrer"
            className="w-full max-h-[75vh] object-contain"
          />
        </div>

        <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="text-xs text-[#817278] flex flex-wrap items-center gap-1.5">
              <span>{item.categories.join(' · ')}</span>
              <span aria-hidden="true">/</span>
              <span>Stylist: {item.stylist}</span>
            </div>

            <h2
              id="lightbox-title"
              className="font-editorial text-2xl sm:text-3xl font-semibold text-[#342A2D]"
            >
              {item.title}
            </h2>

            <p className="text-sm text-[#817278] leading-relaxed">
              {item.editorialNote}
            </p>

            <dl className="pt-4 border-t border-[#342A2D]/10 space-y-2.5 text-xs">
              <div>
                <dt className="text-[#817278]">Service</dt>
                <dd className="font-medium text-[#342A2D] mt-0.5">
                  {item.serviceRepresented}
                </dd>
              </div>
              <div>
                <dt className="text-[#817278]">Stylist</dt>
                <dd className="font-medium text-[#342A2D] mt-0.5">
                  {item.stylist} — {item.stylistRole}
                </dd>
              </div>
              <div>
                <dt className="text-[#817278]">Salon Location</dt>
                <dd className="font-medium text-[#342A2D] mt-0.5">
                  92 Boughton, Chester, CH3 5AQ
                </dd>
              </div>
            </dl>
          </div>

          <div className="pt-4 border-t border-[#342A2D]/10 space-y-3">
            <a
              href={BUSINESS_DETAILS.phoneTel}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-[#FFFFFF] bg-[#A65C73] hover:bg-[#342A2D] transition-colors tabular-nums"
            >
              <Phone className="w-4 h-4" />
              Call {BUSINESS_DETAILS.phoneDisplay} to Book This Look
            </a>

            <Link
              to="/booking"
              onClick={onClose}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-medium text-[#342A2D] border border-[#342A2D]/20 hover:bg-[#F8E9EB] transition-colors"
            >
              Request Appointment Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
