import React from 'react'
import SVGLeftArrow from '../../ui/SVG/SVGLeftArrow';

function ListCategory() {
  return (
    <li>
      <button className="w-full bg-transparent cursor-pointer leading-[1.5]">
        <div className="rounded-[4px] outline-none ">
          <div className="text-[rgba(0,0,0,0.56)] flex text-[1rem] font-normal justify-between leading-[2] min-h-12 py-2 whitespace-normal ">
            <div className="flex-[1_1] min-w-0 flex items-start ">
              <div className="flex items-start flex-[1_1] ">
                <p className="text-[rgba(0,0,0,0.87)] leading-[2] text-[1rem]  font-normal ">
                  املاک
                </p>
              </div>
            </div>
            <div className="shrink-0 justify-end mr-[10px] max-w-[50%] flex items-start ">
              <SVGLeftArrow
                width={"18px"}
                height={"18px"}
                fill={"rgba(0,0,0,0.56)"}
              />
            </div>
          </div>
        </div>
        <hr className="bg-[#dbdbe4] border-none box-border h-[1px] m-0 " />
      </button>
    </li>
  );
}

export default ListCategory