import React from "react";
import { FaWindowClose } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import Listitem from "./listitem/Listitem";

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
    <div className="bg-opacity-70 bg-white fixed  h-3/4  w-10/12 rounded-lg">
      <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-between lg:px-10 px-5 py-2 w-full">
        <h1 className="lg:text-4xl text-2xl">
          Search results for: <span className="text-red-800">{term}</span>
        </h1>
        <FaWindowClose size="25" color="red" onClick={modalClose} />
      </div>
      <div className="list bg-white py-10">
        <span className=" text-black  font-bold text-4xl px-14 mb-3">
          {term}
        </span>
        <div className=" ml-12 relative wrapper">
          <Carousel responsive={responsive}>
            {data.map((item) => (
              <Listitem item={item._id} key={item} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Result;
