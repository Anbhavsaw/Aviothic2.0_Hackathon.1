import React, { createContext, useContext, useState, useEffect } from 'react';

const LoadingContext = createContext();

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedComponents, setLoadedComponents] = useState(new Set());

  const markComponentLoaded = (componentName) => {
    setLoadedComponents(prev => {
      const newSet = new Set(prev);
      newSet.add(componentName);
      return newSet;
    });
  };

  useEffect(() => {
    // Mark initial load as complete after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const value = {
    isLoading,
    loadedComponents,
    markComponentLoaded
  };

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
};

export const LoadingSpinner = ({ size = 'medium' }) => {
  const sizeClasses = {
    small: 'h-6 w-6',
    medium: 'h-12 w-12',
    large: 'h-16 w-16'
  };

  return (
    <div className="flex justify-center items-center py-16">
      <div 
        className={`animate-spin rounded-full border-b-2 border-neon-green ${sizeClasses[size]}`}
        style={{ willChange: 'auto' }}
      />
    </div>
  );
};
