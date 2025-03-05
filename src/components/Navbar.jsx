import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import DesktopNav from './Navigation/DesktopNav';
import MobileNav from './Navigation/MobileNav';
import AuthButtons from './AuthButton/AuthButtons';

const Navbar = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = useMemo(
    () => [
      { name: 'Home', path: '/' },
      { name: 'Courses', path: '/course' },
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contact' },
    ],
    []
  );

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <GraduationCap className="text-blue-600" size={32} />
          <h1 className="text-2xl font-bold text-gray-800">LearnHub</h1>
        </div>

        <DesktopNav menuItems={menuItems} onNavigate={handleNavigation} />
        <div className="hidden md:flex space-x-4">
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

        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" aria-label="Open mobile menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[250px] sm:w-[300px] p-4 bg-white shadow-md border-r transition-all duration-300 ease-in-out"
          >
            <SheetHeader>
              <SheetTitle className="flex items-center space-x-2">
                <GraduationCap className="text-blue-600" size={24} />
                <span>LearnHub</span>
              </SheetTitle>
            </SheetHeader>

            <MobileNav menuItems={menuItems} onNavigate={handleNavigation} />
            <AuthButtons
              onLogin={() => navigate('/login')}
              onSignUp={() => navigate('/signup')}
            />
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
