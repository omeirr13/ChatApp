'use client'
import { useRouter } from 'next/navigation'; // Next.js 13+ useRouter
import { useContext, useEffect } from 'react'
import ChatContext from '../ChatContext';
import TopBar from '../components/TopBar';
import SideBarChat from '../components/SideBarChat';
import ChatArea from '../components/ChatArea';
import UserInfo from '../components/UserInfo';
const ChatLayout = () => {
    //hooks
    //useNavigate
    const router = useRouter();
    //useEffect
    useEffect(() => {
        if (!localStorage.getItem('currentLoggedIn')) {
            router.push('/auth/login')
        }

    }, [])
    const { userWhoseInfoOpen } = useContext(ChatContext);
    useEffect(() => {
    }, [userWhoseInfoOpen]);

    const isEmptyObject = Object.keys(userWhoseInfoOpen).length === 0 && userWhoseInfoOpen.constructor === Object;
    console.log(isEmptyObject);
    return (
        <div className="h-[100vh] bg-white flex justify-center ">
            <div>
                <TopBar />
                <div className="w-[90rem] h-[90vh] bg-white flex">
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
