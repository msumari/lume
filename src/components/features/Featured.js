import React, { useEffect, useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import axios from "axios";
import { Link } from "react-router-dom";

const Featured = ({ type, setGenre }) => {
  const [content, setContent] = useState({});
  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/api/movie/random?type=${type}`);
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  return (
    <div className="bg-bannerWallpaper bg-center bg-cover h-screen">
      {type && (
        <div className="category mt-24 lg:mt-0 ml-6 lg:ml-16 absolute lg:top-20 lg:left-6 lg:font-semibold flex items-center text-white">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
            className="border-2 border-white ml-4 bg-black p-1.5 rounded-lg"
          >
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}

      <div className="w-full h-screen">
        <div className="info lg:w-4/12  lg:ml-20">
          <img
            src={content.imageSm}
            alt=""
            className="pt-44 lg:pt-32 px-6 lg:px-0  lg:rounded-b-3xl mb-2"
          />
          <span className="desc px-6 lg:px-0 text-white mt-20 overflow-hidden">
            {content.desc}
          </span>

          <div className="buttons  ml-20 lg:ml-0 flex mt-4">
            <Link to={{ pathname: "/watch", movie: content }}>
              <button className="play bg-white flex items-center px-4 py-2 mr-3 rounded">
                <FaCaretRight />
                <span>Play</span>
              </button>
            </Link>
            <button className="moreInfo bg-gray-400 flex items-center px-4 py-2 rounded">
              <BsInfoCircle />
              <span>Info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
