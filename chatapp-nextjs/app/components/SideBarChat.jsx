'use client'
import ChatContext from "@/app/ChatContext";
import SocketContext from "@/app/SocketContext";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useContext, useEffect, useState } from "react";
import Link from 'next/link'
import SideBarButtons from "./SideBarButtons";
import ChatListItem from "./ChatLisItem";
import AllUserItem from "./AllUserItems";
import RequestItem from "./RequestItem";

export default function SideBarChat() {

    const { setPendingRequestList, getItem: getPendingRequestList } = useLocalStorage('pendingRequestList');
    const [pendingRequests, setPendingRequests] = useState([]);
    const [users, setUsers] = useState([]); // State to hold users

    console.log('going to update side bar chat');

    //hooks
    //useState
    const [usersWithTimestamps, setUsersWithTimestamps] = useState([]);
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1); // Initialize with -1 or any index not in usersWithTimestamps

    //useLocalStorage
    const { getItem: getEmail } = useLocalStorage('currentLoggedIn');
    const { getItems: getConnections, setFriendConnection } = useLocalStorage('connection-pool');
    const { removeItem: removeUser } = useLocalStorage('notConnectedUsers');
    const { getItems: getNotConnectedUsers, setItems: setNotConnectedUsers } = useLocalStorage('notConnectedUsers');

    //useContext
    const { setChattingWith, updateChatSideBar, setUpdateChatSideBar, updateAllUserBar, setUpdateAllUserBar, updateRequestBar, setUpdateRequestBar, refreshChatSideBar, setRefreshChatSideBar, selectedSideBarButton, setRefreshAllUserBar, refreshAllUserBar, refreshRequestBar,
        setRefreshRequestBar } = useContext(ChatContext);
    
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
            console.log('sure thing');
            const allPendingRequests = getPendingRequestList() || {};
            console.log(allPendingRequests);
            const myPendingRequests = allPendingRequests[loggedInEmail] || [];
            console.log(myPendingRequests);
            setPendingRequests(myPendingRequests);

        };

        fetchPendingRequests();

    }, [updateRequestBar, refreshRequestBar]);

    useEffect(() => {
        const handleAddRequest = (requestFromEmail) => {
            console.log('Handling new request from:', requestFromEmail);
            setPendingRequestList(loggedInEmail, requestFromEmail);
            if (selectedSideBarButton === 'requests') {
                setRefreshRequestBar(prev => !prev);
                setUpdateRequestBar(true);
                setUpdateAllUserBar(false);
                setUpdateChatSideBar(false);
            }
        };

        socket.on('addRequest', handleAddRequest);

        return () => {
            socket.off('addRequest', handleAddRequest);
        };
    }, [socket, setPendingRequestList, loggedInEmail, setUpdateRequestBar]);

    useEffect(() => {
        const handleReject = (emailToAdd) => {
            console.log('got rejected by', emailToAdd);
            setNotConnectedUsers(emailToAdd);
            if (selectedSideBarButton === 'all') {

                setRefreshAllUserBar(prev => !prev);
            }
        };

        socket.on('handleReject', handleReject);

        return () => {
            socket.off('handleReject', handleReject);
        };
    }, [socket]);

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
        <div className="w-[18rem] border-r border-gray-100 border-solid overflow-y-auto">
            <div>
                <SideBarButtons />
                <div className="">
                    <input
                        type="text"
                        className="w-[255px] h-[2rem] rounded-lg ml-[7px] pl-[10px] pr-[20px] py-[12px] my-[1rem] border border-gray-200 border-solid"
                        placeholder="Search Message"
                        onChange={handleChange}
                    />

                </div>



                {
                    updateChatSideBar && usersWithTimestamps.map((connection, index) => {
                        return (
                            <Link href="" key={index} onClick={() => handleClick(connection[0] || '', index)}>
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
