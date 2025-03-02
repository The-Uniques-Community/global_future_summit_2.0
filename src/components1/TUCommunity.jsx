import React from "react";
import { motion } from "framer-motion"; // For animations
import { CheckCircleIcon, UsersIcon, DocumentTextIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";
import undrawImage from "../assets/register.png"; // Replace with your image path

const ConsultingSection = () => {
  return (
    <section className="relative container mx-auto py-20 px-6 lg:px-20">
      {/* Triangle Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#025067] opacity-30 clip-triangle"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#025067] opacity-30 clip-triangle rotate-180"></div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Left Side (Text + Button) */}
     <motion.div 
  className="w-full lg:w-1/2 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
  initial={{ opacity: 0, x: -50 }} 
  animate={{ opacity: 1, x: 0 }} 
  transition={{ duration: 0.8 }}
>
  <h2 className="text-4xl font-bold text-gray-900 leading-tight">
    Join <span className="text-[#BA2027]">The Uniques Community</span>
  </h2>
  <p className="text-gray-600 text-lg">
    An inclusive platform for <strong>innovation, collaboration, and skill development.</strong> 
    Connect with like-minded individuals, learn new technologies, and grow together!
  </p>


          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureItem 
              icon={<UsersIcon className="w-8 h-8 text-[#025067]" />} 
              text="Innovation & Creativity" 
              tagline="Unlock new ideas & bring them to life!"
            />
            <FeatureItem 
              icon={<ShieldCheckIcon className="w-8 h-8 text-[#025067]" />} 
              text="Collaboration & Networking" 
              tagline="Build strong connections & grow together."
            />
            <FeatureItem 
              icon={<DocumentTextIcon className="w-8 h-8 text-[#025067]" />} 
              text="Skill Development" 
              tagline="Learn, upskill, and stay ahead of the curve."
            />
            <FeatureItem 
              icon={<CheckCircleIcon className="w-8 h-8 text-[#025067]" />} 
              text="Opportunities & Growth" 
              tagline="Grab exciting opportunities for a bright future!"
            />
          </div>

          {/* Button */}
          <motion.a 
            href="https://chat.whatsapp.com/HYOloogGXKcIkR83DnOjFj" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 mt-6 text-lg font-medium text-white bg-[#025067] rounded-xl shadow-lg hover:bg-red-700 transition"
          >
            Join Our Community
          </motion.a>
        </motion.div>

        {/* Right Side (Image) */}
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <img 
            src={undrawImage} 
            alt="Community" 
            className="w-full max-w-md lg:max-w-xl rounded-xl "
          />
        </motion.div>

      </div>
    </section>
  );
};

// Feature Item Component
const FeatureItem = ({ icon, text, tagline }) => {
  return (
    <div className="flex flex-col items-start gap-2 p-4 bg-white shadow-md rounded-lg">
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-lg font-medium text-gray-900">{text}</span>
      </div>
      <p className="text-sm text-gray-500 italic">{tagline}</p>
    </div>
  );
};

export default ConsultingSection;