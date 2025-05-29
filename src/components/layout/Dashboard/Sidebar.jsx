import SVGMenuBar from "../../ui/SVG/SVGMenuBar";
import { Link } from "react-router";
// import { Home, User, Settings, Layers } from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar, setIsOpenCategory , isOpenCategory }) => {
  return (
    <aside
      className={`bg-white h-full transition-all duration-300 shadow-md ${
        isOpen ? "w-64" : "w-16"
      } flex flex-col`}
    >
      {/* منو فرضی بالا */}
      <div className="p-4  flex items-center justify-between">
        <span className={`font-bold text-lg ${!isOpen && "hidden"}`}>
          مدیریت
        </span>
        <button onClick={toggleSidebar} className="text-gray-500 text-sm">
          {isOpen ? (
            <SVGMenuBar width="20px" height="20px" stroke="rgba(0,0,0,0.87)" />
          ) : (
            <SVGMenuBar width="20px" height="20px" stroke="rgba(0,0,0,0.87)" />
          )}
        </button>
      </div>

      {/* دسته‌بندی‌ها */}
      <nav className="flex-1 p-2 space-y-1">
        <MenuItem label="داشبورد" isOpen={isOpen} />
        <MenuItem
          label="دسته بندی"
          isOpen={isOpen}
          onclick={() => setIsOpenCategory(!isOpenCategory)}
        />
        <MenuItem
          //   icon={}
          label="تنظیمات"
          isOpen={isOpen}
        />
        <MenuItem
          //   icon={}
          label="صفحه اصلی"
          isOpen={isOpen}
          href="/"
        />
      </nav>
    </aside>
  );
};

const MenuItem = ({ label, isOpen, href = "", onclick }) => (
  <div
    onClick={onclick}
    className="flex items-center gap-2 px-4 py-2 text-[#1C252E] hover:bg-blue-100 rounded-md cursor-pointer transition-all"
  >
    {isOpen && (
      <Link to={href} className="text-sm">
        {label}
      </Link>
    )}
  </div>
);

export default Sidebar;
