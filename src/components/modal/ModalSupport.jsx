import React, { useRef } from "react";
import SVGSupport2 from "../ui/SVG/SVGSupport2";
import SVGTracking from "../ui/SVG/SVGTracking";
import useOutsideClick from "../../hooks/useOutsideClick";

function ModalSupport({ openSupport, setOpenSupport }) {
  const modalRef = useRef(null);
  useOutsideClick(modalRef, openSupport, setOpenSupport);
  return (
    <div
      ref={modalRef}
      className="transition-none absolute top-[44px] -left-[41.032px] bg-white rounded-[4px] cursor-pointer flex flex-col outline-none overflow-hidden z-50 shadow-lg  "
    >
      <button className="flex items-center text-[rgba(0,0,0,0.56)] cursor-pointer h-12 outline-none px-4 transition-colors duration-[36s] ease-[ease] w-full space-x-2">
        <SVGSupport2
          width={"15px"}
          height={"15px"}
          stroke={"rgba(0,0,0,0.56)"}
        />
        <p className=" text-xs font-normal m-0 leading-0.5 ">
          پشتیبانی و قوانین
        </p>
      </button>
      <hr className="mx-4 bg-[#dbdbe4] border-none h-[1px] " />

      <button className="flex items-center text-[rgba(0,0,0,0.56)] cursor-pointer h-12 outline-none px-4 transition-colors duration-[36s] ease-[ease] w-full space-x-2">
        <SVGTracking
          width={"15px"}
          height={"15px"}
          stroke={"rgba(0,0,0,0.56)"}
        />
        <p className=" text-xs font-normal m-0 leading-0.5 ">پیگیری درخواست</p>
      </button>
      <hr className="mx-4 bg-[#dbdbe4] border-none h-[1px] " />
    </div>
  );
}

export default ModalSupport;
