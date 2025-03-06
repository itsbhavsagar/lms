import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Users, Clock, BookOpen, Award } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: {
      y: -8,
      boxShadow:
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: { type: 'spring', stiffness: 300 },
    },
  };

  const formatPrice = (price) => {
    if (price === 0) return 'Free';
    return `$${price.toFixed(2)}`;
  };

  return (
    <motion.div variants={cardVariants} whileHover="hover" layout>
      <Card className="h-full flex flex-col overflow-hidden border-0 shadow-lg bg-white relative">
        {course.isPopular && (
          <Badge className="absolute top-3 right-3 z-10 bg-yellow-500 hover:bg-yellow-600">
            Popular
          </Badge>
        )}

        {course.isBestseller && (
          <Badge className="absolute top-3 right-3 z-10 bg-orange-500 hover:bg-orange-600">
            Bestseller
          </Badge>
        )}

        <div className="relative">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-48 object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy" // Native lazy loading
          />

          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black/60 to-transparent" />

          <div className="absolute bottom-2 left-3 flex items-center">
            <Badge variant="secondary" className="bg-white/90 text-black">
              {course.level}
            </Badge>
          </div>
        </div>

        <CardHeader className="p-4 pb-2">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-lg line-clamp-2 h-12">
              {course.title}
            </h3>
          </div>
        </CardHeader>

        <CardContent className="flex-grow p-4 pt-0">
          <p className="text-gray-600 text-sm line-clamp-2 mb-3 h-10">
            {course.description}
          </p>

          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center space-x-1 text-yellow-500">
              <Star className="fill-current h-4 w-4" />
              <span className="font-bold">{course.rating.toFixed(1)}</span>
              <span className="text-gray-500 text-xs">({course.reviews})</span>
            </div>
            <div className="text-gray-600 text-sm flex items-center">
              <Users className="h-3 w-3 mr-1" />
              <span>{course.students.toLocaleString()}</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="h-3 w-3 mr-1" />
              <span>{course.duration}</span>
            </div>
            {course.certification && (
              <div className="flex items-center text-sm text-gray-600">
                <Award className="h-3 w-3 mr-1" />
                <span>Certificate</span>
              </div>
            )}
          </div>
        </CardContent>

        <div className="px-4 pb-1">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl text-primary">
              {formatPrice(course.price)}
            </div>
            {course.originalPrice > course.price && (
              <div className="text-gray-500 line-through text-sm">
                ${course.originalPrice}
              </div>
            )}
          </div>
        </div>

        <CardFooter className="p-4 pt-2">
          <Button
            className="w-full"
            onClick={() => navigate(`/courses/${course.id}`)}
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Enroll Now
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CourseCard;
