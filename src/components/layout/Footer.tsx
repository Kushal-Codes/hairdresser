import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, ExternalLink } from 'lucide-react';
import { BUSINESS_DETAILS, SERVICE_CATEGORIES } from '../../data/salonData';

export function Footer() {
  return (
    <footer className="bg-[#342A2D] text-[#FFFAF9] border-t border-[#342A2D] pb-16 sm:pb-0">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-[#FFFAF9]/15">
          {/* Column 1: Brand & Location */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs tracking-[0.22em] text-[#EED5DB]">
              {BUSINESS_DETAILS.shortLocation}
            </p>
            <Link
              to="/"
              className="block font-editorial text-3xl font-semibold tracking-[0.12em] text-[#FFFAF9]"
            >
              {BUSINESS_DETAILS.name}
            </Link>
            <p className="font-editorial italic text-xl text-[#EED5DB]">
              “Good hair. Good feeling.”
            </p>
            <address className="not-italic text-sm text-[#EED5DB]/85 leading-relaxed pt-2 space-y-1">
              <p>{BUSINESS_DETAILS.address.street}</p>
              <p>{BUSINESS_DETAILS.address.city}</p>
              <p>{BUSINESS_DETAILS.address.postcode}</p>
            </address>
            <div className="pt-2 flex flex-col space-y-2 text-sm">
              <a
                href={BUSINESS_DETAILS.phoneTel}
                className="inline-flex items-center gap-2 font-semibold text-[#FFFAF9] hover:text-[#EED5DB] transition-colors tabular-nums"
              >
                <Phone className="w-4 h-4 text-[#C98F9E]" />
                Telephone: {BUSINESS_DETAILS.phoneDisplay}
              </a>
              <a
                href={BUSINESS_DETAILS.social.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#EED5DB]/85 hover:text-[#FFFAF9] transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#C98F9E]" />
                Directions to 92 Boughton
              </a>
            </div>
          </div>

          {/* Column 2: Hair & Salon Services */}
          <div className="lg:col-span-3 space-y-3">
            <h2 className="font-heading-sans text-xs font-semibold tracking-[0.18em] text-[#EED5DB] uppercase">
              Services
            </h2>
            <ul className="space-y-2.5 text-sm text-[#FFFAF9]/80">
              <li>
                <Link to="/services" className="hover:text-[#EED5DB] transition-colors">
                  All Hair Services
                </Link>
              </li>
              {SERVICE_CATEGORIES.map((category) => (
                <li key={category.id}>
                  <Link
                    to={category.route}
                    className="hover:text-[#EED5DB] transition-colors"
                  >
                    {category.fullTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Explore the Studio */}
          <div className="lg:col-span-2 space-y-3">
            <h2 className="font-heading-sans text-xs font-semibold tracking-[0.18em] text-[#EED5DB] uppercase">
              The Studio
            </h2>
            <ul className="space-y-2.5 text-sm text-[#FFFAF9]/80">
              <li>
                <Link to="/our-work" className="hover:text-[#EED5DB] transition-colors">
                  Our Work (The Hair Edit)
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-[#EED5DB] transition-colors">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#EED5DB] transition-colors">
                  About the Salon
                </Link>
              </li>
              <li>
                <Link to="/prices" className="hover:text-[#EED5DB] transition-colors">
                  Prices & Consultations
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-[#EED5DB] transition-colors">
                  Booking Information
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-[#EED5DB] transition-colors">
                  Client FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#EED5DB] transition-colors">
                  Contact & Find Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-[#EED5DB] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social & Booking Channels */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-heading-sans text-xs font-semibold tracking-[0.18em] text-[#EED5DB] uppercase">
              Connect With Us
            </h2>
            <p className="text-xs text-[#EED5DB]/80 leading-relaxed">
              Follow our latest salon transformations, seasonal hair colour inspiration, and studio updates from 92 Boughton.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href={BUSINESS_DETAILS.social.salonFacebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-[#FFFAF9]/5 hover:bg-[#FFFAF9]/10 border border-[#FFFAF9]/15 transition-colors"
              >
                <div>
                  <p className="font-medium text-[#FFFAF9]">The Hairdressers Boughton</p>
                  <p className="text-xs text-[#EED5DB]/75">Follow on Facebook</p>
                </div>
                <ExternalLink className="w-4 h-4 text-[#C98F9E] shrink-0" />
              </a>

              <a
                href={BUSINESS_DETAILS.social.jaimeleighInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-[#FFFAF9]/5 hover:bg-[#FFFAF9]/10 border border-[#FFFAF9]/15 transition-colors"
              >
                <div>
                  <p className="font-medium text-[#FFFAF9]">
                    Salon & Stylist Portfolio
                  </p>
                  <p className="text-xs text-[#EED5DB]/75">Follow on Instagram</p>
                </div>
                <ExternalLink className="w-4 h-4 text-[#C98F9E] shrink-0" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#EED5DB]/70">
          <p>
            © {new Date().getFullYear()} The Hairdressers, 92 Boughton, Chester, CH3 5AQ. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/privacy" className="hover:text-[#FFFAF9] transition-colors">
              Privacy Policy & Salon Guidelines
            </Link>
            <span aria-hidden="true">·</span>
            <a
              href={BUSINESS_DETAILS.phoneTel}
              className="hover:text-[#FFFAF9] transition-colors tabular-nums"
            >
              01244 319991
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
