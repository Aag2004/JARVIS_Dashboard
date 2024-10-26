import React from 'react';

const userData = [
  { id: 1, name: "Alice Johnson", username: "alicej", email: "alice@example.com", ip_address: "192.168.1.1" },
  { id: 2, name: "Bob Smith", username: "bobsmith", email: "bob@example.com", ip_address: "192.168.1.2" },
  { id: 3, name: "Charlie Brown", username: "charlieb", email: "charlie@example.com", ip_address: "192.168.1.3" },
  { id: 4, name: "Dana White", username: "danaw", email: "dana@example.com", ip_address: "192.168.1.4" },
  { id: 5, name: "Evan Lee", username: "evanlee", email: "evan@example.com", ip_address: "192.168.1.5" },
];

const UserTable = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="text-left px-6 py-4 font-medium text-gray-700">Name</th>
              <th className="text-left px-6 py-4 font-medium text-gray-700">Username</th>
              <th className="text-left px-6 py-4 font-medium text-gray-700">Email</th>
              <th className="text-center px-6 py-4 font-medium text-gray-700">IP Address</th>
              <th className="text-center px-6 py-4 font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={user.id} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <td className="px-6 py-4 text-gray-800">{user.name}</td>
                <td className="px-6 py-4 text-gray-600">{user.username}</td>
                <td className="px-6 py-4 text-gray-600">{user.email}</td>
                <td className="px-6 py-4 text-center text-gray-600">{user.ip_address}</td>
                <td className="px-6 py-4 text-center">
                  <button className='bg-emerald-700 p-2 rounded-lg hover:bg-emerald-400'>Block</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
