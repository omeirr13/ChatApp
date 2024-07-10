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
    const { setChattingWith, updateChatSideBar, setUpdateChatSideBar, updateAllUserBar, setUpdateAllUserBar, updateRequestBar, setUpdateRequestBar, refreshChatSideBar, setRefreshChatSideBar, selectedSideBarButton, setRefreshAllUserBar, refreshAllUserBar } = useContext(ChatContext);
    const { socket } = useContext(SocketContext);

    const loggedInEmail = getEmail(); //of current logged in user
    const allConnections = getConnections() || {}; //get all connections

    const { getItems: getEmailToUsernameMapping } = useLocalStorage('emailToUsernameMapping');
    const emailToUsernameMap = getEmailToUsernameMapping();
    function sortByTimestamp(a, b) {
        const timeA = a[1][1];
        const timeB = b[1][1];

        // Compare timestamps (assuming they are in "HH:MM:SS" format)
        if (timeA > timeB) {
            return -1;
        }
        if (timeA < timeB) {
            return 1;
        }
        return 0;
    }
    //useEffect
    useEffect(() => {
        let myConnections = allConnections[loggedInEmail] || {};//filter all connections to get connection logged in user
        console.log('side bar use effect');
        myConnections = Object.entries(myConnections);
        myConnections.sort(sortByTimestamp);

        console.log(myConnections);
        setUsersWithTimestamps(myConnections);
    }, [updateChatSideBar, refreshChatSideBar])

    useEffect(() => {
        const handleUpdateChatSideBar = (otherSideEmail, emailToUpdate) => {
            setFriendConnection(otherSideEmail, emailToUpdate, '', '');
            removeUser(otherSideEmail);
            // setUpdateChatSideBar(true);
            if (selectedSideBarButton === 'chat') {
                setRefreshChatSideBar(!refreshChatSideBar);
            }
            if (selectedSideBarButton === 'all') {
                setRefreshAllUserBar(!refreshAllUserBar);
            }
            // setUpdateAllUserBar(false);
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
            setRefreshChatSideBar(prev => !prev);
        }
    }



    useEffect(() => {
        const fetchData = async () => {
            const allUsers = await getNotConnectedUsers();
            const filteredUsers = allUsers.filter(email => email !== loggedInEmail);
            setUsers(filteredUsers);
        };

        fetchData();
    }, [updateAllUserBar, refreshAllUserBar]);

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
            if (selectedSideBarButton === 'requests') {
                setUpdateRequestBar((prev) => !prev);
            }
        };

        socket.on('addRequest', handleAddRequest);

        return () => {
            socket.off('addRequest', handleAddRequest);
        };
    }, [socket, setPendingRequestList, loggedInEmail, setUpdateRequestBar]);


    const handleChange = (e) => {
        const query = e.target.value.toLowerCase();

        if (updateChatSideBar) {
            let myConnections = allConnections[loggedInEmail] || {};
            myConnections = Object.entries(myConnections);
            const filteredData = myConnections.filter(item => {
                const username = emailToUsernameMap[item[0].toLowerCase()];
                return username.includes(query);
            });

            filteredData.sort(sortByTimestamp);
            setUsersWithTimestamps(filteredData);
        }
        else if (updateAllUserBar) {
            const allUsers = getNotConnectedUsers();
            let filteredUsers = allUsers.filter(email => email !== loggedInEmail);

            filteredUsers = filteredUsers.filter(email => {
                const username = emailToUsernameMap[email];
                return username.includes(query);
            });
            setUsers(filteredUsers);
        }
        else {
            const allPendingRequests = getPendingRequestList() || {};
            const myPendingRequests = allPendingRequests[loggedInEmail] || [];

            const filteredRequests = myPendingRequests.filter(email => {
                const username = emailToUsernameMap[email];
                return username.includes(query);
            });
            setPendingRequests(filteredRequests);
        }
    };
    return (
        <div className="sideBar">
            <div className="sideBarContainer">
                <SideBarButtons />
                <div className="sideBarToolsContainer">
                    <input type="text" className="sideBarToolsInput" placeholder='Search Message' onChange={handleChange} ></input>
                    <SideBarTools />
                </div>


                {
                    updateChatSideBar && usersWithTimestamps.map((connection, index) => {
                        return (
                            <Link to="" key={index} onClick={() => handleClick(connection[0] || '', index)}>
                                <ChatListItem email={connection[0]} time={connection[1][1] || ''} lastMessage={connection[1][0]} messageCount={connection[1][2]} className={selectedItemIndex === index ? 'selectedListItem' : ''}
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
