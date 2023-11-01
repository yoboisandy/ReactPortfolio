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
			technologies: ["Bootstrap", "JS", "PHP"],
			link: "https://github.com/yoboisandy/Hotel-Reservation-System",
		},
		{
			image: "/images/projects/newsportal/newsportal.PNG",
			name: "News Portal",
			technologies: ["Bootstrap", "JS", "Laravel"],
			link: "https://gitlab.com/yoboisandy/blog-site",
		},
		{
			image: "/images/projects/gadgetstore/gadgetstore.PNG",
			name: "Online Gadget Store",
			technologies: ["Wordpress", "Elementor", "WooCommerce"],
		},
		{
			image: "/images/projects/newsapp.PNG",
			name: "React JS News App",
			technologies: ["Tailwind CSS", "React JS", "News API"],
			link: "https://github.com/yoboisandy/ReactNewsApp",
		},
		{
			image: "/images/projects/hms.PNG",
			name: "Hotel Management System",
			technologies: ["Tailwind CSS", "React JS", "Laravel"],
			link: "https://gitlab.com/yoboisandy/hms",
		},
		{
			image: "/images/projects/mecomm.png",
			name: "Multi-Tenant E-Commerce Platform",
			technologies: ["Tailwind CSS", "React JS & Redux", "Laravel"],
			link: "https://github.com/yoboisandy/multitenant-ecommerce-backend",
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
						<p
							className={`text-center lg:w-[70%] ${
								!darkMode ? "text-gray-800" : "text-gray-200"
							}`}
						>
							These are some of my personal projects that I have
							independently developed to enhance my skills and
							demonstrate my capabilities as a web developer.
						</p>
					</div>
					<div className="grid md:grid-cols-2 grid-cols-1 gap-12 items-center justify-center">
						{works.reverse().map((project, index) => {
							return <WorkCard key={index} project={project} />;
						})}
					</div>
				</div>
			</div>
		</div>
  );
};

export default Works;
