import './RequestsBar.css';
import ChatContext from '../../ChatContext';
import SocketContext from '../../SocketContext';
import RequestItem from '../RequestItem/RequestItem';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import React, { useContext, useEffect, useState } from 'react';

export default function RequestsBar() {
    const { getItem: getEmail } = useLocalStorage('currentLoggedIn');
    const loggedInUser = getEmail();
    const { socket } = useContext(SocketContext);
    const { setPendingRequestList, getItem } = useLocalStorage('pendingRequestList');
    const { updateRequestBar, setUpdateRequestBar } = useContext(ChatContext);
    const [pendingRequests, setPendingRequests] = useState([]);

    //hooks
    //useEffects
    
    return (
        <div className="connectionBar">
            <div className="requestHeading">
                <center><h1>Pending Requests</h1></center>
            </div>
            <div className="container">
                {pendingRequests.map((pendingRequest, index) => (
                    <RequestItem key={index} pendingRequestEmail={pendingRequest} />
                ))}
            </div>
        </div>
    );
}
