import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-300 py-8 px-6 gap-8 flex flex-col items-center">
        <div className="flex w-1/3 justify-around">
          <a
            className="flex justify-center"
            href="https://www.facebook.com/sharma.sandeep.963434/"
            target="_blank"
          >
            <img
              className="w-8 pr-3"
              src="https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg"
              alt="pic"
            />
          </a>
          <a
            className="flex justify-center"
            href="https://www.instagram.com/sandeep_aka_msdian/"
            target="_blank"
          >
            <img
              className="w-8 pr-3"
              src="https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg"
              alt="pic"
            />
          </a>
          <a
            className="flex justify-center"
            href="https://www.linkedin.com/in/sandeep-sharma-4aa392179/"
            target="_blank"
          >
            <img
              className="w-8 pr-3"
              src="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg"
              alt="pic"
            />
          </a>
          <a
            className="flex justify-center"
            href="https://github.com/yoboisandy"
            target="_blank"
          >
            <img
              className="w-8 pr-3"
              src="https://www.vectorlogo.zone/logos/github/github-tile.svg"
              alt="pic"
            />
          </a>
        </div>
        <div>
          <div>
            Copyright © 2022 <b className="text-purple-500">Sandeep Sharma</b>.
            All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
