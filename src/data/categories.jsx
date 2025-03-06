import { Code, Database, PieChart, Zap, Briefcase, Globe } from 'lucide-react';

const categories = [
  {
    name: 'Web Development',
    icon: <Code className="text-blue-600" size={32} />,
    description: 'Master frontend and backend technologies',
    courses: 42,
    color: 'blue',
    image:
      'https://static.frontendmasters.com/assets/courses/2024-07-24-backend-architectures/posterframe.jpg',
    floatingImages: [
      {
        src: 'https://miro.medium.com/v2/resize:fit:1000/1*1u2p917cvlyP6SuHcq3t0Q.jpeg',
        alt: 'HTML code editor',
        direction: 'left-to-right',
      },
      {
        src: 'https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png',
        alt: 'React component',
        direction: 'right-to-left',
      },
      {
        src: 'https://logodix.com/logo/2090013.jpg',
        alt: 'React logo',
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
      'https://www.henryharvin.com/blog/wp-content/uploads/2020/05/data-1.jpg',
    floatingImages: [
      {
        src: 'https://static.vecteezy.com/system/resources/previews/012/697/295/non_2x/3d-python-programming-language-logo-free-png.png',
        alt: 'Data visualization',
        direction: 'right-to-left',
      },
      {
        src: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-tensorflow-icon.png',
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
      'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=2952&auto=format&fit=crop',
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
      'https://plus.unsplash.com/premium_photo-1666739032615-ecbd14dfb543?q=80&w=2940&auto=format&fit=crop',
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
      'https://images.unsplash.com/photo-1627850604058-52e40de1b847?w=900&auto=format&fit=crop&q=60',
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

export default categories;
