import React from 'react'
import './ChatArea.css'
import MessageInput from '../MessageInput/MessageInput'
import MessageList from '../../MessageList/MessageList'
import ChatHeader from '../ChatHeader/ChatHeader'

export default function ChatArea() {
    return (
        <div className="chatArea">
            <ChatHeader />
            <MessageList />
            <MessageInput />
        </div>
    )
}
