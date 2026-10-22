/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { AllServicesPage } from './pages/AllServicesPage';
import { ServiceCategoryPage } from './pages/ServiceCategoryPage';
import { OurWorkPage } from './pages/OurWorkPage';
import { TeamPage } from './pages/TeamPage';
import { AboutPage } from './pages/AboutPage';
import { PricesPage } from './pages/PricesPage';
import { ContactPage } from './pages/ContactPage';
import { FAQsPage } from './pages/FAQsPage';
import { BookingPage } from './pages/BookingPage';
import { PrivacyPage } from './pages/PrivacyPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* 1. Homepage */}
          <Route index element={<HomePage />} />

          {/* 2. All Hair Services */}
          <Route path="services" element={<AllServicesPage />} />

          {/* 3. Women's Haircuts & Styling */}
          <Route
            path="services/womens-cuts"
            element={<ServiceCategoryPage slug="womens-cuts" />}
          />

          {/* 4. Hair Colouring */}
          <Route
            path="services/colouring"
            element={<ServiceCategoryPage slug="colouring" />}
          />

          {/* 5. Balayage & Highlights */}
          <Route
            path="services/balayage-highlights"
            element={<ServiceCategoryPage slug="balayage-highlights" />}
          />

          {/* 6. Blow-dries & Finishing */}
          <Route
            path="services/blow-dries"
            element={<ServiceCategoryPage slug="blow-dries" />}
          />

          {/* 7. Men's Haircuts & Barbering */}
          <Route
            path="services/mens-barbering"
            element={<ServiceCategoryPage slug="mens-barbering" />}
          />

          {/* 8. Hair Treatments */}
          <Route
            path="services/treatments"
            element={<ServiceCategoryPage slug="treatments" />}
          />

          {/* 9. Children's Haircuts */}
          <Route
            path="services/childrens-hair"
            element={<ServiceCategoryPage slug="childrens-hair" />}
          />

          {/* 10. Beauty & Nails (Independent On-Site Providers) */}
          <Route
            path="services/beauty-nails"
            element={<ServiceCategoryPage slug="beauty-nails" />}
          />

          {/* 11. Hairstylist Portfolio / Our Work */}
          <Route path="our-work" element={<OurWorkPage />} />

          {/* 12. Meet the Team */}
          <Route path="team" element={<TeamPage />} />

          {/* 13. About the Salon */}
          <Route path="about" element={<AboutPage />} />

          {/* 14. Prices */}
          <Route path="prices" element={<PricesPage />} />

          {/* 15. Contact & Find Us */}
          <Route path="contact" element={<ContactPage />} />

          {/* 16. FAQs */}
          <Route path="faqs" element={<FAQsPage />} />

          {/* 17. Booking Information */}
          <Route path="booking" element={<BookingPage />} />

          {/* 18. Privacy Policy */}
          <Route path="privacy" element={<PrivacyPage />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
