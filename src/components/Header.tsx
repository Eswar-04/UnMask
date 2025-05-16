
import React from 'react';
import { Search, Zap, AlertTriangle, TrendingUp, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <motion.header 
      className="bg-gradient-unmask py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-32 h-32 bg-pink-300 rounded-full opacity-20"
          animate={{ 
            x: [0, 30, 0], 
            y: [0, 20, 0] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400 rounded-full opacity-10"
          animate={{ 
            x: [0, -40, 0], 
            y: [0, -20, 0] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 12,
            ease: "easeInOut" 
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-4 font-serif tracking-wide"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          UnMaskIt
        </motion.h1>
        
        <motion.p
          className="text-white text-lg mb-8 text-center max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Revealing the hidden connections between brands and their parent companies
        </motion.p>
        
        <motion.div 
          className="relative w-full max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search parent company or sub brands..."
            className="block w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
          />
          
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-2">
            {searchQuery && (
              <motion.button
                onClick={() => setSearchQuery('')}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>
            )}
          </div>
        </motion.div>
        
        <motion.div 
          className="flex gap-6 mt-6 text-white text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center gap-1">
            <TrendingUp className="h-4 w-4" />
            <span>Trending</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            <span>Most Viewed</span>
          </div>
          <div className="flex items-center gap-1">
            <Zap className="h-4 w-4" />
            <span>Recently Acquired</span>
          </div>
          <div className="flex items-center gap-1">
            <AlertTriangle className="h-4 w-4" />
            <span>Suspicious</span>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
