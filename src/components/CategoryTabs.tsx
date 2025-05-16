
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ 
  categories, 
  activeCategory, 
  setActiveCategory 
}) => {
  // Different background colors for tabs
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Trending': return 'from-orange-400 to-rose-400';
      case 'Most Viewed': return 'from-blue-400 to-cyan-400';
      case 'Recently Acquired': return 'from-green-400 to-emerald-400';
      case 'Suspicious': return 'from-red-400 to-rose-600';
      default: return 'from-purple-400 to-indigo-400';
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 my-8">
      {categories.map((category) => (
        <motion.div
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full transition-all duration-500 ${
              activeCategory === category 
                ? `bg-gradient-to-r ${getCategoryColor(category)} text-white shadow-lg` 
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
          >
            {category}
          </Button>
        </motion.div>
      ))}
    </div>
  );
};

export default CategoryTabs;
