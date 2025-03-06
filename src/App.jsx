import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Dashboard from './components/Dashboard/Dashboard';
import CoursesPage from './components/Courses/Courses';
import CourseInfo from './components/CourseInfo';
import Layout from './components/Layout';
import Login from './components/Login';
import Signup from './components/SignUp';
import Footer from './components/Footer/Footer';
import NotFound from './NotFound/NotFound';

const AppContent = () => {
  const location = useLocation();
  const noFooterRoutes = ['/login', '/signup', '/*'];
  const isCourseInfoPage = location.pathname.startsWith('/courses/');
  const showFooter =
    !noFooterRoutes.includes(location.pathname) && !isCourseInfoPage;

  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/course" element={<CoursesPage />} />
          <Route path="/courses/:id" element={<CourseInfo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <Router>
      <AppContent />
    </Router>
  </ThemeProvider>
);

export default App;
