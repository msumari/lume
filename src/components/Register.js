import React, { useEffect, useState } from "react";
import isEmail from "validator/lib/isEmail";
import isStrongPassword from "validator/lib/isStrongPassword";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [temp, setTemp] = useState("");
  const [error, setError] = useState(false);
  const [weak, setWeak] = useState(false);
  const [pass, setPass] = useState("");

  const handleStart = () => {
    const checker = isEmail(temp + "");
    checker ? setEmail(temp) & setError(false) : setError(true);
  };

  const handleSignup = () => {
    const checker = isStrongPassword(temp + "");

    checker ? setPass(temp) & setWeak(false) : setWeak(true);
  };

  console.log(email);
  console.log(pass);

  const sendCred = () => {
    axios
      .post("/api/auth/register", {
        username: name,
        email: email,
        password: pass,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="w-full h-screen bg-wallpaper bg-cover bg-center">
      <div className="w-full flex justify-between py-2 px-2">
        <img src="./images/lume.png" alt="logo" className="h-10" />
        <button className="bg-red-700 w-24 h-8 m-5 rounded-lg text-white">
          Sign In
        </button>
      </div>
      <div className="grid place-items-center w-full mt-40 px-3 lg:-px-3 lg:mt-60">
        <h1 className="text-white lg:text-5xl text-2xl text-center">
          Unlimited movies trailers, review and more.
        </h1>
        <h2 className="text-white lg:text-3xl text-xl my-6 text-center">
          Watch anywhere. Enjoy anytime
        </h2>
        <p className="text-white lg:text-xl text-base my-4">
          Ready to watch ? Enter your email to create account and enjoy.
        </p>
        {!email ? (
          <div className="lg:w-2/3 flex lg:-mr-80">
            <input
              type="email"
              placeholder="email address"
              className="lg:w-1/2 w-11/12 lg:h-12 h-10 rounded-l-lg px-4 focus:outline-none"
              onChange={(e) => {
                setTemp(e.target.value);
              }}
            />
            <button
              className="bg-red-700 lg:h-12 h-10 lg:px-4 px-2 text-sm rounded-r-lg text-white"
              onClick={handleStart}
            >
              Get Started
            </button>
          </div>
        ) : (
          <form className="lg:w-2/3 flex lg:-mr-80">
            <input
              type="password"
              placeholder="password"
              className="lg:w-1/2 w-11/12 lg:h-12 h-10 rounded-l-lg px-4"
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
            <button
              className="bg-red-700 lg:h-12 h-10 lg:px-4 px-2 text-sm rounded-r-lg text-white"
              onClick={handleSignup}
            >
              Get Membership
            </button>
          </form>
        )}
        {error && (
          <p className="text-xl text-red-800 font-bold uppercase">
            Email entered invalid
          </p>
        )}
        {weak && (
          <p className="text-xl text-red-800 font-bold uppercase">
            Password must have min 8 characters with number and atleast special
            character
          </p>
        )}
        {email & pass && (
          <span className="text-xl font-bold uppercase">
            Welcome to lume as :{email}
          </span>
        )}
      </div>
    </div>
  );
}

export default Register;
