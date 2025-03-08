import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;
      try {
        const response = await axios.get('http://localhost:5001/api/cart', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCart(response.data);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };
    fetchCart();
  }, []);

  const addToCart = async (course) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please log in to add items to cart');
      return;
    }
    try {
      const response = await axios.post(
        'http://localhost:5001/api/cart/add',
        { courseId: course._id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCart(response.data);
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to add to cart');
    }
  };

  const removeFromCart = async (courseId) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please log in to remove items from cart');
      return;
    }
    try {
      const response = await axios.post(
        'http://localhost:5001/api/cart/remove',
        { courseId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCart(response.data);
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to remove from cart');
    }
  };

  const clearCart = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please log in to clear cart');
      return;
    }
    try {
      const response = await axios.post(
        'http://localhost:5001/api/cart/clear',
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCart(response.data);
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to clear cart');
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
