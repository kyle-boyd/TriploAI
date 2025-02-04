import React from 'react';

function Pricing() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Start today for free.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <PricingCard
            title="Free"
            price="$0"
            features={[
              'Up to 3 projects',
              'Basic reports',
              'Community support',
              'Limited exports'
            ]}
            buttonText="Get Started"
            isPopular={false}
          />
          <PricingCard
            title="Pro"
            price="$19"
            period="/month"
            features={[
              'Unlimited projects',
              'Advanced components',
              'Priority support',
              'Custom exports'
            ]}
            buttonText="Start Free Trial"
            isPopular={true}
          />
          <PricingCard
            title="Enterprise"
            price="Custom"
            features={[
              'Unlimited users',
              'Dedicated support',
              'SLA guarantee',
              'Advanced security'
            ]}
            buttonText="Contact Sales"
            isPopular={false}
          />
        </div>
      </div>
    </div>
  );
}

function PricingCard({ title, price, period = '', features, buttonText, isPopular }) {
  return (
    <div className={`p-8 bg-white rounded-lg ${isPopular ? 'ring-2 ring-black' : 'border border-gray-200'}`}>
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-gray-600">{period}</span>
        </div>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-md ${isPopular ? 'bg-black text-white' : 'bg-gray-100 text-gray-900'}`}>
        {buttonText}
      </button>
    </div>
  );
}

export default Pricing; 