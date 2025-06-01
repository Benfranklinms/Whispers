import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white shadow-lg rounded-xl flex flex-col items-center min-h-[75vh] w-[90%] max-w-md px-8 py-10 gap-6">

        <div className="text-center">
          <span className="text-sm text-gray-500">Create your account</span>
          <h1 className="text-2xl font-bold text-gray-800">Sign Up</h1>
        </div>

        <div className="flex flex-col w-full gap-4">
          <input
            className="bg-gray-100 p-2 rounded-xl caret-pink-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            type="text"
            placeholder="Enter your name"
          />
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
          <button className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-xl font-medium transition">
            Create Account
          </button>
        </div>

        <div className="text-sm text-gray-600">
          Already have an account?{' '}
          <Link to = '/sign-in' className="text-pink-600 font-medium hover:underline">
            Log in
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default SignUp
