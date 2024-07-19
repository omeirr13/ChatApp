'use client'
import { useLocalStorage } from '@/hooks/useLocalStorage';
import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'; // Next.js 13+ useRouter
import ChatContext from '@/app/ChatContext';
import SocketContext from '@/app/SocketContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useSession, signIn, signOut } from "next-auth/react"

export default function Login() {
    const { setChatNotOpen } = useContext(ChatContext);

    //local storage
    const { setItem } = useLocalStorage('currentLoggedIn');
    const { getItems } = useLocalStorage('users');
    const { setItems } = useLocalStorage('users');
    const { setItems: setNotConnectedUsers } = useLocalStorage('notConnectedUsers');
    const { getItems: getEmailToUsernameMapping, setEmailToUsernameMapping } = useLocalStorage('emailToUsernameMappings');

    //hooks
    //useStates
    const [formData, setFormData] = useState({
        'email': '',
        'password': ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    //useContexts
    const { socket } = useContext(SocketContext);
    // const socket = useSocket();
    const { isLoggedIn, setIsLoggedIn } = useContext(ChatContext);

    //useRouter
    const router = useRouter();

    //useEffects
    useEffect(() => {
        if (localStorage.getItem('currentLoggedIn')) {
            router.push('/auth/login')
        }
    }, [router])

    // NextAuth session
    const { data: session, status } = useSession();
    useEffect(() => {
        if (status === 'authenticated') {
            setIsLoggedIn(true);
            const username = session.user.name;
            const email = session.user.email;
            setItem(email);

            let existingMappings = JSON.parse(localStorage.getItem('emailToUsernameMapping') || '{}');
//mil gyi usko id
            // Ensure existingMappings is an object and not null
            if (existingMappings) {
                // Check if the object is empty or if the specific email key does not exist
                if (Object.keys(existingMappings).length === 0 || !existingMappings.hasOwnProperty(email)) {
                    setNotConnectedUsers(email);
                    setItems({ username, email, NaN }); // Ensure NaN is intended
                    setEmailToUsernameMapping(email, username);
                    socket.emit('login', { 'email': email });
                }
            } else {
                // Handle the case where existingMappings is not an object or is null
                console.warn('Invalid or empty mappings');
            }
            router.push('/chat');
        }
    }, [status, router]);
    // handle submit of form
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = formData;

        const storedUsers = getItems();
        const user = storedUsers.find(user => user.email === email);

        if (email === '' || password === '') {
            setErrorMessage("One or more fields are missing!");
            return;
        }
        if (!user || user.password !== password) {
            setErrorMessage("Invalid email or password.");
            return;
        }

        setItem(user.email);//set current logged in user
        setIsLoggedIn(true);

        setFormData({
            'email': '',
            'password': ''
        });
        setErrorMessage('');
        console.log('going to emit')
        setChatNotOpen(false);
        socket.emit('login', { 'email': user.email });
    }

    // set formData whenever input field of id email changes
    const handleChange = (e) => {
        let updatedFormData = {
            ...formData,
            [e.target.name]: e.target.value
        }

        setFormData(updatedFormData);
    }

    // if already logged in, redirect to chat page
    if (isLoggedIn) {
        router.push('/chat')
    }
    return (
        <div className="login-container max-w-[400px] my-20 p-5 mx-auto rounded-md bg-white border border-gray-400 border-solid">
            <h2 className="text-center mb-5 text-xl font-bold text-black">Login</h2>
            <div className="flex justify-center">
                {errorMessage && <p className="text-red-600">{errorMessage}</p>}
            </div>
            <div className="flex justify-center">
                <form>
                    <div className="mb-4">
                        <label class="block mb-2 font-bold text-black" htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-[270px] p-0.5 border border-gray-400 border-solid rounded-md bg-white text-black"
                        />
                    </div>
                    <div className="form-group">
                        <label class="block mb-2 font-bold text-black" htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-[270px] p-0.5 border border-gray-400 border-solid rounded-md bg-white"
                        />
                    </div>
                    <div class="flex justify-center">
                        <div class="flex justify-center mt-5">
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleSubmit}>Login</button>
                        </div>
                        <div class="flex justify-center mt-5">
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => signIn()}>Login With Google
                                <FontAwesomeIcon
                                    icon={faGoogle}
                                    className="ml-2"
                                />
                            </button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
