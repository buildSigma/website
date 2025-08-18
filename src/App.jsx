// App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
import Technologies from "./components/Technologies";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import React, { useEffect } from "react";
const ScrollToSection = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const id = pathname.replace("/", "") || "home";
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToSection />
      
      <Routes>
        <Route path="/" element={
          <>
            <Hero id="hero" />
            <Services id="services" />
            <Solutions id="solutions" />
            <Technologies id="technologies" />
            <AboutUs id="about" />
            <Contact id="contact" />
          </>
        } />
        <Route path="/services" element={<Services id="services" />} />
        <Route path="/solutions" element={<Solutions id="solutions" />} />
        <Route path="/technologies" element={<Technologies id="technologies" />} />
        <Route path="/about" element={<AboutUs id="about" />} />
        <Route path="/contact" element={<Contact id="contact" />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
