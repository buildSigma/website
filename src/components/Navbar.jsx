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
    { name: "Home", href: "/", section: "hero" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Technologies", href: "/technologies" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const handleClick = (link) => {
    setMenuOpen(false);

    if (link.name === "Home") {
      // Always scroll to top for Home
      if (location.pathname !== "/") navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (link.section && location.pathname === "/") {
      // Scroll to section if on homepage
      const el = document.getElementById(link.section);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Navigate to page
      navigate(link.href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed w-full z-50 top-0 backdrop-blur-md bg-black/70 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img
            src={buildsigmaLogoNavbar}
            alt="BuildSigma"
            className="w-16 h-16 z-60 rounded-sm hover:scale-105 transform transition duration-300 shadow-lg"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-semibold">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group cursor-pointer">
              <span
                onClick={() => handleClick(link)}
                className="hover:text-yellow-500 transition-colors"
              >
                {link.name}
              </span>
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
            <li key={link.name} className="cursor-pointer">
              <span
                onClick={() => handleClick(link)}
                className="hover:text-yellow-500 transition-colors block text-lg"
              >
                {link.name}
              </span>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
