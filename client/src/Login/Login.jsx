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
      if (loginData.Email == "" || loginData.Password == "") {
        alert("inputs are empty");
      } else {
        const request = await fetch(`http://localhost:5000/User/LoginAccount`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginData),
        });
        const response = await request.json();
        console.log(response);
        if (response.success) {
          localStorage.setItem("BETHEL_ICRM_TOKEN", response.Token);
          if (member) {
            navigate("/MemberForm");
            window.location.reload()
          } else {
            navigate("/");
            window.location.reload()
          }
        } else {
          alert(response.message);
        }
      }
    } catch (error) {
      alert("error");
      console.log(error.message);
    }
  }

  return (
    <div className="w-[700px] mx-auto rounded-xl flex items-center justify-center scale-90 bg-slate-400">
      <div className="w-fit mx-auto max-w-md rounded-md sm:p-8 dark:bg-gray-50 dark:text-gray-800">
        <h2 className="mb-3 text-3xl font-semibold text-center c-font">
          Login to your account
        </h2>
        <form noValidate="" action="" className="space-y-8 mt-10">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="Email"
                id="Email"
                value={loginData.Email}
                onChange={(e) => InputHandle(e)}
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 bg-black text-white text-[14px] dark:text-gray-800 focus:dark:border-teal-600"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm ">
                  Password
                </label>
                <Link
                  rel="noopener noreferrer"
                  to="#"
                  className="text-xs hover:underline dark:text-gray-600"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                name="Password"
                id="Password"
                value={loginData.Password}
                onChange={(e) => InputHandle(e)}
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 bg-black text-white text-[14px] dark:text-gray-800 focus:dark:border-teal-600"
              />
            </div>
          </div>
          <div className="">
            <label htmlFor="BaptismMember">
              <input
                type="checkbox"
                name="BaptismMember"
                id="BaptismMember"
                className="mx-2 rounded-md"
                onChange={(e) => setMember(!member)}
              />
              <span className="text-[14px]">Member of Bethel ICRM?</span>
            </label>
          </div>

          <button
            type="button"
            onClick={() => LoginAccount()}
            className="w-full px-8 py-3 bg-red-600 text-white font-semibold rounded-md"
          >
            Sign in
          </button>
        </form>

        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-600" />
          <p className="px-3 dark:text-gray-600">OR</p>
          <hr className="w-full dark:text-gray-600" />
        </div>

        <p className="text-sm text-center dark:text-gray-600">
          Dont have account?
          <Link
            to="/SignUp"
            rel="noopener noreferrer"
            className="focus:underline hover:underline ml-2"
          >
            Sign up here
          </Link>
        </p>
        <div className="my-6 space-y-4">
          <button
            aria-label="Login with Google"
            type="button"
            className="flex bg-black text-white items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-teal-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current text-white"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </button>
        </div>

        
      </div>
    </div>
  );
}

export default Login;
