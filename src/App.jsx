import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import Home from './components/Home';
import Dashboard from './components/Dashboard/Dashboard';
import CoursesPage from './components/Courses';
import CourseInfo from './components/CourseInfo';
import Layout from './components/Layout';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/course" element={<CoursesPage />} />
            <Route path="/courses/:id" element={<CourseInfo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
