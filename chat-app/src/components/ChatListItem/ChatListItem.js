import React from 'react'
import './ChatListItem.css'
import { useLocalStorage } from '../../hooks/useLocalStorage';

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

    return (
        <div>
            <div className="item">
                <div class="itemNameTime">
                    <div class="itemNameMessageCount">
                        <p className="item-name">{username}</p>
                        {messageCount > 0 ? (
                            <span class="messageCount">{messageCount}</span>
                        ) : (
                            <p></p>
                        )}
                    </div>
                    <span class="time">{time}</span>
                </div>
                <p className="item-text">{lastMessage}</p>
            </div>
        </div>

    )
}
