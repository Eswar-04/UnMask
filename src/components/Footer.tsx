
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 pt-8 flex flex-col items-center">
          <h2 className="font-semibold text-lg text-gray-800 mb-4">UnMaskIt</h2>
          <p className="text-gray-500 text-sm mb-4 text-center">
            Revealing the connections between brands and their parent companies.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">Contact</a>
          </div>
          <p className="mt-6 text-gray-400 text-xs">© 2025 UnMaskIt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
