import Course from '../models/Course.js';

// Get all courses with filtering
export const getAllCourses = async (req, res, next) => {
  try {
    const { search, minPrice, maxPrice, rating, duration } = req.query;
    let query = {};

    // Search filter
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ];
    }

    // Price filter
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    // Rating filter
    if (rating) {
      query.rating = { $gte: Number(rating) };
    }

    // Duration filter
    if (duration && duration !== 'all') {
      if (duration === 'short') {
        query.durationHours = { $lte: 5 };
      } else if (duration === 'medium') {
        query.durationHours = { $gt: 5, $lte: 20 };
      } else if (duration === 'long') {
        query.durationHours = { $gt: 20 };
      }
    }

    const courses = await Course.find(query);
    res.status(200).json(courses);
  } catch (error) {
    next(error);
  }
};

// Get single course (unchanged)
export const getCourseById = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json(course);
  } catch (error) {
    next(error);
  }
};
