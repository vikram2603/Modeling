import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Header } from "./components/Header";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { CategoryPage } from "./components/CategoryPage";


/* 🔥 Scroll to top */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

/* 🔥 PREMIUM PAGE ANIMATION (SMOOTHER) */
const pageVariants = {
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.99,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    y: -40,
    scale: 0.99,
  },
};

const pageTransition = {
  duration: 0.7,
  ease: [0.25, 1, 0.5, 1], // smooth cubic-bezier (premium feel)
};

/* 🔥 ROUTES WITH ANIMATION */
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        {/* 🏠 HOME */}
        <Route
          path="/"
          element={
            <PageWrapper>
              <Hero />
              <About />
              <Portfolio />
              <Contact />
            </PageWrapper>
          }
        />

        {/* 📄 ABOUT */}
        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />

        {/* 📄 CONTACT */}
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
        />

        {/* 📁 PORTFOLIO */}
        <Route
          path="/portfolio"
          element={
            <PageWrapper>
              <Portfolio />
            </PageWrapper>
          }
        />

        {/* 📁 CATEGORY */}
        <Route
          path="/portfolio/:category"
          element={
            <PageWrapper>
              <CategoryPage />
            </PageWrapper>
          }
        />

        {/* ❌ 404 */}
        <Route
          path="*"
          element={
            <PageWrapper>
              <div className="h-screen flex items-center justify-center text-3xl text-white">
                Page Not Found
              </div>
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

/* 🔥 PAGE WRAPPER */
function PageWrapper({ children }: any) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="min-h-screen relative"
    >
      {children}
    </motion.div>
  );
}

/* 🔥 MAIN APP */
export default function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />
      <Header />

      <main className="min-h-screen text-white relative  overflow-x-hidden bg-[radial-gradient(ellipse_at_top,_#0a0a0a,_#000000_60%)]">

  {/* 🔥 SOFT TOP GLOW */}
  <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-white/5 blur-[140px] rounded-full pointer-events-none" />

  {/* 🔥 LEFT LIGHT */}
  <div className="absolute top-[30%] left-[-200px] w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

  {/* 🔥 RIGHT LIGHT */}
  <div className="absolute top-[40%] right-[-200px] w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

  {/* KEEP YOUR EXISTING CONTENT */}
  <AnimatedRoutes />

</main>
    </BrowserRouter>
  );
}