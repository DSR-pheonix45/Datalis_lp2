import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Message from './Message';

const MessageList = ({ messages }) => {
  const { darkMode } = useTheme();
  
  return (
    <div className={`flex-grow overflow-y-auto p-4 scrollbar-thin theme-transition ${darkMode ? 'bg-chat-dark' : 'bg-chat-light'}`}>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default MessageList;