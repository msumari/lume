import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Featured from "../components/features/Featured";
import List from "../components/list/List";
import axios from "axios";
const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(" ");

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res =
          type === undefined
            ? await axios.get(`/api/lists?`)
            : await axios.get(`/api/lists?type=${type}&genre=${genre}`);
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div>
      <Navbar />

      <Featured type={type} setGenre={setGenre} />
      <div className="bg-black h-min-screen flex flex-col justify-around overflow-auto">
        {lists.map((list) => (
          <List list={list} key={list.title} />
        ))}
      </div>
    </div>
  );
};

export default Home;
