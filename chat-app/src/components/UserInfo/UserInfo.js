import React, { useContext } from 'react'
import './UserInfo.css'
import UserInfoHeader from '../UserInfoHeader/UserInfoHeader'
import UserInfoContact from '../UserInfoContact/UserInfoContact'
import ChatContext from '../../ChatContext';

export default function UserInfo() {
    const { userWhoseInfoOpen,
        setUserWhoseInfoOpen } = useContext(ChatContext);

    const isEmptyObject = Object.keys(userWhoseInfoOpen).length === 0 && userWhoseInfoOpen.constructor === Object;


    return (
        <div className="userInfoContainer">
            {
                !isEmptyObject && (
                    <>
                        < UserInfoHeader userInfo={userWhoseInfoOpen} />
                        <UserInfoContact userInfo={userWhoseInfoOpen} />
                    </>
                )}
        </div>
    )
}
