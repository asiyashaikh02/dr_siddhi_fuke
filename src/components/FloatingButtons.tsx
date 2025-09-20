// import React from 'react';
// import { Calendar } from 'lucide-react';

// type FloatingButtonsProps = {
//   onBookNow: () => void;
// };

// const FloatingButtons: React.FC<FloatingButtonsProps> = ({ onBookNow }) => {
//   return (
//     <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
//       <button
//         onClick={onBookNow}
//         className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300"
//         title="Book Appointment"
//       >
//         <Calendar className="w-5 h-5" />
//         Book Now
//       </button>
//     </div>
//   );
// };

// export default FloatingButtons;
import React from 'react';
import { Calendar } from 'lucide-react';

type FloatingButtonsProps = {
  onBookNow: () => void;
};

const FloatingButtons: React.FC<FloatingButtonsProps> = ({ onBookNow }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <button
        onClick={onBookNow}
        className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300"
        title="Book Appointment"
      >
        <Calendar className="w-5 h-5" />
        Book Now
      </button>
    </div>
  );
};

export default FloatingButtons;
