import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Phone } from 'lucide-react';
import { BUSINESS_DETAILS, SERVICE_CATEGORIES } from '../../data/salonData';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 py-1 border-b ${
      isActive
        ? 'text-[#342A2D] border-[#A65C73]'
        : 'text-[#817278] border-transparent hover:text-[#342A2D] hover:border-[#C98F9E]'
    }`;

  return (
    <header className="sticky top-0 z-40 bg-[#FFFAF9]/95 backdrop-blur-sm border-b border-[#342A2D]/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <Link
          to="/"
          className="font-editorial text-xl sm:text-2xl font-semibold tracking-[0.14em] text-[#342A2D] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A65C73]"
        >
          {BUSINESS_DETAILS.name}
        </Link>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7"
        >
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          <div className="relative" ref={dropdownRef}>
            <div className="flex items-center gap-1">
              <NavLink to="/services" className={navLinkClass}>
                Services
              </NavLink>
              <button
                type="button"
                aria-label="Toggle Services Menu"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((prev) => !prev)}
                className="p-1 text-[#817278] hover:text-[#342A2D] transition-colors focus-visible:outline-2 focus-visible:outline-[#A65C73]"
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-150 ${
                    servicesOpen ? 'rotate-180 text-[#A65C73]' : ''
                  }`}
                />
              </button>
            </div>

            {servicesOpen && (
              <div
                role="menu"
                aria-label="Salon Services"
                className="absolute left-1/2 -translate-x-1/2 mt-4 w-[580px] bg-[#FFFFFF] border border-[#342A2D]/10 shadow-lg p-6 grid grid-cols-2 gap-x-6 gap-y-4 z-50"
              >
                <div className="col-span-2 pb-3 border-b border-[#342A2D]/10 flex items-center justify-between">
                  <span className="text-xs font-medium tracking-wider text-[#817278]">
                    THE BOUGHTON SERVICE MENU
                  </span>
                  <Link
                    to="/services"
                    className="text-xs font-medium text-[#A65C73] hover:underline whitespace-nowrap"
                  >
                    View Complete Service Catalogue →
                  </Link>
                </div>

                {SERVICE_CATEGORIES.map((category) => (
                  <Link
                    key={category.id}
                    to={category.route}
                    role="menuitem"
                    className="group block p-2.5 hover:bg-[#F8E9EB]/60 transition-colors"
                  >
                    <p className="font-editorial text-lg font-semibold text-[#342A2D] group-hover:text-[#A65C73] transition-colors">
                      {category.shortTitle}
                    </p>
                    <p className="text-xs text-[#817278] line-clamp-1 mt-0.5">
                      {category.fullTitle}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/our-work" className={navLinkClass}>
            Our Work
          </NavLink>
          <NavLink to="/team" className={navLinkClass}>
            Meet the Team
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/prices" className={navLinkClass}>
            Prices
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/booking"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-wider text-[#FFFFFF] bg-[#A65C73] hover:bg-[#342A2D] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A65C73]"
          >
            Book Appointment
          </Link>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-[#342A2D] hover:bg-[#F8E9EB] transition-colors focus-visible:outline-2 focus-visible:outline-[#A65C73]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Responsive Slide-out Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFAF9] border-b border-[#342A2D]/15 px-4 pt-4 pb-8 max-h-[82vh] overflow-y-auto">
          <p className="text-xs tracking-widest text-[#817278] mb-4">
            {BUSINESS_DETAILS.shortLocation} · {BUSINESS_DETAILS.address.street}
          </p>

          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-2">
            <NavLink
              to="/"
              end
              className="py-2.5 text-lg font-editorial font-semibold text-[#342A2D] border-b border-[#342A2D]/10"
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className="py-2.5 text-lg font-editorial font-semibold text-[#342A2D] border-b border-[#342A2D]/10"
            >
              All Hair Services
            </NavLink>

            <div className="pl-3 py-2 grid grid-cols-1 sm:grid-cols-2 gap-2 bg-[#F8E9EB]/50">
              {SERVICE_CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  to={cat.route}
                  className="text-sm text-[#342A2D] hover:text-[#A65C73] py-1"
                >
                  · {cat.fullTitle}
                </Link>
              ))}
            </div>

            <NavLink
              to="/our-work"
              className="py-2.5 text-lg font-editorial font-semibold text-[#342A2D] border-b border-[#342A2D]/10"
            >
              Our Work (The Hair Edit)
            </NavLink>
            <NavLink
              to="/team"
              className="py-2.5 text-lg font-editorial font-semibold text-[#342A2D] border-b border-[#342A2D]/10"
            >
              Meet the Team
            </NavLink>
            <NavLink
              to="/about"
              className="py-2.5 text-lg font-editorial font-semibold text-[#342A2D] border-b border-[#342A2D]/10"
            >
              About the Salon
            </NavLink>
            <NavLink
              to="/prices"
              className="py-2.5 text-lg font-editorial font-semibold text-[#342A2D] border-b border-[#342A2D]/10"
            >
              Prices & Consultations
            </NavLink>
            <NavLink
              to="/faqs"
              className="py-2.5 text-lg font-editorial font-semibold text-[#342A2D] border-b border-[#342A2D]/10"
            >
              FAQs
            </NavLink>
            <NavLink
              to="/contact"
              className="py-2.5 text-lg font-editorial font-semibold text-[#342A2D] border-b border-[#342A2D]/10"
            >
              Contact & Find Us
            </NavLink>
          </nav>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center py-3 px-4 text-sm font-semibold text-[#FFFFFF] bg-[#A65C73] hover:bg-[#342A2D] transition-colors"
            >
              Book Appointment
            </Link>
            <a
              href={BUSINESS_DETAILS.phoneTel}
              className="inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-[#342A2D] border border-[#342A2D]/20 bg-[#FFFFFF]"
            >
              <Phone className="w-4 h-4 text-[#A65C73]" />
              Call {BUSINESS_DETAILS.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
