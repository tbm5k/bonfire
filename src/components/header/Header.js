import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <div id="header">
            <div className="header">
                <h4>Bonfire</h4>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/places">Places</Link>
                        </li>
                        <li>
                            <Link to="/deals">Deals</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;