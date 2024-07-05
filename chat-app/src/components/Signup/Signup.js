import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import React, { useState, useEffect } from 'react';

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
    const navigate = useNavigate();

    //useLocalStorage
    const { setItems } = useLocalStorage('users');

    //useEffect
    useEffect(() => {
        if (localStorage.getItem('currentLoggedIn')) {
            navigate('/chat');
        }
    }, [navigate]);

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
        setFormData({
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        });
    };
    const handleChange = (e) => {
        const updatedFormData = {
            ...formData,
            [e.target.name]: e.target.value
        };

        setFormData(updatedFormData);
    };



    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <div className="error-container">
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
            <div className="input-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
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
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

