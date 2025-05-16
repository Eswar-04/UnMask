
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
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
          <div key={i} className="w-4 h-4 rounded-full bg-gray-300"></div>
        );
      } else {
        stars.push(
          <div key={i} className="w-4 h-4 rounded-full bg-gray-200"></div>
        );
      }
    }
    
    return <div className="rating-stars">{stars}</div>;
  };
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <Card 
        className={`brand-card overflow-hidden transition-all duration-500 ${
          isExpanded ? 'bg-white' : 'bg-gray-50 hover:bg-white'
        }`}
      >
        <div 
          onClick={() => setIsExpanded(!isExpanded)}
          className={`cursor-pointer p-6 flex flex-col items-center justify-center ${
            isExpanded ? '' : 'zoom-reveal'
          }`}
        >
          <img 
            src={logo} 
            alt={name} 
            className={`h-20 mb-4 object-contain transition-transform duration-500 ${
              isExpanded ? 'scale-75' : 'scale-100'
            }`}
          />
          <h3 className="text-xl font-semibold text-center">{name}</h3>
          <div className="mt-2 flex items-center justify-center">
            {renderRatingStars(rating)}
          </div>
          <button
            className={`mt-4 rounded-full p-2 transition-all ${
              isExpanded 
                ? 'bg-gray-100 rotate-45' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="sub-brands-container px-6 pb-6"
          >
            <h4 className="font-medium text-gray-700 mb-3">Sub Brands:</h4>
            <div className="grid grid-cols-1 gap-3">
              {subBrands.map((subBrand) => (
                <div
                  key={subBrand.id}
                  className="flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors"
                >
                  {subBrand.logo ? (
                    <img
                      src={subBrand.logo}
                      alt={subBrand.name}
                      className="w-10 h-10 object-contain mr-3"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 flex items-center justify-center">
                      {subBrand.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h5 className="font-medium">{subBrand.name}</h5>
                    <p className="text-sm text-gray-500">{subBrand.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </Card>
    </motion.div>
  );
};

export default BrandCard;
