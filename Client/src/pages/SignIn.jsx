import React, { use, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios';

const SignIn = () => {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/auth/signin", {
        email,
        password
      });

      if(res.data && res.data.token) {
        localStorage.setItem('token', res.data.token);
        toast.success("Login successful!");
        console.log("Token received:", res.data.token);
        navigate('/');
      }
      else {
        toast.info("No token received in response");
      }
    } catch (err) {
      console.error("Error during sign in:", err);
      toast.error("Invalid credentials. Please try again.");
    }
  }


  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white shadow-lg rounded-xl flex flex-col items-center min-h-[70vh] w-[90%] max-w-md px-8 py-10 gap-6 max-sm:h-[30vh]">
        
        <div className="text-center position-relative left-10">
          <span className="text-sm text-gray-500">Please enter your details</span>
          <h1 className="text-2xl font-bold text-gray-800">Welcome back</h1>
        </div>
        <form className="flex flex-col w-full gap-4 mt-6">
          <input
            className="bg-gray-100 p-2 rounded-xl caret-indigo-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-700"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            className="bg-gray-100 p-2 rounded-xl caret-indigo-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-700"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-xl font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
            onClick={handleSubmit}>
            Login
          </button>
        </form>

        <div className="text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to = '/sign-up' className="text-indigo-600 font-medium hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn
