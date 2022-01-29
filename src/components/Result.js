import React from "react";
import { FaWindowClose } from "react-icons/fa";
import Searchlist from "./listitem/Searchlist";

function Result({ data, term, setShow }) {


  const modalClose = () => {
    setShow(false);
  };

  

  return (
    <div className="overflow-auto bg-white fixed  h-3/4  w-10/12 rounded-lg">
      <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-between lg:px-10  w-full">
        <h1 className="lg:text-md text-md">
          Search results for: <span className="text-red-800 text-md">{term}</span>
        </h1>
        <FaWindowClose size="25" color="red" onClick={modalClose} />
      </div>
      <div className="list bg-white py-10">
        
        <div className=" ml-12 relative wrapper">
        
            {data.length > 0 ?( data.map((item) => (
              <Searchlist  item={item._id} key={item._id} />
             
            ))):(<h1 className="text-center -ml-10 text-gray-800 text-xl">No results found for <span className="text-red-700">{term}</span></h1>)}
          
        </div>
      </div>
    </div>
  );
}

export default Result;
