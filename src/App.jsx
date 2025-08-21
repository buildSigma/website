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
        {/* Homepage with all sections */}
        <Route
          path="/"
          element={
            <>
              <Hero id="hero" />
              <Services id="services" />
              <Solutions id="solutions" />
              <Technologies id="technologies" />
              <AboutUs id="about" />      
              <Contact id="contact" />    
            </>
          }
        />

        {/* Separate pages for SEO */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/technologies" element={<Technologies />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
