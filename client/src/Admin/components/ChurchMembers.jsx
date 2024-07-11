import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const ChurchMembers = () => {
  const [members, setMembers] = useState([
    { id: 1, username: "JohnDoe", userId: "0012345678902", email: "john@example.com", age: 30, profileImage: "path-to-image1.jpg", mobileNumber: "123-456-7890", baptism: "Yes", address: "15/d1 balaji nagar extension street bharathipuram coimbarore 641103" },
    { id: 2, username: "JaneDoe", userId: "002", email: "jane@example.com", age: 25, profileImage: "path-to-image2.jpg", mobileNumber: "987-654-3210", baptism: "No", address: "456 Elm St, Some City, Some Country, 12345" },
    { id: 3, username: "JaneDoe", userId: "002", email: "jane@example.com", age: 25, profileImage: "path-to-image2.jpg", mobileNumber: "987-654-3210", baptism: "No", address: "456 Elm St, Some City, Some Country, 12345" },
    // Add more member objects as needed
  ]);

  const handleDelete = (id) => {
    setMembers(members.filter(member => member.id !== id));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">CHURCH MEMBERS</h1>
      <div className="flex justify-end mb-5">
        <div className="bg-gray-100 p-2 rounded border border-gray-300">
          <div className="flex">
            <div className="mr-2 text-lg font-bold text-red-600">Total No of Church Members:</div>
            <div className="text-lg font-bold">{members.length}</div>
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
              <th className="py-2 px-4 border-b-2 border-gray-200">Age</th>
              <th className="py-2 px-4 border-b-2 border-gray-200">Profile Image</th>
              <th className="py-2 px-4 border-b-2 border-gray-200">Mobile Number</th>
              <th className="py-2 px-4 border-b-2 border-gray-200">Baptism</th>
              <th className="py-2 px-4 border-b-2 border-gray-200">Address</th>
              <th className="py-2 px-4 border-b-2 border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {members.map((member, index) => (
              <tr key={member.id} className="divide-x divide-gray-200">
                <td className="py-2 px-4 whitespace-normal break-words">{index + 1}</td>
                <td className="py-2 px-4 whitespace-normal break-words">{member.username}</td>
                <td className="py-2 px-4 whitespace-normal break-words">{member.userId}</td>
                <td className="py-2 px-4 whitespace-normal break-words">{member.email}</td>
                <td className="py-2 px-4 whitespace-normal break-words">{member.age}</td>
                <td className="py-2 px-4 whitespace-normal break-words">
                  <img src={member.profileImage} alt="Profile" className="w-10 h-10 rounded-full" />
                </td>
                <td className="py-2 px-4 whitespace-normal break-words">{member.mobileNumber}</td>
                <td className="py-2 px-4 whitespace-normal break-words">{member.baptism}</td>
                <td className="py-2 px-4 whitespace-normal break-words">{member.address}</td>
                <td className="py-2 px-4 whitespace-normal break-words">
                  <button onClick={() => handleDelete(member.id)} className="text-red-600 hover:text-red-800">
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

export default ChurchMembers;
