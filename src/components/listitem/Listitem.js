import React, { useEffect, useState } from "react";
import axios from "axios";
import { FcLike } from "react-icons/fc";
import { MdPlayArrow, MdPlaylistAdd } from "react-icons/md";
import { AiFillDislike } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../../App.css";

const Listitem = ({ index, item }) => {
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
      className=" bg-white mr-3 h-36 w-11/12  "
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={movies.image} alt="" className="w-full h-36 hover:h-14" />
      {isHovered && (
        <div className="bg-black h-80  -mt-36 w-80 grid grid-flow-row  ">
          <div className=" text-white ">
            <span className="absolute px-8 uppercase ">{movies.title}</span>
            {/* <span>{movies.genre}</span> */}
          </div>

          <div className="">
            <video
              src={movies.trailer}
              autoPlay={true}
              muted={true}
              loop
              className="video -mt-44 w-64 h-80  "
            />
            <div className="flex gap-8 items-center absolute -mt-28">
              <Link to={{ pathname: "/watch", movie: movies }}>
                <MdPlayArrow color="white" size={20} />
              </Link>
              <MdPlaylistAdd color="white" />
              <FcLike />
              <AiFillDislike color="white" />
              <span className="text-white">+{movies.limit}</span>
              {/* <span className="">{movies.year}</span> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Listitem;
