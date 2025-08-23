// import React, { useState } from "react";
// import { X, CheckCircle } from "lucide-react"; // ✅ success icon ke liye use ho raha hai

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//     service: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isFormOpen, setIsFormOpen] = useState(false);

//   const services = [
//     "General Consultation",
//     "Pregnancy Care",
//     "Fertility Treatment",
//     "PCOS Management",
//     "Menopause Care",
//     "Emergency Consultation",
//   ];

//   const handleInputChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // create WhatsApp message
//     const whatsappMsg = `Hello Dr. Siddhi Fuke, I would like to book an appointment.
    
// 👤 Name: ${formData.name}
// 📞 Phone: ${formData.phone}
// 📧 Email: ${formData.email || "N/A"}
// 🩺 Service: ${formData.service || "Not specified"}
// 💬 Message: ${formData.message}

// Requested via Website.`;

//     const whatsappURL = `https://wa.me/919511851398?text=${encodeURIComponent(
//       whatsappMsg
//     )}`;
//     window.open(whatsappURL, "_blank");

//     setTimeout(() => {
//       setIsSubmitting(false);
//       setIsSubmitted(true);
//       setFormData({ name: "", email: "", phone: "", message: "", service: "" });
//       setIsFormOpen(false);

//       // success popup 5 sec baad band ho jaye
//       setTimeout(() => setIsSubmitted(false), 5000);
//     }, 2000);
//   };

//   return (
//     <section
//       id="contact"
//       className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 
//                  dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8">
//           Get in Touch
//         </h2>
//         <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-6">
//           Visit us at Monali Dhole, Rukmini Nagar, Amravati.
//           <br />
//           Clinic Hours: <b>Mon–Sat, 4PM – 7PM</b>
//         </p>
//         <p className="text-gray-700 dark:text-gray-300 mb-6">
//           Dr. Siddhi Fuke | 📞 9511851398
//         </p>

//         {/* Book Appointment Button */}
//         <button
//           onClick={() => setIsFormOpen(true)}
//           className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 
//                      rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300"
//         >
//           Book Appointment
//         </button>

//         {/* Appointment Form Modal */}
//         {isFormOpen && (
//           <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//             <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl w-full max-w-lg relative">
//               {/* Close Button */}
//               <button
//                 onClick={() => setIsFormOpen(true)}
//                 className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
//               >
//                 <X className="w-6 h-6" />
//               </button>

//               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
//                 Book an Appointment
//               </h3>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   placeholder="Full Name"
//                   required
//                   className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:text-white"
//                 />

//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   placeholder="Phone Number"
//                   required
//                   className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:text-white"
//                 />

//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   placeholder="Email Address"
//                   className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:text-white"
//                 />

//                 <select
//                   name="service"
//                   value={formData.service}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:text-white"
//                 >
//                   <option value="">Select a Service</option>
//                   {services.map((service, index) => (
//                     <option key={index} value={service}>
//                       {service}
//                     </option>
//                   ))}
//                 </select>

//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   placeholder="Your Message"
//                   required
//                   className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:text-white"
//                 />

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 
//                              rounded-lg font-semibold shadow-lg hover:scale-105 transition-all duration-300 
//                              disabled:opacity-70"
//                 >
//                   {isSubmitting ? "Sending..." : "Send via WhatsApp"}
//                 </button>
//               </form>
//             </div>
//           </div>
//         )}

//         {/* ✅ Success Popup */}
//         {isSubmitted && (
//           <div className="fixed bottom-5 right-5 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 animate-bounce z-50">
//             <CheckCircle className="w-6 h-6" />
//             <span className="font-medium">Appointment booked successfully!</span>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import { X, CheckCircle } from "lucide-react";

type ContactProps = {
  isFormOpen: boolean;
  setIsFormOpen: (open: boolean) => void;
};

const Contact: React.FC<ContactProps> = ({ isFormOpen, setIsFormOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "General Consultation",
    "Pregnancy Care",
    "Fertility Treatment",
    "PCOS Management",
    "Menopause Care",
    "Emergency Consultation",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // WhatsApp message create
    const whatsappMsg = `Hello Dr. Siddhi Fuke, I would like to book an appointment.
    
👤 Name: ${formData.name +"👤"}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email || "N/A"}
🩺 Service: ${formData.service || "Not specified"}
💬 Message: ${formData.message}

Requested via Website.`;

    const whatsappURL = `https://wa.me/919511851398?text=${encodeURIComponent(
      whatsappMsg
    )}`;
    window.open(whatsappURL, "_blank");

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "", service: "" });
      setIsFormOpen(false);

      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  return (
    <>
      {/* Appointment Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl w-full max-w-lg relative">
            {/* Close Button */}
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Book an Appointment
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:text-white"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                required
                className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:text-white"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:text-white"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select a Service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:text-white"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 
                           rounded-lg font-semibold shadow-lg hover:scale-105 transition-all duration-300 
                           disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send via WhatsApp"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ✅ Success Popup */}
      {isSubmitted && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 animate-bounce z-50">
          <CheckCircle className="w-6 h-6" />
          <span className="font-medium">Appointment booked successfully!</span>
        </div>
      )}
    </>
  );
};

export default Contact;

