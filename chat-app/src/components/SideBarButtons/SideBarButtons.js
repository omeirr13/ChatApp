import { useContext, useState } from 'react'
import './SideBarButtons.css'
import ChatContext from '../../ChatContext'
import { Link } from 'react-router-dom';
export default function SideBarButtons() {
    const { setUpdateAllUserBar, setUpdateChatSideBar, setUpdateRequestBar, selectedSideBarButton, setSelectedSideBarButton } = useContext(ChatContext);
    const showChat = () => {
        console.log('showChat');
        setUpdateAllUserBar(false);
        setUpdateChatSideBar(true);
        setUpdateRequestBar(false);
        setSelectedSideBarButton('chat');
    }
    const showAll = () => {
        console.log('showAll');
        setUpdateAllUserBar(true);
        setUpdateChatSideBar(false);
        setUpdateRequestBar(false);
        setSelectedSideBarButton('all');
    }

    const showRequests = () => {
        console.log('showRequests');
        setUpdateAllUserBar(false);
        setUpdateChatSideBar(false);
        setUpdateRequestBar(true);
        setSelectedSideBarButton('requests');
    }
    return (
        <div className="sideBarButtonsContainer">
            <Link className={`sideBarButtonItem ${selectedSideBarButton === 'chat' ? 'active' : ''} `} onClick={showChat}>
                <p className={`${selectedSideBarButton === 'chat' ? 'activeText' : ''} `} >Chat</p>
            </Link>
            <Link className={`sideBarButtonItem ${selectedSideBarButton === 'all' ? 'active' : ''} `} onClick={showAll}>
                <p className={`${selectedSideBarButton === 'all' ? 'activeText' : ''} `} >All</p>
            </Link>
            <Link className={`sideBarButtonItem ${selectedSideBarButton === 'requests' ? 'active' : ''} `} onClick={showRequests}>
                <p className={`${selectedSideBarButton === 'requests' ? 'activeText' : ''} `} >Requests</p>
            </Link>
        </div >
    )
}