
import { motion, AnimatePresence } from 'framer-motion';
import BrandCard from './BrandCard';
import { Brand } from '../data/brandsData';

interface BrandsGridProps {
  brands: Brand[];
}

const BrandsGrid = ({ brands }: BrandsGridProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <AnimatePresence mode="wait">
        {brands.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16"
          >
            <motion.div 
              className="inline-block p-8 bg-white rounded-xl shadow-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <p className="text-gray-500 text-xl">No brands found. Try a different search term or category.</p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {brands.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ 
                  opacity: 0, 
                  y: 50, 
                  scale: 0.8 
                }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1 
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <BrandCard
                  id={brand.id}
                  name={brand.name}
                  logo={brand.logo}
                  rating={brand.rating}
                  subBrands={brand.subBrands}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BrandsGrid;
