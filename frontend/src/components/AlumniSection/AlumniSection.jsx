import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import alumniCompanyLogos from '../../data/alumniCompanyLogos';
import { useTheme } from '@/context/ThemeContext';

const leftImage = {
  src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop',
  alt: 'Our alumni in action',
};

const AlumniLogoSection = () => {
  const { theme } = useTheme();
  const containerRef = useRef(null);
  const scrollXControl = useAnimation();

  const duplicatedLogos = [...alumniCompanyLogos, ...alumniCompanyLogos];

  const startAnimation = () => {
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const contentWidth = containerWidth * 2;

    scrollXControl.start({
      x: [-contentWidth / 2, 0],
      transition: {
        duration: 15,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      },
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        startAnimation();
      }
    };

    window.addEventListener('resize', handleResize);
    startAnimation();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [scrollXControl]);

  const LogoItem = ({ logo, index }) => (
    <motion.div
      className="flex flex-col items-center justify-center mx-6 transition-all duration-300"
      whileHover={{ y: -10, scale: 1.1 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        type: 'spring',
        stiffness: 100,
      }}
    >
      <div className="w-24 h-24 flex items-center justify-center rounded-xl shadow-lg mb-3 ">
        <img
          src={logo.logo}
          alt={`${logo.name} logo`}
          className="h-16 w-auto object-contain"
          loading="lazy"
        />
      </div>
      <span className="text-sm font-medium text-gray-700">{logo.name}</span>
    </motion.div>
  );

  return (
    <div
      className={`py-16 overflow-hidden ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-blue-500  bg-clip-text text-transparent mb-2">
            Our Alumni Work At Top Companies
          </h2>
          <p className="text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">
            Join thousands of successful graduates who have landed positions at
            the world's most innovative companies.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="w-full md:w-1/3 flex-shrink-0 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <img
              src={leftImage.src}
              alt={leftImage.alt}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </motion.div>

          <div
            ref={containerRef}
            className="relative overflow-hidden w-full md:w-2/3"
            // onMouseEnter={() => scrollXControl.stop()}
            // onMouseLeave={() => startAnimation()}
          >
            <motion.div
              className="flex items-center py-8"
              animate={scrollXControl}
            >
              {duplicatedLogos.map((logo, index) => (
                <LogoItem
                  key={`${logo.name}-${index}`}
                  logo={logo}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniLogoSection;
