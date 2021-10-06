import React, { useEffect, useState } from "react";
import axios from "axios";
import { FcLike } from "react-icons/fc";
import { MdPlayArrow, MdPlaylistAdd } from "react-icons/md";
import { AiFillDislike } from "react-icons/ai";
import { Link } from "react-router-dom";

const listitem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movies, setMovies] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {


        const res = await axios.get("/api/movie/find/" + item);
        setMovies(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <div
      className=" bg-white mr-3 h-44 w-11/12 hover:h-28 "
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={movies.image} alt="" className="w-full h-44 hover:h-14" />
      {isHovered && (
        <div className="bg-black h-80  -mt-36 w-80 ">
          <div className="flex justify-around items-center text-white ">
            <span className="">{movies.title}</span>
            <span>{movies.genre}</span>
          </div>
          <video
            src={movies.trailer}
            autoPlay={true}
            muted={true}
            loop
            className="-mt-1"
          />
          <div>
            <div className="flex justify-around items-center">
              <Link to={{ pathname: "/watch", movie: movies }}>
                <MdPlayArrow color="white" />
              </Link>
              <MdPlaylistAdd color="white" />
              <FcLike />
              <AiFillDislike color="white" />
            </div>
            <div className="flex justify-around items-center text-white ">
              <span>+{movies.limit}</span>
              <span>{movies.year}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default listitem;
