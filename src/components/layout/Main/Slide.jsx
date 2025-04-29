import React from 'react'
import SVGTracking from '../../ui/SVG/SVGTracking';
import SVGTwitter from '../../ui/SVG/SVGTwitter';
import SVGInstagram from '../../ui/SVG/SVGInstagram';
import SVGLinkedine from '../../ui/SVG/SVGLinkedine';
import SVGAparat from '../../ui/SVG/SVGAparat';

function Slide() {
  return (
    <div className="scrollbar-hide fixed top-16 w-[280px] h-[36px] pt-8 pb-0 px-4  [direction:ltr]  ">
      <aside className="[direction:rtl]">
        <ul className="m-0 p-0 ">
          <div className="text-xs font-normal leading-[2] text-[rgba(0,0,0,0.86)] m-0 py-2 ">
            دسته‌ها
          </div>
          <ul className="">
            <li className="rounded-[4px] text-sm list-none outline-none ">
              <a
                href=""
                className="rounded-[4px] text-[rgba(0,0,0,0.56)] cursor-pointer  leading-[2] outline-none py-1.5 transition flex items-center  space-x-2 "
              >
                <SVGTracking
                  width={"15px"}
                  height={"15px"}
                  stroke={"rgba(0,0,0,0.56)"}
                />
                <span>املاک</span>
              </a>
            </li>
            <li className="rounded-[4px] text-sm list-none outline-none ">
              <a
                href=""
                className="rounded-[4px] text-[rgba(0,0,0,0.56)] cursor-pointer  leading-[2] outline-none py-1.5 transition flex items-center  space-x-2 "
              >
                <SVGTracking
                  width={"15px"}
                  height={"15px"}
                  stroke={"rgba(0,0,0,0.56)"}
                />
                <span>املاک</span>
              </a>
            </li>
            <li className="rounded-[4px] text-sm list-none outline-none ">
              <a
                href=""
                className="rounded-[4px] text-[rgba(0,0,0,0.56)] cursor-pointer  leading-[2] outline-none py-1.5 transition flex items-center  space-x-2 "
              >
                <SVGTracking
                  width={"15px"}
                  height={"15px"}
                  stroke={"rgba(0,0,0,0.56)"}
                />
                <span>املاک</span>
              </a>
            </li>
          </ul>
        </ul>
        <hr className="mt-2 bg-[#dbdbe4] h-[1px] m-0 border-0 " />
      </aside>
      <footer className="[direction:rtl] pt-2 ">
        <nav className="flex flex-wrap justify-center ">
          <a
            href=""
            className="text-[rgba(0,0,0,0.56)] transition inline-block p-2 text-xs leading-[24px] "
          >
            {" "}
            دربارهٔ دیوار{" "}
          </a>
          <a
            href=""
            className="text-[rgba(0,0,0,0.56)] transition inline-block p-2 text-xs leading-[24px] "
          >
            دریافت برنامه
          </a>
          <a
            href=""
            className="text-[rgba(0,0,0,0.56)] transition inline-block p-2 text-xs leading-[24px] "
          >
            اتاق خبر
          </a>
          <a
            href=""
            className="text-[rgba(0,0,0,0.56)] transition inline-block p-2 text-xs leading-[24px] "
          >
            دیوار حرفه‌ای
          </a>
          <a
            href=""
            className="text-[rgba(0,0,0,0.56)] transition inline-block p-2 text-xs leading-[24px] "
          >
            گزارش آسیب‌پذیری
          </a>
          <a
            href=""
            className="text-[rgba(0,0,0,0.56)] transition inline-block p-2 text-xs leading-[24px] "
          >
            دیواری شو
          </a>
          <a
            href=""
            className="text-[rgba(0,0,0,0.56)] transition inline-block p-2 text-xs leading-[24px] "
          >
            پشتیبانی و قوانین
          </a>
        </nav>
        <nav className="flex flex-wrap justify-center">
          <a
            href=""
            className="text-[rgba(0,0,0,0.56)] transition flex flex-wrap items-center justify-center w-10 h-10 leading-[40px] "
          >
            <SVGTwitter
              width={"15px"}
              height={"15px"}
              fill={"rgba(0,0,0,0.56)"}
            />
          </a>
          <a
            href=""
            className="text-[rgba(0,0,0,0.56)] transition flex flex-wrap items-center justify-center w-10 h-10 leading-[40px] "
          >
            <SVGInstagram
              width={"15px"}
              height={"15px"}
              fill={"rgba(0,0,0,0.56)"}
            />
          </a>
          <a
            href=""
            className="text-[rgba(0,0,0,0.56)] transition flex flex-wrap items-center justify-center w-10 h-10 leading-[40px] "
          >
            <SVGLinkedine
              width={"15px"}
              height={"15px"}
              fill={"rgba(0,0,0,0.56)"}
            />
          </a>
          <a
            href=""
            className="text-[rgba(0,0,0,0.56)] transition flex flex-wrap items-center justify-center w-10 h-10 leading-[40px] "
          >
            <SVGAparat
              width={"15px"}
              height={"15px"}
              fill={"rgba(0,0,0,0.56)"}
            />
          </a>
        </nav>
        <div className="items-start flex justify-between m-3.5 ">
          <a
            href=""
            className="cursor-pointer h-auto my-4 max-w-[120px] text-center w-[48%] "
          >
            <div className="h-[84px] w-[84px] bg-contain bg-no-repeat ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSlh9eGJjIw9GGTPtSVApgQOS0NhbB7hJ53Ci5F170SNWf06PF_OKa3Fu51Kyz1L3B4MY&usqp=CAU"
                className="w-full h-full "
                alt=""
              />
            </div>
          </a>
          <a
            href=""
            className="cursor-pointer h-auto my-4 max-w-[120px] text-center w-[48%] "
          >
            <div className="h-[84px] w-[84px] bg-contain bg-no-repeat ">
              <img
                src="data:image/png;base64,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"
                className="w-full h-full "
                alt=""
              />
            </div>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Slide