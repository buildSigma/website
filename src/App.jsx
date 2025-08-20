// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
import Technologies from "./components/Technologies";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Only homepage route */}
        <Route
          path="/"
          element={
            <>
              <Hero id="home" />
              <Services id="services" />
              <Solutions id="solutions" />
              <Technologies id="technologies" />
              <AboutUs id="about" />
              <Contact id="contact" />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
