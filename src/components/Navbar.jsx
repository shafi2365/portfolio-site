import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ setActiveSection }) => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!navOpen);
  const closeNav = () => setNavOpen(false);

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Education", id: "education" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-neutral-900 shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-xl text-indigo-600">Mohammad Shafi</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-sm text-gray-800 dark:text-gray-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className="hover:text-indigo-600 transition"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleNav}
          className="md:hidden text-gray-800 dark:text-white focus:outline-none"
        >
          {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-900 px-6 pb-6">
          <ul className="flex flex-col gap-4 text-gray-800 dark:text-gray-200 text-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setActiveSection(item.id);
                    closeNav();
                  }}
                  className="block w-full text-left py-2 border-b border-gray-200 dark:border-gray-700 hover:text-indigo-600"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
