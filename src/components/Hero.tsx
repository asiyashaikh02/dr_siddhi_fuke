import React from 'react';
import { Calendar, Star, Phone, MessageCircle, MapPin } from 'lucide-react';

const Hero: React.FC<{ onBookNow: () => void }> = ({ onBookNow }) => {
  const handleCall = () => {
    window.open('tel:+9195118513980', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/9195118513980?text=Hello Dr. Siddhi, I would like to book an appointment', '_blank');
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slideInLeft">
            <div className="space-y-6">
              <p className="text-purple-600 dark:text-purple-400 font-medium text-lg animate-fadeIn">Welcome</p>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight animate-slideInUp">
                Dr. <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Siddhi Fuke</span>
              </h1>
              <h2 className="text-xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 animate-slideInUp" style={{animationDelay: '0.2s'}}>
               Obstetrician &  Gynecologist 
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-md leading-relaxed animate-slideInUp" style={{animationDelay: '0.4s'}}>
                Fellowship in Minimal Access Surgery,<br />  Laparoscopic Surgeon <br />  Fertility Specialist <br />  Certified Sonologist.<br /> 
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-slideInUp" style={{animationDelay: '0.6s'}}>
              <button 
                onClick={onBookNow}
                className="group flex items-center justify-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Book Appointment</span>
              </button>
              
              <div className="flex gap-3">
                <button 
                  onClick={handleCall}
                  className="flex items-center justify-center p-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                  title="Call Now"
                >
                  <Phone className="w-5 h-5" />
                </button>
                
                <button 
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Info */}
            <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400 animate-slideInUp" style={{animationDelay: '0.8s'}}>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-purple-500" />
                <span>Amravati, Maharashtra</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available Today</span>
              </div>
            </div>
          </div>

          {/* Right Content - Doctor Image */}
          <div className="relative animate-slideInRight">
            <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              
              <img src={`${import.meta.env.BASE_URL}heroo.jpg`} 
     alt="Dr. Siddhi Fuke" 
     className="w-full h-96 object-cover rounded-2xl hover:scale-105 transition-transform duration-500"/>


              
                
              {/* Patient Health Score Card */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-purple-100 dark:border-purple-800 hover:scale-110 transition-transform duration-300 animate-float">
                <div className="text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Patient Health Score</p>
                  <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-1">94.5</div>
                  <div className="flex items-center justify-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span>Excellent • Insights: Premium</span>
                  </div>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl p-4 shadow-xl hover:scale-110 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-xs">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



// type HeroProps = {
//   onBookNow: () => void;
// };

// const Hero: React.FC<HeroProps> = ({ onBookNow }) => {
//   return (
//     <section className="hero py-20 text-center">
//       <h1 className="text-4xl font-bold mb-4">Welcome to Our Clinic</h1>
//       <p className="text-lg text-gray-600 mb-6">Your health, our priority</p>
//       <button
//         onClick={onBookNow}
//         className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
//       >
//         Book Now
//       </button>
//     </section>
//   );
// };

// export default Hero;
