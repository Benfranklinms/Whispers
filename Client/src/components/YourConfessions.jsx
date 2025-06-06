import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';


const YourConfessions = () => {
  
  const [confession, setconfession] = useState([]);

  useEffect(() => {
    const fetchConfessions = async () => {
      const token = localStorage.getItem('token');
      try{
        const res = await axios.get("http://localhost:3000/confession/my", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setconfession(res.data);
      } catch (err) {
        console.error("Error fetching confessions:", err);
      }
    }
  
    fetchConfessions();
  }, []);
  

  return (
    <section className='flex flex-col items-start p-10 sm:w-[70vw] max-sm:w-[95vw] mx-auto min-h-screen rounded-xl mb-5'>
        <div className='flex sm:px-2 gap-1'>
            <span className='font-bold text-2xl mb-2'>Your Confessions</span>
        </div>
        {confession.length === 0 ? (
           <span className="text-gray-600 mt-6">You haven't made any confessions yet.</span>
        ): (
          confession.map((item, index) => {
              return <div className='sm:h-[20vh] sm:w-[60vw] rounded-xl max-sm:w-[80vw] max-sm:min-h-[20vh] flex  items-center text-sm font-medium text-gray-600 mx-auto my-4 max:sm-text text-left p-4 border-b-2 border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer'
              key = {index}>
              <span className='text-left'>{item.text}</span>
                </div>
          })
        )
        }
    </section>
  )
}

export default YourConfessions