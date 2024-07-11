import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FILEBASE64 from "react-file-base64";

function SignUp() {
  const navigate = useNavigate();
  const [signUpDetail, setSignUpDetail] = useState({
    UserName: "",
    Email: "",
    Password: "",
    ProfilePicture: "",
  });

  function handleInput(e) {
    const { name, value } = e.target;
    setSignUpDetail((prev) => ({ ...prev, [name]: value }));
  }

  async function CreateAccount() {
    if (
      signUpDetail.UserName == "" ||
      signUpDetail.Email == "" ||
      signUpDetail.Password == "" ||
      signUpDetail.ProfilePicture == ""
    )
      return alert(" Fill the input first! ");
    try {
      const request = await fetch(`http://localhost:5000/User/AccountCreate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signUpDetail),
      });
      const response = await request.json();
      if (response.success) {
        alert("Account Created ✅");
        navigate("/login");
      } else {
        alert(response.message);
      }
    } catch (error) {
      alert("backend err console it");
      console.log(error.message);
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-fit mx-auto max-w-md rounded-md sm:p-8 dark:bg-gray-50 dark:text-gray-800">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Create your Account
        </h2>
        <form noValidate="" action="" className="space-y-8 mt-10">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="UserName" className="block text-sm">
                User name
              </label>
              <input
                type="text"
                name="UserName"
                id="UserName"
                value={signUpDetail.UserName}
                onChange={(e) => handleInput(e)}
                placeholder="Ex. Barath"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-teal-600"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="Email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="Email"
                value={signUpDetail.Email}
                onChange={(e) => handleInput(e)}
                id="Email"
                placeholder="barath@gmail.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-teal-600"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="Password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="Password"
                value={signUpDetail.Password}
                onChange={(e) => handleInput(e)}
                id="Password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-teal-600"
              />
            </div>
            <div className="space-y-0">
              <div className="flex flex-col justify-between">
                <label htmlFor="ProfilePicture" className="text-sm w-full">
                  Profile Picture
                </label>
                <div className="w-full block">
                  <FILEBASE64
                    multiple={false}
                    onDone={({ base64 }) =>
                      setSignUpDetail((prev) => ({
                        ...prev,
                        ProfilePicture: base64,
                      }))
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => CreateAccount()}
            className="w-full px-8 py-3 bg-red-600 text-white font-semibold rounded-md"
          >
            Create Account
          </button>
        </form>

        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-600" />
          <p className="px-3 dark:text-gray-600">OR</p>
          <hr className="w-full dark:text-gray-600" />
        </div>

        <p className="text-sm text-center dark:text-gray-600">
          Already have an account
          <Link
            to="/Login"
            rel="noopener noreferrer"
            className="focus:underline hover:underline ml-2"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
