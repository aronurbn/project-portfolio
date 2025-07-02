import React from 'react';
import { motion } from 'framer-motion';
import proj1 from '../assets/landingpage.jpg';
import proj2 from '../assets/inventory.jpg';
import proj3 from '../assets/portfolio.jpg';

const projects = [
  {
    id: 1,
    title: 'Landing Page',
    image: proj1,
    description: 'A modern, responsive landing page using HTML, CSS, and Bootstrap.',
    demo: 'https://example.com/landing',
  },
  {
    id: 2,
    title: 'Inventory System',
    image: proj2,
    description: 'An inventory system built with React and Firebase for real-time management.',
    demo: 'https://example.com/inventory',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    image: proj3,
    description: 'My personal portfolio crafted with React and Tailwind CSS.',
    demo: 'https://example.com/portfolio',
  },
];

const Projects = () => (
  <motion.section
    id="projects"
    className="py-20 px-6 lg:px-12 bg-black text-gray-100"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    {/* Section Title */}
    <h2 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
      Projects
    </h2>
    <div className="w-20 h-1 bg-cyan-500 mx-auto mb-12 rounded" />

    {/* Project Grid */}
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
      {projects.map(({ id, title, image, description, demo }) => (
        <motion.div
          key={id}
          className="bg-[#111] rounded-xl border border-gray-700 hover:border-cyan-500 hover:scale-105 transition duration-300 overflow-hidden flex flex-col"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-400 text-sm mb-4">{description}</p>
            </div>
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-cyan-400 hover:underline font-medium"
            >
              🔗 View Demo
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Projects;
