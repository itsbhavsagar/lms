import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, User, BookOpen } from 'lucide-react';
import { useCart } from '../../context/CartContext.jsx';

const SingleCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        // API call
        // const response = await fetch(`/api/courses/${id}`);
        // const data = await response.json();

        // For demo purposes only
        const response = await import('../../data/sampleCoursesData');
        const foundCourse = response.sampleCoursesData.find(
          (course) => course.id === parseInt(id)
        );

        if (!foundCourse) {
          throw new Error('Course not found');
        }

        setCourse(foundCourse);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(course);
    navigate('/cart');
  };

  if (loading) {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <div className='text-xl font-medium'>Loading course...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex flex-col justify-center items-center min-h-screen p-4'>
        <div className='text-xl font-medium text-red-500 mb-4'>
          Error: {error}
        </div>
        <Button onClick={() => navigate('/courses')}>Back to Courses</Button>
      </div>
    );
  }

  if (!course) {
    return (
      <div className='flex flex-col justify-center items-center min-h-screen p-4'>
        <div className='text-xl font-medium mb-4'>Course not found!</div>
        <Button onClick={() => navigate('/courses')}>Back to Courses</Button>
      </div>
    );
  }

  const discount = course.originalPrice
    ? Math.round(
        ((course.originalPrice - course.price) / course.originalPrice) * 100
      )
    : 0;

  return (
    <div className='container mx-auto px-4 py-8 max-w-6xl mt-24'>
      <div className='grid md:grid-cols-3 gap-8'>
        <div className='md:col-span-2'>
          <div className='mb-4'>
            <Button
              variant='outline'
              size='sm'
              onClick={() => navigate('/courses')}
              className='mb-4'
            >
              Back to Courses
            </Button>
            <h1 className='text-3xl md:text-4xl font-bold mb-2'>
              {course.title}
            </h1>
            <div className='flex flex-wrap items-center gap-2 mb-4'>
              <Badge variant='outline' className='flex items-center gap-1'>
                <Star className='h-4 w-4' />
                {course.rating}
              </Badge>
              <span className='text-sm text-gray-500'>
                ({course.reviews} reviews)
              </span>
              <Badge variant='outline' className='flex items-center gap-1'>
                <User className='h-4 w-4' />
                {course.level}
              </Badge>
            </div>
          </div>

          <div className='relative rounded-lg overflow-hidden mb-6'>
            <img
              src={course.image}
              alt={course.title}
              className='w-full h-auto md:h-80 object-cover'
            />
            {discount > 0 && (
              <Badge className='absolute top-4 right-4 bg-red-500'>
                {discount}% OFF
              </Badge>
            )}
          </div>

          <div className='mb-8'>
            <h2 className='text-xl font-semibold mb-4'>Course Description</h2>
            <div className='prose max-w-none'>
              <p className='text-gray-700'>{course.description}</p>
            </div>
          </div>

          <div className='mb-8'>
            <h2 className='text-xl font-semibold mb-4'>What You'll Learn</h2>
            {course.learningPoints ? (
              <ul className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                {course.learningPoints.map((point, index) => (
                  <li key={index} className='flex items-start gap-2'>
                    <BookOpen className='h-5 w-5 text-blue-500 mt-0.5' />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className='text-gray-500'>
                Learning points not available for this course.
              </p>
            )}
          </div>
        </div>

        <div className='md:col-span-1'>
          <Card className='sticky top-8'>
            <CardContent className='pt-6'>
              <div className='mb-6'>
                <div className='flex items-end gap-2 mb-2'>
                  <span className='text-3xl font-bold'>${course.price}</span>
                  {course.originalPrice && (
                    <span className='text-gray-500 line-through text-lg'>
                      ${course.originalPrice}
                    </span>
                  )}
                </div>
                {discount > 0 && (
                  <p className='text-sm text-red-500 font-medium'>
                    {discount}% discount! Limited time offer
                  </p>
                )}
              </div>

              <Button
                onClick={handleAddToCart}
                className='w-full mb-4 text-lg py-6'
              >
                Add to Cart
              </Button>

              <div className='text-sm text-gray-500 mb-6'>
                <p className='mb-2'>30-day money-back guarantee</p>
                <p>Full lifetime access</p>
              </div>

              <div className='border-t pt-4'>
                <h3 className='font-semibold mb-3'>Course Details</h3>
                <div className='space-y-3'>
                  <div className='flex items-center gap-2'>
                    <User className='h-4 w-4 text-gray-500' />
                    <span>Instructor: {course.instructor}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Clock className='h-4 w-4 text-gray-500' />
                    <span>Duration: {course.duration || '10 hours'}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
