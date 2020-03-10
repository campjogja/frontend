import React from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css'

const Navbar = () => {
    return(
        <div className="container">
            <Link to="/">
            <div className="text">Home</div> 
            </Link>
            <Link to="/home">
            <div className="text">User</div>
            </Link>
            <a href="/">
                Ini A href
            </a>
        </div>

    )
}

export default Navbar;