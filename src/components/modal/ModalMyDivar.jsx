import React from 'react'
import SVGLogin from '../ui/SVG/SVGLogin'
import SVGSave from '../ui/SVG/SVGSave';
import SVGNote from '../ui/SVG/SVGNote';
import SVGClock from '../ui/SVG/SVGClock';
import SVGStar from '../ui/SVG/SVGStar';
import SVGSecurity from '../ui/SVG/SVGSecurity';
import SVGSetting from '../ui/SVG/SVGSetting';

function ModalMyDivar() {
  return (
    <div className="transition-none absolute top-[44px] -left-[125.016px] bg-white rounded-[4px] cursor-pointer flex flex-col outline-none overflow-hidden z-50 shadow-lg  ">
      <div className="w-[224px] shadow-[0_1px_6px_0_rgba(0,0,0,0.08),0_-8px_32px_-4px_rgba(0,0,0,0.04),0_16px_24px_-6px_rgba(0,0,0,0.04)]">
        <button className="flex items-center text-[rgba(0,0,0,0.56)] cursor-pointer h-12 outline-none px-4 transition-colors duration-[36s] ease-[ease] w-full space-x-2">
          <SVGLogin
            width={"15px"}
            height={"15px"}
            stroke={"rgba(0,0,0,0.56)"}
          />
          <p className=" text-xs font-normal m-0 leading-0.5 ">ورود</p>
        </button>
        <hr className="mx-4 bg-[#dbdbe4] border-none h-[1px] " />

        <button className="flex items-center text-[rgba(0,0,0,0.56)] cursor-pointer h-12 outline-none px-4 transition-colors duration-[36s] ease-[ease] w-full space-x-2">
          <SVGSave width={"20px"} height={"20px"} fill={"rgba(0,0,0,0.56)"} />
          <p className=" text-xs font-normal m-0 leading-0.5 ">نشان</p>
        </button>
        <hr className="mx-4 bg-[#dbdbe4] border-none h-[1px] " />

        <button className="flex items-center text-[rgba(0,0,0,0.56)] cursor-pointer h-12 outline-none px-4 transition-colors duration-[36s] ease-[ease] w-full space-x-2">
          <SVGNote width={"15px"} height={"15px"} stroke={"rgba(0,0,0,0.56)"} />
          <p className=" text-xs font-normal m-0 leading-0.5 ">یادداشت‌ها</p>
        </button>
        <hr className="mx-4 bg-[#dbdbe4] border-none h-[1px] " />

        <button className="flex items-center text-[rgba(0,0,0,0.56)] cursor-pointer h-12 outline-none px-4 transition-colors duration-[36s] ease-[ease] w-full space-x-2">
          <SVGClock
            width={"15px"}
            height={"15px"}
            stroke={"rgba(0,0,0,0.56)"}
          />
          <p className=" text-xs font-normal m-0 leading-0.5 ">
            بازدید‌های اخیر
          </p>
        </button>
        <hr className="mx-4 bg-[#dbdbe4] border-none h-[1px] " />

        <button className="flex items-center text-[rgba(0,0,0,0.56)] cursor-pointer h-12 outline-none px-4 transition-colors duration-[36s] ease-[ease] w-full space-x-2">
          <SVGStar width={"15px"} height={"15px"} stroke={"rgba(0,0,0,0.56)"} />
          <p className=" text-xs font-normal m-0 leading-0.5 ">دیوار حرفه‌ای</p>
        </button>
        <hr className="mx-4 bg-[#dbdbe4] border-none h-[1px] " />

        <button className="flex items-center text-[rgba(0,0,0,0.56)] cursor-pointer h-12 outline-none px-4 transition-colors duration-[36s] ease-[ease] w-full space-x-2">
          <SVGSecurity
            width={"15px"}
            height={"15px"}
            stroke={"rgba(0,0,0,0.56)"}
          />
          <p className=" text-xs font-normal m-0 leading-0.5 ">
            مقابله با مزاحمت و کلاهبرداری
          </p>
        </button>
        <hr className="mx-4 bg-[#dbdbe4] border-none h-[1px] " />

        <button className="flex items-center text-[rgba(0,0,0,0.56)] cursor-pointer h-12 outline-none px-4 transition-colors duration-[36s] ease-[ease] w-full space-x-2">
          <SVGSetting
            width={"15px"}
            height={"15px"}
            stroke={"rgba(0,0,0,0.56)"}
          />
          <p className=" text-xs font-normal m-0 leading-0.5 ">تنظیمات</p>
        </button>
        <hr className="mx-4 bg-[#dbdbe4] border-none h-[1px] " />
      </div>
    </div>
  );
}

export default ModalMyDivar

