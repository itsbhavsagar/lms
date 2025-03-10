import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import CourseCard from './CourseCard';
import { useTheme } from '@/context/ThemeContext';

const CategorySection = ({ category, courses }) => {
  const [expanded, setExpanded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { theme } = useTheme();
  const displayedCourses = expanded ? courses : courses.slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5 }}
      className={`pt-8 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <div className="flex justify-between items-center mb-6">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-2xl md:text-3xl font-bold border-l-4 border-primary pl-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          }`}
        >
          {category}
        </motion.h2>

        <div className="flex items-center text-sm text-gray-500">
          <span>{courses.length} courses</span>
        </div>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <AnimatePresence>
          {displayedCourses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </AnimatePresence>
      </motion.div>

      {courses.length > 4 && (
        <div className="text-center mt-8">
          <Button
            variant="outline"
            onClick={() => setExpanded(!expanded)}
            className="px-6"
          >
            {expanded ? 'Show Less' : `View All ${courses.length} Courses`}
          </Button>
        </div>
      )}
    </motion.section>
  );
};

export default CategorySection;
