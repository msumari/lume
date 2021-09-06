import React from "react";

import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const Watch = () => {
  return (
    <div className="bg-black h-screen w-full">
      <Link to="/">
        <div className="top-0 left-0 flex items-center mx-10 absolute z-20">
          <BiArrowBack color="white" size="30" />
          <span className="text-white text-2xl mx-2">Home</span>
        </div>
      </Link>
      <video
        autoPlay
        progress
        controls={true}
        className="h-screen w-full fixed top-0 left-0"
        src="https://firebasestorage.googleapis.com/v0/b/ecommerce-2050.appspot.com/o/%E2%80%9CHe%20Has%20The%20Pendant%20Clip%E2%80%9D%20%20Marvel%20Studios%E2%80%99%20Shang-Chi%20and%20The%20Legend%20of%20The%20Ten%20Rings.mp4?alt=media&token=4e05ee36-5583-49e3-a3fb-ed58fbce3200"
      />
    </div>
  );
};

export default Watch;
