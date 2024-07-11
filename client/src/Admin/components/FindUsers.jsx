import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const FindUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, username: "JohnDoe", userId: "001", email: "john@example.com", age: 30, profileImage: "path-to-image1.jpg", mobileNumber: "123-456-7890", baptism: "Yes", address: "15/d1 balaji nagar extension street bharathipuram coimbarore 641103" },
    { id: 2, username: "JaneDoe", userId: "002", email: "jane@example.com", age: 25, profileImage: "path-to-image2.jpg", mobileNumber: "987-654-3210", baptism: "No", address: "456 Elm St, Some City, Some Country, 12345" }
    // Add more user objects as needed
  ]);
  const [search, setSearch] = useState("");

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <input
          type="text"
          placeholder="Search by username"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-200 border-l">S.No</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 border-l">Username</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 border-l">User ID</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 border-l">Email</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 border-l">Age</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 border-l">Profile Image</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 border-l">Mobile Number</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 border-l">Baptism</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 border-l">Address</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 border-l">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user.id}>
                <td className="py-2 px-4 border-b border-gray-200 border-l">{index + 1}</td>
                <td className="py-2 px-4 border-b border-gray-200 border-l whitespace-normal break-words">{user.username}</td>
                <td className="py-2 px-4 border-b border-gray-200 border-l whitespace-normal break-words">{user.userId}</td>
                <td className="py-2 px-4 border-b border-gray-200 border-l whitespace-normal break-words">{user.email}</td>
                <td className="py-2 px-4 border-b border-gray-200 border-l whitespace-normal break-words">{user.age}</td>
                <td className="py-2 px-4 border-b border-gray-200 border-l whitespace-normal break-words">
                  <img src={user.profileImage} alt="Profile" className="w-10 h-10 rounded-full" />
                </td>
                <td className="py-2 px-4 border-b border-gray-200 border-l whitespace-normal break-words">{user.mobileNumber}</td>
                <td className="py-2 px-4 border-b border-gray-200 border-l whitespace-normal break-words">{user.baptism}</td>
                <td className="py-2 px-4 border-b border-gray-200 border-l whitespace-normal break-words">{user.address}</td>
                <td className="py-2 px-4 border-b border-gray-200 border-l whitespace-normal break-words">
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

export default FindUsers;
