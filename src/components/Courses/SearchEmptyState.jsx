import React from 'react';
import { motion } from 'framer-motion';
import { BookX, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SearchEmptyState = ({ onReset }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-20 text-center"
    >
      <div className="bg-gray-100 p-6 rounded-full mb-6">
        <BookX className="w-16 h-16 text-gray-400" />
      </div>

      <h3 className="text-2xl font-bold text-gray-700 mb-3">
        No courses found
      </h3>
      <p className="text-gray-500 max-w-md mb-6">
        We couldn't find any courses matching your search criteria. Try
        adjusting your filters or search terms.
      </p>

      <Button onClick={onReset} className="flex items-center">
        <RefreshCw className="mr-2 h-4 w-4" />
        Reset Filters
      </Button>
    </motion.div>
  );
};

export default SearchEmptyState;
