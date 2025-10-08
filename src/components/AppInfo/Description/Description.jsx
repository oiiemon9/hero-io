import React from 'react';

const Description = ({ description }) => {
  return (
    <div className="mt-10">
      <h6 className="mb-5 text-xl font-bold">Description</h6>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

export default Description;
