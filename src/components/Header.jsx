import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const categories = [
    "Piles",
    "Fissure",
    "Fistula",
    "Skin Care",
    "Pain Management",
    "Sexual Care",
    "Hair Care",
    "Gastric Care",
    "Diabetes care",
    "Kidney Care",
    "ENT care",
    "Liver Care",
    "Stress Management",
    "Chronic disease",
  ];

  return (
    <header className="bg-customGreen text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl md:text-4xl font-extrabold">aadi ayurved</h1>

        {/* Navigation links for larger screens */}
        <nav className="hidden md:flex space-x-8 text-2xl">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 hover:text-yellow-200"
                : "hover:text-gray-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 hover:text-yellow-200"
                : "hover:text-gray-300"
            }
          >
            About
          </NavLink>
          <div className="relative">
            <button
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              className="hover:text-gray-300"
            >
              Shop by Category
            </button>
            {isCategoriesOpen && (
              <ul className="absolute right-0 mt-4 bg-green-700 text-white p-4 rounded shadow-lg z-10">
                {categories.map((category) => (
                  <li key={category} className="p-2 hover:bg-green-600">
                    <NavLink
                      to={`/services/${category
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                      onClick={() => {
                        setIsCategoriesOpen(false);
                      }}
                    >
                      {category}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 hover:text-yellow-200"
                : "hover:text-gray-300"
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Hamburger menu button for smaller screens */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          &#9776;
        </button>
      </div>

      {/* Fullscreen menu overlay for smaller screens */}
      <div
        className={`overflow-y-auto fixed top-0 right-0 w-full h-full bg-customGreen text-white z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          className="text-4xl absolute top-5 right-8 focus:outline-none"
          onClick={() => setIsMenuOpen(false)}
        >
          &times;
        </button>
        <nav className="flex flex-col justify-center items-center h-full space-y-8 text-2xl overflow-y-auto">
          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 hover:text-yellow-200"
                : "hover:text-gray-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 hover:text-yellow-200"
                : "hover:text-gray-300"
            }
          >
            About
          </NavLink>
          <div className="relative">
            <button
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              className="hover:text-gray-300"
            >
              Shop by Category
            </button>
            {isCategoriesOpen && (
              <ul className="absolute right-0 mt-4 bg-green-700 text-white p-4 rounded shadow-lg z-10">
                {categories.map((category) => (
                  <li key={category} className="p-2 hover:bg-green-600">
                    <NavLink
                      to={`/services/${category
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsCategoriesOpen(false);
                      }}
                    >
                      {category}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <NavLink
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 hover:text-yellow-200"
                : "hover:text-gray-300"
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
