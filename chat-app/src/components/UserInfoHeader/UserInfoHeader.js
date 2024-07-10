import React, { useContext } from 'react'
import './UserInfoHeader.css'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import ChatContext from '../../ChatContext';

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
        <div className="userInfoHeaderContainer">
            <Link className="closeUserInfoButton" onClick={(closeUserInfoSideBar)}>
                <div className="closeUserInfo"><p>X</p></div>
            </Link>
            <div className="userProfileImage">
                <span className="userProfileImageText">{getInitials(userInfo.username)}</span>
            </div>
            <h4 className="userProfileName">{userInfo.username}</h4>

            <div className="userInfoContactButtons">
                <div className="userInfoContactButton userInfoCallButton">
                    <span className="userProfileImageText">
                        <FontAwesomeIcon icon={faPhone} className="headerImage"></FontAwesomeIcon>

                    </span>
                </div>
                <div className="userInfoContactButton userInfoMessageButton">
                    <span className="userProfileImageText">
                        <FontAwesomeIcon icon={faComment} className="headerImage"></FontAwesomeIcon>

                    </span>
                </div>
            </div>
        </div>
    )
}
