import { useContext } from 'react'
import './SideBarButtons.css'
import ChatContext from '../../ChatContext'
import { Link } from 'react-router-dom';
export default function SideBarButtons() {
    const { setUpdateAllUserBar, setUpdateChatSideBar, setUpdateRequestBar } = useContext(ChatContext);

    const showChat = () => {
        console.log('showChat');
        setUpdateAllUserBar(false);
        setUpdateChatSideBar(true);
        setUpdateRequestBar(false);
    }
    const showAll = () => {
        console.log('showAll');
        setUpdateAllUserBar(true);
        setUpdateChatSideBar(false);
        setUpdateRequestBar(false);
    }

    const showRequests = () => {
        console.log('showRequests');
        setUpdateAllUserBar(false);
        setUpdateChatSideBar(false);
        setUpdateRequestBar(true);
    }
    return (
        <div className="sideBarButtonsContainer">
            <Link class="sideBarButtonItem" onClick={showChat}>
                <p>Chat</p>
            </Link>
            <Link class="sideBarButtonItem" onClick={showAll}>
                <p>All</p>
            </Link>
            <Link class="sideBarButtonItem" onClick={showRequests}>
                <p>Requests</p>
            </Link>
        </div >
    )
}
