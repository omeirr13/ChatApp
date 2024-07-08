import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import './AllUserBar.css'
import AllUserItem from '../AllUseritem/AllUserItem'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import ChatContext from '../../ChatContext';

export default function AllConnectionBar() {
    //hooks
    //useState
    const [users, setUsers] = useState([]); // State to hold users

    //useContext
    const { updateAllUserBar } = useContext(ChatContext);

    //useLocalStorage
    const { getItems } = useLocalStorage('notConnectedUsers');
    const { getItem: getEmail } = useLocalStorage('currentLoggedIn');
    const loggedInEmail = getEmail();

    //useEffect
    useEffect(() => {
        const fetchData = async () => {
            const allUsers = await getItems();
            const filteredUsers = allUsers.filter(email => email !== loggedInEmail);
            setUsers(filteredUsers);
        };

        fetchData();
    }, [updateAllUserBar]);


    return (
        <div className="connectionBar">
            <div className="allUserHeading">
                <h1>All Users</h1>
            </div>
            <div className="container">
                {
                    users.map(email => (
                        <AllUserItem key={email} email={email} /> // Use email as key
                    ))
                }
            </div>
        </div>
    );
}