import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Featured from "../components/features/Featured";
import List from "../components/list/List";
import Register from "./Register";
import { axiosInstance } from "../config";
import Splash from "./Splash";
import Footer from "./Footer";
import { analytics } from "../Fireconfig";
import { logEvent } from "firebase/analytics";

const Home = ({ type }) => {
  const storedGenre = localStorage.getItem("genre");
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(
    storedGenre === "null" ? " " : storedGenre
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res =
          type === undefined
            ? await axiosInstance.get(`/api/lists?`)
            : await axiosInstance.get(`/api/lists?type=${type}&genre=${genre}`);
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  useEffect(() => {
    localStorage.setItem("genre", genre);
  }, [genre]);

  useEffect(() => {
    logEvent(analytics, "Homepage_visited");
  }, []);

  let user = true;
  // const authtoken = useSelector((state) => state);
  // authtoken.token.token === "null" ? (user = false) : (user = true);

  return (
    <div>
      {user ? (
        <div>
          {isLoading && <Splash />}
          <Navbar />
          <Featured
            type={type}
            genre={genre}
            setGenre={setGenre}
            setIsLoading={setIsLoading}
          />
          {/* <div className="bg-black h-min-screen flex flex-col justify-around overflow-auto">
            {lists.map((list) => (
              <List list={list} key={list.title} />
            ))}
          </div> */}
          <Footer />
        </div>
      ) : (
        <Register />
      )}
    </div>
  );
};

export default Home;
