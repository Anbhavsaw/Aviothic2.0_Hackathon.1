import { useEffect, useCallback } from 'react';
import { throttle } from '../utils/performance';

export const useScrollOptimization = (callback, deps = []) => {
  const throttledCallback = useCallback(
    throttle(callback, 16), // ~60fps
    deps
  );

  useEffect(() => {
    window.addEventListener('scroll', throttledCallback, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledCallback);
    };
  }, [throttledCallback]);
};

export const useIntersectionObserver = (callback, options = {}) => {
  useEffect(() => {
    const defaultOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1,
      ...options
    };

    const observer = new IntersectionObserver(callback, defaultOptions);
    
    return () => {
      observer.disconnect();
    };
  }, [callback, options]);
};

export const usePerformanceOptimization = () => {
  useEffect(() => {
    // Disable animations for users who prefer reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    }

    // Optimize for mobile devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Reduce animation complexity on mobile
      document.documentElement.style.setProperty('--animation-duration', '0.1s');
    }

    return () => {
      // Reset styles on cleanup
      document.documentElement.style.removeProperty('--animation-duration');
    };
  }, []);
};

