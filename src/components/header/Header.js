import React from 'react'
import './Header.css'

function Header(){
    return(
        <div id="header">
            <h4>Bonfire</h4>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Places</li>
                    <li>Deals</li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;