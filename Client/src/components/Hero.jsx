import React from 'react'

const Hero = () => {
  return (
   <section className="w-full min-h-screen bg-white px-2 pt-10 md:pt-0 flex justify-center items-start md:items-center">
      <div className="flex justify-center items-center relative w-full max-w-4xl h-[70vh] rounded-xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
        <img
          src="/HeroSection.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
        <div className="relative z-10 text-center px-6 py-16">
          <h1 className="text-white text-3xl md:text-5xl font-extrabold">
            Share Your Secrets, <br /> Anonymously
          </h1>
          <p className="text-gray-200 mt-4 text-base md:text-lg">
            Unburden your heart and mind. Share your deepest secrets and
            confessions with the world, knowing your identity remains protected.
          </p>
          <button className="mt-6 px-6 py-3 bg-pink-600 hover:bg-red-700 text-white font-semibold rounded-full transition">
            Confess Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero