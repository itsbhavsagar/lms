import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/context/ThemeContext';
import {
  Star,
  BookOpen,
  TrendingUp,
  Tag,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FeaturedCoursesSection = () => {
  const { theme } = useTheme();
  const scrollRef = useRef(null);

  const navigate = useNavigate();

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -280, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 280, behavior: 'smooth' });
    }
  };

  const featuredCourses = [
    {
      id: 1,
      title: 'Web Development Masterclass',
      instructor: 'John Smith',
      level: 'Intermediate',
      rating: 4.8,
      students: 5200,
      icon: <TrendingUp className='text-blue-600' size={24} />,
      description:
        'Master modern web technologies and build responsive applications.',
      image:
        'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tag: 'paid',
      price: '$89.99',
    },
    {
      id: 2,
      title: 'Data Science Fundamentals',
      instructor: 'Emily Chen',
      level: 'Beginner',
      rating: 4.7,
      students: 4800,
      icon: <BookOpen className='text-green-600' size={24} />,
      description:
        'Learn data analysis, visualization, and machine learning basics.',
      image:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tag: 'free',
      price: '$0.00',
    },
    {
      id: 3,
      title: 'Advanced Python Programming',
      instructor: 'Michael Johnson',
      level: 'Advanced',
      rating: 4.9,
      students: 6100,
      icon: <Star className='text-yellow-500' size={24} />,
      description:
        'Deep dive into advanced Python concepts and software engineering.',
      image:
        'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tag: 'paid',
      price: '$129.99',
    },
    {
      id: 4,
      title: 'UX/UI Design Principles',
      instructor: 'Sarah Johnson',
      level: 'Intermediate',
      rating: 4.8,
      students: 3900,
      icon: <BookOpen className='text-purple-600' size={24} />,
      description:
        'Create beautiful user interfaces with modern design principles.',
      image:
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tag: 'paid',
      price: '$79.99',
    },
    {
      id: 5,
      title: 'Mobile App Development',
      instructor: 'David Lee',
      level: 'Beginner',
      rating: 4.6,
      students: 4200,
      icon: <TrendingUp className='text-red-600' size={24} />,
      description: 'Build cross-platform mobile apps with React Native.',
      image:
        'https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tag: 'paid',
      price: '$99.99',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 100,
      },
    },
    hover: {
      y: -8,
      boxShadow:
        '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.1,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  return (
    <motion.section
      className={`container mx-auto px-4 py-12 overflow-hidden ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className='text-center mb-8' variants={headerVariants}>
        <h2 className='text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
          Unlock Your Potential
        </h2>
        <p className='text-gray-600 dark:text-gray-200 max-w-2xl mx-auto'>
          Every journey to mastery begins with a single step. Discover courses
          that will transform your skills and open new doors of opportunity.
        </p>
      </motion.div>

      <div className='relative'>
        <motion.button
          className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2 -ml-2 hidden md:flex items-center justify-center w-10 h-10'
          onClick={scrollLeft}
          variants={buttonVariants}
          initial='hidden'
          animate='visible'
          whileHover='hover'
          whileTap='tap'
          aria-label='Scroll left'
        >
          <ChevronLeft size={24} className='text-blue-600' />
        </motion.button>

        <motion.div
          ref={scrollRef}
          className='flex overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-hide'
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className='flex space-x-4 px-6 md:px-12'>
            {featuredCourses.map((course) => (
              <motion.div
                key={course._id}
                variants={cardVariants}
                whileHover='hover'
                className='snap-start shrink-0 w-64 sm:w-72 h-full'
              >
                <Card className='h-full flex flex-col overflow-hidden'>
                  <div className='relative h-36 overflow-hidden'>
                    <motion.div
                      className='absolute inset-0 bg-gray-200'
                      variants={imageVariants}
                    >
                      <motion.img
                        src={course.image}
                        alt={course.title}
                        className='w-full h-full object-cover'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        loading='lazy'
                      />
                    </motion.div>
                    <div className='absolute top-2 right-2'>
                      <Badge
                        variant={
                          course.tag === 'free' ? 'secondary' : 'destructive'
                        }
                        className={`font-semibold ${
                          course.tag === 'free' ? 'bg-green-500' : 'bg-blue-600'
                        }`}
                      >
                        {course.tag === 'free' ? 'FREE' : course.price}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className='flex-row items-center space-x-3 py-3'>
                    {course.icon}
                    <CardTitle className='text-base line-clamp-1'>
                      {course.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className='flex-grow py-0'>
                    <div className='space-y-3'>
                      <p className='text-xs text-gray-500 dark:text-gray-200 line-clamp-2'>
                        {course.description}
                      </p>
                      <div className='flex justify-between text-xs text-gray-500 dark:text-gray-200'>
                        <span className='flex items-center'>
                          <Tag className='h-3 w-3 mr-1' />
                          {course.level}
                        </span>
                        <span className='flex items-center'>
                          <Star
                            fill='currentColor'
                            className='h-3 w-3 mr-1 text-yellow-500'
                          />
                          {course.rating}
                        </span>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className='pt-2 pb-3'>
                    <Button
                      className='w-full dark:text-gray-200 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-sm py-1'
                      size='sm'
                    >
                      Explore Course
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.button
          className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2 -mr-2 hidden md:flex items-center justify-center w-10 h-10'
          onClick={scrollRight}
          variants={buttonVariants}
          initial='hidden'
          animate='visible'
          whileHover='hover'
          whileTap='tap'
          aria-label='Scroll right'
        >
          <ChevronRight size={24} className='text-blue-600' />
        </motion.button>
      </div>

      <motion.div
        className='text-center mt-6'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <Button
          variant='outline'
          className='border-blue-600 text-blue-600 hover:bg-blue-50'
          onClick={() => navigate('/course')}
        >
          View All Courses
        </Button>
      </motion.div>
    </motion.section>
  );
};

export default FeaturedCoursesSection;
