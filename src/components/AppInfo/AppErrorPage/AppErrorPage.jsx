import React from 'react';
import AppNotFoundImg from '../../../assets/App-Error.png';
import { Link, useNavigate } from 'react-router';

const AppErrorPage = () => {
  const navigate = useNavigate();
  const handelBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex flex-col items-center gap-10">
      <div>
        <img src={AppNotFoundImg} alt="" />
      </div>
      <div className="text-center space-y-4">
        <h4 className="text-4xl font-bold">OPPS!! APP NOT FOUND</h4>
        <p className="text-slate-600">
          The App you are requesting is not found on our system. please try
          another apps
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

export default AppErrorPage;
