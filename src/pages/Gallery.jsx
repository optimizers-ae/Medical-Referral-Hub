import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/index.js';
import PageHero from '../components/PageHero.jsx';
import GalleryGrid from '../components/GalleryGrid.jsx';
import CTASection from '../components/CTASection.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import destinationImg from '../assets/gallery_city_destination.jpg';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <main>
      <PageHero
        eyebrow="Our Gallery"
        title="Healthcare Journeys, Connections & Destinations."
        image={destinationImg}
        centered={false}
      />

      {/* ===== GALLERY SECTION ===== */}
      <section className="py-20 md:py-28 bg-white" aria-label="Image gallery">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
          <div className="mb-12">
            <SectionHeading
              heading="A Visual Overview."
              subheading="Explore imagery from international healthcare facilities, coordination moments, travel destinations, and patient support."
            />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Gallery categories">
            {GALLERY_CATEGORIES.map((cat) => (
              <motion.button
                key={cat.id}
                id={`gallery-filter-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                whileTap={{ scale: 0.96 }}
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`px-5 py-2 text-sm font-semibold tracking-wide transition-all duration-250 ${
                  activeCategory === cat.id
                    ? 'bg-[#0B2E50] text-white'
                    : 'bg-[#F8F7F3] text-[#172A3A]/65 hover:bg-[#EEF4F8] hover:text-[#0B2E50]'
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>

          {/* Gallery grid with filter animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <GalleryGrid items={filteredItems} />
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <p className="text-center text-[#172A3A]/50 py-20">
              No images in this category.
            </p>
          )}
        </div>
      </section>

      <CTASection
        heading="Ready to Start Your Healthcare Journey?"
        body="Our team is here to help you explore your options and coordinate the next steps."
        primaryLabel="Start Your Medical Journey"
        primaryLink="/contact"
      />
    </main>
  );
};

export default Gallery;
