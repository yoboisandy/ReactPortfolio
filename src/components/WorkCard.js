import React, { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";

const WorkCard = ({ project }) => {
  const [darkMode] = useContext(DarkModeContext);
  return (
    <div>
      <div
        className={`item  hover:scale-105 hover:shadow-lg transition-all duration-150 ease-linear  shadow-md ${
          !darkMode ? "bg-white border-2 border-gray-300" : "bg-gray-700"
        } h-full overflow-hidden text-white rounded-lg`}
      >
        <div>
          <img
            src={project.image}
            className="h-72 object-cover object-top w-full"
            alt="works"
          />
        </div>
        <div
          title="Github Link"
          className={`rounded-full border-2 border-gray-400 shadow mx-auto relative bottom-8 h-16 w-16 bg-white`}
        >
          <a
            target={"_blank"}
            href={project.link}
            className="grid place-items-center place-content-center"
          >
            <img src="/images/github.png" className="h-16 w-16" alt="" />
          </a>
        </div>
        <div
          className={`text-2xl tracking-wider ${
            !darkMode ? "text-gray-800" : "text-gray-100"
          } -mt-6 pb-6 py-3 font-bold px-3 text-center`}
        >
          {project.name}
        </div>
        <div className="flex flex-wrap gap-3 mb-6 mx-2 justify-center">
          {project.technologies.map((tech, index) => {
            return (
              <span
                key={index}
                className={`p-2 tracking-wide rounded bg-purple-300 text-gray-800`}
              >
                {tech}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
