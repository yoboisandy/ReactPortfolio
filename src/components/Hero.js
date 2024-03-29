import React from "react";
import Typical from "react-typical";

const Hero = () => {
  const navigateTo = (e, id) => {
		e.preventDefault();
		document.querySelector("#sidebar").classList.toggle("right-0");
		document.querySelector("#sidebar").classList.toggle("-right-full");
		document.getElementById(id).scrollIntoView();
  };
  return (
		<div>
			<header className="bg-cover h-screen flex" id="hero">
				<div className="right-part text-white flex flex-col justify-center items-center md:w-1/2 w-full">
					<div className=" py-5">
						<p className="font-semibold text-2xl py-4">Hi</p>
						{/* <p class="w-20  border-b-4 border-themeColor"></p> */}
						<p className="text-5xl">
							I am{" "}
							<span className="text-themeColor font-bold">
								Sandeep
							</span>
						</p>
						<div className="text-xl font-light py-4">
							<Typical
								loop={Infinity}
								steps={[
									"A Web Developer",
									2000,
									"A Learner",
									2000,
									"A Student",
									2000,
								]}
							/>
						</div>
						<div className="flex pt-5 space-x-10">
							<button
								onClick={(e) => navigateTo(e, "work")}
								className="border-4 rounded text-white bg-themeColor border-themeColor px-6 py-2"
							>
								Projects
							</button>
							<button
								onClick={(e) => navigateTo(e, "contact")}
								className="border-4 rounded transition-all  hover:text-white hover:bg-themeColor border-themeColor px-6 py-2"
							>
								Contact Me
							</button>
						</div>
					</div>
				</div>
				<div className="left-part  hidden justify-center md:flex items-center right-5 w-1/2">
					<div className=" border-4 border-themeColor w-80 h-80 rounded-2xl ">
						<img
							src="/images/pic.jpg"
							className=" rounded-2xl object-cover relative  -top-6 right-6"
							alt="sandeep"
						/>
					</div>
				</div>
			</header>
		</div>
  );
};

export default Hero;
