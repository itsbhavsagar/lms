import React from 'react';
import { motion } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Book, GraduationCap, Users, ChevronRight } from 'lucide-react';

const Home = () => {
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-2">
            <GraduationCap className="text-blue-600" size={32} />
            <h1 className="text-2xl font-bold text-gray-800">LearnHub</h1>
          </div>

          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Courses
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className="text-gray-700 hover:text-blue-600"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="./Course.jsx"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex space-x-4">
            <Button variant="outline">Login</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        className="container mx-auto px-4 pt-24 pb-16 text-center"
      >
        <motion.h1
          className="text-5xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Learn Anything, Anytime, Anywhere
        </motion.h1>

        <motion.p
          className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Discover a world of knowledge with our comprehensive online learning
          platform. Access courses from top instructors and transform your
          future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Button size="lg" className="mr-4">
            Browse Courses <ChevronRight className="ml-2" />
          </Button>
          <Button variant="secondary" size="lg">
            Learn More
          </Button>
        </motion.div>
      </motion.header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose LearnHub?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide cutting-edge learning experiences that empower you to
            grow personally and professionally.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Book className="text-blue-600" size={48} />,
              title: 'Diverse Courses',
              description:
                'Explore 1000+ courses across various disciplines and skill levels.',
            },
            {
              icon: <Users className="text-green-600" size={48} />,
              title: 'Expert Instructors',
              description:
                'Learn from industry professionals and experienced educators.',
            },
            {
              icon: <GraduationCap className="text-purple-600" size={48} />,
              title: 'Certification',
              description:
                'Earn recognized certificates to boost your professional profile.',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 p-6 rounded-lg text-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
