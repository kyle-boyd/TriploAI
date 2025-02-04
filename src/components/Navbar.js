import React from 'react';

function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold">Triplo</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2">Features</a>
              <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2">Pricing</a>
              <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2">Docs</a>
              <button className="bg-black text-white px-4 py-2 rounded-md">
                Start Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 