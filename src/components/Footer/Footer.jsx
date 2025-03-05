import React from 'react';
import { motion } from 'framer-motion';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  GraduationCap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, url: '#', color: 'text-blue-600' },
    { icon: Twitter, url: '#', color: 'text-sky-400' },
    { icon: Linkedin, url: '#', color: 'text-blue-700' },
    { icon: Instagram, url: '#', color: 'text-pink-500' },
  ];

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', url: '/' },
      { name: 'Courses', url: '/courses' },
      { name: 'About Us', url: '/about' },
      { name: 'Contact', url: '/contact' },
    ],
    Learning: [
      { name: 'Programs', url: '/programs' },
      { name: 'Certificates', url: '/certificates' },
      { name: 'Tutorials', url: '/tutorials' },
      { name: 'Resources', url: '/resources' },
    ],
    Community: [
      { name: 'Mentors', url: '/mentors' },
      { name: 'Students', url: '/students' },
      { name: 'Blog', url: '/blog' },
      { name: 'Careers', url: '/careers' },
    ],
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white py-16"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div whileHover={{ scale: 1.05 }} className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="text-blue-500" size={32} />
              <h2 className="text-2xl font-bold">LearnHub</h2>
            </div>
            <p className="text-gray-400">
              Empowering learners worldwide with accessible and transformative
              education.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ scale: 1.2, rotate: 5 }}
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-700">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{
                      x: 10,
                      color: '#3B82F6',
                      transition: { duration: 0.2 },
                    }}
                  >
                    <a
                      href={link.url}
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-700">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for latest courses and updates
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white p-2 rounded-r-md hover:bg-blue-700"
              >
                <Mail size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500"
        >
          © {new Date().getFullYear()} LearnHub. All Rights Reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
