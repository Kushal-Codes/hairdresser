import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, ExternalLink } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data/salonData';
import { EditorialImage } from '../components/gallery/EditorialImage';

export function AboutPage() {
  return (
    <div className="bg-[#FFFAF9]">
      {/* Hero */}
      <section className="bg-[#F8E9EB]/70 border-b border-[#342A2D]/10 py-14 sm:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#A65C73]">
              OUR STORY & STUDIO ETHOS · 92 BOUGHTON
            </p>
            <h1 className="font-editorial text-4xl sm:text-6xl font-semibold text-[#342A2D]">
              Good Hair.{' '}
              <span className="italic font-normal text-[#A65C73]">
                Good Feeling.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#817278] leading-relaxed">
              Situated at 92 Boughton, Chester (CH3 5AQ), The Hairdressers is a creative, welcoming salon built around genuine relationships, skilled hairdressing, and making every client feel completely at ease.
            </p>
          </div>
        </div>
      </section>

      {/* Main Editorial Narrative */}
      <section className="py-16 sm:py-24 border-b border-[#342A2D]/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#342A2D]">
                A Boutique Feel Without the Pretension
              </h2>
              <p className="text-sm sm:text-base text-[#817278] leading-relaxed">
                Visiting a hair salon should feel restorative, never intimidating. Our regulars across Chester consistently highlight two things alongside their hair results: how warm and friendly our stylists are, and the simple pleasure of enjoying a good cup of coffee while we work.
              </p>
              <p className="text-sm sm:text-base text-[#817278] leading-relaxed">
                Whether you are visiting for a bespoke blonde transformation, a precision gents’ haircut, a family appointment, or a signature cut and blow-dry, our goal is simple: that you walk out onto Boughton feeling confident and happy with your hair.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#342A2D]/10">
                <div className="p-4 bg-[#FFFFFF] border border-[#342A2D]/10">
                  <p className="font-editorial text-xl font-semibold text-[#342A2D]">
                    Personal Consultations
                  </p>
                  <p className="text-xs text-[#817278] mt-1 leading-relaxed">
                    Every appointment begins with an unhurried conversation about your hair texture, lifestyle, and maintenance preferences.
                  </p>
                </div>
                <div className="p-4 bg-[#FFFFFF] border border-[#342A2D]/10">
                  <p className="font-editorial text-xl font-semibold text-[#342A2D]">
                    Bespoke Colour & Cutting
                  </p>
                  <p className="text-xs text-[#817278] mt-1 leading-relaxed">
                    From lived-in blonde balayage and £60 colour maintenance packages to precision restyles and barbering at 92 Boughton.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#FFFFFF] p-4 border border-[#342A2D]/10">
              <EditorialImage
                src="/images/salon/boughton-92-interior.jpg"
                alt="Inside The Hairdressers studio at 92 Boughton, Chester"
                aspectClass="aspect-[4/3]"
                caption="92 Boughton, Chester, CH3 5AQ"
                credit="01244 319991"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location & Community Section */}
      <section className="py-16 sm:py-24 bg-[#F8E9EB]/50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#FFFFFF] p-6 border border-[#342A2D]/10 space-y-3">
            <p className="text-xs font-semibold tracking-wider text-[#A65C73]">
              01. IN THE HEART OF BOUGHTON
            </p>
            <h3 className="font-editorial text-2xl font-semibold text-[#342A2D]">
              Easy to Reach in Chester
            </h3>
            <p className="text-sm text-[#817278] leading-relaxed">
              Situated along Boughton (CH3 5AQ), just east of Chester’s historic city walls and close to Hoole, Christleton, and Great Boughton.
            </p>
            <a
              href={BUSINESS_DETAILS.social.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A65C73] hover:underline pt-1"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Open Google Maps Directions</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="bg-[#FFFFFF] p-6 border border-[#342A2D]/10 space-y-3">
            <p className="text-xs font-semibold tracking-wider text-[#A65C73]">
              02. FOR EVERY GENERATION
            </p>
            <h3 className="font-editorial text-2xl font-semibold text-[#342A2D]">
              Women, Men & Families
            </h3>
            <p className="text-sm text-[#817278] leading-relaxed">
              While our editorial aesthetic celebrates modern hair colour and styling, our chairs welcome everyone—from gents’ cuts to children’s trims.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A65C73] hover:underline pt-1"
            >
              Explore All Services →
            </Link>
          </div>

          <div className="bg-[#FFFFFF] p-6 border border-[#342A2D]/10 space-y-3">
            <p className="text-xs font-semibold tracking-wider text-[#A65C73]">
              03. DIRECT COMMUNICATION
            </p>
            <h3 className="font-editorial text-2xl font-semibold text-[#342A2D]">
              Speak to Our Team
            </h3>
            <p className="text-sm text-[#817278] leading-relaxed">
              Call 01244 319991 to speak directly with the salon and find an appointment time that suits you.
            </p>
            <a
              href={BUSINESS_DETAILS.phoneTel}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A65C73] hover:underline pt-1 tabular-nums"
            >
              <Phone className="w-3.5 h-3.5" />
              Call 01244 319991
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
