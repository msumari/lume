import ListItem from "../listitem/Listitem";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const List = ({ list }) => {
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

  return (
    <div className="list bg-black pt-10  ">
      <span className="listTitle text-white text-xl ml-14 mb-3">
        {list.title}
      </span>
      <div className="wrapper ml-12 relative">
        <Carousel responsive={responsive}>
          {list.content.map((item, i) => (
            <ListItem index={i} item={item} key={item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default List;
