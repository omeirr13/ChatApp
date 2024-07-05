import './ChatHeader.css';
import ChatContext from '../../ChatContext';
import { useContext, useState, useEffect } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export default function ChatHeader(props) {
    //hooks
    //useState
    const [username, setUsername] = useState('');

    //useContext
    const { chattingWith: chattingWithEmail } = useContext(ChatContext);

    //useLocalStorage
    const { getItems } = useLocalStorage("users");

    //useEffect
    useEffect(() => {
        if (chattingWithEmail !== '') {
            getUsername(chattingWithEmail);
        } else {
            setUsername(''); // Reset username if no email is present
        }
    }, [chattingWithEmail]);

    const getUsername = (email) => {
        const users = getItems();
        const user = users.find((user) => user.email === email);
        if (user) {
            setUsername(user.username); // Set the username if user found
        } else {
            setUsername(''); // Handle case where user is not found (optional)
        }
    };

    return (
        <div className="chatHeaderContainer">
            {chattingWithEmail === '' ? (
                <p></p>
            ) : (
                <>
                    <h3 className="chattingWith">{username}</h3>
                    <h5 className="chattingEmail">{chattingWithEmail}</h5>
                </>
            )}
        </div>
    );
}
