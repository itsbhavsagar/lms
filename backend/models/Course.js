import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  rating: { type: Number, required: true },
  reviews: { type: Number, required: true },
  students: { type: Number, required: true },
  duration: { type: String, required: true },
  durationHours: { type: Number, required: true },
  level: { type: String, required: true },
  certification: { type: Boolean, required: true },
  instructor: { type: String, required: true },
  isBestseller: { type: Boolean, required: true },
  isPopular: { type: Boolean, required: true },
  tags: [{ type: String }],
});

export default mongoose.model('Course', courseSchema);
