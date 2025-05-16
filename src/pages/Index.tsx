
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import CategoryTabs from '@/components/CategoryTabs';
import BrandsGrid from '@/components/BrandsGrid';
import Footer from '@/components/Footer';
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
  
  return (
    <div className="min-h-screen flex flex-col">
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
        
        <BrandsGrid brands={filteredBrands} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
