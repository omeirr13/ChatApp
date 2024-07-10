import './MessageInput.css'
import ChatContext from '../../ChatContext';
import SocketContext from '../../SocketContext'
import { useContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage'
import StarImage from '../../images/white-star.png'
import { faSmile, faFile, } from '@fortawesome/free-regular-svg-icons';
import { faPaperclip, faDollar, faPlus, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function MessageInput() {
    //hooks
    //useState
    const [message, setMessage] = useState('');

    //useLocalStorage
    const { getItem } = useLocalStorage('currentLoggedIn');
    const { setChatMessage } = useLocalStorage('chat-pool')
    const { setFriendConnection, getItems } = useLocalStorage('connection-pool');

    //useContext
    const { socket } = useContext(SocketContext);
    const { chattingWith, setCurrentMessageList, setChatPool, setUpdateChatSideBar, updateChatSideBar, setOfflineMessages, setLastChatWith, messageListContainerRef, setRefreshChatSideBar, refreshChatSideBar } = useContext(ChatContext);

    //call useLocalStorage function
    const currentLoggedIn = getItem();

    //useEffect
    useEffect(() => {
        socket.on('notConnected', (data) => {
            setOfflineMessages(prevMessages => [...prevMessages, data]);
        })
    }, [socket])

    const formatDate = (timestamp) => {
        var timePart = timestamp.split('T')[1];
        var timeWithoutZone = timePart.slice(0, -5);
        console.log(timeWithoutZone);
        return timeWithoutZone;
    }
    const scrollToBottom = () => {
        if (messageListContainerRef.current) {
            messageListContainerRef.current.scrollTop = messageListContainerRef.current.scrollHeight;
        }
    };
    const sendMessage = () => {
        scrollToBottom();
        const timestamp = formatDate(new Date().toISOString());
        console.log(chattingWith);
        // set chatPool context
        const newMessage = {
            senderEmail: currentLoggedIn,
            receiverEmail: chattingWith,
            content: message,
            timestamp: timestamp
        };
        console.log(newMessage);
        setChatPool(prevChatPool => {
            //sort emails to ensure consistency
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

        //update the time stamp if already exist, else add to connection list

        let connectionPool = getItems();
        let connections = connectionPool[currentLoggedIn];
        console.log(connections);
        setFriendConnection(currentLoggedIn, chattingWith, message, timestamp, 0);
        console.log(message, timestamp);

        //update the side bar to have most recent chat first
        setUpdateChatSideBar(true);
        setRefreshChatSideBar(!refreshChatSideBar);

        socket.emit('private_chat',
            newMessage
        );
        setChatMessage(currentLoggedIn, chattingWith, newMessage);
        setMessage('');
        setCurrentMessageList((prevMessages) => [newMessage, ...prevMessages]);
        setLastChatWith(chattingWith);
    }

    const { userWhoseInfoOpen } = useContext(ChatContext);
    const isEmptyObject = Object.keys(userWhoseInfoOpen).length === 0 && userWhoseInfoOpen.constructor === Object;
    return (
        <div className="messageInputContainer">
            <input type="text" disabled={chattingWith === ''} className={`messageBodyInput chatArea ${isEmptyObject ? 'fullWidthInput' : ''}`} onChange={(e) => setMessage(e.target.value)} value={message} name="messageBody"></input>
            <div class="messageInputOptions">
                <div class="messageInputGrid">
                    <div class="messageInputGridItems">
                        <FontAwesomeIcon icon={faPaperclip} className="headerImage"></FontAwesomeIcon>
                    </div>
                    <div class="messageInputGridItems">
                        <FontAwesomeIcon icon={faSmile} className="headerImage"></FontAwesomeIcon>
                    </div>
                    <div class="messageInputGridItems">
                        <FontAwesomeIcon icon={faFile} className="headerImage"></FontAwesomeIcon>
                    </div>
                    <div class="messageInputGridItems">
                        <FontAwesomeIcon icon={faDollar} className="headerImage"></FontAwesomeIcon>
                    </div>
                    <div class="messageInputGridItems">
                        <FontAwesomeIcon icon={faPlus} className="headerImage"></FontAwesomeIcon>
                    </div>

                </div>
                <div class="messageInputOptionsRightContainer">
                    <div class="grid-container">
                        <div class="grid-item">
                            <FontAwesomeIcon icon={faPlus} className="headerImage"></FontAwesomeIcon>
                        </div>
                    </div>
                    <button type="submit" disabled={chattingWith === ''} className="sendMessageBtn" onClick={() => sendMessage()} >Send</button>
                </div>
            </div>
        </div >
    )
}
