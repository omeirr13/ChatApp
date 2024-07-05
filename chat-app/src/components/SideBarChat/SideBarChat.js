import './SideBarChat.css'
import { Link } from 'react-router-dom';
import ChatContext from '../../ChatContext';
import React, { useContext, useEffect, useState } from 'react'
import ChatListItem from '../ChatListItem/ChatListItem'
import { useLocalStorage } from '../../hooks/useLocalStorage'

export default function SideBarChat() {
    console.log('going to update side bar chat');
    //hooks
    //useState
    const [usersWithTimestamps, setUsersWithTimestamps] = useState([]);

    //useLocalStorage
    const { getItem: getEmail } = useLocalStorage('currentLoggedIn');
    const { getItems: getConnections, setFriendConnection } = useLocalStorage('connection-pool');
    const { getItems } = useLocalStorage('users');

    //useContext
    const { setChattingWith, updateChatSideBar, setUpdateChatSideBar } = useContext(ChatContext);


    const email = getEmail(); //of current logged in user
    const storedUsers = getItems(); // get all users
    const allConnections = getConnections() || {}; //get all connections
    const myConnections = allConnections[email] || {};//filter all connections to get connection logged in user


    //useEffect
    useEffect(() => {
        console.log('side bar use effect');
        let filteredUsers = storedUsers.filter(user => user.email !== email);

        let connectionInfoWithTimestamp = filteredUsers.map(user => { //get list of timestamps
            return {
                ...user,
                timestamp: myConnections[user.email] ? myConnections[user.email][1] : null,
                message: myConnections[user.email] ? myConnections[user.email][0] : null,
                messageCount: myConnections[user.email] ? myConnections[user.email][2] : null,

            };
        });
        connectionInfoWithTimestamp.sort((a, b) => { //sort the list based on timestamps
            if (a.timestamp > b.timestamp) return -1;
            if (a.timestamp < b.timestamp) return 1;
            return 0;
        });

        setUsersWithTimestamps(connectionInfoWithTimestamp);

        console.log(usersWithTimestamps);
    }, [updateChatSideBar])// dependency to update chat side bar based on latest message




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
