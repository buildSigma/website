// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom"; // for SEO-friendly routing
import buildsigmaLogoNavbar from "../assets/builSigmaNavbar.jpg";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Technologies", href: "/technologies" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 backdrop-blur-md bg-black/70 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              src={buildsigmaLogoNavbar}
              alt="BuildSigma"
              className="w-16 h-16 z-60 rounded-sm hover:scale-105 transform transition duration-300 shadow-lg"
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-semibold">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <Link
                to={link.href}
                className="hover:text-yellow-500 transition-colors"
              >
                {link.name}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-yellow-500 transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="text-gray-300 hover:text-yellow-500 focus:outline-none text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-black/90 backdrop-blur-md px-6 py-4 flex flex-col gap-6 text-gray-300 font-semibold">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                onClick={toggleMenu}
                className="hover:text-yellow-500 transition-colors block text-lg"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
