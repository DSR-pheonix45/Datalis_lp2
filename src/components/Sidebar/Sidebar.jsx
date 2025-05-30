import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { BsSun, BsMoon, BsChevronDown, BsChevronUp, BsPlus, BsFileEarmarkText } from 'react-icons/bs';
import SidebarSection from './SidebarSection';
import UserProfile from './UserProfile';
import CreateDatalis from './CreateDatalis';
import { agentItems, historyItems } from '../../data/sidebarData';

// Add default props
const Sidebar = ({ onCreateDatalis = () => {}, datalisList = [] }) => {
  const { darkMode, toggleTheme } = useTheme();
  const [sections, setSections] = useState({
    datalis: true,
    agents: true,
    history: true
  });
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [expandedDatalis, setExpandedDatalis] = useState({});

  const toggleSection = (section) => {
    setSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleDatalis = (id) => {
    setExpandedDatalis(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleCreateDatalis = (newDatalis) => {
    onCreateDatalis(newDatalis);
    setIsCreateModalOpen(false);
  };

  return (
    <div className={`h-full flex flex-col theme-transition ${darkMode ? 'bg-sidebar-dark text-text-dark-primary' : 'bg-sidebar-light text-text-light-primary'} border-r ${darkMode ? 'border-border-dark' : 'border-border-light'}`}>
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b theme-transition border-border-light dark:border-border-dark">
        <h1 className={`font-semibold text-xl ${darkMode ? 'text-primary-dark' : 'text-primary-light'}`}>
          Datalis
        </h1>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle theme"
        >
          {darkMode ? <BsSun className="text-yellow-400" /> : <BsMoon className="text-gray-600" />}
        </button>
      </div>

      {/* Sidebar Content - Scrollable */}
      <div className="flex-grow overflow-y-auto scrollbar-thin">
        {/* Datalis Section */}
        <SidebarSection
          title="DATALIS"
          isOpen={sections.datalis}
          toggleSection={() => toggleSection('datalis')}
          icon={sections.datalis ? <BsChevronUp /> : <BsChevronDown />}
        >
          <div className="py-2 px-4">
            <button 
              onClick={() => setIsCreateModalOpen(true)}
              className="flex items-center text-sm py-2 px-4 w-full rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <BsPlus className="mr-2 text-lg" /> New Datalis
            </button>
            {datalisList.map((item) => (
              <div key={item.id}>
                <div
                  className="flex items-center py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                  onClick={() => toggleDatalis(item.id)}
                >
                  <span className="text-sm">{item.name}</span>
                  <span className="ml-auto">
                    {expandedDatalis[item.id] ? <BsChevronUp /> : <BsChevronDown />}
                  </span>
                </div>
                {expandedDatalis[item.id] && item.files && (
                  <div className="ml-6">
                    {item.files.map((file, fileIndex) => (
                      <div
                        key={fileIndex}
                        className="flex items-center py-1 px-4 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <BsFileEarmarkText className="mr-2 text-xs" />
                        <span className="text-xs">{file.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </SidebarSection>

        {/* Agents Section */}
        <SidebarSection
          title="AGENTS"
          isOpen={sections.agents}
          toggleSection={() => toggleSection('agents')}
          icon={sections.agents ? <BsChevronUp /> : <BsChevronDown />}
        >
          <div className="py-2">
            {agentItems.map((agent) => (
              <div
                key={agent.name}
                className="flex items-center py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition-colors"
              >
                <div className="flex items-center">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className={`absolute inline-flex h-full w-full rounded-full ${agent.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                  </span>
                  <span className="text-sm">{agent.name}</span>
                </div>
              </div>
            ))}
          </div>
        </SidebarSection>

        {/* History Section */}
        <SidebarSection
          title="HISTORY"
          isOpen={sections.history}
          toggleSection={() => toggleSection('history')}
          icon={sections.history ? <BsChevronUp /> : <BsChevronDown />}
        >
          <div className="py-2">
            {historyItems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition-colors"
              >
                <span className="text-sm font-medium">{item.title}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">Apr {item.date}</span>
              </div>
            ))}
          </div>
        </SidebarSection>
      </div>

      {/* Create Datalis Modal */}
      <CreateDatalis
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSave={handleCreateDatalis}
      />

      {/* User Profile */}
      <UserProfile />
    </div>
  );
};

export default Sidebar;