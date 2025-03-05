import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, PieChart, Zap, Briefcase, Globe } from 'lucide-react';

const LearningCategoriesSection = () => {
  const categories = [
    {
      name: 'Web Development',
      icon: <Code className="text-blue-600" size={48} />,
      description: 'Master frontend and backend technologies',
      courses: 42,
    },
    {
      name: 'Data Science',
      icon: <Database className="text-green-600" size={48} />,
      description: 'Learn analytics and machine learning',
      courses: 35,
    },
    {
      name: 'Business',
      icon: <Briefcase className="text-purple-600" size={48} />,
      description: 'Develop professional skills',
      courses: 28,
    },
    {
      name: 'Digital Marketing',
      icon: <PieChart className="text-orange-600" size={48} />,
      description: 'Grow your online presence',
      courses: 24,
    },
    {
      name: 'Languages',
      icon: <Globe className="text-teal-600" size={48} />,
      description: 'Learn global communication',
      courses: 18,
    },
    {
      name: 'Productivity',
      icon: <Zap className="text-yellow-600" size={48} />,
      description: 'Enhance personal efficiency',
      courses: 20,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Learning Categories</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore diverse learning paths tailored to your professional and
          personal growth.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="flex justify-center mb-4">{category.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
            <p className="text-gray-600 mb-4">{category.description}</p>
            <div className="text-sm text-blue-600">
              {category.courses} Available Courses
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LearningCategoriesSection;
