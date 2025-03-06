import React, { useMemo, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Menu, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import DesktopNav from './navigation/DesktopNav';
import MobileNav from './navigation/MobileNav';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const courseItems = useMemo(
    () => [
      { name: 'Web Development', path: '/courses/web-development' },
      { name: 'Data Science', path: '/courses/data-science' },
      { name: 'Mobile Development', path: '/courses/mobile-development' },
      { name: 'UX/UI Design', path: '/courses/design' },
      { name: 'Machine Learning', path: '/courses/machine-learning' },
    ],
    []
  );

  const menuItems = useMemo(
    () => [
      { name: 'Home', path: '/' },
      { name: 'Courses', path: '/course', subItems: courseItems },
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contact' },
    ],
    [courseItems]
  );

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden mr-3">
              <Button
                variant="outline"
                size="icon"
                aria-label="Open mobile menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[280px] sm:w-[320px] p-0 bg-white dark:bg-gray-900 shadow-md border-r overflow-y-auto"
            >
              <SheetHeader className="p-4 border-b border-gray-200 dark:border-gray-700">
                <SheetTitle className="flex items-center space-x-2">
                  <GraduationCap className="text-blue-600" size={24} />
                  <span className="dark:text-white">LearnHub</span>
                </SheetTitle>
              </SheetHeader>

              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium dark:text-white">
                    Theme
                  </span>
                  {mounted && (
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={toggleTheme}
                      aria-label="Toggle Theme"
                    >
                      {theme === 'dark' ? (
                        <Sun className="h-5 w-5 text-yellow-400" />
                      ) : (
                        <Moon className="h-5 w-5 text-gray-800" />
                      )}
                    </Button>
                  )}
                </div>
              </div>

              <div className="grid gap-2 p-4 border-b border-gray-200 dark:border-gray-700">
                <Button
                  variant="outline"
                  className="w-full justify-center"
                  onClick={() => {
                    handleNavigation('/login');
                  }}
                >
                  Login
                </Button>
                <Button
                  className="w-full justify-center"
                  onClick={() => {
                    handleNavigation('/signup');
                  }}
                >
                  Sign Up
                </Button>
              </div>

              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="font-medium mb-2 dark:text-white">
                  Most Popular Courses
                </h3>
                <div className="grid gap-1">
                  {courseItems.map((course) => (
                    <Button
                      key={course.path}
                      variant="ghost"
                      className="w-full justify-start text-sm px-2 py-1 h-auto"
                      onClick={() => handleNavigation(course.path)}
                    >
                      {course.name}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-medium mb-2 dark:text-white">Navigation</h3>
                <MobileNav
                  menuItems={menuItems}
                  onNavigate={handleNavigation}
                />
              </div>
            </SheetContent>
          </Sheet>

          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <GraduationCap className="text-blue-600" size={32} />
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              LearnHub
            </h1>
          </div>
        </div>

        <DesktopNav menuItems={menuItems} onNavigate={handleNavigation} />

        <div className="hidden md:flex space-x-4 items-center">
          {mounted && (
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-800" />
              )}
            </Button>
          )}

          <Button
            variant="outline"
            onClick={() => navigate('/login')}
            aria-label="Login"
          >
            Login
          </Button>
          <Button onClick={() => navigate('/signup')} aria-label="Sign Up">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
