import './ChatHeader.css';
import ChatContext from '../../ChatContext';
import { useContext, useState, useEffect } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import StarImage from '../../images/white-star.png'
// import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar, faEnvelope, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function ChatHeader() {
    //hooks
    //useState
    const [username, setUsername] = useState('');
    const { setUserWhoseInfoOpen } = useContext(ChatContext);
    //useContext
    const { chattingWith: chattingWithEmail } = useContext(ChatContext);

    //useLocalStorage
    const { getItems } = useLocalStorage("users");
    const { getItems: getEmailToUsernameMapping } = useLocalStorage('emailToUsernameMapping');

    const emailToUsernameMap = getEmailToUsernameMapping();
    console.log(emailToUsernameMap);
    //useEffect
    // const getUsername = (email) => {
    //     const users = getItems();
    //     const user = users.find((user) => user.email === email);
    //     if (user) {
    //         return user.username;
    //     } else {
    //         return '';
    //     }
    // };
    useEffect(() => {
        if (chattingWithEmail !== '') {
            setUsername(emailToUsernameMap[chattingWithEmail]);
            // setUsername(getUsername(chattingWithEmail));
        } else {
            setUsername(''); // Reset username if no email is present
        }
    }, [chattingWithEmail]);


    const showUserInfo = () => {
        console.log(1);
        setUserWhoseInfoOpen({
            'username': emailToUsernameMap[chattingWithEmail],
            'email': chattingWithEmail
        });
    }
    return (
        <>
            {chattingWithEmail === '' ? (
                <>
                    <p></p>
                </>
            ) : (
                <div className="chatHeaderContainer">
                    <div className="chatHeaderUserInfo" onClick={(showUserInfo)}>
                        <h3 className="chattingWith">{username}</h3>
                        <h5 className="chattingEmail">{chattingWithEmail}</h5>
                    </div>
                    <div className="menu-wrapper">
                        <div class="menu-container">
                            <div class="menu-item">
                                <FontAwesomeIcon icon={faStar} className="headerImage"></FontAwesomeIcon>
                            </div>
                            <div class="menu-item">
                                <FontAwesomeIcon icon={faEnvelope} className="headerImage"></FontAwesomeIcon>
                            </div>
                            <div class="menu-item">
                                <FontAwesomeIcon icon={faTrashCan} className="headerImage"></FontAwesomeIcon>
                            </div>

                        </div>
                        <div class="grid-container">
                            <div class="grid-item">
                                <img src={StarImage} className="headerImage"></img>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
