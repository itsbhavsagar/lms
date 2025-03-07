import React from 'react';
import { useCart } from '../../context/CartContext.jsx';
import { Button } from '@/components/ui/button';

const Checkout = () => {
  const { cart } = useCart();

  const totalPrice = cart.reduce((total, course) => total + course.price, 0);

  const handlePayment = () => {
    alert('Payment successful!');
  };

  return (
    <div className='p-6'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl font-bold mb-6'>Checkout</h1>
        <div className='space-y-4'>
          {cart.map((course) => (
            <div
              key={course.id}
              className='flex items-center justify-between p-4 border rounded-lg'
            >
              <div>
                <h2 className='text-xl font-semibold'>{course.title}</h2>
                <p className='text-gray-600'>${course.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='mt-6'>
          <p className='text-xl font-semibold'>
            Total: ${totalPrice.toFixed(2)}
          </p>
          <Button onClick={handlePayment} className='w-full mt-4'>
            Pay Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
