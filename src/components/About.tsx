import React, { useState } from 'react';
import { Stethoscope, Award, Heart, ChevronRight, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Stethoscope className="w-12 h-12 text-yellow-500" />,
      title: "Expertise",
      description: "MBBS, MS (Gynecology & Obstetrics) with years of experience in women's health.",
      details: [
        "Advanced medical training",
        "Specialized in women's health",
        "Continuous medical education",
        "Evidence-based treatments"
      ],
      buttonColor: "border-yellow-500 text-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-900/20"
    },
    {
      icon: <Award className="w-12 h-12 text-blue-500" />,
      title: "Specialized Care",
      description: "Fertility, prenatal care, menstrual issues, PCOS, menopause & more.",
      details: [
        "Comprehensive fertility treatments",
        "Complete prenatal & postnatal care",
        "PCOS management programs",
        "Menopause support & therapy"
      ],
      buttonColor: "border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
    },
    {
      icon: <Heart className="w-12 h-12 text-pink-500" />,
      title: "Contact Us",
      description: "Reach out for appointments, consultations, or health inquiries.",
      details: [
        "Easy appointment booking",
        "Telemedicine consultations",
        "Emergency support available",
        "Personalized care plans"
      ],
      buttonColor: "border-pink-500 text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/20"
    }
  ];

  const handleReadMore = (index: number) => {
    setActiveFeature(activeFeature === index ? -1 : index);
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-purple-600 dark:text-purple-400 font-medium mb-4 animate-fadeIn">Intro</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 animate-slideInUp">
            Know your Doctor
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center group animate-slideInUp" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Expandable Details */}
              {activeFeature === index && (
                <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg animate-fadeIn">
                  <ul className="space-y-2 text-left">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <button 
                onClick={() => handleReadMore(index)}
                className={`px-6 py-2 border-2 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 mx-auto group-hover:scale-105 ${feature.buttonColor}`}
              >
                <span>{activeFeature === index ? 'Show Less' : 'Read More'}</span>
                <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${activeFeature === index ? 'rotate-90' : ''}`} />
              </button>
            </div>
          ))}
        </div>

        {/* About Us Section */}
        <div className="text-center mb-12">
          <p className="text-purple-600 dark:text-purple-400 font-medium mb-4 animate-fadeIn">About Us</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-16 animate-slideInUp">
            Caring for Every Chapter of a Woman's Life
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-slideInLeft">
            <img src="/service.jpg" alt="Medical professional"
              
              className="w-full h-96 object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl animate-float">
              <Heart className="w-8 h-8 text-pink-500" />
            </div>
          </div>

          <div className="space-y-6 animate-slideInRight">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
              Comprehensive Women's Healthcare
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              With over 5 years of experience in Obstetrics & Gynaecology, Dr. Siddhi Fuke offers personalized care 
              tailored to your unique needs—from adolescent gynecology to advanced pregnancy care and 
              menopause management.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg">
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent">1000+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Happy Patients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;