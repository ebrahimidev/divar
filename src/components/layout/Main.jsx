import React from "react";
import Slide from "./Main/Slide";
import Body from "./Main/Body";

function Main() {
  return (
    <div>
      <div className="max-w-[1440px]  mx-auto p-0 ">
        <Body />
        <Slide />
      </div>
    </div>
  );
}

export default Main;
