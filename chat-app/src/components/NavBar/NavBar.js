import './NavBar.css'
import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import SocketContext from '../../SocketContext';
import { useLocalStorage } from '../../hooks/useLocalStorage'

export default function NavBar() {
    //hooks
    //useLocalStorage
    const { deleteItem, getItem } = useLocalStorage('currentLoggedIn');//to delete currentLoggedIn user email

    //useNavigate
    const navigate = useNavigate();

    //useContext
    const { socket } = useContext(SocketContext);

    const loggedInEmail = getItem();// get logged in email


    return (
        <nav>
            <h2 className="nav-heading">Chat-App</h2>
            {localStorage.getItem("currentLoggedIn") ? (
                <>
                    <div class="navContainer">
                        <ul className="nav-items">
                            <li className="email">{loggedInEmail}</li>
                            <li>
                                <a href="">Logout</a>
                            </li>
                            <li>
                                <NavLink to="/chat">Chat</NavLink>
                            </li>

                        </ul>
                    </div>
                </>
            ) : (
                <ul className="nav-items">
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signup">Signup</NavLink>
                    </li>
                </ul>
            )}
        </nav>
    )
}
