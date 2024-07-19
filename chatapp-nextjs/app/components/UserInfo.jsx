import ChatContext from '@/app/ChatContext';
import { useContext } from 'react'
import UserInfoHeader from './UserInfoHeader';
import UserInfoContact from './UserInfoContact';

export default function UserInfo() {
    const { userWhoseInfoOpen,
        setUserWhoseInfoOpen } = useContext(ChatContext);

    const isEmptyObject = Object.keys(userWhoseInfoOpen).length === 0 && userWhoseInfoOpen.constructor === Object;


    return (
        <div className="bg-white w-72 overflow-y-auto border-b border-l border-gray-200 border-solid ">
            {
                !isEmptyObject && (
                    <>
                        <UserInfoHeader userInfo={userWhoseInfoOpen} />
                        <UserInfoContact userInfo={userWhoseInfoOpen} />
                    </>
                )}
        </div>
    )
}
