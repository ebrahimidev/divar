import React, { useState } from 'react'
import Profile from "./Profile";
function Header({children}) {
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  return (
    <>
      <div className="space-y-6">
        {/* هدر بالا */}
        <div className="flex  items-center justify-between p-4 rounded-lg shadow  relative">
          <div>
            <h2 className="text-xl font-semibold">👋 سلام ; دوست عزیز</h2>
          </div>
          <div
            onClick={() => setIsOpenProfile(!isOpenProfile)}
            className="flex items-center gap-3 "
          >
            <img
              src="https://i.pravatar.cc/40?img=3"
              alt="User"
              className="w-10 h-10 rounded-full border border-solid  "
            />
          </div>
        </div>

        {/* محتوای اصلی */}
        <div className=" p-6 rounded-lg shadow-md">{children}</div>
      </div>
      {isOpenProfile && (
        <Profile
          isOpenProfile={isOpenProfile}
          setIsOpenProfile={setIsOpenProfile}
        />
      )}
    </>
  );
}

export default Header