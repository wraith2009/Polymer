"use client";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Us Section */}
        <div className="">
          <h3 className="text-xl font-semibold mb-4 text-white">About Us</h3>
          <p className="text-gray-400">
            We strive to create a seamless job tracking experience, helping users stay on top of their applications with ease. Our platform connects people to the right opportunities effortlessly.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col justify-between md:items-center">
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#home" className="hover:text-green-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-green-500 transition">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-green-500 transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-green-500 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-4 text-white">Contact Info</h3>
          <ul className="space-y-4 text-gray-400">
            <li>
              <img
                src="/email.png"
                alt="Email"
                className="inline-block w-5 h-5 mr-2"
              />
              info@example.com
            </li>
            <li>
              <img
                src="/phone-call.png"
                alt="Phone"
                className="inline-block w-5 h-5 mr-2"
              />
              +123 456 7890
            </li>
            <li>
              <img
                src="/placeholder.png"
                alt="Address"
                className="inline-block w-5 h-5 mr-2"
              />
              123 Main St, Hometown, Country
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-8 flex justify-center space-x-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.icons8.com/?size=100&id=118468&format=png&color=FFFFFF"
            alt="Facebook"
            className="w-6 h-6 hover:text-green-500 transition"
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.icons8.com/?size=100&id=rtpOcTdebJ36&format=png&color=FFFFFF"
            alt="Twitter"
            className="w-6 h-6 hover:text-green-500 transition"
          />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.icons8.com/?size=100&id=447&format=png&color=FFFFFF"
            alt="LinkedIn"
            className="w-6 h-6 hover:text-green-500 transition"
          />
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center">
        <p className="text-gray-400">&copy; 2024 YourCompany. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
