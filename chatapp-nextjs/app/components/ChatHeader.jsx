// import { faStar } from '@fortawesome/free-solid-svg-icons';
import ChatContext from '@/app/ChatContext';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useState, useContext, useEffect } from 'react';


export default function ChatHeader() {
    //hooks
    //useState
    const [username, setUsername] = useState('');
    const { setUserWhoseInfoOpen, userWhoseInfoOpen } = useContext(ChatContext);
    //useContext
    const { chattingWith: chattingWithEmail } = useContext(ChatContext);

    //useLocalStorage
    const { getItems: getEmailToUsernameMapping } = useLocalStorage('emailToUsernameMapping');

    const emailToUsernameMap = getEmailToUsernameMapping();
    console.log(emailToUsernameMap);

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
        const isEmptyObject = Object.keys(userWhoseInfoOpen).length === 0 && userWhoseInfoOpen.constructor === Object;
        if (isEmptyObject) {
            setUserWhoseInfoOpen({
                'username': emailToUsernameMap[chattingWithEmail],
                'email': chattingWithEmail
            });
        }
        else {
            setUserWhoseInfoOpen({});
        }
    }
    return (
        <>
            {chattingWithEmail === '' ? (
                <>
                    <p></p>
                </>
            ) : (
                <div className="h-20 border-b border-gray-200 border-solid flex items-center">
                    <div className="flex flex-col justify-center ml-5 text-gray-600" onClick={showUserInfo}>
                        <h3 className="m-0 text-gray-600 font-bold">{username}</h3>
                        <h5 className="m-0 text-gray-600 font-bold">{chattingWithEmail}</h5>
                    </div>
                </div>

            )
            }
        </>
    );
}
