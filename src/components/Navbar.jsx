// Navbar.jsx
import React from "react";

const Navbar = ({ setActiveSection }) => {
  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-neutral-900 shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-xl text-indigo-600">Mohammad Shafi</div>
        <div className="space-x-6 text-sm">
          <button onClick={() => setActiveSection("hero")} className="hover:text-indigo-600">Home</button>
          <button onClick={() => setActiveSection("about")} className="hover:text-indigo-600">About</button>
          <button onClick={() => setActiveSection("skills")} className="hover:text-indigo-600">Skills</button>
          <button onClick={() => setActiveSection("education")} className="hover:text-indigo-600">Education</button>
          <button onClick={() => setActiveSection("projects")} className="hover:text-indigo-600">Projects</button>
          <button onClick={() => setActiveSection("contact")} className="hover:text-indigo-600">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
