import React, { useRef, useState, useEffect} from "react";
import Navbar from '../components/Navbar'
import Featured from "../components/features/Featured";
import List from "../components/list/List";
import axios from 'axios';
const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(()=>{ 
    const getRandomLists = async () =>{
      try{
        const res = await axios.get(
          "/api/lists",
          {
            headers:{
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMmEzNDcxNDU5N2M4ZTMyNGY5Mzk2YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMDQ4NDc4NywiZXhwIjoxNjMwOTE2Nzg3fQ.0x3oU4kuNn9QKkC1Za7DQ399LIufG6_E0b-7anrJ8ME"
            },
          }
        );
        console.log(res);
      }catch(err){
        console.log(err)

      }
    
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="">
      <Navbar />
     <Featured type={type} />
     <List />
     <List />
     <List />
      
    </div>
  );
};

export default Home;
