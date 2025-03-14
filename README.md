# Learning Management System (LMS)

A modern, feature-rich Learning Management System built with the MERN stack (MongoDB, Express.js, React, Node.js). This platform allows users to browse, purchase, and consume educational courses with an intuitive interface and robust backend.

![LMS Platform](https://placeholder-image-url.com/lms-screenshot.png)

## 🚀 Features

- **User Authentication & Authorization**
  - Secure signup and login
  - JWT-based authentication

- **Course Management**
  - Browse courses with advanced filtering and search
  - Course categories and learning paths
  - Detailed course pages with curriculum, instructor info, and reviews

- **E-Commerce Functionality**
  - Shopping cart management
  - Checkout process
  - Order history

- **User Dashboard**
  - Progress tracking
  - Enrolled courses
  - Personalized recommendations

- **Responsive Design**
  - Optimized for all devices (desktop, tablet, mobile)
  - Dark/light mode support

## 🏗️ Tech Stack

### Backend

- **Node.js & Express.js**: Server framework
- **MongoDB & Mongoose**: NoSQL database and ODM
- **JSON Web Token (JWT)**: Authentication
- **bcrypt**: Password hashing
- **Multer**: File uploads
- **Express-validator**: Request validation
- **Cors**: Cross-Origin Resource Sharing

### Frontend

- **React 18**: UI library
- **Vite**: Build tool
- **Redux Toolkit**: State management
- **React Router**: Navigation
- **TailwindCSS**: Utility-first CSS framework
- **Radix UI**: Headless component primitives
- **Framer Motion & GSAP**: Animation libraries
- **React Query**: Data fetching and caching
- **Axios**: HTTP client
- **React Hook Form**: Form management

## 🏛️ Architecture

The application follows a client-server architecture with clear separation of concerns:

```
├── Backend (API Server)
│   ├── Controllers: Business logic
│   ├── Models: Database schemas
│   ├── Routes: API endpoints
│   ├── Middleware: Request processors
│   └── Utils: Helper functions
│
└── Frontend (React Application)
    ├── Components: Reusable UI elements
    ├── Pages: Route-level components
    ├── Store: Redux state management
    ├── Services: API client
    ├── Hooks: Custom React hooks
    └── Utils: Helper functions
```

## 🛠️ Setup and Installation

### Prerequisites

- Node.js (v16 or higher)
- MongoDB
- npm or yarn

### Backend Setup

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/lms-platform.git
   cd lms-platform
   ```

2. Install backend dependencies
   ```bash
   cd backend
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/lms
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   ```

4. Start the backend server
   ```bash
   npm run dev
   ```
   The server will run on http://localhost:5000

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory
   ```bash
   cd frontend
   ```

2. Install frontend dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the frontend directory:
   ```
   VITE_API_URL=http://localhost:5000/api
   ```

4. Start the frontend development server
   ```bash
   npm run dev
   ```
   The application will be available at http://localhost:5173

## 📝 API Documentation

### Authentication Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login with credentials
- `GET /api/auth/user` - Get logged in user details

### Course Endpoints

- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get course details
- `POST /api/courses` - Create a new course (admin/instructor)
- `PUT /api/courses/:id` - Update a course (admin/instructor)
- `DELETE /api/courses/:id` - Delete a course (admin/instructor)

### Cart & Checkout Endpoints

- `GET /api/cart` - Get user's cart
- `POST /api/cart` - Add item to cart
- `DELETE /api/cart/:courseId` - Remove item from cart
- `POST /api/checkout` - Process checkout

## 🧪 Testing

### Backend

```bash
cd backend
npm test
```

### Frontend

```bash
cd frontend
npm test
```

## 🚀 Deployment

### Backend Deployment

The backend can be deployed to platforms like Heroku, AWS, or DigitalOcean.

Example for Heroku:
```bash
heroku create
git subtree push --prefix backend heroku main
```

### Frontend Deployment

The frontend can be deployed to platforms like Vercel, Netlify, or Firebase Hosting.

Example for Vercel:
```bash
cd frontend
vercel
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributors

- are welcome to contribute

## 🙏 Acknowledgements

- [React Documentation](https://reactjs.org/)
- [Express Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

