import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Star,
  Clock,
  User,
  BookOpen,
  ChevronRight,
  Heart,
  Share2,
  Award,
} from 'lucide-react';

const CourseDetails = ({
  course,
  discount,
  activeTab,
  setActiveTab,
  isAddingToCart,
  setIsAddingToCart,
  addToCart,
  removeFromCart,
  cart,
  isWishlisted,
  toggleWishlist,
}) => {
  const isCourseInCart = cart.some((item) => item._id === course._id);

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    try {
      await addToCart(course);
    } catch (error) {
      console.error('Failed to add to cart:', error);
    } finally {
      setIsAddingToCart(false);
    }
  };

  const handleRemoveFromCart = async () => {
    setIsAddingToCart(true);
    try {
      await removeFromCart(course._id);
    } catch (error) {
      console.error('Failed to remove from cart:', error);
    } finally {
      setIsAddingToCart(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8 max-w-6xl -mt-10 sm:-mt-16 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {/* Mobile Sidebar (shown at top) */}
        <div className="md:hidden col-span-1 order-1">
          <div className="rounded-lg border shadow-md mb-6">
            <div className="relative aspect-video overflow-hidden rounded-t-lg">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
                <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-white/90 flex items-center justify-center cursor-pointer">
                  <div className="h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-blue-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-6 sm:w-6 ml-0.5 sm:ml-1"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              {discount > 0 && (
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
                  <Badge className="bg-red-500 border-0 px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-bold">
                    {discount}% OFF
                  </Badge>
                </div>
              )}
            </div>

            <div className="p-4 sm:p-6">
              <div className="mb-4 sm:mb-6">
                <div className="flex items-end gap-2 sm:gap-3 mb-2">
                  <span className="text-2xl sm:text-4xl font-bold">
                    ${course.price}
                  </span>
                  {course.originalPrice && (
                    <span className="text-gray-500 line-through text-base sm:text-lg">
                      ${course.originalPrice}
                    </span>
                  )}
                </div>
                {discount > 0 && (
                  <div className="flex items-center gap-2 text-red-500">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                    <p className="text-sm sm:text-base font-medium">
                      Sale ends in 2 days!
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-3 mb-4 sm:mb-6">
                {isCourseInCart ? (
                  <div className="flex gap-2">
                    <Button
                      className="w-full py-4 sm:py-6 text-base sm:text-lg font-medium rounded-lg bg-gray-500 hover:bg-gray-600"
                      disabled={isAddingToCart}
                    >
                      Already Added
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full py-4 sm:py-6 text-base sm:text-lg font-medium rounded-lg"
                      onClick={handleRemoveFromCart}
                      disabled={isAddingToCart}
                    >
                      {isAddingToCart ? 'Removing...' : 'Remove'}
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={handleAddToCart}
                    className="w-full py-4 sm:py-6 text-base sm:text-lg font-medium rounded-lg"
                    disabled={isAddingToCart}
                  >
                    {isAddingToCart ? 'Adding to Cart...' : 'Add to Cart'}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content (Tabs and Content) */}
        <div className="md:col-span-2 order-2 md:order-1">
          <div className="mb-6 sm:mb-8 sticky top-0 z-30 dark:bg-gray-800 bg-white rounded-lg shadow-md">
            <div className="flex overflow-x-auto scrollbar-hide">
              {['description', 'curriculum', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 sm:px-6 py-3 sm:py-4 font-medium text-xs sm:text-sm whitespace-nowrap flex-1 ${
                    activeTab === tab
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : ''
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-lg border-2 shadow-md p-4 sm:p-6">
            {activeTab === 'description' && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                  About This Course
                </h2>
                <p className="leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                  {course.description}
                </p>
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                  What You'll Learn
                </h2>
                {course.learningPoints ? (
                  <div className="bg-blue-50 rounded-lg p-4 sm:p-6">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      {course.learningPoints.map((point, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 sm:gap-3"
                        >
                          <div className="mt-1 bg-blue-500 p-1 rounded-full">
                            <BookOpen className="h-3 w-3 sm:h-4 sm:w-4" />
                          </div>
                          <span className="text-sm sm:text-base">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm sm:text-base">
                    Learning points not available
                  </p>
                )}
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                  Course Curriculum
                </h2>
                {course.curriculum && course.curriculum.length > 0 ? (
                  course.curriculum.map((section, index) => (
                    <div
                      key={index}
                      className="border mb-4 rounded-lg overflow-hidden"
                    >
                      <div className="bg-gray-50 p-3 sm:p-4 font-medium flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <span className="text-sm sm:text-base mb-1 sm:mb-0">
                          {section.title}
                        </span>
                        <span className="text-xs sm:text-sm text-gray-500">
                          {section.lectures.length} lectures •{' '}
                          {section.duration}
                        </span>
                      </div>
                      <div className="divide-y">
                        {section.lectures.map((lecture, lectureIndex) => (
                          <div
                            key={lectureIndex}
                            className="p-3 sm:p-4 flex justify-between items-center hover:bg-blue-50"
                          >
                            <div className="flex gap-2 sm:gap-3 items-center">
                              <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
                              <span className="text-sm sm:text-base">
                                {lecture.title}
                              </span>
                            </div>
                            <span className="text-xs sm:text-sm text-gray-500">
                              {lecture.duration}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm sm:text-base">
                    Curriculum not available
                  </p>
                )}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-0">
                    Student Reviews
                  </h2>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl sm:text-3xl font-bold">
                      {course.rating}
                    </div>
                    <div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 sm:h-5 sm:w-5 ${
                              i < Math.floor(course.rating)
                                ? 'text-yellow-500 fill-yellow-500'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500">
                        Based on {course.reviews} reviews
                      </div>
                    </div>
                  </div>
                </div>
                {course.reviewsData && course.reviewsData.length > 0 ? (
                  course.reviewsData.map((review, index) => (
                    <div
                      key={index}
                      className="border-b pb-4 sm:pb-6 mb-4 sm:mb-6 last:border-0"
                    >
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold text-sm sm:text-lg">
                            {review.user.charAt(0)}
                          </div>
                          <div>
                            <div className="font-medium text-sm sm:text-base">
                              {review.user}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-500">
                              {review.date}
                            </div>
                          </div>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 sm:h-4 sm:w-4 ${
                                i < review.rating
                                  ? 'text-yellow-500 fill-yellow-500'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm sm:text-base">
                        {review.comment}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm sm:text-base">
                    No reviews available
                  </p>
                )}
                <div className="text-center mt-6 sm:mt-8">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 sm:text-base sm:px-4 sm:py-2"
                  >
                    See All Reviews{' '}
                    <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Sidebar */}
        <div className="hidden md:block md:col-span-1 order-3">
          <div className="sticky top-24 rounded-lg border shadow-md">
            <div className="relative aspect-video overflow-hidden rounded-t-lg">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-white/90 flex items-center justify-center cursor-pointer">
                  <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 ml-1"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              {discount > 0 && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-red-500 border-0 px-3 py-1.5 text-sm font-bold">
                    {discount}% OFF
                  </Badge>
                </div>
              )}
            </div>

            <div className="p-6">
              <div className="mb-6">
                <div className="flex items-end gap-3 mb-2">
                  <span className="text-4xl font-bold">${course.price}</span>
                  {course.originalPrice && (
                    <span className="text-gray-500 line-through text-lg">
                      ${course.originalPrice}
                    </span>
                  )}
                </div>
                {discount > 0 && (
                  <div className="flex items-center gap-2 text-red-500">
                    <Clock className="h-4 w-4" />
                    <p className="font-medium">Sale ends in 2 days!</p>
                  </div>
                )}
              </div>

              <div className="space-y-3 mb-6">
                {isCourseInCart ? (
                  <div className="flex gap-2">
                    <Button
                      className="w-full py-6 text-lg font-medium rounded-lg bg-gray-500 hover:bg-gray-600"
                      disabled={isAddingToCart}
                    >
                      Already Added
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full py-6 text-lg font-medium rounded-lg"
                      onClick={handleRemoveFromCart}
                      disabled={isAddingToCart}
                    >
                      {isAddingToCart ? 'Removing...' : 'Remove'}
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={handleAddToCart}
                    className="w-full py-6 text-lg font-medium rounded-lg"
                    disabled={isAddingToCart}
                  >
                    {isAddingToCart ? 'Adding to Cart...' : 'Add to Cart'}
                  </Button>
                )}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 py-2 rounded-lg"
                    onClick={toggleWishlist}
                  >
                    <Heart
                      className={`h-5 w-5 mr-2 ${
                        isWishlisted ? 'fill-red-500 text-red-500' : ''
                      }`}
                    />
                    {isWishlisted ? 'Wishlisted' : 'Wishlist'}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-12 h-10 px-0 rounded-lg"
                  >
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="text-center text-sm text-gray-500 mb-6 py-4 border-y">
                <p className="mb-2 font-medium">This course includes:</p>
                <div className="space-y-3 mt-4">
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <span>Full lifetime access</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="h-4 w-4 text-blue-500" />
                    <span>Access on mobile and TV</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-4 w-4 text-blue-500" />
                    <span>Certificate of completion</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-semibold mb-4">Instructor</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold text-lg">
                    {course.instructor?.charAt(0) || 'I'}
                  </div>
                  <div>
                    <div className="font-medium">{course.instructor}</div>
                    <div className="text-sm text-gray-500">
                      Senior Instructor
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-700">
                  Expert instructor with over 10 years of teaching experience.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Bottom Actions */}
        <div className="md:hidden mt-6 flex gap-2 order-4">
          <Button
            variant="outline"
            className="flex-1 py-2 rounded-lg"
            onClick={toggleWishlist}
          >
            <Heart
              className={`h-4 w-4 mr-2 ${
                isWishlisted ? 'fill-red-500 text-red-500' : ''
              }`}
            />
            {isWishlisted ? 'Wishlisted' : 'Wishlist'}
          </Button>
          <Button variant="outline" className="flex-1 py-2 rounded-lg">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>

        {/* Mobile Course Features */}
        <div className="md:hidden mt-6 text-center text-sm text-gray-500 py-4 border-y order-5">
          <p className="mb-2 font-medium">This course includes:</p>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-500" />
              <span>Full lifetime access</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-blue-500" />
              <span>Mobile access</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-blue-500" />
              <span>Certificate</span>
            </div>
          </div>
        </div>

        {/* Mobile Instructor */}
        <div className="md:hidden mt-6 order-6">
          <h3 className="font-semibold mb-3">Instructor</h3>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold">
              {course.instructor?.charAt(0) || 'I'}
            </div>
            <div>
              <div className="font-medium text-sm">{course.instructor}</div>
              <div className="text-xs text-gray-500">Senior Instructor</div>
            </div>
          </div>
          <div className="text-xs text-gray-700">
            Expert instructor with over 10 years of teaching experience.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
