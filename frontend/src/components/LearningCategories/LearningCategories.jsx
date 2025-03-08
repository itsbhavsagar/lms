import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import CategoryCard from './CategoryCard';
import categories from '../../data/categories';
import { useTheme } from '@/context/ThemeContext';
import {
  cardVariants,
  floatingVariants,
  getGradientFromColor,
} from '../../utils/animations';

const LearningCategoriesSection = () => {
  const { theme } = useTheme();
  const scrollContainerRef = useRef(null);

  return (
    <section
      className={`container mx-auto px-4 py-12 overflow-hidden relative transition-colors duration-300
        ${
          theme === 'dark'
            ? 'bg-gray-900 text-white'
            : 'bg-gray-50 text-[#010D3E]'
        }`}
    >
      <div className='absolute inset-0 overflow-hidden opacity-10'>
        <div
          className={`absolute -right-16 -top-16 w-48 h-48 rounded-full blur-xl
            ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-gray-700 to-gray-500'
                : 'bg-gradient-to-br from-blue-500 to-purple-500'
            }`}
        ></div>
        <div
          className={`absolute -left-16 -bottom-16 w-56 h-56 rounded-full blur-xl
            ${
              theme === 'dark'
                ? 'bg-gradient-to-tr from-gray-800 to-gray-600'
                : 'bg-gradient-to-tr from-yellow-500 to-green-500'
            }`}
        ></div>
      </div>

      <div className='relative z-10 text-center mb-6 lg:mb-8'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-4xl font-bold mb-3 tracking-tight
            ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-gray-200 to-gray-400 text-transparent bg-clip-text'
                : 'bg-gradient-to-r from-indigo-600 to-blue-500 text-transparent bg-clip-text'
            }`}
        >
          Learning Categories
        </motion.h2>
        <p className='tracking-tight max-w-md mx-auto'>
          Explore diverse learning paths tailored to your professional and
          personal growth.
        </p>
      </div>

      <div className='flex flex-col lg:flex-row gap-6'>
        <motion.div
          className='lg:w-1/4 hidden lg:block'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='sticky top-24'>
            <h3 className='text-xl font-semibold mb-3'>Ignite Your Future</h3>
            <p className='text-sm tracking-tight mb-4 leading-relaxed'>
              Unlock your potential with courses crafted to elevate your skills
              and fuel your career.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium'
            >
              View All Categories
            </motion.button>
          </div>
        </motion.div>

        <div className='lg:w-3/4'>
          <div className='lg:hidden relative'>
            <div
              ref={scrollContainerRef}
              className='flex overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory'
            >
              {categories.map((category, index) => (
                <CategoryCard
                  key={category.name}
                  category={category}
                  index={index}
                  cardVariants={cardVariants}
                  floatingVariants={floatingVariants}
                  getGradientFromColor={getGradientFromColor}
                />
              ))}
            </div>
          </div>

          <div className='hidden lg:grid lg:grid-cols-3 gap-5'>
            {categories.map((category, index) => (
              <CategoryCard
                key={category.name}
                category={category}
                index={index}
                cardVariants={cardVariants}
                floatingVariants={floatingVariants}
                getGradientFromColor={getGradientFromColor}
              />
            ))}
          </div>

          <div className='mt-6 text-center lg:hidden'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium'
            >
              View All Categories
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningCategoriesSection;
