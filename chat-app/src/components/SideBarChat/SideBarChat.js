import './SideBarChat.css'
import { Link } from 'react-router-dom';
import ChatContext from '../../ChatContext';
import React, { useContext, useEffect, useState } from 'react'
import ChatListItem from '../ChatListItem/ChatListItem'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import SocketContext from '../../SocketContext';
import SideBarTools from '../SideBarTools/SideBarTools';
import SideBarButtons from '../SideBarButtons/SideBarButtons';
import AllUserItem from '../AllUseritem/AllUserItem';
import RequestItem from '../RequestItem/RequestItem';
import { connect } from 'socket.io-client';

export default function SideBarChat() {

    const { setPendingRequestList, getItem: getPendingRequestList } = useLocalStorage('pendingRequestList');
    const [pendingRequests, setPendingRequests] = useState([]);

    const [users, setUsers] = useState([]); // State to hold users
    const { getItems: getNotConnectedUsers } = useLocalStorage('notConnectedUsers');

    console.log('going to update side bar chat');
    //hooks
    //useState
    const [usersWithTimestamps, setUsersWithTimestamps] = useState([]);
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1); // Initialize with -1 or any index not in usersWithTimestamps

    //useLocalStorage
    const { getItem: getEmail } = useLocalStorage('currentLoggedIn');
    const { getItems: getConnections, setFriendConnection } = useLocalStorage('connection-pool');
    const { removeItem: removeUser } = useLocalStorage('notConnectedUsers');
    //useContext
    const { setChattingWith, updateChatSideBar, setUpdateChatSideBar, updateAllUserBar, setUpdateAllUserBar, updateRequestBar, setUpdateRequestBar } = useContext(ChatContext);
    const { socket } = useContext(SocketContext);

    const loggedInEmail = getEmail(); //of current logged in user
    const allConnections = getConnections() || {}; //get all connections


    //useEffect
    useEffect(() => {
        const myConnections = allConnections[loggedInEmail] || {};//filter all connections to get connection logged in user
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



    const handleClick = (inChatOf, index) => {
        setSelectedItemIndex(index);
        setChattingWith(inChatOf);
        let connectionPool = getConnections();
        let connections = connectionPool[loggedInEmail];
        if (connections && connections.hasOwnProperty(inChatOf)) {
            const message = connections[inChatOf][0];
            const timestamp = connections[inChatOf][1];
            setFriendConnection(loggedInEmail, inChatOf, message, timestamp, 0);
            setUpdateChatSideBar(true);
        }
    }



    useEffect(() => {
        const fetchData = async () => {
            const allUsers = await getNotConnectedUsers();
            const filteredUsers = allUsers.filter(email => email !== loggedInEmail);
            setUsers(filteredUsers);
        };

        fetchData();
    }, [updateAllUserBar]);

    useEffect(() => {
        const fetchPendingRequests = () => {
            const allPendingRequests = getPendingRequestList() || {};
            const myPendingRequests = allPendingRequests[loggedInEmail] || [];
            setPendingRequests(myPendingRequests);
        };

        fetchPendingRequests();

    }, [updateRequestBar]);

    useEffect(() => {
        const handleAddRequest = (requestFromEmail) => {
            console.log('Handling new request from:', requestFromEmail);
            setPendingRequestList(loggedInEmail, requestFromEmail);
            setUpdateRequestBar((prev) => !prev);
        };

        socket.on('addRequest', handleAddRequest);

        return () => {
            socket.off('addRequest', handleAddRequest);
        };
    }, [socket, setPendingRequestList, loggedInEmail, setUpdateRequestBar]);


    // const handleChange = (e) => {
    //     const query = e.target.value.toLowerCase();

    //     if (updateChatSideBar) {
    //         const myConnections = allConnections[loggedInEmail] || {};//filter all connections to get connection logged in user
    //         console.log(myConnections);
    //         const filteredConnections = Object.keys(myConnections)
    //             .filter(email => email.toLowerCase().includes(query));
    //         console.log(filteredConnections);
    //         let connectionInfoWithTimestamp = [];

    //         Object.keys(filteredConnections).forEach(connection => {
    //             const [message, timestamp, messageCount] = filteredConnections[connection];
    //             connectionInfoWithTimestamp.push({
    //                 email: connection,
    //                 timestamp: timestamp,
    //                 message: message,
    //                 messageCount: messageCount
    //             });

    //         })

    //         connectionInfoWithTimestamp.sort((a, b) => { //sort the list based on timestamps
    //             if (a.timestamp > b.timestamp) return -1;
    //             if (a.timestamp < b.timestamp) return 1;
    //             return 0;
    //         });

    //         setUsersWithTimestamps(connectionInfoWithTimestamp);
    //         console.log(connectionInfoWithTimestamp);
    //     }
    // }
    return (
        <div className="sideBar">
            <div className="sideBarContainer">
                <SideBarButtons />
                <div className="sideBarToolsContainer">
                    <input type="text" className="sideBarToolsInput" placeholder='Search Message' ></input>
                    <SideBarTools />
                </div>


                {
                    updateChatSideBar && usersWithTimestamps.map((connection, index) => {
                        return (
                            <Link to="" key={index} onClick={() => handleClick(connection.email || '', index)}>
                                <ChatListItem email={connection.email} time={connection.timestamp || ''} lastMessage={connection.message} messageCount={connection.messageCount} className={selectedItemIndex === index ? 'selectedListItem' : ''}
                                />
                            </Link>
                        )
                    })
                }

                {
                    updateAllUserBar &&
                    users.map((email, index) => (
                        <AllUserItem key={index} email={email} />
                    ))
                }

                {
                    updateRequestBar &&
                    pendingRequests.map((pendingRequest, index) => (
                        <RequestItem key={index} pendingRequestEmail={pendingRequest} />
                    ))

                }
            </div>
        </div>
    )
}
