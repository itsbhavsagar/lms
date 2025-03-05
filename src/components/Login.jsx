import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { AtSign, Lock, Github, ExternalLink } from 'lucide-react';
import AuthLayout from './Layout/AuthLayout';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted', { email, password });
  };

  return (
    <AuthLayout>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="bg-white p-8 rounded-xl shadow-lg space-y-6"
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
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <AtSign
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-between items-center"
          >
            <a href="#" className="text-sm text-blue-600 hover:underline">
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

export default Login;
