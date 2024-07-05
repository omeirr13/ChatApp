import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import UserList from '../UserList/UserList';

export default function UserListLayout() {

    //hooks
    //useNavigate
    const navigate = useNavigate();

    //useEffect
    useEffect(() => {
        if (!localStorage.getItem('currentLoggedIn')) {
            return navigate('login');
        }
    }, [])


    return (
        <div className="userListParentContainer">
            <div className="userListContainer">
                <div className="loggedInUser">
                    {localStorage.getItem("currentLoggedIn") ? (
                        <p>Logged in as: {localStorage.getItem('currentLoggedIn')}</p>

                    ) : (<h1></h1>)}
                </div>
                <h1 className="whoChatHeading">Who do you want to chat with?</h1>
                <UserList />
            </div>

        </div>


    )
}
