import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FloatingButtons from './components/FloatingButtons';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleBookNow = () => {
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero onBookNow={handleBookNow} />
      <About />
      <Journey />
      <Services onBookNow={handleBookNow} />
      <Testimonials />
      <Contact isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      <FloatingButtons onBookNow={handleBookNow} />
    </div>
  );
}

export default App;
