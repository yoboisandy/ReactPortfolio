import React from "react";

const Contact = () => {
  return (
    <div>
      <div id="contact" className="px-8 lg:px-24  py-8 ">
        <div className=" md:py-4 px-8  text-gray-200">
          <div className="pb-6 mx-auto">
            <h1 className="text-white text-3xl text-center font-bold pb-2">
              Contact Me
            </h1>
            <p className="border-b-4 w-16 mx-auto  border-purple-700" />
          </div>
          <div className="md:w-7/12 w-full mx-auto">
            <div className="bg-gray-800  rounded-md  shadow-lg shadow-gray-900 border-gray-900 py-4 px-6 mx-auto">
              <form action method="post">
                <div className="pb-6">
                  <label htmlFor="name" className="text-white block pb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full bg-gray-300 h-10  focus:border-2  focus:border-purple-700 rounded-md text-gray-600"
                  />
                </div>
                <div className="pb-6">
                  <label htmlFor="email" className="text-white block pb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full bg-gray-300 h-10  focus:border-2  focus:border-purple-700 rounded-md text-gray-600"
                  />
                </div>
                <div className="pb-6">
                  <label htmlFor="message" className="text-white block pb-2">
                    Message
                  </label>
                  <textarea
                    name
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
                    className="w-full bg-purple-700 hover:bg-purple-800 rounded-md text-xl py-2 font-bold"
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
