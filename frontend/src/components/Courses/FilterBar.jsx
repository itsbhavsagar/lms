import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sliders, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { useTheme } from '@/context/ThemeContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const FilterBar = ({ filters, setFilters }) => {
  const [showFilters, setShowFilters] = useState(false);

  const handleSearchChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      search: e.target.value,
    }));
  };

  const handleRatingChange = (value) => {
    setFilters((prev) => ({
      ...prev,
      rating: value,
    }));
  };

  const handleDurationChange = (value) => {
    setFilters((prev) => ({
      ...prev,
      duration: value,
    }));
  };

  const handlePriceChange = (values) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: values,
    }));
  };

  const { theme } = useTheme();

  return (
    <div
      className={`sticky top-0 z-10 py-4 px-2 mb-8 rounded-lg shadow-sm ${
        theme === 'dark'
          ? 'bg-gray-900 text-white backdrop-blur-sm'
          : 'bg-white text-gray-900 backdrop-blur-sm'
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search courses..."
            value={filters.search}
            onChange={handleSearchChange}
            className={`pl-10 py-5 border ${
              theme === 'dark'
                ? 'border-gray-700 bg-gray-800 text-white'
                : 'border-gray-200 bg-white text-gray-900'
            }`}
          />
          {filters.search && (
            <button
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              onClick={() => setFilters((prev) => ({ ...prev, search: '' }))}
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <Button
          variant="outline"
          className="flex-shrink-0"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Sliders className="h-4 w-4 mr-2" />
          {showFilters ? 'Hide Filters' : 'Filters'}
        </Button>
      </div>

      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 1000]}
                    min={0}
                    max={1000}
                    step={10}
                    value={filters.priceRange}
                    onValueChange={handlePriceChange}
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-500">
                    <span>${filters.priceRange[0]}</span>
                    <span>${filters.priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum Rating
                </label>
                <Select
                  value={filters.rating.toString()}
                  onValueChange={(value) => handleRatingChange(Number(value))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Any Rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">Any Rating</SelectItem>
                    <SelectItem value="3">3+ Stars</SelectItem>
                    <SelectItem value="3.5">3.5+ Stars</SelectItem>
                    <SelectItem value="4">4+ Stars</SelectItem>
                    <SelectItem value="4.5">4.5+ Stars</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Duration
                </label>
                <Select
                  value={filters.duration}
                  onValueChange={handleDurationChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Any Duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any Duration</SelectItem>
                    <SelectItem value="short">Short (0-5 hours)</SelectItem>
                    <SelectItem value="medium">Medium (5-20 hours)</SelectItem>
                    <SelectItem value="long">Long (20+ hours)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <Button
                variant="outline"
                className={
                  theme === 'dark'
                    ? 'border-gray-600 text-white'
                    : 'border-gray-300 text-gray-900'
                }
                onClick={() =>
                  setFilters({
                    search: '',
                    priceRange: [0, 1000],
                    rating: 0,
                    duration: 'all',
                  })
                }
              >
                Reset Filters
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterBar;
