import React from 'react';
import PlayStor from '../../../assets/playstor.png';
import AppStor from '../../../assets/appstor.png';
import HeroImg from '../../../assets/hero.png';
import { Link } from 'react-router';

const Hero = () => {
  return (
    <div className=" max-w-[1440px] mx-auto px-2 mt-20">
      <div className="flex flex-col items-center text-center gap-5">
        <h1 className="text-6xl font-bold">
          We Build <br />{' '}
          <span className="bg-gradient-to-l from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent">
            Productive
          </span>{' '}
          Apps
        </h1>
        <p className="text-slate-600 max-w-[750px]">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex gap-2">
          <Link
            to="https://play.google.com/"
            className="btn flex items-center gap-1 "
            target="_blank"
          >
            <img className="w-6" src={PlayStor} alt="" /> Google Play
          </Link>
          <Link
            to="https://www.apple.com/app-store/"
            className="btn flex items-center gap-1 "
            target="_blank"
          >
            <img className="w-6" src={AppStor} alt="" /> App Store
          </Link>
        </div>
        <div className="mt-5">
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
