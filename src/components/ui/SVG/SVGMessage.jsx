import React from 'react'

function SVGMessage({ width, height , stroke }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3C5.11765 3 3 4.64706 3 10C3 13.7383 4.0328 15.6692 7 16.4939V21L11.0124 16.9876C11.3301 16.996 11.6592 17 12 17C18.8824 17 21 15.3529 21 10C21 4.64706 18.8824 3 12 3Z"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default SVGMessage