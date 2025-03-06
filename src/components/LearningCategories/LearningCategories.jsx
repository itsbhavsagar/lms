import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, PieChart, Zap, Briefcase, Globe } from 'lucide-react';

const LearningCategoriesSection = () => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const categories = [
    {
      name: 'Web Development',
      icon: <Code className="text-blue-600" size={32} />,
      description: 'Master frontend and backend technologies',
      courses: 42,
      color: 'blue',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.frontendmasters.com%2Fassets%2Fcourses%2F2024-07-24-backend-architectures%2Fposterframe.jpg&f=1&nofb=1&ipt=45244c4f8847444d05bc8877694ec27496572e7e261e393d951ed174759cc156&ipo=images',
      floatingImages: [
        {
          src: 'https://miro.medium.com/v2/resize:fit:1000/1*1u2p917cvlyP6SuHcq3t0Q.jpeg',
          alt: 'HTML code editor',
          direction: 'left-to-right',
        },
        {
          src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fpracticaldev%2Fimage%2Ffetch%2Fs--qo_Wp38Z--%2Fc_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_880%2Fhttps%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fe0nl7ziy1la7bpwj7rsp.png&f=1&nofb=1&ipt=c99085e11a91b58aae792070562a71444196faff75cf9d213c113c894498b5d2&ipo=images',
          alt: 'React component',
          direction: 'right-to-left',
        },
        {
          src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogodix.com%2Flogo%2F2090013.jpg&f=1&nofb=1&ipt=75487d58bea06feb31e58e459f9859bb95699d418691fc67813ca3abfc65a12c&ipo=images',
          alt: 'React component',
          direction: 'right-to-left',
        },
      ],
    },
    {
      name: 'Data Science',
      icon: <Database className="text-green-600" size={32} />,
      description: 'Learn analytics and machine learning',
      courses: 35,
      color: 'green',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.henryharvin.com%2Fblog%2Fwp-content%2Fuploads%2F2020%2F05%2Fdata-1.jpg&f=1&nofb=1&ipt=83073d3214c00f7bc78642de2eb101cc75f23763ac21ad0d2cd71f30cbbd2510&ipo=images',
      floatingImages: [
        {
          src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F012%2F697%2F295%2Fnon_2x%2F3d-python-programming-language-logo-free-png.png&f=1&nofb=1&ipt=c929f70faae1ed9dfcca103cd140152a8a46acb1f85e08c8658491024df9e6a5&ipo=images',
          alt: 'Data visualization',
          direction: 'right-to-left',
        },
        {
          src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fuxwing.com%2Fwp-content%2Fthemes%2Fuxwing%2Fdownload%2Fbrands-and-social-media%2Fgoogle-tensorflow-icon.png&f=1&nofb=1&ipt=5368df25df5592818b5f69403fec81674abe8c966a604eb4ac749339fe6319a2&ipo=images',
          alt: 'Machine learning model',
          direction: 'left-to-right',
        },
      ],
    },
    {
      name: 'Business',
      icon: <Briefcase className="text-purple-600" size={32} />,
      description: 'Develop professional skills',
      courses: 28,
      color: 'purple',
      image:
        'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      floatingImages: [
        {
          src: '/api/placeholder/200/150',
          alt: 'Business meeting',
          direction: 'left-to-right',
        },
        {
          src: '/api/placeholder/180/140',
          alt: 'Financial chart',
          direction: 'right-to-left',
        },
      ],
    },
    {
      name: 'Digital Marketing',
      icon: <PieChart className="text-orange-600" size={32} />,
      description: 'Grow your online presence',
      courses: 24,
      color: 'orange',
      image:
        'https://media.istockphoto.com/id/2008262446/photo/digital-marketing-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=6AJ2SK3SXqZTaknqkHFKDrSdqOwKc-SZ4QllDk-LdOQ=',
      floatingImages: [
        {
          src: '/api/placeholder/200/150',
          alt: 'Social media dashboard',
          direction: 'right-to-left',
        },
        {
          src: '/api/placeholder/180/140',
          alt: 'Marketing funnel',
          direction: 'left-to-right',
        },
      ],
    },
    {
      name: 'Languages',
      icon: <Globe className="text-teal-600" size={32} />,
      description: 'Learn global communication',
      courses: 18,
      color: 'teal',
      image:
        'https://plus.unsplash.com/premium_photo-1666739032615-ecbd14dfb543?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      floatingImages: [
        {
          src: '/api/placeholder/200/150',
          alt: 'Language translation',
          direction: 'left-to-right',
        },
        {
          src: '/api/placeholder/180/140',
          alt: 'World map',
          direction: 'right-to-left',
        },
      ],
    },
    {
      name: 'Productivity',
      icon: <Zap className="text-yellow-600" size={32} />,
      description: 'Enhance personal efficiency',
      courses: 20,
      color: 'yellow',
      image:
        'https://images.unsplash.com/photo-1627850604058-52e40de1b847?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG8lMjBkb3xlbnwwfHwwfHx8MA%3D%3D',
      floatingImages: [
        {
          src: '/api/placeholder/200/150',
          alt: 'Task management',
          direction: 'right-to-left',
        },
        {
          src: '/api/placeholder/180/140',
          alt: 'Time tracking',
          direction: 'left-to-right',
        },
      ],
    },
  ];

  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: i * 0.08,
      },
    }),
    hover: {
      scale: 1.03,
      boxShadow:
        '0 10px 15px -5px rgba(0,0,0,0.1), 0 5px 10px -5px rgba(0,0,0,0.04)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const floatingVariants = {
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

  const getGradientFromColor = (color) => {
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

  return (
    <section
      ref={sectionRef}
      className="container mx-auto px-4 py-12 bg-gray-50 overflow-hidden relative"
    >
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -right-16 -top-16 w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-xl"></div>
        <div className="absolute -left-16 -bottom-16 w-56 h-56 bg-gradient-to-tr from-yellow-500 to-green-500 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/4 lg:pr-8 mb-8 lg:mb-0">
            <motion.div
              className="sticky top-24"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Learning Categories
              </h2>
              <p className="text-gray-600 mb-6">
                Explore diverse learning paths tailored to your professional and
                personal growth.
              </p>
              <div className="hidden lg:block">
                <p className="text-sm text-gray-500 mb-4">
                  Browse through our curated selection of courses designed to
                  help you advance your career or explore new interests.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium"
                >
                  View All Categories
                </motion.button>
              </div>
            </motion.div>
          </div>

          <div className="lg:hidden text-center mb-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Learning Categories
              </h2>
              <p className="text-gray-600 max-w-md mx-auto">
                Explore diverse learning paths tailored to your professional and
                personal growth.
              </p>
            </motion.div>
          </div>

          <div className="lg:w-3/4">
            <div className="lg:hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>

              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

              <motion.div
                className="absolute -right-2 top-1/2 transform -translate-y-1/2 z-20 rounded-full bg-white shadow-lg p-2 text-blue-500"
                initial={{ opacity: 0.7, x: 0 }}
                animate={{ opacity: [0.7, 1, 0.7], x: [-5, 0, -5] }}
                transition={{
                  repeat: 3,
                  duration: 1.5,
                  repeatDelay: 1,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </motion.div>

              <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  WebkitOverflowScrolling: 'touch',
                }}
              >
                {categories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    custom={index}
                    variants={cardVariants}
                    initial="initial"
                    whileInView="animate"
                    whileHover="hover"
                    viewport={{ once: true, amount: 0.1 }}
                    className="flex-none w-72 mr-4 snap-start bg-white rounded-lg shadow-sm overflow-hidden h-full"
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
                          className={`p-2 rounded-lg bg-${category.color}-100 mr-3`}
                        >
                          {category.icon}
                        </div>
                        <h3 className="text-lg font-bold">{category.name}</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        {category.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <div
                          className={`text-xs text-${category.color}-600 font-medium`}
                        >
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
                ))}

                <div className="flex-none w-8"></div>
              </div>

              <div className="flex justify-center mt-4 space-x-1">
                {categories.map((_, index) => (
                  <div
                    key={`dot-${index}`}
                    className={`w-2 h-2 rounded-full ${
                      index === 0 ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            <div className="hidden lg:grid lg:grid-cols-3 gap-5">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  custom={index}
                  variants={cardVariants}
                  initial="initial"
                  whileInView="animate"
                  whileHover="hover"
                  viewport={{ once: true, amount: 0.1 }}
                  className="bg-white rounded-lg shadow-sm overflow-hidden h-full"
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
                        className={`p-2 rounded-lg bg-${category.color}-100 mr-3`}
                      >
                        {category.icon}
                      </div>
                      <h3 className="text-lg font-bold">{category.name}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      {category.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div
                        className={`text-xs text-${category.color}-600 font-medium`}
                      >
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
              ))}
            </div>

            <div className="mt-8 text-center lg:hidden">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium"
              >
                View All Categories
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningCategoriesSection;
