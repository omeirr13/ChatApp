import './Login.css';
import ChatContext from '../../ChatContext';
import { useNavigate } from 'react-router-dom';
import SocketContext from '../../SocketContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import React, { useState, useEffect, useContext } from 'react';

export default function Login() {
    const { setChatNotOpen } = useContext(ChatContext);

    //local storage
    const { setItem } = useLocalStorage('currentLoggedIn');
    const { getItems } = useLocalStorage('users');

    //hooks
    //useStates
    const [formData, setFormData] = useState({
        'email': '',
        'password': ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    //useContexts
    const { socket } = useContext(SocketContext);
    const { isLoggedIn, setIsLoggedIn } = useContext(ChatContext);

    //useNavigate
    const navigate = useNavigate();

    //useEffects
    useEffect(() => {
        if (localStorage.getItem('currentLoggedIn')) {
            return navigate('chat');
        }
    }, [])

    // handle submit of form
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = formData;

        const storedUsers = getItems();
        const user = storedUsers.find(user => user.email === email);

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
        return navigate('chat')
    }

    return (
        <div className="login-container">
            <h2>Login</h2>
            <div className="error-container">
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
            <div className="input-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div class="btnContainer">
                        <button type="submit" class="loginButton">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
