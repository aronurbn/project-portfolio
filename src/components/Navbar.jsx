import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import portfolioIcon from '../assets/portfolio-icon.png';

const navLinks = ['hero', 'about', 'skills', 'projects', 'contact',];

const NavLinks = ({ onClick }) => (
  <>
    {navLinks.map((link) => (
      <Link
        key={link}
        to={link}
        smooth
        duration={500}
        onClick={onClick}
        className="hover:text-cyan-400 capitalize cursor-pointer text-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
        activeClass="text-cyan-400"
        spy={true}
      >
        {link === 'hero' ? 'Home' : link}
      </Link>
    ))}
    <a
      href="/BenIgnacioCV2024.pdf"
      download
      onClick={onClick}
      className="hover:text-cyan-400 capitalize cursor-pointer text-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
    >
      Download CV
    </a>
  </>
);

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && setNavOpen(false);
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : '';
  }, [navOpen]);

  const handleNavToggle = () => setNavOpen(!navOpen);
  const handleLinkClick = () => setNavOpen(false);

  return (
    <nav
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/60 shadow-md border-b border-gray-700 px-8 py-4 flex justify-between items-center"
      role="navigation"
      aria-label="Primary Navigation"
    >
      {/* Logo */}
      <h1 className="text-2xl font-bold flex items-center gap-2 cursor-pointer">
        <img src={portfolioIcon} alt="Logo" className="w-10 h-10" />
        <Link
          to="hero"
          smooth
          duration={500}
          className="focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          MyPortfolio
        </Link>
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 items-center">
        <NavLinks />
      </ul>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden z-50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        aria-label="Toggle navigation menu"
        aria-expanded={navOpen}
        aria-controls="mobile-menu"
        onClick={handleNavToggle}
      >
        {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Menu */}
      <motion.div
        id="mobile-menu"
        initial={{ x: '100%' }}
        animate={{ x: navOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-16 right-0 w-full bg-black text-white flex flex-col items-center space-y-6 py-10 md:hidden z-40"
        aria-hidden={!navOpen}
      >
        <NavLinks onClick={handleLinkClick} />
      </motion.div>
    </nav>
  );
};

export default Navbar;
