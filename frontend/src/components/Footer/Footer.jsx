import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
  BookOpen,
} from 'lucide-react';

const Footer = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const [hoveredLink, setHoveredLink] = useState(null);

  const socialLinks = [
    { icon: Facebook, url: '#', color: 'text-blue-500' },
    { icon: Twitter, url: '#', color: 'text-sky-400' },
    { icon: Linkedin, url: '#', color: 'text-blue-600' },
    { icon: Instagram, url: '#', color: 'text-pink-500' },
  ];

  const footerLinks = {
    Platform: [
      { name: 'Courses', url: '/courses' },
      { name: 'Programs', url: '/programs' },
      { name: 'Resources', url: '/resources' },
    ],
    Company: [
      { name: 'About', url: '/about' },
      { name: 'Careers', url: '/careers' },
      { name: 'Contact', url: '/contact' },
    ],
    Community: [
      { name: 'Blog', url: '/blog' },
      { name: 'Forums', url: '/forums' },
      { name: 'Events', url: '/events' },
    ],
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='  dark:text-gray-900 py-16'
    >
      <div
        className={`container mx-auto px-4 ${
          isDarkMode ? 'bg-gray-900 text-white' : ' text-gray-800'
        }`}
      >
        <div className='grid md:grid-cols-4 gap-8'>
          <motion.div whileHover={{ scale: 1.05 }} className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <BookOpen className='text-blue-500' size={32} />
              <h2 className='text-2xl font-bold'>LearnHub</h2>
            </div>
            <p className=' dark:text-gray-200 text-sm'>
              Empowering learning through innovative digital experiences.
            </p>
            <div className='flex space-x-3'>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{
                    scale: 1.2,
                    rotateY: 20,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`${social.color} hover:opacity-80`}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className='space-y-4'
            >
              <h3 className='text-xl font-semibold mb-4 border-b pb-2 border-gray-700'>
                {category}
              </h3>
              <ul className='space-y-2'>
                {links.map((link) => (
                  <motion.li
                    key={link.name}
                    onHoverStart={() => setHoveredLink(link.name)}
                    onHoverEnd={() => setHoveredLink(null)}
                    whileHover={{
                      x: 10,
                      scale: 1.05,
                      rotateX: 10,
                      transition: { duration: 0.2 },
                    }}
                    className={`transform transition-all duration-300 ${
                      hoveredLink === link.name ? 'pl-4' : ''
                    }`}
                  >
                    <a
                      href={link.url}
                      className='text-gray-500 hover:text-blue-500'
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className='space-y-4'
          >
            <h3 className='text-xl font-semibold mb-4 border-b pb-2 border-gray-700'>
              Stay Updated
            </h3>
            <div className='flex'>
              <input
                type='email'
                placeholder='Enter your email'
                className='w-full p-2 dark:bg-gray-900 border-2  dark:text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              <motion.button
                whileHover={{
                  scale: 1.1,
                  rotateY: -20,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
                className='bg-blue-600 dark:text-gray-200 p-2 rounded-r-md hover:bg-blue-700'
              >
                <Send size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className='mt-12 pt-6 border-t border-gray-800 text-center text-gray-500'
        >
          © {new Date().getFullYear()} LearnHub. All Rights Reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
