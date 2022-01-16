import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import {Login} from "./components/login/Login";
import {Chat} from "./components/chat/Chat";

export const App = () => {
  const [user, setUser] = React.useState<string>('');

  const onEnterChat = (user: string) => {
    setUser(user);
  };

  return (
    <Router>
      <Routes>

      <Route path="/login" element={<Login user={user} onEnterChat={onEnterChat}/>}/>
      <Route path="/chat" element={<Chat user={user}/>}/>
      <Route path="*" element={<Navigate to='/login'/>} />
      </Routes>
    </Router>
  );
};

