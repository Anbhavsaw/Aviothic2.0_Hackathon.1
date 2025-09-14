import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { LoadingProvider, LoadingSpinner } from './components/LoadingManager';

// Lazy load components for better performance
const About = lazy(() => import('./components/About'));
const Themes = lazy(() => import('./components/Themes'));
const Rewards = lazy(() => import('./components/Rewards'));
const Registration = lazy(() => import('./components/Registration'));
const Coordinators = lazy(() => import('./components/Coordinators'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <LoadingProvider>
      <div className="App">
        <Header />
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <About />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Themes />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Rewards />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Registration />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Coordinators />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Contact />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Footer />
        </Suspense>
      </div>
    </LoadingProvider>
  );
}

export default App;

