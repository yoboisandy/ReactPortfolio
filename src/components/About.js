import React from "react";

const About = () => {
  return (
    <div>
      <div className="md:hidden flex justify-center mt-12">
        <div className="w-60 h-80 rounded-2xl">
          <img
            src="images/pic.jpg"
            className="w-60 h-80 rounded-2xl object-cover"
            alt
          />
        </div>
      </div>

      <div id="about" className="px-8 lg:px-24  pt-8 ">
        <div className="py-4 md:px-8 px-4 md:flex lg:space-x-24 md:space-x-12 text-gray-200">
          <div className="left-about md:w-1/3 md:block hidden">
            <img
              src="images/about1.svg"
              style={{ minWidth: "25vw", minHeight: "100%" }}
              alt
            />
          </div>
          <div className="right-about md:w-2/3 ">
            <div className="pb-4">
              <h1 className="text-white md:text-left text-center  text-3xl font-bold pb-2">
                About Me
              </h1>
              <p className="border-b-4 w-16 md:mx-0 mx-auto  border-purple-700" />
            </div>
            <p className="pb-8 text-justify">
              Hi I am Sandeep and I’m passionate about everything related to IT.
              Currently, I am an 5th semester student of BCA (Bachelor of
              Computer Applications). I love web development. I genuinely love
              to learn much more about it. I’m currently looking for right
              opportunity to work on an environment that will help me progress
              into a full-stack development.
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
