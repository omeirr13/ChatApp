import ChatContext from "@/app/ChatContext";
import { useContext } from "react";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

export default function ChatArea() {
    const { userWhoseInfoOpen } = useContext(ChatContext);
    const isEmptyObject = Object.keys(userWhoseInfoOpen).length === 0 && userWhoseInfoOpen.constructor === Object;

    return (
        <div className={`relative w-[53rem] ${isEmptyObject ? 'w-[72rem]' : ''}`}>
            <ChatHeader />
            <MessageList />
            <MessageInput />
        </div>
    )
}
