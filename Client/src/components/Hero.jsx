import React from 'react'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
   <section className="w-full min-h-[80vh] bg-white px-2 pt-10 md:pt-0 flex justify-center items-start md:items-center">
      <div className="flex justify-center items-center relative w-full max-w-4xl h-[70vh] rounded-xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
        <img
          src="/test2.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
        <div className="relative z-10 text-center px-6 py-16">
          <h1 className="text-white text-3xl md:text-5xl font-extrabold">
            Share Your Secrets, <br /> <span className='text-gray-400'>Anonymously</span>
          </h1>
          <p className="text-gray-200 mt-4 text-base md:text-lg mb-7">
            Unburden your heart and mind. Share your deepest secrets and
            confessions with the world, knowing your identity remains protected.
          </p>
          <Link to = '/add-confession' className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition-all duration-300 ease-in-out shadow-2xl hover:shadow-indigo-500/50">
            Confess Now
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero