import { motion } from 'framer-motion';
import { staggerItem } from '../utils/animations.js';

/**
 * Service card component
 */
const ServiceCard = ({ service, variant = 'default' }) => {
  if (variant === 'numbered') {
    return (
      <motion.article
        variants={staggerItem}
        className="group relative bg-white border border-[#D8D7D2]/60 p-8 hover:border-[#27689A]/40 hover:shadow-lg transition-all duration-400"
        aria-label={`Service: ${service.title}`}
      >
        {/* Number */}
        <span className="block text-[4rem] font-bold leading-none text-[#D8D7D2] group-hover:text-[#27689A]/20 transition-colors duration-400 mb-4 select-none">
          {service.number}
        </span>
        <h3 className="text-[#0B2E50] text-lg font-bold mb-3 leading-snug">
          {service.title}
        </h3>
        <p className="text-[#172A3A]/65 text-sm leading-relaxed">
          {service.short}
        </p>
        {/* Hover accent line */}
        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#27689A] group-hover:w-full transition-all duration-500" />
      </motion.article>
    );
  }

  return (
    <motion.article
      variants={staggerItem}
      className="group bg-white border border-[#D8D7D2]/60 rounded-sm overflow-hidden hover:shadow-lg transition-all duration-400"
      aria-label={`Service: ${service.title}`}
    >
      <div className="p-7">
        <div className="flex items-start gap-4 mb-4">
          <span className="text-2xl font-bold text-[#27689A]/30 select-none w-10 flex-shrink-0">
            {service.number}
          </span>
          <h3 className="text-[#0B2E50] text-lg font-bold leading-snug pt-0.5">
            {service.title}
          </h3>
        </div>
        <p className="text-[#172A3A]/65 text-sm leading-relaxed pl-14">
          {service.description}
        </p>
        {service.cta && (
          <div className="pl-14 mt-5">
            <span className="text-[#27689A] text-sm font-semibold group-hover:underline">
              {service.cta} →
            </span>
          </div>
        )}
      </div>
    </motion.article>
  );
};

export default ServiceCard;
