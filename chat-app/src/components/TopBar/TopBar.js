
import React, { useContext } from 'react'
import './TopBar.css'
import { Link, useNavigate } from 'react-router-dom';

import PhoneImage from '../../images/telephone.png'
import { useLocalStorage } from '../../hooks/useLocalStorage';
import SocketContext from '../../SocketContext';
import ChatContext from '../../ChatContext';

export default function TopBar() {
    const { deleteItem, getItem } = useLocalStorage('currentLoggedIn');//to delete currentLoggedIn user email
    const { setChatNotOpen, setIsLoggedIn } = useContext(ChatContext);

    const navigate = useNavigate();
    const { socket } = useContext(SocketContext);
    const loggedInEmail = getItem();
    const handleLogout = () => {
        deleteItem();
        setChatNotOpen(true);
        navigate("/login");
        setIsLoggedIn(false);
        socket.emit('logout', { email: loggedInEmail });
    }
    return (
        <div className="topBarContainer">
            <h2 className="topBarHeading">{loggedInEmail}</h2>
            <div className="topBarMenu">
                <div className="topBarDialer">
                    <img src={PhoneImage} className="topBarPhoneImage" />
                    <span className="topBarPhoneText">DIALER</span>
                </div>
                <div className="topBarIcons">
                    <div className="topBarIcon">

                    </div>
                    <div className="topBarIcon">

                    </div>
                    <div className="topBarIcon lastIcon" onClick={handleLogout}>
                        <Link className="iconText">LOGOUT</Link>
                    </div>
                </div>
            </div>
        </div >
    )
}
