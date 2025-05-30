import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { BsSearch } from 'react-icons/bs';

const ChatHeader = () => {
  const { darkMode } = useTheme();
  
  return (
    <div className={`p-4 border-b theme-transition ${darkMode ? 'border-border-dark' : 'border-border-light'}`}>
      <div className="flex justify-between items-center">
        <h2 className={`text-xl font-medium ${darkMode ? 'text-text-dark-primary' : 'text-text-light-primary'}`}>
          Chat
        </h2>
        
        <div className={`relative w-64 theme-transition`}>
          <input
            type="text"
            placeholder="Search messages..."
            className={`w-full py-2 pl-9 pr-4 rounded-md text-sm focus:outline-none focus:ring-2 theme-transition
              ${darkMode 
                ? 'bg-gray-700 text-text-dark-primary focus:ring-primary-dark border-gray-600' 
                : 'bg-gray-100 text-text-light-primary focus:ring-primary-light border-gray-200'
              } border`}
          />
          <BsSearch className={`absolute left-3 top-1/2 -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;