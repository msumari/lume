import React from "react";
import "../App.css";

function Info({ content }) {
  return (
    <div className=" bg-gray-600 h-screen ml-3 relative z-20 w-11/12 lg:w-3/4 lg:h-3/4 lg:ml-48 info">
      <h1>{content.title}</h1>
    </div>
  );
}

export default Info;
