import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../../../config/api';
import { useCart } from '../../../context/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, User } from 'lucide-react';
import CourseDetails from './CourseDetails';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const SingleCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, removeFromCart, cart, showAuthDialog, setShowAuthDialog } =
    useCart();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchCourse = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_BASE_URL}/api/courses/${id}`, {
          signal: abortController.signal,
        });
        setCourse(response.data);
        setLoading(false);
      } catch (err) {
        if (!abortController.signal.aborted) {
          setError(
            err.response?.status === 404
              ? 'Course not found'
              : err.response?.data?.message || 'Failed to fetch course'
          );
          setLoading(false);
        }
      }
    };

    fetchCourse();
    window.scrollTo(0, 0);

    return () => abortController.abort();
  }, [id]);

  const toggleWishlist = () => setIsWishlisted(!isWishlisted);

  const discount = useMemo(() => {
    return course?.originalPrice
      ? Math.round(
          ((course.originalPrice - course.price) / course.originalPrice) * 100
        )
      : 0;
  }, [course?.originalPrice, course?.price]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl font-medium flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-blue-500 animate-pulse"></div>
          Loading course...
        </div>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen p-4">
        <div className="text-xl font-medium text-red-500 mb-4">
          Error: {error || 'Course not found'}
        </div>
        <Button onClick={() => navigate('/courses')}>Back to Courses</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-16 sm:mt-20">
      {/* Header Section */}
      <div className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-r from-blue-600 to-purple-600">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${course.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-8 sm:pb-12 md:pb-16 relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-3 md:mb-4">
            <Badge className="bg-white/20 border-none py-1 md:py-1.5 text-xs sm:text-sm">
              {course.category || 'Development'}
            </Badge>
            <Badge className="bg-yellow-500/90 border-none py-1 md:py-1.5 text-xs sm:text-sm flex items-center gap-1">
              <Star className="h-3 w-3 fill-white" />
              {course.rating} ({course.reviews} reviews)
            </Badge>
            <Badge className="bg-white/20 border-none py-1 md:py-1.5 text-xs sm:text-sm flex items-center gap-1">
              <User className="h-3 w-3" />
              {course.level}
            </Badge>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-2 sm:mb-4 max-w-4xl">
            {course.title}
          </h1>
          <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl">
            {course.shortDescription ||
              course.description.substring(0, 120) + '...'}
          </p>
        </div>
      </div>

      {/* Course Details */}
      <CourseDetails
        course={course}
        discount={discount}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isAddingToCart={isAddingToCart}
        setIsAddingToCart={setIsAddingToCart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cart={cart}
        isWishlisted={isWishlisted}
        toggleWishlist={toggleWishlist}
      />

      {/* Authentication Dialog */}
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

export default SingleCourse;
