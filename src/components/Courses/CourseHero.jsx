import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Users } from 'lucide-react';

const CourseHero = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Unlock Your Potential
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Discover courses designed to transform your skills and propel your
            career forward. Learn from industry experts at your own pace.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-10 mt-12">
            <motion.div
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              <BookOpen className="w-12 h-12 mb-3" />
              <span className="text-2xl font-bold">300+</span>
              <span>Courses</span>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              <Award className="w-12 h-12 mb-3" />
              <span className="text-2xl font-bold">Expert</span>
              <span>Instructors</span>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              <Users className="w-12 h-12 mb-3" />
              <span className="text-2xl font-bold">50,000+</span>
              <span>Students</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseHero;
