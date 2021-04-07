import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './../../App';
import './Header.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <h2>Fine Dine</h2>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to="/home" className="">Home</Link>
                            <Link to="/cart"><ShoppingCartIcon className="text-secondary" /></Link>
                            <Link to="/login"><button className="btn btn-danger rounded">{loggedInUser.isSignedIn ? loggedInUser.name : 'Login'}</button></Link>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Header;