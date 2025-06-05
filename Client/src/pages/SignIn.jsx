import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white shadow-lg rounded-xl flex flex-col items-center min-h-[70vh] w-[90%] max-w-md px-8 py-10 gap-6 max-sm:h-[30vh]">
        
        <div className="text-center position-relative left-10">
          <span className="text-sm text-gray-500">Please enter your details</span>
          <h1 className="text-2xl font-bold text-gray-800">Welcome back</h1>
        </div>
        <form className="flex flex-col w-full gap-4 mt-6">
          <input
            className="bg-gray-100 p-2 rounded-xl caret-pink-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            className="bg-gray-100 p-2 rounded-xl caret-pink-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            type="password"
            placeholder="Enter your password"
          />
          <button className="bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-xl font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400">
            Login
          </button>
        </form>

        <div className="text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to = '/sign-up' className="text-pink-600 font-medium hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn
