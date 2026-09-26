import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Router from './Router.jsx';
import Footer from './components/Footer.jsx';
import { usePageMeta } from './hooks/usePageMeta.js';

// Scroll to top + update SEO meta on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  usePageMeta(pathname);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Router />
      <Footer />
    </>
  );
};

export default App;
