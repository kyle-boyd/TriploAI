import React from 'react';
import DashboardImage from '../images/dashboard.jpg';

function Hero() {
  return (
    <div className="pt-32 pb-20 text-center">
      <h1 className="text-6xl font-bold mb-6">
        Submittals, meet AI.
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Transform construction submittal reviews from hours to minutes with AI-powered analysis.
      </p>
      <button className="bg-black text-white px-6 py-3 rounded-md text-lg font-medium">
        Start for free
      </button>
      <p className="text-sm text-gray-500 mt-4">
        ⚡ No credit card required
      </p>
      <div className="mt-48 max-w-6xl mx-auto">
        <img 
          src={DashboardImage} 
          alt="Triplo Dashboard" 
          className="w-full rounded-lg glow-effect"
          onError={(e) => {
            e.target.onerror = null; // Prevent infinite loop
            e.target.src = 'https://via.placeholder.com/1200x600?text=Dashboard+Preview';
          }}
        />
      </div>
    </div>
  );
}

export default Hero; 