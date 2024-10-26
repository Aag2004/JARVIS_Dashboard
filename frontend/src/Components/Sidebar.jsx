// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Ensure react-router-dom is installed for routing

const Sidebar = () => {
  return (
    <div className="bg-gray-800 min-h-screen w-64 p-4 shadow-lg"> {/* Fixed width for the sidebar */}
      <h2 className="text-white text-2xl font-bold mb-6">Dashboard Menu</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/users" className="text-gray-300 hover:text-white transition-colors duration-200">
            Users
          </Link>
        </li>
        <li>
          <Link to="/sales" className="text-gray-300 hover:text-white transition-colors duration-200">
            Sales
          </Link>
        </li>
        <li>
          <Link to="/settings" className="text-gray-300 hover:text-white transition-colors duration-200">
            Settings
          </Link>
        </li>
        <li>
          <Link to="/support" className="text-gray-300 hover:text-white transition-colors duration-200">
            Support
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
