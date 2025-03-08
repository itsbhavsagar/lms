import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import AuthLayout from './layout/AuthLayout';

import {
  User,
  AtSign,
  Lock,
  Github,
  ExternalLink,
  CheckCircle,
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import API_BASE_URL from '../config/api';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const { theme } = useTheme();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isSignupSuccess, setIsSignupSuccess] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, type: 'spring', stiffness: 200 },
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match'); // Keeping this for now; will replace with popup later
      return;
    }
    try {
      const response = await axios.post(`${API_BASE_URL}/api/auth/signup`, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      localStorage.setItem('token', response.data.token);
      // Update AuthContext user state by simulating login
      await login(formData.email, formData.password);
      setIsSignupSuccess(true);
      setTimeout(() => {
        setIsSignupSuccess(false);
        navigate('/');
      }, 2000);
    } catch (error) {
      alert(error.response?.data?.message || 'Signup failed'); // Keeping this; will replace with error popup
    }
  };

  return (
    <AuthLayout>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={containerVariants}
        className={`max-w-md mx-auto p-8 space-y-6 rounded-xl shadow-lg transition-colors duration-300 ${
          theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        }`}
      >
        <motion.h2
          variants={itemVariants}
          className='text-3xl font-bold text-center'
        >
          Sign Up
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          variants={containerVariants}
          className='space-y-4'
        >
          <motion.div variants={itemVariants}>
            <Label htmlFor='name'>Full Name</Label>
            <div className='relative'>
              <User
                className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
                size={20}
              />
              <Input
                type='text'
                id='name'
                name='name'
                placeholder='Enter your full name'
                value={formData.name}
                onChange={handleChange}
                className={`pl-10 ${
                  theme === 'dark'
                    ? 'bg-gray-800 text-white border-gray-700'
                    : ''
                }`}
                required
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Label htmlFor='email'>Email</Label>
            <div className='relative'>
              <AtSign
                className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
                size={20}
              />
              <Input
                type='email'
                id='email'
                name='email'
                placeholder='Enter your email'
                value={formData.email}
                onChange={handleChange}
                className={`pl-10 ${
                  theme === 'dark'
                    ? 'bg-gray-800 text-white border-gray-700'
                    : ''
                }`}
                required
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Label htmlFor='password'>Password</Label>
            <div className='relative'>
              <Lock
                className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
                size={20}
              />
              <Input
                type='password'
                id='password'
                name='password'
                placeholder='Create a password'
                value={formData.password}
                onChange={handleChange}
                className={`pl-10 ${
                  theme === 'dark'
                    ? 'bg-gray-800 text-white border-gray-700'
                    : ''
                }`}
                required
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Label htmlFor='confirmPassword'>Confirm Password</Label>
            <div className='relative'>
              <Lock
                className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
                size={20}
              />
              <Input
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                placeholder='Confirm your password'
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`pl-10 ${
                  theme === 'dark'
                    ? 'bg-gray-800 text-white border-gray-700'
                    : ''
                }`}
                required
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button type='submit' className='w-full'>
              Create Account
            </Button>
          </motion.div>
        </motion.form>

        <motion.div variants={itemVariants}>
          <Separator className='my-4' />
          <div className='flex space-x-4 justify-center'>
            <Button
              variant='outline'
              size='icon'
              className={
                theme === 'dark' ? 'border-gray-900 text-gray-300' : ''
              }
            >
              <ExternalLink className='h-5 w-5' />
            </Button>
            <Button
              variant='outline'
              size='icon'
              className={
                theme === 'dark' ? 'border-gray-600 text-gray-300' : ''
              }
            >
              <Github className='h-5 w-5' />
            </Button>
          </div>
        </motion.div>
      </motion.div>

      {/* Success Popup */}
      <AnimatePresence>
        {isSignupSuccess && (
          <motion.div
            initial='hidden'
            animate='visible'
            exit='exit'
            variants={popupVariants}
            className={`fixed inset-0 flex items-center justify-center z-50 ${
              theme === 'dark' ? 'bg-gray-900/80' : 'bg-gray-500/50'
            }`}
          >
            <motion.div
              className={`p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4 ${
                theme === 'dark'
                  ? 'bg-gray-800 text-white'
                  : 'bg-white text-gray-900'
              }`}
            >
              <CheckCircle className='h-12 w-12 text-green-500' />
              <h3 className='text-xl font-semibold'>Signup Successful!</h3>
              <p className='text-sm text-center'>
                Welcome to LearnHub! Redirecting to future 😉...
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AuthLayout>
  );
};

export default Signup;
