import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import CategoryCard from './CategoryCard';
import categories from '../../data/categories';
import {
  cardVariants,
  floatingVariants,
  getGradientFromColor,
} from '../../utils/animations';

const LearningCategoriesSection = () => {
  const scrollContainerRef = useRef(null);

  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -right-16 -top-16 w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-xl"></div>
        <div className="absolute -left-16 -bottom-16 w-56 h-56 bg-gradient-to-tr from-yellow-500 to-green-500 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left mb-6 lg:mb-8"
        >
          <h2 className="text-3xl text-center font-bold mb-3 tracking-tight bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent">
            Learning Categories
          </h2>
          <p className="text-[#010D3E] tracking-tight max-w-md mx-auto lg:mx-0">
            Explore diverse learning paths tailored to your professional and
            personal growth.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/4 lg:pr-8 hidden lg:block">
            <div className="sticky top-24">
              <p className="text-sm text-[#010D3E] tracking-tight mb-4">
                Browse through our curated selection of courses designed to help
                you advance your career or explore new interests.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium"
              >
                View All Categories
              </motion.button>
            </div>
          </div>

          <div className="lg:w-3/4">
            <div className="lg:hidden relative">
              <motion.div
                className="absolute -right-2 top-1/2 transform -translate-y-1/2 z-20 rounded-full bg-white shadow-lg p-2 text-blue-500"
                initial={{ opacity: 0.7, x: 0 }}
                animate={{ opacity: [0.7, 1, 0.7], x: [-5, 0, -5] }}
                transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </motion.div>
              <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  WebkitOverflowScrolling: 'touch',
                }}
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
                <div className="flex-none w-8"></div>
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-5">
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

            {/* Mobile Button */}
            <div className="mt-8 text-center lg:hidden">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium"
              >
                View All Categories
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningCategoriesSection;
