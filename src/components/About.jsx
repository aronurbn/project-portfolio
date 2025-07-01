import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiTailwindcss, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';


const skills = [
  { name: 'React', icon: <SiReact classname="text-cyan-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss classname="text-blue-400" />},
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <SiCss3 className="text-blue-600" /> },
];

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 px-8 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        About Me
      </h2>
      <div className="w-20 h-1 bg-cyan-500 mx-auto mb-8 rounded" />
      <p className="text-center text-gray-700 leading-relaxed text-lg mb-20">
        I am a frontend developer passionate about creating beautiful, responsive,
        and user-friendly websites using modern technologies like React, Tailwind CSS,
        and JavaScript.
      </p>

      {/* Skills Grid */}
      <div className="max-w-md mx-auto grid grid-cols-3 gap-8 text-center mt-12">
        {skills.map(({ name, icon }) => (
          <div key={name} className="flex flex-col items-center space-y-2">
            <div className="text-5xl">{icon}</div>
            <p className="text-gray-800 font-semibold">{name}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default About;
