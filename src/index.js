import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { preloadCriticalResources, optimizeScroll, monitorWebVitals } from './utils/performance';

// Preload critical resources for better performance
preloadCriticalResources();

// Optimize scroll performance
const cleanupScrollOptimization = optimizeScroll();

// Monitor web vitals in development
if (process.env.NODE_ENV === 'development') {
  monitorWebVitals();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Cleanup on unmount
window.addEventListener('beforeunload', cleanupScrollOptimization);

