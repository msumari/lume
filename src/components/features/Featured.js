import React, { useEffect, useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import "./Featured.css";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";
import Info from "../Info";

const Featured = ({ type, setGenre, setIsLoading }) => {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get(`/api/movie/random?type=${type}`);
        setContent(res.data[0]);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  return (
    <div className="h-min-screen">
      <img
        className="lg:w-full object-cover h-screen relative"
        src={content.image}
      />

      <div className="w-full h-screen relative z-10 feature1">
        {type && (
          <div className="category mt-24 lg:mt-0 ml-6 lg:ml-16 absolute lg:top-20 lg:left-6 lg:font-semibold z-10 flex items-center text-white">
            <span>{type === "movie" ? "Movies" : "Series"}</span>
            <select
              name="genre"
              id="genre"
              onChange={(e) => setGenre(e.target.value)}
              className="border-2  border-white ml-4 bg-black p-1.5 rounded-lg"
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
        <div className="info lg:w-4/12  lg:ml-20">
          <img
            src={content.imageSm}
            alt=""
            className="lg:-pl-11 lg:pt-32 lg:px-0 lg:rounded-b-3xl mb-2 pl-11 pt-1"
          />
          <div className="w-full lg:h-24 h-12 overflow-hidden">
            <span className="desc px-6 lg:px-0 text-white mt-20 ">
              {content.desc}
            </span>
          </div>

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
        <Info content={content} />
      </div>
    </div>
  );
};

export default Featured;
