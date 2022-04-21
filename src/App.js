import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import DarkModeToggler from "./components/DarkModeToggler";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";
import DarkModeContext from "./context/DarkModeContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  // const [darkMode] = useContext(DarkModeContext);
  return (
    <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
      <div className={`${!darkMode ? "bg-gray-100" : "bg-gray-800"}`}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Works />
        <Contact />
        <Footer />
        <DarkModeToggler />
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
