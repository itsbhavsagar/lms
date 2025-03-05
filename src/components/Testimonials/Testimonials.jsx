import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      quote:
        'This platform completely transformed my coding skills. The structured courses and expert instructors made learning complex concepts so much easier.',
      image: '/api/placeholder/100/100',
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Specialist',
      quote:
        'I was able to advance my career by learning digital marketing strategies through their comprehensive courses. Highly recommended!',
      image: '/api/placeholder/100/100',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Data Analyst',
      quote:
        'The data science learning path was instrumental in helping me transition into a new field. The support and resources are top-notch.',
      image: '/api/placeholder/100/100',
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What Our Learners Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Hear from professionals who have transformed their careers with our
          learning platform.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-md relative"
          >
            <Quote className="absolute top-4 left-4 text-blue-100" size={48} />
            <div className="text-center">
              <p className="italic mb-4 relative z-10">"{testimonial.quote}"</p>
              <div className="flex items-center justify-center space-x-4 mt-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
