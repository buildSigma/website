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
        <title>Technologies | Web, Mobile, Database & CMS Tools</title>
        <meta
          name="description"
          content="Discover the technologies used by BuildSigma, including React, Node.js, Express, Laravel, PHP, MongoDB, MySQL, WordPress, Flutter, Kotlin, Swift, and more for web, mobile, and cloud solutions."
        />
        <link rel="canonical" href="https://www.buildsigma.com/technologies" />
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
