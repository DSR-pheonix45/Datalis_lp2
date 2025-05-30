import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { format } from 'date-fns';

const Message = ({ message }) => {
  const { darkMode } = useTheme();
  
  const formattedTime = format(new Date(message.timestamp), 'yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\'');
  
  return (
    <div className={`mb-6 animate-fade-in`}>
      <div className="flex items-start">
        {message.avatar === 'AI' ? (
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${darkMode ? 'bg-green-700' : 'bg-green-500'} text-white font-medium mr-3`}>
            {message.avatar}
          </div>
        ) : (
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${darkMode ? 'bg-gray-700' : 'bg-blue-500'} text-white font-medium mr-3`}>
            {message.avatar}
          </div>
        )}
        
        <div className="flex-1">
          <div className="flex items-baseline">
            <span className={`font-medium ${darkMode ? 'text-text-dark-primary' : 'text-text-light-primary'}`}>
              {message.sender}
            </span>
            <span className={`ml-2 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {formattedTime}
            </span>
          </div>
          
          <div className={`mt-1 text-sm ${darkMode ? 'text-text-dark-primary' : 'text-text-light-primary'}`}>
            {message.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;