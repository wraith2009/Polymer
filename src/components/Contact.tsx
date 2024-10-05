"use client";
import { FC, useState } from "react";

const ContactUs: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    console.log("Form data:", formData);
  };

  return (
    
    <div id="contact" className="container mx-auto py-10 md:px-20 px-10">
      <h1 className="text-4xl font-bold text-center mb-16 text-gray-800">
        Get in Touch
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form className="bg-white p-6 shadow-md rounded-lg" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded"
              rows={5}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="bg-gray-100 p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <p className="mb-4">
            <img
              src="/email.png"
              alt="Email icon"
              className="inline-block mr-2"
            />
            info@example.com
          </p>
          <p className="mb-4">
            <img
              src="/phone-call.png"
              alt="Phone icon"
              className="inline-block mr-2"
            />
            +123 456 7890
          </p>
          <p className="mb-4">
            <img
              src="/placeholder.png"
              alt="Address icon"
              className="inline-block mr-2"
            />
            123 Main St, Hometown, Country
          </p>
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096837!2d144.95373531532184!3d-37.816279179751606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f2b097%3A0x5045675218ce7e33!2sVictoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1611781055647!5m2!1sen!2sus"
          width="100%"
          height="200"
          allowFullScreen={false}
          loading="lazy"
          className="border-0 rounded-lg"
          title="Google Maps"
        ></iframe>
        </div>
      </div>

      {/* Google Maps Integration */}
      <div className="mt-10">
        
      </div>
    </div>
  );
};

export default ContactUs;
