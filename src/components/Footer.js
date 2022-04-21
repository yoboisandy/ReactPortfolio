import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-gray-300 py-4 px-6 flex justify-around">
        <div className>
          <div className="flex justify-around">
            <a
              href="https://www.facebook.com/sharma.sandeep.963434/"
              target="_blank"
            >
              <img
                className="w-8 pr-3"
                src="https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg"
                alt
              />
            </a>
            <a
              href="https://www.instagram.com/_sandeep_aka_msdian/"
              target="_blank"
            >
              <img
                className="w-8 pr-3"
                src="https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg"
                alt
              />
            </a>
            <a
              href="https://www.linkedin.com/in/sandeep-sharma-4aa392179/"
              target="_blank"
            >
              <img
                className="w-8 pr-3"
                src="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg"
                alt
              />
            </a>
            <a href="https://github.com/yoboisandy" target="_blank">
              <img
                className="w-8 pr-3"
                src="https://www.vectorlogo.zone/logos/github/github-tile.svg"
                alt
              />
            </a>
          </div>
        </div>
        <div>© 2021 Sandeep Sharma. All Rights Reserved</div>
      </footer>
    </div>
  );
};

export default Footer;
