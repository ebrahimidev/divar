import React from 'react'

function BtnLoading() {
  return (
    <button className="flex-1 mr-4 border border-[#a62626] bg-[#a62626] text-white flex items-center rounded-[4px] cursor-pointer h-10 min-w-24 px-4 relative transition-all justify-center">
      <svg
        className="w-5 h-5 animate-spin text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        ></path>
      </svg>
    </button>
  );
}

export default BtnLoading