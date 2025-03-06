import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star,
  BookOpen,
  TrendingUp,
  Tag,
  Users,
  Clock,
  Award,
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

const useMobileDetect = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

const CoursePreview = React.memo(
  ({ course, position, containerWidth }) => {
    const previewRef = useRef(null);
    const [previewPlacement, setPreviewPlacement] = useState('right');

    useEffect(() => {
      if (!previewRef.current) return;
      const cardIndex = position % 4;
      setPreviewPlacement(cardIndex === 3 ? 'left' : 'right');
    }, [position]);

    return (
      <motion.div
        ref={previewRef}
        initial={{
          opacity: 0,
          x: previewPlacement === 'right' ? 20 : -20,
          scale: 0.96,
        }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{
          opacity: 0,
          x: previewPlacement === 'right' ? 10 : -10,
          scale: 0.96,
        }}
        transition={{ duration: 0.2 }}
        className={`absolute top-0 z-30 w-64 bg-white rounded-lg shadow-xl border border-gray-200 ${
          previewPlacement === 'right' ? 'left-full ml-4' : 'right-full mr-4'
        }`}
      >
        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-bold text-md">{course.title}</h3>
            <p className="text-sm text-gray-700 mt-1">{course.description}</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center text-sm">
              <Clock className="h-4 w-4 mr-2 text-gray-500" />
              <span>8 weeks • 24 lessons</span>
            </div>
            <div className="flex items-center text-sm">
              <Award className="h-4 w-4 mr-2 text-gray-500" />
              <span>Certificate upon completion</span>
            </div>
            <div className="flex items-center text-sm">
              <Users className="h-4 w-4 mr-2 text-gray-500" />
              <span>{course.students.toLocaleString()} enrolled students</span>
            </div>
          </div>
          <div className="border-t pt-2">
            <h4 className="font-medium text-sm mb-2">What you'll learn:</h4>
            <ul className="text-xs space-y-1">
              <li className="flex items-start">
                <span className="text-green-500 mr-1">✓</span> Hands-on projects
                for real-world experience
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-1">✓</span> Access to
                exclusive community forums
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-1">✓</span> One-on-one
                feedback from experts
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.course.id === nextProps.course.id &&
      prevProps.position === nextProps.position &&
      prevProps.containerWidth === nextProps.containerWidth
    );
  }
);

const LazyLoadedCourseCard = React.memo(
  ({ course, index, isVisible, containerWidth }) => {
    const [showPreview, setShowPreview] = useState(false);
    const cardRef = useRef(null);
    const isMobile = useMobileDetect();

    const cardVariants = useMemo(
      () => ({
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            type: 'spring',
            stiffness: 100,
            delay: index * 0.1,
          },
        },
        hover: {
          scale: 1.03,
          zIndex: 10,
          boxShadow:
            '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
          transition: {
            duration: 0.2,
            ease: 'easeOut',
          },
        },
      }),
      [index]
    );

    const imageVariants = useMemo(
      () => ({
        hidden: { opacity: 0, scale: 1.2 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.8 },
        },
      }),
      []
    );

    const handleHoverStart = useCallback(() => {
      if (!isMobile) {
        setShowPreview(true);
      }
    }, [isMobile]);

    const handleHoverEnd = useCallback(() => {
      setShowPreview(false);
    }, []);

    return (
      <motion.div
        ref={cardRef}
        className="relative h-full"
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        whileHover="hover"
        variants={cardVariants}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      >
        <AnimatePresence>
          {showPreview && !isMobile && (
            <CoursePreview
              course={course}
              position={index}
              containerWidth={containerWidth}
            />
          )}
        </AnimatePresence>
        <Card className="h-full flex flex-col overflow-hidden">
          <div className="relative h-36 overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)]"
              variants={imageVariants}
            >
              {isVisible && (
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover p-1 rounded-2xl"
                  loading="lazy"
                />
              )}
            </motion.div>
            <div className="absolute top-2 right-2">
              <Badge
                variant={course.tag === 'free' ? 'secondary' : 'destructive'}
                className={`font-semibold text-xs ${
                  course.tag === 'free' ? 'bg-green-500' : 'bg-blue-600'
                }`}
              >
                {course.tag === 'free' ? 'FREE' : course.price}
              </Badge>
            </div>
          </div>
          <CardHeader className="flex-row items-center space-x-2 p-3">
            {course.icon}
            <CardTitle className="text-base line-clamp-1">
              {course.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow p-3 pt-0">
            <div className="space-y-2">
              <p className="text-xs text-gray-500 line-clamp-2">
                {course.description}
              </p>
              <div className="space-y-1">
                <p className="text-xs text-gray-500 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  {course.instructor}
                </p>
                <p className="text-xs text-gray-500 flex items-center">
                  <Tag className="h-3 w-3 mr-1" />
                  {course.level}
                </p>
              </div>
              <div className="flex items-center text-yellow-500">
                <Star fill="currentColor" size={14} />
                <span className="ml-1 text-gray-600 text-xs">
                  {course.rating} ({course.students.toLocaleString()})
                </span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-3 pt-0">
            <Button
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
              size="sm"
            >
              Explore Course
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.course.id === nextProps.course.id &&
      prevProps.index === nextProps.index &&
      prevProps.isVisible === nextProps.isVisible &&
      prevProps.containerWidth === nextProps.containerWidth
    );
  }
);

const FeaturedCoursesSection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isScrollView, setIsScrollView] = useState(false);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [visibleCards, setVisibleCards] = useState({});
  const observerRefs = useRef({});
  const scrollListenerRef = useRef(null);
  const activeObserversRef = useRef({});
  const resizeTimerRef = useRef(null);

  const featuredCourses = useMemo(
    () => [
      {
        id: 1,
        title: 'Web Development Masterclass',
        instructor: 'John Smith',
        level: 'Intermediate',
        rating: 4.8,
        students: 5200,
        icon: <TrendingUp className="text-blue-600" size={24} />,
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
        icon: <BookOpen className="text-green-600" size={24} />,
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
        icon: <Star className="text-yellow-500" size={24} />,
        description:
          'Deep dive into advanced Python concepts and software engineering.',
        image:
          'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tag: 'paid',
        price: '$129.99',
      },
      {
        id: 4,
        title: 'UI/UX Design Principles',
        instructor: 'Sarah Williams',
        level: 'Intermediate',
        rating: 4.6,
        students: 3800,
        icon: <BookOpen className="text-purple-600" size={24} />,
        description:
          'Learn modern design principles and create stunning user interfaces.',
        image:
          'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tag: 'paid',
        price: '$79.99',
      },
      {
        id: 5,
        title: 'Mobile App Development',
        instructor: 'David Lee',
        level: 'Intermediate',
        rating: 4.7,
        students: 4200,
        icon: <TrendingUp className="text-red-600" size={24} />,
        description: 'Build native mobile apps for iOS and Android platforms.',
        image:
          'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tag: 'paid',
        price: '$99.99',
      },
      {
        id: 6,
        title: 'Blockchain Fundamentals',
        instructor: 'Robert Wilson',
        level: 'Beginner',
        rating: 4.5,
        students: 3500,
        icon: <BookOpen className="text-orange-600" size={24} />,
        description:
          'Learn blockchain technology and cryptocurrency fundamentals.',
        image:
          'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tag: 'paid',
        price: '$79.99',
      },
    ],
    []
  );

  const updateWidthAndView = useCallback(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      setIsScrollView(window.innerWidth < 768);
    }
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.scrollWidth;
      const viewportWidth = scrollContainerRef.current.offsetWidth;
      setMaxScroll(containerWidth - viewportWidth);
    }
  }, []);

  useEffect(() => {
    updateWidthAndView();

    const handleResize = () => {
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);
      resizeTimerRef.current = setTimeout(updateWidthAndView, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);
    };
  }, [updateWidthAndView]);

  const setupIntersectionObservers = useCallback(() => {
    Object.values(activeObserversRef.current).forEach((observer) => {
      observer.disconnect();
    });

    activeObserversRef.current = {};

    const observer = new IntersectionObserver(
      (entries) => {
        const updatedVisibility = {};

        entries.forEach((entry) => {
          const id = entry.target.dataset.id;
          if (id) {
            updatedVisibility[id] = entry.isIntersecting;
          }
        });

        if (Object.keys(updatedVisibility).length > 0) {
          setVisibleCards((prev) => ({
            ...prev,
            ...updatedVisibility,
          }));
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    Object.entries(observerRefs.current).forEach(([id, element]) => {
      if (element) {
        observer.observe(element);
      }
    });

    activeObserversRef.current.main = observer;

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    return setupIntersectionObservers();
  }, [setupIntersectionObservers]);

  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current) return;

    if (scrollListenerRef.current) {
      cancelAnimationFrame(scrollListenerRef.current);
    }

    scrollListenerRef.current = requestAnimationFrame(() => {
      setScrollAmount(scrollContainerRef.current.scrollLeft);
      scrollListenerRef.current = null;
    });
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, {
        passive: true,
      });
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
      if (scrollListenerRef.current) {
        cancelAnimationFrame(scrollListenerRef.current);
      }
    };
  }, [handleScroll]);

  const scrollTo = useCallback(
    (direction) => {
      if (!scrollContainerRef.current) return;

      const viewport = scrollContainerRef.current.offsetWidth;
      const cardWidth = 280;
      const visibleCards = Math.floor(viewport / cardWidth);
      const scrollBy = Math.max(cardWidth, cardWidth * (visibleCards - 1));

      const currentPos = scrollContainerRef.current.scrollLeft;
      const newPosition =
        direction === 'left'
          ? Math.max(0, currentPos - scrollBy)
          : Math.min(maxScroll, currentPos + scrollBy);

      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      });
    },
    [maxScroll]
  );

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = useCallback((e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  }, []);

  const handleTouchMove = useCallback((e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;

    if (distance > 50) {
      scrollTo('right');
    } else if (distance < -50) {
      scrollTo('left');
    }
  }, [touchStart, touchEnd, scrollTo]);

  const setCardRef = useCallback((el, id) => {
    if (el) {
      observerRefs.current[id] = el;
      el.dataset.id = id;
    }
  }, []);

  const getActiveIndicator = useCallback(
    (index) => {
      if (!scrollContainerRef.current || maxScroll <= 0) return false;

      const scrollPercentage = scrollAmount / maxScroll;
      const cardCount = featuredCourses.length;
      const sectionSize = 1 / (cardCount - 2);

      const sectionStart = index * sectionSize;
      const sectionEnd = (index + 1) * sectionSize;

      return scrollPercentage >= sectionStart && scrollPercentage <= sectionEnd;
    },
    [scrollAmount, maxScroll, featuredCourses.length]
  );

  const headerVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: 'easeOut',
        },
      },
    }),
    []
  );

  const handleIndicatorClick = useCallback(
    (index) => {
      if (scrollContainerRef.current) {
        const position = (index / (featuredCourses.length - 1)) * maxScroll;
        scrollContainerRef.current.scrollTo({
          left: position,
          behavior: 'smooth',
        });
      }
    },
    [maxScroll, featuredCourses.length]
  );

  return (
    <motion.section
      ref={sectionRef}
      className="container mx-auto px-4 py-16 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-center mb-12"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl font-bold mb-4">Featured Courses</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our top-rated courses that can help you advance your skills
          and career.
        </p>
      </motion.div>
      {isScrollView ? (
        <div className="relative" ref={containerRef}>
          {scrollAmount > 10 && (
            <button
              onClick={() => scrollTo('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2 md:hidden focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Scroll left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}
          {scrollAmount < maxScroll - 10 && (
            <button
              onClick={() => scrollTo('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2 md:hidden focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Scroll right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {featuredCourses.map((course, index) => (
              <div
                key={course.id}
                ref={(el) => setCardRef(el, course.id)}
                className="flex-shrink-0 w-72 mx-2 snap-start"
                style={{ scrollSnapAlign: 'start' }}
              >
                <LazyLoadedCourseCard
                  course={course}
                  index={index}
                  isVisible={visibleCards[course.id] || false}
                  containerWidth={containerWidth}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 md:hidden">
            {featuredCourses.map((course, index) => (
              <motion.button
                key={course.id}
                onClick={() => handleIndicatorClick(index)}
                className="mx-1 focus:outline-none"
                aria-label={`Go to slide ${index + 1}`}
                initial={{ scale: 1 }}
                animate={{
                  scale: getActiveIndicator(index) ? 1.2 : 1,
                  opacity: getActiveIndicator(index) ? 1 : 0.6,
                }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`h-2 w-2 rounded-full ${
                    getActiveIndicator(index) ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              </motion.button>
            ))}
          </div>
        </div>
      ) : (
        <div
          ref={containerRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {featuredCourses.slice(0, 4).map((course, index) => (
            <div
              key={course.id}
              ref={(el) => setCardRef(el, course.id)}
              className="relative"
            >
              <LazyLoadedCourseCard
                course={course}
                index={index}
                isVisible={visibleCards[course.id] || false}
                containerWidth={containerWidth}
              />
            </div>
          ))}
        </div>
      )}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </motion.section>
  );
};

export default FeaturedCoursesSection;
