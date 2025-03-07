// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
// } from 'react-router-dom';

// import { ThemeProvider } from './context/ThemeContext';
// import { CartProvider } from './context/CartContext';
// import Dashboard from './components/Dashboard/Dashboard';
// import SingleCourse from './components/Courses/SingleCourse';
// import CoursesPage from './components/Courses/Courses';
// import Cart from './components/Cart/Cart';
// import Layout from './components/Layout';
// import Login from './components/Login';
// import Signup from './components/SignUp';
// import Footer from './components/Footer/Footer';
// import NotFound from './NotFound/NotFound';

// const AppContent = () => {
//   const location = useLocation();
//   const noFooterRoutes = ['/login', '/signup', '/*'];
//   const isCourseInfoPage = location.pathname.startsWith('/courses/');
//   const showFooter =
//     !noFooterRoutes.includes(location.pathname) && !isCourseInfoPage;

//   return (
//     <div className='flex flex-col min-h-screen'>
//       <Routes>
//         <Route element={<Layout />}>
//           <Route path='/' element={<Dashboard />} />
//           <Route path='/course' element={<CoursesPage />} />
//           <Route path='/course/:id' element={<SingleCourse />} />{' '}
//           {/* Add this route */}
//           <Route path='/cart' element={<Cart />} /> {/* Add this route */}
//           <Route path='/courses/:id' element={<SingleCourse />} />{' '}
//           {/* Add this route */}
//           <Route path='/login' element={<Login />} />
//           <Route path='/signup' element={<Signup />} />
//           <Route path='*' element={<NotFound />} />
//         </Route>
//       </Routes>
//       {showFooter && <Footer />}
//     </div>
//   );
// };

// const App = () => (
//   <ThemeProvider>
//     <Router>
//       <AppContent />
//     </Router>
//   </ThemeProvider>
// );

// export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext'; // Import the CartProvider
import Dashboard from './components/Dashboard/Dashboard';
import SingleCourse from './components/Courses/SingleCourse';
import CoursesPage from './components/Courses/Courses';
import Cart from './components/Cart/Cart';
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
    <div className='flex flex-col min-h-screen'>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='/course' element={<CoursesPage />} />
          <Route path='/course/:id' element={<SingleCourse />} />{' '}
          {/* Add this route */}
          <Route path='/cart' element={<Cart />} /> {/* Add this route */}
          <Route path='/courses/:id' element={<SingleCourse />} />{' '}
          {/* Add this route */}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <CartProvider>
      {' '}
      {/* Wrap the Router with CartProvider */}
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  </ThemeProvider>
);

export default App;
