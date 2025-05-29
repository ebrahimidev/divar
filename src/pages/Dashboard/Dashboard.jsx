import { useState } from 'react'
import Sidebar from '../../components/layout/Dashboard/Sidebar';
import MainContent from '../../components/layout/Dashboard/MainContent';
import Category from '../../components/layout/Dashboard/category/Category';

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  return (
    <div className="flex h-screen bg-[#F9FAFB] text-gray-900">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        setIsOpenCategory={setIsOpenCategory}
        isOpenCategory={isOpenCategory}
      />
      <main className="flex-1 p-4 overflow-y-auto">
        {isOpenCategory === true ? <Category/> : <MainContent />}
      </main>
    </div>
  );
}

export default Dashboard