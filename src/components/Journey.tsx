// import React from 'react';
import { Heart } from 'lucide-react';

// const journeyImages = [
//   "/pregnency.jpg",   // ✅ correct spelling as in your folder
//   "/baby.jpg",       // ✅ correct
//   "/family.jpg"     // ✅ correct (extra y)
// ];
const journeyImages = [
  `${import.meta.env.BASE_URL}pregnency.jpg`,
  `${import.meta.env.BASE_URL}baby.jpg`,
  `${import.meta.env.BASE_URL}family.jpg`
];



const Journey: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Images Grid */}
          <div className="grid grid-cols-3 gap-4">
            {journeyImages.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image}
                  alt={`Journey ${index + 1}`}
                  className="w-full h-48 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-6 h-6 text-pink-500" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              A Journey We Walk Together
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              We stand by you through every stage—puberty, conception, pregnancy, and beyond—with advanced 
              diagnostics, evidence-based treatments, and emotional support. From puberty to menopause, fertility 
              to pregnancy, we are with you at every milestone, offering expert advice and medical care.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Comprehensive Care</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
