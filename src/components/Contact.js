import React, { useContext } from "react";
import emailjs from "emailjs-com";
import DarkModeContext from "../context/DarkModeContext";

const Contact = () => {
  const [darkMode] = useContext(DarkModeContext);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_pujkcwr",
        "template_r03sn2k",
        e.target,
        "ALK-FlzxOS0FDWnc7"
      )
      .then((res) => {
        alert("Email Send Successfully");
      })
      .catch((err) => {
        alert("Failed to send email");
      });
  };
  return (
    <div>
      <div id="contact" className="px-8 lg:px-24  py-12 ">
        <div className=" md:py-4 px-8">
          <div className="pb-6 mx-auto">
            <h1
              className={`${
                !darkMode ? "text-gray-800" : "text-white   "
              } text-3xl text-center font-bold pb-2`}
            >
              Contact Me
            </h1>
            <p className="border-b-4 w-16 mx-auto  border-purple-700" />
          </div>
          <div className="md:w-7/12 w-full mx-auto">
            <div
              className={`${
                !darkMode
                  ? "bg-gray-100 shadow-lg shadow-gray-400"
                  : "bg-gray-800 shadow-lg shadow-gray-900"
              }  rounded-md    py-4 px-6 mx-auto`}
            >
              <form onSubmit={sendEmail}>
                <div className="pb-6">
                  <label
                    htmlFor="name"
                    className={`${
                      !darkMode ? "text-gray-800" : "text-white"
                    } block pb-2`}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full bg-gray-300 h-10  focus:border-2  focus:border-purple-700 rounded-md text-gray-600"
                  />
                </div>
                <div className="pb-6">
                  <label
                    htmlFor="email"
                    className={`${
                      !darkMode ? "text-gray-800" : "text-white"
                    } block pb-2`}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full bg-gray-300 h-10  focus:border-2  focus:border-purple-700 rounded-md text-gray-600"
                  />
                </div>
                <div className="pb-6">
                  <label
                    htmlFor="message"
                    className={`${
                      !darkMode ? "text-gray-800" : "text-white"
                    } block pb-2`}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="w-full bg-gray-300  resize-none   focus:border-2 focus:border-purple-700  rounded-md text-gray-600"
                    cols={30}
                    rows={4}
                    defaultValue={""}
                  />
                </div>
                <div className>
                  <button
                    type="submit"
                    className="w-full text-white bg-purple-700 hover:bg-purple-800 rounded-md text-xl py-2 font-bold"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
