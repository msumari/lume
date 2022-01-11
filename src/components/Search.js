import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Result from "./Result";
import { axiosInstance } from "../config";

function Search() {
  const [term, setTerm] = useState("");
  const [title, setTitle] = useState();
  const [show, setShow] = useState(false);

  let result = [];

  // useEffect(() => {
  //   const storage = window.localStorage;
  //   const getTitles = async () => {
     
  //       try {
  //         const res = await axiosInstance.get(`/api/movie/search?term=${term}`);
  //         console.log(res.data)
  //         // setTitle(res.data);
  //         // storage.setItem("titles", JSON.stringify(res.data));
  //       } catch (err) {
  //         console.log(err);
  //       }
     
  //   };
  //   getTitles();
  // }, []);

  const searchResult = async() => {
    setShow(true);
    try {
          const res = await axiosInstance.get(`/api/movie/search?term=${term}`);
          console.log(res.data)
          // setTitle(res.data);
          // storage.setItem("titles", JSON.stringify(res.data));
        } catch (err) {
          console.log(err);
        }
  };

  return (
    <div className="bg-black w-full h-screen grid place-items-center">
      <Link to="/">
        <img
          className="h-11 -mt-16 lg:-mt-0 lg:h-12"
          src="/images/lume.png"
          alt="lume"
        />
      </Link>
      <form className="flex w-full items-center justify-center -mt-80">
        <input
          type="text"
          placeholder="Search"
          id="search"
          className="lg:w-1/2 h-12 rounded-lg px-4 border-white border-2 bg-black opacity-70 placeholder-white hover:border-red-700 cursor-pointer  focus:border-red-500 focus:outline-none text-white focus:bg-black"
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
        <FaSearch
          className="text-white text-xl lg:text-2xl -ml-10 z-10 hover:text-red-500 cursor-pointer animate-pulse"
          onClick={searchResult}
        />
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
            .map((select) => {
              result.push(select);
              return (
                <div
                  key={select.title}
                  className="border-white border-b-2 cursor-pointer hover:bg-white"
                  onClick={() => {
                    setTerm(select.title);
                    document.getElementById("search").value = term;
                  }}
                >
                  <h1 className="text-white hover:text-red-700 p-2 text-lg lg:text-2xl lg:font-bold ">
                    {select.title}
                  </h1>
                </div>
              );
            })}
      </div>
      {show && <Result data={result} term={term} setShow={setShow} />}
    </div>
  );
}

export default Search;