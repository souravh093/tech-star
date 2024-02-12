import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-800 py-10 px-4 sm:px-6 lg:px-8">
      <section className="flex flex-col md:flex-row gap-10 items-center justify-center max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex-1">
          <img
            alt="E-commerce Image"
            className="w-full h-full object-cover rounded-lg shadow-md"
            height="700"
            width="700"
            src="https://source.unsplash.com/700x700"
            style={{
              aspectRatio: "700/700",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="flex-1 space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-5xl font-bold"> Sign In</h1>
          </div>
          <div className="space-y-4">
            <div className="space-y-2 flex flex-col">
              <label htmlFor="first-name">Email</label>
              <input
                className="px-3 py-2 outline-none"
                type="email"
                id="first-name"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                required
                type="password"
                className="px-3 py-2 outline-none"
              />
            </div>

            <button
              className="bg-blue-700 px-10 py-2 font-semibold  rounded-md text-gray-200 hover:text-gray-100 hover:bg-blue-800 transition-all duration-300 focus:border-2"
              type="submit"
            >
              Login
            </button>
          </div>
          <hr className="my-8" />
          <div className="space-y-4">
            <button className="w-full flex items-center gap-5 bg-white py-2 justify-center rounded-md">
              <FcGoogle /> Sign up with Google
            </button>
            <div className="mt-4 text-center text-sm">
              Don't have an account
              <Link className="underline" href="#">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
