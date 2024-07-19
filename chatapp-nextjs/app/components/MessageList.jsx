import ChatContext from "@/app/ChatContext";
import SocketContext from "@/app/SocketContext";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useContext, useEffect } from "react";
import MessageItem from "./MessageItem";

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
        messageListContainerRef,
        setRefreshChatSideBar
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
            setCurrentMessageList(messages.reverse());
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
        const handlePrivateChat = (newMessage, isPendingMessage) => {
            scrollToBottom();
            let shouldUpdateMessageList = true;
            // at start if no chat box selected
            //only add in db dont update message list
            console.log(chattingWith);
            if (chattingWith === '') {
                shouldUpdateMessageList = false; //to not update message list if no chat box selected
                chattingWith = newMessage.senderEmail;
            }
            if (chattingWith !== '') {
                const email1 = newMessage.senderEmail;
                const email2 = newMessage.receiverEmail;
                const otherEmail = chattingWith;
                console.log(email1, email2, otherEmail);
                //only set chat message if chat box selected
                // if (shouldUpdateMessageList) {
                console.log('ok', isPendingMessage);
                if (isPendingMessage) {
                    console.log('its a pending message');
                    setChatMessage(email1, email2, newMessage);
                    // setCurrentMessageList((prevMessages) => [newMessage, ...prevMessages]);
                }
                // }
                else {

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
                console.log('going to change it !');
                setRefreshChatSideBar(prev => !prev);
                setLastChatWith(chattingWith);
                setUpdateChatSideBar(true);
            }
        };

        socket.on('privateChat', handlePrivateChat);

        return () => {
            socket.off('privateChat', handlePrivateChat);
        };
    }, [chattingWith, socket]);


    const { userWhoseInfoOpen } = useContext(ChatContext);
    const isEmptyObject = Object.keys(userWhoseInfoOpen).length === 0 && userWhoseInfoOpen.constructor === Object;

    return (
        <>
            {
                currentMessageList.length > 0 ? (
                    <>
                        <div className="h-[69vh] flex flex-col-reverse justify-start overflow-y-auto break-words" ref={messageListContainerRef}>
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
                            <div className="flex justify-center relative">
                                <div className="my-[15px] mx-0 h-5 w-36 bg-[#fcedf2] text-[#e77ba6] text-xs flex justify-center items-center font-extrabold rounded-lg p-1">
                                    <p>JULY 10, 2024</p>
                                </div>
                                <span className={`absolute h-[1px] bg-[#e5dada] w-[316px] top-7 left-4 ${isEmptyObject ? 'w-[470px]' : ''}`}></span>
                                <span className={`absolute h-[1px] bg-[#e5dada] w-[316px] top-7 left-4 ${isEmptyObject ? 'w-[28rem] left-[664px]' : 'left-[32rem]'}`}></span>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="text-white flex justify-center items-center h-[69vh]">
                        <h3> {chattingWith ? "No messages yet. Say hi!" : "Choose a chat to start."} </h3>
                    </div>
                )
            }
        </>
    );

}
