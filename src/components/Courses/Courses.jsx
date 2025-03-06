import React, { useState, useEffect, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import CourseHero from './CourseHero';
import CategorySection from './CategorySection';
import FilterBar from './FilterBar';
import { sampleCoursesData } from '../../data/sampleCoursesData';

const Courses = () => {
  const [coursesData, setCoursesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    priceRange: [0, 1000],
    rating: 0,
    duration: 'all',
  });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 800));
      setCoursesData(sampleCoursesData);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const coursesByCategory = React.useMemo(() => {
    if (!coursesData.length) return {};

    const filteredCourses = coursesData.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        course.description.toLowerCase().includes(filters.search.toLowerCase());
      const matchesPrice =
        course.price >= filters.priceRange[0] &&
        course.price <= filters.priceRange[1];
      const matchesRating = course.rating >= filters.rating;
      const matchesDuration =
        filters.duration === 'all' ||
        (filters.duration === 'short' && course.durationHours <= 5) ||
        (filters.duration === 'medium' &&
          course.durationHours > 5 &&
          course.durationHours <= 20) ||
        (filters.duration === 'long' && course.durationHours > 20);

      return matchesSearch && matchesPrice && matchesRating && matchesDuration;
    });

    return filteredCourses.reduce((acc, course) => {
      if (!acc[course.category]) {
        acc[course.category] = [];
      }
      acc[course.category].push(course);
      return acc;
    }, {});
  }, [coursesData, filters]);

  const { ref: loadMoreRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const [visibleCategories, setVisibleCategories] = useState(2);

  useEffect(() => {
    if (inView && Object.keys(coursesByCategory).length > visibleCategories) {
      const timer = setTimeout(() => {
        setVisibleCategories((prev) => prev + 1);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [inView, coursesByCategory, visibleCategories]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <CourseHero />

      <div className="container mx-auto px-4 pb-16">
        <FilterBar filters={filters} setFilters={setFilters} />

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-primary" />
          </div>
        ) : Object.keys(coursesByCategory).length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <h3 className="text-2xl font-bold text-gray-700">
              No courses match your filters
            </h3>
            <p className="mt-2 text-gray-500">
              Try adjusting your search criteria
            </p>
            <button
              className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              onClick={() =>
                setFilters({
                  search: '',
                  priceRange: [0, 1000],
                  rating: 0,
                  duration: 'all',
                })
              }
            >
              Reset Filters
            </button>
          </motion.div>
        ) : (
          <Suspense
            fallback={
              <div className="flex justify-center py-10">
                <Loader2 className="animate-spin" />
              </div>
            }
          >
            <div className="space-y-16">
              {Object.entries(coursesByCategory)
                .slice(0, visibleCategories)
                .map(([category, courses]) => (
                  <CategorySection
                    key={category}
                    category={category}
                    courses={courses}
                  />
                ))}
            </div>

            {Object.keys(coursesByCategory).length > visibleCategories && (
              <div ref={loadMoreRef} className="flex justify-center py-10">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            )}
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default Courses;
