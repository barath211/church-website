import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Extra.css";

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    Email: "",
    Password: "",
  });
  const [member, setMember] = useState(false);

  function InputHandle(e) {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function LoginAccount() {
    try {
      if (loginData.Email === "" || loginData.Password === "") {
        alert("Inputs are empty");
      } else {
        const request = await fetch(
          `https://bethelicrm.onrender.com/User/LoginAccount`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginData),
          }
        );
        const response = await request.json();
        console.log(response);
        if (response.success) {
          localStorage.setItem("BETHEL_ICRM_TOKEN", response.Token);
          if (member) {
            navigate("/MemberForm");
            window.location.reload();
          } else {
            navigate("/");
            window.location.reload();
          }
        } else {
          alert(response.message);
        }
      }
    } catch (error) {
      alert("Error");
      console.log(error.message);
    }
  }

  return (
    <div className="flex items-center justify-center  min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-6 rounded-md shadow-md">
        <h2 className="mt-6 text-center  antialiased text-3xl font-bold text-gray-900">
          Login to your account
        </h2>
        <form
  noValidate=""
  action=""
  className="mt-8 space-y-6 bg-white rounded-lg shadow-md p-6"
>
  <div className="rounded-md shadow-sm -space-y-px">
    <div className="mb-2">
      <label htmlFor="Email" className="sr-only">
        Email address
      </label>
      <input
        type="email"
        name="Email"
        id="Email"
        value={loginData.Email}
        onChange={InputHandle}
        placeholder="leroy@jenkins.com"
        className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 bg-black text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      />
    </div>
    <div>
      <label htmlFor="Password" className="sr-only">
        Password
      </label>
      <input
        type="password"
        name="Password"
        id="Password"
        value={loginData.Password}
        onChange={InputHandle}
        placeholder="*****"
        className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 bg-black text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      />
    </div>
  </div>
  <div className="flex items-center">
    <input
      type="checkbox"
      name="BaptismMember"
      id="BaptismMember"
      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
      onChange={() => setMember(!member)}
    />
    <label htmlFor="BaptismMember" className="ml-2 block text-sm text-gray-900">
      Member of Bethel ICRM?
    </label>
  </div>

  <button
    type="button"
    onClick={LoginAccount}
    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
  >
    Sign in
  </button>
</form>


        <div className="flex items-center w-full my-4">
          <hr className="w-full border-gray-300" />
          <p className="px-3 text-gray-500 bg-white">OR</p>
          <hr className="w-full border-gray-300" />
        </div>

        <p className="mt-2 text-center text-sm text-gray-600">
          Don't have an account?
          <Link
            to="/SignUp"
            className="font-medium text-indigo-600 hover:text-indigo-500 ml-2"
          >
            Sign up here
          </Link>
        </p>
        <div className="my-6 space-y-4">
         
        </div>
      </div>
    </div>
  );
}

export default Login;
