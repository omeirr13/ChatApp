import { useContext } from 'react'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ChatContext from '@/app/ChatContext';
import Link from 'next/link';

export default function UserInfoHeader({ userInfo }) {
    const getInitials = (name) => {
        const words = name.split(' ');
        const initials = words.map(word => word.charAt(0).toUpperCase()).join('');
        return initials;
    };
    const { setUserWhoseInfoOpen } = useContext(ChatContext);

    const closeUserInfoSideBar = () => {
        setUserWhoseInfoOpen({});
    }
    return (
        <div className="flex flex-col items-center justify-center h-56 border-b border-gray-200 border-solid py-4">
            <Link href="" className="w-[100%] flex justify-end" onClick={(closeUserInfoSideBar)}>
                <div className="w-5 h-5 rounded-xl bg-[#a61e56] text-white flex justify-center items-center text-xs mr-4"><p>X</p></div>
            </Link>
            <div className="w-20 h-20 rounded-full mr-2 flex justify-center items-center bg-[#e8b9b1]">
                <span>{getInitials(userInfo.username)}</span>
            </div>
            <h4 className="my-[10px] text-[18px]">{userInfo.username}</h4>

            <div className="flex">
                <div className="w-10 h-10 rounded-full mr-[9px] flex justify-center items-center bg-[#f2f2f2]">
                    <span>
                        <FontAwesomeIcon icon={faPhone} className="headerImage"></FontAwesomeIcon>

                    </span>
                </div>
                <div className="w-10 h-10 rounded-full mr-[9px] flex justify-center items-center bg-[#ece7fe]">
                    <span>
                        <FontAwesomeIcon icon={faComment} className="headerImage"></FontAwesomeIcon>
                    </span>
                </div>
            </div>
        </div>
    )
}
