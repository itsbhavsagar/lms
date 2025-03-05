import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Course from './Course';

const Home = () => {
  const navigate = useNavigate();

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
    },
  };

  return (
    <>
      <div className="bg-gray-50 md:mt-12 mt-12">
        <motion.header
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-24 pb-12 sm:pb-16 text-center relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-transparent opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          >
            <span className="tracking-tight bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent">
              Learn Anything, Anytime, Anywhere
            </span>
            <motion.div
              className="w-20 h-1 bg-blue-500 mx-auto mt-2 sm:mt-3"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            />
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-[#010D3E] tracking-tight mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          >
            Discover a world of knowledge with our comprehensive online learning
            platform. Access courses from top instructors and transform your
            future.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
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
                size="lg"
                className="flex items-center"
                onClick={() => navigate('/course')}
              >
                Browse Courses <ChevronRight className="ml-2" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button variant="secondary" size="lg">
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </motion.header>
      </div>
    </>
  );
};

export default Home;
