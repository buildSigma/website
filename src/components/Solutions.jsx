import React from "react";
import { FaCloud, FaLaptopCode, FaTools, FaCog, FaUsers, FaRobot } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const expertiseList = [
  {
    title: "Custom Crafted Software Development",
    desc: "Designing tailored cross-platform software solutions that connect people, processes, and systems, we build applications that integrate seamlessly with existing infrastructure to enhance transparency, efficiency, and innovation.",
    icon: <FaLaptopCode className="text-6xl text-violet-500 animate-bounce" />, // code icon for development
  },
  {
    title: "Testing & Quality Assurance",
    desc: "Deliver reliable software with comprehensive testing and QA services. Leveraging automated and manual testing, we ensure functional and non-functional quality for optimal system performance and continuous delivery.",
    icon: <FaTools className="text-6xl text-pink-500 animate-pulse" />, // tools for QA
  },
  {
    title: "Support & Maintenance",
    desc: "Ensure seamless software performance with our support and maintenance services. We handle system updates, bug fixes, performance monitoring, and ongoing optimization to keep your applications running smoothly.",
    icon: <FaUsers className="text-6xl text-teal-500 animate-bounce" />, // users for support
  },
  {
    title: "Automation & DevOps",
    desc: "Boost business efficiency with our DevOps and automation services. Our agile teams streamline workflows, manage projects, and implement continuous integration to ensure smooth and reliable operations.",
    icon: <FaRobot className="text-6xl text-blue-400 animate-pulse" />, // robot for automation
  },
  {
    title: "Cloud Migration and Enablement",
    desc: "Seamlessly migrate your applications to the cloud with expert guidance on strategy and cost optimization. We integrate on-premise and cloud systems efficiently to ensure scalable, secure, and long-term operational success.",
    icon: <FaCloud className="text-6xl text-yellow-400 animate-bounce" />, // cloud for cloud migration
  },
  {
    title: "Business Architecture",
    desc: "Designing integrated business solutions that connect people, processes, and systems, we create applications that work seamlessly with existing infrastructure to enhance transparency, efficiency, and long-term innovation.",
    icon: <FaCog className="text-6xl text-green-400 animate-spin" />, // gear for business architecture
  },
];

const Solutions = () => {
  return (
    <section className="py-22 px-6 bg-black" id="solutions">
      <Helmet>
  {/* Title (under 60 chars) */}
  <title>Solutions | Software Development, QA, Cloud & DevOps</title>

  {/* Meta Description (150–160 chars) */}
  <meta
    name="description"
    content="BuildSigma provides solutions in software development, QA, support, DevOps, automation, cloud migration, and business architecture to drive efficiency and growth."
  />

  {/* Canonical */}
  <link rel="canonical" href="https://www.buildsigma.com/solutions" />

  {/* Open Graph */}
  <meta property="og:title" content="BuildSigma Solutions | Software, Cloud & DevOps" />
  <meta
    property="og:description"
    content="Explore BuildSigma's IT solutions — custom software, QA, DevOps, automation, cloud migration, and business architecture for scalable business success."
  />
  <meta property="og:url" content="https://www.buildsigma.com/solutions" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.buildsigma.com/assets/buildsigma-solutions-og.jpg" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="BuildSigma Solutions | Software, Cloud & DevOps" />
  <meta
    name="twitter:description"
    content="Discover BuildSigma's solutions — software development, QA, support, DevOps, automation, cloud migration & business architecture."
  />
  <meta name="twitter:image" content="https://www.buildsigma.com/assets/buildsigma-solutions-og.jpg" />
</Helmet>


      <h2 className="text-4xl font-bold text-center mb-16 text-white">
        Solutions
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {expertiseList.map((exp, i) => (
          <div
            key={i}
            className="bg-gradient-to-b from-gray-800 to-gray-700 p-10 rounded-2xl shadow-xl hover:shadow-violet-500/40 transition-transform transform hover:-translate-y-2"
          >
            <div className="flex flex-col items-start text-left">
              {/* Icon top-left */}
              <div className="bg-gray-900 p-5 rounded-full shadow-md mb-6">
                {exp.icon}
              </div>

              {/* Title left-aligned */}
              <h3 className="text-xl font-semibold text-white mb-3 leading-relaxed">
                {exp.title}
              </h3>

              {/* Description left-aligned */}
              <p className="text-gray-200 text-md leading-relaxed">
                {exp.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
