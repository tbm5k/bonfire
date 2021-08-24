import React from 'react';
import './Header.css';

function Header(){
    return(
        <div id="header">
            <div className="header">
                <h4>Bonfire</h4>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Places</li>
                        <li>Deals</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;