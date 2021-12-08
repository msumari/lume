import React from "react";
import { FaWindowClose } from "react-icons/fa";
import Searchlist from "./listitem/Searchlist";

function Result({ data, term, setShow }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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
        
            {data.map((item) => (
              <Searchlist  item={item._id} key={item} />
             
            ))}
          
        </div>
      </div>
    </div>
  );
}

export default Result;
