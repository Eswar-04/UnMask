
import React from 'react';
import { Button } from '@/components/ui/button';

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
  return (
    <div className="flex flex-wrap justify-center gap-2 my-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => setActiveCategory(category)}
          className={`rounded-full transition-all duration-300 ${
            activeCategory === category 
              ? "bg-primary text-white" 
              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryTabs;
