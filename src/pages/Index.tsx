
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import CategoryTabs from '@/components/CategoryTabs';
import BrandsGrid from '@/components/BrandsGrid';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { brandsData, Brand } from '@/data/brandsData';

const categories = ['All', 'Trending', 'Most Viewed', 'Recently Acquired', 'Suspicious'];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredBrands, setFilteredBrands] = useState<Brand[]>(brandsData);
  const [isChangingCategory, setIsChangingCategory] = useState(false);
  
  // Enhanced filtering logic
  useEffect(() => {
    setIsChangingCategory(true);
    
    // Delay the filtering slightly for animation purposes
    const filterTimer = setTimeout(() => {
      const filtered = brandsData.filter(brand => {
        const searchTerms = searchQuery.toLowerCase().split(' ');
        
        // Check if any search term matches brand name or sub-brand names/descriptions
        const matchesSearch = searchTerms.every(term => 
          brand.name.toLowerCase().includes(term) ||
          brand.subBrands.some(subBrand => 
            subBrand.name.toLowerCase().includes(term) || 
            subBrand.description.toLowerCase().includes(term)
          )
        );
        
        const matchesCategory = activeCategory === 'All' || brand.category.includes(activeCategory);
        
        return matchesSearch && matchesCategory;
      });
      
      setFilteredBrands(filtered);
      setIsChangingCategory(false);
    }, 300);
    
    return () => clearTimeout(filterTimer);
  }, [searchQuery, activeCategory]);

  // Function to get background gradient based on active category
  const getCategoryBackground = () => {
    switch(activeCategory) {
      case 'Trending': return 'bg-gradient-to-b from-orange-50 via-orange-100 to-amber-100';
      case 'Most Viewed': return 'bg-gradient-to-b from-blue-50 via-blue-100 to-cyan-100';
      case 'Recently Acquired': return 'bg-gradient-to-b from-green-50 via-green-100 to-emerald-100';
      case 'Suspicious': return 'bg-gradient-to-b from-red-50 via-red-100 to-rose-100';
      default: return 'bg-gradient-to-b from-purple-50 via-purple-100 to-indigo-100';
    }
  };

  // Animated background patterns based on category
  const getBackgroundPattern = () => {
    return (
      <motion.div 
        className="absolute inset-0 z-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0">
          {activeCategory === 'Trending' && (
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="trending-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0 20 L40 20 M20 0 L20 40" stroke="orange" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#trending-pattern)" />
            </svg>
          )}
          
          {activeCategory === 'Most Viewed' && (
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="viewed-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="10" fill="none" stroke="blue" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#viewed-pattern)" />
            </svg>
          )}
          
          {activeCategory === 'Recently Acquired' && (
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="acquired-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M10 10 L50 50 M50 10 L10 50" stroke="green" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#acquired-pattern)" />
            </svg>
          )}
          
          {activeCategory === 'Suspicious' && (
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="suspicious-pattern" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M12.5 25 L25 12.5 L37.5 25 L25 37.5 Z" fill="none" stroke="red" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#suspicious-pattern)" />
            </svg>
          )}
          
          {activeCategory === 'All' && (
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="all-pattern" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M0 25 H50 M25 0 V50" stroke="purple" strokeWidth="0.3" />
                  <path d="M0 0 L50 50 M50 0 L0 50" stroke="purple" strokeWidth="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#all-pattern)" />
            </svg>
          )}
        </div>
      </motion.div>
    );
  };
  
  return (
    <motion.div 
      className={`min-h-screen flex flex-col transition-all duration-700 ease-in-out relative ${getCategoryBackground()}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {getBackgroundPattern()}
      
      <div className="relative z-10">
        <Header 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />
        
        <main>
          <CategoryTabs 
            categories={categories} 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
          />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + (isChangingCategory ? "changing" : "stable")}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <BrandsGrid brands={filteredBrands} />
            </motion.div>
          </AnimatePresence>
        </main>
        
        <Footer />
      </div>
    </motion.div>
  );
};

export default Index;
