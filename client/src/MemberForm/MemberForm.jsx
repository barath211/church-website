import React, { useState } from "react";
import FILEBASE from "react-file-base64";
import { useNavigate } from "react-router-dom";
import Login from "../Login/Login";

function MemberForm() {
  const navigate = useNavigate();
  const { USERID } = localStorage.getItem("BETHEL_ICRM_TOKEN")
    ? JSON.parse(atob(localStorage.getItem("BETHEL_ICRM_TOKEN").split(".")[1]))
    : null;
  console.log(USERID);
  const [formInputs, setFormInputs] = useState({
    UserName: "",
    DateOfBirth: "",
    Mobile: "",
    PrimaryMobile: "",
    Address: "",
    Baptism: "default",
    ProfilePicture: "",
  });

  function InputHandle(e) {
    const { name, value } = e.target;
    setFormInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function MemberAdding() {
    if (
      formInputs.UserName === "" ||
      formInputs.DateOfBirth === "" ||
      formInputs.Mobile === "" ||
      formInputs.PrimaryMobile === "" ||
      formInputs.Address === "" ||
      formInputs.Baptism === "default" ||
      formInputs.ProfilePicture === ""
    )
      return alert("Fill the input feilds");
    try {
      console.log(formInputs);
      const request = await fetch(
        `https://bethelicrm.onrender.com/FormRoutes/CreateFamilyMember/${USERID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formInputs),
        }
      );

      const response = await request.json();
      if (response.success) {
        console.log(response);
        navigate("/");
      } else {
        alert("Backend Problem, Go to Console");
        console.log(response.message);
      }
    } catch (error) {
      alert("error");
      console.log(error.message);
    }
  }
  return (
    <div>
      <div className="w-[450px] max-w-[95%] mx-auto p-10 shadow-xl border my-10 rounded-xl flex flex-col gap-5">
        <div className=" leading-6">
          <div className="text-[0.8rem]">Church Family Details</div>
          <div className="text-[1.3rem] font-[700]">Family Member Add Form</div>
        </div>
        <label htmlFor="UserName">
          <div className="w-full text-[0.9rem] font-[700] my-1">User Name</div>
          <input
            type="text"
            onChange={(e) => InputHandle(e)}
            value={formInputs.UserName}
            placeholder="UserName"
            id="UserName"
            name="UserName"
            className="w-full px-4 py-1 rounded-md border border-gray-300 focus:border-gray-400 focus:ring-2 focus:ring-sky-600 "
          />
        </label>
        <label htmlFor="DateOfBirth">
          <div className="w-full text-[0.9rem] font-[700] my-1">
            Date Of Birth
          </div>
          <input
            type="date"
            placeholder="DateOfBirth"
            onChange={(e) => InputHandle(e)}
            value={formInputs.DateOfBirth}
            id="DateOfBirth"
            name="DateOfBirth"
            className="w-full px-4 py-1 rounded-md border border-gray-300 focus:border-gray-400 focus:ring-2 focus:ring-sky-600 "
          />
        </label>
        <label htmlFor="Mobile">
          <div className="w-full text-[0.9rem] font-[700] my-1">Mobile</div>
          <input
            type="number"
            placeholder="Mobile"
            onChange={(e) => InputHandle(e)}
            value={formInputs.Mobile}
            id="Mobile"
            name="Mobile"
            className="w-full px-4 py-1 rounded-md border border-gray-300 focus:border-gray-400 focus:ring-2 focus:ring-sky-600 "
          />
        </label>
        <label htmlFor="PrimaryMobile">
          <div className="w-full text-[0.9rem] font-[700] my-1">
            Primary Mobile
          </div>
          <input
            type="number"
            placeholder="Primary Mobile"
            onChange={(e) => InputHandle(e)}
            value={formInputs.PrimaryMobile}
            id="PrimaryMobile"
            name="PrimaryMobile"
            className="w-full px-4 py-1 rounded-md border border-gray-300 focus:border-gray-400 focus:ring-2 focus:ring-sky-600 "
          />
        </label>
        <label htmlFor="Address">
          <div className="w-full text-[0.9rem] font-[700] my-1">Address</div>
          <input
            type="text"
            placeholder="Address"
            onChange={(e) => InputHandle(e)}
            value={formInputs.Address}
            id="Address"
            name="Address"
            className="w-full px-4 py-1 rounded-md border border-gray-300 focus:border-gray-400 focus:ring-2 focus:ring-sky-600 "
          />
        </label>
        <label htmlFor="Baptism">
          <div className="w-full text-[0.9rem] font-[700] my-1">Baptism</div>
          <select
            name="Baptism"
            id=""
            onChange={(e) => InputHandle(e)}
            value={formInputs.Baptism}
            className="w-full px-4 py-1 rounded-md border border-gray-300 focus:border-gray-400 focus:ring-2 focus:ring-sky-600 "
          >
            <option value="default">Are You Baptism</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>
        <label htmlFor="ProfilePicture">
          <div className="w-full text-[0.9rem] font-[700] my-1">
            Profile Picture
          </div>
          <FILEBASE
            multiple={false}
            onDone={({ base64 }) =>
              setFormInputs((prev) => ({
                ...prev,
                ProfilePicture: base64,
              }))
            }
          />
        </label>
        <button
          onClick={() => MemberAdding()}
          className="w-full py-1 rounded-md border border-gray-300 focus:border-gray-400 focus:ring-2 focus:ring-sky-600 bg-sky-600 text-white"
        >
          Add Family Member
        </button>
      </div>
    </div>
  );
}

export default MemberForm;
