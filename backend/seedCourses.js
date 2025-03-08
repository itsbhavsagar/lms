import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Course from './models/Course.js';
import sampleCoursesData from '../frontend/src/data/sampleCoursesData.js';
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected for seeding'))
  .catch((err) => console.error('MongoDB connection error:', err));

const seedCourses = async () => {
  try {
    await Course.deleteMany({});

    const coursesToSeed = sampleCoursesData.map(({ id, ...course }) => course);

    await Course.insertMany(coursesToSeed);

    process.exit();
  } catch (error) {
    console.error('Error seeding courses:', error);
    process.exit(1);
  }
};

seedCourses();
