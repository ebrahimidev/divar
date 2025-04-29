import React from 'react'
import SVGRightArrow from '../ui/SVG/SVGRightArrow';

function NavCity({ city, onclick }) {
  return (
    <div className="pt-2 px-8 pb-0 flex flex-col overflow-y-auto">
      <div className="flex flex-col grow ">
        <div onClick={onclick} className="cursor-pointer outline-none ">
          <div className="text-[rgba(0,0,0,0.56)] flex font-normal justify-between min-h-[48px] whitespace-normal py-2 leading-[2] ">
            <div className="flex-1 min-w-0 flex items-start ">
              <div className="overflow-hidden flex-1 items-start flex  ">
                <div className="flex items-center space-x-2.5">
                  <SVGRightArrow
                    width={"18PX"}
                    height={"18px"}
                    fill={"#00000087"}
                  />
                  <p className="text-[#00000087] ">همه شهرها</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {city.map((item) => (
          <div className="cursor-pointer outline-none ">
            <div className="text-[rgba(0,0,0,0.56)] flex font-normal justify-between min-h-[48px] whitespace-normal py-2 leading-[2] ">
              <div className="flex-1 min-w-0 flex items-start ">
                <div className="overflow-hidden flex-1 items-start flex  ">
                  <p className="text-[#00000087] ">{item.name}</p>
                </div>
              </div>
              <div className="flex justify-end mr-2.5 max-w-[50%]  min-w-0">
                <input
                  className="h-full z-1 w-full"
                  type="checkbox"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavCity