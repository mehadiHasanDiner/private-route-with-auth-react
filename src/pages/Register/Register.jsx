import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Link } from "react-router";
import { auth } from "../../firebase/firebase.init";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Please Register</h1>
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            {/* Name Field */}
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              name="userName"
              placeholder="Your name"
            />
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
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        <p className=" text-center text-lg italic">
          Already have an account. Please{" "}
          <Link to="/login" className="text-blue-600 hover:font-bold">
            Login.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
