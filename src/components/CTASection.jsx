import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations.js';

/**
 * Reusable CTA section
 */
const CTASection = ({
  eyebrow,
  heading,
  body,
  primaryLabel = 'Start Your Medical Journey',
  primaryLink = '/contact',
  secondaryLabel,
  secondaryLink,
  dark = false,
}) => {
  const bg = dark ? 'bg-[#0B2E50]' : 'bg-[#EEF4F8]';
  const headingColor = dark ? 'text-white' : 'text-[#0B2E50]';
  const bodyColor = dark ? 'text-white/70' : 'text-[#172A3A]/65';
  const eyebrowColor = dark ? 'text-[#7FA5BE]' : 'text-[#27689A]';

  return (
    <section className={`${bg} py-20 md:py-28`} aria-label="Call to action">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col items-center gap-4 max-w-2xl mx-auto"
        >
          {eyebrow && (
            <motion.p variants={fadeUp} className={`text-xs font-semibold tracking-[0.2em] uppercase ${eyebrowColor}`}>
              {eyebrow}
            </motion.p>
          )}
          <motion.h2 variants={fadeUp} className={`text-3xl md:text-4xl font-bold leading-tight tracking-tight ${headingColor}`}>
            {heading}
          </motion.h2>
          {body && (
            <motion.p variants={fadeUp} className={`text-base leading-relaxed ${bodyColor}`}>
              {body}
            </motion.p>
          )}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mt-4">
            <Link
              to={primaryLink}
              id="cta-primary-btn"
              className="px-8 py-3.5 bg-[#0B2E50] text-white text-sm font-semibold hover:bg-[#27689A] transition-all duration-300 tracking-wide"
            >
              {primaryLabel}
            </Link>
            {secondaryLabel && secondaryLink && (
              <Link
                to={secondaryLink}
                id="cta-secondary-btn"
                className="px-8 py-3.5 border border-[#0B2E50] text-[#0B2E50] text-sm font-semibold hover:bg-[#0B2E50] hover:text-white transition-all duration-300 tracking-wide"
              >
                {secondaryLabel}
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
