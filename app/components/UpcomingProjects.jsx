"use client";
import React, { useState } from "react";

const UpcomingProjects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const upcomingProjects = [
    {
      id: 1,
      name: "Oceanview Residences",
      location: "Coastal Bay Area",
      type: "Luxury Condos",
      price: "Starting from $1,200,000",
      launchDate: "March 2024",
      completion: "Q3 2026",
      status: "Pre-Launch",
      image:
        "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      features: ["Ocean Views", "Infinity Pool", "Private Beach", "Spa"],
      units: "60 units",
      description:
        "Exclusive waterfront living with panoramic ocean views and premium amenities.",
      category: "luxury",
    },
    {
      id: 2,
      name: "Tech Park Towers",
      location: "Innovation District",
      type: "Smart Apartments",
      price: "Starting from $750,000",
      launchDate: "June 2024",
      completion: "Q1 2026",
      status: "Coming Soon",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      features: ["Smart Home", "Co-working", "EV Charging", "Fiber Optic"],
      units: "150 units",
      description:
        "Tech-integrated living spaces designed for modern professionals and innovators.",
      category: "commercial",
    },
    {
      id: 3,
      name: "Green Haven Community",
      location: "Eco Valley",
      type: "Sustainable Homes",
      price: "Starting from $550,000",
      launchDate: "August 2024",
      completion: "Q4 2026",
      status: "Early Bird",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Solar Power",
        "Rainwater Harvesting",
        "Organic Garden",
        "EV Ready",
      ],
      units: "90 homes",
      description:
        "Eco-friendly community focused on sustainability and green living.",
      category: "sustainable",
    },
    {
      id: 4,
      name: "Metropolitan Heights",
      location: "City Center",
      type: "Penthouse Suites",
      price: "Starting from $2,500,000",
      launchDate: "January 2024",
      completion: "Q2 2026",
      status: "VIP Preview",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Private Elevator",
        "Roof Garden",
        "Concierge",
        "Panoramic Views",
      ],
      units: "25 penthouses",
      description:
        "Ultra-luxury penthouses with bespoke finishes and unparalleled city views.",
      category: "luxury",
    },
    {
      id: 5,
      name: "Urban Lofts District",
      location: "Arts Quarter",
      type: "Industrial Lofts",
      price: "Starting from $650,000",
      launchDate: "October 2024",
      completion: "Q3 2026",
      status: "Pre-Registration",
      image:
        "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      features: [
        "High Ceilings",
        "Exposed Brick",
        "Art Studios",
        "Gallery Space",
      ],
      units: "75 lofts",
      description:
        "Converted industrial spaces with artistic flair in the cultural heart of the city.",
      category: "commercial",
    },
    {
      id: 6,
      name: "Serenity Gardens",
      location: "Lakeside Community",
      type: "Wellness Residences",
      price: "Starting from $950,000",
      launchDate: "November 2024",
      completion: "Q1 2027",
      status: "Early Access",
      image:
        "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Meditation Center",
        "Yoga Studio",
        "Organic Cafe",
        "Wellness Spa",
      ],
      units: "50 units",
      description:
        "Holistic living environment designed for wellness and tranquility.",
      category: "sustainable",
    },
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "luxury", label: "Luxury" },
    { key: "commercial", label: "Commercial" },
    { key: "sustainable", label: "Sustainable" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Pre-Launch":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Coming Soon":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Early Bird":
        return "bg-green-100 text-green-800 border-green-200";
      case "VIP Preview":
        return "bg-red-100 text-red-800 border-red-200";
      case "Pre-Registration":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Early Access":
        return "bg-indigo-100 text-indigo-800 border-indigo-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Pre-Launch":
        return "🚀";
      case "Coming Soon":
        return "📅";
      case "Early Bird":
        return "🐦";
      case "VIP Preview":
        return "⭐";
      case "Pre-Registration":
        return "📝";
      case "Early Access":
        return "🔑";
      default:
        return "🏗️";
    }
  };

  const filteredProjects =
    activeFilter === "all"
      ? upcomingProjects
      : upcomingProjects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Upcoming Developments
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Future <span className="text-blue-600">Living Spaces</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our pipeline of exceptional properties coming soon. Be the
            first to explore these innovative developments.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.key
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Project Image with Status Badge */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold border ${getStatusColor(
                      project.status
                    )}`}
                  >
                    <span className="mr-1.5">
                      {getStatusIcon(project.status)}
                    </span>
                    {project.status}
                  </span>
                </div>

                {/* Launch Date */}
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium">Launching</div>
                  <div className="text-lg font-bold">{project.launchDate}</div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {project.name}
                    </h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {project.location}
                    </div>
                  </div>
                  <span className="text-lg font-bold text-blue-600">
                    {project.price}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Project Specs */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {project.type}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Complete: {project.completion}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    Premium Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg border border-blue-100"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center group">
                    Get Early Access
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                  <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Be Among the First to Know
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Join our priority list to receive exclusive updates, early
              pricing, and VIP access to our upcoming projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap">
                Join Priority List
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              No spam, unsubscribe at any time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingProjects;
