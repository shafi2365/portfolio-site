import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <div className="bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-white scroll-smooth">
      <Navbar setActiveSection={setActiveSection} />
      <div className="pt-16">
        {activeSection === "hero" && <Hero />}
        {activeSection === "about" && <About />}
        {activeSection === "skills" && <Skills />}
        {activeSection === "education" && <Education />}
        {activeSection === "projects" && <Project />}
        {activeSection === "contact" && <Contact />}
      </div>
    </div>
  );
}

export default App;
