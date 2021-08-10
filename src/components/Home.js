import React from "react";
import Navbar from '../components/Navbar'
import Featured from "../components/features/Featured";
import List from "../components/list/List";
const Home = () => {
  return (
    <div className="">
      <Navbar />
     <Featured />
     <List />
     <List />
     <List />
      
    </div>
  );
};

export default Home;
