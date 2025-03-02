import React, { useState, useEffect } from "react";
import { getDatabase, ref, set } from "firebase/database";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../firebaseConfig";

const db = getDatabase(app);
const storage = getStorage(app);

const IdeateRegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    department: "",
    semester: "",
    email: "",
    participatingInIdeathon: false,
    teamName: "",
    leaderName: "",
    teamSize: 1,
    memberNames: [""],
    pptFile: null,
  });

  useEffect(() => {
    setFormData((prevData) => {
      const newMemberNames = [...prevData.memberNames];

      while (newMemberNames.length < prevData.teamSize) {
        newMemberNames.push("");
      }
      newMemberNames.length = prevData.teamSize; // Trim excess

      return {
        ...prevData,
        memberNames: newMemberNames,
      };
    });
  }, [formData.teamSize]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleToggleChange = () => {
    setFormData((prevData) => ({
      ...prevData,
      participatingInIdeathon: !prevData.participatingInIdeathon,
    }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
  
    const fileRef = storageRef(storage, `pptFiles/${file.name}`);
  
    try {
      // Upload the file to Firebase Storage
      await uploadBytes(fileRef, file);
  
      // Get the download URL of the uploaded file
      const downloadURL = await getDownloadURL(fileRef);
  
      // Update formData with the download URL
      setFormData((prevData) => ({
        ...prevData,
        pptFile: downloadURL, // Store the URL instead of the file object
      }));
  
      alert("File uploaded successfully!");
    } catch (error) {
      alert("Error uploading file: " + error.message);
    }
  };

  const handleTeamMemberChange = (index, value) => {
    const updatedMemberNames = [...formData.memberNames];
    updatedMemberNames[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      memberNames: updatedMemberNames,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const putData = async (e) => {
    e.preventDefault();
  
    if (!formData.fullName) {
      alert("Please enter your full name before submitting.");
      return;
    }
  
    try {
      let pptDownloadURL = formData.pptFile; // Assume pptFile is already a URL if it's a string
  
      // If pptFile is a File object (not yet uploaded), upload it and get the URL
      if (formData.pptFile && typeof formData.pptFile !== "string") {
        const fileRef = storageRef(storage, `pptFiles/${formData.pptFile.name}`);
        await uploadBytes(fileRef, formData.pptFile);
        pptDownloadURL = await getDownloadURL(fileRef);
      }
  
      // Save all form data to Firebase Realtime Database
      await set(ref(db, `participants/${formData.fullName}`), {
        name: formData.fullName,
        dept: formData.department,
        semester: formData.semester,
        email: formData.email,
        participatingInIdeathon: formData.participatingInIdeathon,
        teamName: formData.teamName,
        leaderName: formData.leaderName,
        teamSize: formData.teamSize,
        memberNames: formData.memberNames,
        pptFile: pptDownloadURL, // Save the URL of the uploaded PPT file
      });
  
      alert("Data saved successfully!");
    } catch (error) {
      alert("Error saving data: " + error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 border-2 border-gray-300 rounded-lg shadow-lg space-y-6 bg-white font-[Poppins]"
    >
      <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
        Registration Form
      </h2>

      <div className="space-y-2">
        <label className="block text-lg font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full p-3 border-2 border-gray-300 rounded-lg"
          placeholder="Enter your full name"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-lg font-medium text-gray-700">
          Department
        </label>
        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
          className="w-full p-3 border-2 border-gray-300 rounded-lg"
        >
          <option value="">Select Department</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Electrical Engineering">Electrical Engineering</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="Civil Engineering">Civil Engineering</option>
          <option value="B Pharmacy">B Pharmacy</option>
          <option value="BPT">BPT</option>
          <option value="Applied Science">Applied Science</option>
          <option value="Law">Law</option>
          <option value="BBA">BBA</option>
          <option value="Paramedical">Paramedical</option>
          <option value="Pharmacy">Pharmacy</option>
          <option value="Biotechnology">Biotechnology</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-lg font-medium text-gray-700">
          Semester
        </label>
        <select
          name="semester"
          value={formData.semester}
          onChange={handleChange}
          className="w-full p-3 border-2 border-gray-300 rounded-lg"
        >
          <option value="">Select Semester</option>
          {[...Array(8)].map((_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}th Semester
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-lg font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border-2 border-gray-300 rounded-lg"
        />
      </div>

      <div className="flex items-center space-x-2">
        <label className="text-lg font-medium text-gray-700">
          Participating in Ideathon 2.0?
        </label>
        <input
          type="checkbox"
          checked={formData.participatingInIdeathon}
          onChange={handleToggleChange}
          className="h-5 w-5 border-2 border-gray-300 rounded"
        />
      </div>

      {formData.participatingInIdeathon && (
        <div className="space-y-6 mt-6">
          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-700">
              Team Name
            </label>
            <input
              type="text"
              name="teamName"
              value={formData.teamName}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-700">
              Leader Name
            </label>
            <input
              type="text"
              name="leaderName"
              value={formData.leaderName}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-700">
              Team Size
            </label>
            <select
              name="teamSize"
              value={formData.teamSize}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg"
            >
              {[1, 2, 3, 4].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          {/* Team Member Inputs */}
          {formData.memberNames.map((_, index) => (
            <div className="space-y-2" key={index}>
              <label className="block text-lg font-medium text-gray-700">{`Team Member ${
                index + 1
              }`}</label>
              <input
                type="text"
                value={formData.memberNames[index]}
                onChange={(e) => handleTeamMemberChange(index, e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-lg"
              />
            </div>
          ))}

          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-700">
              Upload PPT
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg"
            />
          </div>
        </div>
      )}

      <button
        type="submit"
        className="w-full p-4 bg-blue-500 text-white text-lg font-medium rounded-lg hover:bg-blue-600 transition"
        onClick={putData}
      >
        Submit
      </button>
    </form>
  );
};

export default IdeateRegistrationForm;