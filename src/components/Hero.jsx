import React from 'react';

const Hero = ({
  primaryText = "Ship it in React & Tailwind",
  secondaryText = "Design to code as fast as copy & paste. Production-ready code that's fully yours, so you can build it your way. No more handoff, just polished UI.",
  imageSrc = "/path/to/your/image.jpg",
  imageAlt = "Hero illustration",
  ctaText = "Get Started",
  onCtaClick = () => {},
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            {primaryText}
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 leading-relaxed">
            {secondaryText}
          </p>
          <div className="pt-4">
            <button 
              onClick={onCtaClick}
              className="bg-gray-900 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              {ctaText}
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-contain"
            />
          </div>
          {/* Optional decorative element */}
          <div className="absolute -z-10 inset-0 bg-gradient-to-r from-blue-100 to-purple-100 transform translate-x-4 translate-y-4 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 