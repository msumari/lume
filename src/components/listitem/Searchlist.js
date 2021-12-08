import React, { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import { MdPlayArrow, MdPlaylistAdd } from "react-icons/md";
import { AiFillDislike } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../../App.css";
import { axiosInstance } from "../../config";

const Searchlist = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movies, setMovies] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axiosInstance.get("/api/movie/find/" + item);
        setMovies(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <div
      className=" bg-white mr-3  w-11/12  "
      onMouseEnter={() => setIsHovered(false)}
      onMouseLeave={() => setIsHovered(false)}
    >
    <div className="flex gap-4 mb-10 ">
    <img src={movies.imageSm} alt="" className="w-1/2 h-80 hover:h-14" />
      {isHovered && (
        <div className="bg-black h-80  -mt-36 w-full lg:w-80 grid grid-flow-row  ">
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
              className="-mt-44 w-full lg:w-64 h-80  "
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
      <p  className="overflow-auto w-1/2 h-80 " >
          {movies.desc}
      </p>

    </div>
      
    </div>
  );
};

export default Searchlist;
