import { motion } from "framer-motion";
// import Img1 from "./assets/simple.png";
import Img2 from "../assets/ideate.png";
import Img3 from "../assets/theme.png";


const Section = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between overflow-hidden max-w-full mx-auto w-[90%] h-screen p-6 relative" style={{
      // backgroundColor: "#E6F2F7", // Google Yellow
      // backgroundImage: `linear-gradient(rgba(66, 133, 244, 0.1) 1px, transparent 1px),
      //                   linear-gradient(90deg, rgba(66, 133, 244, 0.1) 1px, transparent 1px)`,
      // backgroundSize: "24px 24px"
    }}>
      {/* Modern geometric decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Google's 4 colors as geometric shapes */}
        <motion.div 
          className="absolute top-12 right-16 w-32 h-32 rounded-3xl bg-blue-500 opacity-10"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute -bottom-10 left-24 w-56 h-56 rounded-full bg-red-500 opacity-10"
          animate={{ 
            y: [0, -15, 0]
          }} 
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/3 -left-12 w-48 h-48 bg-green-500 opacity-10"
          style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
          animate={{ 
            rotate: -360,
            x: [0, 15, 0]
          }} 
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-3/4 right-1/4 w-32 h-32 bg-white opacity-15"
          style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }} 
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Left Section - Content with improved typography */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 text-center md:text-left px-4 z-10"
      >
        <div className="max-w-lg">
          <img
            src={Img2}
            alt="Google Ideate Logo"
            className="mx-auto md:mx-0 mb-6 w-64"
          />
          
          <h2 className="text-3xl font-bold mb-4 text-gray-900" style={{ 
            fontFamily: "'Product Sans', 'Google Sans', sans-serif",
            letterSpacing: "-0.5px" 
          }}>
            Student Innovation Challenge 2025
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-red-500 to-green-500 rounded-full mb-6 md:mx-0 mx-auto"></div>
          
          <p className="text-md text-gray-800 mb-6 leading-relaxed text-justify" style={{ 
            fontFamily: "'Roboto', sans-serif",
            fontWeight: "300",
            fontSize: "17px"
          }}>
            Google Ideate 2.0 is a premier interdepartmental ideathon fostering student innovation. Hosted by GDG on Campus SVIET, it is part of the Global Futures Summit 2.0.
          </p>
          
          <p className="text-md text-gray-800 mb-8 leading-relaxed text-justify" style={{ 
            fontFamily: "'Roboto', sans-serif",
            fontWeight: "300",
            fontSize: "17px"
          }}>
            Aligned with the Google Solution Challenge 2025, it encourages solutions for the 17 UN Sustainable Development Goals (SDGs).
          </p>

          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.a 
              href="/ideate"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <div className="px-8 py-3 bg-[#025067] text-white font-medium rounded-full shadow-lg transition-all flex items-center gap-2">
                <span style={{ fontFamily: "'Google Sans', sans-serif" }}>Register Now</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.a>
            
            <motion.a 
              href="/learn-more"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              {/* <div className="px-8 py-3 bg-white text-gray-800 font-medium rounded-full shadow-lg transition-all border border-gray-200">
                <span style={{ fontFamily: "'Google Sans', sans-serif" }}>Learn More</span>
              </div> */}
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Right Section - Modernized Image Display */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 flex items-center justify-center h-full pt-12 md:pt-0 z-10"
      >
        <div className="relative">
          {/* Google dot indicators */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          
          {/* Modern card with shadow and hover effects */}
          <motion.div
            transition={{ duration: 0.3 }}
            className="p-2 rounded-3xl w-full flex justify-center"
          >
            <img
              src={Img3}
              alt="Innovation Challenge"
              className="w-[900px] object-cover rounded-lg"
            />
            
            {/* Card footer with Google styling */}
            <div className="flex items-center justify-between mt-3 px-2">
              {/* <div className="flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div> */}
              {/* <span className="text-xs text-gray-600" style={{ fontFamily: "'Roboto', sans-serif" }}>
                #SDGs2025
              </span> */}
            </div>
          </motion.div>

          
          {/* Decorative elements */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full border-8 border-yellow-400 opacity-40"></div>
          {/* <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full border-4 border-blue-500 opacity-30"></div> */}
        </div>
      </motion.div>
    </div>
  );
};

export default Section;