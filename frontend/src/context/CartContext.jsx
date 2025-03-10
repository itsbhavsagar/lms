import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config/api';

const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  total: 0,
  loading: false,
});

const getToken = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('User not logged in');
  }
  return token;
};

const validateCartResponse = (response) => {
  if (!response.data || !Array.isArray(response.data)) {
    throw new Error('Invalid cart data received from server');
  }
  return response.data;
};

const calculateTotal = (cart) => {
  return cart.reduce((total, item) => total + (item.price || 0), 0);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCart = async () => {
      setLoading(true);
      try {
        const token = getToken();
        const response = await axios.get(`${API_BASE_URL}/api/cart`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCart(validateCartResponse(response));
      } catch (error) {
        console.error('Error fetching cart:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  const addToCart = async (course) => {
    try {
      const token = getToken();
      const response = await axios.post(
        `${API_BASE_URL}/api/cart/add`,
        { courseId: course._id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCart(validateCartResponse(response));
    } catch (error) {
      console.error('Error adding to cart:', error);
      throw error;
    }
  };

  const removeFromCart = async (courseId) => {
    try {
      const token = getToken();
      const response = await axios.post(
        `${API_BASE_URL}/api/cart/remove`,
        { courseId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCart(validateCartResponse(response));
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const clearCart = async () => {
    try {
      const token = getToken();
      const response = await axios.post(
        `${API_BASE_URL}/api/cart/clear`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCart(validateCartResponse(response));
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        total: calculateTotal(cart),
        loading,
      }}
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
