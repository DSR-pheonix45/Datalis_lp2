import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import ChatControls from './ChatControls';
import { messages } from '../../data/messageData';
import { agentItems } from '../../data/sidebarData';

const ChatArea = ({ datalisList }) => {
  const { darkMode } = useTheme();
  const [chatMessages, setChatMessages] = useState(messages);
  const [inputMessage, setInputMessage] = useState('');
  
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    
    const newMessage = {
      id: Date.now(),
      sender: 'John Smith',
      avatar: 'JS',
      content: inputMessage,
      timestamp: new Date().toISOString(),
      isUser: true
    };
    
    setChatMessages([...chatMessages, newMessage]);
    setInputMessage('');
  };

  return (
    <div className={`flex flex-col h-full theme-transition ${darkMode ? 'bg-chat-dark' : 'bg-chat-light'}`}>
      <ChatHeader />
      
      <MessageList messages={chatMessages} />
      
      <ChatControls 
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        handleSendMessage={handleSendMessage}
        datalisList={datalisList}
        agentItems={agentItems}
      />
    </div>
  );
};

export default ChatArea;