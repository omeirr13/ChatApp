import { useContext, useEffect, useState } from 'react';
import MessageItem from '../components/MessageItem/MessageItem'
import { useLocalStorage } from '../hooks/useLocalStorage';
import './MessageList.css'
import ChatContext from '../ChatContext';
import SocketContext from '../SocketContext';

export default function MessageList() {
    //hooks
    //useContexts
    let { chattingWith,
        setCurrentMessageList,
        currentMessageList,
        setUpdateChatSideBar,
        setChatPool,
        setLastChatWith,
        lastChatWith,
        messageListContainerRef
    } = useContext(ChatContext);
    const { socket } = useContext(SocketContext);

    //useLocalStorages
    const { getItem } = useLocalStorage("currentLoggedIn");
    const { getItems, setChatMessage } = useLocalStorage('chat-pool');
    const { setFriendConnection, getItems: getConnections } = useLocalStorage('connection-pool');

    const loggedInUser = getItem();

    //useEffects
    useEffect(() => {
        console.log('message list useffec');
        const email1 = getItem();
        const email2 = chattingWith;
        const [firstEmail, secondEmail] = email1 < email2 ? [email1, email2] : [email2, email1];
        let messages = getItems();
        console.log(messages);
        const key = `${firstEmail}-${secondEmail}`;
        console.log('in chat of: ', chattingWith);
        console.log('message sent by: ', email1);
        console.log('message got by: ', email2);
        console.log(lastChatWith);
        messages = messages[key];
        console.log(messages);
        if (messages) {
            // console.log('in1');
            // if (lastChatWith) {//check if last chat exists (chatted with anyone before)
            // console.log('in2');
            // if (lastChatWith === chattingWith) { //if exists check if last chat with is current open chat i.e chattingWith
            console.log('in3');
            setCurrentMessageList(messages.reverse());
            // }
            //else dont update the message list
            // }
            // else { //else update the message list
            // console.log('in0');
            // setCurrentMessageList(messages.reverse());
            // }
        }
        else {
            setCurrentMessageList([]);
        }

    }, [chattingWith])

    useEffect(() => {
        const updateLastChatWithHandler = () => {
            setLastChatWith(chattingWith);
        }
        socket.on('updateLastChatWith', updateLastChatWithHandler);

        return () => {
            socket.off('updateLastChatWith', updateLastChatWithHandler);
        }
    }, [socket])
    const scrollToBottom = () => {
        if (messageListContainerRef.current) {
            messageListContainerRef.current.scrollTop = messageListContainerRef.current.scrollHeight;
        }
    };
    // this useEffect is for receiving message from a sender...it will be called from server side and on will catch it
    useEffect(() => {
        const handlePrivateChat = (newMessage) => {
            scrollToBottom();
            let shouldUpdateMessageList = true;
            // at start if no chat box selected
            if (chattingWith === '') {
                shouldUpdateMessageList = false; //to not update message list if no chat box selected
                chattingWith = newMessage.senderEmail;
            }
            if (chattingWith !== '') {
                const email1 = newMessage.senderEmail;
                const email2 = newMessage.receiverEmail;
                const otherEmail = chattingWith;

                //only set chat message if chat box selected
                if (shouldUpdateMessageList) {
                    setChatMessage(email1, email2, newMessage);
                }

                //only update message list if we are in chat of sender
                if (otherEmail === email1) {
                    //only set message list if chat box selected
                    if (shouldUpdateMessageList) {
                        setCurrentMessageList((prevMessages) => [newMessage, ...prevMessages]);
                    }
                    setChatPool((prevChatPool) => {
                        const [firstEmail, secondEmail] = email1 < email2 ? [email1, email2] : [email2, email1];
                        const updatedChatPool = { ...prevChatPool };
                        updatedChatPool[firstEmail] = {
                            ...updatedChatPool[firstEmail],
                            [secondEmail]: [newMessage],
                        };
                        return updatedChatPool;
                    });
                }

                let connectionPool = getConnections();
                let connections = connectionPool[newMessage.receiverEmail];
                if (connections && connections.hasOwnProperty(newMessage.senderEmail)) {//check if connection exists(have to do this because at start our properties are not set, they will be set in else )
                    if (chattingWith === newMessage.senderEmail) { //if current chatting window is same as sender email reset to 0
                        setFriendConnection(email1, email2, newMessage.content, newMessage.timestamp, 0);
                    }
                    else { //else increment it
                        setFriendConnection(email1, email2, newMessage.content, newMessage.timestamp, connections[newMessage.senderEmail][2] + 1);
                    }
                }
                else {
                    setFriendConnection(email1, email2, newMessage.content, newMessage.timestamp, 0);
                }

                //update side bar
                setUpdateChatSideBar(true);
                setLastChatWith(chattingWith);
            }
        };

        socket.on('privateChat', handlePrivateChat);

        return () => {
            socket.off('privateChat', handlePrivateChat);
        };
    }, [chattingWith, socket]);


    return (
        <>
            {
                currentMessageList.length > 0 ? (
                    <div className="messageListContainer" ref={messageListContainerRef}>
                        {currentMessageList.map((message, index) => (
                            <>
                                <MessageItem
                                    key={index}
                                    content={message.content}
                                    right={loggedInUser === message.senderEmail ? true : false}
                                    timestamp={message.timestamp}
                                />
                            </>
                        ))}
                    </div>
                ) : (
                    <div className="noMessages">
                        <h3> {chattingWith ? "No messages yet. Say hi!" : "Choose a chat to start."} </h3>
                    </div>
                )
            }
        </>
    );

}
