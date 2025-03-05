import React from 'react';
import { motion } from 'framer-motion';
import { Star, BookOpen, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FeaturedCoursesSection = () => {
  const featuredCourses = [
    {
      id: 1,
      title: 'Web Development Masterclass',
      instructor: 'John Smith',
      level: 'Intermediate',
      rating: 4.8,
      students: 5200,
      icon: <TrendingUp className="text-blue-600" size={32} />,
    },
    {
      id: 2,
      title: 'Data Science Fundamentals',
      instructor: 'Emily Chen',
      level: 'Beginner',
      rating: 4.7,
      students: 4800,
      icon: <BookOpen className="text-green-600" size={32} />,
    },
    {
      id: 3,
      title: 'Advanced Python Programming',
      instructor: 'Michael Johnson',
      level: 'Advanced',
      rating: 4.9,
      students: 6100,
      icon: <Star className="text-yellow-500" size={32} />,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Featured Courses</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our top-rated courses that can help you advance your skills
          and career.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {featuredCourses.map((course) => (
          <motion.div
            key={course.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader className="flex-row items-center space-x-4 pb-2">
                {course.icon}
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">
                      Instructor: {course.instructor}
                    </p>
                    <p className="text-sm text-gray-500">
                      Level: {course.level}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-yellow-500">
                      <Star fill="currentColor" size={20} />
                      <span className="ml-2 text-gray-600">
                        {course.rating} ({course.students} students)
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <div className="p-4">
                <Button className="w-full">Explore Course</Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCoursesSection;
