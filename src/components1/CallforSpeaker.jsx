import React, { useState } from "react";
import { 
  Mic, 
  Sparkles, 
  BrainCircuit, 
  Network, 
  Rocket, 
  Award, 
  Building2, 
  Users, 
  Briefcase, 
  GraduationCap, 
  X,
  FileSpreadsheet,
  Clock,
  Globe2,
  CheckCircle2
} from "lucide-react";

const CallforSpeaker = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    speakerType: "",
    topicTitle: "",
    topicDescription: "",
    previousExperience: "",
    linkedInProfile: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Before Submission:", formData);
    setIsModalOpen(false);
  
    try {
      const response = await fetch("https://sheetdb.io/api/v1/k7hjbdoasobqb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }), // Ensure correct data format
      });
  
      const result = await response.json();
      console.log("API Response:", result); // Log API response
  
      if (response.ok) {
        alert("Application submitted successfully!");
        setFormData({
          name: "",
          email: "",
          organization: "",
          role: "",
          speakerType: "",
          topicTitle: "",
          topicDescription: "",
          previousExperience: "",
          linkedInProfile: ""
        });
      } else {
        alert("Failed to submit application. " + JSON.stringify(result));
      }
    } catch (error) {
      alert("Error submitting form. Check console for details.");
      console.error("Submission error:", error);
    }
  };
  
  

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen  py-16 px-4">
      {/* Main content */}
      <div className="max-w-7xl mx-auto">
        {/* Header section with glowing effect */}
        <div className="relative mb-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-blue-500/20 blur-3xl rounded-full transform -translate-y-1/2"></div>
          <h1 className="text-5xl font-bold text-[#025067] relative z-10">Call for Speakers</h1>
          <p className="text-xl text-gray-600 mt-4 relative z-10 max-w-3xl mx-auto">
            Share your expertise and insights at the Global Future Summit 2.0
          </p>
        </div>

        {/* Speaker categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Industry Leaders */}
          <div className="group relative overflow-hidden rounded-xl shadow-xl transform transition-all duration-500  hover:shadow-2xl">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#025067] to-[#01303f] opacity-90 z-0"></div>
            <div className="absolute inset-0  opacity-20 mix-blend-overlay"></div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-white"></div>
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-teal-400/10 rounded-full blur-2xl group-hover:bg-teal-400/20 transition-all duration-700"></div>
            
            {/* Content */}
            <div className="relative z-10 p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-white">Industry Leaders</h2>
                <div className="bg-white p-3 rounded-full transform transition-all duration-500 group-hover:scale-110 group-hover:bg-teal-400/30">
                  <Building2 className="h-6 w-6 text-teal-500" />
                </div>
              </div>
              
              <p className="text-blue-100 mb-6 text-sm md:text-base">
                CEOs, CTOs, and executives driving innovation and digital transformation in their organizations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-blue-100 group-hover:translate-x-1 transition-transform duration-300">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-400/20 flex items-center justify-center mr-3">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm md:text-base">Strategic vision presentations</span>
                </div>
                
                <div className="flex items-center text-blue-100 group-hover:translate-x-1 transition-transform duration-300 delay-75">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-400/20 flex items-center justify-center mr-3">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm md:text-base">Industry disruption panels</span>
                </div>
                
                <div className="flex items-center text-blue-100 group-hover:translate-x-1 transition-transform duration-300 delay-150">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-400/20 flex items-center justify-center mr-3">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm md:text-base">Future of work discussions</span>
                </div>
              </div>
              
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </div>

          {/* HR & Talent Leaders */}
          <div className="group relative overflow-hidden rounded-xl shadow-xl transform transition-all duration-500 hover:shadow-2xl">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#025067] to-[#01303f] opacity-90 z-0"></div>
            <div className="absolute inset-0  opacity-20 mix-blend-overlay"></div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-white"></div>
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-400/10 rounded-full blur-2xl group-hover:bg-purple-400/20 transition-all duration-700"></div>
            
            {/* Content */}
            <div className="relative z-10 p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-white">HR & Talent Leaders</h2>
                <div className="bg-white p-3 rounded-full transform transition-all duration-500 group-hover:scale-110 group-hover:bg-purple-400/30">
                  <Users className="h-6 w-6 text-teal-400" />
                </div>
              </div>
              
              <p className="text-blue-100 mb-6 text-sm md:text-base">
                Human resources professionals and talent acquisition specialists shaping the future workforce.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-blue-100 group-hover:translate-x-1 transition-transform duration-300">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-400/20 flex items-center justify-center mr-3">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm md:text-base">Talent development strategies</span>
                </div>
                
                <div className="flex items-center text-blue-100 group-hover:translate-x-1 transition-transform duration-300 delay-75">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-400/20 flex items-center justify-center mr-3">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm md:text-base">Remote work best practices</span>
                </div>
                
                <div className="flex items-center text-blue-100 group-hover:translate-x-1 transition-transform duration-300 delay-150">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-400/20 flex items-center justify-center mr-3">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm md:text-base">AI in recruitment workshops</span>
                </div>
              </div>
              
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </div>

          {/* GDSC Panelists */}
          <div className="group relative overflow-hidden rounded-xl shadow-xl transform transition-all duration-500  hover:shadow-2xl">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#025067] to-[#01303f] opacity-90 z-0"></div>
            <div className="absolute inset-0  opacity-20 mix-blend-overlay"></div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-white"></div>
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl group-hover:bg-amber-400/20 transition-all duration-700"></div>
            
            {/* Content */}
            <div className="relative z-10 p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-white">GDSC Panelists</h2>
                <div className="bg-white p-3 rounded-full transform transition-all duration-500 group-hover:scale-110 group-hover:bg-amber-400/30">
                  <GraduationCap className="h-6 w-6 text-teal-400" />
                </div>
              </div>
              
              <p className="text-blue-100 mb-6 text-sm md:text-base">
                Google Developer Student Club leaders and members showcasing innovative student-led projects.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-blue-100 group-hover:translate-x-1 transition-transform duration-300">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-400/20 flex items-center justify-center mr-3">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm md:text-base">Student innovation showcases</span>
                </div>
                
                <div className="flex items-center text-blue-100 group-hover:translate-x-1 transition-transform duration-300 delay-75">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-400/20 flex items-center justify-center mr-3">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm md:text-base">Hackathon success stories</span>
                </div>
                
                <div className="flex items-center text-blue-100 group-hover:translate-x-1 transition-transform duration-300 delay-150">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-400/20 flex items-center justify-center mr-3">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm md:text-base">Campus tech community building</span>
                </div>
              </div>
              
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </div>
        </div>

        {/* Why become a speaker section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-[#025067] mb-8">Why Become a Speaker?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-100 hover:border-teal-300 transition-all duration-300">
                <div className="bg-teal-400/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Network className="h-7 w-7 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Exposure</h3>
                <p className="text-gray-600">
                  Connect with an audience of 1000+ industry professionals, innovators, and decision-makers.
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-100 hover:border-teal-300 transition-all duration-300">
                <div className="bg-teal-400/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <BrainCircuit className="h-7 w-7 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Thought Leadership</h3>
                <p className="text-gray-600">
                  Establish yourself as a thought leader in your field and shape the future of technology.
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-100 hover:border-teal-300 transition-all duration-300">
                <div className="bg-teal-400/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Rocket className="h-7 w-7 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Career Growth</h3>
                <p className="text-gray-600">
                  Accelerate your professional growth and open doors to new opportunities and collaborations.
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-100 hover:border-teal-300 transition-all duration-300">
                <div className="bg-teal-400/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Award className="h-7 w-7 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Recognition</h3>
                <p className="text-gray-600">
                  Gain recognition for your expertise and contributions to your field and the wider community.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16 md:hidden">
          <h2 className="text-3xl font-bold text-[#025067] mb-8 text-center">Speaker Selection Timeline</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-400 to-blue-500"></div>
            
            {/* Timeline items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              {/* Item 1 */}
              <div className="md:col-start-1 md:text-right">
                <div className="bg-white p-6 rounded-lg shadow-md relative">
                  <div className="absolute top-6 -right-10 md:block hidden">
                    <div className="w-8 h-8 rounded-full bg-teal-400 border-4 border-white shadow-md z-10"></div>
                  </div>
                  <h3 className="text-xl font-bold text-[#025067] mb-2">Call for Speakers Opens</h3>
                  <div className="flex items-center md:justify-end mb-3">
                    <Clock className="h-5 w-5 text-teal-500 mr-2" />
                    <span className="text-gray-600">March 1, 2025</span>
                  </div>
                  <p className="text-gray-600">
                    Submit your proposal through our online portal. Early submissions receive priority consideration.
                  </p>
                </div>
              </div>
              
              {/* Empty cell for spacing */}
              <div className="md:col-start-2"></div>
              
              {/* Item 2 */}
              <div className="md:col-start-2">
                <div className="bg-white p-6 rounded-lg shadow-md relative">
                  <div className="absolute top-6 -left-10 md:block hidden">
                    <div className="w-8 h-8 rounded-full bg-teal-400 border-4 border-white shadow-md z-10"></div>
                  </div>
                  <h3 className="text-xl font-bold text-[#025067] mb-2">Submission Deadline</h3>
                  <div className="flex items-center mb-3">
                    <Clock className="h-5 w-5 text-teal-500 mr-2" />
                    <span className="text-gray-600">March 05, 2025</span>
                  </div>
                  <p className="text-gray-600">
                    All speaker applications must be submitted by this date to be considered for the summit.
                  </p>
                </div>
              </div>
              
              {/* Item 3 */}
              <div className="md:col-start-1 md:text-right">
                <div className="bg-white p-6 rounded-lg shadow-md relative">
                  <div className="absolute top-6 -right-10 md:block hidden">
                    <div className="w-8 h-8 rounded-full bg-teal-400 border-4 border-white shadow-md z-10"></div>
                  </div>
                  <h3 className="text-xl font-bold text-[#025067] mb-2">Speaker Selection</h3>
                  <div className="flex items-center md:justify-end mb-3">
                    <Clock className="h-5 w-5 text-teal-500 mr-2" />
                    <span className="text-gray-600">March 05, 2025</span>
                  </div>
                  <p className="text-gray-600">
                    Selected speakers will be notified and provided with further instructions and guidelines.
                  </p>
                </div>
              </div>
              
              {/* Empty cell for spacing */}
              <div className="md:col-start-2"></div>
              
              {/* Item 4 */}
              <div className="md:col-start-2">
                <div className="bg-white p-6 rounded-lg shadow-md relative">
                  <div className="absolute top-6 -left-10 md:block hidden">
                    <div className="w-8 h-8 rounded-full bg-teal-400 border-4 border-white shadow-md z-10"></div>
                  </div>
                  <h3 className="text-xl font-bold text-[#025067] mb-2">Global Future Summit</h3>
                  <div className="flex items-center mb-3">
                    <Clock className="h-5 w-5 text-teal-500 mr-2" />
                    <span className="text-gray-600">March 08, 2025</span>
                  </div>
                  <p className="text-gray-600">
                    Join us for three days of inspiring talks, workshops, and networking opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button 
            onClick={openModal}
            className=" cursor-pointer px-8 py-4 bg-gradient-to-r from-[#025067] to-[#013a4a] text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#025067] inline-flex items-center"
          >
            <Sparkles className="mr-2 h-5 w-5 " />
            Apply to Become a Speaker
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-[#025067]">Speaker Application</h2>
              <button 
                onClick={closeModal}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>
            
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#025067] mb-4 flex items-center">
                      <Users className="mr-2 h-5 w-5" />
                      Personal Information
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
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
                      
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
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
                      
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          LinkedIn Profile
                        </label>
                        <input 
                          type="url" 
                          name="linkedInProfile" 
                          value={formData.linkedInProfile} 
                          onChange={handleChange} 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025067] focus:border-transparent"
                          placeholder="https://linkedin.com/in/yourprofile"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Professional Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#025067] mb-4 flex items-center">
                      <Briefcase className="mr-2 h-5 w-5" />
                      Professional Information
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Organization
                        </label>
                        <input 
                          type="text" 
                          name="organization" 
                          value={formData.organization} 
                          onChange={handleChange} 
                          required 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025067] focus:border-transparent"
                          placeholder="Company or institution name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Role/Position
                        </label>
                        <input 
                          type="text" 
                          name="role" 
                          value={formData.role} 
                          onChange={handleChange} 
                          required 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025067] focus:border-transparent"
                          placeholder="Your current role"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Speaker Category
                        </label>
                        <select 
                          name="speakerType" 
                          value={formData.speakerType} 
                          onChange={handleChange} 
                          required 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025067] focus:border-transparent bg-white"
                        >
                          <option value="">Select Category</option>
                          <option value="Industry Leader">Industry Leader</option>
                          <option value="HR & Talent Professional">HR & Talent Professional</option>
                          <option value="GDSC Member">GDSC Member</option>
                          <option value="Academic Researcher">Academic Researcher</option>
                          <option value="Startup Founder">Startup Founder</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Presentation Information */}
                <div>
                  <h3 className="text-lg font-semibold text-[#025067] mb-4 flex items-center">
                    <FileSpreadsheet className="mr-2 h-5 w-5" />
                    Presentation Information
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Topic Title
                      </label>
                      <input 
                        type="text" 
                        name="topicTitle" 
                        value={formData.topicTitle} 
                        onChange={handleChange} 
                        required 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025067] focus:border-transparent"
                        placeholder="Enter your presentation title"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Topic Description
                      </label>
                      <textarea 
                        name="topicDescription" 
                        value={formData.topicDescription} 
                        onChange={handleChange} 
                        required 
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025067] focus:border-transparent"
                        placeholder="Describe your presentation topic and key takeaways (200-300 words)"
                      ></textarea>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Previous Speaking Experience
                      </label>
                      <textarea 
                        name="previousExperience" 
                        value={formData.previousExperience} 
                        onChange={handleChange} 
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025067] focus:border-transparent"
                        placeholder="Briefly describe your previous speaking engagements (if any)"
                      ></textarea>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="w-full cursor-pointer py-3 px-4 bg-gradient-to-r from-[#025067] to-[#013a4a] text-white font-medium rounded-md transition duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#025067]"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CallforSpeaker;