
import React, { createContext, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [visitedChatrooms, setVisitedChatrooms] = useState([]);
  const history = useHistory();

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  const enterChatroom = (CurrentRoomid) => {
    setVisitedChatrooms([...visitedChatrooms, CurrentRoomid]);
    history.push(`/chatApp/${CurrentRoomid}`);
  };

  const exitChatroom = (CurrentRoomid) => {
    history.replace(`/`);
    setVisitedChatrooms(visitedChatrooms.filter(id => id !== CurrentRoomid));
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, enterChatroom, exitChatroom }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
