import React, { createContext, useEffect, useState } from 'react';
import {
  addLocalInstallData,
  getLocalInstallData,
  removeLocalInstallData,
} from '../utils/LocalStorage/LocalStorage';

export const InstallContext = createContext();

const GlobalProvider = ({ children }) => {
  const [install, setInstall] = useState([]);
  const handelInstall = (id) => {
    const newData = [...install, id];
    setInstall(newData);
    addLocalInstallData(id);
  };
  const handelUninstall = (id) => {
    const installedData = install.filter((data) => parseInt(data) !== id);
    setInstall(installedData);
    removeLocalInstallData(id);
  };

  useEffect(() => {
    setInstall(getLocalInstallData());
  }, []);

  //   console.log(install);
  return (
    <InstallContext.Provider
      value={{ install, setInstall, handelInstall, handelUninstall }}
    >
      {children}
    </InstallContext.Provider>
  );
};

export default GlobalProvider;
