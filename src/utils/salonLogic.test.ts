import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterGalleryItems,
  getServiceCategoryBySlug,
  filterFAQsByCategory,
  validateAppointmentEnquiry,
  formatEnquiryBrief,
  getVerifiedStylistCount,
  getTotalCataloguedServicesCount
} from './salonLogic';
import { GALLERY_ITEMS, FAQ_ITEMS, BUSINESS_DETAILS } from '../data/salonData';

test('Business details reflect verified 92 Boughton Chester information', () => {
  assert.equal(BUSINESS_DETAILS.name, 'THE HAIRDRESSERS');
  assert.equal(BUSINESS_DETAILS.phoneDisplay, '01244 319991');
  assert.equal(BUSINESS_DETAILS.phoneTel, 'tel:+441244319991');
  assert.equal(BUSINESS_DETAILS.address.postcode, 'CH3 5AQ');
});

test('Gallery filtering accurately filters by category and stylist', () => {
  const allItems = filterGalleryItems(GALLERY_ITEMS, 'All');
  assert.equal(allItems.length, GALLERY_ITEMS.length);

  const blondeItems = filterGalleryItems(GALLERY_ITEMS, 'Blonde');
  assert.ok(blondeItems.length >= 2);
  assert.ok(blondeItems.every((item) => item.categories.includes('Blonde')));

  const mensItems = filterGalleryItems(GALLERY_ITEMS, "Men's Hair");
  assert.equal(mensItems.length, 1);
  assert.equal(mensItems[0].stylist, 'Jaimeleigh');

  const jennyItems = filterGalleryItems(GALLERY_ITEMS, 'All', 'Jenny');
  assert.ok(jennyItems.length >= 1);
  assert.ok(jennyItems.some((item) => item.title.includes('Little Princess Trust')));
  assert.ok(GALLERY_ITEMS.every((item) => item.imagePath.endsWith('.jpg')));
});

test('Service lookup finds all 8 verified categories by slug', () => {
  const slugs = [
    'womens-cuts',
    'colouring',
    'balayage-highlights',
    'blow-dries',
    'mens-barbering',
    'childrens-hair',
    'treatments',
    'beauty-nails'
  ];
  for (const slug of slugs) {
    const category = getServiceCategoryBySlug(slug);
    assert.ok(category, `Expected category for slug ${slug}`);
  }
  assert.equal(getServiceCategoryBySlug('non-existent'), undefined);
});

test('FAQ filtering supports category and keyword queries', () => {
  const bookingFaqs = filterFAQsByCategory(FAQ_ITEMS, 'Booking');
  assert.ok(bookingFaqs.length >= 1);

  const searchResults = filterFAQsByCategory(FAQ_ITEMS, 'All', '01244 319991');
  assert.ok(searchResults.length >= 2);
});

test('Appointment enquiry validator enforces UK phone and name rules', () => {
  const invalidResult = validateAppointmentEnquiry({
    clientName: 'A',
    clientPhone: '12345',
    preferredStylist: 'Jaimeleigh',
    serviceCategory: '',
    preferredDays: '',
    notes: ''
  });
  assert.equal(invalidResult.valid, false);
  assert.ok(invalidResult.errors.clientName);
  assert.ok(invalidResult.errors.clientPhone);
  assert.ok(invalidResult.errors.serviceCategory);

  const validResult = validateAppointmentEnquiry({
    clientName: 'Sarah Jenkins',
    clientPhone: '07700 900456',
    preferredStylist: 'Jaimeleigh',
    serviceCategory: 'Blonde Transformations, Highlights & Balayage',
    preferredDays: 'Thursday afternoon',
    notes: 'Looking for a colour refresh and restyle'
  });
  assert.equal(validResult.valid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);

  const formatted = formatEnquiryBrief({
    clientName: 'Sarah Jenkins',
    clientPhone: '07700 900456',
    preferredStylist: 'Jaimeleigh',
    serviceCategory: 'Blonde Transformations, Highlights & Balayage',
    preferredDays: 'Thursday afternoon',
    notes: 'Looking for a colour refresh and restyle'
  });
  assert.ok(formatted.includes('Sarah Jenkins'));
  assert.ok(formatted.includes('Jaimeleigh'));
});

test('Verified stylist count and service counts are accurate', () => {
  assert.equal(getVerifiedStylistCount(), 3);
  assert.ok(getTotalCataloguedServicesCount() >= 18);
});
