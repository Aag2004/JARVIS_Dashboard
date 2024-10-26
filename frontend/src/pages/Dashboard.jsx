// Dashboard.js
import React from 'react';
import Cards from './../Components/Card';
import LineChart from './../Components/LineChart';

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-center mr-auto border-gray-700 min-h-screen bg-gray-800 p-4 md:p-6 lg:p-8">
      <div className="grid md:flex md:gap-6 mb-8">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 p-5">
          <div className='m-2'>
            <Cards title="Suspicious Users" value="1,024" change="🕵" />
          </div>
          <div className='m-2'>
            <Cards title="Total Flagged Posts" value="451" change="🚩" />
          </div>
          <div className='m-2'>
            <Cards title="Total Flagged Messages" value="2500" change="✉️" />
          </div>
          <div className='m-2'>
            <Cards title="Action Taken" value="30" change="✅" />
          </div>
        </div>
        <div className="m-2 flex-1 mt-6 w-full md:w-1/3 lg:w-1/4">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
