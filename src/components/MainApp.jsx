import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import ChatArea from "./ChatArea/ChatArea";
import SidebarToggle from "./Sidebar/SidebarToggle";
import { useTheme } from "../context/ThemeContext";

export default function MainApp() {
  const { darkMode } = useTheme();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [datalisList, setDatalisList] = useState([]);

  const handleCreateDatalis = (newDatalis) => {
    setDatalisList((prev) => [...prev, { id: Date.now(), ...newDatalis }]);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  return (
    <div
      className={`flex h-screen w-full overflow-hidden theme-transition ${
        darkMode ? "dark bg-sidebar-dark" : "bg-sidebar-light"
      }`}
    >
      {/* Mobile sidebar toggle */}
      <div className="md:hidden absolute top-4 left-4 z-50">
        <button
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          className="p-2 text-gray-600 dark:text-gray-300"
        >
          {isMobileSidebarOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`relative hidden md:block transition-all duration-300 ease-in-out
        ${isSidebarCollapsed ? "w-0" : "w-64 lg:w-72"}`}
      >
        <div
          className={`h-full ${
            isSidebarCollapsed ? "invisible opacity-0" : "visible opacity-100"
          }`}
        >
          <Sidebar
            onCreateDatalis={handleCreateDatalis}
            datalisList={datalisList}
          />
        </div>
        <SidebarToggle
          isCollapsed={isSidebarCollapsed}
          onToggle={toggleSidebar}
        />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden absolute inset-0 z-40 transition-transform duration-300 transform
        ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <Sidebar
          onCreateDatalis={handleCreateDatalis}
          datalisList={datalisList}
        />
      </div>

      {/* Chat Area */}
      <div className="flex-grow h-full overflow-hidden">
        <ChatArea datalisList={datalisList} />
      </div>
    </div>
  );
}