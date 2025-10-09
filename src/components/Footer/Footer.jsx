import React from 'react';
import Logo from '../../assets/logo.png';
import PlayStor from '../../assets/playstor.png';
import AppStor from '../../assets/appstor.png';
import { Link } from 'react-router';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content pt-10">
      <div className="max-w-[1440px] mx-auto px-2 pt-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <div>
            <div className="flex gap-2 items-center justify-center">
              <div className="w-16">
                <img src={Logo} alt="" />
              </div>
              <p className="font-bold  bg-gradient-to-l from-[#9F62F2]  to-[#632EE3] bg-clip-text text-transparent text-2xl">
                HERO.IO
              </p>
            </div>
            <div className="mt-5">
              <p className="text-sm">
                Hero.io is a next-generation app hub — we build creative mobile
                apps and bring you the most popular apps from trusted developers
                around the world.
              </p>
            </div>
            <div className="mt-4 flex gap-3">
              <Link
                to="https://play.google.com/"
                className="flex items-center gap-1 border px-2 py-1 rounded border-gray-100/20 "
                target="_blank"
              >
                <img className="w-6" src={PlayStor} alt="" /> Google Play
              </Link>
              <Link
                to="https://www.apple.com/app-store/"
                className="flex items-center gap-1 border px-2 py-1 rounded border-gray-100/20 "
                target="_blank"
              >
                <img className="w-6" src={AppStor} alt="" /> App Store
              </Link>
            </div>
          </div>
          <div className="flex md:justify-center">
            <div>
              <h4 className="font-semibold text-lg mb-3 bg-gradient-to-l from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent">
                Quick links
              </h4>
              <ul className="space-y-2 text-sm list-disc ms-5">
                <li>
                  <Link className="hover:underline" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" to="/apps">
                    Apps
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" to="/installation">
                    Installation
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline">About</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex md:justify-center">
            <div>
              <h4 className="font-semibold mb-3 text-lg bg-gradient-to-l from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent">
                Contact
              </h4>
              <p className="text-sm">apps@heroio.com</p>
              <p className="text-sm mt-1">+880 16-5486-2156</p>
              <p className="text-sm mt-2">
                Level 4, Plot 27, Block C, Bashundhara R/A, Dhaka 1229,
                Bangladesh
              </p>
            </div>
          </div>
          <div>
            <div>
              <h4 className="font-semibold text-lg mb-3 bg-gradient-to-l from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent">
                Join newsletter
              </h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2  bg-slate-800 placeholder-slate-400 text-sm rounded-s-2xl w-full"
                />
                <button className="px-4 py-2 bg-[linear-gradient(160deg,rgba(99,46,227,1)_0%,rgba(159,98,242,1)_100%)] text-white text-sm">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <Link
                to="https://x.com/"
                className="p-2 rounded hover:bg-slate-800"
                target="_blank"
              >
                <Twitter></Twitter>
              </Link>
              <Link
                to="https://www.facebook.com/"
                className="p-2 rounded hover:bg-slate-800"
                target="_blank"
              >
                <Facebook></Facebook>
              </Link>
              <Link
                to="https://www.instagram.com/"
                className="p-2 rounded hover:bg-slate-800"
                target="_blank"
              >
                <Instagram></Instagram>
              </Link>
              <Link
                to="https://linkedin.com/"
                className="p-2 rounded hover:bg-slate-800"
                target="_blank"
              >
                <Linkedin></Linkedin>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center bg-slate-800 mt-10 py-5 rounded-xl mb-2">
          <p className="text-center text-sm">
            Copyright © {new Date().getFullYear()} - All right reserved by{' '}
            <span className="bg-gradient-to-l from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent font-semibold italic">
              HERO.IO
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
