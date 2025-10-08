import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { InstallContext } from '../../GlobalProvider/GlobalProvider';
import Item from './Item/Item';
import Loader from '../Loader/Loader';

const Installation = () => {
  const { install, setInstall, handelInstall } = useContext(InstallContext);
  const [installedApp, setInstalledApp] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoader(true);
    const data = async () => {
      try {
        const dataFetch = await fetch('/appData.json');
        const res = await dataFetch.json();
        const installedData = [];
        for (const id of install) {
          for (const data of res) {
            if (parseInt(id) === data.id) {
              installedData.push(data);
            }
          }
        }
        setInstalledApp(installedData);
      } catch (err) {
        setError(err);
      } finally {
        setLoader(false);
      }
    };
    data();
  }, []);

  const handelSort = (e) => {
    if (e.target.value === 'Low - High') {
      const lowToHigh = [...installedApp].sort(
        (a, b) => a.downloads - b.downloads
      );

      setInstalledApp(lowToHigh);
    } else if (e.target.value === 'High - Low') {
      const lowToHigh = [...installedApp].sort(
        (a, b) => b.downloads - a.downloads
      );
      setInstalledApp(lowToHigh);
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto px-2 my-20">
      <div className="text-center space-y-4">
        <h4 className="text-4xl font-bold">Your Installed Apps</h4>
        <p className="text-slate-600">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="my-5 flex justify-between">
        <h6 className="text-xl font-bold">
          ({installedApp.length}) Apps Found
        </h6>
        <div className="max-w-32 w-full relative">
          <select
            onChange={handelSort}
            defaultValue="Pick a color"
            className="select"
          >
            <option disabled={true}>Pick a color</option>
            <option>Low - High</option>
            <option>High - Low</option>
          </select>
        </div>
      </div>
      {loader ? (
        <Loader></Loader>
      ) : (
        <div className="mt-10 flex flex-col gap-5">
          {installedApp.map((data, i) => (
            <Item key={i} data={data}></Item>
          ))}
        </div>
      )}

      <div className="flex justify-center mt-10">
        <Link
          to="/apps"
          className="btn text-white bg-[linear-gradient(160deg,rgba(99,46,227,1)_0%,rgba(159,98,242,1)_100%)] px-10"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Installation;
