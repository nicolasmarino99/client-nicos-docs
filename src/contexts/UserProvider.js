/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [state, setstate] = useState({ name: '' });
  return (
    <UserContext.Provider value={[state, setstate]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
