import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Route-level code splitting for maximum performance
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Amya = lazy(() => import('./pages/Amya'));
const Timeline = lazy(() => import('./pages/Timeline'));
const Reviews = lazy(() => import('./pages/Reviews'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const GoldRates = lazy(() => import('./pages/GoldRates'));

function PageLoader() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-surface-dark">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-2 border-gold-500/20 border-t-gold-400 rounded-full animate-spin" />
        <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-medium">
          Girishbhai Gandevikar
        </span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<PageLoader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="services"
          element={
            <Suspense fallback={<PageLoader />}>
              <Services />
            </Suspense>
          }
        />
        <Route
          path="amya"
          element={
            <Suspense fallback={<PageLoader />}>
              <Amya />
            </Suspense>
          }
        />
        <Route
          path="timeline"
          element={
            <Suspense fallback={<PageLoader />}>
              <Timeline />
            </Suspense>
          }
        />
        <Route
          path="reviews"
          element={
            <Suspense fallback={<PageLoader />}>
              <Reviews />
            </Suspense>
          }
        />
        <Route
          path="faq"
          element={
            <Suspense fallback={<PageLoader />}>
              <FAQ />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<PageLoader />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="gold-rates"
          element={
            <Suspense fallback={<PageLoader />}>
              <GoldRates />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<PageLoader />}>
              <Home />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
