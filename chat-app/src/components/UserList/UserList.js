import React, { useMemo } from 'react';
import './UserList.css';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Link } from 'react-router-dom';

export default function UserList() {
    // hooks
    // useLocalStorage
    const { getItems } = useLocalStorage('users');
    const { getItem } = useLocalStorage('currentLoggedIn');
    const { setFriendConnection, getItems: getConnections } = useLocalStorage('connection-pool');

    const email = getItem(); //of current logged in user

    const addFriend = (other_email, message, timestamp) => { //
        setFriendConnection(email, other_email, message, timestamp);
    }
    let storedUsers = getItems() || [];
    const allConnections = getConnections() || {};
    const myConnections = allConnections[email] || {};


    const usersWithTimestamps = useMemo(() => {
        let usersWithTimestamps = storedUsers.map(user => ({
            ...user,
            timestamp: myConnections[user.email] ? myConnections[user.email][1] : null
        }));

        usersWithTimestamps.sort((a, b) => {
            if (a.timestamp > b.timestamp) return -1;
            if (a.timestamp < b.timestamp) return 1;
            return 0;
        });

        return usersWithTimestamps;
    }, [storedUsers, myConnections]);


    return (
        <div className="user-container">
            {usersWithTimestamps.map((user, index) => (
                <Link key={index} to="/chat" onClick={() => addFriend(user.email, '', new Date(25400000000000).toISOString())}>
                    <div className="user-card">
                        <h3>{user.username}</h3>
                        <p>{user.email}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
