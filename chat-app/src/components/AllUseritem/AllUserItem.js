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

    const { getItems: getEmailToUsernameMapping } = useLocalStorage('emailToUsernameMapping');
    const emailToUsernameMap = getEmailToUsernameMapping();

    const handleClick = () => {
        socket.emit('sendRequest', email, loggedInUserEmail);
    };
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
                            <span className="chatListItemImageText">{getInitials(emailToUsernameMap[email])}</span>
                        </div>
                        <p className="allUserItemName">{emailToUsernameMap[email]}</p>
                    </div>
                    <button type="button" onClick={handleClick} className="sendRequestButton">Send Req</button>
                </div>

                {/* <p className="item-text">{lastMessage}</p> */}
            </div>
        </div>

    )
}
