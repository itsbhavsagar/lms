import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Clock, BarChart, BookOpen, Check, Download } from 'lucide-react';
import courses from '@/data/coursesData';

const CourseInfo = () => {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === courseId);
  const [selectedPlan, setSelectedPlan] = useState('oneTime');

  if (!course) {
    return <div>Course Not Found</div>;
  }

  const purchasePlans = [
    {
      type: 'oneTime',
      title: 'One-Time Purchase',
      price: course.price,
      description: 'Full lifetime access to the course',
    },
    {
      type: 'monthly',
      title: 'Monthly Subscription',
      price: (course.price / 6).toFixed(2),
      description: 'Access to this course and our entire library',
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3 space-y-6">
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-[400px] object-cover"
            />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Course Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{course.description}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What You'll Learn</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {course.learningOutcomes.map((outcome, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="mr-2 text-green-500" size={20} />
                    {outcome}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Course Details</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <Clock className="mr-2" size={20} />
                <span>Duration: {course.duration}</span>
              </div>
              <div className="flex items-center">
                <BarChart className="mr-2" size={20} />
                <span>Difficulty: {course.difficulty}</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="mr-2" size={20} />
                <span>Lectures: {course.lectures}</span>
              </div>
              <div className="flex items-center">
                <Download className="mr-2" size={20} />
                <span>
                  Downloadable Resources: {course.resources ? 'Yes' : 'No'}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="w-full md:w-1/3 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Purchase Course</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      fill={
                        i < Math.floor(course.rating) ? 'currentColor' : 'none'
                      }
                      size={20}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">({course.rating})</span>
                </div>
              </div>

              <div className="flex mb-4">
                {purchasePlans.map((plan) => (
                  <Button
                    key={plan.type}
                    variant={selectedPlan === plan.type ? 'default' : 'outline'}
                    className="mr-2"
                    onClick={() => setSelectedPlan(plan.type)}
                  >
                    {plan.type === 'oneTime' ? 'One-Time' : 'Monthly'}
                  </Button>
                ))}
              </div>

              {purchasePlans.map(
                (plan) =>
                  selectedPlan === plan.type && (
                    <div key={plan.type} className="text-center">
                      <h3 className="text-2xl font-bold mb-2">${plan.price}</h3>
                      <p className="text-gray-600 mb-4">{plan.description}</p>
                      <Button size="lg" className="w-full">
                        Buy Now
                      </Button>
                    </div>
                  )
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
