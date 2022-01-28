import React, { useEffect, useState } from "react";
import { MdPlayArrow} from "react-icons/md";
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
    <div className="md:flex lg:flex gap-4 mb-10 ">
    <div className="lg:w-1/2">
    <p className="absolute -mt-6 font-bold px-2 uppercase ">{movies.title}</p>
    <Link to={{ pathname: "/watch", movie: movies }}><img src={movies.imageSm} alt="" className="mb-4 w-full lg:w-3/5 h-80 hover:h-14" /></Link>
      {isHovered && (
      <div className="grid  place-items-center absolute -mt-56">    
         <Link to={{ pathname: "/watch", movie: movies }}><MdPlayArrow className="ml-24" color="white" size={100} /></Link>
       </div>
      )}
      </div>
      <div className="w-full lg:w-1/2 h-80 overflow-auto">
      <p  className="" >
          {movies.desc}
      </p>
      </div>
    </div>
      
    </div>
  );
};

export default Searchlist;
