import React from "react";
import { FaHeart, FaTwitter } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <div className="flex flex-col-reverse lg:flex-row-reverse bg-black  items-center justify-around p-3 w-full">
      <div className="flex  justify-around items-center lg:w-1/4 w-full">
        <h1 className="text-white text-xl font-semi-bold">Connect @</h1>
        <span className="w-6 rounded-full h-6 items-center bg-assure">
          <a href="https://tz.linkedin.com/in/suleiman-msumari-75170b181">
            <AiFillLinkedin color="blue" size="30" />
          </a>
        </span>
        <span className="w-6 rounded-full h-6 bg-assure">
          <a href="https://twitter.com/KherySuleiman">
            <FaTwitter color="Lightblue" size="30" />
          </a>
        </span>
      </div>
      <div className="grid place-items-center text-justify lg:w-1/3 w-full lg">
        <img className="h-6 lg:h-10" src="/images/lume.png" alt="lume" />
      </div>
    </div>
  );
}

export default Footer;
