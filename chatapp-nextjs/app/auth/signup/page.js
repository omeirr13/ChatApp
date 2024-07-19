'use client'
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'; // Next.js 13+ useRouter
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function Signup() {
    // hooks
    //useState
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    //useNavigate
    const router = useRouter();

    //useLocalStorage
    const { setItems } = useLocalStorage('users');
    const { setItems: setNotConnectedUsers } = useLocalStorage('notConnectedUsers');

    const { setEmailToUsernameMapping } = useLocalStorage('emailToUsernameMappings');
    //useEffects
    useEffect(() => {
        if (localStorage.getItem('currentLoggedIn')) {
            router.push('/chat')
        }
    }, [router])

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, email, password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match!');
            setFormData({
                email: '',
                username: '',
                password: '',
                confirmPassword: ''
            });
            return;
        }

        setErrorMessage('');
        setItems({ username, email, password });
        setNotConnectedUsers(email);
        setFormData({
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        });
        setEmailToUsernameMapping(email, username);
    };
    const handleChange = (e) => {
        const updatedFormData = {
            ...formData,
            [e.target.name]: e.target.value
        };

        setFormData(updatedFormData);
    };



    return (
        <div className="login-container max-w-[400px] my-20 p-5 mx-auto rounded-md bg-white border border-gray-400 border-solid">
            <h2 className="text-center mb-5 text-xl font-bold text-black">Sign Up</h2>
            <div className="flex justify-center">
                {errorMessage && <p className="text-red-600">{errorMessage}</p>}
            </div>
            <div className="flex justify-center">
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label className="block mb-2 font-bold text-black" htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            className="w-60 p-0.5 border border-gray-400 border-solid rounded-md bg-white "
                        />
                    </div>
                    <div className="form-group">
                        <label className="block mb-2 font-bold text-black" htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-60 p-0.5 border border-gray-400 border-solid rounded-md bg-white"
                        />
                    </div>
                    <div className="form-group ">
                        <label className="block mb-2 font-bold text-black" htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-60 p-0.5 border border-gray-400 border-solid rounded-md bg-white"


                        />
                    </div>
                    <div className="form-group">
                        <label className="block mb-2 font-bold text-black" htmlFor="confirm-password">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            className="w-60 p-0.5 border border-gray-400 border-solid rounded-md bg-white"

                        />
                    </div>
                    <div class="flex justify-center mt-5">
                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Signup</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

