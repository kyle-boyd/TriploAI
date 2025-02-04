import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search for help..."
        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={onChange}
      />
      <button className="absolute right-3 top-1/2 -translate-y-1/2 px-4 py-1 bg-gray-900 text-white rounded-md">
        Search
      </button>
    </div>
  );
};

export default SearchBar; 