import React from 'react'
import { useRef } from 'react'

const AccountSection = React.forwardRef((props, ref) => {
  return (
    <div>
       <div ref={ref}
       className="absolute right-8 top-16 z-50 w-[320px] rounded-xl shadow-xl bg-white ring-1 ring-slate-300 border border-slate-200">
      <div className="flex flex-col">
        <div className="p-4 border-b border-slate-200">
          <h2 className="text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em]">
            Ethan Carter
          </h2>
          <p className="text-[#49739c] text-sm font-normal leading-normal">
            ethan.carter@email.com
          </p>
        </div>

        <div className="p-4 border-b border-slate-200">
          <h3 className="text-[#0d141c] text-base font-semibold mb-1">
            Notifications
          </h3>
          <p className="text-[#0d141c] text-sm font-normal">
            No messages for now
          </p>
        </div>

        <div className="flex flex-col gap-2 p-4">
          <button className="w-full h-10 px-4 rounded-xl bg-[#e7edf4] text-sm font-bold text-[#0d141c] hover:bg-[#dbe3ec] transition">
            View Profile
          </button>
          <button className="w-full h-10 px-4 rounded-xl bg-[#e7edf4] text-sm font-bold text-[#0d141c] hover:bg-[#dbe3ec] transition">
            Logout
          </button>
        </div>
      </div>
    </div>
    </div>
  )
})

export default AccountSection