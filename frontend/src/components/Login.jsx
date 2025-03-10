import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { AtSign, Lock, Github, ExternalLink } from 'lucide-react';
import AuthLayout from './layout/AuthLayout';
import { useTheme } from '@/context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from '../config/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { theme } = useTheme();
  const { login } = useAuth();
  const navigate = useNavigate();

  const isDarkMode = theme === 'dark';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (error) {
      alert(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <AuthLayout>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={`p-8 rounded-xl shadow-lg space-y-6 transition-all duration-300 ${
          isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        }`}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold text-center"
        >
          Login
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          variants={containerVariants}
          className="space-y-4"
        >
          <motion.div variants={itemVariants}>
            <Label
              htmlFor="email"
              className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}
            >
              Email
            </Label>
            <div className="relative">
              <AtSign
                className={`absolute left-3 top-1/2 -translate-y-1/2 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}
                size={20}
              />
              <Input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`pl-10 ${
                  isDarkMode
                    ? 'bg-gray-800 text-white border-gray-700'
                    : 'bg-gray-100 text-black'
                }`}
                required
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Label
              htmlFor="password"
              className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}
            >
              Password
            </Label>
            <div className="relative">
              <Lock
                className={`absolute left-3 top-1/2 -translate-y-1/2 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}
                size={20}
              />
              <Input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`pl-10 ${
                  isDarkMode
                    ? 'bg-gray-800 text-white border-gray-700'
                    : 'bg-gray-100 text-black'
                }`}
                required
              />
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-between items-center"
          >
            <a
              href="#"
              className={`text-sm ${
                isDarkMode ? 'text-blue-400' : 'text-blue-600'
              } hover:underline`}
            >
              Forgot Password?
            </a>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </motion.div>
        </motion.form>

        <motion.div variants={itemVariants}>
          <Separator className="my-4 border-gray-300 dark:border-gray-700" />
          <div className="flex space-x-4 justify-center">
            <Button
              variant="outline"
              size="icon"
              className={isDarkMode ? 'border-gray-600' : ''}
            >
              <ExternalLink className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className={isDarkMode ? 'border-gray-600' : ''}
            >
              <Github className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AuthLayout>
  );
};

export default Login;
