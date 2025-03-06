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
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/640px-Javascript_badge.svg.png',
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
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/640px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png',
        direction: 'left-to-right',
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/640px-Tensorflow_logo.svg.png',
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
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/640px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png',

        alt: 'Business meeting',
        direction: 'left-to-right',
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg/640px-Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg.png',
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
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Search_Engine_Optimized_Logo.png/640px-Search_Engine_Optimized_Logo.png',
        alt: 'Social media dashboard',
        direction: 'right-to-left',
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Logo_Google_Analytics.svg/640px-Logo_Google_Analytics.svg.png',
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
        src: 'https://static.vecteezy.com/system/resources/previews/002/159/401/non_2x/language-translation-icon-free-vector.jpg',
        alt: 'Language translation',
        direction: 'left-to-right',
      },
      {
        src: 'https://www.shutterstock.com/shutterstock/photos/1994361164/display_1500/stock-vector-language-learning-logo-design-template-language-learning-school-logo-design-language-learning-1994361164.jpg',
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
        src: 'https://w7.pngwing.com/pngs/636/709/png-transparent-productivity-management-time-management-efficiency-schedule-business-3d-icon.png',
        alt: 'Task management',
        direction: 'right-to-left',
      },
      {
        src: 'https://cdn-icons-png.flaticon.com/512/7264/7264364.png',
        alt: 'Time tracking',
        direction: 'left-to-right',
      },
    ],
  },
];

export default categories;
