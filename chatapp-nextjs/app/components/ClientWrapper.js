'use client'
import React, { useEffect, useRef, useState } from 'react'
import SocketContext from '../SocketContext'
import ChatContext from '../ChatContext'
import { io } from 'socket.io-client'
import { SessionProvider } from "next-auth/react"

const socket = io("http://localhost:4000")
function ClientWrapper({ children }) {
    //hooks
    //useStates
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [chattingWith, setChattingWith] = useState('')// email of user with we are currently chatting with
    const [lastChatWith, setLastChatWith] = useState('');
    const [newMessageAlert, setNewMessageAlert] = useState(''); // an alert to rerender MessageList component when a new message comes
    const [sendRequestToUser, setSendRequestToUser] = useState('');
    //useLocalStorage
    const [currentMessageList, setCurrentMessageList] = useState([]); // stores the messages of the current user and chattingWith user
    const [chatPool, setChatPool] = useState({}); //stores information like timestamp between last chat of two users, latest message
    const [updateChatSideBar, setUpdateChatSideBar] = useState(false); //an alert to rerender the SideBar when a new message comes up
    const [offlineMessages, setOfflineMessages] = useState([1]);

    const [pendingRequestList, setPendingRequestList] = useState({});

    const [updateRequestBar, setUpdateRequestBar] = useState(false);
    const [updateAllUserBar, setUpdateAllUserBar] = useState(false);

    const [userWhoseInfoOpen, setUserWhoseInfoOpen] = useState({});

    const [chatNotOpen, setChatNotOpen] = useState(true);

    const [refreshChatSideBar, setRefreshChatSideBar] = useState(false);
    const [refreshAllUserBar, setRefreshAllUserBar] = useState(false);
    const [refreshRequestBar, setRefreshRequestBar] = useState(false);

    const [selectedSideBarButton, setSelectedSideBarButton] = useState('chat');
    const [signedInWithGoogle, setSignedInWithGoogle] = useState(false);
    //useRef
    const messageListContainerRef = useRef(null);
    useEffect(() => {
        const handleConnect = () => {
            console.log('You connected with id: ', socket.id);
        }
        socket.on('connect', handleConnect);

        return () => {
            socket.off('connect', handleConnect);
        };

    }, [socket])
    return (
        <SessionProvider>

            <ChatContext.Provider value={{
                isLoggedIn,
                setIsLoggedIn,
                chattingWith,
                setChattingWith,
                newMessageAlert,
                setNewMessageAlert,
                currentMessageList,
                setCurrentMessageList,
                chatPool,
                setChatPool,
                updateChatSideBar,
                setUpdateChatSideBar,
                offlineMessages,
                setOfflineMessages,
                lastChatWith,
                setLastChatWith,
                messageListContainerRef,
                sendRequestToUser,
                setSendRequestToUser,
                pendingRequestList,
                setPendingRequestList,
                updateRequestBar,
                setUpdateRequestBar,
                updateAllUserBar,
                setUpdateAllUserBar,
                userWhoseInfoOpen,
                setUserWhoseInfoOpen,
                setChatNotOpen,
                refreshChatSideBar,
                setRefreshChatSideBar,
                selectedSideBarButton,
                setSelectedSideBarButton,
                setRefreshAllUserBar,
                refreshAllUserBar,
                refreshRequestBar,
                setRefreshRequestBar,
                signedInWithGoogle,
                setSignedInWithGoogle
            }}>
                <SocketContext.Provider value={{ socket }}>
                    {children}
                </SocketContext.Provider>
            </ChatContext.Provider>
        </SessionProvider>


    )
}

export default ClientWrapper