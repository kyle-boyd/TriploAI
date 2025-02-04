import React from 'react';

const SplitHero = ({
  primaryText,
  secondaryText,
  imageSrc,
  imageAlt = "Hero illustration",
  imageOnRight = true
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <div className={`flex flex-col md:flex-row gap-12 items-center ${!imageOnRight ? 'md:flex-row-reverse' : ''}`}>
        {/* Text Content */}
        <div className="space-y-6 flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            {primaryText}
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 leading-relaxed">
            {secondaryText}
          </p>
        </div>

        {/* Image */}
        <div className="relative md:flex-[2]">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute -z-10 inset-0 bg-gradient-to-r from-blue-100 to-purple-100 transform translate-x-4 translate-y-4 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default SplitHero; 