// pages/contact.tsx
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
    <div id="contact" className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Contact Us</h1>

      {/* Contact Form */}
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            rows={5}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {/* Contact Information */}
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <p>
          <img
            src="/icons/email.svg"
            alt="Email icon"
            className="inline-block mr-2"
          />
          info@example.com
        </p>
        <p>
          <img
            src="/icons/phone.svg"
            alt="Phone icon"
            className="inline-block mr-2"
          />
          +123 456 7890
        </p>
        <p>
          <img
            src="/icons/address.svg"
            alt="Address icon"
            className="inline-block mr-2"
          />
          123 Main St, Hometown, Country
        </p>
      </div>

      {/* Google Maps Integration */}
      <div className="mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096837!2d144.95373531532184!3d-37.816279179751606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f2b097%3A0x5045675218ce7e33!2sVictoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1611781055647!5m2!1sen!2sus"
          width="100%"
          height="400"
          allowFullScreen={false}
          loading="lazy"
          className="border-0"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
