import React from "react";
import { Link } from "react-router-dom";
import buildsigmaLogo from "../assets/buildSigma.webp";
import { Helmet } from "react-helmet-async";

const Hero = () => {
  return (
    <section
      className="  relative py-52 px-6 bg-gradient-to-r from-black via-black to-gray-900 text-white overflow-hidden"
    >
      {/* SEO Meta Tags */}
      <Helmet>
  {/* Title for SEO */}
  <title>BuildSigma - Empowering Digital Transformation</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="BuildSigma creates innovative web apps, mobile solutions, and cloud services that drive growth and efficiency for your business."
  />

  {/* Canonical URL */}
  <link rel="canonical" href="https://www.buildsigma.com/" />

  {/* Open Graph (Facebook, LinkedIn, WhatsApp) */}
  <meta property="og:title" content="BuildSigma - Empowering Digital Transformation" />
  <meta
    property="og:description"
    content="BuildSigma builds modern web apps, mobile solutions, AI tools, and cloud services to help businesses scale and innovate."
  />
  <meta property="og:url" content="https://www.buildsigma.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.buildsigma.com/assets/buildsigma-home-og.jpg" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="BuildSigma - Empowering Digital Transformation" />
  <meta
    name="twitter:description"
    content="Discover how BuildSigma helps businesses grow with web, mobile, AI, and cloud solutions designed for the digital future."
  />
  <meta name="twitter:image" content="https://www.buildsigma.com/assets/buildsigma-home-og.jpg" />
</Helmet>


      <div className="max-w-7xl ml-5 md:ml-9 mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6 order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Empowering <span className="text-yellow-500">Digital Transformation</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            We create innovative web apps, mobile solutions, and cloud services that drive growth and efficiency for your business.
          </p>
          <div className="flex gap-4">
            {/* Router Links */}
            <Link
              to="/contact"
              className="bg-yellow-500 text-black font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transform transition"
            >
              Contact Us
            </Link>
            <Link
              to="/services"
              className="border border-yellow-500 text-yellow-500 font-bold px-8 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-yellow-500 opacity-30 rounded-full" aria-hidden="true"></div>
        <div className="absolute bottom-10 left-0 w-64 h-64 bg-white opacity-10 rounded-full" aria-hidden="true"></div>

        {/* Hero Image */}
        <div className="md:w-1/2 relative flex justify-center order-1 md:order-2">
          <img
            src={buildsigmaLogo}
            alt="BuildSigma Logo"
            width={300}
            height={300}
            loading="lazy"
            className="rounded-xl animate-pulse shadow-2xl object-contain transform hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
