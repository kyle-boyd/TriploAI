import React from 'react';

function Testimonials() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Thousands of engineers and architects and AEC firms get submittals done with Triplo.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="Triplo completely transformed how we handle submittals. The speed is incredible."
            author="Sarah Chen"
            role="Civil Engineer"
            company="Merrick"
          />
          <TestimonialCard
            quote="The AI features are mind-blowing. It's like having a 20 year veteran at your call anytime."
            author="Mike Johnson"
            role="Project Architect"
            company="Gensler"
          />
          <TestimonialCard
            quote="We cut our submittal review time in half. Amazing tool, amazing team."
            author="Lisa Martinez"
            role="Project Manager"
            company="AECOM"
          />
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ quote, author, role, company }) {
  return (
    <div className="p-6 bg-gray-50 rounded-lg">
      <p className="text-lg mb-6">"{quote}"</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-gray-600">{role} at {company}</p>
      </div>
    </div>
  );
}

export default Testimonials; 