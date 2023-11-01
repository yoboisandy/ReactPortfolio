import React, { useContext, useState } from "react";
import DarkModeContext from "../context/DarkModeContext";

const Navbar = () => {
  const [navBg, setNavBg] = useState(false);
  const [darkMode] = useContext(DarkModeContext);
  const [showBars, setShowBars] = useState(true);
  const toggleSidebar = (e) => {
    // document.querySelector("#sidebar").classList.toggle("hidden");
    document.querySelector("#sidebar").classList.toggle("right-0");
    document.querySelector("#sidebar").classList.toggle("-right-full");
    if (showBars) {
      setShowBars(false);
    } else {
      setShowBars(true);
    }
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
    document.querySelector("#sidebar").classList.toggle("right-0");
    document.querySelector("#sidebar").classList.toggle("-right-full");
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
						<div
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
						</div>
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
						<div
							className={`font-semibold cursor-pointer ${
								!darkMode
									? !navBg
										? "hover:text-gray-100"
										: "hover:text-black"
									: "hover:text-gray-100"
							} border-b-4 transition-all border-transparent hover:border-themeColor`}
							onClick={(e) => navigateTo(e, "hero")}
						>
							Home
						</div>
						<div
							className={`font-semibold cursor-pointer ${
								!darkMode
									? !navBg
										? "hover:text-gray-100"
										: "hover:text-black"
									: "hover:text-gray-100"
							} border-b-4 transition-all border-transparent hover:border-themeColor`}
							onClick={(e) => navigateTo(e, "about")}
						>
							About
						</div>
						<div
							className={`font-semibold cursor-pointer ${
								!darkMode
									? !navBg
										? "hover:text-gray-100"
										: "hover:text-black"
									: "hover:text-gray-100"
							} border-b-4 transition-all border-transparent hover:border-themeColor`}
							onClick={(e) => navigateTo(e, "skills")}
						>
							Skills
						</div>
						<div
							className={`font-semibold cursor-pointer ${
								!darkMode
									? !navBg
										? "hover:text-gray-100"
										: "hover:text-black"
									: "hover:text-gray-100"
							} border-b-4 transition-all border-transparent hover:border-themeColor`}
							onClick={(e) => navigateTo(e, "work")}
						>
							Projects
						</div>
						<div
							className=" text-white cursor-pointer hover:opacity-90 bg-themeColor px-6 font-semibold py-1 rounded border-b-4 transition-all border-transparent"
							onClick={(e) => navigateTo(e, "contact")}
						>
							Hire Me
						</div>
					</div>
					<button
						id="toggler"
						onClick={toggleSidebar}
						className="md:hidden flex justify-center items-center cursor-pointer z-20 ham"
					>
						<svg
							fill={`${
								!darkMode
									? !navBg
										? "white"
										: "black"
									: "white"
							}`}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="32px"
							height="32px"
						>
							<path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
						</svg>
						{/* {showBars && (
            )} */}
						{/* {!showBars && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width="24px"
                height="24px"
                fill="white"
                viewBox="0 0 256 256"
                xmlSpace="preserve"
              >
                <desc>Created with Fabric.js 1.7.22</desc>
                <defs />
                <g transform="translate(128 128) scale(0.87 0.87)" style={{}}>
                  <g
                    style={{
                      stroke: "none",
                      strokeWidth: 0,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      // fill: "none",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform="translate(-144.89999999999998 -144.90000000000003) scale(3.22 3.22)"
                  >
                    <path
                      d="M 8 90 c -2.047 0 -4.095 -0.781 -5.657 -2.343 c -3.125 -3.125 -3.125 -8.189 0 -11.314 l 74 -74 c 3.125 -3.124 8.189 -3.124 11.314 0 c 3.124 3.124 3.124 8.189 0 11.313 l -74 74 C 12.095 89.219 10.047 90 8 90 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        // fill: "rgb(0,0,0)",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                    <path
                      d="M 82 90 c -2.048 0 -4.095 -0.781 -5.657 -2.343 l -74 -74 c -3.125 -3.124 -3.125 -8.189 0 -11.313 c 3.124 -3.124 8.189 -3.124 11.313 0 l 74 74 c 3.124 3.125 3.124 8.189 0 11.314 C 86.095 89.219 84.048 90 82 90 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        // fill: "rgb(0,0,0)",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                  </g>
                </g>
              </svg>
            )} */}
					</button>
					<div
						id="sidebar"
						className="md:hidden shadow-md z-0 w-1/2 -right-full  h-screen bg-opacity-95 fixed top-0 transition-all duration-500   bg-gray-700  menu flex  flex-col  justify-center items-center text-gray-300 py-4 space-y-10 "
					>
						<div
							className="links block  cursor-pointer hover:text-gray-100 border-b-4 transition-all border-transparent hover:border-themeColor"
							href="/#hero"
							onClick={(e) => navigateTo(e, "hero")}
						>
							Home
						</div>
						<div
							className="links block  cursor-pointer hover:text-gray-100 border-b-4 transition-all border-transparent hover:border-themeColor"
							href="/#about"
							onClick={(e) => navigateTo(e, "about")}
						>
							About
						</div>
						<div
							className="links block  cursor-pointer hover:text-gray-100 border-b-4 transition-all border-transparent hover:border-themeColor"
							href="/#skills"
							onClick={(e) => navigateTo(e, "skills")}
						>
							Skills
						</div>
						<div
							className="links block  cursor-pointer hover:text-gray-100 border-b-4 transition-all border-transparent hover:border-themeColor"
							href="/#work"
							onClick={(e) => navigateTo(e, "work")}
						>
							Projects
						</div>
						<div
							className="links block   cursor-pointer text-white hover:bg-purple-800 bg-themeColor px-6 font-semibold py-1 rounded"
							href="/#contact"
							onClick={(e) => navigateTo(e, "contact")}
						>
							Hire Me
						</div>
					</div>
				</nav>
			</div>
		</>
  );
};

export default Navbar;
