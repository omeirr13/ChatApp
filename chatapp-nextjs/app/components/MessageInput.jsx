import ChatContext from "@/app/ChatContext";
import SocketContext from "@/app/SocketContext";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { faPaperclip, faDollar, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faFile } from '@fortawesome/free-regular-svg-icons';
import { useState, useContext, useEffect } from "react";
import EmojiPicker from 'emoji-picker-react'
export default function MessageInput() {
    const [message, setMessage] = useState('');
    const { getItem } = useLocalStorage('currentLoggedIn');
    const { setChatMessage } = useLocalStorage('chat-pool');
    const { setFriendConnection, getItems } = useLocalStorage('connection-pool');
    const { socket } = useContext(SocketContext);
    const { chattingWith, setCurrentMessageList, setChatPool, setUpdateChatSideBar, updateChatSideBar, setOfflineMessages, setLastChatWith, messageListContainerRef, setRefreshChatSideBar, refreshChatSideBar } = useContext(ChatContext);
    const currentLoggedIn = getItem();
    const { userWhoseInfoOpen } = useContext(ChatContext);
    const isEmptyObject = Object.keys(userWhoseInfoOpen).length === 0 && userWhoseInfoOpen.constructor === Object;

    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    useEffect(() => {
        const handleNotConnected = (data) => {
            console.log('in handle not connected');
            setOfflineMessages(prevMessages => [...prevMessages, data]);
        }
        socket.on('notConnected', handleNotConnected);

        return () => {
            socket.off('notConnected', handleNotConnected);
        };
    }, [socket]);

    const formatDate = (timestamp) => {
        var timePart = timestamp.split('T')[1];
        var timeWithoutZone = timePart.slice(0, -8);
        console.log(timeWithoutZone);
        return timeWithoutZone;
    }

    const scrollToBottom = () => {
        if (messageListContainerRef.current) {
            messageListContainerRef.current.scrollTop = messageListContainerRef.current.scrollHeight;
        }
    };

    const sendMessage = () => {
        if (message.trim() === '') return; // Prevent sending empty messages
        scrollToBottom();
        const timestamp = formatDate(new Date().toISOString());
        console.log(chattingWith);

        const newMessage = {
            senderEmail: currentLoggedIn,
            receiverEmail: chattingWith,
            content: message,
            timestamp: timestamp
        };

        setChatPool(prevChatPool => {
            const [firstEmail, secondEmail] = currentLoggedIn < chattingWith ? [currentLoggedIn, chattingWith] : [chattingWith, currentLoggedIn];
            const updatedChatPool = { ...prevChatPool };

            updatedChatPool[currentLoggedIn] = {
                ...updatedChatPool[firstEmail],
                [secondEmail]: [
                    newMessage
                ]
            };

            return updatedChatPool;
        });

        let connectionPool = getItems();
        let connections = connectionPool[currentLoggedIn];
        console.log(connections);
        setFriendConnection(currentLoggedIn, chattingWith, message, timestamp, 0);
        console.log(message, timestamp);

        setUpdateChatSideBar(true);
        setRefreshChatSideBar(!refreshChatSideBar);

        socket.emit('private_chat', newMessage);

        setChatMessage(currentLoggedIn, chattingWith, newMessage);
        setMessage('');
        setCurrentMessageList((prevMessages) => [newMessage, ...prevMessages]);
        setLastChatWith(chattingWith);
    }

    const handleEmojiClick = (emojiObject, event) => {
        if (chattingWith !== '') {
            setMessage(prevMessage => prevMessage + emojiObject.emoji); // Append emoji to the current message
        }
    };

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <div className="absolute flex flex-col ml-1 bottom-0">
            {showEmojiPicker && <EmojiPicker onEmojiClick={handleEmojiClick} autoFocusSearch />}
            <input
                type="text"
                disabled={chattingWith === ''}
                className={`w-[51rem] h-[2rem] rounded-md mb-1 mr-3 chatArea border border-gray-200 border-solid ${isEmptyObject ? 'w-[70rem]' : ''}`}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                name="messageBody"
                onKeyDown={handleKeyDown}
            />
            <div className="flex justify-between">
                <div className="flex mr-2 items-end">
                    <div className="h-10 w-10 flex items-center justify-center border-t border-b border-r border-gray-200 border-solid hover:bg-[#e3e3e3]">
                        <FontAwesomeIcon
                            icon={faPaperclip}
                        />
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center border-t border-b border-r border-gray-200 border-solid hover:bg-[#e3e3e3]" onClick={toggleEmojiPicker}>
                        <FontAwesomeIcon
                            icon={faSmile}
                            className="headerImage"
                        />
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center border-t border-b border-r border-gray-200 border-solid hover:bg-[#e3e3e3]">
                        <FontAwesomeIcon
                            icon={faFile}
                            className="headerImage"
                        />
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center border-t border-b border-r border-gray-200 border-solid hover:bg-[#e3e3e3]">
                        <FontAwesomeIcon
                            icon={faDollar}
                            className="headerImage"
                        />
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center border-t border-b border-r border-gray-200 border-solid hover:bg-[#e3e3e3]">
                        <FontAwesomeIcon
                            icon={faPlus}
                            className="headerImage"
                        />
                    </div>
                </div>
                <div className="messageInputOptionsRightContainer">
                    <div className="grid-container">
                        {/* <div className="grid-item">
                            <FontAwesomeIcon
                                icon={faPlus}
                                className="headerImage"
                            />
                        </div> */}
                    </div>
                    <button
                        type="submit"
                        disabled={chattingWith === ''}
                        className="my-0 mx-2 bg-[#843cff] w-12 rounded-lg p-1 ml-1 text-white hover:bg-[#1B4A73] "
                        onClick={() => sendMessage()}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}
