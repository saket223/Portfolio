import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"; // Import the Navbar component

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <section
        id="hero"
        className="h-screen p-8 mb-8" // Margin added instead of borders
      >
        <Hero />
      </section>
      <section
        id="projects"
        className="py-16 p-8 mb-8" // Margin added instead of borders
      >
        <Projects />
      </section>
      <section id="footer" className="py-12 p-8">
        <Footer />
      </section>
    </div>
  );
}

export default App;
