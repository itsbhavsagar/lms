import React, { useState, useEffect, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import CourseHero from './CourseHero';
import CategorySection from './CategorySection';
import FilterBar from './FilterBar';
import axios from 'axios';
import API_BASE_URL from '../../config/api';
import { useCart } from '../../context/CartContext';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const { theme } = useTheme();
  const [coursesData, setCoursesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { showAuthDialog, setShowAuthDialog } = useCart();
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    search: '',
    priceRange: [0, 1000],
    rating: 0,
    duration: 'all',
  });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${API_BASE_URL}/api/courses`, {
          params: {
            search: filters.search,
            minPrice: filters.priceRange[0],
            maxPrice: filters.priceRange[1],
            rating: filters.rating,
            duration: filters.duration,
          },
        });
        setCoursesData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [filters]);

  const coursesByCategory = React.useMemo(() => {
    if (!coursesData.length) return {};

    return coursesData.reduce((acc, course) => {
      if (!acc[course.category]) {
        acc[course.category] = [];
      }
      acc[course.category].push(course);
      return acc;
    }, {});
  }, [coursesData]);

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
    <div
      className={`min-h-screen transition-colors ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-gray-900 to-gray-900 text-white'
          : 'bg-gradient-to-b from-white to-gray-50'
      }`}
    >
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
            <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300">
              No courses match your filters
            </h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Try adjusting your search criteria
            </p>
            <button
              className="mt-4 px-4 py-2 border-2 rounded-md transition-colors"
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
      <Dialog open={showAuthDialog} onOpenChange={setShowAuthDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Authentication Required</DialogTitle>
            <DialogDescription>
              Please log in or sign up to add courses to your cart.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button onClick={() => navigate('/login')}>Login</Button>
            <Button variant="outline" onClick={() => navigate('/signup')}>
              Sign Up
            </Button>
            <Button variant="ghost" onClick={() => setShowAuthDialog(false)}>
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Courses;
