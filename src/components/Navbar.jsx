import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS } from '../data/index.js';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleCTA = () => {
    navigate('/contact');
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#D8D7D2]/60'
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 flex items-center justify-between h-20"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 flex-shrink-0"
            aria-label="Medical Referral Hub - Home"
          >
            <img
              src={logo}
              alt="Medical Referral Hub Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium tracking-wide transition-colors duration-200 relative group ${
                      isActive
                        ? 'text-[#27689A]'
                        : scrolled
                        ? 'text-[#172A3A] hover:text-[#27689A]'
                        : 'text-[#172A3A] hover:text-[#27689A]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-[#27689A] transition-all duration-300 ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+1-000-000-0000"
              className="flex items-center gap-2 text-sm font-medium text-[#27689A] hover:text-[#0B2E50] transition-colors duration-200"
              aria-label="Talk to our team"
            >
              <Phone size={15} strokeWidth={2} />
              <span>Talk to Our Team</span>
            </a>
            <button
              id="nav-cta-btn"
              onClick={handleCTA}
              className="ml-2 px-5 py-2.5 bg-[#0B2E50] text-white text-sm font-semibold rounded-sm hover:bg-[#27689A] transition-all duration-300 tracking-wide"
            >
              Start Your Medical Journey
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-btn"
            className="lg:hidden p-2 text-[#0B2E50] hover:text-[#27689A] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </header>

      {/* Mobile Slide-out Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/30 z-40 lg:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-white z-50 flex flex-col shadow-2xl lg:hidden"
              role="dialog"
              aria-label="Mobile navigation menu"
            >
              {/* Mobile menu header */}
              <div className="flex items-center justify-between p-6 border-b border-[#D8D7D2]/60">
                <img src={logo} alt="Medical Referral Hub" className="h-10 w-auto" />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 text-[#0B2E50] hover:text-[#27689A]"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Mobile nav links */}
              <nav className="flex-1 overflow-y-auto p-6">
                <ul className="space-y-1" role="list">
                  {NAV_LINKS.map((link, i) => (
                    <motion.li
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                    >
                      <NavLink
                        to={link.path}
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                          `block px-4 py-3.5 text-base font-medium rounded-sm transition-colors duration-200 ${
                            isActive
                              ? 'bg-[#0B2E50]/5 text-[#27689A]'
                              : 'text-[#172A3A] hover:bg-[#F8F7F3] hover:text-[#27689A]'
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Mobile CTAs */}
              <div className="p-6 border-t border-[#D8D7D2]/60 space-y-3">
                <a
                  href="tel:+1-000-000-0000"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 border border-[#27689A] text-[#27689A] text-sm font-semibold rounded-sm hover:bg-[#27689A] hover:text-white transition-all duration-300"
                >
                  <Phone size={15} />
                  Talk to Our Team
                </a>
                <button
                  id="mobile-cta-btn"
                  onClick={handleCTA}
                  className="w-full px-4 py-3 bg-[#0B2E50] text-white text-sm font-semibold rounded-sm hover:bg-[#27689A] transition-all duration-300"
                >
                  Start Your Medical Journey
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;