import React, { useState } from "react";
import { BookOpen, Mail, Phone, User, BookmarkIcon, Globe, Cpu, Leaf, Users, Lightbulb, Mic, BarChart3 } from "lucide-react";

const GFSRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    semester: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen mt-10 bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-7xl bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left side decorative panel */}
        <div className="bg-gradient-to-br from-[#025067] to-[#01303f] md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-4">Global Future Summit 2.0</h1>
            <p className="text-blue-100 mb-8">Be a part of the transformative summit by completing your registration</p>
          
            {/* Grid cards */}
            <div className="grid grid-cols-1 gap-6 mb-8">
              {/* Card 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 shadow-lg relative overflow-hidden">
                <div className="flex justify-between items-start">
                  <div>
                    {/* <span className="text-5xl font-bold text-teal-400">01</span> */}
                    <h3 className="text-xl font-semibold text-white mt-2">Global Convergence</h3>
                    <p className="text-blue-100 mt-2 text-sm">
                      Connect with visionaries from six continents, exploring breakthrough technologies and forging partnerships that transcend borders.
                    </p>
                  </div>
                  <div className="bg-teal-400/20 p-3 rounded-full">
                    <Globe className="h-6 w-6 text-teal-400" />
                  </div>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 shadow-lg relative overflow-hidden">
                <div className="flex justify-between items-start">
                  <div>
                    {/* <span className="text-5xl font-bold text-teal-400">02</span> */}
                    <h3 className="text-xl font-semibold text-white mt-2">Future Technologies</h3>
                    <p className="text-blue-100 mt-2 text-sm">
                      Immerse yourself in AI, quantum computing, and next-gen sustainable solutions shaping our collective tomorrow.
                    </p>
                  </div>
                  <div className="bg-teal-400/20 p-3 rounded-full">
                    <Cpu className="h-6 w-6 text-teal-400" />
                  </div>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 shadow-lg relative overflow-hidden">
                <div className="flex justify-between items-start">
                  <div>
                    {/* <span className="text-5xl font-bold text-teal-400">03</span> */}
                    <h3 className="text-xl font-semibold text-white mt-2">Sustainable Growth</h3>
                    <p className="text-blue-100 mt-2 text-sm">
                      Explore innovations that balance economic prosperity with environmental stewardship for a thriving global ecosystem.
                    </p>
                  </div>
                  <div className="bg-teal-400/20 p-3 rounded-full">
                    <Leaf className="h-6 w-6 text-teal-400" />
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          
          <div className="mt-8">
            <p className="text-sm text-blue-100 opacity-80">© 2025 Global Future Summit</p>
          </div>
        </div>
        
        {/* Right side form */}
        <div className="md:w-1/2 p-8">
          <h2 className="md:text-5xl text-4xl font-bold text-[#025067] mb-6">Summit Registration</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="pb-4">
              <label className=" text-gray-700 text-sm font-medium mb-2 flex items-center">
                <User className="mr-2 h-4 w-4 text-[#025067]" />
                Full Name
              </label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025067] focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>
            <div className="pb-4">
              <label className=" text-gray-700 text-sm font-medium mb-2 flex items-center">
                <Phone className="mr-2 h-4 w-4 text-[#025067]" />
                Phone Number
              </label>
              <input 
                type="text" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025067] focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>
            
            <div className="pb-4">
              <label className=" text-gray-700 text-sm font-medium mb-2 flex items-center">
                <Mail className="mr-2 h-4 w-4 text-[#025067]" />
                Email Address
              </label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025067] focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="pb-4">
              <label className=" text-gray-700 text-sm font-medium mb-2 flex items-center">
                <BookOpen className="mr-2 h-4 w-4 text-[#025067]" />
                Department
              </label>
              <select 
                name="department" 
                value={formData.department} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-2 pb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025067] focus:border-transparent bg-white"
              >
                <option value="">Select Department</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Mechanical Engineering">Mechanical Engineering</option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Electrical Engineering">Electrical Engineering</option>
              </select>
            </div>
            
            <div className="pb-4">
              <label className=" text-gray-700 text-sm font-medium mb-2 flex items-center">
                <BookmarkIcon className="mr-2 h-4 w-4 text-[#025067]" />
                Semester
              </label>
              <select 
                name="semester" 
                value={formData.semester} 
                onChange={handleChange} 
                required 
                className="w-full px-4 pb-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025067] focus:border-transparent bg-white"
              >
                <option value="">Select Semester</option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
                <option value="5th">5th</option>
                <option value="6th">6th</option>
                <option value="7th">7th</option>
                <option value="8th">8th</option>
              </select>
            </div>
            
           
            
            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full py-3 px-4 bg-[#025067] hover:bg-[#013a4a] text-white font-medium rounded-md transition duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#025067]"
              >
                Complete Registration
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GFSRegister;