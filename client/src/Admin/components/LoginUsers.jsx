import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const LoginUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, username: "JohnDoe", userId: "001", email: "john@example.com", profileImage: "path-to-image1.jpg", createdAt: "2023-01-01" },
    { id: 2, username: "JaneDoe", userId: "002", email: "jane@example.com", profileImage: "path-to-image2.jpg", createdAt: "2023-02-01" }
    // Add more user objects as needed
  ]);

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center">TOTAL NO OF LOGINS</h2>
      <div className="flex justify-end mb-4">
        <div className="bg-gray-100 p-2 rounded">
          <div className="flex items-center">
            <div className="mr-2 text-lg font-bold text-red-600">Total No of Logins:</div>
            <div className="text-lg font-bold">{users.length}</div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="divide-x divide-gray-200">
              <th className="py-2 px-4 border-b-2 border-gray-200">S.No</th>
              <th className="py-2 px-4 border-b-2 border-gray-200">Username</th>
              <th className="py-2 px-4 border-b-2 border-gray-200">User ID</th>
              <th className="py-2 px-4 border-b-2 border-gray-200">Email</th>
              <th className="py-2 px-4 border-b-2 border-gray-200">Profile Image</th>
              <th className="py-2 px-4 border-b-2 border-gray-200">Created At</th>
              <th className="py-2 px-4 border-b-2 border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user, index) => (
              <tr key={user.id} className="divide-x divide-gray-200">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{user.username}</td>
                <td className="py-2 px-4">{user.userId}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">
                  <img src={user.profileImage} alt="Profile" className="w-10 h-10 rounded-full" />
                </td>
                <td className="py-2 px-4">{user.createdAt}</td>
                <td className="py-2 px-4">
                  <button onClick={() => handleDelete(user.id)} className="text-red-600 hover:text-red-800">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoginUsers;
