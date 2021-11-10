import React from 'react';
import './Footer.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

function Header(){
    return(
        <div id="footer">
            <div className="footer">
                <div id="handles">
                    <h4>Social handles</h4>
                    <div id="socialLogos">
                        <a href="https://twitter.com/bonfiresafaris" target="_blank">
                            <TwitterIcon style={{ color: "#FFA500"}}/>
                        </a>
                        <a href="https://www.instagram.com/bonfireadventures" target="_blank">
                            <InstagramIcon style={{ color: "#FFA500"}}/>
                        </a>
                        <a href="https://web.facebook.com/bonfireadventures" target="_blank">
                            <FacebookIcon style={{ color: "#FFA500"}}/>
                        </a>
                    </div>
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
                        <li><a href="tel:+254-722-879-629">+254-722-879-629</a></li>
                        <li><a href="tel:+254-711-222-444">+254-711-222-444</a></li>
                        <li><a href="tel:+254-729-836-336">+254-729-836-336</a></li>
                        <li><a href="tel:+254-733-527-398">+254-733-527-398</a></li>
                        <li><a href="tel:+254-715-281-211">+254-715-281-211</a></li>
                        <li><a href="tel:+254-202-067-788">+254-202-067-788</a></li>
                        <li><a href="mailto:deals@bonfireadventures.com">deals@bonfireadventures.com</a></li>
                        <li><a href="mailto:info@bonfireadventures.com">info@bonfireadventures.com</a></li>
                    </ul>
                </div>
            </div>
            <p id="copyright">
                &copy;All Right Reserved, Bonfire Adventures 2021
            </p>
        </div>
    );
}

export default Header;