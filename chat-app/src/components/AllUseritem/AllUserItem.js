import React, { useContext } from 'react';
import './AllUserItem.css';
import SocketContext from '../../SocketContext';
import ChatContext from '../../ChatContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export default function AllUserItem({ email }) {

    //hooks
    //useContext
    const { socket } = useContext(SocketContext);

    //useLocalStorage
    const { getItem: getEmail } = useLocalStorage('currentLoggedIn');

    const loggedInUserEmail = getEmail();

    const handleClick = () => {
        socket.emit('sendRequest', email, loggedInUserEmail);
    };

    return (
        <div>
            <div className="userItem">
                <div className="itemNameTime">
                    <div className="itemNameMessageCount">
                        <p className="item-name">{email}</p>
                        <button type="button" onClick={handleClick}>Send Req</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
