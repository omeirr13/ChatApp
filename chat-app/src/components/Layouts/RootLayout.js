import { useRef, useState } from 'react'
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import ChatContext from '../../ChatContext';

export default function RootLayout() {
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
    //useRef
    const messageListContainerRef = useRef(null);
    
    return (
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
            setUpdateAllUserBar
        }}>

            {<NavBar />}

            <Outlet
            ></Outlet >
            {/* <div className="welcome">
                <h1>
                    Welcome to Chat App
                </h1>
            </div> */}
        </ChatContext.Provider>
    )
}
