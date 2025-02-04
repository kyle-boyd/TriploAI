import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SupportSection from './SupportSection';
import PopularTopics from './PopularTopics';
import RecentComments from './RecentComments';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">How can we help?</h1>
      
      <SearchBar 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="mt-8">
        <h2 className="text-xl font-medium mb-4">Need More Help?</h2>
        <SupportSection />
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-medium mb-4">Popular Topics</h2>
        <PopularTopics />
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-medium mb-4">Recent Comments</h2>
        <RecentComments />
      </div>
    </div>
  );
};

export default HelpCenter; 