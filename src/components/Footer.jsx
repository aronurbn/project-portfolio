import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-black text-gray-400 py-8 px-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p className="text-sm">&copy; {new Date().getFullYear()} Aron Urbano. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
