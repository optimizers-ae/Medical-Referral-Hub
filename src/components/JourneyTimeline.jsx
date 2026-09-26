import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, viewportConfig } from '../utils/animations.js';

/**
 * Journey timeline component — horizontal on desktop, vertical on mobile
 */
const JourneyTimeline = ({ steps }) => {
  return (
    <div className="relative">
      {/* Desktop: Horizontal */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* Connector line */}
          <div className="absolute top-8 left-0 right-0 h-px bg-[#D8D7D2] z-0" aria-hidden="true" />

          <motion.div
            className="relative z-10 grid grid-cols-5 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {steps.map((step, index) => (
              <motion.div key={step.step} variants={staggerItem} className="flex flex-col items-center text-center">
                {/* Step circle */}
                <div className="relative w-16 h-16 rounded-full bg-white border-2 border-[#27689A] flex items-center justify-center mb-5 shadow-sm">
                  <span className="text-[#27689A] text-xs font-bold">{step.step}</span>
                  {/* Connector dot fill for active */}
                  <div className="absolute inset-0 rounded-full bg-[#0B2E50]/5" />
                </div>
                <h3 className="text-[#0B2E50] text-sm font-bold mb-2 leading-snug px-2">
                  {step.title}
                </h3>
                <p className="text-[#172A3A]/60 text-xs leading-relaxed px-1">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile: Vertical */}
      <div className="lg:hidden">
        <motion.div
          className="space-y-0"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {steps.map((step, index) => (
            <motion.div key={step.step} variants={staggerItem} className="flex gap-5">
              {/* Left: line + circle */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-[#27689A] flex items-center justify-center z-10 flex-shrink-0">
                  <span className="text-[#27689A] text-xs font-bold">{step.step}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px flex-1 bg-[#D8D7D2] my-2" aria-hidden="true" />
                )}
              </div>
              {/* Content */}
              <div className={`pb-8 ${index === steps.length - 1 ? 'pb-0' : ''} pt-2`}>
                <h3 className="text-[#0B2E50] text-base font-bold mb-2">{step.title}</h3>
                <p className="text-[#172A3A]/65 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default JourneyTimeline;
