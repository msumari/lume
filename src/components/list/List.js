import ListItem from "../listitem/listitem";
import React, { useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const List = ({ list }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${135 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-135 + distance}px)`;
    }
  };
  return (
    <div className="list bg-black">
      <span className="listTitle text-white text-xl ml-14">{list.title}</span>
      <div className="wrapper ml-12 relative">
        <BsChevronLeft
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
          className="text-white h-10 w-10 absolute left-0 top-0 bottom-0 z-50 m-auto cursor-auto bg-black bg-opacity-50"
        />

        <div
          ref={listRef}
          className="  flex  mt-3.5 transform translate-x-0 transition ease-in duration-1000"
        >
          {list.content.map((item, i) => (
            <ListItem index={i} item={item} />
          ))}
        </div>
        <BsChevronRight
          onClick={() => handleClick("right")}
          className="text-white h-10 w-10 absolute right-0 top-0 bottom-0 z-50 m-auto cursor-auto bg-black bg-opacity-50"
        />
      </div>
    </div>
  );
};

export default List;
