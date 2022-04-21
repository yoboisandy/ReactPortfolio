import React from "react";

const Hero = () => {
  return (
    <div>
      <header className="bg-cover h-screen flex" id="hero">
        <div className="right-part text-white flex flex-col justify-center items-center md:w-1/2 w-full">
          <div className=" py-5">
            <p className="font-bold text-2xl py-4">Hey</p>
            {/* <p class="w-20  border-b-4 border-purple-700"></p> */}
            <p className="text-5xl">
              I am <span className="text-purple-700 font-bold">Sandeep </span>{" "}
            </p>
            <p className="text-xl font-light py-4">A Web Developer</p>
            <div className="flex pt-5 space-x-10">
              <a
                href="#work"
                className="border-4 rounded text-white bg-purple-700 border-purple-700 px-6 py-2"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="border-4 transition-all  hover:text-white hover:bg-purple-700 border-purple-700 px-6 py-2"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
        <div className="left-part  hidden justify-center md:flex items-center right-5 w-1/2">
          <div className=" border-4 border-purple-700 w-80 h-80 rounded-2xl ">
            <img
              src="images/pic.jpg"
              className=" rounded-2xl object-cover relative  -top-6 right-6"
              alt
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;