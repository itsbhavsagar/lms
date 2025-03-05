// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardFooter,
// } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Star, Filter } from 'lucide-react';
// import courses from '@/data/coursesData';

// const CoursesPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   const categories = [
//     'All',
//     'Web Development',
//     'Data Science',
//     'Machine Learning',
//     'Business',
//     'Design',
//   ];

//   const courses = [
//     {
//       id: 1,
//       title: 'React Masterclass',
//       description: 'Advanced React development from basics to production',
//       category: 'Web Development',
//       price: 49.99,
//       rating: 4.7,
//       image: '/api/placeholder/300/200',
//     },
//     {
//       id: 2,
//       title: 'Python for Data Science',
//       description: 'Comprehensive Python data analysis and visualization',
//       category: 'Data Science',
//       price: 59.99,
//       rating: 4.9,
//       image: '/api/placeholder/300/200',
//     },
//     {
//       id: 3,
//       title: 'Machine Learning Fundamentals',
//       description: 'Introduction to machine learning algorithms',
//       category: 'Machine Learning',
//       price: 79.99,
//       rating: 4.5,
//       image: '/api/placeholder/300/200',
//     },
//     // More courses...
//   ];

//   const filteredCourses =
//     selectedCategory === 'All'
//       ? courses
//       : courses.filter((course) => course.category === selectedCategory);

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-8 text-center">
//         Explore Our Courses
//       </h1>

//       {/* Category Filters */}
//       <div className="flex justify-center space-x-4 mb-8">
//         {categories.map((category) => (
//           <Button
//             key={category}
//             variant={selectedCategory === category ? 'default' : 'outline'}
//             onClick={() => setSelectedCategory(category)}
//             className="flex items-center"
//           >
//             <Filter className="mr-2" size={16} />
//             {category}
//           </Button>
//         ))}
//       </div>

//       {/* Courses Grid */}
//       <motion.div
//         className="grid md:grid-cols-3 gap-6"
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: { opacity: 0 },
//           visible: {
//             opacity: 1,
//             transition: {
//               delayChildren: 0.2,
//               staggerChildren: 0.1,
//             },
//           },
//         }}
//       >
//         {filteredCourses.map((course) => (
//           <motion.div
//             key={course.id}
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: {
//                 opacity: 1,
//                 y: 0,
//                 transition: { duration: 0.5 },
//               },
//             }}
//             whileHover={{
//               scale: 1.05,
//               transition: { duration: 0.2 },
//             }}
//           >
//             <Card className="overflow-hidden">
//               <CardHeader>
//                 <img
//                   src={course.image}
//                   alt={course.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <CardTitle>{course.title}</CardTitle>
//                 <CardDescription>{course.description}</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center text-yellow-500">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         fill={
//                           i < Math.floor(course.rating)
//                             ? 'currentColor'
//                             : 'none'
//                         }
//                         size={20}
//                       />
//                     ))}
//                     <span className="ml-2 text-gray-600">
//                       ({course.rating})
//                     </span>
//                   </div>
//                   <span className="font-bold text-xl">${course.price}</span>
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button className="w-full">Enroll Now</Button>
//               </CardFooter>
//             </Card>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default CoursesPage;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Filter } from 'lucide-react';
import courses from '@/data/coursesData'; // Importing courses from separate file

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Web Development',
    'Data Science',
    'Machine Learning',
    'Business',
    'Design',
  ];

  const filteredCourses =
    selectedCategory === 'All'
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Explore Our Courses
      </h1>

      {/* Category Filters */}
      <div className="flex justify-center space-x-4 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category)}
            className="flex items-center"
          >
            <Filter className="mr-2" size={16} />
            {category}
          </Button>
        ))}
      </div>

      {/* Courses Grid */}
      <motion.div
        className="grid md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.2,
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {filteredCourses.map((course) => (
          <motion.div
            key={course.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 },
              },
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            <Card className="overflow-hidden">
              <CardHeader>
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        fill={
                          i < Math.floor(course.rating)
                            ? 'currentColor'
                            : 'none'
                        }
                        size={20}
                      />
                    ))}
                    <span className="ml-2 text-gray-600">
                      ({course.rating})
                    </span>
                  </div>
                  <span className="font-bold text-xl">${course.price}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Enroll Now</Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CoursesPage;
