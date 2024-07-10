import React, { useContext } from 'react'
import './ChatArea.css'
import MessageInput from '../MessageInput/MessageInput'
import MessageList from '../../MessageList/MessageList'
import ChatHeader from '../ChatHeader/ChatHeader'
import ChatContext from '../../ChatContext'

export default function ChatArea() {
    const { userWhoseInfoOpen } = useContext(ChatContext);
    const isEmptyObject = Object.keys(userWhoseInfoOpen).length === 0 && userWhoseInfoOpen.constructor === Object;

    return (
        <div className={`chatArea ${isEmptyObject ? 'fullWidth' : ''}`}>
            <ChatHeader />
            <MessageList />
            <MessageInput />
        </div>
    )
}
