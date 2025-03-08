import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import clsx from 'clsx';

const colorMap = {
  red: 'bg-red-100 text-red-600',
  blue: 'bg-blue-100 text-blue-600',
  green: 'bg-green-100 text-green-600',
  yellow: 'bg-yellow-100 text-yellow-600',
  gray: 'bg-gray-100 text-gray-600',
};

const CategoryCard = ({
  category,
  index,
  cardVariants,
  floatingVariants,
  getGradientFromColor,
}) => {
  const { theme } = useTheme();

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true, amount: 0.1 }}
      className={clsx(
        'flex-none w-72 mr-4 snap-start rounded-lg shadow-sm overflow-hidden h-full lg:w-full lg:mr-0',
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'
      )}
    >
      <div className="relative h-32 sm:h-36 overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${getGradientFromColor(
            category.color
          )} opacity-60`}
        ></div>
        <div className="absolute inset-0">
          {category.floatingImages.map((img, imgIndex) => (
            <motion.div
              key={`${category.name}-img-${imgIndex}`}
              className="absolute rounded-lg overflow-hidden shadow-lg"
              style={{
                width: `${50 - imgIndex * 10}px`,
                height: `${40 - imgIndex * 8}px`,
                left: `${15 + imgIndex * 25}%`,
                top: `${20 + imgIndex * 20}%`,
                zIndex: 10 - imgIndex,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                ...floatingVariants[
                  img.direction === 'left-to-right'
                    ? 'leftToRight'
                    : 'rightToLeft'
                ],
              }}
              transition={{ delay: 0.2 * (index + imgIndex) }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center mb-2">
          <div
            className={clsx(
              'p-2 rounded-lg mr-3',
              colorMap[category.color] || 'bg-gray-100 text-gray-600'
            )}
          >
            {category.icon}
          </div>
          <h3 className="text-lg font-bold">{category.name}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
          {category.description}
        </p>

        <div className="flex justify-between items-center">
          <div
            className={clsx('text-xs font-medium', colorMap[category.color])}
          >
            {category.courses} Courses
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={clsx(
              'text-xs px-3 py-1 rounded-full font-medium',
              colorMap[category.color] || 'bg-gray-100 text-gray-600'
            )}
          >
            Explore
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CategoryCard;
