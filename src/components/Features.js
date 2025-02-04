import React from 'react';

function Features() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Spend time making decisions, not finding the right information.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            title="Upload proect specs once"
            description="Import your project specification and let our AI understand your requirements automatically"
          />
          <FeatureCard
            title="AI-powered analysis"
            description="Our AI reads and understands submittals, comparing them against your specs in seconds"
          />
          <FeatureCard
            title="Save hours per submittal"
            description="Focus on making decisions, not searching through specs and checking requirements"
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Features; 