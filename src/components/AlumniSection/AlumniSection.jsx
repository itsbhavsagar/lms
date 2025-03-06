import React from 'react';
import { motion } from 'framer-motion';
import CompanyLogo from './CompanyLogo';
import companyLogos from '../../data/companyLogos';

const AlumniSection = () => {
  const duplicatedLogos = [...companyLogos, ...companyLogos];

  const animationVariants = {
    animate: {
      x: ['0%', '-50%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20,
          ease: 'linear',
        },
      },
    },
  };

  return (
    <section className="container mx-auto px-4 py-12 overflow-hidden bg-gray-100">
      <motion.h2
        className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        Where Our Alumni Thrive
      </motion.h2>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex whitespace-nowrap"
          variants={animationVariants}
          animate="animate"
        >
          {duplicatedLogos.map((company, index) => (
            <CompanyLogo key={`${company.name}-${index}`} company={company} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AlumniSection;
