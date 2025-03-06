export const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08 },
  }),
  hover: {
    scale: 1.03,
    boxShadow:
      '0 10px 15px -5px rgba(0,0,0,0.1), 0 5px 10px -5px rgba(0,0,0,0.04)',
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
};

export const floatingVariants = {
  leftToRight: {
    x: [-10, 10],
    y: [-5, 5],
    rotate: [-2, 2],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 3,
        ease: 'easeInOut',
      },
      y: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 2,
        ease: 'easeInOut',
      },
      rotate: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 4,
        ease: 'easeInOut',
      },
    },
  },
  rightToLeft: {
    x: [10, -10],
    y: [5, -5],
    rotate: [2, -2],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 3.5,
        ease: 'easeInOut',
      },
      y: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 2.5,
        ease: 'easeInOut',
      },
      rotate: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 4.5,
        ease: 'easeInOut',
      },
    },
  },
};

export const getGradientFromColor = (color) => {
  const colorMap = {
    blue: 'from-blue-500 to-blue-400',
    green: 'from-green-500 to-green-400',
    purple: 'from-purple-500 to-purple-400',
    orange: 'from-orange-500 to-orange-400',
    teal: 'from-teal-500 to-teal-400',
    yellow: 'from-yellow-500 to-yellow-400',
  };
  return colorMap[color] || 'from-gray-500 to-gray-400';
};
