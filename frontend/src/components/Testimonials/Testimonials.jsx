import React, { useRef, useEffect, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
const TestimonialsSection = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer at Microsoft',
      quote:
        'This platform completely transformed my coding skills. The structured courses and expert instructors made learning complex concepts so much easier.',
      image:
        'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager at Google',
      quote:
        'I was able to advance my career by learning product management strategies through their comprehensive courses. Highly recommended!',
      image:
        'https://images.pexels.com/photos/5648100/pexels-photo-5648100.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Data Scientist at Netflix',
      quote:
        'The data science learning path was instrumental in helping me transition into a new field. The support and resources are top-notch.',
      image:
        'https://images.pexels.com/photos/5699868/pexels-photo-5699868.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      name: 'David Kim',
      role: 'UX Designer at Apple',
      quote:
        'I learned the fundamentals of UX design here and it helped me land my dream job. The project-based approach gave me a strong portfolio.',
      image:
        'https://images.pexels.com/photos/6238089/pexels-photo-6238089.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      name: 'Lisa Patel',
      role: 'Cloud Architect at Amazon',
      quote:
        'The cloud computing courses were comprehensive and up-to-date with industry standards. I was able to get AWS certified and move into a senior role.',
      image:
        'https://images.pexels.com/photos/6567336/pexels-photo-6567336.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      name: 'James Wilson',
      role: 'Frontend Developer at Meta',
      quote:
        'The React courses were exactly what I needed to transition from vanilla JavaScript to modern frontend development. Worth every penny!',
      image:
        'https://images.pexels.com/photos/7752893/pexels-photo-7752893.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  const scrollContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState('right');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const { clientWidth } = container;
      let newIndex;

      if (direction === 'left') {
        newIndex =
          activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
      } else {
        newIndex =
          activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
      }

      setActiveIndex(newIndex);
      container.scrollTo({
        left: newIndex * (isMobile ? 288 : 384),
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        scroll(direction);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isPaused, activeIndex, direction]);

  useEffect(() => {
    const dirInterval = setInterval(() => {
      setDirection((prev) => (prev === 'right' ? 'left' : 'right'));
    }, 12000);

    return () => clearInterval(dirInterval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`relative container mx-auto px-4 py-16 overflow-hidden ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className='text-center mb-12'>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className='text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-blue-500  bg-clip-text text-transparent'
        >
          What Our Learners Say
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-gray-600 dark:text-gray-200 max-w-2xl mx-auto'
        >
          Hear from professionals at top tech companies who have transformed
          their careers with our learning platform.
        </motion.p>
      </div>
      <div className='relative'>
        <div className='absolute inset-0 overflow-hidden opacity-10'>
          <div className='absolute -right-16 -top-16 w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-xl'></div>
          <div className='absolute -left-16 -bottom-16 w-56 h-56 bg-gradient-to-tr from-yellow-500 to-green-500 rounded-full blur-xl'></div>
        </div>

        <button
          onClick={() => scroll('left')}
          className='absolute left-4 top-1/2 -translate-y-1/2 z-20  rounded-full p-2 shadow-md hover:bg-gray-100 dark:bg-gray-800 transition-colors'
          aria-label='Scroll left'
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <ChevronLeft size={24} />
        </button>

        <div
          ref={scrollContainerRef}
          className='flex overflow-x-auto pb-6 pt-2 gap-6 scrollbar-hide'
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className={` p-6 rounded-lg shadow-lg relative flex-shrink-0 ${
                isMobile ? 'w-72' : 'w-96'
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: activeIndex === index ? 1.02 : 1,
                boxShadow:
                  activeIndex === index
                    ? '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                    : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <motion.div
                initial={{ opacity: 0, rotate: -5 }}
                animate={{ opacity: 0.2, rotate: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Quote
                  className='absolute top-4 left-4 text-blue-100 dark:text-gray-200'
                  size={48}
                />
              </motion.div>
              <div className='text-center'>
                <p className='italic mb-6 relative z-10 text-gray-700 dark:text-gray-200'>
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <motion.div
                  className='flex items-center justify-center space-x-4 mt-6'
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className={`rounded-full object-cover border-2 border-blue-100 dark:border-white  ${
                      isMobile ? 'w-12 h-12' : 'w-16 h-16'
                    }`}
                  />
                  <div className='text-left'>
                    <h4 className='font-semibold text-blue-900 dark:text-gray-200'>
                      {testimonial.name}
                    </h4>
                    <p
                      className={`text-gray-500 dark:text-gray-300 ${
                        isMobile ? 'text-xs' : 'text-sm'
                      }`}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className='absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors'
          aria-label='Scroll right'
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </motion.section>
  );
};

export default TestimonialsSection;
