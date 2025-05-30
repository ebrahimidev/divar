import React from "react";

function SVGSupport({ width, height, stroke }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title />

      <g id="Complete">
        <g id="support">
          <g>
            <circle
              cx="12"
              cy="12"
              fill="none"
              r="4"
              stroke={stroke}
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              transform="translate(-5 12) rotate(-45)"
            />

            <circle
              cx="12"
              cy="12"
              fill="none"
              r="10"
              stroke={stroke}
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              transform="translate(-5 12) rotate(-45)"
            />

            <line
              fill="none"
              stroke={stroke}
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="5"
              x2="9"
              y1="5"
              y2="9"
            />

            <line
              fill="none"
              stroke={stroke}
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="15"
              x2="19"
              y1="9"
              y2="5"
            />

            <line
              fill="none"
              stroke={stroke}
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="15"
              x2="19"
              y1="15"
              y2="19"
            />

            <line
              fill="none"
              stroke={stroke}
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="9"
              x2="5"
              y1="15"
              y2="19"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SVGSupport;
