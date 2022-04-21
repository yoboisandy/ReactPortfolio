import React from "react";

const WorkCard = (props) => {
  return (
    <div>
      <div className="item bg-gray-600 h-full overflow-hidden text-white rounded-md">
        <a href="/project/hotel-reservation-system">
          <div>
            <img
              src={props.project.image}
              className="h-60 object-cover w-full"
              alt
            />
          </div>
          <div className="text-xl py-2 px-3 text-center">
            {props.project.name}
          </div>
        </a>
      </div>
    </div>
  );
};

export default WorkCard;
