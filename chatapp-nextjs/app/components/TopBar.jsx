'use client'

import ChatContext from "@/app/ChatContext";
import SocketContext from "@/app/SocketContext";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useContext } from "react";
import { useRouter } from 'next/navigation'; // Next.js 13+ useRouter
import Link from 'next/link';
import { signOut } from "next-auth/react"


export default function TopBar() {
    const { deleteItem, getItem } = useLocalStorage('currentLoggedIn');//to delete currentLoggedIn user email
    const { setChatNotOpen, setIsLoggedIn, setChattingWith, setLastChatWith } = useContext(ChatContext);

    const router = useRouter();
    const { socket } = useContext(SocketContext);
    const loggedInEmail = getItem();
    const handleLogout = async () => {
        console.log(loggedInEmail);
        deleteItem(); // Remove email from local storage
        setChatNotOpen(true);
        setIsLoggedIn(false);
        setChattingWith('');
        setLastChatWith('');
    
        // Emit logout event before signing out
        socket.emit('logout', { email: loggedInEmail });
    
        // Sign out and then redirect
        await signOut({ redirect: false }); // Prevent automatic redirection
        router.push("/auth/login"); // Explicitly redirect to login page
    };
    return (
        <div className="h-16 flex justify-between items-center border-b border-gray-100 border-solid">
            <h2 className="ml-10 text-xl font-bold" >{loggedInEmail}</h2>
            <div className="lastIcon w-[84px] h-[28px] rounded-2xl mr-3 bg-[#a61e56] flex items-center justify-center" onClick={handleLogout}>
                <Link href="" className="text-sm text-white">LOGOUT</Link>
            </div>
        </div >
    )
}
