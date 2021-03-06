import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
// import { BsBell, BsCaretDownFill } from "react-icons/bs";
import { MdMoreVert } from "react-icons/md";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../slices/tokenSlice";
// import Avatar from "react-avatar";

const Navbar = () => {
  let avatar = "";
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  const authname = useSelector((state) => state);
  avatar = authname.name.token;
  // for mobile navbar
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const logout = () => {
    dispatch(removeToken());
  };

  return (
    <div className="navbar relative lg:fixed w-full z-50">
      <header
        className={
          isScrolled
            ? " bg-black lg:flex fixed w-full lg:cursor-pointer lg:justify-between lg:items-center lg:h-20 px-2"
            : " bg-black lg:bg-transparent lg:flex lg:w-full lg:cursor-pointer lg:justify-between lg:items-center py-2 px-2"
        }
      >
        <div className="text-white md:text-md lg:text-md ">
          <div className="left lg:flex lg:items-center item-center">
            <div className="py-3 px-5 flex items-center justify-between">
              <Link to="/">
                <img
                  className="h-6 lg:h-10"
                  src="/images/lume.png"
                  alt="lume"
                />
              </Link>

              <Link to="/search">
                <FaSearch className="lg:hidden visible lg:ml-2" />
              </Link>
              {/* <div className="dropdown lg:hidden visible inline-block relative">
                <BsCaretDownFill className="lg:ml-2" />
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                  <li className="">
                    <Link to="/login">
                      <div
                        className="bg-black text-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        onClick={logout}
                      >
                        Logout
                      </div>
                    </Link>
                  </li>
                </ul>
              </div> */}
              {/* <Avatar
                className="lg:hidden inline-block"
                name={avatar}
                color={Avatar.getRandomColor("sitebase", ["red", "black"])}
                size="40"
                round={true}
          /> */}
              {/* Humberger for mobile view */}
              <div className="block lg:hidden">
                <div onClick={handleClick} className=" ">
                  {click ? <MdMoreVert /> : <MdMoreVert />}
                </div>
              </div>
              {/* End */}
            </div>

            <div
              className={
                click
                  ? "px-5 py-3.5  grid lg:flex content-center lg:ml-8 "
                  : "px-5  lg:flex content-center lg:ml-8 hidden"
              }
            >
              <Link to="/">
                <span className="lg:ml-4">Home</span>
              </Link>
              {/* <Link to="/series">
                <span className="lg:ml-4">Series</span>
              </Link> */}
              <Link to="/movies">
                <span className="lg:ml-4">Genres</span>
              </Link>

              <span className="lg:ml-4">New and Popular</span>
            </div>
          </div>
        </div>

        <div className="right lg:flex lg:items-center lg:justify-evenly text-white md:text-md lg:text-md lg:mr-20">
          <Link to="/search">
            <FaSearch size={30} className="hidden lg:inline-block lg:ml-2" />
          </Link>

          {/* <BsBell className=" hidden lg:inline-block lg:ml-4" /> */}

          {/* <Avatar
            className="hidden lg:inline-block"
            name={avatar}
            color={Avatar.getRandomColor("sitebase", ["red", "black"])}
            size="40"
            round={true}
          /> */}

          {/* <div className="dropdown hidden  lg:inline-block relative">
            <BsCaretDownFill className="lg:ml-2" />
            <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
              <li className="">
                <Link to="/login">
                  <div
                    className="bg-black text-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    onClick={logout}
                  >
                    Logout
                  </div>
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
