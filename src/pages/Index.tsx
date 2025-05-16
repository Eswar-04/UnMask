
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import CategoryTabs from '@/components/CategoryTabs';
import BrandsGrid from '@/components/BrandsGrid';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { brandsData, Brand } from '@/data/brandsData';

const categories = ['All', 'Trending', 'Most Viewed', 'Recently Acquired', 'Suspicious'];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredBrands, setFilteredBrands] = useState<Brand[]>(brandsData);
  
  useEffect(() => {
    // Filter brands based on search query and active category
    const filtered = brandsData.filter(brand => {
      const matchesSearch = brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        brand.subBrands.some(subBrand => subBrand.name.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = activeCategory === 'All' || brand.category.includes(activeCategory);
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredBrands(filtered);
  }, [searchQuery, activeCategory]);

  // Function to get background gradient based on active category
  const getCategoryBackground = () => {
    switch(activeCategory) {
      case 'Trending': return 'bg-gradient-to-b from-orange-50 to-amber-100';
      case 'Most Viewed': return 'bg-gradient-to-b from-blue-50 to-cyan-100';
      case 'Recently Acquired': return 'bg-gradient-to-b from-green-50 to-emerald-100';
      case 'Suspicious': return 'bg-gradient-to-b from-red-50 to-rose-100';
      default: return 'bg-gradient-to-b from-purple-50 to-indigo-100';
    }
  };
  
  return (
    <motion.div 
      className={`min-h-screen flex flex-col transition-all duration-700 ease-in-out ${getCategoryBackground()}`}
      animate={{ backgroundColor: getCategoryBackground() }}
      transition={{ duration: 0.8 }}
    >
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
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <BrandsGrid brands={filteredBrands} />
        </motion.div>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Index;
