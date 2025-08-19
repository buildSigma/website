import React from "react";
import { Helmet } from "react-helmet-async";
import { FaUsers, FaHeadset, FaRocket, FaLightbulb } from "react-icons/fa";

const highlights = [
  {
    icon: <FaRocket className="text-yellow-500 text-5xl mb-4" />,
    title: "Exponential Business Growth",
    desc: "We deliver innovative strategies and technology solutions that help your business scale and outperform the competition.",
  },
  {
    icon: <FaLightbulb className="text-pink-500 text-5xl mb-4" />,
    title: "Innovative Tech Solutions",
    desc: "Cutting-edge solutions that drive digital growth and business transformation.",
  },
  {
    icon: <FaUsers className="text-green-500 text-5xl mb-4" />,
    title: "Expert Team",
    desc: "Our skilled professionals provide bespoke services and actionable insights to empower your business.",
  },
  {
    icon: <FaHeadset className="text-blue-500 text-5xl mb-4" />,
    title: "24/7 Support",
    desc: "We ensure continuous assistance and prompt responses to keep your operations seamless and reliable.",
  },
];

const AboutUs = () => {
  return (
    <section className="py-23 px-6 bg-black text-white" id="aboutus">
      {/* SEO Metadata */}
      <Helmet>
  <title>About BuildSigma | Web Solutions Consultancy & IT Experts</title>
  <meta
    name="description"
    content="BuildSigma is a trusted web solutions consultancy offering innovative IT services, expert teams, and 24/7 support to drive business growth and digital transformation."
  />
  <link rel="canonical" href="https://www.buildsigma.com/aboutus" />
  <meta 
    name="keywords" 
    content="BuildSigma, web solutions consultancy, IT services, business growth, expert team, 24/7 support, digital transformation, innovative technology" 
  />
  <meta property="og:title" content="About BuildSigma | Web Solutions Consultancy & IT Experts" />
  <meta property="og:description" content="Partner with BuildSigma for innovative IT solutions, expert consulting, and 24/7 support to accelerate business growth." />
  <meta property="og:url" content="https://www.buildsigma.com/aboutus" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.buildsigma.com/assets/og-image.jpg" />
</Helmet>


      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-gray-300 text-lg">
          Innovative, Reliable, andd Expert-Driven Solutions to Elevate your Business.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {highlights.map((item, i) => (
          <div
            key={i}
            className="p-8 bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            {item.icon}
            <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
