import React, { useContext, useState } from "react";
import DarkModeContext from "../context/DarkModeContext";

const Navbar = () => {
  const [navBg, setNavBg] = useState(false);
  const [darkMode] = useContext(DarkModeContext);
  const toggleSidebar = (e) => {
    document.querySelector("#sidebar").classList.toggle("hidden");
  };

  const changeNavBg = () => {
    if (window.scrollY > 30) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };

  const navigateTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView();
  };

  window.addEventListener("scroll", changeNavBg);

  return (
    <>
      <div>
        <nav
          id="navbar"
          className={`md:flex-row ${
            navBg
              ? darkMode
                ? "bg-gray-800 bg-opacity-90 shadow-lg "
                : "bg-gray-100 bg-opacity-90 shadow-lg"
              : ""
          }   z-20  fixed top-0 right-0 left-0   mx-auto flex justify-between md:py-4 py-2 px-10  md:px-8 lg:px-14`}
        >
          <div className="logo flex items-center">
            <a
              onClick={(e) => navigateTo(e, "hero")}
              className={`${
                !darkMode
                  ? navBg
                    ? "text-gray-800"
                    : "text-white"
                  : "text-white"
              } font-medium text-2xl cursor-pointer border-b-4 transition-all border-transparent`}
            >
              Sandeep Sharma
            </a>
          </div>
          <div
            className={`${
              !darkMode
                ? !navBg
                  ? "text-gray-300"
                  : "text-gray-800"
                : "text-gray-300"
            } md:flex hidden   justify-center items-center space-x-8`}
          >
            <a
              className={`font-semibold cursor-pointer hover:text-gray-100 border-b-4 transition-all border-transparent hover:border-purple-700`}
              onClick={(e) => navigateTo(e, "hero")}
            >
              Home
            </a>
            <a
              className={`font-semibold cursor-pointer hover:text-gray-100 border-b-4 transition-all border-transparent hover:border-purple-700`}
              onClick={(e) => navigateTo(e, "about")}
            >
              About
            </a>
            <a
              className={`font-semibold cursor-pointer hover:text-gray-100 border-b-4 transition-all border-transparent hover:border-purple-700`}
              onClick={(e) => navigateTo(e, "skills")}
            >
              Skills
            </a>
            <a
              className={`font-semibold cursor-pointer hover:text-gray-100 border-b-4 transition-all border-transparent hover:border-purple-700`}
              onClick={(e) => navigateTo(e, "work")}
            >
              Projects
            </a>
            <a
              className=" text-white cursor-pointer hover:bg-purple-800 bg-purple-700 px-6 font-semibold py-1 rounded border-b-4 transition-all border-transparent"
              onClick={(e) => navigateTo(e, "contact")}
            >
              Hire Me
            </a>
          </div>
          <button
            onClick={toggleSidebar}
            className="md:hidden flex justify-center items-center cursor-pointer z-20 ham"
          >
            <svg
              fill={`${!darkMode ? "black" : "white"}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32px"
              height="32px"
            >
              <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
            </svg>
          </button>
          <div
            id="sidebar"
            className="md:hidden z-0 w-1/3 h-screen bg-opacity-95 fixed top-0 right-0 bg-gray-700  menu flex hidden flex-col  justify-center items-center text-gray-300 py-4 space-y-10 "
          >
            <a
              className="links block hover:text-gray-100 border-b-4 transition-all border-transparent hover:border-purple-700"
              href="/#hero"
              onClick={(e) => navigateTo(e, "hero")}
            >
              Home
            </a>
            <a
              className="links block hover:text-gray-100 border-b-4 transition-all border-transparent hover:border-purple-700"
              href="/#about"
              onClick={(e) => navigateTo(e, "about")}
            >
              About
            </a>
            <a
              className="links block hover:text-gray-100 border-b-4 transition-all border-transparent hover:border-purple-700"
              href="/#skills"
              onClick={(e) => navigateTo(e, "skills")}
            >
              Skills
            </a>
            <a
              className="links block hover:text-gray-100 border-b-4 transition-all border-transparent hover:border-purple-700"
              href="/#work"
              onClick={(e) => navigateTo(e, "work")}
            >
              Projects
            </a>
            <a
              className="links block  text-white hover:bg-purple-800 bg-purple-700 px-6 font-semibold py-1 rounded"
              href="/#contact"
              onClick={(e) => navigateTo(e, "contact")}
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
