import React, { useState } from 'react';
import { MoveHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { TransformationPair } from '../../data/salonData';

interface BeforeAfterSliderProps {
  pair: TransformationPair;
}

export function BeforeAfterSlider({ pair }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(52);

  return (
    <div className="bg-[#FFFFFF] border border-[#342A2D]/10 p-5 sm:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Interactive Split Comparison Canvas */}
        <div className="lg:col-span-7">
          <div
            className="relative aspect-[4/5] w-full overflow-hidden select-none bg-[#F8E9EB] border border-[#342A2D]/10"
            data-testid="before-after-container"
          >
            {/* Base Layer: After Image */}
            <img
              src={pair.afterImage}
              alt={pair.afterLabel}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Clipped Layer: Before Image */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <img
                src={pair.beforeImage}
                alt={pair.beforeLabel}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Vertical Divider Line & Handle */}
            <div
              className="absolute inset-y-0 w-0.5 bg-[#342A2D] pointer-events-none"
              style={{ left: `${position}%` }}
            >
              <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FFFAF9] border border-[#342A2D]/25 shadow-md flex items-center justify-center text-[#342A2D]">
                <MoveHorizontal className="w-4 h-4 text-[#A65C73]" />
              </div>
            </div>

            {/* Quiet Corner Labels */}
            <div className="absolute top-4 left-4 bg-[#FFFAF9]/90 px-2.5 py-1 text-xs font-medium text-[#342A2D] pointer-events-none">
              Before
            </div>
            <div className="absolute top-4 right-4 bg-[#342A2D]/90 px-2.5 py-1 text-xs font-medium text-[#FFFAF9] pointer-events-none">
              After
            </div>
          </div>

          {/* Accessible Range Control */}
          <div className="mt-4 flex items-center gap-4">
            <label
              htmlFor={`slider-${pair.id}`}
              className="text-xs font-medium text-[#817278] whitespace-nowrap"
            >
              Compare Transformation ({position}%)
            </label>
            <input
              id={`slider-${pair.id}`}
              type="range"
              min={5}
              max={95}
              value={position}
              onChange={(e) => setPosition(Number(e.target.value))}
              aria-label={`Before and after comparison slider for ${pair.title}`}
              className="w-full accent-[#A65C73] cursor-pointer h-2 bg-[#EED5DB]"
            />
          </div>
        </div>

        {/* Transformation Details */}
        <div className="lg:col-span-5 space-y-5">
          <div className="text-xs text-[#817278] flex flex-wrap items-center gap-2">
            <span>{pair.subtitle}</span>
            <span aria-hidden="true">·</span>
            <span>{pair.stylistHandle}</span>
          </div>

          <h3 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#342A2D]">
            {pair.title}
          </h3>

          <p className="text-sm sm:text-base text-[#817278] leading-relaxed">
            {pair.description}
          </p>

          <dl className="pt-4 border-t border-[#342A2D]/10 space-y-3 text-sm">
            <div>
              <dt className="text-xs text-[#817278]">Service</dt>
              <dd className="font-medium text-[#342A2D]">{pair.serviceName}</dd>
            </div>
            <div>
              <dt className="text-xs text-[#817278]">Stylist</dt>
              <dd className="font-medium text-[#342A2D]">
                {pair.stylist} · 92 Boughton, Chester
              </dd>
            </div>
          </dl>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="tel:+441244319991"
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold text-[#FFFFFF] bg-[#A65C73] hover:bg-[#342A2D] transition-colors whitespace-nowrap"
            >
              Call 01244 319991 to Book
            </a>
            <Link
              to="/booking"
              className="text-xs font-medium text-[#342A2D] underline underline-offset-4 hover:text-[#A65C73]"
            >
              Request Consultation →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
