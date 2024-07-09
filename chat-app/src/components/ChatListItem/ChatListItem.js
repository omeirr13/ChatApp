import React, { useContext } from 'react'
import './ChatListItem.css'
import { useLocalStorage } from '../../hooks/useLocalStorage';
import ChatContext from '../../ChatContext';

export default function ChatListItem(props) {
    //hooks
    //useLocalStorage
    const { getItems } = useLocalStorage('users');
    const getUsername = (email) => {
        const users = getItems();
        const user = users.find((user) => user.email == email);
        return user.username;
    }
    const username = getUsername(props.email);
    const time = props.time;
    const lastMessage = props.lastMessage;
    const messageCount = props.messageCount;

    const { chattingWith } = useContext(ChatContext);
    const isSelected = chattingWith === props.email;

    const getInitials = (name) => {
        const words = name.split(' ');
        const initials = words.map(word => word.charAt(0).toUpperCase()).join('');

        return initials;
    };

    return (
        <div>
            <div className={`chatListItemWrapper ${isSelected ? 'selectedChatListItem' : ''}`}>
                <div className="chatListItem">

                    <div className="chatListItemImage">
                        <span className="chatListItemImageText">{getInitials(username)}</span>
                    </div>
                    <div className="chatListItemNameCount">
                        <p className="chatListItemName">{username}</p>
                        {messageCount > 0 ? (
                            <span class="messageCount">{messageCount}</span>
                        ) : (
                            <p></p>
                        )}
                        <p className="chatListItemLastMessage">{lastMessage}</p>
                    </div>
                </div>
                <div className="chatListItemTime">
                    <span class="time">{time} PM</span>

                </div>

                {/* <div class="itemNameTime">
                    <div class="itemNameMessageCount">
                        <p className="item-name">{username}</p>
                        {messageCount > 0 ? (
                            <span class="messageCount">{messageCount}</span>
                        ) : (
                            <p></p>
                        )}
                    </div>
                    <span class="time">{time}</span>
                </div> */}
                {/* <p className="item-text">{lastMessage}</p> */}
            </div>
        </div>

    )
}
