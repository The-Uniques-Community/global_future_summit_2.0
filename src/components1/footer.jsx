import React from 'react';
import { 
  Linkedin, 
  Twitter, 
  Instagram, 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Github
} from 'lucide-react';
import imgg from '../assets/glob.png';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white relative overflow-hidden ">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-[#025067] opacity-5 "></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#025067] opacity-5 " style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 rounded-full bg-[#025067] opacity-5 " style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-[#025067] opacity-5 " style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Logo */}
        {/* <div className="flex justify-center mb-8">
          <img 
            src={imgg} 
            alt="FutureSummit Logo" 
            className="h-16 object-contain"
          />
        </div> */}

        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* Column 1: About */}
          <div className="space-y-6">
          <img 
            src={imgg} 
            alt="FutureSummit Logo" 
            className="h-40 object-contain"
          />
            <p className="text-gray-600 mt-[-80px]">
              Join the world's leading tech innovators and visionaries at our annual professional summit, where the future is shaped today.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.linkedin.com/company/theuniquesofflicial/" className="text-[#025067] hover:text-[#02374a] transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/orgs/The-Uniques-Community/" className="text-[#025067] hover:text-[#02374a] transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/theuniquesofficial/" className="text-[#025067] hover:text-[#02374a] transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://chat.whatsapp.com/HYOloogGXKcIkR83DnOjFj" className="text-[#025067] hover:text-[#02374a] transition-colors duration-300">
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Event Details */}
          <div className="space-y-6 mt-12">
            <h3 className="text-lg font-semibold text-[#025067]">Event Details</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-center md:justify-start">
                <Calendar className="w-5 h-5 text-[#025067] mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">March 08, 2025</p>
                  <p className="text-sm text-gray-500">9:00 AM - 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <MapPin className="w-5 h-5 text-[#025067] mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">SVIET Auditorium</p>
                  <p className="text-sm text-gray-500">Banur Chandigarh , 140401</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div className="space-y-6 mt-12">
            <h3 className="text-lg font-semibold text-[#025067]">Stay Updated</h3>
            <p className="text-gray-600">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
            <form className="space-y-3">
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025067] focus:border-transparent transition-all duration-300"
                />
                <button 
                  type="submit" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#025067] text-white p-1 rounded-md hover:bg-[#02374a] transition-colors duration-300"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-gray-500">We respect your privacy and will never share your information.</p>
            </form>
          </div>
        </div>

        {/* Divider with animated gradient */}
        <div className="mt-12 mb-8 relative">
          <div className="h-px bg-gradient-to-r from-transparent via-[#025067] to-transparent opacity-30"></div>
          <div className="h-px w-1/3 bg-[#025067] opacity-70 absolute top-0 left-0 animate-gradient"></div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row mb-6 justify-between items-center text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} FutureSummit. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-[#025067] text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-[#025067] text-sm transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-[#025067] text-sm transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
