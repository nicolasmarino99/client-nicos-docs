import React, { createContext, useState } from 'react';

export const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
  const [state, setstate] = useState(true);
  return (
    <LoadingContext.Provider value={[state, setstate]}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;