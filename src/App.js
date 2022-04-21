import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
