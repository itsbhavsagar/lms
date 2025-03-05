import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const MobileNav = ({ menuItems, onNavigate }) => (
  <div className="grid gap-4 py-4">
    {menuItems.map((item, index) => (
      <motion.div
        key={item.name}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: index * 0.1,
          type: 'spring',
          stiffness: 300,
        }}
      >
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => onNavigate(item.path)}
        >
          {item.name}
        </Button>
      </motion.div>
    ))}
  </div>
);

export default MobileNav;
