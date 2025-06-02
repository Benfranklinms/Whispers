import React from 'react'
import { Link } from 'react-router-dom';
import { FaCube } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuCircleUserRound } from "react-icons/lu";
import { Cannabis } from 'lucide-react';

const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-between bg-pink-700 text-white p-6'>
            <div className='flex items-center gap-2'>
              <Cannabis />
                <span className='font-bold text-2xl'>Whispers</span>
            </div>
            <div className='flex items-end gap-2 justify-center'>
            <ul className='flex gap-4'>
                <Link to = '/' className='max-sm:hidden'>Home</Link>
                <Link to = '/confessions' className='max-sm:hidden'>Confessions</Link>
                <Link to = '/add-confession' className='max-sm:hidden'>Add Confession</Link>
            </ul>
            <div className='flex items-center gap-4'>
                <LuCircleUserRound className='max-sm:hidden text-2xl mx-5'/>
                <GiHamburgerMenu className='sm:hidden text-2xl'/>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar