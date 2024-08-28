import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Extra.css';

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    Email: '',
    Password: '',
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
      if (loginData.Email === '' || loginData.Password === '') {
        alert('Inputs are empty');
      } else {
        const request = await fetch('/User/LoginAccount', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(loginData),
        });
        const response = await request.json();
        console.log(response);
        if (response.success) {
          localStorage.setItem('BETHEL_ICRM_TOKEN', response.Token);
          if (member) {
            navigate('/MemberForm');
          } else {
            navigate('/');
          }
        } else {
          alert(response.message);
        }
      }
    } catch (error) {
      alert('Error');
      console.log(error.message);
    }
  }

  return (
    <div className='flex items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md p-6 space-y-8 bg-white rounded-md shadow-md'>
        <h2 className='mt-6 text-3xl antialiased font-bold text-center text-gray-900'>
          Login to your account
        </h2>
        <form
          noValidate=''
          action=''
          className='p-6 mt-8 space-y-6 bg-white rounded-lg shadow-md'
        >
          <div className='-space-y-px rounded-md shadow-sm'>
            <div className='mb-2'>
              <label
                htmlFor='Email'
                className='sr-only'
              >
                Email address
              </label>
              <input
                type='email'
                name='Email'
                id='Email'
                value={loginData.Email}
                onChange={InputHandle}
                placeholder='leroy@jenkins.com'
                className='relative block w-full px-3 py-2 text-white placeholder-gray-500 bg-black border border-gray-300 rounded-lg appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              />
            </div>
            <div>
              <label
                htmlFor='Password'
                className='sr-only'
              >
                Password
              </label>
              <input
                type='password'
                name='Password'
                id='Password'
                value={loginData.Password}
                onChange={InputHandle}
                placeholder='*****'
                className='relative block w-full px-3 py-2 text-white placeholder-gray-500 bg-black border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              />
            </div>
          </div>
          <div className='flex items-center'>
            <input
              type='checkbox'
              name='BaptismMember'
              id='BaptismMember'
              className='w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
              onChange={() => setMember(!member)}
            />
            <label
              htmlFor='BaptismMember'
              className='block ml-2 text-sm text-gray-900'
            >
              Member of Bethel ICRM?
            </label>
          </div>

          <button
            type='button'
            onClick={LoginAccount}
            className='relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md group hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
          >
            Sign in
          </button>
        </form>

        <div className='flex items-center w-full my-4'>
          <hr className='w-full border-gray-300' />
          <p className='px-3 text-gray-500 bg-white'>OR</p>
          <hr className='w-full border-gray-300' />
        </div>

        <p className='mt-2 text-sm text-center text-gray-600'>
          Don't have an account?
          <Link
            to='/SignUp'
            className='ml-2 font-medium text-indigo-600 hover:text-indigo-500'
          >
            Sign up here
          </Link>
        </p>
        <div className='my-6 space-y-4'></div>
      </div>
    </div>
  );
}

export default Login;
