import React, { useRef } from "react";
import SVGRightArrow from "../ui/SVG/SVGRightArrow";
import SVGLeftArrow from "../ui/SVG/SVGLeftArrow";
import SubMenuHeader from "../ui/SubMenuHeader";
import useOutsideClick from "../../hooks/useOutsideClick";

function ModalCategory({ setOpenCategory, openCategory }) {
  const modalRef = useRef(null);
  useOutsideClick(modalRef, openCategory , setOpenCategory);
  return (
    <div
      ref={modalRef}
      className="absolute right-0 flex flex-row w-full min-h-[496px] max-h-[520px] mt-1 p-8 bg-white rounded-xs cursor-pointer transition-all  top-[44px] -left-[1.13687epx]"
    >
      <div className="flex bg-white flex-col shrink-0 pl-4 border-l border-solid border-[rgba(0,0,0,0.09)] w-[176px] ">
        <a
          href=""
          className="shadow-[inset_0_0_0_1px_rgba(0,0,0,0.4)] mb-2 flex items-center h-8 py-2 text-[rgba(0,0,0,0.56)] text-right cursor-pointer transition-colors duration-180 ease-[ease] space-x-2"
        >
          <SVGRightArrow width="15px" height="15px" fill="rgba(0,0,0,0.56)" />
          <span className="grow font-normal text-sm leading-0.5 ">
            همه آگهی
          </span>
        </a>
        <a
          href=""
          className="mb-2 flex items-center h-8 py-2 text-[rgba(0,0,0,0.56)] text-right cursor-pointer transition-colors duration-180 ease-[ease]  "
        >
          <svg
            fill="rgba(0,0,0,0.04)"
            width="14px"
            height="14px"
            viewBox="0 0 846.66 846.66"
            style={{
              shapeRendering: "geometricPrecision",
              textRendering: "geometricPrecision",
              imageRendering: "optimizeQuality",
              fillRule: "evenodd",
              clipRule: "evenodd",
            }}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <style>{`.fil0 {fill:black;fill-rule:nonzero}`}</style>
            </defs>
            <g id="Layer_x0020_1">
              <path
                className="fil0"
                d="M246.64 243.41l155.89 0 0 -16.64c0,-80.13 65.47,-145.61 145.6,-145.61l187.2 0c11.49,0 20.8,9.32 20.8,20.81l0 621.92 62.72 0c27.37,0 27.37,41.61 0,41.61 -263.68,0 -527.36,0 -791.04,0 -27.36,0 -27.36,-41.61 0,-41.61l62.72 0 0 -324.38c0,-85.9 70.21,-156.1 156.11,-156.1zm344.13 480.48l0 -84.1 -22.89 0 0 84.1 22.89 0zm-64.5 0l0 -104.91c0,-11.49 9.32,-20.8 20.81,-20.8l64.5 0c11.49,0 20.8,9.31 20.8,20.8l0 104.91 82.14 0 0 -601.12 -166.39 0c-57.15,0 -104,46.85 -104,104l0 497.12 82.14 0zm-345.8 -240.14l58.26 0c11.48,0 20.8,9.31 20.8,20.8l0 62.42c0,11.49 -9.32,20.8 -20.8,20.8l-58.26 0c-11.49,0 -20.8,-9.31 -20.8,-20.8l0 -62.42c0,-11.49 9.31,-20.8 20.8,-20.8zm37.45 41.61l-16.64 0 0 20.8 16.64 0 0 -20.8zm78.02 -41.61l58.26 0c11.48,0 20.8,9.31 20.8,20.8l0 62.42c0,11.49 -9.32,20.8 -20.8,20.8l-58.26 0c-11.49,0 -20.8,-9.31 -20.8,-20.8l0 -62.42c0,-11.49 9.31,-20.8 20.8,-20.8zm37.45 41.61l-16.64 0 0 20.8 16.64 0 0 -20.8zm-152.92 -169.57l58.26 0c11.48,0 20.8,9.32 20.8,20.81l0 62.42c0,11.48 -9.32,20.8 -20.8,20.8l-58.26 0c-11.49,0 -20.8,-9.32 -20.8,-20.8l0 -62.42c0,-11.49 9.31,-20.81 20.8,-20.81zm37.45 41.61l-16.64 0 0 20.81 16.64 0 0 -20.81zm78.02 -41.61l58.26 0c11.48,0 20.8,9.32 20.8,20.81l0 62.42c0,11.48 -9.32,20.8 -20.8,20.8l-58.26 0c-11.49,0 -20.8,-9.32 -20.8,-20.8l0 -62.42c0,-11.49 9.31,-20.81 20.8,-20.81zm37.45 41.61l-16.64 0 0 20.81 16.64 0 0 -20.81zm157.51 -124.83c-27.36,0 -27.36,-41.61 0,-41.61l176.85 0c27.37,0 27.37,41.61 0,41.61l-176.85 0zm0 228.86c-27.36,0 -27.36,-41.61 0,-41.61l176.85 0c27.37,0 27.37,41.61 0,41.61l-176.85 0zm0 -114.43c-27.36,0 -27.36,-41.61 0,-41.61l176.85 0c27.37,0 27.37,41.61 0,41.61l-176.85 0zm-88.37 -101.98l-155.89 0c-62.93,0 -114.5,51.57 -114.5,114.49l0 324.38 270.39 0 0 -438.87z"
              />
            </g>
          </svg>
          <span className="mr-1.5 grow font-normal text-sm leading-0.5">
            املاک
          </span>
          <SVGLeftArrow width="15px" height="15px" fill="rgba(0,0,0,0.56)" />
        </a>
        <a
          href=""
          className="mb-2 flex items-center h-8 py-2 text-[rgba(0,0,0,0.56)] text-right cursor-pointer transition-colors duration-180 ease-[ease]  "
        >
          <svg
            fill="rgba(0,0,0,0.04)"
            width="14px"
            height="14px"
            viewBox="0 0 846.66 846.66"
            style={{
              shapeRendering: "geometricPrecision",
              textRendering: "geometricPrecision",
              imageRendering: "optimizeQuality",
              fillRule: "evenodd",
              clipRule: "evenodd",
            }}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <style>{`.fil0 {fill:black;fill-rule:nonzero}`}</style>
            </defs>
            <g id="Layer_x0020_1">
              <path
                className="fil0"
                d="M246.64 243.41l155.89 0 0 -16.64c0,-80.13 65.47,-145.61 145.6,-145.61l187.2 0c11.49,0 20.8,9.32 20.8,20.81l0 621.92 62.72 0c27.37,0 27.37,41.61 0,41.61 -263.68,0 -527.36,0 -791.04,0 -27.36,0 -27.36,-41.61 0,-41.61l62.72 0 0 -324.38c0,-85.9 70.21,-156.1 156.11,-156.1zm344.13 480.48l0 -84.1 -22.89 0 0 84.1 22.89 0zm-64.5 0l0 -104.91c0,-11.49 9.32,-20.8 20.81,-20.8l64.5 0c11.49,0 20.8,9.31 20.8,20.8l0 104.91 82.14 0 0 -601.12 -166.39 0c-57.15,0 -104,46.85 -104,104l0 497.12 82.14 0zm-345.8 -240.14l58.26 0c11.48,0 20.8,9.31 20.8,20.8l0 62.42c0,11.49 -9.32,20.8 -20.8,20.8l-58.26 0c-11.49,0 -20.8,-9.31 -20.8,-20.8l0 -62.42c0,-11.49 9.31,-20.8 20.8,-20.8zm37.45 41.61l-16.64 0 0 20.8 16.64 0 0 -20.8zm78.02 -41.61l58.26 0c11.48,0 20.8,9.31 20.8,20.8l0 62.42c0,11.49 -9.32,20.8 -20.8,20.8l-58.26 0c-11.49,0 -20.8,-9.31 -20.8,-20.8l0 -62.42c0,-11.49 9.31,-20.8 20.8,-20.8zm37.45 41.61l-16.64 0 0 20.8 16.64 0 0 -20.8zm-152.92 -169.57l58.26 0c11.48,0 20.8,9.32 20.8,20.81l0 62.42c0,11.48 -9.32,20.8 -20.8,20.8l-58.26 0c-11.49,0 -20.8,-9.32 -20.8,-20.8l0 -62.42c0,-11.49 9.31,-20.81 20.8,-20.81zm37.45 41.61l-16.64 0 0 20.81 16.64 0 0 -20.81zm78.02 -41.61l58.26 0c11.48,0 20.8,9.32 20.8,20.81l0 62.42c0,11.48 -9.32,20.8 -20.8,20.8l-58.26 0c-11.49,0 -20.8,-9.32 -20.8,-20.8l0 -62.42c0,-11.49 9.31,-20.81 20.8,-20.81zm37.45 41.61l-16.64 0 0 20.81 16.64 0 0 -20.81zm157.51 -124.83c-27.36,0 -27.36,-41.61 0,-41.61l176.85 0c27.37,0 27.37,41.61 0,41.61l-176.85 0zm0 228.86c-27.36,0 -27.36,-41.61 0,-41.61l176.85 0c27.37,0 27.37,41.61 0,41.61l-176.85 0zm0 -114.43c-27.36,0 -27.36,-41.61 0,-41.61l176.85 0c27.37,0 27.37,41.61 0,41.61l-176.85 0zm-88.37 -101.98l-155.89 0c-62.93,0 -114.5,51.57 -114.5,114.49l0 324.38 270.39 0 0 -438.87z"
              />
            </g>
          </svg>
          <span className="mr-1.5 grow font-normal text-sm leading-0.5">
            املاک
          </span>
          <SVGLeftArrow width="15px" height="15px" fill="rgba(0,0,0,0.56)" />
        </a>
      </div>
      <SubMenuHeader />
    </div>
  );
}

export default ModalCategory;
