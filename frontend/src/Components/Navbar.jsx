import React from "react";

const Navbar = () => {
  return (
    <div className="w-screen">
      <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-cyan-500 rounded-full w-8 h-8 flex justify-center items-center text-white text-lg font-bold">
            DT
          </div>
          <span className="font-semibold text-lg">Admin Panel</span>
        </div>

        {/* Search Bar */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-800 text-gray-300 p-2 rounded-lg outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <a href="#home" className="hover:text-cyan-500">
            Home
          </a>
          <a href="#reports" className="hover:text-cyan-500">
            Reports
          </a>
          <a href="#analytics" className="hover:text-cyan-500">
            Analytics
          </a>
          <a href="#settings" className="hover:text-cyan-500">
            Settings
          </a>
        </div>

        {/* Profile and Notifications */}
        <div className="flex items-center space-x-4">
          <button className="relative focus:outline-none">
            <span className="bg-red-600 h-2 w-2 rounded-full absolute top-0 right-0"></span>
            <svg
              className="w-6 h-6 text-gray-300 hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405a2.032 2.032 0 00-.592-.408l-.073-.036a2.006 2.006 0 01-.805-.444L15 11"
              />
            </svg>
          </button>
          <div className="flex items-center space-x-2">
            <img
              src="https://via.placeholder.com/32"
              alt="User"
              className="rounded-full w-8 h-8"
            />
            <span className="text-sm font-medium">User</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
