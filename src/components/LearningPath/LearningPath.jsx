import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const LearningPathSection = () => {
  const [selectedPath, setSelectedPath] = useState('Web Development');

  const learningPaths = {
    'Web Development': [
      { title: 'HTML & CSS Fundamentals', completed: true },
      { title: 'JavaScript Basics', completed: true },
      { title: 'React.js Intermediate', completed: false },
      { title: 'Advanced Frontend Frameworks', completed: false },
      { title: 'Full Stack Development', completed: false },
    ],
    'Data Science': [
      { title: 'Python Programming', completed: true },
      { title: 'Statistics Fundamentals', completed: true },
      { title: 'Machine Learning Basics', completed: false },
      { title: 'Deep Learning', completed: false },
      { title: 'AI & Neural Networks', completed: false },
    ],
  };

  const paths = Object.keys(learningPaths);

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Personalized Learning Paths</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Follow curated learning paths designed to take you from beginner to
          expert.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4 space-y-4">
          {paths.map((path) => (
            <Button
              key={path}
              variant={selectedPath === path ? 'default' : 'outline'}
              className="w-full justify-start"
              onClick={() => setSelectedPath(path)}
            >
              {path}
            </Button>
          ))}
        </div>

        <div className="md:w-3/4">
          <motion.div
            key={selectedPath}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-6">{selectedPath} Path</h3>
            <div className="space-y-4">
              {learningPaths[selectedPath].map((course, index) => (
                <div key={course.title} className="flex items-center space-x-4">
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className={`${
                          course.completed ? 'text-gray-800' : 'text-gray-500'
                        }`}
                      >
                        {course.title}
                      </span>
                      {course.completed ? (
                        <Check className="text-green-500" size={20} />
                      ) : (
                        <Lock className="text-gray-400" size={20} />
                      )}
                    </div>
                    <Progress
                      value={course.completed ? 100 : 50}
                      className="h-2"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button>Continue Learning</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LearningPathSection;
