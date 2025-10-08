import React, { useEffect, useState } from 'react';
import TrandingApp from '../Home/TrandingAppsSection/TrandingApp';
import { Link } from 'react-router';
import Loader from '../Loader/Loader';

const Apps = () => {
  const [appData, setAppData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [err, setErr] = useState();

  useEffect(() => {
    setLoader(true);
    const data = async () => {
      try {
        const dataFetch = await fetch('/appData.json');
        const res = await dataFetch.json();
        setAppData(res);
      } catch (error) {
        setErr(error);
      } finally {
        setLoader(false);
      }
    };
    data();
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto px-2 my-20">
      <div className="text-center space-y-4">
        <h4 className="text-4xl font-bold">Trending Apps</h4>
        <p className="text-slate-600">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      {loader && <Loader></Loader>}

      <div className="mt-10 grid grid-cols-4 gap-5">
        {appData.map((application) => (
          <TrandingApp application={application}></TrandingApp>
        ))}
      </div>
    </div>
  );
};

export default Apps;
