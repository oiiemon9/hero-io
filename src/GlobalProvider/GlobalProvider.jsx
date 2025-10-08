import React, { createContext, useState } from 'react';

export const InstallContext = createContext();

const GlobalProvider = ({ children }) => {
  const [install, setInstall] = useState([]);
  const handelInstall = (id) => {
    const newData = [...install, id];
    setInstall(newData);
  };
  console.log(install);
  return (
    <InstallContext.Provider value={{ install, setInstall, handelInstall }}>
      {children}
    </InstallContext.Provider>
  );
};

export default GlobalProvider;
