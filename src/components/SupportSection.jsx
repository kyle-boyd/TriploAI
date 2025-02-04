import React from 'react';

const SupportSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex items-center gap-4 p-4 border rounded-lg">
        <div className="p-3 bg-gray-100 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </div>
        <div>
          <h3 className="font-medium">Contact Support</h3>
          <p className="text-sm text-gray-600">Get help from our team</p>
        </div>
        <button className="ml-auto px-4 py-2 text-sm bg-gray-900 text-white rounded-md">
          Contact Us
        </button>
      </div>

      <div className="flex items-center gap-4 p-4 border rounded-lg">
        <div className="p-3 bg-gray-100 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
          </svg>
        </div>
        <div>
          <h3 className="font-medium">Community Forum</h3>
          <p className="text-sm text-gray-600">Connect with other users</p>
        </div>
        <button className="ml-auto px-4 py-2 text-sm bg-gray-900 text-white rounded-md">
          Visit Forum
        </button>
      </div>
    </div>
  );
};

export default SupportSection; 