import React from 'react';

const TrustedSection = () => {
  return (
    <div className="bg-[linear-gradient(160deg,rgba(99,46,227,1)_0%,rgba(159,98,242,1)_100%)] py-20">
      <div className="max-w-[1440px] mx-auto px-2">
        <div className="space-y-10">
          <h2 className="text-center text-4xl font-bold text-white">
            Trusted by Millions, Built for You
          </h2>
          <div className="flex justify-evenly gap-2 text-white">
            <div className="text-center space-y-2">
              <h6 className="text-sm">Total Downloads</h6>
              <h4 className="text-5xl font-bold">29.6M</h4>
              <p className="text-sm">21% more than last month</p>
            </div>
            <div className="text-center space-y-2">
              <h6 className="text-sm">Total Reviews</h6>
              <h4 className="text-5xl font-bold">906K</h4>
              <p className="text-sm">46% more than last month</p>
            </div>
            <div className="text-center space-y-2">
              <h6 className="text-sm">Active Apps</h6>
              <h4 className="text-5xl font-bold">132+</h4>
              <p className="text-sm">31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;
