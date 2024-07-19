import ChatContext from "@/app/ChatContext";
import SocketContext from "@/app/SocketContext";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useContext } from "react";

export default function AllUserItem({ email }) {

    //hooks
    //useContext
    const { socket } = useContext(SocketContext);

    
    const { setRefreshAllUserBar, refreshAllUserBar } = useContext(ChatContext);
    //useLocalStorage
    const { getItem: getEmail } = useLocalStorage('currentLoggedIn');
    const { removeItem: removeUser } = useLocalStorage('notConnectedUsers');

    const loggedInUserEmail = getEmail();

    const { getItems: getEmailToUsernameMapping } = useLocalStorage('emailToUsernameMapping');
    const emailToUsernameMap = getEmailToUsernameMapping();

    const handleClick = () => {
        removeUser(email);
        setRefreshAllUserBar(!refreshAllUserBar);
        socket.emit('sendRequest', email, loggedInUserEmail);
    };
    const getInitials = (name) => {
        const words = name.split(' ');
        const initials = words.map(word => word.charAt(0).toUpperCase()).join('');

        return initials;
    };

    return (
        <div>
            <div className="flex justify-between pl-2 border-b border-gray-100 border-solid">
                <div className="w-[100%] flex items-center text-white overflow-x-hidden overflow-y-hidden h-20 py-1 px-1 rounded-md">
                    <div className="w-[100%] flex justify-between">
                        <div className="flex items-center">
                            <div className="w-10 h-10 rounded-3xl mr-2 flex justify-center items-center bg-[#e8b9b1]">
                                <span>{getInitials(emailToUsernameMap[email])}</span>
                            </div>
                            <p className="text-[#4d4d4d] text-base font-bold">{emailToUsernameMap[email]}</p>
                        </div>
                    <button type="button" onClick={handleClick} className="bg-[#843cff] h-9 w-24 rounded-[34px]">Send Req</button>
                    </div>
                </div>

                {/* <p className="item-text">{lastMessage}</p> */}
            </div>
        </div>

    )
}
