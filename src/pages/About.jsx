import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem, viewportConfig } from '../utils/animations.js';
import { VALUES } from '../data/index.js';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import CTASection from '../components/CTASection.jsx';
import aboutTeamImg from '../assets/about_team.jpg';
import hospitalImg from '../assets/hospital_modern.jpg';
import travelImg from '../assets/travel_international.jpg';

const APPROACH = [
  {
    number: '01',
    label: 'Listen',
    description: 'We begin by understanding your situation, requirements, and priorities — without rushing to conclusions.',
  },
  {
    number: '02',
    label: 'Research & Coordinate',
    description: 'We identify suitable options and coordinate the referral and communication process with relevant providers.',
  },
  {
    number: '03',
    label: 'Prepare',
    description: 'We help organize the practical elements — visa guidance, travel arrangements, and accommodation — so you can focus on your health.',
  },
  {
    number: '04',
    label: 'Support',
    description: 'We remain a point of contact throughout, providing consistent coordination support during your healthcare journey.',
  },
];

const About = () => {
  return (
    <main>
      <PageHero
        eyebrow="About Medical Referral Hub"
        title="Making International Healthcare Journeys Easier to Navigate."
        image={aboutTeamImg}
        centered={false}
      />

      {/* ===== WHO WE ARE ===== */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="who-we-are-heading">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="flex flex-col gap-5"
            >
              <SectionHeading
                eyebrow="Who We Are"
                heading="A Healthcare Facilitation Partner."
                align="left"
              />
              <motion.p variants={fadeUp} className="text-[#172A3A]/65 text-base leading-relaxed">
                Medical Referral Hub is an international healthcare facilitation and medical
                travel coordination company. We are not a hospital or clinic — we are the
                coordination bridge between patients and suitable healthcare providers around
                the world.
              </motion.p>
              <motion.p variants={fadeUp} className="text-[#172A3A]/65 text-base leading-relaxed">
                Our role is to help individuals and families navigate the practical complexities
                of seeking healthcare abroad: identifying appropriate providers, coordinating
                referral processes, assisting with travel logistics, and being a consistent
                point of contact throughout the journey.
              </motion.p>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="relative"
            >
              <img
                src={hospitalImg}
                alt="Modern international healthcare facility"
                className="w-full h-[400px] object-cover rounded-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 w-1/2 h-20 bg-[#EEF4F8] border-l-4 border-[#27689A] z-[-1]" aria-hidden="true" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PURPOSE ===== */}
      <section className="py-20 md:py-28 bg-[#F8F7F3]" aria-labelledby="purpose-heading">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <img
                src={travelImg}
                alt="International patient travel coordination"
                className="w-full h-[400px] object-cover rounded-2xl"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="flex flex-col gap-5"
            >
              <SectionHeading
                eyebrow="Our Purpose"
                heading="Simplifying Access to International Healthcare."
                align="left"
              />
              <motion.p variants={fadeUp} className="text-[#172A3A]/65 text-base leading-relaxed">
                We exist to help simplify access and coordination for people seeking healthcare
                away from home. Navigating an unfamiliar healthcare system, in a different
                country and language, can be one of the most challenging experiences a person
                faces.
              </motion.p>
              <motion.p variants={fadeUp} className="text-[#172A3A]/65 text-base leading-relaxed">
                Our purpose is to make that process more manageable — by providing a structured,
                supported coordination service that brings clarity to a complex journey.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="mission-heading">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="bg-[#0B2E50] p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#27689A]/15 leaf-shape translate-x-1/3 -translate-y-1/3" aria-hidden="true" />
              <p className="text-[#7FA5BE] text-xs font-bold tracking-[0.2em] uppercase mb-4">Our Mission</p>
              <h2 className="text-white text-2xl font-bold leading-snug mb-4">
                To simplify international healthcare coordination.
              </h2>
              <p className="text-white/65 text-sm leading-relaxed">
                Helping clients navigate healthcare provider options and the travel
                arrangements surrounding their journey — making the complex more
                manageable, one step at a time.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              transition={{ delay: 0.1 }}
              className="bg-[#EEF4F8] p-10 border border-[#D8D7D2]/60 relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#27689A]/8 leaf-shape-alt -translate-x-1/4 translate-y-1/4" aria-hidden="true" />
              <p className="text-[#27689A] text-xs font-bold tracking-[0.2em] uppercase mb-4">Our Vision</p>
              <h2 className="text-[#0B2E50] text-2xl font-bold leading-snug mb-4">
                A trusted international healthcare facilitation platform.
              </h2>
              <p className="text-[#172A3A]/65 text-sm leading-relaxed">
                Connecting people with appropriate healthcare opportunities across borders,
                with clarity, care, and professional coordination at every stage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== OUR APPROACH ===== */}
      <section className="py-20 md:py-28 bg-[#F8F7F3]" aria-labelledby="approach-heading">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
          <div className="mb-14">
            <SectionHeading
              eyebrow="How We Work"
              heading="Our Approach."
              subheading="A structured, personalized coordination process designed around your needs."
            />
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {APPROACH.map((step) => (
              <motion.div
                key={step.number}
                variants={staggerItem}
                className="bg-white border border-[#D8D7D2]/60 p-7 relative overflow-hidden group hover:border-[#27689A]/40 hover:shadow-md transition-all duration-300"
              >
                <span className="block text-[3.5rem] font-bold leading-none text-[#D8D7D2] group-hover:text-[#27689A]/20 transition-colors duration-400 mb-3 select-none">
                  {step.number}
                </span>
                <h3 className="text-[#0B2E50] text-lg font-bold mb-2">{step.label}</h3>
                <p className="text-[#172A3A]/65 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
          <div className="mb-14">
            <SectionHeading
              eyebrow="Our Values"
              heading="What We Stand For."
            />
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                variants={staggerItem}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-[#EEF4F8] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0B2E50] transition-colors duration-300">
                  <span className="text-[#27689A] group-hover:text-white font-bold text-xs tracking-[0.1em] transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-[#0B2E50] text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-[#172A3A]/60 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection
        heading="Ready to Start Your Healthcare Journey?"
        body="Speak with our coordination team today and let us help you take the first step."
        primaryLabel="Start Your Medical Journey"
        primaryLink="/contact"
        secondaryLabel="Explore Our Services"
        secondaryLink="/services"
      />
    </main>
  );
};

export default About;