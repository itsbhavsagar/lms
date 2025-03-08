import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const MobileNav = ({ menuItems, onNavigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <motion.div
      className='grid gap-2'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      {menuItems.map((item) => (
        <motion.div key={item.name} variants={itemVariants} className='w-full'>
          <Button
            variant='ghost'
            className='w-full justify-between text-left px-2 py-1 h-auto'
            onClick={() => onNavigate(item.path)}
          >
            <span>{item.name}</span>
            <ChevronRight size={16} />
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MobileNav;
