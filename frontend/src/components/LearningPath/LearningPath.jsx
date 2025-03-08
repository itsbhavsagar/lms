import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { learningPaths } from '../../data/paths.js';
import { useTheme } from '@/context/ThemeContext.jsx';

const techIcons = {
  'Web Development': [
    { src: 'https://cdn.svgporn.com/logos/html-5.svg', alt: 'HTML' },
    { src: 'https://cdn.svgporn.com/logos/css-3.svg', alt: 'CSS' },
    { src: 'https://cdn.svgporn.com/logos/javascript.svg', alt: 'JavaScript' },
  ],
  'Data Science': [
    { src: 'https://cdn.svgporn.com/logos/python.svg', alt: 'Python' },
    { src: 'https://cdn.svgporn.com/logos/r-lang.svg', alt: 'R' },
    { src: 'https://cdn.svgporn.com/logos/tensorflow.svg', alt: 'TensorFlow' },
  ],
};

const leftContent = {
  image:
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2940&auto=format&fit=crop',
  heading: 'Launch Your Tech Career',
  quote: '"Success starts with one step."',
};

const LearningPathSection = () => {
  const { theme } = useTheme();
  const [selectedPath, setSelectedPath] = useState(
    Object.keys(learningPaths)[0]
  );

  const isDarkMode = theme === 'dark';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const courseVariants = {
    hidden: { opacity: 0, x: 15 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  const techIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <section
      className={`container mx-auto px-4 py-12 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className='flex flex-col lg:flex-row gap-6'>
        <motion.div
          className='lg:w-1/2 relative'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <motion.div
            className='relative'
            whileHover={{
              scale: 1.03,
              boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
            }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={leftContent.image}
              alt='Motivated learners'
              className='w-full h-full object-cover rounded-lg shadow-md mt-10'
              loading='lazy'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg' />
          </motion.div>
          <motion.div
            className='mt-4 text-center lg:text-left'
            variants={itemVariants}
          >
            <h2
              className={`text-2xl font-bold ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              } mb-2`}
            >
              {leftContent.heading}
            </h2>
            <p
              className={`text-base italic ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {leftContent.quote}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className='lg:w-1/2'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <div className='bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md'>
            <motion.h3
              className='text-xl font-semibold mb-4 text-gray-800 dark:text-white'
              variants={itemVariants}
            >
              {selectedPath}
            </motion.h3>

            <div className='flex flex-wrap gap-2 mb-4'>
              {Object.keys(learningPaths).map((path) => (
                <motion.button
                  key={path}
                  className={`py-1 px-3 text-sm rounded-full transition-all ${
                    selectedPath === path
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setSelectedPath(path)}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {path}
                </motion.button>
              ))}
            </div>

            <motion.div
              key={selectedPath}
              className='space-y-4'
              initial='hidden'
              animate='visible'
              variants={containerVariants}
            >
              {learningPaths[selectedPath].map((course, index) => (
                <motion.div
                  key={course.title}
                  className='flex items-center space-x-3 bg-gray-100 dark:bg-gray-700 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600'
                  custom={index}
                  variants={courseVariants}
                  whileHover={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                >
                  <div className='flex-grow'>
                    <div className='flex items-center justify-between mb-1'>
                      <div className='flex items-center space-x-2'>
                        <span
                          className={`text-sm font-medium ${
                            course.completed
                              ? 'text-gray-800 dark:text-white'
                              : 'text-gray-500 dark:text-gray-400'
                          }`}
                        >
                          {course.title}
                        </span>
                        {techIcons[selectedPath] &&
                          techIcons[selectedPath][
                            index % techIcons[selectedPath].length
                          ] && (
                            <motion.img
                              src={
                                techIcons[selectedPath][
                                  index % techIcons[selectedPath].length
                                ].src
                              }
                              alt={
                                techIcons[selectedPath][
                                  index % techIcons[selectedPath].length
                                ].alt
                              }
                              className='h-5 w-5 object-contain'
                              variants={techIconVariants}
                            />
                          )}
                      </div>
                      {course.completed ? (
                        <Check className='text-green-500' size={16} />
                      ) : (
                        <Lock className='text-gray-400' size={16} />
                      )}
                    </div>
                    <Progress
                      value={course.completed ? 100 : 50}
                      className='h-1.5'
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className='mt-4 text-center'>
              <Button className='bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 text-sm rounded-full'>
                Start Now
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningPathSection;
