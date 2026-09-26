// src/data/index.js
// Central data store for all reusable content

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES = [
  {
    id: 1,
    number: '01',
    title: 'Healthcare Provider Sourcing',
    short: 'Find suitable medical centers and healthcare providers based on your requirements.',
    description:
      'Understanding your specific medical requirements and helping identify potentially suitable hospitals, medical centers, clinics, or healthcare providers across international destinations.',
    cta: 'Discuss Your Requirements',
  },
  {
    id: 2,
    number: '02',
    title: 'Medical Referral Coordination',
    short: 'Coordinating communication and referral processes with selected providers.',
    description:
      'Helping organize referral communication, coordinate available documentation, and facilitate the connection between you and your selected healthcare providers — reducing the administrative complexity of seeking care abroad.',
    cta: null,
  },
  {
    id: 3,
    number: '03',
    title: 'Visa Assistance',
    short: 'Guidance and assistance with medical travel visa documentation.',
    description:
      'Support and guidance with medical travel visa documentation and application preparation, subject to relevant immigration requirements. We help you understand what is typically required and assist where possible.',
    cta: null,
  },
  {
    id: 4,
    number: '04',
    title: 'Flight & Ticket Assistance',
    short: 'Coordinating practical travel arrangements around your healthcare journey.',
    description:
      'Help coordinate flight and travel planning around your appointments and treatment schedule, ensuring your travel arrangements align with your healthcare timetable.',
    cta: null,
  },
  {
    id: 5,
    number: '05',
    title: 'Accommodation Coordination',
    short: 'Assistance identifying suitable accommodation for your stay.',
    description:
      'Assistance identifying suitable accommodation based on location relative to your healthcare facility, duration of stay, and your individual requirements and preferences.',
    cta: null,
  },
  {
    id: 6,
    number: '06',
    title: 'Local Travel Support',
    short: 'Help coordinate airport transfers and local transportation.',
    description:
      'Where available, help coordinate airport transfers and relevant local transportation to ensure smooth movement between your accommodation and healthcare facilities.',
    cta: null,
  },
  {
    id: 7,
    number: '07',
    title: 'Patient Journey Coordination',
    short: 'A central coordination point throughout your planned healthcare journey.',
    description:
      'Providing a single, reliable coordination point before and during your international healthcare journey — so you have consistent support and communication throughout the process.',
    cta: null,
  },
];

export const JOURNEY_STEPS = [
  {
    step: '01',
    title: 'Understand Your Requirements',
    description:
      'We begin by understanding your healthcare needs, preferences, and travel considerations to guide the coordination process.',
  },
  {
    step: '02',
    title: 'Source Suitable Healthcare Options',
    description:
      'Based on your requirements, we help identify potentially suitable healthcare providers and present relevant options for your consideration.',
  },
  {
    step: '03',
    title: 'Coordinate Your Referral',
    description:
      'We help facilitate communication and referral coordination with your chosen healthcare provider, supporting the administrative process.',
  },
  {
    step: '04',
    title: 'Assist With Travel & Visa',
    description:
      'From visa guidance to flight coordination and accommodation assistance, we help organize the practical elements of your medical travel.',
  },
  {
    step: '05',
    title: 'Support Your Healthcare Journey',
    description:
      'We remain a consistent point of contact, providing coordination support before and throughout your international healthcare journey.',
  },
];

export const WHY_POINTS = [
  {
    number: '01',
    title: 'Personalized Coordination',
    description:
      'Every enquiry is approached individually. We take time to understand your specific situation before providing coordination guidance.',
  },
  {
    number: '02',
    title: 'International Healthcare Access',
    description:
      'We help connect patients with healthcare options across international destinations, making it easier to explore what is available.',
  },
  {
    number: '03',
    title: 'Travel Support',
    description:
      'From visa guidance to flight and accommodation coordination, we help organize the practical layers of medical travel.',
  },
  {
    number: '04',
    title: 'End-to-End Assistance',
    description:
      'We coordinate multiple aspects of the journey in one place — reducing the need to navigate each element independently.',
  },
];

export const FAQS = [
  {
    id: 1,
    question: 'How does Medical Referral Hub help patients?',
    answer:
      'Medical Referral Hub is a healthcare facilitation and medical travel coordination company. We help patients navigate the practical process of seeking healthcare abroad — from identifying suitable healthcare providers to coordinating travel, visa assistance, and accommodation. We act as a coordination bridge between patients and healthcare providers.',
  },
  {
    id: 2,
    question: 'Can you help me find a suitable healthcare provider?',
    answer:
      'Yes. We help identify potentially suitable hospitals, clinics, and healthcare providers based on your stated requirements and available information. We do not make medical recommendations — treatment decisions remain with qualified healthcare professionals. We help you understand your options and coordinate the connection.',
  },
  {
    id: 3,
    question: 'Do you provide visa assistance?',
    answer:
      'We offer guidance and assistance with medical travel visa documentation and application preparation. Visa approval is subject to the relevant immigration authorities and requirements. We help you understand what is typically required and assist with the preparation process where possible.',
  },
  {
    id: 4,
    question: 'Can you help arrange flights and accommodation?',
    answer:
      'Yes. We can help coordinate flight arrangements and identify suitable accommodation based on your destination, healthcare facility location, duration of stay, and individual preferences. Our role is to help organize and coordinate these practical elements.',
  },
  {
    id: 5,
    question: 'Do you provide medical advice?',
    answer:
      'No. Medical Referral Hub does not provide medical advice, diagnosis, or treatment recommendations. All medical decisions, diagnosis, and treatment plans are the responsibility of qualified healthcare professionals and licensed medical providers. Our role is facilitation and coordination only.',
  },
  {
    id: 6,
    question: 'How do I start the process?',
    answer:
      'Simply fill out our enquiry form or contact our team directly. Share your general requirements and we will guide you through the next coordination steps. There is no obligation in making an initial enquiry — we are here to help you understand what is possible.',
  },
];

export const VALUES = [
  { title: 'Trust', description: 'We build relationships grounded in transparency and reliability.' },
  { title: 'Clarity', description: 'We communicate clearly, without unnecessary complexity.' },
  { title: 'Care', description: 'We approach every enquiry with genuine consideration for the individual.' },
  { title: 'Coordination', description: 'We bring together multiple elements of a complex journey.' },
  { title: 'Professionalism', description: 'We uphold high standards in every aspect of our coordination work.' },
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    category: 'healthcare',
    alt: 'Healthcare consultation with international patient',
    image: '/src/assets/hero_consultation.jpg',
    size: 'large',
  },
  {
    id: 2,
    category: 'facilities',
    alt: 'Modern international hospital building',
    image: '/src/assets/hospital_modern.jpg',
    size: 'wide',
  },
  {
    id: 3,
    category: 'travel',
    alt: 'International medical travel coordination at airport',
    image: '/src/assets/travel_international.jpg',
    size: 'medium',
  },
  {
    id: 4,
    category: 'patient-support',
    alt: 'Patient support and coordination in hospital',
    image: '/src/assets/patient_support.jpg',
    size: 'medium',
  },
  {
    id: 5,
    category: 'destinations',
    alt: 'International healthcare destination city skyline',
    image: '/src/assets/gallery_city_destination.jpg',
    size: 'wide',
  },
  {
    id: 6,
    category: 'facilities',
    alt: 'Premium hospital private room interior',
    image: '/src/assets/hospital_interior.jpg',
    size: 'medium',
  },
  {
    id: 7,
    category: 'healthcare',
    alt: 'Doctor consulting with international patient',
    image: '/src/assets/doctor_consultation.jpg',
    size: 'medium',
  },
  {
    id: 8,
    category: 'patient-support',
    alt: 'Healthcare coordination team meeting',
    image: '/src/assets/about_team.jpg',
    size: 'large',
  },
];

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'travel', label: 'Travel' },
  { id: 'patient-support', label: 'Patient Support' },
  { id: 'destinations', label: 'Destinations' },
];

export const HOW_IT_WORKS = [
  { step: 'Enquiry', description: 'Share your healthcare requirements with our team.' },
  { step: 'Assessment', description: 'We review your requirements and understand your situation.' },
  { step: 'Healthcare Options', description: 'We help identify suitable healthcare providers.' },
  { step: 'Referral Coordination', description: 'We facilitate the referral communication process.' },
  { step: 'Travel Preparation', description: 'We coordinate visa, flights, and accommodation.' },
  { step: 'Journey Support', description: 'We provide coordination support throughout your journey.' },
];
