import { Link } from 'react-router-dom';
import { NAV_LINKS, SERVICES } from '../data/index.js';
import logo from '../assets/logo.jpeg';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0B2E50] text-white" role="contentinfo">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" aria-label="Medical Referral Hub Home">
              <img
                src={logo}
                alt="Medical Referral Hub Logo"
                className="logo-img h-14 w-auto object-contain mb-5 brightness-0 invert mix-blend-screen"
              />
            </Link>
            <p className="text-[#7FA5BE] text-xs font-semibold tracking-[0.15em] uppercase mb-3">
              Your Gateway to Global Healthcare
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              International healthcare facilitation and medical travel coordination.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-5">
              Navigation
            </h3>
            <ul className="space-y-3" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-5">
              Services
            </h3>
            <ul className="space-y-3" role="list">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / CTA */}
          <div>
            <h3 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-5">
              Start Your Journey
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Ready to explore your international healthcare options? Our team is here to help.
            </p>
            <Link
              to="/contact"
              id="footer-cta-btn"
              className="inline-block px-6 py-3 bg-[#27689A] text-white text-sm font-semibold hover:bg-white hover:text-[#0B2E50] transition-all duration-300 tracking-wide"
            >
              Contact Our Team
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {year} Medical Referral Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="text-white/40 text-xs hover:text-white/70 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-white/40 text-xs hover:text-white/70 transition-colors duration-200"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-white/25 text-xs mt-6 leading-relaxed max-w-3xl">
          Medical Referral Hub is a healthcare facilitation and coordination company. We do not provide medical advice, diagnosis, or treatment. All medical decisions are made by qualified healthcare professionals. Visa assistance is subject to relevant immigration requirements and authority decisions.
        </p>
      </div>
    </footer>
  );
};

export default Footer;