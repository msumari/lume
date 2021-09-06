import React from "react";

import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Watch = () => {
  const location = useLocation();
  const movie = location.movie;
  return (
    <div className="bg-black h-screen w-full">
      <Link to="/">
        <div className="top-0 left-0 flex items-center mx-10 my-3 absolute z-20">
          <BiArrowBack color="white" size="30" />
          <span className="text-white text-2xl mx-2">Home</span>
        </div>
      </Link>
      <video
        autoPlay
        progress="true"
        controls={true}
        className="h-screen w-full fixed top-0 left-0"
        src={movie.video}
      />
    </div>
  );
};

export default Watch;
