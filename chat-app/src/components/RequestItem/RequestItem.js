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
    const { setUpdateChatSideBar, updateChatSideBar, setUpdateRequestBar, updateRequestBar, updateAllUserBar, setUpdateAllUserBar, setRefreshChatSideBar, selectedSideBarButton } = useContext(ChatContext);
    const { socket } = useContext(SocketContext);
    const { getItems: getEmailToUsernameMapping } = useLocalStorage('emailToUsernameMapping');
    const emailToUsernameMap = getEmailToUsernameMapping();

    const email = getEmail();
    const acceptHandler = () => {
        setFriendConnection(email, pendingRequestEmail, '', '');
        if (selectedSideBarButton === 'chat') {
            setRefreshChatSideBar(prev => !prev);
        }
        removePendingRequest(email, pendingRequestEmail);
        setUpdateRequestBar(!updateRequestBar);
        removeUser(pendingRequestEmail);
        socket.emit('updateChatSideBar', email, pendingRequestEmail);
    };

    const rejectHandler = () => {
        removePendingRequest(email, pendingRequestEmail);
        setUpdateRequestBar(!updateRequestBar);

    }
    const getInitials = (name) => {
        const words = name.split(' ');
        const initials = words.map(word => word.charAt(0).toUpperCase()).join('');

        return initials;
    };

    return (
        <div>
            <div className="chatListItemWrapper">
                <div className="allUserListItem">
                    <div className="allUserListItemInfo">
                        <div className="chatListItemImage">
                            <span className="chatListItemImageText">{getInitials(emailToUsernameMap[pendingRequestEmail])}</span>
                        </div>
                        <p className="allUserItemName">{emailToUsernameMap[pendingRequestEmail]}</p>
                    </div>
                    <div className="requestButtons">
                        <button type="button" onClick={acceptHandler} className="requestResponseButton acceptRequestButton">Accept</button>
                        <button type="button" onClick={rejectHandler} className="requestResponseButton rejectRequestButton">Reject</button>
                    </div>
                </div>

            </div>
        </div>

    );
}
