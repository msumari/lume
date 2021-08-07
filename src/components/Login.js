function Login() {
  return (
    <div className="w-full h-screen bg-loginbanner bg-cover bg-center">
      <div className="w-full flex justify-between">
        <img src="./images/netflix-logo.png" alt="logo" className="h-24" />
      </div>
      <div className="grid place-items-center w-full mt-60">
        <form className="-mt-24 bg-gray-900 grid p-10 place-items-center rounded">
          <h2 className="text-3xl text-white">Sign In</h2>
          <input
            type="email"
            placeholder="email address"
            className="bg-gray-500 h-11 placeholder-white rounded m-2 px-2"
            // ref={emailRef}
          />
          <input
            type="password"
            placeholder="password"
            className="bg-gray-500 h-11 placeholder-white rounded m-2 px-2"
            // ref={emailRef}
          />
          <button className="bg-red-600 h-11 w-11/12 rounded">Login</button>
          <div className="flex my-5">
            <span className="text-white">New to Netflix?</span>
            <span className="font-bold text-white cursor-pointer">Sign in</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
