import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  fadeUp, fadeIn, fadeLeft, fadeRight,
  staggerContainer, staggerItem, imageReveal,
  viewportConfig,
} from '../utils/animations.js';
import { SERVICES, JOURNEY_STEPS, WHY_POINTS } from '../data/index.js';
import SectionHeading from '../components/SectionHeading.jsx';
import JourneyTimeline from '../components/JourneyTimeline.jsx';
import CTASection from '../components/CTASection.jsx';
import heroImg from '../assets/hero_consultation.jpg';
import hospitalImg from '../assets/hospital_modern.jpg';
import travelImg from '../assets/travel_international.jpg';
import patientImg from '../assets/patient_support.jpg';

// Trust strip items
const TRUST_ITEMS = [
  'Healthcare Provider Sourcing',
  'Medical Referral Coordination',
  'Visa Assistance',
  'Travel Coordination',
  'Patient Support',
  'Accommodation Coordination',
];

const Home = () => {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section
        className="relative h-screen flex items-center overflow-hidden bg-[#F8F7F3]"
        aria-label="Hero section"
      >
        {/* Background decorative leaf shapes */}
        <div
          className="absolute top-20 right-[42%] w-72 h-72 bg-[#27689A]/5 leaf-shape pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-20 left-10 w-40 h-40 bg-[#7FA5BE]/8 leaf-shape-alt pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto w-full px-5 md:px-8 lg:px-10 pt-28 pb-16 md:pt-36 lg:pt-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-5"
          >
            <motion.p
              variants={fadeUp}
              className="text-[#27689A] text-xs font-bold tracking-[0.2em] uppercase"
            >
              International Healthcare Facilitation
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-[#0B2E50] text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-tight tracking-tight"
            >
              Your Journey to the Right Healthcare{' '}
              <span className="relative inline-block">
                Starts Here
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-[#27689A]/30 origin-left"
                />
              </span>
              .
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[#172A3A]/65 text-base md:text-lg leading-relaxed max-w-lg"
            >
              Medical Referral Hub helps patients connect with suitable healthcare
              providers and coordinates the essential travel arrangements surrounding
              their medical journey.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mt-2">
              <Link
                id="hero-primary-cta"
                to="/contact"
                className="px-7 py-3.5 bg-[#0B2E50] text-white text-sm font-bold tracking-wide hover:bg-[#27689A] transition-all duration-300 text-center"
              >
                Start Your Medical Journey
              </Link>
              <Link
                id="hero-secondary-cta"
                to="/services"
                className="px-7 py-3.5 border border-[#0B2E50] text-[#0B2E50] text-sm font-bold tracking-wide hover:bg-[#0B2E50] hover:text-white transition-all duration-300 text-center"
              >
                Explore Our Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            variants={imageReveal}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {/* Leaf frame shape behind image */}
            <div
              className="absolute -top-6 -right-6 w-full h-full bg-[#27689A]/8 leaf-shape z-0"
              aria-hidden="true"
            />
            <div className="relative z-10 overflow-hidden">
              <img
                src={heroImg}
                alt="Healthcare coordinator consulting with international patients in a modern facility"
                className="w-full h-[420px] md:h-[500px] object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== TRUST STRIP ===== */}
      <div className="bg-[#0B2E50] py-4 overflow-hidden" aria-label="Services overview">
        <div className="flex">
          <div className="flex gap-0 ticker-animate whitespace-nowrap">
            {[...TRUST_ITEMS, ...TRUST_ITEMS].map((item, i) => (
              <span key={i} className="flex items-center gap-3 px-6 text-white/80 text-xs font-semibold tracking-[0.12em] uppercase">
                <span className="w-1 h-1 rounded-full bg-[#7FA5BE] flex-shrink-0" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ===== INTRODUCTION ===== */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="intro-heading">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image side */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="relative"
            >
              <img
                src={hospitalImg}
                alt="Modern international hospital facility"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
              {/* Accent block */}
              <div
                className="absolute -bottom-5 -right-5 w-2/3 h-32 bg-[#EEF4F8] border-l-4 border-[#27689A] z-[-1]"
                aria-hidden="true"
              />
            </motion.div>

            {/* Text side */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="flex flex-col gap-5"
            >
              <SectionHeading
                eyebrow="About Medical Referral Hub"
                heading="Healthcare Beyond Borders, Made Easier."
                align="left"
              />

              <motion.p variants={fadeUp} className="text-[#172A3A]/65 text-base leading-relaxed">
                Navigating healthcare in another country can involve multiple decisions,
                providers, documents, and travel arrangements. The complexity can feel
                overwhelming — especially when managing it from abroad.
              </motion.p>
              <motion.p variants={fadeUp} className="text-[#172A3A]/65 text-base leading-relaxed">
                Medical Referral Hub helps simplify this journey by coordinating the
                process from healthcare provider sourcing through to travel support —
                giving patients and families a more organized, supported path forward.
              </motion.p>

              <motion.div variants={fadeUp}>
                <Link
                  to="/about-us"
                  id="intro-about-link"
                  className="inline-flex items-center gap-2 text-[#27689A] text-sm font-bold hover:gap-3 transition-all duration-200"
                >
                  Discover Who We Are
                  <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== HOW WE HELP — JOURNEY ===== */}
      <section className="py-20 md:py-28 bg-[#F8F7F3]" aria-labelledby="journey-heading">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
          <div className="mb-14 md:mb-16">
            <SectionHeading
              heading="One Journey. Coordinated Support."
              subheading="From your initial enquiry through to arrival and beyond, we coordinate the key stages of your international healthcare journey."
            />
          </div>
          <JourneyTimeline steps={JOURNEY_STEPS} />
        </div>
      </section>

      {/* ===== CORE SERVICES ===== */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
          <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeading
              eyebrow="Our Services"
              heading="Healthcare Facilitation, From Referral to Travel."
              align="left"
            />
            <Link
              to="/services"
              id="services-view-all-btn"
              className="flex-shrink-0 px-6 py-3 border border-[#0B2E50] text-[#0B2E50] text-sm font-semibold hover:bg-[#0B2E50] hover:text-white transition-all duration-300"
            >
              View All Services
            </Link>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D8D7D2]/40"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {SERVICES.slice(0, 6).map((service) => (
              <motion.article
                key={service.id}
                variants={staggerItem}
                className="bg-white p-8 group hover:bg-[#EEF4F8] transition-colors duration-300 relative overflow-hidden"
              >
                <span className="block text-[3.5rem] font-bold leading-none text-[#D8D7D2] group-hover:text-[#27689A]/15 transition-colors duration-400 mb-4 select-none">
                  {service.number}
                </span>
                <h3 className="text-[#0B2E50] text-base font-bold mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-[#172A3A]/60 text-sm leading-relaxed">
                  {service.short}
                </p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#27689A] group-hover:w-full transition-all duration-500" />
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== GLOBAL HEALTHCARE ===== */}
      <section className="py-20 md:py-28 bg-[#0B2E50] overflow-hidden relative" aria-labelledby="global-heading">
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#27689A]/10 leaf-shape translate-x-1/3 -translate-y-1/3" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#7FA5BE]/8 leaf-shape-alt -translate-x-1/4 translate-y-1/4" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                eyebrow="Global Access"
                heading="Connecting Patients With Healthcare Beyond Borders."
                subheading="Wherever you are, Medical Referral Hub helps bridge the distance between you and potentially suitable healthcare options around the world. We coordinate the practical process of international healthcare navigation."
                align="left"
                dark
              />
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="mt-8 grid grid-cols-2 gap-4"
              >
                {['Multiple Destinations', 'International Coordination', 'Multilingual Support', 'End-to-End Assistance'].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7FA5BE] flex-shrink-0" aria-hidden="true" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="relative"
            >
              <img
                src={travelImg}
                alt="International medical travel coordination"
                className="w-full h-[380px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0B2E50]/20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== WHY MEDICAL REFERRAL HUB ===== */}
      <section className="py-20 md:py-28 bg-[#F8F7F3]" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
          <div className="mb-14">
            <SectionHeading
              heading="A More Coordinated Healthcare Journey."
              subheading="We bring together the essential elements of international healthcare navigation in one place."
            />
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {WHY_POINTS.map((point) => (
              <motion.div
                key={point.number}
                variants={staggerItem}
                className="flex gap-6 items-start group"
              >
                <span className="text-[5rem] font-bold leading-none text-[#D8D7D2] group-hover:text-[#27689A]/20 transition-colors duration-400 select-none flex-shrink-0 mt-[-1rem]">
                  {point.number}
                </span>
                <div className="pt-1">
                  <h3 className="text-[#0B2E50] text-lg font-bold mb-2">{point.title}</h3>
                  <p className="text-[#172A3A]/65 text-sm leading-relaxed">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== PATIENT JOURNEY FEATURE ===== */}
      <section className="py-20 md:py-28 bg-white overflow-hidden" aria-labelledby="patient-journey-heading">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="flex flex-col gap-5"
            >
              <SectionHeading
                eyebrow="The Full Journey"
                heading="From Your First Enquiry to Your Healthcare Journey."
                align="left"
              />
              <motion.p variants={fadeUp} className="text-[#172A3A]/65 text-base leading-relaxed">
                International healthcare involves more than finding a hospital. It requires
                coordinating multiple layers — provider selection, referral communication,
                travel documents, flights, and accommodation.
              </motion.p>
              <motion.p variants={fadeUp} className="text-[#172A3A]/65 text-base leading-relaxed">
                We help bring these elements together so you can focus on what matters most.
              </motion.p>

              {/* Journey flow */}
              <motion.div variants={fadeUp} className="mt-2 space-y-0">
                {['Medical Need', 'Healthcare Options', 'Referral Coordination', 'Visa & Travel', 'Arrival & Care Journey'].map((stage, i, arr) => (
                  <div key={stage} className="flex items-start gap-3">
                    <div className="flex flex-col items-center flex-shrink-0 pt-1">
                      <div className="w-2 h-2 rounded-full bg-[#27689A]" />
                      {i < arr.length - 1 && <div className="w-px h-8 bg-[#D8D7D2] mt-1" />}
                    </div>
                    <span className={`text-sm leading-none pt-0.5 mb-8 ${i < arr.length - 1 ? '' : 'mb-0'} ${
                      i === 0 ? 'text-[#0B2E50] font-bold' : 'text-[#172A3A]/65'
                    }`}>
                      {stage}
                    </span>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp}>
                <Link
                  to="/contact"
                  id="journey-cta-link"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B2E50] text-white text-sm font-bold hover:bg-[#27689A] transition-all duration-300"
                >
                  Begin Your Enquiry
                  <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="relative"
            >
              <img
                src={patientImg}
                alt="Healthcare coordinator supporting patient through their journey"
                className="w-full h-[460px] object-cover"
                loading="lazy"
              />
              <div
                className="absolute -bottom-5 -left-5 w-2/3 h-24 bg-[#EEF4F8] border-r-4 border-[#27689A] z-[-1]"
                aria-hidden="true"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <CTASection
        heading="Planning Healthcare Abroad?"
        body="Tell us about your requirements and let our team help you understand the next steps. There is no obligation in making an initial enquiry."
        primaryLabel="Start Your Medical Journey"
        primaryLink="/contact"
        secondaryLabel="Contact Our Team"
        secondaryLink="/contact"
      />
    </main>
  );
};

export default Home;