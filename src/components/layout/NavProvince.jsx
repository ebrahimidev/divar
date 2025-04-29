import React from 'react'
import SVGLeftArrow from '../ui/SVG/SVGLeftArrow';

function NavProvince({ cities, onclick, setSelectCity }) {
  return (
    <div className="pt-2 px-8 pb-0 flex flex-col overflow-y-auto">
      <div className="flex flex-col grow ">
        {cities.map((item) => (
          <div onClick={onclick} className="cursor-pointer outline-none ">
            <div
              onClick={() => setSelectCity(item.id)}
              className="text-[rgba(0,0,0,0.56)] flex font-normal justify-between min-h-[48px] whitespace-normal py-2 leading-[2] "
            >
              <div className="flex-1 min-w-0 flex items-start ">
                <div className="overflow-hidden flex-1 items-start flex  ">
                  <p className="text-[#00000087] ">{item.name}</p>
                </div>
              </div>
              <div className="flex justify-end mr-2.5 max-w-[50%]  min-w-0">
                <SVGLeftArrow
                  width={"18PX"}
                  height={"18px"}
                  fill={"#00000052"}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavProvince