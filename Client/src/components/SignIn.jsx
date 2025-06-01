import React from 'react'

const SignIn = () => {
  return (
    <>
      <div className='flex justify-center items-center h-screen bg-gray-200'>
        <div className='bg-red-300 flex justify-center items-center min-h-[80vh] flex-col min-w-[40vw] max-sm:min-h-[40vh] max-sm:min-w-[80vw]'>
            <span>Please enter your details</span>
            <h1>Welcome back</h1>
            <div className='bg-red-400 flex flex-col justify-center items-center p-5 gap-3 text-white'>
                <input className = 'bg-black' type="email"/>
                <input className = 'bg-black' type="password"/>
                <button>Login</button>
            </div>
            <div>
                <span>Don't have an account</span>
                <button>Sign Up</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default SignIn