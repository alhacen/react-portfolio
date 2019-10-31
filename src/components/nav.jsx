import React from "react";
import {Link} from 'react-router-dom';

const Nav = () => (
    <nav>
        <div className="nav-wrapper white">
            <a href="#" className="brand-logo black-text">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to='/'> Home </Link></li>
                <li><Link to='/blog'> Blog </Link></li>
                <li><Link to='/contact'> Contact </Link></li>
                <li><a href="!#"></a></li>
            </ul>
        </div>
    </nav>
);

export default Nav;
