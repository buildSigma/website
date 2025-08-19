import React from "react";
import { Helmet } from "react-helmet-async";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCss3Alt,
  FaHtml5,
  FaAws,
  FaWordpress,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiLaravel,
  SiFlutter,
  SiKotlin,
  SiSwift,
  SiReact,
  SiPhp,
} from "react-icons/si";

const techGroups = [
   {
    heading: "CMS / WordPress",
    tools: [
      { name: "WordPress", icon: <FaWordpress className="text-blue-400 text-5xl" /> },
    ],
  },
  {
    heading: "Custom Web Solutions",
    tools: [
      { name: "React", icon: <FaReact className="text-sky-400 text-5xl" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
      { name: "Express", icon: <SiExpress className="text-gray-300 text-5xl" /> },
      { name: "Laravel", icon: <SiLaravel className="text-red-500 text-5xl" /> },
      { name: "PHP", icon: <SiPhp className="text-purple-600 text-5xl" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400 text-5xl" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
      { name: "AWS", icon: <FaAws className="text-yellow-400 text-5xl" /> },
    ],
  },
  {
    heading: "Mobile App",
    tools: [
      { name: "Android (Java, Kotlin)", icon: <SiKotlin className="text-purple-500 text-5xl" /> },
      { name: "iOS (Swift)", icon: <SiSwift className="text-blue-400 text-5xl" /> },
      { name: "(React Native)", icon: <SiReact className="text-sky-400 text-5xl" /> },
      { name: "Flutter", icon: <SiFlutter className="text-cyan-400 text-5xl" /> },
    ],
  },
  {
    heading: "Database",
    tools: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-5xl" /> },
      { name: "MySQL", icon: <FaDatabase className="text-purple-400 text-5xl" /> },
      { name: "PostgreSQL", icon: <FaDatabase className="text-blue-600 text-5xl" /> },
    ],
  },
 
];

const Technologies = () => {
  return (
    <section className="py-22 bg-black text-white" id="technologies">
      {/* SEO Metadata */}
      <Helmet>
  {/* Title (under 60 chars, keyword-rich) */}
  <title>Technologies | Web, Mobile, Cloud & Database Tools</title>

  {/* Meta Description (150–160 chars, natural flow) */}
  <meta
    name="description"
    content="BuildSigma works with leading technologies — React, Node.js, Express, Laravel, PHP, WordPress, Flutter, Kotlin, Swift, MongoDB, MySQL, PostgreSQL, and AWS."
  />

  {/* Canonical */}
  <link rel="canonical" href="https://www.buildsigma.com/technologies" />

  {/* Open Graph */}
  <meta property="og:title" content="BuildSigma Technologies | Web, Mobile & Cloud Tools" />
  <meta
    property="og:description"
    content="Explore the technologies we use: React, Node.js, Express, Laravel, PHP, WordPress, Flutter, Kotlin, Swift, MongoDB, MySQL, PostgreSQL, AWS and more."
  />
  <meta property="og:url" content="https://www.buildsigma.com/technologies" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.buildsigma.com/assets/buildsigma-technologies-og.jpg" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="BuildSigma Technologies | Web, Mobile & Cloud Tools" />
  <meta
    name="twitter:description"
    content="Discover BuildSigma's technology stack — React, Node.js, Laravel, WordPress, Flutter, Kotlin, Swift, MongoDB, MySQL, PostgreSQL, AWS and more."
  />
  <meta name="twitter:image" content="https://www.buildsigma.com/assets/buildsigma-technologies-og.jpg" />
</Helmet>


      <h2 className="text-3xl font-bold text-center mb-4">🚀 Technologies We Use</h2>
      
      <p className="text-center text-gray-300 max-w-3xl mx-auto mb-10">
        We specialize in a wide range of technologies — here’s a snapshot of what we use, and we adapt to client needs.
      </p>

      {techGroups.map((group, idx) => (
        <div key={idx} className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">{group.heading}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {group.tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-gray-800 rounded-2xl shadow-md hover:scale-110 transition-transform duration-300"
              >
                {tool.icon}
                <p className="mt-2 text-lg font-medium">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Technologies;
