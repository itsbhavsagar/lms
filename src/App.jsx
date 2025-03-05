import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard/Dashboard';
import CoursesPage from './components/Course';
import CourseDetail from './components/CourseDetail';
import Layout from './components/Layout';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/course" element={<CoursesPage />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
