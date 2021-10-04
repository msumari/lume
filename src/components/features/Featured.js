import React, { useEffect, useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import axios from "axios";
import { Link } from "react-router-dom";

const Featured = ({ type, setGenre }) => {
  const [content, setContent] = useState({});
  console.log(type);

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
        <div className="category absolute lg:top-20 lg:left-6 font-semibold flex items-center text-white">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
            className="border-2 border-white ml-4 bg-black p-1.5"
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
          <img src={content.image} alt="" className="pt-32 rounded-b-3xl" />
          <span className="desc text-white mt-20">{content.desc}</span>

          <div className="buttons lg:flex lg:mt-4">
            <Link to={{ pathname: "/watch", movie: content }}>
              <button className="play bg-white flex items-center lg:px-4 lg:py-2 lg:mr-3 rounded">
                <FaCaretRight />
                <span>Play</span>
              </button>
            </Link>
            <button className="moreInfo bg-gray-400 flex items-center lg:px-4 lg:py-2 rounded">
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