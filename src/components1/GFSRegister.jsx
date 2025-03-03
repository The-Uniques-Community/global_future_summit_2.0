import React, { useState } from "react";
import { BookOpen, Mail, Phone, User, BookmarkIcon, Globe, Cpu, Leaf, Users } from "lucide-react";
import { Toaster, toast } from "sonner";

const GFSRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    college: "",
    department: "",
    admnNo: "",
    semester: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Please enter your full name");
      return false;
    }
    if (!/^\d{10}$/.test(formData.contact)) {
      toast.error("Please enter a valid 10-digit phone number");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (!formData.college.trim()) {
      toast.error("Please enter your college name");
      return false;
    }
    if (!formData.admnNo.trim()) {
      toast.error("Please enter your admission number");
      return false;
    }
    if (!formData.department) {
      toast.error("Please select your department");
      return false;
    }
    if (!formData.semester) {
      toast.error("Please select your semester");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch('https://global-backend-nine.vercel.app/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      setFormData({
        name: "",
        email: "",
        contact: "",
        college: "",
        department: "",
        admnNo: "",
        semester: "",
      });

      toast.success("Registration successful! Check your email for confirmation.");
    } catch (error) {
      toast.error(error.message || 'An error occurred during registration. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen md:mt-30 mt-20 bg-gray-100 flex items-center justify-center p-4">
      <Toaster position="top-center" richColors expand={true} visibleToasts={3} />
      
      <div className="w-full max-w-7xl bg-white rounded-xl shadow-lg overflow-hidden flex flex-col  md:flex-row">
        {/* Left side decorative panel */}
        <div className="bg-gradient-to-br  from-[#025067] to-[#01303f] md:w-1/2 p-8 flex flex-col justify-between">
          <div className="my-auto">
            <h1 className="text-3xl font-bold text-white mb-4">Global Future Summit 2.0</h1>
            <p className="text-blue-100 mb-8">Be a part of the transformative summit by completing your registration</p>
          
            <div className="grid grid-cols-1 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 shadow-lg relative overflow-hidden">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-white mt-2">Global Convergence</h3>
                    <p className="text-blue-100 mt-2 text-sm">
                      Connect with visionaries from six continents, exploring breakthrough technologies and forging partnerships.
                    </p>
                  </div>
                  <div className="bg-teal-400/20 p-3 rounded-full">
                    <Globe className="h-6 w-6 text-teal-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 shadow-lg relative overflow-hidden">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-white mt-2">Future Technologies</h3>
                    <p className="text-blue-100 mt-2 text-sm">
                      Immerse yourself in AI, quantum computing, and next-gen sustainable solutions.
                    </p>
                  </div>
                  <div className="bg-teal-400/20 p-3 rounded-full">
                    <Cpu className="h-6 w-6 text-teal-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 shadow-lg relative overflow-hidden">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-white mt-2">Sustainable Growth</h3>
                    <p className="text-blue-100 mt-2 text-sm">
                      Explore innovations balancing economic prosperity with environmental stewardship.
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
              <label className="text-gray-700 text-sm font-medium mb-2 flex items-center">
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
              <label className="text-gray-700 text-sm font-medium mb-2 flex items-center">
                <Phone className="mr-2 h-4 w-4 text-[#025067]" />
                Phone Number
              </label>
              <input 
                type="tel" 
                name="contact" 
                value={formData.contact} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025067] focus:border-transparent"
                placeholder="Enter 10-digit number"
                maxLength="10"
              />
            </div>

            <div className="pb-4">
              <label className="text-gray-700 text-sm font-medium mb-2 flex items-center">
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
              <label className="text-gray-700 text-sm font-medium mb-2 flex items-center">
                <Users className="mr-2 h-4 w-4 text-[#025067]" />
                College Name
              </label>
              <input 
                type="text" 
                name="college" 
                value={formData.college} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025067] focus:border-transparent"
                placeholder="Enter college name"
              />
            </div>

            <div className="pb-4">
              <label className="text-gray-700 text-sm font-medium mb-2 flex items-center">
                <BookmarkIcon className="mr-2 h-4 w-4 text-[#025067]" />
                Admission Number
              </label>
              <input 
                type="text" 
                name="admnNo" 
                value={formData.admnNo} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025067] focus:border-transparent"
                placeholder="Enter admission number"
              />
            </div>

            <div className="pb-4">
              <label className="text-gray-700 text-sm font-medium mb-2 flex items-center">
                <BookOpen className="mr-2 h-4 w-4 text-[#025067]" />
                Department
              </label>
              <select 
                name="department" 
                value={formData.department} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025067] focus:border-transparent bg-white"
              >
                <option value="">Select Department</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Mechanical Engineering">Mechanical Engineering</option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Electrical Engineering">Electrical Engineering</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div className="pb-4">
              <label className="text-gray-700 text-sm font-medium mb-2 flex items-center">
                <BookmarkIcon className="mr-2 h-4 w-4 text-[#025067]" />
                Semester
              </label>
              <select 
                name="semester" 
                value={formData.semester} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025067] focus:border-transparent bg-white"
              >
                <option value="">Select Semester</option>
                {[1,2,3,4,5,6,7,8].map((num) => (
                  <option key={num} value={`${num}${getOrdinal(num)}`}>
                    {num}
                    <sup>{getOrdinal(num)}</sup>
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-3 px-4 bg-[#025067] hover:bg-[#013a4a] text-white font-medium rounded-md transition duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#025067] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Complete Registration"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Helper function for ordinal suffixes
const getOrdinal = (n) => {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return s[(v - 20) % 20] || s[v] || s[0];
};

export default GFSRegister;