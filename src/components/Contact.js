import React, { useContext } from "react";
import emailjs from "emailjs-com";
import DarkModeContext from "../context/DarkModeContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        toast.success("Email Sent Successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: darkMode ? "light" : "dark",
        });
        const inputs = document.querySelectorAll("#name, #email, #message");
        inputs.forEach((i) => {
          i.value = "";
        });
      })
      .catch((err) => {
        toast.error("Failed to send email", {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: darkMode ? "light" : "dark",
        });
      });
  };
  return (
    <div>
      <div id="contact" className="px-8 lg:px-24  py-20 ">
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
                    className={`w-full ${
                      !darkMode
                        ? "bg-gray-200 text-gray-600"
                        : "bg-gray-700 text-gray-200"
                    } h-10  px-3 py-1 border border-purple-400  focus:outline-none focus:ring-2 focus:ring-purple-200 rounded-md `}
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
                    className={`w-full ${
                      !darkMode
                        ? "bg-gray-200 text-gray-600"
                        : "bg-gray-700 text-gray-200"
                    } h-10  px-3 py-1 border border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 rounded-md `}
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
                    className={`w-full ${
                      !darkMode
                        ? "bg-gray-200 text-gray-600"
                        : "bg-gray-700 text-gray-200"
                    }  resize-none  border border-purple-400 focus:outline-none focus:ring-2 px-3 py-1 focus:ring-purple-200  rounded-md `}
                    cols={30}
                    rows={4}
                    defaultValue={""}
                  />
                </div>
                <div>
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
      <ToastContainer />
    </div>
  );
};

export default Contact;
