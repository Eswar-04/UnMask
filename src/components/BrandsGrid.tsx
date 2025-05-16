
import { motion, AnimatePresence } from 'framer-motion';
import BrandCard from './BrandCard';
import { Brand } from '../data/brandsData';

interface BrandsGridProps {
  brands: Brand[];
}

const BrandsGrid = ({ brands }: BrandsGridProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <AnimatePresence>
        {brands.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-10"
          >
            <p className="text-gray-500 text-xl">No brands found. Try a different search term or category.</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {brands.map((brand) => (
              <BrandCard
                key={brand.id}
                id={brand.id}
                name={brand.name}
                logo={brand.logo}
                rating={brand.rating}
                subBrands={brand.subBrands}
              />
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BrandsGrid;
