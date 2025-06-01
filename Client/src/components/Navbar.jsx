import React from 'react'
import { FaCube } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-between bg-pink-700 text-white p-6'>
            <div className='flex items-center gap-2'>
                <FaCube className='text-2xl'/>
                <span className='font-bold text-2xl'>Whispers</span>
            </div>
            <ul className='flex gap-4'>
                <li>Home</li>
                <li>Confessions</li>
                <li>Add Confession</li>
            </ul>
            <div>
                
            </div>
        </nav>
    </div>
  )
}

export default Navbar