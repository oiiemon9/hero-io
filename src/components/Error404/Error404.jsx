import React from 'react';
import { Link, useNavigate } from 'react-router';

import Error404img from '../../assets/error-404.png';

const Error404 = () => {
  const navigate = useNavigate();
  const handelBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex flex-col items-center gap-10 my-10">
      <div>
        <img src={Error404img} alt="" />
      </div>
      <div className="text-center space-y-4">
        <h4 className="text-4xl font-bold">Oops, page not found!</h4>
        <p className="text-slate-600">
          The page you are looking for is not available.
        </p>
        <div className="flex justify-center mt-10">
          <Link
            onClick={handelBack}
            className="btn text-white bg-[linear-gradient(160deg,rgba(99,46,227,1)_0%,rgba(159,98,242,1)_100%)] px-10"
          >
            Go Back!
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Error404;
