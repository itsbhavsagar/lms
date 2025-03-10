import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext.jsx';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/ThemeContext.jsx';
import {
  ChevronDown,
  CreditCard,
  CheckCircle,
  ShoppingCart,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isOrderSummaryOpen, setIsOrderSummaryOpen] = useState(true);
  const [completedOrder, setCompletedOrder] = useState([]);
  const navigate = useNavigate();
  const { theme } = useTheme();

  const totalPrice = cart.reduce((total, course) => total + course.price, 0);
  const itemCount = cart.length;

  const handlePayment = async () => {
    setIsSubmitting(true);
    setCompletedOrder([...cart]);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await clearCart();

      setIsSubmitting(false);
      setIsComplete(true);
      navigate('/courses');
    } catch (error) {
      console.error('Checkout error:', error);
      setIsSubmitting(false);
      alert(
        'Failed to complete checkout: ' + (error.message || 'Unknown error')
      );
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { when: 'beforeChildren', staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
  };

  const summaryVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: { height: 'auto', opacity: 1 },
  };

  const displayItems = isComplete ? completedOrder : cart;
  const displayTotal = isComplete
    ? completedOrder.reduce((total, course) => total + course.price, 0)
    : totalPrice;

  // Theme-based style configurations
  const isDark = theme === 'dark';
  
  const styles = {
    mainBackground: isDark ? 'bg-gray-900' : 'bg-gray-50',
    cardBackground: isDark ? 'bg-gray-800' : 'bg-white',
    sidebarBackground: isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200',
    textColor: isDark ? 'text-white' : 'text-gray-900',
    secondaryTextColor: isDark ? 'text-gray-300' : 'text-gray-600',
    mutedTextColor: isDark ? 'text-gray-400' : 'text-gray-500',
    borderColor: isDark ? 'border-gray-700' : 'border-gray-200',
    inputBackground: isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300',
    inputFocus: isDark ? 'focus:ring-blue-500 focus:border-blue-500' : 'focus:ring-blue-500 focus:border-transparent',
    summaryItemBackground: isDark ? 'bg-gray-700' : 'bg-white',
    orderSummaryBackground: isDark ? 'bg-blue-900' : 'bg-blue-50',
    successBackground: isDark ? 'bg-green-900' : 'bg-green-100',
    successIconColor: isDark ? 'text-green-400' : 'text-green-600',
    buttonColor: 'bg-blue-600 hover:bg-blue-700',
    completeOrderBackground: isDark ? 'bg-gray-700' : 'bg-gray-50',
  };

  return (
    <div className={`flex items-center justify-center min-h-screen ${styles.mainBackground} px-4 py-8`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`w-full max-w-3xl mx-auto ${styles.cardBackground} rounded-xl shadow-lg overflow-hidden`}
      >
        {!isComplete ? (
          <div className='flex flex-col lg:flex-row'>
            {/* Left side - Order summary */}
            <div className={`w-full lg:w-2/3 p-4 sm:p-6 ${styles.textColor}`}>
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className='text-xl sm:text-2xl font-bold mb-4 flex items-center'
              >
                <ShoppingCart className='mr-2 h-5 w-5' /> Checkout
              </motion.h1>

              <div className='lg:hidden mb-4'>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`${styles.orderSummaryBackground} p-3 rounded-lg flex justify-between items-center cursor-pointer`}
                  onClick={() => setIsOrderSummaryOpen(!isOrderSummaryOpen)}
                >
                  <span className='font-medium text-sm'>
                    Order Summary ({itemCount} items)
                  </span>
                  <motion.div
                    animate={{ rotate: isOrderSummaryOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className='h-4 w-4' />
                  </motion.div>
                </motion.div>

                <AnimatePresence>
                  {isOrderSummaryOpen && (
                    <motion.div
                      initial='collapsed'
                      animate='expanded'
                      exit='collapsed'
                      variants={summaryVariants}
                      transition={{ duration: 0.3 }}
                      className='overflow-hidden'
                    >
                      <div className={`p-3 border-x border-b ${styles.borderColor} rounded-b-lg space-y-2 ${styles.cardBackground}`}>
                        {cart.map((course) => (
                          <div
                            key={course._id}
                            className='flex justify-between'
                          >
                            <span className={`text-xs sm:text-sm truncate max-w-xs ${styles.textColor}`}>
                              {course.title}
                            </span>
                            <span className='text-xs sm:text-sm font-medium ml-2'>
                              ${course.price.toFixed(2)}
                            </span>
                          </div>
                        ))}
                        <div className={`pt-2 border-t ${styles.borderColor} mt-2`}>
                          <div className='flex justify-between font-semibold text-sm'>
                            <span>Total:</span>
                            <span>${totalPrice.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.div
                variants={containerVariants}
                initial='hidden'
                animate='visible'
                className='space-y-4'
              >
                <motion.div variants={itemVariants}>
                  <h2 className='text-lg font-semibold mb-2'>
                    Payment Details
                  </h2>
                  <div className='space-y-3'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                      <div>
                        <label className={`block text-xs font-medium mb-1 ${styles.textColor}`}>
                          First Name
                        </label>
                        <input
                          type='text'
                          className={`w-full p-2 text-sm border rounded-md ${styles.inputBackground} ${styles.textColor} ${styles.inputFocus}`}
                        />
                      </div>
                      <div>
                        <label className={`block text-xs font-medium mb-1 ${styles.textColor}`}>
                          Last Name
                        </label>
                        <input
                          type='text'
                          className={`w-full p-2 text-sm border rounded-md ${styles.inputBackground} ${styles.textColor} ${styles.inputFocus}`}
                        />
                      </div>
                    </div>
                    <div>
                      <label className={`block text-xs font-medium mb-1 ${styles.textColor}`}>
                        Email Address
                      </label>
                      <input
                        type='email'
                        className={`w-full p-2 text-sm border rounded-md ${styles.inputBackground} ${styles.textColor} ${styles.inputFocus}`}
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h2 className='text-lg font-semibold mb-2 flex items-center'>
                    <CreditCard className='mr-2 h-4 w-4' /> Card Information
                  </h2>
                  <div className='space-y-3'>
                    <div>
                      <label className={`block text-xs font-medium mb-1 ${styles.textColor}`}>
                        Card Number
                      </label>
                      <input
                        type='text'
                        className={`w-full p-2 text-sm border rounded-md ${styles.inputBackground} ${styles.textColor} ${styles.inputFocus}`}
                        placeholder='1234 5678 9012 3456'
                      />
                    </div>
                    <div className='grid grid-cols-2 gap-3'>
                      <div>
                        <label className={`block text-xs font-medium mb-1 ${styles.textColor}`}>
                          Expiration Date
                        </label>
                        <input
                          type='text'
                          className={`w-full p-2 text-sm border rounded-md ${styles.inputBackground} ${styles.textColor} ${styles.inputFocus}`}
                          placeholder='MM/YY'
                        />
                      </div>
                      <div>
                        <label className={`block text-xs font-medium mb-1 ${styles.textColor}`}>
                          Security Code
                        </label>
                        <input
                          type='text'
                          className={`w-full p-2 text-sm border rounded-md ${styles.inputBackground} ${styles.textColor} ${styles.inputFocus}`}
                          placeholder='CVC'
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right side - Summary */}
            <div className={`hidden lg:block lg:w-1/3 ${styles.sidebarBackground} p-4 sm:p-6 border-l ${styles.borderColor}`}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className={`text-lg font-semibold mb-3 ${styles.textColor}`}>Order Summary</h2>
                <motion.div
                  variants={containerVariants}
                  initial='hidden'
                  animate='visible'
                  className='space-y-2 mb-4'
                >
                  {cart.map((course) => (
                    <motion.div
                      key={course._id}
                      variants={itemVariants}
                      className={`flex justify-between items-center p-2 ${styles.summaryItemBackground} rounded-lg shadow-sm`}
                    >
                      <div className='flex-1 pr-2 overflow-hidden'>
                        <h3 className={`font-medium text-sm truncate ${styles.textColor}`}>
                          {course.title}
                        </h3>
                        <p className={`${styles.secondaryTextColor} text-xs`}>Course</p>
                      </div>
                      <span className='font-semibold text-sm'>
                        ${course.price.toFixed(2)}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                <div className={`border-t ${styles.borderColor} pt-3 space-y-1 text-sm ${styles.textColor}`}>
                  <div className='flex justify-between'>
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className='flex justify-between text-green-600'>
                    <span>Discount</span>
                    <span>$0.00</span>
                  </div>
                  <div className={`flex justify-between font-bold text-base pt-2 border-t ${styles.borderColor}`}>
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`p-4 sm:p-6 text-center ${styles.textColor}`}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 0.2,
              }}
              className={`inline-block ${styles.successBackground} p-3 rounded-full mb-3`}
            >
              <CheckCircle className={`h-10 w-10 sm:h-12 sm:w-12 ${styles.successIconColor}`} />
            </motion.div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className='text-xl font-bold mb-2'
            >
              Payment Successful!
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className={`${styles.secondaryTextColor} text-sm mb-4`}
            >
              Thank you for your purchase. You now have access to all course
              materials.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className='mb-4 max-w-sm mx-auto'
            >
              <div className={`${styles.completeOrderBackground} rounded-lg p-3 text-left mb-4`}>
                <h3 className={`text-sm font-medium mb-2 ${styles.textColor}`}>Order Summary</h3>
                {completedOrder.map((course) => (
                  <div
                    key={course._id}
                    className='flex justify-between text-xs mb-1'
                  >
                    <span className={`truncate max-w-xs ${styles.textColor}`}>{course.title}</span>
                    <span className='font-medium ml-2'>
                      ${course.price.toFixed(2)}
                    </span>
                  </div>
                ))}
                <div className={`pt-2 border-t ${styles.borderColor} mt-2`}>
                  <div className='flex justify-between font-semibold text-sm'>
                    <span>Total Paid:</span>
                    <span>${displayTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                className={`${styles.buttonColor} text-white text-sm py-2`}
                onClick={() => navigate('/courses')}
              >
                Go to My Courses
              </Button>
            </motion.div>
          </motion.div>
        )}

        {!isComplete && (
          <div className={`p-4 sm:p-6 ${styles.sidebarBackground} border-t ${styles.borderColor}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                onClick={handlePayment}
                className={`w-full ${styles.buttonColor} text-white py-2 rounded-lg text-sm font-semibold`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      ease: 'linear',
                    }}
                    className='mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full'
                  />
                ) : null}
                {isSubmitting
                  ? 'Processing...'
                  : `Complete Payment • $${totalPrice.toFixed(2)}`}
              </Button>
              <p className={`text-center text-xs ${styles.mutedTextColor} mt-3`}>
                By completing your purchase you agree to our Terms of Service
              </p>
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Checkout;
