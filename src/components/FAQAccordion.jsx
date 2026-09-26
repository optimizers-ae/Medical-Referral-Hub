import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQAccordion = ({ faqs }) => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <div className="space-y-2" role="list">
      {faqs.map((faq, index) => (
        <motion.div
          key={faq.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ delay: index * 0.07, duration: 0.5 }}
          className="border border-[#D8D7D2]/70 bg-white"
          role="listitem"
        >
          <button
            id={`faq-btn-${faq.id}`}
            className="w-full text-left flex items-center justify-between gap-4 px-6 py-5 group"
            onClick={() => toggle(faq.id)}
            aria-expanded={openId === faq.id}
            aria-controls={`faq-answer-${faq.id}`}
          >
            <span className="text-[#0B2E50] text-sm md:text-base font-semibold leading-snug pr-4 group-hover:text-[#27689A] transition-colors duration-200">
              {faq.question}
            </span>
            <motion.span
              animate={{ rotate: openId === faq.id ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 text-[#27689A]"
              aria-hidden="true"
            >
              <ChevronDown size={18} strokeWidth={2} />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {openId === faq.id && (
              <motion.div
                id={`faq-answer-${faq.id}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                style={{ overflow: 'hidden' }}
                role="region"
                aria-labelledby={`faq-btn-${faq.id}`}
              >
                <div className="px-6 pb-5 border-t border-[#D8D7D2]/50 pt-4">
                  <p className="text-[#172A3A]/70 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default FAQAccordion;
