import React from 'react'
import './UserInfoHeader.css'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function UserInfoHeader({ userInfo }) {
    const getInitials = (name) => {
        const words = name.split(' ');
        const initials = words.map(word => word.charAt(0).toUpperCase()).join('');

        return initials;
    };
    return (
        <div className="userInfoHeaderContainer">
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
