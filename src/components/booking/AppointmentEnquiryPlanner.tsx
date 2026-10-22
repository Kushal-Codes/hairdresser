import React, { useState } from 'react';
import { Phone, Copy, Check, ExternalLink } from 'lucide-react';
import {
  BUSINESS_DETAILS,
  SERVICE_CATEGORIES,
  STYLIST_PROFILES
} from '../../data/salonData';
import {
  validateAppointmentEnquiry,
  formatEnquiryBrief,
  type AppointmentEnquiryInput
} from '../../utils/salonLogic';

export function AppointmentEnquiryPlanner() {
  const [form, setForm] = useState<AppointmentEnquiryInput>({
    clientName: '',
    clientPhone: '',
    preferredStylist: 'Jaimeleigh',
    serviceCategory: SERVICE_CATEGORIES[0].fullTitle,
    preferredDays: '',
    notes: ''
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof AppointmentEnquiryInput, string>>
  >({});
  const [preparedBrief, setPreparedBrief] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validation = validateAppointmentEnquiry(form);
    if (!validation.valid) {
      setErrors(validation.errors);
      setPreparedBrief(null);
      return;
    }
    setErrors({});
    const brief = formatEnquiryBrief(form);
    setPreparedBrief(brief);
  }

  async function handleCopyBrief() {
    if (!preparedBrief) return;
    try {
      await navigator.clipboard.writeText(preparedBrief);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
    }
  }

  return (
    <div className="bg-[#FFFFFF] border border-[#342A2D]/12 p-6 sm:p-10">
      <div className="max-w-2xl">
        <p className="text-xs font-medium tracking-wider text-[#A65C73] uppercase">
          CONSULTATION & APPOINTMENT ENQUIRY PLANNER
        </p>
        <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#342A2D] mt-1">
          Prepare Your Salon Enquiry Brief
        </h3>
        <p className="text-sm text-[#817278] mt-2 leading-relaxed">
          Appointments at 92 Boughton are confirmed directly with our team by telephone on{' '}
          <strong className="text-[#342A2D] font-semibold tabular-nums">
            {BUSINESS_DETAILS.phoneDisplay}
          </strong>{' '}
          or via direct social message. Complete your details below to generate a structured consultation brief ready to copy into Facebook Messenger, Instagram DM, or read out when calling.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="enquiry-name"
              className="block text-xs font-semibold text-[#342A2D] mb-1.5"
            >
              Your Full Name *
            </label>
            <input
              id="enquiry-name"
              type="text"
              value={form.clientName}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, clientName: e.target.value }))
              }
              placeholder="e.g. Emma Davies"
              className="w-full px-3.5 py-2.5 text-sm bg-[#FFFAF9] border border-[#342A2D]/20 text-[#342A2D] focus:outline-none focus:border-[#A65C73]"
            />
            {errors.clientName && (
              <p role="alert" className="text-xs text-[#A65C73] mt-1 font-medium">
                {errors.clientName}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="enquiry-phone"
              className="block text-xs font-semibold text-[#342A2D] mb-1.5"
            >
              Your UK Contact Number *
            </label>
            <input
              id="enquiry-phone"
              type="tel"
              value={form.clientPhone}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, clientPhone: e.target.value }))
              }
              placeholder="e.g. 07700 900123"
              className="w-full px-3.5 py-2.5 text-sm bg-[#FFFAF9] border border-[#342A2D]/20 text-[#342A2D] focus:outline-none focus:border-[#A65C73] tabular-nums"
            />
            {errors.clientPhone && (
              <p role="alert" className="text-xs text-[#A65C73] mt-1 font-medium">
                {errors.clientPhone}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="enquiry-service"
              className="block text-xs font-semibold text-[#342A2D] mb-1.5"
            >
              Service Category *
            </label>
            <select
              id="enquiry-service"
              value={form.serviceCategory}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, serviceCategory: e.target.value }))
              }
              className="w-full px-3.5 py-2.5 text-sm bg-[#FFFAF9] border border-[#342A2D]/20 text-[#342A2D] focus:outline-none focus:border-[#A65C73]"
            >
              {SERVICE_CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.fullTitle}>
                  {cat.fullTitle}
                </option>
              ))}
            </select>
            {errors.serviceCategory && (
              <p role="alert" className="text-xs text-[#A65C73] mt-1 font-medium">
                {errors.serviceCategory}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="enquiry-stylist"
              className="block text-xs font-semibold text-[#342A2D] mb-1.5"
            >
              Preferred Stylist
            </label>
            <select
              id="enquiry-stylist"
              value={form.preferredStylist}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, preferredStylist: e.target.value }))
              }
              className="w-full px-3.5 py-2.5 text-sm bg-[#FFFAF9] border border-[#342A2D]/20 text-[#342A2D] focus:outline-none focus:border-[#A65C73]"
            >
              <option value="First Available Stylist">
                No Preference / First Available Stylist
              </option>
              {STYLIST_PROFILES.map((stylist) => (
                <option key={stylist.id} value={stylist.name}>
                  {stylist.name} — {stylist.role}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="enquiry-days"
              className="block text-xs font-semibold text-[#342A2D] mb-1.5"
            >
              Preferred Days or Times
            </label>
            <input
              id="enquiry-days"
              type="text"
              value={form.preferredDays}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, preferredDays: e.target.value }))
              }
              placeholder="e.g. Thursday afternoon or Saturday morning"
              className="w-full px-3.5 py-2.5 text-sm bg-[#FFFAF9] border border-[#342A2D]/20 text-[#342A2D] focus:outline-none focus:border-[#A65C73]"
            />
          </div>

          <div>
            <label
              htmlFor="enquiry-notes"
              className="block text-xs font-semibold text-[#342A2D] mb-1.5"
            >
              Hair History or Consultation Notes
            </label>
            <input
              id="enquiry-notes"
              type="text"
              value={form.notes}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, notes: e.target.value }))
              }
              placeholder="e.g. Colour refresh & restyle, need patch test advice"
              className="w-full px-3.5 py-2.5 text-sm bg-[#FFFAF9] border border-[#342A2D]/20 text-[#342A2D] focus:outline-none focus:border-[#A65C73]"
            />
          </div>
        </div>

        <div className="pt-2 flex flex-wrap items-center gap-4">
          <button
            type="submit"
            className="px-6 py-3 text-xs font-semibold tracking-wider text-[#FFFFFF] bg-[#A65C73] hover:bg-[#342A2D] transition-colors whitespace-nowrap cursor-pointer"
          >
            Prepare Appointment Brief
          </button>

          <a
            href={BUSINESS_DETAILS.phoneTel}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-[#342A2D] border border-[#342A2D]/25 hover:bg-[#F8E9EB] transition-colors whitespace-nowrap tabular-nums"
          >
            <Phone className="w-3.5 h-3.5 text-[#A65C73]" />
            Or Call Direct: {BUSINESS_DETAILS.phoneDisplay}
          </a>
        </div>
      </form>

      {preparedBrief && (
        <div
          role="region"
          aria-label="Prepared Appointment Enquiry Brief"
          className="mt-8 p-5 bg-[#F8E9EB] border border-[#C98F9E]/50 space-y-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs font-semibold text-[#342A2D]">
              Your Enquiry Brief is Ready (Note: Please send or call to confirm your slot)
            </p>
            <button
              type="button"
              onClick={handleCopyBrief}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#FFFFFF] text-[#342A2D] border border-[#342A2D]/20 hover:bg-[#342A2D] hover:text-[#FFFFFF] transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#A65C73]" />
                  Copied Brief
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#A65C73]" />
                  Copy Brief Text
                </>
              )}
            </button>
          </div>

          <pre className="text-xs font-mono text-[#342A2D] bg-[#FFFAF9] p-4 border border-[#342A2D]/10 whitespace-pre-wrap leading-relaxed">
            {preparedBrief}
          </pre>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href={BUSINESS_DETAILS.phoneTel}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#FFFFFF] bg-[#342A2D] hover:bg-[#A65C73] transition-colors tabular-nums"
            >
              <Phone className="w-3.5 h-3.5" />
              1. Call Salon (01244 319991)
            </a>
            <a
              href={BUSINESS_DETAILS.social.salonFacebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#342A2D] bg-[#FFFFFF] border border-[#342A2D]/20 hover:bg-[#EED5DB] transition-colors"
            >
              <span>2. Message Salon on Facebook</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#A65C73]" />
            </a>
            {form.preferredStylist === 'Jaimeleigh' && (
              <a
                href={BUSINESS_DETAILS.social.jaimeleighInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#342A2D] bg-[#FFFFFF] border border-[#342A2D]/20 hover:bg-[#EED5DB] transition-colors"
              >
                <span>3. Message on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#A65C73]" />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
