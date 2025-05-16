
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Expand, ChevronDown } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { SubBrand } from '../data/brandsData';

interface BrandCardProps {
  id: number;
  name: string;
  logo: string;
  rating: number;
  subBrands: SubBrand[];
}

const BrandCard = ({ id, name, logo, rating, subBrands }: BrandCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const renderRatingStars = (rating: number) => {
    const stars = [];
    const roundedRating = Math.round(rating);
    
    for (let i = 0; i < 5; i++) {
      if (i < roundedRating) {
        stars.push(
          <motion.div 
            key={i} 
            className="w-4 h-4 rounded-full bg-yellow-400"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
          />
        );
      } else {
        stars.push(
          <motion.div 
            key={i} 
            className="w-4 h-4 rounded-full bg-gray-200"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
          />
        );
      }
    }
    
    return <div className="rating-stars flex gap-1">{stars}</div>;
  };
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="w-full"
      whileHover={{ y: -5 }}
    >
      <Card 
        className={`brand-card overflow-hidden transition-all duration-500 ${
          isExpanded ? 'bg-white shadow-xl' : 'bg-gray-50 hover:bg-white hover:shadow-md'
        }`}
      >
        <div 
          onClick={() => setIsExpanded(!isExpanded)}
          className={`cursor-pointer p-6 flex flex-col items-center justify-center transition-all duration-500 ${
            isExpanded ? '' : 'zoom-reveal'
          }`}
        >
          <motion.div 
            className="relative w-full h-36 flex items-center justify-center mb-4"
            animate={{ 
              scale: isExpanded ? 0.75 : 1,
              y: isExpanded ? -20 : 0
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.img 
              src={logo} 
              alt={name} 
              className="h-24 object-contain"
              whileHover={{ scale: 1.1, rotate: isExpanded ? 0 : 2 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          
          <h3 className="text-xl font-semibold text-center">{name}</h3>
          <div className="mt-2 flex items-center justify-center">
            {renderRatingStars(rating)}
          </div>
          
          <motion.button
            className={`mt-4 rounded-full p-3 transition-all ${
              isExpanded 
                ? 'bg-gray-100' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.button>
        </div>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="sub-brands-container px-6 pb-6"
            >
              <motion.h4 
                className="font-medium text-gray-700 mb-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                Sub Brands:
              </motion.h4>
              <div className="grid grid-cols-1 gap-3">
                {subBrands.map((subBrand, index) => (
                  <motion.div
                    key={subBrand.id}
                    className="flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02, 
                      backgroundColor: "rgba(249, 250, 251, 0.9)",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)"
                    }}
                  >
                    {subBrand.logo ? (
                      <motion.img
                        src={subBrand.logo}
                        alt={subBrand.name}
                        className="w-10 h-10 object-contain mr-3"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                      />
                    ) : (
                      <motion.div 
                        className="w-10 h-10 bg-gray-200 rounded-full mr-3 flex items-center justify-center"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                      >
                        {subBrand.name.charAt(0)}
                      </motion.div>
                    )}
                    <div>
                      <h5 className="font-medium">{subBrand.name}</h5>
                      <p className="text-sm text-gray-500">{subBrand.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
};

export default BrandCard;
