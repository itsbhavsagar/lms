import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, BookOpen, Clock } from 'lucide-react';
import courses from '@/data/coursesData';

const CoursesPage = () => {
  const navigate = useNavigate();
  const [expandedCategories, setExpandedCategories] = useState({});

  const coursesByCategory = useMemo(() => {
    return courses.reduce((acc, course) => {
      if (!acc[course.category]) {
        acc[course.category] = [];
      }
      acc[course.category].push(course);
      return acc;
    }, {});
  }, []);

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const renderCourseCard = (course) => (
    <motion.div
      key={course.id}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
    >
      <Card className="h-full flex flex-col overflow-hidden">
        <CardHeader className="p-0">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <CardTitle>{course.title}</CardTitle>
            <CardDescription>{course.description}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  fill={i < Math.floor(course.rating) ? 'currentColor' : 'none'}
                  size={20}
                />
              ))}
              <span className="ml-2 text-gray-600">({course.rating})</span>
            </div>
            <span className="font-bold text-xl">${course.price}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="mr-2" size={16} />
            <span>{course.duration}</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            onClick={() => navigate(`/course/${course.id}`)}
          >
            <BookOpen className="mr-2" size={16} />
            Enroll Now
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );

  return (
    <div className="container mx-auto mt-20 p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Explore Our Courses
      </h1>

      {Object.entries(coursesByCategory).map(([category, categoryCourses]) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{category} Courses</h2>

          <div className="flex flex-wrap -mx-2">
            {categoryCourses
              .slice(0, expandedCategories[category] ? undefined : 4)
              .map(renderCourseCard)}
          </div>

          {categoryCourses.length > 4 && (
            <div className="text-center mt-6">
              <Button
                variant="outline"
                onClick={() => toggleCategory(category)}
              >
                {expandedCategories[category] ? 'Show Less' : `View All `}
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CoursesPage;
