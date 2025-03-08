import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Courses from './Courses/Courses';
import { useTheme } from '@/context/ThemeContext';

const Home = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1.0],
        delay: 0.6,
      },
    },
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  };

  return (
    <>
      <div
        className={`md:mt-12 mt-12 ${
          theme === 'dark'
            ? 'bg-gray-900 text-white'
            : 'bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)]'
        }`}
      >
        <motion.header
          initial='hidden'
          animate='visible'
          variants={heroVariants}
          className='container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-24 pb-12 sm:pb-16 relative overflow-hidden'
        >
          <motion.div
            className='absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-transparent opacity-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />

          <div className='flex flex-col lg:flex-row items-center justify-between'>
            {/* Left Content */}
            <div className='w-full lg:w-1/2 text-center lg:text-left'>
              <motion.h1
                className='text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 tracking-tight'
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
              >
                <span className='tracking-tight bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent dark:text-white'>
                  Learn Anything, Anytime, Anywhere
                </span>
                <motion.div
                  className='w-20 h-1 bg-blue-500 mx-auto lg:mx-0 mt-2 sm:mt-3'
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                />
              </motion.h1>

              <motion.p
                className='text-base sm:text-lg text-[#010D3E] tracking-tight mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed dark:text-gray-300'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
              >
                Discover a world of knowledge with our comprehensive online
                learning platform. Access courses from top instructors and
                transform your future.
              </motion.p>

              <motion.div
                className='flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    size='lg'
                    className='flex items-center'
                    onClick={() => navigate('/courses')}
                  >
                    Browse Courses <ChevronRight className='ml-2' />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button variant='secondary' size='lg'>
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              className='w-full lg:w-1/2 mt-12 lg:mt-0 px-4 sm:px-8 lg:px-4'
              variants={imageVariants}
              animate={['visible', floatingAnimation]}
            >
              <div className='relative'>
                <motion.div
                  className='absolute w-64 h-64 rounded-full bg-blue-200 opacity-30 -top-8 -right-8 z-0'
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />
                <motion.div
                  className='absolute w-32 h-32 rounded-full bg-indigo-200 opacity-40 bottom-12 -left-4 z-0'
                  animate={{
                    scale: [2, 1.3, 1],
                    rotate: [0, -15, 0],
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: 1,
                  }}
                />

                <motion.div
                  className='relative z-10 rounded-xl overflow-hidden shadow-2xl border-4 border-white'
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <img
                    src='https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200'
                    className='w-auto h-auto object-cover'
                    loading='lazy'
                  />

                  <div className='absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent pointer-events-none' />
                </motion.div>

                <motion.div
                  className='absolute top-6 -left-3 z-20 bg-white rounded-lg shadow-lg p-3'
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: 0.5,
                  }}
                >
                  <div className='w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold'>
                    A+
                  </div>
                </motion.div>

                <motion.div
                  className='absolute bottom-8 -right-4 z-20 bg-white rounded-lg shadow-lg p-2'
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: 1.5,
                  }}
                >
                  <div className='w-10 h-10 flex items-center justify-center'>
                    🚀
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.header>
      </div>
    </>
  );
};

export default Home;
