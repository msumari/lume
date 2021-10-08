import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

function Search() {
  const [title, setTitle] = useState();

  useEffect(() => {
    const getTitles = async () => {
      let retrieve = localStorage.getItem("titles");
      let local = JSON.parse(retrieve);
      if (local.length < 1 || local === undefined) {
        try {
          const res = await axios.get("/api/movie/search");
          setTitle(res.data);
          localStorage.setItem("titles", JSON.stringify(res.data));
        } catch (err) {
          console.log(err);
        }
      } else {
        setTitle(local);
      }
    };
    getTitles();
  }, []);

  console.log(title);

  return (
    <div className="bg-black w-full h-screen grid place-items-center">
      <Link to="/">
        <img className="lg:h-12" src="/images/lume.png" alt="lume" />
      </Link>
      <form className="flex w-full items-center justify-center -mt-80">
        <input
          type="term"
          placeholder="Search"
          className="w-1/2 h-12 rounded-lg px-4 border-white border-2 bg-black opacity-70 placeholder-white hover:border-red-700 cursor-pointer hover:bg-white focus:border-red-500 focus:outline-none focus:bg-white"
        />
        <FaSearch className="text-white text-2xl -ml-10 z-10 hover:text-red-500 cursor-pointer animate-pulse" />
      </form>
    </div>
  );
}

export default Search;
