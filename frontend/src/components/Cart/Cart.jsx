import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext.jsx';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext.jsx';
import {
  X,
  ShoppingBag,
  Clock,
  Award,
  BookOpen,
  Check,
  Gift,
  ChevronUp,
  ChevronDown,
  ShieldCheck,
} from 'lucide-react';
import {
  FaPaypal,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcDiscover,
} from 'react-icons/fa';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return isMobile;
}

const PaymentIcons = () => {
  const { theme } = useTheme();
  return (
    <div className="flex justify-center gap-2 sm:gap-3 mt-3 flex-wrap">
      {[
        { Icon: FaPaypal, color: 'text-blue-600', title: 'PayPal' },
        { Icon: FaCcVisa, color: 'text-blue-800', title: 'Visa' },
        { Icon: FaCcMastercard, color: 'text-red-600', title: 'Mastercard' },
        { Icon: FaCcAmex, color: 'text-blue-500', title: 'American Express' },
        { Icon: FaCcDiscover, color: 'text-orange-600', title: 'Discover' },
      ].map(({ Icon, color, title }, index) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index, duration: 0.2 }}
          whileHover={{ scale: 1.1 }}
          className="transition-all duration-150"
        >
          <Icon
            className={`h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 ${color} ${
              theme === 'dark' ? 'opacity-90' : ''
            }`}
            title={title}
          />
        </motion.div>
      ))}
    </div>
  );
};

const CartItem = ({ course, onRemove }) => {
  const [expanded, setExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();
  const { theme } = useTheme();

  const discountPercentage = course.originalPrice
    ? Math.round(100 - (course.price / course.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
      transition={{ duration: 0.3 }}
      className={`rounded-lg shadow-sm border hover:shadow-md transition-all duration-300 mb-3 overflow-hidden ${
        theme === 'dark'
          ? 'border-gray-700 bg-gray-800'
          : 'border-gray-200 bg-white'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex p-3 relative">
        <div className="relative mr-3 sm:mr-4 flex-shrink-0">
          <img
            src={course.image || 'https://via.placeholder.com/150'}
            alt={course.title}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-md"
            loading="lazy"
          />
          {course.isBestseller && (
            <div className="absolute top-1 left-1 bg-yellow-500 text-white text-xs px-1 py-0.5 rounded-sm font-medium">
              Best
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <h2
              className={`text-sm sm:text-base font-semibold line-clamp-2 pr-6 ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
              }`}
            >
              {course.title}
            </h2>
            <motion.button
              onClick={() => onRemove(course._id)}
              aria-label={`Remove ${course.title} from cart`}
              className={`absolute top-2 right-2 transition-colors duration-200 p-1 ${
                theme === 'dark'
                  ? 'text-gray-500 hover:text-red-500'
                  : 'text-gray-400 hover:text-red-600'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={16} />
            </motion.button>
          </div>

          <p
            className={`text-xs mt-0.5 line-clamp-1 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            <span className="inline-flex items-center">
              <Award
                size={12}
                className={theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}
              />
              {course.instructor}
            </span>
            <span
              className={
                theme === 'dark' ? 'text-gray-500 mx-1' : 'text-gray-400 mx-1'
              }
            >
              |
            </span>
            <span className="font-medium text-yellow-500 inline-flex items-center">
              {course.rating} ★
            </span>
            <span
              className={
                theme === 'dark'
                  ? 'text-gray-500 ml-0.5'
                  : 'text-gray-500 ml-0.5'
              }
            >
              ({course.reviews})
            </span>
          </p>

          <div className="flex justify-between items-center mt-1.5">
            <div className="flex items-center">
              <span
                className={`text-base sm:text-lg font-bold ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                }`}
              >
                ${course.price.toFixed(2)}
              </span>
              {course.originalPrice && (
                <>
                  <span
                    className={`text-xs line-through ml-1.5 ${
                      theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                    }`}
                  >
                    ${course.originalPrice.toFixed(2)}
                  </span>
                  <span className="ml-1.5 text-xs font-medium text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
                    {discountPercentage}% off
                  </span>
                </>
              )}
            </div>

            {isMobile && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-blue-600 p-1"
                aria-label={expanded ? 'Collapse details' : 'Expand details'}
              >
                {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            )}
          </div>
        </div>
      </div>

      {(!isMobile || expanded) && (
        <div
          className={`px-3 pb-3 pt-0 text-xs border-t mt-1 ${
            theme === 'dark' ? 'border-gray-700' : 'border-gray-100'
          }`}
        >
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center gap-y-1 gap-x-3 mt-2">
            <div className="flex items-center">
              <Clock size={12} className="mr-1" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center">
              <BookOpen size={12} className="mr-1" />
              <span>{course.level}</span>
            </div>
            {course.certification && (
              <div className="flex items-center">
                <Check size={12} className="mr-1 text-green-500" />
                <span className="text-green-600">Certificate</span>
              </div>
            )}
          </div>

          {course.tags && course.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {course.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className={`inline-flex text-xs px-1.5 py-0.5 rounded-full ${
                    theme === 'dark'
                      ? 'bg-blue-900 text-blue-300'
                      : 'bg-blue-50 text-blue-700'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

const CartSummary = ({ cart, onCheckout }) => {
  const totalPrice = cart.reduce(
    (total, course) => total + (course.price || 0),
    0
  );
  const originalTotal = cart.reduce(
    (total, course) => total + (course.originalPrice || course.price || 0),
    0
  );
  const savings = originalTotal - totalPrice;
  const totalItems = cart.length;
  const totalHours = cart.reduce(
    (total, course) => total + (parseFloat(course.duration) || 0),
    0
  );
  const certificateCount = cart.filter((c) => c.certification).length;
  const isMobile = useIsMobile();
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`p-4 sm:p-5 rounded-lg shadow-md border ${
        theme === 'dark'
          ? 'border-gray-700 bg-gray-800'
          : 'border-gray-200 bg-white'
      } ${!isMobile ? 'sticky top-20' : ''}`}
    >
      <h2
        className={`text-lg font-semibold mb-3 flex items-center ${
          theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
        }`}
      >
        <ShoppingBag size={16} className="mr-2 text-blue-600" />
        Order Summary
      </h2>

      <div className="space-y-3">
        <div
          className={`flex justify-between text-sm ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          <span>Items ({totalItems}):</span>
          <span>${originalTotal.toFixed(2)}</span>
        </div>

        {savings > 0 && (
          <motion.div
            className="flex justify-between text-green-600 font-medium text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <span className="flex items-center">
              <Gift size={14} className="mr-1" /> Savings:
            </span>
            <span>-${savings.toFixed(2)}</span>
          </motion.div>
        )}

        <div
          className={`flex justify-between text-base font-bold border-t border-dashed pt-3 mt-2 ${
            theme === 'dark'
              ? 'border-gray-600 text-gray-200'
              : 'border-gray-200 text-gray-800'
          }`}
        >
          <span>Total:</span>
          <motion.span
            key={totalPrice}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            ${totalPrice.toFixed(2)}
          </motion.span>
        </div>
      </div>

      <div
        className={`mt-3 rounded-md p-2.5 text-xs grid grid-cols-2 gap-2 ${
          theme === 'dark'
            ? 'bg-blue-900 text-blue-300'
            : 'bg-blue-50 text-blue-800'
        }`}
      >
        <div className="flex items-center">
          <Clock size={14} className="mr-1.5 text-blue-600" />
          {totalHours} hours content
        </div>
        <div className="flex items-center">
          <Award size={14} className="mr-1.5 text-blue-600" />
          {certificateCount} certificate{certificateCount !== 1 ? 's' : ''}
        </div>
      </div>

      <div
        className={`mt-3 flex items-center justify-center text-xs rounded-md p-2 ${
          theme === 'dark'
            ? 'text-emerald-300 bg-emerald-900'
            : 'text-emerald-700 bg-emerald-50'
        }`}
      >
        <ShieldCheck size={14} className="mr-1.5" />
        30-Day Money-Back Guarantee
      </div>

      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="mt-4"
      >
        <Button
          onClick={onCheckout}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-2.5 rounded-md shadow-sm"
        >
          Checkout Now
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <p
          className={`text-xs mt-3 text-center ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}
        >
          Secure payment processing
        </p>
        <PaymentIcons />
      </motion.div>
    </motion.div>
  );
};

const EmptyCart = ({ navigateToCourses }) => {
  const { theme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className={`rounded-lg shadow-sm border overflow-hidden ${
        theme === 'dark'
          ? 'border-gray-700 bg-gray-800'
          : 'border-gray-200 bg-white'
      }`}
    >
      <div className="p-6 pb-8 text-center">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 flex items-center justify-center rounded-full ${
            theme === 'dark' ? 'bg-blue-900' : 'bg-blue-50'
          }`}
        >
          <ShoppingBag
            size={30}
            className={theme === 'dark' ? 'text-blue-400' : 'text-blue-500'}
          />
        </motion.div>
        <h2
          className={`text-lg font-semibold mb-1.5 ${
            theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
          }`}
        >
          Your cart is empty
        </h2>
        <p
          className={`text-sm max-w-sm mx-auto mb-4 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          Discover courses that match your interests and learning goals
        </p>
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block"
        >
          <Button
            onClick={navigateToCourses}
            className={`${
              theme === 'dark'
                ? 'bg-gray-700 text-white hover:bg-gray-600 border-gray-600'
                : 'text-white border-black hover:bg-black '
            } border-2 px-4 py-2 rounded-md shadow-sm`}
          >
            Explore Courses
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { theme } = useTheme();

  if (!Array.isArray(cart)) return <div>Error loading cart</div>;

  const handleCheckout = () => navigate('/checkout');

  return (
    <div
      className={`min-h-screen pt-16 pb-12 mt-24 ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-gray-900 to-gray-800'
          : 'bg-gradient-to-b from-gray-50 to-gray-100'
      }`}
    >
      <div className="px-3 sm:px-6 max-w-6xl mx-auto">
        <div className="flex justify-center mb-5">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={`px-4 py-2 rounded-full inline-flex items-center shadow-sm ${
              theme === 'dark' ? 'bg-gray-700' : 'bg-white'
            }`}
          >
            <ShoppingBag size={16} className="text-blue-600 mr-2" />
            <h1
              className={`text-base font-bold ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
              }`}
            >
              Your Learning Cart {cart.length > 0 ? `(${cart.length})` : ''}
            </h1>
          </motion.div>
        </div>

        {cart.length === 0 ? (
          <EmptyCart navigateToCourses={() => navigate('/courses')} />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            <div className="lg:col-span-2">
              <AnimatePresence>
                {cart.map((course) => (
                  <CartItem
                    key={course._id}
                    course={course}
                    onRemove={removeFromCart}
                  />
                ))}
              </AnimatePresence>

              {isMobile && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`fixed bottom-0 left-0 right-0 p-3 border-t z-10 ${
                    theme === 'dark'
                      ? 'border-gray-700 bg-gray-800'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span
                      className={`text-sm font-medium ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      Total:
                    </span>
                    <span
                      className={`text-lg font-bold ${
                        theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                      }`}
                    >
                      $
                      {cart
                        .reduce(
                          (total, course) => total + (course.price || 0),
                          0
                        )
                        .toFixed(2)}
                    </span>
                  </div>
                  <Button
                    onClick={handleCheckout}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-md"
                  >
                    Checkout Now
                  </Button>
                </motion.div>
              )}
            </div>

            <div className={`${isMobile ? 'mb-20' : ''} lg:col-span-1`}>
              <CartSummary cart={cart} onCheckout={handleCheckout} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
