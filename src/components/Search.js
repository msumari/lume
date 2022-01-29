import React, {  useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Result from "./Result";
import { axiosInstance } from "../config";

function Search() {
  const [term, setTerm] = useState("");
  const [title, setTitle] = useState();
  const [show, setShow] = useState(false);

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

  const searchResult = async(e) => {
   e.preventDefault();
   if (term.length > 0) {
    try {
      const res = await axiosInstance.get(`/api/movie/search?term=${term}`);
      setTitle(res.data);
      setShow(true);
    } catch (err) {
      console.log(err);
    }
   }
   else{
     alert("Please enter a search term")
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
      <form className="flex w-full items-center justify-center -mt-80" onSubmit={searchResult}>
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
        
      </div>
      {show && <Result data={title} term={term} setShow={setShow} />}
    </div>
  );
}

export default Search;