import React, { useState } from "react"
import { Check, ChevronRight, User, Mail, Briefcase, Building, Globe, BookOpen, GraduationCap } from "lucide-react"

export default function GFSRegistrationForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    admissionNumber: "",
    semester: "",
    department: "",
    attendanceType: "in-person",
    dietaryRequirements: "",
    specialRequests: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    // Convert admission number to uppercase
    if (name === "admissionNumber") {
      setFormData((prev) => ({ ...prev, [name]: value.toUpperCase() }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3))
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

  const handleRegister = (e) => {
    e.preventDefault()
    // Handle registration for step 2
    console.log("Registration submitted:", formData)
    // Move to success message (step 3)
    setStep(3)
  }

  return (
    <div className="w-full max-w-6xl bg-white rounded-xl shadow-xl overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Left side - Image and Steps */}
        <div className="w-full md:w-2/5 bg-[#250667] text-white p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-6">College Tech Fest 2025</h1>
            <p className="text-blue-200 mb-12">
              Join fellow students and faculty to shape the future of technology and innovation
            </p>
          </div>

          <div className="space-y-8">
            <StepIndicator
              currentStep={step}
              steps={[
                { number: 1, title: "Personal Information" },
                { number: 2, title: "Academic Details" },
                { number: 3, title: "Registration Complete" },
              ]}
            />

            <div className="mt-auto">
              <div className="h-64 relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-20 rounded-lg"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm text-blue-200">
                    "The tech fest was an amazing learning experience. The workshops and competitions were incredibly valuable."
                  </p>
                  <p className="text-xs mt-2 font-medium">— Rahul Sharma, CSE Department</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-3/5 p-8">
          <form onSubmit={step === 2 ? handleRegister : null} className="h-full flex flex-col">
            {step === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
                  <p className="text-gray-500">Please provide your contact details</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm text-gray-700">First Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="pl-10 p-2 border border-gray-300 rounded w-full"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm text-gray-700">Last Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="pl-10 p-2 border border-gray-300 rounded w-full"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-700">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 p-2 border border-gray-300 rounded w-full"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Academic Details</h2>
                  <p className="text-gray-500">Tell us about your academic background</p>
                </div>

                <div className="space-y-2">
                  <label htmlFor="admissionNumber" className="text-sm text-gray-700">ADMISSION NUMBER</label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      id="admissionNumber"
                      name="admissionNumber"
                      value={formData.admissionNumber}
                      onChange={handleChange}
                      className="pl-10 p-2 border border-gray-300 rounded w-full uppercase"
                      placeholder="e.g. 2022BTCS0001"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="semester" className="text-sm text-gray-700">Semester</label>
                  <div className="relative">
                    <BookOpen className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <select
                      id="semester"
                      name="semester"
                      value={formData.semester}
                      onChange={(e) => handleSelectChange("semester", e.target.value)}
                      className="pl-10 p-2 border border-gray-300 rounded w-full"
                      required
                    >
                      <option value="">Select semester</option>
                      <option value="2nd">2nd Semester</option>
                      <option value="4th">4th Semester</option>
                      <option value="6th">6th Semester</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="department" className="text-sm text-gray-700">Department</label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={(e) => handleSelectChange("department", e.target.value)}
                      className="pl-10 p-2 border border-gray-300 rounded w-full"
                      required
                    >
                      <option value="">Select department</option>
                      <option value="CSE">CSE</option>
                      <option value="BCA">BCA</option>
                      <option value="MCA">MCA</option>
                      <option value="Pharmacy">Pharmacy</option>
                      <option value="MBA">MBA</option>
                      <option value="ECE">ECE</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4 animate-scaleIn">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Registration Complete!</h2>
                <p className="text-gray-500 max-w-md">
                  Thank you for registering for the College Tech Fest 2025. We've sent a confirmation email to{" "}
                  <span className="font-medium">{formData.email}</span> with all the details.
                </p>
                <div className="mt-4 bg-blue-50 p-4 rounded-lg border border-blue-100 text-left w-full max-w-md">
                  <h3 className="font-medium text-blue-800 mb-2">Registration Details:</h3>
                  <p className="text-sm text-blue-700">Name: {formData.firstName} {formData.lastName}</p>
                  <p className="text-sm text-blue-700">Admission Number: {formData.admissionNumber}</p>
                  <p className="text-sm text-blue-700">Department: {formData.department}</p>
                  <p className="text-sm text-blue-700">Semester: {formData.semester}</p>
                </div>
                <button
                  type="button"
                  onClick={() => window.location.reload()}
                  className="mt-6 bg-[#250667] text-white p-2 rounded hover:bg-[#1c044d] transition-colors"
                >
                  Register Another Attendee
                </button>
              </div>
            )}

            {step < 3 && (
              <div className="mt-auto pt-6 flex justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition-colors flex items-center"
                  >
                    Back
                  </button>
                ) : (
                  <div></div>
                )}

                {step === 1 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-[#250667] text-white px-4 py-2 rounded hover:bg-[#1c044d] transition-colors flex items-center"
                  >
                    Continue <ChevronRight className="ml-2 h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-[#250667] text-white px-4 py-2 rounded hover:bg-[#1c044d] transition-colors"
                  >
                    Register
                  </button>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

function StepIndicator({ currentStep, steps }) {
  return (
    <div className="space-y-4">
      {steps.map((step) => (
        <div key={step.number} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 transition-colors ${
              currentStep >= step.number ? "bg-white text-[#250667]" : "bg-[#3a1a8b] text-white"
            }`}
          >
            {currentStep > step.number ? <Check className="h-4 w-4" /> : <span>{step.number}</span>}
          </div>
          <div className="flex flex-col">
            <span className={`text-sm ${currentStep >= step.number ? "text-white" : "text-blue-200"}`}>
              {step.title}
            </span>
            {currentStep === step.number && <span className="text-xs text-blue-200">Current step</span>}
          </div>
        </div>
      ))}
    </div>
  )
}