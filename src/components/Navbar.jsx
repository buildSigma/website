import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import buildsigmaLogoNavbar from "../assets/builSigmaNavbar.jpg";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Solutions", href: "#solutions" },
    { name: "Technologies", href: "#technologies" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleClick = (href) => {
    setMenuOpen(false);

    if (href.startsWith("#")) {
      // Section scroll
      if (location.pathname !== "/") {
        navigate("/"); // go to homepage first
        setTimeout(() => {
          const el = document.querySelector(href);
          el?.scrollIntoView({ behavior: "smooth" });
        }, 200);
      } else {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href === "/") {
      // Home button
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById("home");
          el?.scrollIntoView({ behavior: "smooth" });
        }, 200);
      } else {
        // Already on homepage → scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed w-full z-50 top-0 backdrop-blur-md bg-black/70 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <button onClick={() => handleClick("/")} className="focus:outline-none">
            <img
              src={buildsigmaLogoNavbar}
              alt="BuildSigma"
              className="w-16 h-16 z-60 rounded-sm hover:scale-105 transform transition duration-300 shadow-lg"
            />
          </button>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-semibold">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <button
                onClick={() => handleClick(link.href)}
                className="hover:text-yellow-500 transition-colors"
              >
                {link.name}
              </button>
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
              <button
                onClick={() => handleClick(link.href)}
                className="hover:text-yellow-500 transition-colors block text-lg"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
