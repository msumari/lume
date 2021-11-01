import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, r) => {
    const email = data.email;
    const username = data.name;
    const password = data.password;
    axios
      .post("/api/auth/register", {
        username: username,
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        alert("User Registered Successfully");
      })
      .catch(function (error) {
        console.log(error);
        alert("User Registration Failed");
      });
    r.target.reset();
  };

  return (
    <div className="w-full h-min-screen bg-black bg-cover bg-center pb-3">
      <div className="w-full flex justify-between py-2 px-2">
        <img src="./images/lume.png" alt="logo" className="h-10" />
        <Link to="/login">
          <button className="bg-red-700 w-24 h-8 m-5 rounded-lg text-white">
            Sign In
          </button>
        </Link>
      </div>
      <div className="grid place-items-center w-full  px-3 lg:-px-3 lg:mt-60 mt-10">
        <h1 className="text-white lg:text-5xl text-2xl text-center">
          Unlimited movies trailers, review and more.
        </h1>
        <h2 className="text-white lg:text-3xl text-xl my-6 text-center">
          Watch anywhere. Enjoy anytime
        </h2>
        <p className="text-white lg:text-xl text-base my-4">
          Ready to watch ? Enter your email to create account and enjoy.
        </p>

        <form
          className="lg:w-2/3 lg:flex py-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            name="name"
            placeholder="username"
            className="lg:w-1/2 w-full my-2 lg:h-12 h-10 lg:rounded-l-lg  px-4 focus:outline-none"
            ref={register({
              required: true,
            })}
          />

          <input
            name="email"
            placeholder="email address"
            className="lg:w-1/2 w-full lg:h-12 my-2 h-10 rounded-lg lg:rounded-none px-4 focus:outline-none"
            ref={register({
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />

          <input
            name="password"
            type="password"
            placeholder="password"
            className="lg:w-1/2 w-full lg:h-12 h-10 my-2 rounded-lg lg:rounded-none px-4 focus:outline-none"
            ref={register({
              required: true,
            })}
          />
          <button
            className="bg-red-700 lg:h-12 h-10 lg:px-4 px-2 my-2 text-sm lg:rounded-r-lg  text-white"
            type="submit"
          >
            Get Membership
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
