import React, { useEffect, useState } from "react";
import Unauthorized from "../images/UNAUTHORIZED.jpeg";
import { FaTrashAlt } from "react-icons/fa";
import churchlogo from "../images/church logo.png";
import ChurchMembers from "../Admin/components/ChurchMembers";
import Dashboard from "../Admin/components/Dashboard";
import FamilyDetails from "../Admin/components/FamilyDetails";
import FindUsers from "../Admin/components/FindUsers";
import LoginUsers from "../Admin/components/LoginUsers";
import Sidebar from "../Admin/components/Sidebar";
import Header from "../Admin/components/Header";
import { Route, Router, Routes, Link } from "react-router-dom";

function Admin() {
  const AdminVerification = localStorage.getItem("BETHEL_ICRM_TOKEN")
    ? JSON.parse(atob(localStorage.getItem("BETHEL_ICRM_TOKEN").split(".")[1]))
    : null;
  const [adminAccountDetail, setAdminAccountDetail] = useState({});
  const [allLoginUsers, setAllLoginUsers] = useState([]);
  const [churchMembers, setChurchMembers] = useState([]);
  const [baptism, setBaptism] = useState([]);
  const [nonBaptism, setNonBaptism] = useState([]);

  const [selected, setSelected] = useState("loginUser");

  // login users
  const [User, setUser] = useState([
    {
      id: 1,
      username: "JohnDoe",
      userId: "001",
      email: "john@example.com",
      profileImage: "path-to-image1.jpg",
      createdAt: "2023-01-01",
    },
    {
      id: 2,
      username: "JaneDoe",
      userId: "002",
      email: "jane@example.com",
      profileImage: "path-to-image2.jpg",
      createdAt: "2023-02-01",
    },
  ]);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // church members
  const [members, setMembers] = useState([
    {
      id: 1,
      username: "JohnDoe",
      userId: "0012345678902",
      email: "john@example.com",
      age: 30,
      profileImage: "path-to-image1.jpg",
      mobileNumber: "123-456-7890",
      baptism: "Yes",
      address:
        "15/d1 balaji nagar extension street bharathipuram coimbarore 641103",
    },
    {
      id: 2,
      username: "JaneDoe",
      userId: "002",
      email: "jane@example.com",
      age: 25,
      profileImage: "path-to-image2.jpg",
      mobileNumber: "987-654-3210",
      baptism: "No",
      address: "456 Elm St, Some City, Some Country, 12345",
    },
    {
      id: 3,
      username: "JaneDoe",
      userId: "002",
      email: "jane@example.com",
      age: 25,
      profileImage: "path-to-image2.jpg",
      mobileNumber: "987-654-3210",
      baptism: "No",
      address: "456 Elm St, Some City, Some Country, 12345",
    },
    // Add more member objects as needed
  ]);

  const handleDeletes = (id) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  // find user
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "JohnDoe",
      userId: "001",
      email: "john@example.com",
      age: 30,
      profileImage: "path-to-image1.jpg",
      mobileNumber: "123-456-7890",
      baptism: "Yes",
      address:
        "15/d1 balaji nagar extension street bharathipuram coimbarore 641103",
    },
    {
      id: 2,
      username: "JaneDoe",
      userId: "002",
      email: "jane@example.com",
      age: 25,
      profileImage: "path-to-image2.jpg",
      mobileNumber: "987-654-3210",
      baptism: "No",
      address: "456 Elm St, Some City, Some Country, 12345",
    },
    // Add more user objects as needed
  ]);
  const [search, setSearch] = useState("");

  const handleDeleted = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );
  const [findUserUI, setFindUserUI] = useState({});
  async function finduserengine() {
    try {
      const requst = await fetch(`http://localhost:3000/FormRoutes/FindUser`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Find: search }),
      });
      const response = await requst.json();
      if (response.success) {
        console.log(response.user);
        setFindUserUI(response.user);
      }
    } catch (error) {
      alert("error", error);
      console.error(error);
    }
  }

  useEffect(() => {
    async function AdminAccount() {
      try {
        if (AdminVerification === null) return;
        const request = await fetch(
          `https://bethelicrm.hostinger.com
/ViewSingleAccount/${String(AdminVerification?.USERID)}`,
          { method: "GET" }
        );
        const response = await request.json();
        if (response.success) {
          console.log(response.account);
          setAdminAccountDetail(response.account);
        } else {
          alert(response.message);
        }
      } catch (error) {
        alert("error");
        console.log(error.message);
      }
    }
    AdminAccount();

    async function AllLogins() {
      try {
        if (AdminVerification === null) return;
        const request = await fetch(
          `https://bethelicrm.hostinger.com
/ViewAllAccount`,
          {
            method: "GET",
          }
        );
        const response = await request.json();
        if (response.success) {
          setAllLoginUsers(response.accounts);
          console.log(response.accounts);
        } else {
          alert(response.message);
        }
      } catch (error) {
        alert("error");
        console.log(error.message);
      }
    }

    async function ChurchMembersAPI() {
      try {
        if (AdminVerification === null) return;
        const request = await fetch(
          `http://localhost:3000/FormRoutes/ReadAllFamilyMembers`,
          {
            method: "GET",
          }
        );
        const response = await request.json();
        if (response.success) {
          setChurchMembers(response.allMembers);
          console.log("chruch members", response.allMembers);
        } else {
          alert(response.message);
        }
      } catch (error) {
        alert("error");
        console.log(error.message);
      }
    }

    async function BaptismAPI() {
      try {
        if (AdminVerification === null) return;
        const request = await fetch(
          `http://localhost:3000/FormRoutes/BaptismMembers`,
          {
            method: "GET",
          }
        );
        const response = await request.json();
        if (response.success) {
          setBaptism(response.members);
        } else {
          alert(response.message);
        }
      } catch (error) {
        alert("error");
        console.log(error.message);
      }
    }

    async function NonBaptismAPI() {
      try {
        if (AdminVerification === null) return;
        const request = await fetch(
          `http://localhost:3000/FormRoutes/NonBaptismMembers`,
          {
            method: "GET",
          }
        );
        const response = await request.json();
        if (response.success) {
          setNonBaptism(response.members);
          console.log(response.members);
        } else {
          alert(response.message);
        }
      } catch (error) {
        alert("error");
        console.log(error.message);
      }
    }

    AllLogins();
    ChurchMembersAPI();
    BaptismAPI();
    NonBaptismAPI();
  }, []);
  return (
    <div>
      <div className="">
        <div className="text-center text-[2rem] font-[700]">
          Admin Dashboard
        </div>
        {String(adminAccountDetail?.Email) ==
        "bethelicrmcoimbatore@gmail.com" ? (
          <div className="">
            <div className="min-h-screen flex">
              {/* Sidebar */}
              <div className="w-64 bg-gray-800 text-white flex flex-col fixed h-full">
                <div className="p-2 text-center font-bold text-xl border-b border-gray-700">
                  <img src={churchlogo} alt="" className="w-20 h-20" />
                </div>
                <nav className="flex-1 p-4 space-y-4">
                  <button
                    className={`block w-full text-left px-4 py-2 rounded ${
                      selected === "loginUser" ? "bg-gray-700" : ""
                    }`}
                    onClick={() => setSelected("loginUser")}
                  >
                    Login users
                  </button>
                  <button
                    className={`block w-full text-left px-4 py-2 rounded ${
                      selected === "churchMembers" ? "bg-gray-700" : ""
                    }`}
                    onClick={() => setSelected("churchMembers")}
                  >
                    Church Members
                  </button>
                  <button
                    className={`block w-full text-left px-4 py-2 rounded ${
                      selected === "FindUser" ? "bg-gray-700" : ""
                    }`}
                    onClick={() => setSelected("FindUser")}
                  >
                    Find User
                  </button>
                </nav>
              </div>

              {/* Content */}
              <div className="flex-1 ml-64 p-8">
                {selected === "loginUser" && (
                  <div>
                    <div className="p-4">
                      <h2 className="text-xl font-bold mb-4 text-center">
                        TOTAL NO OF LOGINS
                      </h2>
                      <div className="flex justify-end mb-4">
                        <div className="bg-gray-100 p-2 rounded">
                          <div className="flex items-center">
                            <div className="mr-2 text-lg font-bold text-red-600">
                              Total No of Logins:
                            </div>
                            <div className="text-lg font-bold">
                              {allLoginUsers?.length}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                          <thead>
                            <tr className="divide-x divide-gray-200">
                              <th className="py-2 px-4 border-b-2 border-gray-200">
                                S.No
                              </th>
                              <th className="py-2 px-4 border-b-2 border-gray-200">
                                Username
                              </th>
                              <th className="py-2 px-4 border-b-2 border-gray-200">
                                User ID
                              </th>
                              <th className="py-2 px-4 border-b-2 border-gray-200">
                                Email
                              </th>
                              <th className="py-2 px-4 border-b-2 border-gray-200">
                                Profile Image
                              </th>
                              <th className="py-2 px-4 border-b-2 border-gray-200">
                                Created At
                              </th>
                              <th className="py-2 px-4 border-b-2 border-gray-200">
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {allLoginUsers?.map((user, index) => (
                              <tr
                                key={user._id}
                                className="divide-x divide-gray-200"
                              >
                                <td className="py-2 px-4">{index + 1}</td>
                                <td className="py-2 px-4">{user.UserName}</td>
                                <td className="py-2 px-4">{user._id}</td>
                                <td className="py-2 px-4">{user.Email}</td>
                                <td className="py-2 px-4">
                                  <img
                                    src={user.ProfilePicture}
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full"
                                  />
                                </td>
                                <td className="py-2 px-4">{user.createdAt}</td>
                                <td className="py-2 px-4">
                                  <button
                                    onClick={() => handleDelete(user._id)}
                                    className="text-red-600 hover:text-red-800"
                                  >
                                    <FaTrashAlt />
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
                {/* church members table */}
                {selected === "churchMembers" && (
                  <div>
                    <div className="p-4">
                      <h1 className="text-2xl font-bold mb-4 text-center">
                        CHURCH MEMBERS
                      </h1>
                      <div className="flex justify-end mb-5">
                        <div className="bg-gray-100 p-2 rounded border border-gray-300">
                          <div className="flex">
                            <div className="mr-2 text-lg font-bold text-red-600">
                              Total No of Church Members:
                            </div>
                            <div className="text-lg font-bold">
                              {churchMembers.length}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                          <thead>
                            <tr className="divide-x divide-gray-200">
                              <th className="py-2 px-4 border-b-2 border-gray-200">
                                S.No
                              </th>
                              <th className="py-2 px-4 border-b-2 border-gray-200">
                                Username
                              </th>
                              <th className="py-2 px-4 border-b-2 border-gray-200">
                                User ID
                              </th>
                              <th className="py-2 px-4 border-b-2 border-gray-200">
                                Email
                              </th>
                              {/* <th className="py-2 px-4 border-b-2 border-gray-200">Age</th> */}
                              <th className="py-2 px-4 border-b-2 border-gray-200">
                                Profile Image
                              </th>
                              <th className="py-2 px-4 border-b-2 border-gray-200">
                                Mobile Number
                              </th>
                              <th className="py-2 px-4 border-b-2 border-gray-200">
                                Baptism
                              </th>
                              <th className="py-2 px-4 border-b-2 border-gray-200">
                                Address
                              </th>
                              <th className="py-2 px-4 border-b-2 border-gray-200">
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {churchMembers?.map((member, index) => (
                              <tr
                                key={member.id}
                                className="divide-x divide-gray-200"
                              >
                                <td className="py-2 px-4 whitespace-normal break-words">
                                  {index + 1}
                                </td>
                                <td className="py-2 px-4 whitespace-normal break-words">
                                  {member?.UserName}
                                </td>
                                <td className="py-2 px-4 whitespace-normal break-words">
                                  {member?._id}
                                </td>
                                <td className="py-2 px-4 whitespace-normal break-words">
                                  {member?.Email}
                                </td>
                                {/* <td className="py-2 px-4 whitespace-normal break-words">{member?.DateOfBirth.split("-")[2]}</td> */}
                                <td className="py-2 px-4 whitespace-normal break-words">
                                  <img
                                    src={member.ProfilePicture}
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full"
                                  />
                                </td>
                                <td className="py-2 px-4 whitespace-normal break-words">
                                  {member?.Mobile}
                                </td>
                                <td className="py-2 px-4 whitespace-normal break-words">
                                  {String(member?.Baptism)}
                                </td>
                                <td className="py-2 px-4 whitespace-normal break-words">
                                  {member?.Address}
                                </td>
                                <td className="py-2 px-4 whitespace-normal break-words">
                                  <button
                                    onClick={() => handleDeletes(member?._id)}
                                    className="text-red-600 hover:text-red-800"
                                  >
                                    <FaTrashAlt />
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
                {/* find user */}
                {selected === "FindUser" && (
                  <div>
                    {" "}
                    <div className="p-4">
                      <div className="flex justify-end mb-4">
                        <input
                          type="text"
                          placeholder="Search by username"
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          className="px-4 py-2 border rounded"
                        />
                        <button onClick={() => finduserengine()}>
                          Find User
                        </button>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                          <thead>
                            <tr>
                              {/* <th className="py-2 px-4 border-b-2 border-gray-200 border-l">S.No</th> */}
                              <th className="py-2 px-4 border-b-2 border-gray-200 border-l">
                                Username
                              </th>
                              <th className="py-2 px-4 border-b-2 border-gray-200 border-l">
                                User ID
                              </th>
                              <th className="py-2 px-4 border-b-2 border-gray-200 border-l">
                                Email
                              </th>
                              {/* <th className="py-2 px-4 border-b-2 border-gray-200 border-l">Age</th> */}
                              <th className="py-2 px-4 border-b-2 border-gray-200 border-l">
                                Profile Image
                              </th>
                              <th className="py-2 px-4 border-b-2 border-gray-200 border-l">
                                Mobile Number
                              </th>
                              <th className="py-2 px-4 border-b-2 border-gray-200 border-l">
                                Baptism
                              </th>
                              <th className="py-2 px-4 border-b-2 border-gray-200 border-l">
                                Address
                              </th>
                              <th className="py-2 px-4 border-b-2 border-gray-200 border-l">
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr key={findUserUI._id}>
                              <td className="py-2 px-4 border-b border-gray-200 border-l whitespace-normal break-words">
                                {findUserUI?.UserName}
                              </td>
                              <td className="py-2 px-4 border-b border-gray-200 border-l whitespace-normal break-words">
                                {findUserUI?._id}
                              </td>
                              <td className="py-2 px-4 border-b border-gray-200 border-l whitespace-normal break-words">
                                {findUserUI?.Email}
                              </td>
                              {/* <td className="py-2 px-4 border-b border-gray-200 border-l whitespace-normal break-words">{user.age}</td> */}
                              <td className="py-2 px-4 border-b border-gray-200 border-l whitespace-normal break-words">
                                <img
                                  src={findUserUI?.ProfilePicture}
                                  alt="Profile"
                                  className="w-10 h-10 rounded-full"
                                />
                              </td>
                              <td className="py-2 px-4 border-b border-gray-200 border-l whitespace-normal break-words">
                                {findUserUI?.Mobile}
                              </td>
                              <td className="py-2 px-4 border-b border-gray-200 border-l whitespace-normal break-words">
                                {String(findUserUI?.Baptism)}
                              </td>
                              <td className="py-2 px-4 border-b border-gray-200 border-l whitespace-normal break-words">
                                {findUserUI?.Address}
                              </td>
                              <td className="py-2 px-4 border-b border-gray-200 border-l whitespace-normal break-words">
                                <button
                                  onClick={() => handleDeleted(findUserUI?.id)}
                                  className="text-red-600 hover:text-red-800"
                                >
                                  <FaTrashAlt />
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
                {/* {selected === "contact" && <div>Contact Content</div>} */}
              </div>
            </div>
          </div>
        ) : (
          <img
            src={Unauthorized}
            alt=""
            className="mx-auto w-[500px] max-w-full mb-5"
          />
        )}
      </div>
    </div>
  );
}

export default Admin;
