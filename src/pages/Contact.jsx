import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { FAQS } from '../data/index.js';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportConfig } from '../utils/animations.js';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ContactForm from '../components/ContactForm.jsx';
import FAQAccordion from '../components/FAQAccordion.jsx';
import patientImg from '../assets/patient_support.jpg';

const CONTACT_INFO = [
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: 'Contact us to receive details',
    sub: 'Available during business hours',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'enquiries@medicalreferralhub.com',
    sub: 'We respond within 1-2 business days',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'International Operations',
    sub: 'Location details provided upon enquiry',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Monday – Friday',
    sub: '9:00 AM – 5:00 PM (Local Time)',
  },
];

const Contact = () => {
  return (
    <main>
      <PageHero
        eyebrow="Let's Talk"
        title="Start Your Healthcare Journey With a Conversation."
        subtitle="Share your requirements with our team and we will guide you through the next coordination steps."
        image={patientImg}
        centered={false}
      />

      {/* ===== CONTACT SECTION ===== */}
      <section className="py-20 md:py-28 bg-white" aria-label="Contact information and form">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* LEFT: Contact info */}
            <motion.div
              className="lg:col-span-2 flex flex-col gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <div>
                <motion.p variants={fadeUp} className="text-[#27689A] text-xs font-bold tracking-[0.2em] uppercase mb-3">
                  Get In Touch
                </motion.p>
                <motion.h2 variants={fadeUp} className="text-[#0B2E50] text-2xl md:text-3xl font-bold leading-snug mb-4">
                  We're Here to Help.
                </motion.h2>
                <motion.p variants={fadeUp} className="text-[#172A3A]/65 text-sm leading-relaxed">
                  Whether you have a specific healthcare requirement or simply want to understand
                  how our coordination services work, we welcome your enquiry. There is no
                  obligation in reaching out.
                </motion.p>
              </div>

              {/* Contact info blocks */}
              <div className="space-y-5">
                {CONTACT_INFO.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      variants={fadeUp}
                      className="flex items-start gap-4 p-5 bg-[#F8F7F3] border border-[#D8D7D2]/60"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#EEF4F8] flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-[#27689A]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-[#0B2E50] text-xs font-bold tracking-wide uppercase mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-[#172A3A] text-sm font-medium">{item.value}</p>
                        <p className="text-[#172A3A]/50 text-xs mt-0.5">{item.sub}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Note */}
              <motion.div
                variants={fadeUp}
                className="p-5 border-l-4 border-[#27689A] bg-[#EEF4F8]"
              >
                <p className="text-[#0B2E50] text-sm leading-relaxed">
                  <strong>Please note:</strong> Medical Referral Hub is a coordination and facilitation service. We do not provide medical advice, diagnosis, or treatment. All medical decisions are made by qualified healthcare professionals.
                </p>
              </motion.div>
            </motion.div>

            {/* RIGHT: Form */}
            <motion.div
              className="lg:col-span-3"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="py-20 md:py-28 bg-[#F8F7F3]" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-5 md:px-8 lg:px-10">
          <div className="mb-12">
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              heading="Common Questions Answered."
              subheading="If you have a question not listed here, please don't hesitate to contact us directly."
            />
          </div>
          <FAQAccordion faqs={FAQS} />

          {/* Additional note */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mt-10 p-6 bg-white border border-[#D8D7D2]/60 text-center"
          >
            <p className="text-[#172A3A]/65 text-sm leading-relaxed">
              Have a question not listed here?{' '}
              <a href="#contact-form" className="text-[#27689A] font-semibold hover:underline">
                Contact our team
              </a>{' '}
              and we will be happy to help.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;