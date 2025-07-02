import React from 'react';
import { motion } from 'framer-motion';

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

      <p className="text-center text-gray-700 leading-relaxed text-lg">
        I am a frontend developer passionate about creating beautiful, responsive,
        and user-friendly websites using modern technologies like React, Tailwind CSS,
        and JavaScript. I enjoy bringing ideas to life in the browser and continuously learning
        new technologies to improve my craft.
      </p>
    </motion.section>
  );
};

export default About;
