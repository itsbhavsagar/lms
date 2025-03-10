import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Dashboard from './components/Dashboard/Dashboard';
import SingleCourse from './components/Courses/SingleCourse/SingleCourse';
import Courses from './components/Courses/Courses';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
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
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<SingleCourse />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
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
    <AuthProvider>
      <CartProvider>
        <Router>
          <AppContent />
        </Router>
      </CartProvider>
    </AuthProvider>
  </ThemeProvider>
);

export default App;
