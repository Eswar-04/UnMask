
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Expand, ChevronDown, Image, Info, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { SubBrand } from '../data/brandsData';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface BrandCardProps {
  id: number;
  name: string;
  logo: string;
  rating: number;
  subBrands: SubBrand[];
}

const BrandCard = ({ id, name, logo, rating, subBrands }: BrandCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedSubBrand, setSelectedSubBrand] = useState<SubBrand | null>(null);
  
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
  
  const handleSubBrandClick = (subBrand: SubBrand) => {
    setSelectedSubBrand(subBrand);
  };

  const handleCloseDialog = () => {
    setSelectedSubBrand(null);
  };

  // Function to render a better placeholder for missing logos
  const renderSubBrandLogo = (subBrand: SubBrand) => {
    if (subBrand.logo) {
      return (
        <motion.img
          src={subBrand.logo}
          alt={subBrand.name}
          className="w-10 h-10 object-contain mr-3"
          whileHover={{ scale: 1.2, rotate: 5 }}
        />
      );
    } else {
      // Create a gradient-based placeholder with initials
      const initials = subBrand.name.charAt(0).toUpperCase();
      const colors = [
        "from-blue-300 to-blue-500",
        "from-green-300 to-green-500",
        "from-yellow-300 to-yellow-500",
        "from-pink-300 to-pink-500",
        "from-purple-300 to-purple-500",
        "from-red-300 to-red-500",
        "from-indigo-300 to-indigo-500",
        "from-cyan-300 to-cyan-500"
      ];
      
      // Use hash of name to select consistent color for same brand
      const colorIndex = subBrand.name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
      
      return (
        <motion.div 
          className={`w-10 h-10 bg-gradient-to-br ${colors[colorIndex]} rounded-full mr-3 flex items-center justify-center text-white font-bold shadow-md`}
          whileHover={{ scale: 1.2, rotate: 5 }}
        >
          {initials}
        </motion.div>
      );
    }
  };
  
  return (
    <>
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
                      className="flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      whileHover={{ 
                        scale: 1.02, 
                        backgroundColor: "rgba(249, 250, 251, 0.9)",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)"
                      }}
                      onClick={() => handleSubBrandClick(subBrand)}
                    >
                      {renderSubBrandLogo(subBrand)}
                      <div className="flex-1">
                        <h5 className="font-medium">{subBrand.name}</h5>
                        <p className="text-sm text-gray-500 truncate">{subBrand.description}</p>
                      </div>
                      
                      <Popover>
                        <PopoverTrigger asChild>
                          <button className="rounded-full p-1 hover:bg-gray-200">
                            <Info className="w-4 h-4 text-gray-400" />
                          </button>
                        </PopoverTrigger>
                        <PopoverContent side="top" className="bg-white/90 backdrop-blur-sm">
                          <p className="text-sm text-gray-600">Click to see more details</p>
                        </PopoverContent>
                      </Popover>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </motion.div>

      <Dialog open={selectedSubBrand !== null} onOpenChange={handleCloseDialog}>
        <DialogContent className="sm:max-w-md md:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl flex items-center gap-2">
              {selectedSubBrand?.logo && (
                <img 
                  src={selectedSubBrand.logo} 
                  alt={selectedSubBrand?.name} 
                  className="w-8 h-8 object-contain" 
                />
              )}
              {!selectedSubBrand?.logo && selectedSubBrand && (
                <div className="w-8 h-8 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  {selectedSubBrand.name.charAt(0).toUpperCase()}
                </div>
              )}
              {selectedSubBrand?.name}
            </DialogTitle>
            <DialogDescription className="text-base text-gray-500">
              {selectedSubBrand?.category || "Product"}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-700"
              >
                {selectedSubBrand?.fullDescription || selectedSubBrand?.description}
              </motion.p>
            </div>
            
            {selectedSubBrand?.features && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="px-4"
              >
                <h4 className="font-medium mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {selectedSubBrand.features.map((feature, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (idx * 0.05), duration: 0.2 }}
                      className="text-sm text-gray-600"
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
            
            {selectedSubBrand?.yearFounded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="px-4 text-sm text-gray-500"
              >
                <p>Founded: {selectedSubBrand.yearFounded}</p>
              </motion.div>
            )}
            
            {selectedSubBrand?.website && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                className="px-4"
              >
                <a 
                  href={selectedSubBrand.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Website
                </a>
              </motion.div>
            )}
          </div>
          
          <motion.div 
            className="flex justify-end mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button 
              onClick={handleCloseDialog}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors text-gray-800"
            >
              Close
            </button>
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BrandCard;
