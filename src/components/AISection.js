import React from 'react';

function AISection() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">
          Review submittals with confidence.
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Our AI tool understands your specs and your submittals.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">Smart Specs</h3>
            <p className="text-lg opacity-90">
            Upload your project specifications once, our AI reads and indexes every requirement, creating a knowledge base specific to your project.
            </p>
          </div>
          <div className="bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">Instant Analysis</h3>
            <p className="text-lg opacity-90">
              When contractors submit their documentation, our AI instantly analyzes it against your requirements, highlighting discrepancies and potential issues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AISection; 