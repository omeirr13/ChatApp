import { useEffect } from 'react';
import ChatArea from '../ChatArea/ChatArea';
import SideBarChat from '../SideBarChat/SideBarChat';
import { useNavigate } from 'react-router-dom';
import AllConnectionBar from '../AllUserBar/AllUserBar';
import RequestsBar from '../RequestsBar/RequestsBar';


const ChatLayout = () => {
    //hooks
    //useNavigate
    const navigate = useNavigate();

    //useEffect
    useEffect(() => {
        if (!localStorage.getItem('currentLoggedIn')) {
            return navigate('login');
        }

    }, [])
    return (
        <div className="chatParentContainer">
            <AllConnectionBar />
            <div className="chatContainer">
                <SideBarChat />
                <ChatArea />
            </div>
            <RequestsBar />

        </div>
    );
};

export default ChatLayout;
