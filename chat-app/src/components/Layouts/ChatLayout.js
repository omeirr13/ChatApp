import { useContext, useEffect } from 'react';
import ChatArea from '../ChatArea/ChatArea';
import SideBarChat from '../SideBarChat/SideBarChat';
import { useNavigate } from 'react-router-dom';
import AllConnectionBar from '../AllUserBar/AllUserBar';
import RequestsBar from '../RequestsBar/RequestsBar';
import TopBar from '../TopBar/TopBar';
import UserInfo from '../UserInfo/UserInfo';
import ChatContext from '../../ChatContext';

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
            <div className="chatWrapper">
                <TopBar />
                <div className="chatContainer">
                    <SideBarChat />
                    <ChatArea />
                    <UserInfo />
                </div>
            </div>
        </div>
    );
};

export default ChatLayout;
