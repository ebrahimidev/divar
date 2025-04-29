import React, { useState } from "react";
import BtnNav from "../ui/BtnNav";
import SVGMap from "../ui/SVG/SVGMap";
import SVGDownArrow from "../ui/SVG/SVGDownArrow";
import SVGSearch from "../ui/SVG/SVGSearch";
import SVGUser from "../ui/SVG/SVGUser";
import SVGMessage from "../ui/SVG/SVGMessage";
import SVGSupport from "../ui/SVG/SVGSupport";
import ChoseCity from "../modal/ChoseCity";
import ModalCategory from "../modal/ModalCategory";
import ModalMyDivar from "../modal/ModalMyDivar";
import ModalSupport from "../modal/ModalSupport";

function Header() {
  const [openCity, setOpenCity] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openMyDivar, setOpenMyDivar] = useState(false);
  const [openSupport, setOpenSupport] = useState(false);

  return (
    <>
      <header className="flex justify-center items-center bg-white sticky top-0 w-full h-[64px] z-50 transition-divar shadow-divar">
        <nav className="px-3 flex items-center grow max-w-[1440px] space-x-3">
          <a href="/">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0E2MjYyNiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC4zODYgMTQuNjE3SDguMjhhLjcxMi43MTIgMCAwIDEtLjU5NS0uODA2Yy40NzMtMy4xMTcuNjMtOC4wOTIuNjMtOC4xMjcuMDM1LS4zODYuMzMzLS43LjczNi0uNjgzYS43MTUuNzE1IDAgMCAxIC42ODMuNzE4YzAgLjIxLS4xNzUgNS4wOTctLjY0OCA4LjMwM2EuNy43IDAgMCAxLS43LjU5NVptMTAuMDM3IDEuMjk2YS42OTMuNjkzIDAgMCAxLS42NjYtLjQ5LjY4OC42ODggMCAwIDEgLjQ1NS0uODc2YzMuMzEtMS4wNSAzLjM2My0xLjg1NyAzLjM4MS0yLjI5NS4wMzUtLjY4My0uNDktMS41NTgtLjctMS44NTZhLjcwMS43MDEgMCAxIDEgMS4xMzgtLjgyNGMuMTA1LjE0IDEuMDUgMS40NTQuOTYzIDIuNzY4LS4wODcgMS41OTQtMS4zMTQgMi41NzUtNC4zNjEgMy41NTZhLjg0NS44NDUgMCAwIDAtLjEwNS4wMDljLS4wMzUuMDA0LS4wNy4wMDktLjEwNS4wMDlabS05LjUxMiAyLjQ3YS42NTYuNjU2IDAgMCAxLS41NDMtLjI2Mi42ODMuNjgzIDAgMCAxIC4xMjMtLjk4MWMxLjQzNi0xLjEzOSAyLjQtMi4xNTUgMy4wMy0zLjA0OC0uMzUtLjE3NS0uNzE4LS40MzgtLjkxLS44NzYtLjE3Ni0uNDAzLS4yODEtMS4wNjkuMzMyLTEuOTYyLjg3Ni0xLjI5NiAxLjc1Mi0xLjU5NCAyLjA4NC0xLjY2NGEuODcxLjg3MSAwIDAgMSAxLjAxNi42MTNjLjA4OC4zMTUuMjk4IDEuMzE0LS4zMzIgMi44MzguODQtLjAxOCAxLjUwNi0uMjQ1IDIuMDE0LS42NjYuOTgtLjc4OCAxLjAzMy0yLjEyIDEuMDMzLTIuMTM3YS43MTUuNzE1IDAgMCAxIC43MTktLjY4My43MTUuNzE1IDAgMCAxIC42ODMuNzE4YzAgLjA3LS4wNyAxLjk0NC0xLjUyNCAzLjE3LS45MTEuNzcxLTIuMTU1IDEuMTA0LTMuNjYxLjk4Mi0uNzE4IDEuMTAzLTEuODU3IDIuNC0zLjYyNiAzLjhhLjcwOC43MDggMCAwIDEtLjQzOC4xNThabTMuODAxLTcuMDc2YTMuMTM0IDMuMTM0IDAgMCAwLS42My43MzVjLS4yMjguMzUtLjI0Ni41NDMtLjIyOC41OTYuMDM1LjA4OC4yMS4xNzUuMzg1LjI0NS4zMzMtLjY2NS40MzgtMS4xOTEuNDczLTEuNTc2Wm0uMTc1IDQuOTIyYS43MS43MSAwIDAgMCAuNy42ODNoLjAzNmMuMDUzIDAgMS4yMjYtLjAzNSAyLjkwOC0uNDJhLjcwMi43MDIgMCAwIDAgLjU0My0uODQxLjcwMi43MDIgMCAwIDAtLjg0MS0uNTQzYy0xLjU2LjMzMi0yLjY2My4zODUtMi42OC4zODVhLjcwNC43MDQgMCAwIDAtLjY2Ni43MzZaTTEuMTM0IDE4LjEwM2MuMTIyLjE3NS4zNS4yOC41Ni4yOC4xNCAwIC4yOC0uMDM1LjQyLS4xMjIgNC40NS0zLjI0IDQuNjI1LTcuNDggNC42MjUtNy42NTUgMC0uMzg1LS4yOTgtLjctLjY4My0uNzE4LS4zODYtLjAxOC0uNy4yOTgtLjcxOC42ODMgMCAuMTQtLjE3NiAzLjczMS00LjA0NyA2LjU1MWEuNzAxLjcwMSAwIDAgMC0uMTU3Ljk4MVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg=="
              alt="نشان دیوار"
              width="48"
              height="48"
              class="nav-bar__logo"
            />
          </a>
          <hr className="bg-[#dbdbe4] w-[1px] h-7 rounded-bl-full border-none " />
          <BtnNav className="mr-2" onclick={() => setOpenCity(!openCity)}>
            <SVGMap width="18px" height="18px" stroke="#0000008f" />
            <span>قم</span>
          </BtnNav>
          <div className="flex relative grow items-center">
            <div className="relative">
              <BtnNav onclick={() => setOpenCategory(!openCategory)}>
                <span>دسته ها</span>
                <SVGDownArrow width="19px" height="19px" stroke="#0000008f" />
              </BtnNav>
              {openCategory && <ModalCategory />}
            </div>
            <div className="mr-2 flex h-[40px] ml-[8px] max-w-[480px] w-[480px] ">
              <div className="w-full">
                <div className="w-full bg-[rgba(0,0,0,0.08)] rounded-xs relative transition-all ease-in-out">
                  <div className="px-2 w-full h-[40px] gap-2 flex items-center ">
                    <form action="" className="w-full flex grow text-xs">
                      <input
                        type="text"
                        className="outline-none rounded-xl"
                        placeholder="جستجو در دیوار"
                      />
                    </form>
                    <SVGSearch
                      width="17px"
                      height="17px"
                      stroke="rgba(0, 0, 0, 0.32)"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center mr-auto">
              <div className="relative">
                <BtnNav onclick={() => setOpenMyDivar(!openMyDivar)}>
                  <SVGUser
                    width="17px"
                    height="17px"
                    stroke="rgba(0, 0, 0, 0.561)"
                  />
                  <span>دیوار من</span>
                </BtnNav>
                {openMyDivar && <ModalMyDivar />}
              </div>

              <BtnNav>
                <SVGMessage width="17px" height="17px" stroke="#0000008f" />
                <span>چت</span>
              </BtnNav>

              <div className="relative">
                <BtnNav onclick={() => setOpenSupport(!openSupport)}>
                  <SVGSupport width="19px" height="19px" stroke="#0000008f" />
                  <span>پشتیبانی</span>
                </BtnNav>
                {openSupport && <ModalSupport />}
              </div>

              <BtnNav className="bg-[#a62626] text-white">
                <span>ثبت آگهی</span>
              </BtnNav>
            </div>
          </div>
        </nav>
      </header>

      {openCity && <ChoseCity setOpenCity={() => setOpenCity(!openCity)} />}
    </>
  );
}

export default Header;
