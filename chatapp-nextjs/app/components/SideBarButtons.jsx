import ChatContext from "@/app/ChatContext";
import Link from "next/link";
import { useContext } from "react";

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
        <div className="sideBarButtonsContainer grid grid-cols-3 border-b border-t border-gray-100 border-solid ">
            <Link href="" className={`py-2 px-3 flex justify-center items-center font-bold ${selectedSideBarButton === 'chat' ? 'active' : ''} `} onClick={showChat}>
                <p className={`text-gray-500 ${selectedSideBarButton === 'chat' ? 'text-[#efa6c3]' : ''} `} >Chat</p>
            </Link>
            <Link href="" className={`py-2 px-3 flex justify-center items-center font-bold ${selectedSideBarButton === 'all' ? 'active' : ''} `} onClick={showAll}>
                <p className={`text-gray-500 ${selectedSideBarButton === 'all' ? 'text-[#efa6c3]' : ''} `} >All</p>
            </Link>
            <Link href="" className={`py-2 px-3 flex justify-center items-center font-bold ${selectedSideBarButton === 'requests' ? 'active' : ''} `} onClick={showRequests}>
                <p className={`text-gray-500 ${selectedSideBarButton === 'requests' ? 'text-[#efa6c3]' : ''} `} >Requests</p>
            </Link>
        </div >
    )
}