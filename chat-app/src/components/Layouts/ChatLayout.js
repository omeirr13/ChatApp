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
    console.log('rerender btich');
    //useEffect
    useEffect(() => {
        if (!localStorage.getItem('currentLoggedIn')) {
            return navigate('login');
        }

    }, [])
    const { userWhoseInfoOpen } = useContext(ChatContext);
    useEffect(() => {
    }, [userWhoseInfoOpen]);

    const isEmptyObject = Object.keys(userWhoseInfoOpen).length === 0 && userWhoseInfoOpen.constructor === Object;
    console.log(isEmptyObject);
    return (
        <div className="chatParentContainer">
            <div className="chatWrapper">
                <TopBar />
                <div className="chatContainer">
                    <SideBarChat />
                    <ChatArea />
                    {
                        !isEmptyObject &&
                        <UserInfo />
                    }
                </div>
            </div>
        </div>
    );
};

export default ChatLayout;
