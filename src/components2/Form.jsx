import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../firebaseConfig";
import ideateImage from "../assets/Ideate.jpg";

const db = getDatabase(app);

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    teamName: "",
    teamLeader: "",
    teamMembers: 1,
    members: [""],
    pptUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTeamMembersChange = (e) => {
    const membersCount = parseInt(e.target.value, 10);
    setFormData((prevData) => ({
      ...prevData,
      teamMembers: membersCount,
      members: Array(membersCount).fill(""),
    }));
  };

  const handleMemberChange = (index, value) => {
    const updatedMembers = [...formData.members];
    updatedMembers[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      members: updatedMembers,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.teamName) {
      toast.error("Please enter your team name before submitting!", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    try {
      await set(ref(db, `participants/${formData.teamName}`), {
        Team_Name: formData.teamName,
        Team_Leader: formData.teamLeader,
        Team_Count: formData.teamMembers,
        Team_Members: formData.members,
        PPT_URL: formData.pptUrl
      });

      toast.success("Registration successful!", {
        position: "top-center",
        autoClose: 3000,
      });

      // Reset form
      setFormData({
        teamName: "",
        teamLeader: "",
        teamMembers: 1,
        members: [""],
        pptUrl: "",
      });

    } catch (error) {
      toast.error("Error saving data: " + error.message, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="flex flex-col pt-36 md:p-0 md:flex-row min-h-screen bg-gradient-to-br from-gray-900 to-black font-sans">
      <ToastContainer />
      
      {/* Form Section */}
      <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
        <div className="w-full max-w-md bg-black/30 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border border-[#16a3cc]/20">
          <div className="px-8 pt-8 pb-6">
            <h2 className="text-3xl font-bold text-white mb-1">Register</h2>
            <p className="text-[#16a3cc] mb-6">Please fill in your team details below</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="teamName"
                  placeholder="Team Name"
                  value={formData.teamName}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-[#0b7797]/50 rounded-lg p-3 text-white placeholder-[#16a3cc]/70 focus:outline-none focus:ring-2 focus:ring-[#16a3cc] transition duration-200"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  name="teamLeader"
                  placeholder="Team Leader Name"
                  value={formData.teamLeader}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-[#0b7797]/50 rounded-lg p-3 text-white placeholder-[#16a3cc]/70 focus:outline-none focus:ring-2 focus:ring-[#16a3cc] transition duration-200"
                />
              </div>
              
              <div>
                <label className="block text-[#16a3cc] mb-2">Number of Team Members</label>
                <select
                  name="teamMembers"
                  value={formData.teamMembers}
                  onChange={handleTeamMembersChange}
                  required
                  className="w-full bg-black/50 border border-[#0b7797]/50 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#16a3cc] transition duration-200"
                >
                  {[1, 2, 3, 4].map((num) => (
                    <option key={num} value={num} className="bg-gray-900 text-white">
                      {num}
                    </option>
                  ))}
                </select>
              </div>
              
              {formData.members.map((member, index) => (
                <div key={index}>
                  <input
                    type="text"
                    placeholder={`Team Member ${index + 1} Name`}
                    value={member}
                    onChange={(e) => handleMemberChange(index, e.target.value)}
                    required
                    className="w-full bg-black/50 border border-[#0b7797]/50 rounded-lg p-3 text-white placeholder-[#16a3cc]/70 focus:outline-none focus:ring-2 focus:ring-[#16a3cc] transition duration-200"
                  />
                </div>
              ))}
              
              <div>
                <label className="block text-[#16a3cc] mb-2">PPT URL</label>
                <input
                  type="url"
                  name="pptUrl"
                  placeholder="Enter PPT URL"
                  value={formData.pptUrl}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-[#0b7797]/50 rounded-lg p-3 text-white placeholder-[#16a3cc]/70 focus:outline-none focus:ring-2 focus:ring-[#16a3cc] transition duration-200"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0b7797] to-[#16a3cc] hover:from-[#16a3cc] hover:to-[#0b7797] text-white font-bold py-3 px-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
              >
                Submit Registration
              </button>
            </form>
          </div>
          
          <div className="bg-gradient-to-r from-[#0b7797] to-[#16a3cc] h-1 w-full"></div>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="hidden md:block md:w-1/2 bg-black/40">
        <div className="h-full w-full flex items-center justify-center p-6">
          <img 
            src={ideateImage} 
            alt="Ideate" 
            className="max-w-[70%] max-h-full object-contain rounded-xl shadow-2xl transform -rotate-2 hover:rotate-0 transition duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;