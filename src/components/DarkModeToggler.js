import React, { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";

const DarkModeToggler = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const toggleMode = () => {
    if (darkMode) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
    console.log("darkmode: " + darkMode);
  };

  return (
		<div
			title={darkMode ? "Turn Off Dark Mode" : "Turn on Dark Mode"}
			onClick={toggleMode}
			className="fixed bottom-6 right-6 z-50"
		>
			{darkMode && (
				<svg
					stroke="currentColor"
					fill="none"
					strokeWidth={2}
					viewBox="0 0 24 24"
					strokeLinecap="round"
					strokeLinejoin="round"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"
					style={{
						color: "rgb(255, 255, 255)",
						fontSize: "3.7rem",
						borderRadius: "50%",
						padding: "0.7rem",
					}}
					className="bg-themeColor"
				>
					<circle cx={12} cy={12} r={5} />
					<line x1={12} y1={1} x2={12} y2={3} />
					<line x1={12} y1={21} x2={12} y2={23} />
					<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
					<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
					<line x1={1} y1={12} x2={3} y2={12} />
					<line x1={21} y1={12} x2={23} y2={12} />
					<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
					<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
				</svg>
			)}
			{!darkMode && (
				<svg
					stroke="currentColor"
					fill="none"
					strokeWidth={2}
					viewBox="0 0 24 24"
					strokeLinecap="round"
					strokeLinejoin="round"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"
					style={{
						color: "rgb(255, 255, 255)",
						fontSize: "3.7rem",
						borderRadius: "50%",
						padding: "0.7rem",
					}}
					className="bg-themeColor"
				>
					<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
				</svg>
			)}
		</div>
  );
};

export default DarkModeToggler;
