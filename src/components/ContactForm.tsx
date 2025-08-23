import React, { useState, useEffect } from "react";
import { X, CheckCircle, Send } from "lucide-react";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  prefillService?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose, prefillService }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: prefillService || ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Update service when prop changes
    setFormData(prev => ({ ...prev, service: prefillService || "" }));
  }, [prefillService]);

  const services = [
    "General Consultation",
    "Pregnancy Care",
    "Fertility Treatment",
    "PCOS Management",
    "Menopause Care",
    "Emergency Consultation"
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappMsg = `Hello Dr. Siddhi Fuke, I would like to book an appointment.

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email || "N/A"}
🩺 Service: ${formData.service || "Not specified"}
💬 Message: ${formData.message}

ted via Website.`;

    const whatsappURL = `https://wa.me/919511851398?text=${encodeURIComponent(whatsappMsg)}`;
    window.open(whatsappURL, "_blank");

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onClose();
      // auto hide toast
      setTimeout(() => setIsSubmitted(false), 4000);
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Modal */}
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl w-full max-w-lg relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
          >
            <X className="w-6 h-6" />
          </button>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Book an Appointment
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
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
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {isSubmitting ? "Sending..." : (<><Send className="w-5 h-5" /> Send via WhatsApp</>)}
            </button>
          </form>
        </div>
      </div>

      {/* Success Toast */}
      {isSubmitted && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 animate-bounce z-50">
          <CheckCircle className="w-6 h-6" />
          <span className="font-medium">Appointment booked successfully!</span>
        </div>
      )}
    </>
  );
};

export default ContactForm;
