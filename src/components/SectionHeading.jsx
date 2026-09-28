import { motion } from 'framer-motion';
import { fadeUp, fadeIn, viewportConfig } from '../utils/animations.js';

/**
 * Reusable section heading component with optional eyebrow text
 * @param {string} eyebrow - Small uppercase label above the heading
 * @param {string} heading - Main h2 heading text
 * @param {string} subheading - Optional paragraph text below heading
 * @param {string} align - 'left' | 'center' | 'right'
 * @param {boolean} dark - if true, uses white text for dark backgrounds
 */
const SectionHeading = ({
  eyebrow,
  heading,
  subheading,
  align = 'center',
  dark = false,
}) => {
  const alignClass = {
    left: 'text-center items-center lg:text-left lg:items-start',
    center: 'text-center items-center',
    right: 'text-center items-center lg:text-right lg:items-end',
  }[align];

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {eyebrow && (
        <motion.p
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className={`text-xs font-semibold tracking-[0.2em] uppercase ${
            dark ? 'text-[#7FA5BE]' : 'text-[#27689A]'
          }`}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className={`text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-tight tracking-tight ${
          dark ? 'text-white' : 'text-[#0B2E50]'
        } max-w-3xl`}
      >
        {heading}
      </motion.h2>
      {subheading && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className={`text-base leading-relaxed max-w-2xl ${
            dark ? 'text-white/70' : 'text-[#172A3A]/65'
          }`}
        >
          {subheading}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
