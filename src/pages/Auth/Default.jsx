import { useEffect, useRef } from "react";
import AuthModal from "./AuthModal";

export function Default({ isOpenLogin, setIsOpenLogin, setisLoggedIn }) {
  const modalRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      // اگر کلیک خارج از باکس modal بود
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpenLogin(false);
      }
    };

    // اضافه کردن event listener هنگام باز بودن modal
    if (isOpenLogin) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // تمیز کردن event listener هنگام unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenLogin, setIsOpenLogin]);
  return (
    <div className="bg-[rgba(0,0,0,0.40)] h-screen fixed left-0 top-0 w-screen z-[1060]">
      <div className="items-center flex flex-col h-full w-full justify-center fixed left-0 top-0">
        {isOpenLogin && (
          <div ref={modalRef}>
            <AuthModal
              setIsOpenLogin={setIsOpenLogin}
              setisLoggedIn={setisLoggedIn}
            />
          </div>
        )}
      </div>
    </div>
  );
}

