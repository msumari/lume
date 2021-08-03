import React, { useRef, useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const emailref = useRef();

  const handleStart = () => {
    setEmail(emailref.current.value);
  };

  return (
    <div className="w-full h-screen bg-wallpaper bg-cover bg-center">
      <div className="w-full flex justify-between">
        <img src="./images/netflix-logo.png" alt="logo" className="h-24" />
        <button className="bg-red-700 w-24 h-8 m-5 rounded-lg text-white">
          Sign In
        </button>
      </div>
      <div className="grid place-items-center w-full mt-60">
        <h1 className="text-white text-5xl">
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 className="text-white text-3xl my-6">
          Watch anywhere. Cancel anytime
        </h2>
        <p className="text-white text-xl my-4">
          Ready to watch ? Enter your email to create or restart your
          membership.
        </p>
        <div className="w-2/3 flex -mr-80">
          <input
            type="email"
            placeholder="email address"
            className="w-1/2 h-12 rounded-l-lg px-4"
            ref={emailref}
          />
          <button
            className="bg-red-700 h-12 px-4 rounded-r-lg text-white"
            onClick={handleStart}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
