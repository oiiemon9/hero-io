import React, { Suspense, use, useEffect, useState } from 'react';
import Hero from './Hero/Hero';
import TrustedSection from './TrustedSection/TrustedSection';
import TrandingAppsSection from './TrandingAppsSection/TrandingAppsSection';
import { CgLaptop } from 'react-icons/cg';
import Loader from '../Loader/Loader';
import { useLoaderData } from 'react-router';

const Home = () => {
  const [appData, setAppData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [err, setErr] = useState();

  useEffect(() => {
    setLoader(true);
    const data = async () => {
      try {
        const dataFetch = await fetch('/appData.json');
        const data = await dataFetch.json();
        setAppData(data);
      } catch (error) {
        setErr(error);
      } finally {
        setLoader(false);
      }
    };
    data();
  }, []);

  if (loader) {
    return <Loader></Loader>;
  }
  if (err) {
    return <p>{err}</p>;
  }

  return (
    <div>
      <Hero></Hero>
      <TrustedSection></TrustedSection>
      <TrandingAppsSection appData={appData}></TrandingAppsSection>
    </div>
  );
};

export default Home;
