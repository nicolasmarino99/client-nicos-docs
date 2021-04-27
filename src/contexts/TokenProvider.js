import React, { createContext, useState } from 'react';

export const TokenContext = createContext();

const TokenProvider = ({ children }) => {
  const [state, setstate] = useState(true);
  return (
    <TokenContext.Provider value={[state, setstate]}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;