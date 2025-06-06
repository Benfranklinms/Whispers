import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios';

const SignUp = () => {


  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post("http://localhost:3000/auth/signup", {
        name,
        email,
        password
      });
      console.log(res.data);
      if(res.data.token) {
        localStorage.setItem('token', res.data.token);
        toast.success("Account created successfully!");
        console.log("Token received:", res.data.token);
      }
      else {
        toast.error("No token received in response", res.data);
      }
      navigate('/')
    } catch(err) {
      toast.error("Error during sign up:", err);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white shadow-lg rounded-xl flex flex-col items-center min-h-[75vh] w-[90%] max-w-md px-8 py-10 gap-6">

        <div className="text-center">
          <span className="text-sm text-gray-500">Create your account</span>
          <h1 className="text-2xl font-bold text-gray-800">Sign Up</h1>
        </div>

        <form className="flex flex-col w-full gap-4" onSubmit={handleSubmit}>
          <input
            className="bg-gray-100 p-2 rounded-xl caret-indigo-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-700"
            type="text"
            placeholder="Enter your username"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <input
            className="bg-gray-100 p-2 rounded-xl caret-i-indigo-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-700"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            className="bg-gray-100 p-2 rounded-xl caret-i-indigo-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-700"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-xl font-medium transition">
            Create Account
          </button>
        </form>

        <div className="text-sm text-gray-600">
          Already have an account?{' '}
          <Link to = '/sign-in' className="text-indigo-600 font-medium hover:underline">
            Log in
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default SignUp
