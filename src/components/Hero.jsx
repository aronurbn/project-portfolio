import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Download, Mail } from 'lucide-react'; // Import Lucide icons
import profilePic from '../assets/profilepic.jpg';

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black marker:px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center max-w-4xl w-full">
        {/* Profile Image */}
        <img
          src={profilePic}
          alt="Aron Urbano"
          className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-cyan-500 shadow-lg"
        />

        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hi, I'm Aron Urbano
        </motion.h1>

        {/* Typewriter Text */}
        <motion.p
          className="text-base sm:text-lg text-white"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Typewriter
            words={['Frontend Developer', 'Web Designer', 'UI Enthusiast']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          className="flex justify-center items-center gap-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="/BenIgnacioCV2024.pdf"
            download
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-full text-white font-medium shadow-md transition hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-full font-medium shadow-md transition hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
