import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const socialLinks = [
  { name: 'LinkedIn', icon: <FaLinkedin />, href: 'https://linkedin.com/in/yourprofile' },
  { name: 'GitHub', icon: <FaGithub />, href: 'https://github.com/aronurbn' },
  { name: 'Facebook', icon: <FaFacebook />, href: 'https://facebook.com/aron.urbano' },
  { name: 'Email', icon: <MdEmail />, href: 'mailto:aronurbano111@gmail.com' }
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const tempErrors = {};
    if (!form.name.trim()) tempErrors.name = 'Name is required';
    if (!form.email.trim()) tempErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) tempErrors.email = 'Invalid email address';
    if (!form.message.trim()) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (validate()) {
    try {
      const response = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        alert(data.error || 'Failed to send message');
      }
    } catch (error) {
      alert('Failed to send message');
    }
  }
};


  return (
    <motion.section
      id="contact"
      className="max-w-3xl mx-auto py-16 px-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Contact Me
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Reach me via social media or send me a message directly.
      </p>

      {/* Social Links */}
      <div className="flex justify-center space-x-8 mb-12 text-gray-700 text-2xl">
        {socialLinks.map(({ name, icon, href }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="hover:text-cyan-500 transition"
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className={`w-full border rounded-md px-4 py-2 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
              errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            }`}
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && <p id="name-error" className="text-red-500 mt-1 text-sm">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={`w-full border rounded-md px-4 py-2 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
              errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            }`}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && <p id="email-error" className="text-red-500 mt-1 text-sm">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            className={`w-full border rounded-md px-4 py-2 resize-none bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
              errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            }`}
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && <p id="message-error" className="text-red-500 mt-1 text-sm">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-cyan-500 text-white font-medium py-3 rounded-md hover:bg-cyan-600 transition"
        >
          Send Message
        </button>

        {submitted && (
          <p className="text-center text-green-600 mt-4 font-medium">
            Thank you for your message! I will get back to you soon.
          </p>
        )}
      </form>
    </motion.section>
  );
};

export default Contact;
