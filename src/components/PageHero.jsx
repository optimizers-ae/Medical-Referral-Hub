import { motion } from 'framer-motion';
import { imageReveal, fadeUp, viewportConfig } from '../utils/animations.js';

/**
 * Reusable page hero section
 * @param {string} eyebrow - Small uppercase label
 * @param {string} title - H1 main heading (only one per page)
 * @param {string} subtitle - Optional supporting text
 * @param {string} image - Background or side image URL
 * @param {boolean} centered - if true, text is centered
 */
const PageHero = ({ eyebrow, title, subtitle, image, centered = true }) => {
  return (
    <section
      className="relative h-screen flex items-end pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden"
      aria-label="Page hero"
    >
      {/* Background image */}
      {image && (
        <motion.div
          className="absolute inset-0 z-0"
          variants={imageReveal}
          initial="hidden"
          animate="visible"
        >
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B2E50]/70 via-[#0B2E50]/55 to-[#0B2E50]/75" />
        </motion.div>
      )}

      {/* Fallback gradient background */}
      {!image && (
        <div className="absolute inset-0 bg-[#0B2E50] z-0">
          {/* Subtle leaf shapes */}
          <div
            className="absolute top-20 -right-20 w-80 h-80 bg-[#27689A]/15 leaf-shape"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-10 left-10 w-56 h-56 bg-[#7FA5BE]/10 leaf-shape-alt"
            aria-hidden="true"
          />
        </div>
      )}

      {/* Content */}
      <div
        className={`relative z-10 max-w-7xl mx-auto w-full px-5 md:px-8 lg:px-10 ${
          centered ? 'text-center' : 'text-left'
        }`}
      >
        <div className={`${centered ? 'flex flex-col items-center' : ''} max-w-3xl ${centered ? 'mx-auto' : ''}`}>
          {eyebrow && (
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[#7FA5BE] text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="text-white text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-tight tracking-tight mb-4"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="text-white/75 text-lg leading-relaxed max-w-2xl"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
