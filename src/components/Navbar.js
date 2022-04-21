import React from "react";

const Navbar = () => {
  return (
    <>
      <div>
        <nav
          id="navbar"
          className="md:flex-row z-20 transition-all fixed top-0 right-0 left-0 container mx-auto flex justify-between md:py-4 py-2 px-10  md:px-8 lg:px-14"
        >
          <div className="logo flex items-center">
            <a
              href="#"
              className="text-white font-medium text-2xl cursor-pointer border-b-4 transition-all border-transparent"
            >
              Sandeep Sharma
            </a>
          </div>
          <div className="md:flex hidden  text-gray-300 justify-center items-center space-x-8">
            <a
              className="font-semibold hover:text-gray-100 border-b-4 transition-all border-transparent hover:border-purple-700"
              href="/#hero"
            >
              Home
            </a>
            <a
              className="font-semibold hover:text-gray-100 border-b-4 transition-all border-transparent hover:border-purple-700"
              href="/#about"
            >
              About
            </a>
            <a
              className="font-semibold hover:text-gray-100 border-b-4 transition-all border-transparent hover:border-purple-700"
              href="/#skills"
            >
              Skills
            </a>
            <a
              className=" font-semibold hover:text-gray-100 border-b-4 transition-all border-transparent hover:border-purple-700"
              href="/#work"
            >
              Projects
            </a>
            <a
              className=" text-white hover:bg-purple-800 bg-purple-700 px-6 font-semibold py-1 rounded border-b-4 transition-all border-transparent"
              href="/#contact"
            >
              Hire Me
            </a>
          </div>
          <button className="md:hidden flex justify-center items-center cursor-pointer z-20 ham">
            <svg
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32px"
              height="32px"
            >
              <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
            </svg>
          </button>
          <div className="md:hidden z-0 w-1/3 h-screen bg-opacity-95 fixed top-0 right-0 bg-gray-700 hidden menu flex flex-col  justify-center items-center text-gray-300 py-4 space-y-10 ">
            <a
              className="links block hover:text-gray-100 border-b-4 transition-all border-transparent hover:border-purple-700"
              href="/#hero"
            >
              Home
            </a>
            <a
              className="links block hover:text-gray-100 border-b-4 transition-all border-transparent hover:border-purple-700"
              href="/#about"
            >
              About
            </a>
            <a
              className="links block hover:text-gray-100 border-b-4 transition-all border-transparent hover:border-purple-700"
              href="/#skills"
            >
              Skills
            </a>
            <a
              className="links block hover:text-gray-100 border-b-4 transition-all border-transparent hover:border-purple-700"
              href="/#work"
            >
              Projects
            </a>
            <a
              className="links block  text-white hover:bg-purple-800 bg-purple-700 px-6 font-semibold py-1 rounded"
              href="/#contact"
            >
              Hire Me
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
