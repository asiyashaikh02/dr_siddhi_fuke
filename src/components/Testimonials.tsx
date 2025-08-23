import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Chandrika",
      role: "New Mother",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "Dr. Siddhi's care throughout my pregnancy was extraordinary. She made me feel confident and supported in every step. Her expertise and compassionate approach made my journey to motherhood beautiful.",
      rating: 5,
      location: "Amravati"
    },
    {
      name: "Devika Jyoti",
      role: "Regular Patient", 
      image: "https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "From addressing menstrual concerns to regular checkups, she always provides clarity and comfort. Dr. Siddhi is not just a doctor, but a trusted healthcare partner. Highly recommended!",
      rating: 5,
      location: "Amravati"
    },
    {
      name: "Ruchika Chawhan",
      role: "PCOS Patient",
      image: "https://images.pexels.com/photos/3763200/pexels-photo-3763200.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "Dr. Siddhi's clinic has a warm, professional atmosphere. She's a truly knowledgeable and compassionate gynecologist. Her PCOS treatment plan changed my life completely.",
      rating: 5,
      location: "Amravati"
    },
    {
      name: "Priya Sharma",
      role: "Fertility Patient",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "After struggling with fertility issues for years, Dr. Siddhi gave us hope and the right treatment. Today, we are blessed with a healthy baby. Forever grateful!",
      rating: 5,
      location: "Badnera"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-purple-600 dark:text-purple-400 font-medium mb-4 animate-fadeIn">Testimonials</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white animate-slideInUp">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg max-w-2xl mx-auto animate-slideInUp" style={{animationDelay: '0.2s'}}>
            Real stories from women who trust us with their healthcare
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 shadow-xl border border-purple-100 dark:border-purple-800 relative animate-slideInUp">
            <Quote className="w-12 h-12 text-purple-300 dark:text-purple-600 absolute top-6 left-6" />
            
            <div className="flex items-center justify-between mb-6">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
              
              <div className="text-center flex-1 mx-8">
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <h4 className="font-bold text-xl text-gray-900 dark:text-white">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-purple-600 dark:text-purple-400 font-medium">
                  {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].location}
                </p>
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center italic pl-16">
              "{testimonials[currentTestimonial].text}"
            </p>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 dark:border-purple-800 cursor-pointer animate-slideInUp ${
                index === currentTestimonial ? 'ring-2 ring-purple-500 scale-105' : 'hover:scale-105'
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
              onClick={() => setCurrentTestimonial(index)}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-purple-200"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                "{testimonial.text.substring(0, 120)}..."
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125' 
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;