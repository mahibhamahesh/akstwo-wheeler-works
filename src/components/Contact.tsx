"use client";

import { useState } from "react";

const contactItems = [
  {
    icon: "📍",
    label: "Workshop Address",
    value: "AKS Two Wheeler Works, Mukkadu",
    href: null,
  },
  {
    icon: "📞",
    label: "Phone / WhatsApp",
    value: "+91 93841 33530",
    href: "tel:9384133530",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "msmahesh8492@gmail.com",
    href: "mailto:msmahesh8492@gmail.com",
  },
  {
    icon: "🕐",
    label: "Working Hours",
    value: "Mon–Sat: 8AM–8PM | Sun: 9AM–2PM",
    href: null,
  },
];

const serviceOptions = [
  "Engine Repair & Rebuild",
  "Oil & Filter Change",
  "Brake System Service",
  "Tyre Replacement",
  "Electrical & Battery",
  "Bike Washing & Polish",
  "Carburettor & Fuel System",
  "Suspension & Chain",
  "General Service Package",
  "Other",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    bikeModel: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const message = `
🏍️ *AKS TWO WHEELER WORKS*

🔧 *NEW SERVICE BOOKING REQUEST*

👤 Customer Name:
${formData.name}

📞 Phone Number:
${formData.phone}

🏍️ Bike Model:
${formData.bikeModel || "Not Provided"}

🛠️ Service Required:
${formData.service || "Not Selected"}

📝 Customer Message:
${formData.message || "No Message"}

━━━━━━━━━━━━━━
Thank you for choosing AKS Two Wheeler Works
    `;

    const whatsappURL = `https://wa.me/919384133530?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");

    setSubmitted(true);

    setFormData({
      name: "",
      phone: "",
      bikeModel: "",
      service: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  }

  return (
    <section
      id="contact"
      className="py-24 px-6 lg:px-[6%] bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#F5B800] text-sm font-bold tracking-[4px] uppercase mb-3">
            Get In Touch
          </p>

          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] tracking-[2px] text-gray-900 leading-none">
            Contact Us
          </h2>

          <div className="w-20 h-[3px] bg-gradient-to-r from-[#F5B800] to-transparent rounded mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <h3 className="font-display text-3xl text-gray-900 mb-6">
                Visit Our <span className="text-[#F5B800]">Workshop</span>
              </h3>

              <div className="w-12 h-[2px] bg-gradient-to-r from-[#F5B800] to-transparent rounded mb-6" />

              <p className="text-gray-600 leading-relaxed mb-8">
                We're open 6 days a week and ready to help with any bike issue.
                Drop in, call, or send us a message.
              </p>

              <div className="space-y-6">
                {contactItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F5B800] to-amber-500 text-white flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition-all duration-300">
                      {item.icon}
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                        {item.label}
                      </p>

                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-semibold text-gray-900 hover:text-[#F5B800] transition-colors duration-300 text-lg"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-gray-900 text-lg">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Card */}
            <div className="bg-gradient-to-br from-[#F5B800] to-amber-500 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center text-3xl">
                  🗺️
                </div>

                <div>
                  <h4 className="font-bold text-black text-xl">
                    Find Us in Mukkadu
                  </h4>

                  <p className="text-gray-900 text-sm mt-1">
                    Easy access from the main road. Look for the AKS signboard.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500">
            <div className="text-center mb-8">
              <div className="inline-block p-3 bg-gradient-to-br from-[#F5B800]/10 to-amber-500/10 rounded-2xl mb-4">
                <span className="text-4xl">🔧</span>
              </div>

              <h3 className="font-display text-3xl text-gray-900 mb-2">
                Book a <span className="text-[#F5B800]">Service</span>
              </h3>

              <p className="text-gray-500 text-sm">
                Fill the form and we'll get back to you
              </p>
            </div>

            {submitted ? (
              <div className="py-16 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-5xl">✅</span>
                </div>

                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  Booking Received!
                </h4>

                <p className="text-gray-600">
                  Thank you for choosing AKS. We'll contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-[#F5B800] focus:bg-white transition-all duration-300"
                  />

                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-[#F5B800] focus:bg-white transition-all duration-300"
                  />
                </div>

                <input
                  type="text"
                  name="bikeModel"
                  value={formData.bikeModel}
                  onChange={handleChange}
                  placeholder="Bike Brand & Model (e.g., Honda Activa 6G)"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-[#F5B800] focus:bg-white transition-all duration-300"
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-[#F5B800] focus:bg-white transition-all duration-300 cursor-pointer"
                >
                  <option value="">Select a Service</option>

                  {serviceOptions.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>

                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe the issue or any specific requirements..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none resize-none focus:border-[#F5B800] focus:bg-white transition-all duration-300"
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#F5B800] to-amber-500 text-black py-4 rounded-xl font-bold uppercase tracking-wider hover:scale-[1.02] hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>⚡</span>
                  Submit Booking Request
                  <span>→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}