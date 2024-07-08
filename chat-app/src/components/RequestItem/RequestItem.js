import React, { useContext } from 'react';
import './RequestItem.css';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import ChatContext from '../../ChatContext';
import SocketContext from '../../SocketContext';

export default function RequestItem({ pendingRequestEmail }) {
    //hooks
    //useLocalStorage
    const { setFriendConnection } = useLocalStorage('connection-pool');
    const { getItem: getEmail } = useLocalStorage('currentLoggedIn');
    const { removePendingRequest } = useLocalStorage('pendingRequestList');
    const { removeItem: removeUser } = useLocalStorage('notConnectedUsers');

    //useContext
    const { setUpdateChatSideBar, updateChatSideBar, setUpdateRequestBar, updateRequestBar, updateAllUserBar, setUpdateAllUserBar } = useContext(ChatContext);
    const { socket } = useContext(SocketContext);

    const email = getEmail();
    const acceptHandler = () => {
        setFriendConnection(email, pendingRequestEmail, '', '');
        setUpdateChatSideBar(!updateChatSideBar);
        removePendingRequest(email, pendingRequestEmail);
        setUpdateRequestBar(!updateRequestBar);
        removeUser(pendingRequestEmail);
        setUpdateAllUserBar(!updateAllUserBar);
        socket.emit('updateChatSideBar', email, pendingRequestEmail);
    };

    const rejectHandler = () => {
        removePendingRequest(email, pendingRequestEmail);
        setUpdateRequestBar(!updateRequestBar);

    }

    return (
        <div>
            <div className="userItem">
                <div className="itemNameTime">
                    <div className="itemNameMessageCount">
                        <p className="item-name">{pendingRequestEmail}</p>
                    </div>
                </div>
                <div className="requestBtns">
                    <button type="button" className="requestBtn" onClick={acceptHandler}>Accept</button>
                    <button type="button" className="requestBtn rejectBtn" onClick={rejectHandler}>Reject</button>
                </div>
            </div>
        </div>
    );
}
