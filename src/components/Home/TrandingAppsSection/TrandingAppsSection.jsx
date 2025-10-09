import React from 'react';
import TrandingApp from './TrandingApp';
import { Link } from 'react-router';

const TrandingAppsSection = ({ appData }) => {
  const trending = appData.filter((app) => app.id <= 8);
  return (
    <div className="max-w-[1440px] mx-auto px-2 my-20">
      <div className="text-center space-y-4">
        <h4 className="text-4xl font-bold">Trending Apps</h4>
        <p className="text-slate-600">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {trending.map((application, i) => (
          <TrandingApp key={i} application={application}></TrandingApp>
        ))}
      </div>
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

export default TrandingAppsSection;
