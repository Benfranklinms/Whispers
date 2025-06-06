import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaCube } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuCircleUserRound } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { Bell } from 'lucide-react';
import AccountSection from './AccountSection';

const Navbar = () => {

    const [menuOpen, setmenuOpen] = useState(false);
    const toggleMenu = () => {
        setmenuOpen(!menuOpen)
    }

    const location = useLocation();
    const isHome = location.pathname === '/';
    const isConfessions = location.pathname === '/confessions';
    const isAddConfession = location.pathname === '/add-confession';


     const [accountOpen, setaccountOpen] = useState(false);
     const accountRef = useRef(null);

     useEffect(() => {
       const handleClickOutside = (event) => {
            if(accountRef.current && !accountRef.current.contains(event.target)){
                setaccountOpen(false);
            }
       }
            document.addEventListener('mousedown', handleClickOutside);
     
       return () => {
            document.removeEventListener('mousedown', handleClickOutside);
       }
     }, []);
     
     const navigate = useNavigate();

  return (
    <div>
        <nav className='flex justify-between bg-white text-black p-6 border-b-2 font-medium border-gray-200'>
            <div className='flex items-center gap-2 cursor-pointer'
            onClick={() => navigate('/')}
            >
                <FaCube className='text-2xl'/>
                <span className='font-bold text-2xl'>Whispers</span>
            </div>
            <div className='flex items-end gap-2 justify-center'>
            <ul className='flex gap-4'>
                {(
                    location.pathname === '/confessions'  
                )}
                <Link to = '/' className='max-sm:hidden font-medium'>Home</Link>
                {(isHome || isConfessions) && (
                    <Link to = '/add-confession' className='max-sm:hidden font-medium'>Add Confession</Link>
                )}
                {(isHome || isAddConfession) && (
                    <Link to = '/confessions' className='max-sm:hidden font-medium'>Confessions</Link>
                )}
                {(isConfessions || isAddConfession) && (
                    <Bell className='max-sm:hidden'/>
                )}
            </ul>
            <div className='flex items-center gap-4'>
                <LuCircleUserRound className='text-2xl mx-5 cursor-pointer' onClick={() => setaccountOpen(!accountOpen)}/>
                {menuOpen?(
                <IoMdClose className='sm:hidden text-2xl' onClick={toggleMenu}/>):
                (<GiHamburgerMenu className='sm:hidden text-2xl' onClick={toggleMenu}/>
                )}
            </div>
            {
                menuOpen && (
                    <div className='bg-white absolute top-16 right-2 sm:hidden z-50 p-4 rounded flex flex-col gap-4'>
                        <Link to = '/' className='hover:bg-gray-100 w-full hover:rounded px-2 py-1'>Home</Link>
                        <Link to = '/confessions' className='hover:bg-gray-100 w-full hover:rounded px-2 py-1'>Confessions</Link>
                        <Link to = '/add-confession' className='hover:bg-gray-100 w-full hover:rounded px-2 py-1'>Add Confession</Link>
                        <Link to = 'https://github.com/Benfranklinms/Whispers' className='hover:bg-gray-100 w-full hover:rounded px-2 py-1'>Source code</Link>
                    </div>
                )
            }
            </div>
        </nav>
        <div>
            {accountOpen && 
                <AccountSection ref = {accountRef}/>
            }
        </div>
    </div>
  )
}

export default Navbar