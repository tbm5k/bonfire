import React from 'react';
import './Footer.css';

function Header(){
    return(
        <div id="footer">
            <div className="footer">
                <div id="handles">
                    <h4>Social handles</h4>
                </div>
                <div id="about">
                    <h4>About us</h4>
                    <ul>
                        <li>Offices</li>
                        <li>Services</li>
                        <li>Vision</li>
                        <li>Mission</li>
                        <li>Environmental mission</li>
                        <li>Employee mission</li>
                        <li>Client mission</li>
                    </ul>
                </div>
                <div id="contacts">
                    <h4>Contacts</h4>
                    <ul>
                        <li>+254-722-879-629</li>
                        <li>+254-711-222-444</li>
                        <li>+254-729-836-336</li>
                        <li>+254-733-527-398</li>
                        <li>+254-715-281-211</li>
                        <li>0202067788</li>
                        <li>deals@bonfireadventures.com</li>
                        <li>info@bonfireadventures.com</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;