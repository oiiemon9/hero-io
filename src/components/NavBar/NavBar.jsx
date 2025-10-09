import React from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../../assets/logo.png';
import { FaGithub } from 'react-icons/fa';

const NavBar = () => {
  return (
    <div className="bg-base-100">
      <div className="navbar max-w-[1440px] mx-auto px-2">
        <div className="navbar-start">
          <div className="dropdown mr-2">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `font-bold ${
                      isActive &&
                      'border-b-2 border-[#632EE3] bg-gradient-to-l from-[#9F62F2]  to-[#632EE3] bg-clip-text text-transparent'
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/apps"
                  className={({ isActive }) =>
                    `font-bold ${
                      isActive &&
                      'border-b-2 border-[#632EE3] bg-gradient-to-l from-[#9F62F2]  to-[#632EE3] bg-clip-text text-transparent'
                    }`
                  }
                >
                  Apps
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/installation"
                  className={({ isActive }) =>
                    `font-bold ${
                      isActive &&
                      'border-b-2 border-[#632EE3] bg-gradient-to-l from-[#9F62F2]  to-[#632EE3] bg-clip-text text-transparent'
                    }`
                  }
                >
                  Installation
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="text-lg md:text-xl flex items-center gap-1">
            <img className="w-8 md:w-12" src={Logo} alt="" />
            <p className="font-bold  bg-gradient-to-l from-[#9F62F2]  to-[#632EE3] bg-clip-text text-transparent">
              HERO.IO
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-bold ${
                    isActive &&
                    'border-b-2 border-[#632EE3] bg-gradient-to-l from-[#9F62F2]  to-[#632EE3] bg-clip-text text-transparent'
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  `font-bold ${
                    isActive &&
                    'border-b-2 border-[#632EE3] bg-gradient-to-l from-[#9F62F2]  to-[#632EE3] bg-clip-text text-transparent'
                  }`
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  `font-bold ${
                    isActive &&
                    'border-b-2 border-[#632EE3] bg-gradient-to-l from-[#9F62F2]  to-[#632EE3] bg-clip-text text-transparent'
                  }`
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to="https://github.com/oiiemon9"
            target="_blank"
            className="btn text-white bg-[linear-gradient(160deg,rgba(99,46,227,1)_0%,rgba(159,98,242,1)_100%)]"
          >
            <FaGithub className="text-2xl" /> <span>Contribute</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
