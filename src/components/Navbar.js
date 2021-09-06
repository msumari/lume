import React, { useState } from "react";
import { FaUserPlus, FaSearch, FaBars } from "react-icons/fa";
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
            ? " bg-black lg:flex fixed lg:w-full lg:cursor-pointer lg:justify-between"
            : " lg:flex lg:w-full lg:cursor-pointer lg:justify-between"
        }
      >
        <div className="text-white md:text-md lg:text-md ">
          <div className="left lg:flex lg:items-center">
            <img className="lg:h-20" src="/images/netflix-logo.png" />
            <div className="lg:ml-8">
              <span className="lg:ml-4">Home</span>
              <Link to="/series">
                <span className="lg:ml-4">Series</span>
              </Link>
              <Link to="/movies">
                <span className="lg:ml-4">Movies</span>
              </Link>

              <span className="lg:ml-4">New and Popular</span>
              <span className="lg:ml-4"> My list</span>
            </div>
          </div>
        </div>

        <div className="right lg:flex lg:items-center  text-white md:text-md lg:text-md lg:mr-20">
          <FaSearch className="lg:ml-2" />
          <span className="lg:ml-2">KIDS</span>
          <BsBell className="lg:ml-2" />
          <img
            className="lg:h-5 lg:w-5 lg:ml-2 lg:rounded-sm"
            src="/images/profile.png"
            alt=""
          />

          <div class="dropdown inline-block relative">
            <BsCaretDownFill className="lg:ml-2" />
            <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
              <li class="">
                <a
                  class="rounded-t text-white bg-black hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Setting
                </a>
              </li>
              <li class="">
                <a
                  class="bg-black text-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
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
