import React from 'react';
import Home from '../Home';
import FeaturedCourses from '../FeaturedCourses/FeaturedCourses';
import LearningCategories from '../LearningCategories/LearningCategories';
import LearningPath from '../LearningPath/LearningPath';
import Testimonials from '../Testimonials/Testimonials';

const Dashboard = () => {
  return (
    <div>
      <Home />
      <FeaturedCourses />
      <LearningCategories />
      <LearningPath />
      <Testimonials />
    </div>
  );
};

export default Dashboard;
