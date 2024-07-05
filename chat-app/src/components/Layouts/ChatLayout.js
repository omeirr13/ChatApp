import ChatArea from '../ChatArea/ChatArea';
import SideBarChat from '../SideBarChat/SideBarChat';


const ChatLayout = () => {
    return (
        <div className="chatParentContainer">
            <div className="chatContainer">
                <SideBarChat />
                <ChatArea />
            </div>
        </div>
    );
};

export default ChatLayout;
