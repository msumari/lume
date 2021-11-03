import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addToken } from "../slices/tokenSlice";
import { addName } from "../slices/nameSlice";

function Login() {
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(false);
  const [name, setName] = useState("");

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, r) => {
    const email = data.email;
    const password = data.password;
    axios
      .post("/api/auth/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        dispatch(addToken(response.data.accessToken));
        dispatch(addName(response.data.username));
        setName(response.data.username);
        setAlert(true);
      })
      .catch(function (error) {
        console.log(error);
        alert("User Login Failed! Try again!");
      });
    r.target.reset();
  };

  return (
    <div className="w-full h-screen bg-loginbanner bg-cover bg-center">
      <div className="w-full flex justify-between">
        <img
          src="./images/lume.png"
          alt="logo"
          className="lg:h-14 h-10 m-1.5"
        />
      </div>
      <div className="grid place-items-center w-full lg:mt-60 mt-44">
        <form
          className="lg:-mt-24 bg-gray-900 grid lg:p-10 place-items-center rounded w-11/12 lg:w-1/4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-3xl text-white">Sign In</h2>
          <input
            name="email"
            type="email"
            placeholder="email address"
            className="bg-gray-500 h-11 placeholder-white rounded m-2 px-2 focus:outline-none"
            ref={register({
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            className="bg-gray-500 h-11 placeholder-white rounded focus:outline-none m-2 px-2"
            ref={register({
              required: true,
            })}
          />
          <button
            className="bg-red-600 h-11 w-11/12 text-white rounded"
            type="submit"
          >
            Login
          </button>
          <div className="flex my-5">
            <span className="text-white">New to Lume?</span>
            <Link to="/">
              <span className="font-bold text-white cursor-pointer">
                Sign up
              </span>
            </Link>
          </div>
        </form>
        {alert && (
          <div className="-mt-60 lg:w-1/2 lg:p-10 p-4 w-9/12 opacity-90 grid place-items-center rounded-lg z-1 bg-black">
            <h1 className="text-white my-3 lg:text-2xl">
              User Logged in Successfully as: {name}
            </h1>
            <Link to="/">
              <button className="rounded-lg p-3 bg-red-700 text-white">
                Click to Enjoy
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
