// src/hooks/usePageTitle.js
import { useEffect } from 'react';

const PAGE_TITLES = {
  '/': 'Medical Referral Hub | International Healthcare Facilitation',
  '/about-us': 'About Us | Medical Referral Hub',
  '/services': 'Our Services | Medical Referral Hub',
  '/gallery': 'Gallery | Medical Referral Hub',
  '/contact': 'Contact Us | Medical Referral Hub',
};

const PAGE_DESCRIPTIONS = {
  '/': 'Medical Referral Hub helps coordinate international healthcare journeys, including healthcare provider sourcing, referral coordination, visa assistance and travel support.',
  '/about-us': 'Learn about Medical Referral Hub – an international healthcare facilitation and medical travel coordination company helping patients navigate their healthcare journey.',
  '/services': 'Explore our healthcare facilitation services including provider sourcing, referral coordination, visa assistance, travel and accommodation coordination.',
  '/gallery': 'View our gallery of international healthcare facilities, consultation environments, travel destinations, and patient support moments.',
  '/contact': 'Contact Medical Referral Hub to start your international healthcare journey. Our team will help guide you through the coordination process.',
};

export const usePageMeta = (pathname) => {
  useEffect(() => {
    const title = PAGE_TITLES[pathname] || PAGE_TITLES['/'];
    const description = PAGE_DESCRIPTIONS[pathname] || PAGE_DESCRIPTIONS['/'];

    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);
  }, [pathname]);
};
