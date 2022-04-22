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
      image: "yoboisandy.github.io/images/projects/hrs/hrs.PNG",
      name: "Hotel Reservation System",
      technologies: ["HTML", "CSS", "Bootstrap", "JS", "PHP", "MySQL"],
      link: "https://github.com/yoboisandy/Hotel-Reservation-System",
    },
    {
      image: "yoboisandy.github.io/images/projects/newsportal/newsportal.PNG",
      name: "News Portal",
      technologies: ["HTML", "CSS", "Bootstrap", "JS", "Laravel", "MySQL"],
      link: "https://gitlab.com/yoboisandy/blog-site",
    },
    {
      image: "yoboisandy.github.io/images/projects/gadgetstore/gadgetstore.PNG",
      name: "Online Gadget Store",
      technologies: ["Wordpress", "Elementor", "WooCommerce"],
    },
    {
      image: "yoboisandy.github.io/images/projects/newsapp.PNG",
      name: "React JS News App",
      technologies: ["HTML", "Tailwind CSS", "React JS", "News API"],
      link: "https://github.com/yoboisandy/ReactNewsApp",
    },
  ];
  return (
    <div>
      <div id="work" className="lg:px-24  pt-12 ">
        <div className=" md:py-4 px-6 text-gray-200">
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
          {/* <Swiper
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
          </Swiper> */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
            {works.map((project, index) => {
              return <WorkCard key={index} project={project} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
