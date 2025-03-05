import React from 'react';
import { Button } from '@/components/ui/button';
import { Accordion } from '@radix-ui/react-accordion';
import Home from './components/Home';
import CoursesPage from './components/Course';
const App = () => {
  return (
    <div>
      <Home />
      <CoursesPage />
    </div>
  );
};

export default App;
