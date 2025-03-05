import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { GraduationCap, Menu, X } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const containerVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, when: 'afterChildren' },
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, transition: { duration: 0.2 } },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, type: 'spring', stiffness: 100 },
    },
  };

  const hamburgerVariants = {
    closed: { rotate: 0, scale: 1 },
    open: {
      rotate: 90,
      scale: 1.2,
      transition: { duration: 0.3, type: 'spring' },
    },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <GraduationCap className="text-blue-600" size={32} />
          <h1 className="text-2xl font-bold text-gray-800">LearnHub</h1>
        </div>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="space-x-4">
            {[
              { name: 'Courses', path: '/courses' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink
                  onClick={() => navigate(item.path)}
                  className={navigationMenuTriggerStyle()}
                >
                  {item.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <Button variant="outline" onClick={() => navigate('/login')}>
            Login
          </Button>
          <Button onClick={() => navigate('/signup')}>Sign Up</Button>
        </div>

        <motion.div
          className="md:hidden"
          animate={isMenuOpen ? 'open' : 'closed'}
          variants={hamburgerVariants}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className="md:hidden overflow-hidden bg-white shadow-lg"
          >
            <NavigationMenu className="w-full cursor-pointer">
              <NavigationMenuList className="flex-col items-stretch space-y-2 p-4 ">
                {[
                  { name: 'Courses', path: '/courses' },
                  { name: 'About', path: '/about' },
                  { name: 'Contact', path: '/contact' },
                ].map((item) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    className="w-full"
                  >
                    <NavigationMenuItem className="w-full">
                      <NavigationMenuLink
                        onClick={() => {
                          navigate(item.path);
                          setIsMenuOpen(false);
                        }}
                        className="block w-full py-3 text-center hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </motion.div>
                ))}

                <motion.div
                  variants={itemVariants}
                  className="flex space-x-4 w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => navigate('/login')}
                  >
                    Login
                  </Button>
                  <Button
                    className="w-full"
                    onClick={() => navigate('/signup')}
                  >
                    Sign Up
                  </Button>
                </motion.div>
              </NavigationMenuList>
            </NavigationMenu>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
