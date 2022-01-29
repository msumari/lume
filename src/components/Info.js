import React from "react";
import { FaCaretRight } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../App.css";

function Info({ content, setInfo }) {
  const close = () => {
    setInfo(false);
  };
  return (
    <div className=" bg-gray-600 h-screen ml-3 overflow-auto lg:p-2 relative rounded-lg z-20 w-11/12 lg:w-3/4 lg:h-3/4 lg:ml-48 info">
      <AiFillCloseCircle
        size="40"
        color="red"
        className="lg:top-24 lg:right-32 top-32 right-4 z-50 fixed"
        onClick={close}
      />
      <div className="flex flex-col lg:flex-row">
        <img
          className=" w-full rounded-t-lg h-72 lg:w-1/4 "
          src={content.imageSm}
          alt="poster"
        />
        <div className="px-2 ">
          <h1 className="text-black text-xl lg:text-2xl font-bold text-center">
            {content.title}
          </h1>
          <p className="text-white text-justify">{content.desc}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 px-4 py-3 justify-center items-center">
        <Link to={{ pathname: "/watch", movie: content }}>
          <button className="play bg-white lg:bg-red-700 lg:text-white flex items-center px-4 py-2 mr-3 rounded">
            <FaCaretRight />
            <span>Play</span>
          </button>
        </Link>
        <span className="text-sm lg:text-lg text-white">
          <span className="text-gray-900 lg:text-xl text-lg">Year</span>:{" "}
          {content.year}
        </span>
        <span className="text-sm lg:text-lg text-white">
          <span className="text-gray-900 lg:text-lg text-sm">Duration</span>:{" "}
          {content.limit} Min
        </span>
        <span className="text-sm lg:text-lg text-white">
          <span className="text-gray-900 lg:text-xl text-lg">Ratings</span>:{" "}
          {content.rating}/10
        </span>

        {/* <span className="text-sm py-2 px-3 flex-col text-white bg-gray-900 rounded-lg">
          {content.genre.map((categ) => (
            <span className="text-sm text-white">
              <span className="text-gray-900 text-lg">{categ}</span>
            </span>
          ))}
        </span> */}
      </div>
    </div>
  );
}

export default Info;
