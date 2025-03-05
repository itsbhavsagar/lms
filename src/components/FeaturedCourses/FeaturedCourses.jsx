import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, BookOpen, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

const FeaturedCoursesSection = () => {
  const sectionRef = useRef(null);
  const courseRefs = useRef([]);

  const featuredCourses = [
    {
      id: 1,
      title: 'Web Development Masterclass',
      instructor: 'John Smith',
      level: 'Intermediate',
      rating: 4.8,
      students: 5200,
      icon: <TrendingUp className="text-blue-600" size={32} />,
      description:
        'Master modern web technologies and build responsive applications.',
    },
    {
      id: 2,
      title: 'Data Science Fundamentals',
      instructor: 'Emily Chen',
      level: 'Beginner',
      rating: 4.7,
      students: 4800,
      icon: <BookOpen className="text-green-600" size={32} />,
      description:
        'Learn data analysis, visualization, and machine learning basics.',
    },
    {
      id: 3,
      title: 'Advanced Python Programming',
      instructor: 'Michael Johnson',
      level: 'Advanced',
      rating: 4.9,
      students: 6100,
      icon: <Star className="text-yellow-500" size={32} />,
      description:
        'Deep dive into advanced Python concepts and software engineering.',
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelector('h2'),
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    courseRefs.current.forEach((courseEl, index) => {
      gsap.fromTo(
        courseEl,
        {
          opacity: 0,
          y: 100,
          rotationX: -45,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      courseEl.addEventListener('mouseenter', () => {
        gsap.to(courseEl, {
          scale: 1.05,
          boxShadow:
            '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
          duration: 0.3,
          ease: 'power1.out',
        });
      });

      courseEl.addEventListener('mouseleave', () => {
        gsap.to(courseEl, {
          scale: 1,
          boxShadow: 'none',
          duration: 0.3,
          ease: 'power1.out',
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="container mx-auto px-4 py-16 overflow-hidden"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 opacity-0">Featured Courses</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our top-rated courses that can help you advance your skills
          and career.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {featuredCourses.map((course, index) => (
          <div
            key={course.id}
            ref={(el) => (courseRefs.current[index] = el)}
            className="opacity-0"
          >
            <Card className="h-full flex flex-col">
              <CardHeader className="flex-row items-center space-x-4 pb-2">
                {course.icon}
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-4">
                  <p className="text-sm text-gray-500">{course.description}</p>
                  <div>
                    <p className="text-sm text-gray-500">
                      Instructor: {course.instructor}
                    </p>
                    <p className="text-sm text-gray-500">
                      Level: {course.level}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-yellow-500">
                      <Star fill="currentColor" size={20} />
                      <span className="ml-2 text-gray-600">
                        {course.rating} ({course.students} students)
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <div className="p-4">
                <Button className="w-full">Explore Course</Button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCoursesSection;
