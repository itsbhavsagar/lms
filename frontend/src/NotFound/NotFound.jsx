import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Rocket } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hover: {
      rotate: [0, 5, -5, 0],
      transition: { repeat: Infinity, duration: 2 },
    },
  };

  const funnyImage =
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages3.alphacoders.com%2F922%2Fthumb-1920-922681.jpg&f=1&nofb=1&ipt=cc882ee57a4614683c59bd0b8cc0c23be4c54261205bc416071d623ab36b465b&ipo=images';

  return (
    <motion.div
      className='min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)] px-4 py-8'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <div className='text-center space-y-6 max-w-4xl mx-auto'>
        <motion.div
          className='relative mx-auto w-64 md:w-80 lg:w-96'
          variants={imageVariants}
          whileHover='hover'
        >
          <img
            src={funnyImage}
            alt='Confused astronaut with web tools'
            className='w-full h-auto object-contain'
          />

          <motion.div
            className='absolute top-0 left-0 w-14 h-14 bg-yellow-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-800'
            animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            JS
          </motion.div>
          <motion.div
            className='absolute bottom-0 right-0 w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center text-xs font-bold text-gray-800'
            animate={{ y: [0, 10, 0], rotate: [0, -10, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
          >
            CSS
          </motion.div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800'
          variants={itemVariants}
        >
          404 - Lost in Space!
        </motion.h1>

        {/* Message */}
        <motion.p
          className='text-base md:text-lg text-gray-600 max-w-md mx-auto'
          variants={itemVariants}
        >
          You've gone where no coder has gone before! Let’s find our way back to
          Earth.
        </motion.p>

        {/* Button */}
        <motion.div variants={itemVariants}>
          <Button
            className='bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full flex items-center gap-2 mx-auto'
            onClick={() => navigate('/')}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Rocket size={20} />
            Back to Home
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFound;
