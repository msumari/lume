import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BsBell, BsCaretDownFill } from "react-icons/bs";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className="fixed w-full">
      <header
        className={
          isScrolled
            ? " bg-black lg:flex fixed lg:w-full lg:cursor-pointer lg:justify-between lg:items-center lg:h-20 px-2"
            : " lg:flex lg:w-full lg:cursor-pointer lg:justify-between lg:items-center py-2 px-2"
        }
      >
        <div className="text-white md:text-md lg:text-md ">
          <div className="left lg:flex lg:items-center item-center">
            <Link to="/">
              <img className="lg:h-10" src="/images/lume.png" alt="lume" />
            </Link>
            <div className="lg:ml-8">
              <Link to="/">
                <span className="lg:ml-4">Home</span>
              </Link>
              <Link to="/series">
                <span className="lg:ml-4">Series</span>
              </Link>
              <Link to="/movies">
                <span className="lg:ml-4">Movies</span>
              </Link>

              <span className="lg:ml-4">New and Popular</span>
            </div>
          </div>
        </div>

        <div className="right lg:flex lg:items-center lg:justify-evenly text-white md:text-md lg:text-md lg:mr-20">
          <Link to="/search">
            <FaSearch className="lg:ml-2" />
          </Link>

          <BsBell className="lg:ml-2" />
          <img
            className="lg:h-5 lg:w-5 lg:ml-2 lg:rounded-sm"
            src="/images/profile.png"
            alt=""
          />

          <div className="dropdown inline-block relative">
            <BsCaretDownFill className="lg:ml-2" />
            <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
              <li class="">
                <a class="bg-black text-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
