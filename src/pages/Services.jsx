import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem, viewportConfig } from '../utils/animations.js';
import { SERVICES, HOW_IT_WORKS } from '../data/index.js';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import CTASection from '../components/CTASection.jsx';
import hospitalImg from '../assets/hospital_modern.jpg';
import patientImg from '../assets/patient_support.jpg';
import travelImg from '../assets/travel_international.jpg';
import doctorImg from '../assets/doctor_consultation.jpg';

const Services = () => {
  return (
    <main>
      <PageHero
        eyebrow="Healthcare Facilitation Services"
        title="Support for Every Stage of Your Medical Travel Journey."
        subtitle="From identifying healthcare options to coordinating travel arrangements, Medical Referral Hub helps organize the practical stages of seeking healthcare abroad."
        image={hospitalImg}
        centered={false}
      />

      {/* ===== SERVICES DETAIL ===== */}
      <section className="py-20 md:py-28 bg-white" aria-label="Services detail">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 space-y-0">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            const images = [doctorImg, patientImg, travelImg, hospitalImg, patientImg, travelImg, doctorImg];
            const img = images[index % images.length];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 border-b border-[#D8D7D2]/60 last:border-0 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image */}
                <div
                  className={`relative h-72 md:h-80 lg:h-96 overflow-hidden ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <img
                    src={img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Number overlay */}
                  <div className="absolute top-6 left-6">
                    <span className="text-white/30 text-[5rem] font-bold leading-none select-none">
                      {service.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`flex flex-col justify-center p-8 md:p-12 lg:p-16 bg-white ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <p className="text-[#27689A] text-xs font-bold tracking-[0.2em] uppercase mb-3">
                    Service {service.number}
                  </p>
                  <h2 className="text-[#0B2E50] text-2xl md:text-3xl font-bold leading-snug mb-5">
                    {service.title}
                  </h2>
                  <p className="text-[#172A3A]/65 text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                  {service.cta && (
                    <Link
                      to="/contact"
                      id={`service-cta-${service.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B2E50] text-white text-sm font-bold hover:bg-[#27689A] transition-all duration-300 self-start"
                    >
                      {service.cta}
                      <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 md:py-28 bg-[#F8F7F3]" aria-labelledby="how-it-works-heading">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
          <div className="mb-14">
            <SectionHeading
              eyebrow="The Process"
              heading="How It Works."
              subheading="A straightforward, coordinated process from your initial enquiry to ongoing journey support."
            />
          </div>

          {/* Process steps */}
          <motion.div
            className="relative"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {/* Desktop connector */}
            <div className="hidden lg:block absolute top-10 left-[calc(8.33%-8px)] right-[calc(8.33%-8px)] h-px bg-[#D8D7D2] z-0" aria-hidden="true" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4">
              {HOW_IT_WORKS.map((item, index) => (
                <motion.div
                  key={item.step}
                  variants={staggerItem}
                  className="flex flex-col items-center text-center relative z-10"
                >
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-[#27689A] flex items-center justify-center mb-4 shadow-sm flex-shrink-0">
                    <span className="text-[#0B2E50] text-xs font-bold text-center leading-tight px-1">
                      {item.step}
                    </span>
                  </div>
                  <p className="text-[#172A3A]/65 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center mt-14"
          >
            <Link
              to="/contact"
              id="services-start-enquiry-btn"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0B2E50] text-white text-sm font-bold hover:bg-[#27689A] transition-all duration-300"
            >
              Start Your Enquiry
              <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <CTASection
        heading="Ready to Discuss Your Requirements?"
        body="Our coordination team is here to guide you through the options and next steps for your international healthcare journey."
        primaryLabel="Contact Our Team"
        primaryLink="/contact"
      />
    </main>
  );
};

export default Services;
