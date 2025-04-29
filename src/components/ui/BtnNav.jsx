import React from 'react'

function BtnNav({ children, className, onclick }) {
  return (
    <div
      onClick={onclick}
      className={`${
        className ? className : "bg-white"
      }bg-white ${className} rounded-md text-[#0000008f] hover:bg-[rgba(0,0,0,0.04)] hover:text-[#000000de] transition-all duration-300 relative ease-in `}
    >
      <button className="h-10 flex items-center justify-center  space-x-1.5 px-4 cursor-pointer text-sm ">
        {children}
      </button>
    </div>
  );
}

export default BtnNav