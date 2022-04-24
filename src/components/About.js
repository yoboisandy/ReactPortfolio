import React, { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";

const About = () => {
  const [darkMode] = useContext(DarkModeContext);
  return (
    <div id="about">
      <div className="md:hidden flex justify-center pt-12">
        <div className="w-60 h-80 rounded-2xl">
          <img
            src="/images/pic.jpg"
            className="w-60 h-80 rounded-2xl object-cover"
            alt="me"
          />
        </div>
      </div>

      <div className="px-4 lg:px-24  md:pt-12">
        <div
          className={`py-4 md:px-8 px-4 md:flex lg:space-x-24 md:space-x-12 ${
            !darkMode ? "text-gray-800" : "text-gray-200"
          }`}
        >
          <div className="left-about md:w-1/3 md:block hidden">
            <img
              src="/images/about1.svg"
              style={{ minWidth: "25vw", minHeight: "100%" }}
              alt="sandeep"
            />
          </div>
          <div className="right-about md:w-2/3 ">
            <div className="pb-4">
              <h1
                className={`${
                  !darkMode ? "text-gray-800" : "text-white"
                } md:text-left text-center  text-3xl font-bold pb-2`}
              >
                About Me
              </h1>
              <p className="border-b-4 w-16 md:mx-0 mx-auto  border-purple-700" />
            </div>
            <p className="pb-8 text-justify">
              Hi I am Sandeep, a sixth semester student of BCA (Bachelor of
              Computer Applications). I love web development and I am seeking a
              position with a growing organization where I can learn and make a
              positive impact. I am eager to apply my knowledge and skills
              towards launching a successful career as a fullstack PHP/Laravel
              developer
            </p>
            <div>
              <a
                href="cv.pdf"
                className="border-4 rounded text-white bg-purple-700 border-purple-700 px-6 py-2"
                download
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
