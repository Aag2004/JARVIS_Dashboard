// Dashboard.js
import React from 'react';
import Cards from './../Components/Card';
import LineChart from './../Components/LineChart';

const Dashboard = () => {
  return (
    <div className="flex-1 mr-auto border-r border-gray-700 min-h-screen bg-gray-800 p-4 md:p-6 lg:p-8">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"> */}
      <div className="grid md:flex md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div>
          <div className="fixed left-0 top-0 flex flex-col w-64 h-screen bg-gray-600 text-white shadow-lg">
            <div className="flex items-center justify-center h-16 bg-gray-700">
              <h1 className="text-xl font-bold">Admin Panel</h1>
            </div>
            <nav className="flex-1 p-4">
              <ul className="space-y-4">
                <li>
                  <a href="#dashboard" className="block px-4 py-2 hover:bg-gray-700 rounded transition">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#profile" className="block px-4 py-2 hover:bg-gray-700 rounded transition">
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#settings" className="block px-4 py-2 hover:bg-gray-700 rounded transition">
                    Settings
                  </a>
                </li>
                <li>
                  <a href="#help" className="block px-4 py-2 hover:bg-gray-700 rounded transition">
                    Help
                  </a>
                </li>
              </ul>
            </nav>
            <div className="p-4">
              <button className="w-full bg-blue-800 hover:bg-blue-500 text-white font-bold py-2 rounded transition">
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 p-5 ml-60">
          <div className='m-2'>
          <Cards title="Active Users" value="1,024" change="+12%" />
          </div>
          <div className='m-2'>
          <Cards title="Total Sales" value="$5,678" change="-5%" />
          </div>
          <div className='m-2'>
          <Cards title="New Signups" value="150" change="+20%" />
          </div>
          <div className='m-2'>
          <Cards title="Pending Orders" value="30" change="-10%" />
          </div>
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-1 mt-6 w-1/3">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
