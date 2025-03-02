import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Google = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full font-[Poppins] min-h-screen text-center bg-gradient-to-b from-[#3b5dd9] via-[#65a0f5] to-[#b7dcf7] p-4 overflow-hidden">

      {/* Animated Cloud */}
      <motion.img
        src="https://io.google/2025/assets/images/io25-home-hero-cloud-left.webp"
        alt="Google I/O Cloud"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-[0%] left-[-16px] w-[40vw] sm:w-[400px] md:w-[500px] max-w-full h-auto"
      />

      <motion.img
        src="https://io.google/2025/assets/images/io25-home-hero-cloud-right.webp"
        alt="Google I/O Right Cloud"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute bottom-0 right-[-10px] w-[32vw] sm:w-[320px] md:w-[400px] max-w-full h-auto"
      />

      {/* Bottom Left Floating Video */}
      <motion.video
        src="https://io.google/2025/assets/animations/io25-home-hero-dev.webm"
        autoPlay
        loop
        muted
        playsInline
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute bottom-0 left-[1%] w-[30vw] sm:w-[240px] md:w-[280px] max-w-full h-auto"
      />

      {/* Top Right Mirrored Image */}
      <motion.img
        src="https://io.google/2025/assets/images/io25-community-gde-card.webp"
        alt="Mirrored Floating Image"
        initial={{ opacity: 1 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          y: { duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }
        }}
        className="absolute top-0 right-[1%] w-[35vw] sm:w-[280px] md:w-[320px] max-w-full h-auto"
      />

      {/* Main Heading */}
      <motion.h1
        className="text-white text-[8vw] sm:text-6xl md:text-8xl font-bold leading-tight font-[Google Sans]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <span className="flex">
          <span className="text-white">G</span>
          <span className="text-red-500">o</span>
          <span className="text-yellow-500">o</span>
          <span className="text-white">g</span>
          <span className="text-green-500">l</span>
          <span className="text-red-500">e</span>
        </span>
      </motion.h1>

      <motion.h1
        className="text-white text-[8vw] sm:text-6xl md:text-8xl font-bold leading-tight font-[Google Sans] flex items-center gap-x-3 sm:gap-x-5"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <span>Ideate 2.0</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-white text-[2.5vw] sm:text-lg mt-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
      >
        Student Innovation Challenge 2025 - Unleash your creativity and turn bold ideas into reality.
        <br />
        Join the movement shaping the future of technology!
      </motion.p>

      {/* Call-to-Action Button */}
      <Link to="/register" className="z-10" >
          <button className="mt-12 px-8 py-3 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white text-[3vw] sm:text-lg font-semibold rounded-lg transition-all shadow-md hover:shadow-lg">
              Register Now      
          </button>
      </Link>

    </div>
  );
};

export default Google;