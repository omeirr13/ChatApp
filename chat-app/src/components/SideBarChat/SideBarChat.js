import './SideBarChat.css'
import { Link } from 'react-router-dom';
import ChatContext from '../../ChatContext';
import React, { useContext, useEffect, useState } from 'react'
import ChatListItem from '../ChatListItem/ChatListItem'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import SocketContext from '../../SocketContext';

export default function SideBarChat() {
    console.log('going to update side bar chat');
    //hooks
    //useState
    const [usersWithTimestamps, setUsersWithTimestamps] = useState([]);

    //useLocalStorage
    const { getItem: getEmail } = useLocalStorage('currentLoggedIn');
    const { getItems: getConnections, setFriendConnection } = useLocalStorage('connection-pool');
    const { removeItem: removeUser } = useLocalStorage('notConnectedUsers');
    //useContext
    const { setChattingWith, updateChatSideBar, setUpdateChatSideBar, updateAllUserBar, setUpdateAllUserBar } = useContext(ChatContext);
    const { socket } = useContext(SocketContext);

    const email = getEmail(); //of current logged in user
    const allConnections = getConnections() || {}; //get all connections


    //useEffect
    useEffect(() => {
        const myConnections = allConnections[email] || {};//filter all connections to get connection logged in user
        console.log('side bar use effect');
        // let filteredUsers = storedUsers.filter(user => user.email !== email);

        let connectionInfoWithTimestamp = [];

        Object.keys(myConnections).forEach(connection => {
            const [message, timestamp, messageCount] = myConnections[connection];
            connectionInfoWithTimestamp.push({
                email: connection,
                timestamp: timestamp,
                message: message,
                messageCount: messageCount
            });

        })

        connectionInfoWithTimestamp.sort((a, b) => { //sort the list based on timestamps
            if (a.timestamp > b.timestamp) return -1;
            if (a.timestamp < b.timestamp) return 1;
            return 0;
        });

        setUsersWithTimestamps(connectionInfoWithTimestamp);

        console.log(usersWithTimestamps);
    }, [updateChatSideBar])// dependency to update chat side bar based on latest message

    useEffect(() => {
        const handleUpdateChatSideBar = (otherSideEmail, emailToUpdate) => {
            setFriendConnection(otherSideEmail, emailToUpdate, '', '');
            setUpdateChatSideBar(!updateChatSideBar);
            removeUser(otherSideEmail);
            setUpdateAllUserBar(!updateAllUserBar);
        }
        socket.on('updateChatSideBar', handleUpdateChatSideBar);

        return () => {
            socket.off('updateChatSideBar', handleUpdateChatSideBar);
        };
    }, [socket])



    const handleClick = (inChatOf) => {
        setChattingWith(inChatOf);
        let connectionPool = getConnections();
        let connections = connectionPool[email];
        if (connections && connections.hasOwnProperty(inChatOf)) {
            const message = connections[inChatOf][0];
            const timestamp = connections[inChatOf][1];
            setFriendConnection(email, inChatOf, message, timestamp, 0);
            setUpdateChatSideBar(!updateChatSideBar);
        }
    }


    return (
        <div className="sideBar">
            <div className="container">
                {

                    usersWithTimestamps.map((connection, index) => {
                        return (
                            <Link to="" key={index} onClick={() => handleClick(connection.email || '')}>
                                <ChatListItem email={connection.email} time={connection.timestamp || ''} lastMessage={connection.message} messageCount={connection.messageCount} />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
