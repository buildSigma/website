import React, { useRef, useEffect } from "react";
import { FaLaptopCode, FaUsers, FaChartLine, FaCloud, FaLock, FaRobot } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import bgVideo from "../assets/globe2.mp4";

const services = [
  { icon: <FaLaptopCode className="text-yellow-500 text-4xl mb-4" />, title: "Product Development", desc: "End-to-End product development, including web and mobile app development, delivering scalable and innovative solutions that drive business growth." },
  { icon: <FaRobot className="text-yellow-500 text-4xl mb-4" />, title: "AI & Automation", desc: "Leverage AI and automation to optimize your workflows, reduce costs, and boost productivity across your business operations." },
  { icon: <FaUsers className="text-yellow-500 text-4xl mb-4" />, title: "Digital Marketing", desc: "Promoting your products and services online through targeted digital marketing campaigns that drive website traffic, increase engagement, and boost conversions." },
  { icon: <FaChartLine className="text-yellow-500 text-4xl mb-4" />, title: "Advisory & Consulting", desc: "Provide expert IT consulting and advisory services to help businesses solve technology challenges, optimize operations, and achieve strategic goals." },
  { icon: <FaCloud className="text-yellow-500 text-4xl mb-4" />, title: "Cloud Solutions & Services", desc: "Providing cloud solutions and cloud computing services, designing scalable cloud infrastructures that enhance security, flexibility, and cost efficiency for modern businesses." },
  { icon: <FaLock className="text-yellow-500 text-4xl mb-4" />, title: "Cybersecurity", desc: "Protect your business with comprehensive cybersecurity services, including network security, risk assessments, data protection, and advanced IT security solutions." }
];

const Services = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.9;
    }
  }, []);

  return (
    <section className="relative py-32 px-6 overflow-hidden" id="services">
      <Helmet>
  {/* Page Title */}
  <title>Services | Web, App, AI, Cloud & Cybersecurity Solutions</title>

  {/* Meta Description (SEO-friendly length: ~150–160 chars) */}
  <meta
    name="description"
    content="Discover BuildSigma's IT services — web & app development, AI & automation, digital marketing, consulting, cloud solutions, and cybersecurity for modern businesses."
  />

  {/* Canonical URL */}
  <link rel="canonical" href="https://www.buildsigma.com/services" />

  {/* Open Graph (for Facebook, LinkedIn, WhatsApp) */}
  <meta property="og:title" content="BuildSigma Services | Web, App, AI, Cloud & Cybersecurity" />
  <meta
    property="og:description"
    content="From AI automation to secure cloud and cybersecurity, BuildSigma provides cutting-edge IT services to help businesses grow and scale."
  />
  <meta property="og:url" content="https://www.buildsigma.com/services" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.buildsigma.com/assets/buildsigma-services-og.jpg" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="BuildSigma Services | Web, App, AI, Cloud & Cybersecurity" />
  <meta
    name="twitter:description"
    content="Explore BuildSigma's services: product development, AI, automation, cloud, marketing & cybersecurity — designed for growth & security."
  />
  <meta name="twitter:image" content="https://www.buildsigma.com/assets/buildsigma-services-og.jpg" />
</Helmet>


      {/* Background Video */}
      <video
        ref={videoRef}
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/94"></div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-20 text-white text-center">
          Our Services
        </h2>

        <div className="grid gap-12 md:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={i}
              className="p-8 bg-gray-900/90 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col text-left"
            >
              {service.icon}
              <h3 className="text-2xl text-white font-semibold mb-3 break-words leading-relaxed">
                {service.title}
              </h3>
              <p className="text-gray-300 break-words leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
