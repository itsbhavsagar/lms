import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import AuthLayout from './Layout/AuthLayout';
import { User, AtSign, Lock, Github, ExternalLink } from 'lucide-react';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Signup submitted', formData);
  };

  return (
    <AuthLayout>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className=" max-w-md mx-auto p-8 space-y-6 bg-white rounded-xl shadow-lg"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold text-center"
        >
          Sign Up
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          variants={containerVariants}
          className="space-y-4"
        >
          <motion.div variants={itemVariants}>
            <Label htmlFor="name">Full Name</Label>
            <div className="relative">
              <User
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="pl-10"
                required
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <AtSign
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="pl-10"
                required
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                className="pl-10"
                required
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="pl-10"
                required
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </motion.div>
        </motion.form>

        <motion.div variants={itemVariants}>
          <Separator className="my-4" />
          <div className="flex space-x-4 justify-center">
            <Button variant="outline" size="icon">
              <ExternalLink className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AuthLayout>
  );
};

export default Signup;
