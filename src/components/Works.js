import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import WorkCard from "./WorkCard";
import { Autoplay, Navigation, Pagination } from "swiper";
import DarkModeContext from "../context/DarkModeContext";

const Works = () => {
  const [darkMode] = useContext(DarkModeContext);

  const works = [
    {
      image: "/images/projects/hrs/hrs.PNG",
      name: "Hotel Reservation System",
      link: "https://github.com/yoboisandy/Hotel-Reservation-System",
    },
    {
      image: "/images/projects/newsportal/newsportal.PNG",
      name: "News Portal",
      link: "https://gitlab.com/yoboisandy/blog-site",
    },
    {
      image: "/images/projects/gadgetstore/gadgetstore.PNG",
      name: "Online Gadget Store",
    },
    {
      image: "/images/projects/newsapp.PNG",
      name: "React JS News App",
      link: "https://github.com/yoboisandy/ReactNewsApp",
    },
  ];
  return (
    <div>
      <div id="work" className="px-8 lg:px-24  pt-12 ">
        <div className=" md:py-4 px-8  text-gray-200">
          <div className="pb-4 mx-auto">
            <h1
              className={`${
                !darkMode ? "text-gray-800" : "text-white"
              } text-3xl text-center font-bold pb-2`}
            >
              My Works
            </h1>
            <p className="border-b-4 w-16 mx-auto  border-purple-700" />
          </div>
          <div className="flex justify-center text-justify pb-6">
            <p className={`${!darkMode ? "text-gray-800" : "text-gray-200"}`}>
              I haven't done any projects for companies or clients. But I've
              built some projects which are mentioned below:
            </p>
          </div>
          {/* <div className="owl-carousel owl-theme py-4  space-x-4">
            <WorkCard />
          </div> */}
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {works.map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <WorkCard project={project} />
                </SwiperSlide>
              );
            })}
            {/* <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Works;
