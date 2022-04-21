import React from "react";

const Skills = () => {
  return (
    <div>
      <div id="skills" className="px-8 lg:px-24  pt-12 ">
        <div className=" md:py-4 px-8  text-gray-200">
          <div className="pb-4 mx-auto">
            <h1 className="text-white text-3xl text-center font-bold pb-2">
              Skills
            </h1>
            <p className="border-b-4 w-16 mx-auto  border-purple-700" />
          </div>
          <div className>
            <div className="py-4 grid md:grid-cols-3 content-center grid-cols-2 gap-y-16 gap-x-20 justify-center">
              <div className="w-1/3 justify-self-center">
                <div className="py-4 flex justify-center">
                  <img
                    src="images/skills/w3_html5-icon.svg"
                    className="w-44"
                    alt
                  />
                </div>
                <div className="text-center md:text-xl text-sm font-semibold text-gray-300">
                  HTML
                </div>
              </div>
              <div className="w-1/3 justify-self-center">
                <div className="py-4 flex justify-center">
                  <img
                    src="images/skills/w3_css-icon.svg"
                    className="w-44"
                    alt
                  />
                </div>
                <div className="text-center md:text-xl text-sm font-semibold text-gray-300">
                  CSS
                </div>
              </div>
              <div className="w-1/3 justify-self-center">
                <div className="py-4 flex justify-center">
                  <img
                    src="images/skills/javascript-icon.svg"
                    className="w-44"
                    alt
                  />
                </div>
                <div className="text-center md:text-xl text-sm font-semibold text-gray-300">
                  JavaScript
                </div>
              </div>
              <div className="w-1/3 justify-self-center">
                <div className="py-4 flex justify-center">
                  <img
                    src="images/skills/getbootstrap-icon.svg"
                    className="w-44"
                    alt
                  />
                </div>
                <div className="text-center md:text-xl text-sm font-semibold text-gray-300">
                  Bootstrap
                </div>
              </div>
              <div className="w-1/3 justify-self-center">
                <div className="py-4 flex justify-center">
                  <img
                    src="images/skills/tailwindcss-icon.svg"
                    className="w-44"
                    alt
                  />
                </div>
                <div className="text-center md:text-xl text-sm font-semibold text-gray-300">
                  Tailwind CSS
                </div>
              </div>
              <div className="w-1/3 justify-self-center">
                <div className="py-4 flex justify-center">
                  <img src="images/skills/react.svg" className="w-44" alt />
                </div>
                <div className="text-center md:text-xl text-sm font-semibold text-gray-300">
                  React JS
                </div>
              </div>
              <div className="w-1/3 justify-self-center">
                <div className="py-4 flex justify-center">
                  <img src="images/skills/php-icon.svg" className="w-44" alt />
                </div>
                <div className="text-center md:text-xl text-sm font-semibold text-gray-300">
                  PHP
                </div>
              </div>
              <div className="w-1/3 justify-self-center">
                <div className="py-4 flex justify-center">
                  <img
                    src="images/skills/laravel-icon.svg"
                    className="w-44"
                    alt
                  />
                </div>
                <div className="text-center md:text-xl text-sm font-semibold text-gray-300">
                  Laravel
                </div>
              </div>
              <div className="w-1/3 justify-self-center">
                <div className="py-4 flex justify-center">
                  <img
                    src="images/skills/wordpress-icon.svg"
                    className="w-44"
                    alt
                  />
                </div>
                <div className="text-center md:text-xl text-sm font-semibold text-gray-300">
                  Wordpress
                </div>
              </div>
              <div className="w-1/3 justify-self-center">
                <div className="py-4 flex justify-center">
                  <img
                    src="images/skills/git-scm-icon.svg"
                    className="w-44"
                    alt
                  />
                </div>
                <div className="text-center md:text-xl text-sm font-semibold text-gray-300">
                  GIT
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
