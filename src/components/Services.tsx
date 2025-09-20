import React from 'react';
import { Calendar } from 'lucide-react';

type ServicesProps = {
  onBookNow: () => void;
};

const services = [
  {
    icon: '👶',
    title: 'Pregnancy Care',
    desc: 'Comprehensive prenatal and postnatal care',
    price: '₹200',
  },
  {
    icon: '❤️',
    title: 'Fertility Treatment',
    desc: 'Advanced fertility solutions and counseling',
    price: '₹400',
  },
  {
    icon: '🩺',
    title: 'Gynecological Exams',
    desc: 'Regular checkups and preventive care',
    price: '₹300',
  },
  {
    icon: '🛡️',
    title: 'PCOS Management',
    desc: 'Specialized treatment for hormonal disorders',
    price: '₹500',
  },
  {
    icon: '📈',
    title: 'Menopause Care',
    desc: 'Support through life transitions',
    price: '₹300',
  },
];

const Services: React.FC<ServicesProps> = ({ onBookNow }) => {
  return (
    <section id="services" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-center">{service.desc}</p>
              <p className="text-purple-600 font-medium mb-4">Consultation from {service.price}</p>
              <div className="flex gap-2 w-full">
                <button className="flex-1 bg-gray-100 dark:bg-gray-700 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                  More Info &rarr;
                </button>
                <button
                  onClick={onBookNow}
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Calendar className="w-4 h-4" />
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;