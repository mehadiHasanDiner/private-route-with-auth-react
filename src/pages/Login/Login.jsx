import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Please Login</h1>
        <form>
          <fieldset className="fieldset">
            {/* Email Field */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Email"
            />
            {/* Password Field */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <p className=" text-center text-lg italic">
          New to our Website. Please{" "}
          <Link to="/register" className="text-blue-600 hover:font-bold">
            Register.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
