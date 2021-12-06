import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Featured from "../components/features/Featured";
import List from "../components/list/List";
import Register from "./Register";
import { axiosInstance } from "../config";
import Splash from "./Splash";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(" ");
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

  let user = true;
  // const authtoken = useSelector((state) => state);
  // authtoken.token.token === "null" ? (user = false) : (user = true);

  return (
    <div>
      {user ? (
        <div>
          <Navbar />
          {isLoading && <Splash />}
          <Featured
            type={type}
            setGenre={setGenre}
            setIsLoading={setIsLoading}
          />
          {/* <div className="bg-black h-min-screen flex flex-col justify-around overflow-auto">
            {lists.map((list) => (
              <List list={list} key={list.title} />
            ))}
          </div> */}
        </div>
      ) : (
        <Register />
      )}
    </div>
  );
};

export default Home;
