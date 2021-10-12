import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

function Search() {
  const [term, setTerm] = useState("");
  const [title, setTitle] = useState();

  useEffect(() => {
    const storage = window.localStorage;
    const getTitles = async () => {
      let local =
        storage.title === undefined ? undefined : JSON.parse(storage.titles);
      if (storage.length < 1 || local === undefined) {
        try {
          const res = await axios.get("/api/movie/search");
          setTitle(res.data);
          storage.setItem("titles", JSON.stringify(res.data));
        } catch (err) {
          console.log(err);
        }
      } else {
        setTitle(local);
        console.log("from local");
      }
    };
    getTitles();
  }, []);

  console.log(term);

  return (
    <div className="bg-black w-full h-screen grid place-items-center">
      <Link to="/">
        <img className="lg:h-12" src="/images/lume.png" alt="lume" />
      </Link>
      <form className="flex w-full items-center justify-center -mt-80">
        <input
          type="text"
          placeholder="Search"
          id="search"
          className="w-1/2 h-12 rounded-lg px-4 border-white border-2 bg-black opacity-70 placeholder-white hover:border-red-700 cursor-pointer  focus:border-red-500 focus:outline-none text-white focus:bg-black"
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
        <FaSearch className="text-white text-2xl -ml-10 z-10 hover:text-red-500 cursor-pointer animate-pulse" />
      </form>
      <div className="-mt-96  h-48 overflow-auto w-1/2 rounded-lg ml-4">
        {title &&
          title
            .filter((name) => {
              if (term === "") {
                return (
                  <div>
                    <p>No relevant video avilable</p>
                  </div>
                );
              } else if (
                name.title.toLowerCase().includes(term.toLowerCase())
              ) {
                return name;
              }
            })
            .map((name) => {
              return (
                <div
                  key={name.id}
                  className="border-white border-b-2 cursor-pointer hover:bg-white"
                  onClick={() => {
                    setTerm(name.title);
                    document.getElementById("search").value = term;
                  }}
                >
                  <h1 className="text-white hover:text-red-700 p-2 text-2xl font-bold ">
                    {name.title}
                  </h1>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default Search;
