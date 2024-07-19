import ChatContext from "@/app/ChatContext";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useContext } from "react";

export default function ChatListItem(props) {
    //hooks
    //useLocalStorage
    const { getItems } = useLocalStorage('users');
    const getUsername = (email) => {
        const users = getItems();
        const user = users.find((user) => user.email == email);
        return user.username;
    }
    const username = getUsername(props.email);
    const time = props.time;
    const lastMessage = props.lastMessage;
    const messageCount = props.messageCount;

    const { chattingWith } = useContext(ChatContext);
    const isSelected = chattingWith === props.email;

    const getInitials = (name) => {
        const words = name.split(' ');
        const initials = words.map(word => word.charAt(0).toUpperCase()).join('');

        return initials;
    };

    return (
        <div>
            <div className={`flex justify-between pl-2 border-b border-gray-100 border-solid ${isSelected ? 'bg-[#fbf6f3]' : ''}`}>
                <div className="flex items-center text-white overflow-x-hidden overflow-y-hidden h-20 py-1 px-1">

                    <div className="w-10 h-10 rounded-3xl mr-2 flex justify-center items-center bg-[#e8b9b1]">
                        <span>{getInitials(username)}</span>
                    </div>
                    <div className="flex flex-col justify-end">
                        <p className="font-bold text-[#4d4d4d]">{username}</p>
                        <div className="flex justify-center">
                            <p className="text-sm text-[#958680]" >{lastMessage}</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center text-[#dfdad8]">
                    <span class="font-bold text-[10px] mr-2 mb-4">{time} PM</span>
                    {messageCount > 0 ? (
                        <span class="ml-3 bg-[#e8b9b1] rounded-s-md py-0 px-2">{messageCount}</span>
                    ) : (
                        <p></p>
                    )}
                </div>
            </div>
        </div>

    )
}
