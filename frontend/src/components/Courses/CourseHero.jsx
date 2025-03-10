import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Users } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const CourseHero = () => {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <>
      <div
        className={`relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 transition-colors mt-20 ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-slate-900 to-indigo-900 text-white'
            : 'bg-gradient-to-r from-indigo-600 to-blue-500 text-white'
        }`}
      >
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <svg
            className="absolute left-0 top-0 h-full"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path
              d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col md:flex-row md:items-center justify-between gap-8"
          >
            <motion.div variants={itemVariants} className="md:w-7/12">
              <motion.h1
                variants={itemVariants}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              >
                Explore Our Course Collection
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-lg opacity-90 mb-6 md:pr-8 "
              >
                From beginner to advanced, discover courses designed to enhance
                your skills and boost your career across multiple disciplines.
              </motion.p>
            </motion.div>

            <motion.div variants={itemVariants} className="md:w-5/12">
              <div
                className={`grid grid-cols-3 gap-4 p-5 rounded-xl ${
                  theme === 'dark'
                    ? 'bg-slate-800/50 backdrop-blur-sm border border-slate-700/50'
                    : 'bg-white/10 backdrop-blur-sm border border-white/20'
                }`}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center p-3 text-center"
                >
                  <BookOpen className="w-8 h-8 mb-2" />
                  <span className="text-xl md:text-2xl font-bold">450+</span>
                  <span className="text-sm opacity-80">Courses</span>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center p-3 text-center"
                >
                  <Award className="w-8 h-8 mb-2" />
                  <span className="text-xl md:text-2xl font-bold">50+</span>
                  <span className="text-sm opacity-80">Instructors</span>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center p-3 text-center"
                >
                  <Users className="w-8 h-8 mb-2" />
                  <span className="text-xl md:text-2xl font-bold">25k+</span>
                  <span className="text-sm opacity-80">Students</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CourseHero;
