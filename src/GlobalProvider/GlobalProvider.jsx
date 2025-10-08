import React, { createContext, useEffect, useState } from 'react';
import {
  addLocalInstallData,
  getLocalInstallData,
  removeLocalInstallData,
} from '../utils/LocalStorage/LocalStorage';
import { toast } from 'react-toastify';

export const InstallContext = createContext();

const GlobalProvider = ({ children }) => {
  const [install, setInstall] = useState([]);
  const handelInstall = (id, title) => {
    toast.success(`Yahhoo 🎉 ${title} Installed Successfully`);
    const newData = [...install, id];
    setInstall(newData);
    addLocalInstallData(id);
  };
  const handelUninstall = (id, title) => {
    toast(`${title} un-Installed from your Device`);
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
