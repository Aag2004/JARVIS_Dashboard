// Dashboard.js
import React from 'react';
import Cards from './../Components/Card';
import LineChart from './../Components/LineChart';

const Dashboard = () => {
  return (
    <div className="flex-1 mr-auto border-r border-gray-700 min-h-screen bg-gray-800 p-4 md:p-6 lg:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Cards will fill 2 columns on medium screens and 3 on large screens */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-">
          <Cards title="Active Users" value="1,024" change="+12%" />
          <Cards title="Total Sales" value="$5,678" change="-5%" />
          <Cards title="New Signups" value="150" change="+20%" />
          <Cards title="Pending Orders" value="30" change="-10%" />
        </div>
        {/* LineChart will occupy 1 column on medium and 1 column on large screens */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
