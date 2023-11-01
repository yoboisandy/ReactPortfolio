import React, { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";

const About = () => {
  const [darkMode] = useContext(DarkModeContext);
  return (
		<div id="about">
			<div className="md:hidden flex justify-center pt-12">
				<div className="w-60 h-80 rounded-2xl">
					<img
						src="/images/pic.jpg"
						className="w-60 h-80 rounded-2xl object-cover"
						alt="me"
					/>
				</div>
			</div>

			<div className="px-4 lg:px-24  md:pt-12">
				<div
					className={`py-4 md:px-8 px-4 md:flex lg:space-x-24 md:space-x-12 ${
						!darkMode ? "text-gray-800" : "text-gray-200"
					}`}
				>
					<div className="left-about md:w-1/3 md:block hidden">
						<img
							src="/images/about1.svg"
							style={{ minWidth: "25vw", minHeight: "100%" }}
							alt="sandeep"
						/>
					</div>
					<div className="right-about md:w-2/3 ">
						<div className="pb-4">
							<h1
								className={`${
									!darkMode ? "text-gray-800" : "text-white"
								} md:text-left text-center  text-3xl font-bold pb-2`}
							>
								About Me
							</h1>
							<p className="border-b-4 w-16 md:mx-0 mx-auto  border-purple-700" />
						</div>
						<p className="pb-8 text-justify">
							Highly skilled PHP Laravel Developer with 2 years of
							experience in designing, developing, testing, and
							maintaining web applications. Proficient in
							utilizing the Laravel framework to create robust
							andscalable solutions. Possesses a strong
							understanding of software development principles,
							database management, and API integrations.
							Continuously staying updated with the latest
							technologies andindustry trends. Committed to
							delivering exceptional results and exceeding client
							expectations.
						</p>
						<div className="flex gap-5">
							<a
								href="sandeep_resume.pdf"
								className="border-4 rounded text-white bg-purple-700 border-purple-700 px-6 py-2"
								download
							>
								Download CV
							</a>
							<a
								href="tel:+9779865399577"
								className="border-4 rounded transition-all  hover:text-white hover:bg-purple-700 font-semibold border-purple-700 px-6 py-2"
								download
							>
								<i class="fa-solid fa-phone mr-2"></i>
								{/* <img
                  src="/images/phone-call.svg"
                  className="inline mr-3"
                  width={25}
                /> */}
								Call Me
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
};

export default About;
