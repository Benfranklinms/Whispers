import React from 'react'


const YourConfessions = () => {
  return (
    <section className='flex flex-col items-start bg-pink-200 p-10 sm:w-[70vw] max-sm:w-[95vw] mx-auto min-h-screen rounded-xl'>
        <div className='flex sm:px-2 gap-1'>
            <span className='font-black text-2xl'>Your Confessions</span>
        </div>
        <div className='bg-pink-400 sm:h-[20vh] sm:w-[60vw] rounded-xl max-sm:w-[80vw] max-sm:min-h-[20vh] flex  items-center text-sm font-bold text-white mx-auto my-6 max:sm-text'>
          <span className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus magni, impedit quos, eveniet tempora libero consequatur nisi sunt consequuntur perspiciatis, quidem eos illum rerum quaerat asperiores saepe. Modi, ut tenetur?</span>
        </div>
    </section>
  )
}

export default YourConfessions