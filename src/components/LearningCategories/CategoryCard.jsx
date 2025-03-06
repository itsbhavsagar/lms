import { motion } from 'framer-motion';

const CategoryCard = ({
  category,
  index,
  cardVariants,
  floatingVariants,
  getGradientFromColor,
}) => (
  <motion.div
    custom={index}
    variants={cardVariants}
    initial="initial"
    whileInView="animate"
    whileHover="hover"
    viewport={{ once: true, amount: 0.1 }}
    className="flex-none w-72 mr-4 snap-start bg-white rounded-lg shadow-sm overflow-hidden h-full lg:w-full lg:mr-0"
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
        <div className={`p-2 rounded-lg bg-${category.color}-100 mr-3`}>
          {category.icon}
        </div>
        <h3 className="text-lg font-bold">{category.name}</h3>
      </div>
      <p className="text-gray-600 text-sm mb-3">{category.description}</p>
      <div className="flex justify-between items-center">
        <div className={`text-xs text-${category.color}-600 font-medium`}>
          {category.courses} Courses
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`text-xs px-3 py-1 rounded-full bg-${category.color}-100 text-${category.color}-600 font-medium`}
        >
          Explore
        </motion.button>
      </div>
    </div>
  </motion.div>
);

export default CategoryCard;
