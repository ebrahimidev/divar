import React from "react";
import SVGRightArrow from "../../ui/SVG/SVGRightArrow";
import FirstCategory from "./FirstCategory";

function SecondStage({ setStage }) {
  return (
    <div>
      <div>
        <div className="relative z-10 pb-8 bg-white  ">
          <div className=" max-w-[1024px] mx-auto px-4 w-full ">
            <div className="flex  flex-wrap -mx-2 ">
              <div className="mr-[25%] flex-[0_0_50%] max-w-[50%] px-2 w-full relative pt-8 ">
                <button
                  onClick={() => setStage(1)}
                  className="flex items-center mb-6 p-0 text-[rgb(113,113,122)] bg-transparent cursor-pointer "
                >
                  <SVGRightArrow
                    width={"18px"}
                    height={"18px"}
                    fill={"rgb(113,113,122)"}
                  />
                  <p className="text-[rgb(113,113,122)] pr-2 my-2 text-xs font-normal leading-[2] ">
                    بازگشت
                  </p>
                </button>
                <h1 className="py-4 text-[#383838] font-medium text-lg leading-[1.5] ">
                  ثبت آگهی
                </h1>
                <div className="relative ">
                  <div className="mt-4 ">
                    <form action="">
                      <div>
                        <div className="mb-4 mt-[2px] flex items-start col ">
                          <div>
                            <div className="flex item-end ">
                              <h2 className="text-[rgba(0,0,0,0.87)] text-lg font-normal leading-[1.5] ">
                                انتخاب دستهٔ آگهی
                              </h2>
                            </div>
                            <p className="text-[rgba(0,0,0,0.56)] text-sm leading-[2] mb-1 ">
                              یکی از دسته‌های زیر را انتخاب کنید.
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="cursor-pointer outline-none rounded-[4px] flex items-center">
                            <div className="text-[rgba(0,0,0,0.56)] flex text-[1rem] font-normal justify-between  leading-[2] min-h-[48px] py-2 ">
                              <div className="flex-[1_1] flex item-start ">
                                <SVGRightArrow
                                  width={"18px"}
                                  height={"18px"}
                                  fill={"rgba(0,0,0,0.56)"}
                                />
                                <div className="pr-2 flex items-start flex-[1_1]">
                                  <p className="text-[rgba(0,0,0,0.87)] leading-[2] ">
                                    بازگشت به همهٔ پیشنهاد دستهٔ آگهی
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr className="bg-[#dbdbe4] border-0 box-border h-[1px] " />
                          <FirstCategory />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondStage;
