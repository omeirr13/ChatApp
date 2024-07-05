import { io } from "socket.io-client";
import Login from './components/Login/Login';
import SocketContext from './SocketContext';
import Signup from './components/Signup/Signup';
import React, { useEffect } from 'react';
import RootLayout from './components/Layouts/RootLayout';
import ChatLayout from './components/Layouts/ChatLayout';
import UserListLayout from './components/Layouts/UserListLayout';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="user_list" element={<UserListLayout />} />
      <Route path="chat" element={<ChatLayout />} />
    </Route>
  )
);

function App() {
  const socket = io("http://localhost:4000");
  useEffect(() => {
    socket.on('connect', () => {
      console.log('You connected with id: ', socket.id);
    })

  }, [socket])


  return (
    <SocketContext.Provider value={{ socket }}>
      <RouterProvider router={router} >

      </RouterProvider>
    </SocketContext.Provider>
  );
}

export default App;
