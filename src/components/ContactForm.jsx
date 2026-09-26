import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const CONTACT_METHODS = ['Email', 'Phone / WhatsApp', 'Either'];
const MEDICAL_TYPES = [
  'Oncology / Cancer Treatment',
  'Cardiology / Heart',
  'Orthopaedics / Joint / Spine',
  'Neurology',
  'Ophthalmology',
  'General Surgery',
  'Diagnostic Assessment',
  'Other / Not Listed',
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    destination: '',
    medicalType: '',
    contactMethod: '',
    message: '',
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Please provide consent before submitting.');
      return;
    }
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputBase =
    'w-full px-4 py-3.5 border border-[#D8D7D2] bg-white text-[#172A3A] text-sm font-medium placeholder-[#172A3A]/35 focus:outline-none focus:border-[#27689A] transition-colors duration-200';
  const labelBase = 'block text-xs font-semibold text-[#0B2E50] mb-1.5 tracking-wide';

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center py-20 px-6 text-center bg-white border border-[#D8D7D2]/60"
      >
        <div className="w-16 h-16 rounded-full bg-[#EEF4F8] flex items-center justify-center mb-6">
          <CheckCircle size={28} className="text-[#27689A]" />
        </div>
        <h3 className="text-2xl font-bold text-[#0B2E50] mb-3">Enquiry Received</h3>
        <p className="text-[#172A3A]/65 text-sm leading-relaxed max-w-sm">
          Thank you for reaching out. A member of our team will review your enquiry and be in touch to discuss your requirements and next steps.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 text-sm text-[#27689A] font-semibold hover:underline"
        >
          Submit another enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-[#D8D7D2]/60 p-8 md:p-10 space-y-6"
      noValidate
      aria-label="Healthcare enquiry form"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className={labelBase}>
            Full Name <span className="text-[#27689A]" aria-hidden="true">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputBase}
            autoComplete="name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelBase}>
            Email Address <span className="text-[#27689A]" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={inputBase}
            autoComplete="email"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelBase}>
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 000 000 0000"
            className={inputBase}
            autoComplete="tel"
          />
        </div>

        {/* Country */}
        <div>
          <label htmlFor="country" className={labelBase}>
            Country of Residence <span className="text-[#27689A]" aria-hidden="true">*</span>
          </label>
          <input
            id="country"
            name="country"
            type="text"
            required
            value={formData.country}
            onChange={handleChange}
            placeholder="Your country"
            className={inputBase}
            autoComplete="country-name"
          />
        </div>

        {/* Preferred Destination */}
        <div>
          <label htmlFor="destination" className={labelBase}>
            Preferred Treatment Destination
          </label>
          <input
            id="destination"
            name="destination"
            type="text"
            value={formData.destination}
            onChange={handleChange}
            placeholder="e.g. Singapore, Turkey, India"
            className={inputBase}
          />
        </div>

        {/* Medical Type */}
        <div>
          <label htmlFor="medicalType" className={labelBase}>
            Type of Medical Requirement
          </label>
          <select
            id="medicalType"
            name="medicalType"
            value={formData.medicalType}
            onChange={handleChange}
            className={`${inputBase} cursor-pointer`}
          >
            <option value="">Select type...</option>
            {MEDICAL_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Preferred Contact Method */}
      <div>
        <p className={labelBase} id="contact-method-label">Preferred Contact Method</p>
        <div className="flex flex-wrap gap-3" role="group" aria-labelledby="contact-method-label">
          {CONTACT_METHODS.map((method) => (
            <label
              key={method}
              className={`flex items-center gap-2 px-4 py-2.5 border cursor-pointer text-sm font-medium transition-all duration-200 ${
                formData.contactMethod === method
                  ? 'border-[#27689A] bg-[#EEF4F8] text-[#27689A]'
                  : 'border-[#D8D7D2] text-[#172A3A]/65 hover:border-[#27689A]/50'
              }`}
            >
              <input
                type="radio"
                name="contactMethod"
                value={method}
                checked={formData.contactMethod === method}
                onChange={handleChange}
                className="sr-only"
              />
              {method}
            </label>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelBase}>
          Your Message / Requirements
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please share a brief overview of your healthcare requirements. Please do not include sensitive medical records at this stage — our team will guide you through a secure process."
          className={`${inputBase} resize-none`}
        />
        <p className="text-[#172A3A]/40 text-xs mt-1.5">
          Please do not include sensitive medical records in this initial form. Our team will guide you through a secure process.
        </p>
      </div>

      {/* Consent */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-0.5 w-4 h-4 accent-[#27689A] flex-shrink-0 cursor-pointer"
            required
          />
          <span className="text-sm text-[#172A3A]/70 leading-relaxed group-hover:text-[#172A3A] transition-colors">
            I consent to being contacted by Medical Referral Hub regarding my enquiry. I understand that Medical Referral Hub is a coordination service and does not provide medical advice or treatment.
          </span>
        </label>
      </div>

      {/* Submit */}
      <button
        id="contact-submit-btn"
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#0B2E50] text-white text-sm font-bold tracking-wide hover:bg-[#27689A] transition-all duration-300 disabled:opacity-60"
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send size={16} />
            Submit Enquiry
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
