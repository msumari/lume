import React from "react";

function Splash() {
  return (
    <div className="w-full fixed z-50 h-screen bg-black grid place-items-center ">
      <img
        className="h-8 lg:h-12 animate-bounce"
        src="/images/lume.png"
        alt="lume"
      />
      <img className="h-12 lg:h-20" src="/images/loading.gif" alt="spinner" />
    </div>
  );
}

export default Splash;
