import React, { useEffect, useState } from "react";
import axios from "axios";

const listitem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movies, setMovies] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/api/movie/find/" + item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjhkNDY1MzJiZTczMDk3OGM0YjNiOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMDc1MjY1NCwiZXhwIjoxNjMxMTg0NjU0fQ.SMJFDzvOt0Wdia2F_ddh1HMRE8GFFdJCCS2NMFmsbIA",
          },
        });
        setMovies(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <div
      className=" bg-white mr-3 h-20 w-full"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={movies.image} alt="" className="w-full h-20" />
      {/* {isHovered && (
        <>
          <video src={item.trailer} autoPlay={true} loop />
          <div>info</div>
        </>
      )} */}
    </div>
  );
};

export default listitem;
