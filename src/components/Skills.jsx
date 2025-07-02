import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaFigma 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiExpress, SiFirebase, SiVercel 
} from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-400" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
  { name: 'Vercel', icon: <SiVercel className="text-white" /> },
  { name: 'GitHub', icon: <FaGithub className="text-white" /> },
  { name: 'Figma', icon: <FaFigma className="text-pink-500" /> },
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-16 px-6 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Skills & Tools
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl border border-gray-700 hover:border-cyan-500 hover:scale-105 transition"
          >
            <div className="text-5xl">{skill.icon}</div>
            <p className="text-lg text-gray-300">{skill.name}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
