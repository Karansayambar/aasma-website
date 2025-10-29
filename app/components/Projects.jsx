import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Aasma enclave 10",
      location: "Downtown District",
      type: "Luxury Apartments",
      price: "Starting from $850,000",
      status: "Under Construction",
      completion: "Q4 2024",
      image: "../01.jpg",
      // image:
      //   "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      features: ["Swimming Pool", "Gym", "24/7 Security", "Parking"],
      units: "85 units",
      description:
        "Modern luxury living in the heart of the city with panoramic views and premium amenities.",
    },
    {
      id: 2,
      name: "Aasma enclave 11",
      location: "Waterfront Area",
      type: "Condominiums",
      price: "Starting from $650,000",
      status: "Pre-Launch",
      completion: "Q2 2025",
      image: "../02.png",

      // image:
      //   "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      features: [
        "River View",
        "Private Balconies",
        "Clubhouse",
        "Landscaped Gardens",
      ],
      units: "120 units",
      description:
        "Elegant waterfront living with contemporary design and sustainable features.",
    },
    {
      id: 3,
      name: "Aasma enclave 12",
      location: "Suburban Hills",
      type: "Villas",
      price: "Starting from $1,200,000",
      status: "Ready to Move",
      completion: "Completed",
      image: "../03.jpeg",
      // image:
      //   "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Private Gardens",
        "Smart Home",
        "Community Center",
        "Play Areas",
      ],
      units: "45 villas",
      description:
        "Spacious villas surrounded by nature with modern amenities and privacy.",
    },
    {
      id: 4,
      name: "Aasma enclave 13",
      location: "Suburban Hills",
      type: "Villas",
      price: "Starting from $1,200,000",
      status: "Ready to Move",
      completion: "Completed",
      image: "../04.jpeg",
      // image:
      //   "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Private Gardens",
        "Smart Home",
        "Community Center",
        "Play Areas",
      ],
      units: "45 villas",
      description:
        "Spacious villas surrounded by nature with modern amenities and privacy.",
    },
    {
      id: 5,
      name: "Aasma enclave 15",
      location: "Suburban Hills",
      type: "Villas",
      price: "Starting from $1,200,000",
      status: "Ready to Move",
      completion: "Completed",
      image: "../05.jpeg",
      // image:
      //   "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Private Gardens",
        "Smart Home",
        "Community Center",
        "Play Areas",
      ],
      units: "45 villas",
      description:
        "Spacious villas surrounded by nature with modern amenities and privacy.",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Ready to Move":
        return "bg-green-100 text-green-800";
      case "Under Construction":
        return "bg-blue-100 text-blue-800";
      case "Pre-Launch":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Featured Real Estate Projects
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our premium collection of residential properties designed for
          modern living
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-84 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {project.name}
                  </h3>
                  <span className="text-lg font-semibold text-blue-600">
                    {project.price}
                  </span>
                </div>

                <div className="flex items-center text-gray-600 mb-3">
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
                  <span className="text-sm">{project.location}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Project Specs */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    {project.type}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {project.units}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                  View Project Details
                  <svg
                    className="w-4 h-4 ml-2"
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
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto mt-16 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Schedule a private tour and explore our premium real estate projects
            with our expert consultants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Schedule a Tour
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
