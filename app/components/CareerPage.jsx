"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const CareerPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    location: "",
    skills: "",
    experience: "",
    education: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume")
      setFormData((prev) => ({ ...prev, resume: files[0] }));
    else setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.contactNumber.trim())
      newErrors.contactNumber = "Contact number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.skills.trim()) newErrors.skills = "Skills are required";
    if (!formData.experience.trim())
      newErrors.experience = "Experience is required";
    if (!formData.education.trim())
      newErrors.education = "Education is required";
    if (!formData.resume) newErrors.resume = "Resume is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      alert("Application submitted successfully!");
      setFormData({
        name: "",
        contactNumber: "",
        email: "",
        location: "",
        skills: "",
        experience: "",
        education: "",
        resume: null,
      });
    }
  };

  const benefits = [
    {
      icon: "🏢",
      title: "Professional Environment",
      description: "Work with experts in construction & design",
    },
    {
      icon: "🚀",
      title: "Growth Opportunities",
      description: "Upskill and grow in your career path",
    },
    {
      icon: "🤝",
      title: "Team Collaboration",
      description: "Supportive and friendly work culture",
    },
    {
      icon: "💡",
      title: "Innovation Focus",
      description: "Opportunities to implement creative ideas",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-6 lg:px-20">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-gray-900"
        >
          Join Our <span className="text-yellow-500">Team</span>
        </motion.h1>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg"
        >
          Build your career with AAsma Constructions. We're looking for talented
          individuals passionate about shaping the future.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Benefits */}
        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-2xl p-8 flex items-start gap-6 hover:shadow-yellow-500/40 hover:scale-105 transition-transform"
            >
              <div className="text-4xl">{benefit.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mt-1">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-200"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <InputField
                label="Full Name *"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />
              <InputField
                label="Contact Number *"
                name="contactNumber"
                placeholder="+91 9552366499"
                value={formData.contactNumber}
                onChange={handleChange}
                error={errors.contactNumber}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <InputField
                label="Email *"
                name="email"
                type="email"
                placeholder="example@mail.com"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
              <InputField
                label="Location *"
                name="location"
                placeholder="City, State"
                value={formData.location}
                onChange={handleChange}
                error={errors.location}
              />
            </div>
            <TextAreaField
              label="Skills & Expertise *"
              name="skills"
              placeholder="Your skills..."
              value={formData.skills}
              onChange={handleChange}
              error={errors.skills}
            />
            <TextAreaField
              label="Professional Experience *"
              name="experience"
              placeholder="Your experience..."
              value={formData.experience}
              onChange={handleChange}
              error={errors.experience}
            />
            <TextAreaField
              label="Education & Qualifications *"
              name="education"
              placeholder="Your education..."
              value={formData.education}
              onChange={handleChange}
              error={errors.education}
            />

            {/* Resume Upload */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer hover:border-yellow-500 transition-colors"
            >
              <input
                type="file"
                name="resume"
                id="resume-upload"
                onChange={handleChange}
                accept=".pdf,.doc,.docx"
                className="hidden"
              />
              <label htmlFor="resume-upload">
                <div className="flex flex-col items-center">
                  <svg
                    className="h-12 w-12 text-gray-400 mb-2"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-gray-900 font-semibold">
                    Upload your resume
                  </p>
                  <p className="text-gray-500 text-sm">
                    PDF, DOC, DOCX up to 10MB
                  </p>
                  {formData.resume && (
                    <p className="text-green-600 mt-2">
                      {formData.resume.name}
                    </p>
                  )}
                  {errors.resume && (
                    <p className="text-red-500 mt-1 text-sm">{errors.resume}</p>
                  )}
                </div>
              </label>
            </motion.div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 rounded-xl text-lg shadow-lg transition-all"
            >
              Submit Application
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default CareerPage;

// ----------------------
// Reusable Input
const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

// ----------------------
// Reusable TextArea
const TextAreaField = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  error,
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={3}
      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);
