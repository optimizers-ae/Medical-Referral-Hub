import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryGrid = ({ items }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i - 1 + items.length) % items.length);
  }, [items.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    const handleKey = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, goPrev, goNext]);

  // Assign heights for masonry effect
  const getGridClass = (size) => {
    switch (size) {
      case 'large': return 'md:col-span-2 md:row-span-2';
      case 'wide': return 'md:col-span-2';
      case 'tall': return 'md:row-span-2';
      default: return '';
    }
  };

  return (
    <>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        style={{ gridAutoRows: '200px' }}
        role="list"
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className={`${getGridClass(item.size)} overflow-hidden cursor-pointer group relative bg-[#D8D7D2]`}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            onClick={() => openLightbox(index)}
            role="listitem"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
            aria-label={`View: ${item.alt}`}
          >
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-[#0B2E50]/0 group-hover:bg-[#0B2E50]/30 transition-all duration-400 flex items-end p-4">
              <p className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transition-transform">
                {item.alt}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
            role="dialog"
            aria-label="Image lightbox"
            aria-modal="true"
          >
            {/* Close */}
            <button
              id="lightbox-close-btn"
              className="absolute top-5 right-5 text-white/70 hover:text-white p-2 transition-colors z-10"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X size={28} />
            </button>

            {/* Prev */}
            <button
              id="lightbox-prev-btn"
              className="absolute left-4 md:left-8 text-white/70 hover:text-white p-2 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              aria-label="Previous image"
            >
              <ChevronLeft size={36} />
            </button>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center gap-4"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={items[lightboxIndex].image}
                  alt={items[lightboxIndex].alt}
                  className="max-w-full max-h-[78vh] object-contain rounded-sm shadow-2xl"
                />
                <p className="text-white/60 text-sm text-center">
                  {items[lightboxIndex].alt}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Next */}
            <button
              id="lightbox-next-btn"
              className="absolute right-4 md:right-8 text-white/70 hover:text-white p-2 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              aria-label="Next image"
            >
              <ChevronRight size={36} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    i === lightboxIndex ? 'bg-white w-4' : 'bg-white/40'
                  }`}
                  aria-label={`View image ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryGrid;
