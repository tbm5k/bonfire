import React from 'react';
import './Footer.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import Pop from '../popup/Pop';

function Header(){

    const abouts = [
        {
            key: 1,
            btnName: 'Offices', 
            txt: ''
        },
        {
            key: 2,
            btnName: 'Services', 
            txt: [
                'Domestic and international Tours and Travel consultation and holiday packaging',
                'Air Ticketing',
                'Hotel booking',
                'Airport Transfers',
                'Kenya safaris and excursions',
                'International Holidays',
                'Honeymoon Packages',
                'Destination Weddings',
                'Corporate team building, conferences and retreats',
                'Bush and Beach Events Organization',
                'Visa Handling for specific Countries',
                'Travel Insurance',
            ]
        },
        {
            key: 3,
            btnName: 'Vision', 
            txt: `To be the giraffes in the tourism industry by standing tall to see far on behalf of  our clients before 
            others do and advising clients accordingly by packaging holiday deals at unbelievable prices!`
        },
        {
            key: 4,
            btnName: 'Environmental mission', 
            txt: `
            It is our mission to serve as beacons for those who want to preserve what is left for generations 
            to come. In our simple way, we ask that you come join us on a journey to discover the subtle 
            treasures of Kenya. In doing so, it will awaken you to all the rich historical, cultural and 
            natural resources that she offers`
        },
        {
            key: 5,
            btnName: 'Employee mission', 
            txt: `
            Traditionally, members of the travel and tours  industries; guides, leaders and instructors, 
            are paid very low wages despite the difficult and skilled work they carry out. We at Bonfire 
            Adventures  understand that our company would be nothing without the hard work, enthusiasm 
            and skill of our talented trip leaders, trip developers, guides, instructors and other employees 
            and it is our desire to reward our team members for their effort. For this reason, not only do 
            we pay generous wages that exceed industry averages, but we also provide significant profit 
            share and bonus schemes to ensure our employees directly benefit from their excellent work. 
            We also give our employees significant freedom to create, run and manage our trips so that 
            they feel a sense of ownership over the trips they lead and we involve them as much as possible 
            in the strategic development of our company so that they feel a part of a common vision. It is 
            our goal to become the employer of choice in the tours and travel industries and to be recognized 
            by our team members as a generous, inspiring, and great place to work. We hope to contribute to 
            our employees’ lives by allowing them to pursue their passion for travel and the tours s while 
            still being able to make a comfortable living. Please feel free to tip the tour guides for a 
            job well done after the safari.`
        },
        {
            key: 6,
            btnName: 'Client mission', 
            txt: `We are dedicated to offering the highest quality, safest and best value trips that we can. But on top of 
            offering an excellent product, we are also committed to making a positive change in the lives of our clients. 
            We at Bonfire Adventures have all benefited in meaningful ways from the remarkable power of having a passion in life; 
            of having a pastime that brings you pleasure, friendships, a sense of achievement and a total escape from the 
            pressures of everyday life. Some of us have found self-confidence, others friendships, and others motivation and drive 
            as a result of our involvement in sports. We want our clients to also experience the pleasure of finding and pursuing a 
            passion. It is our goal that clients return from our trips having found a new passion or solidified an existing one, 
            having made lasting friendships, having experienced a deep sense of achievement as a result of reaching new heights 
            in their favorite sport, and having acquired a new perspective on life as a result of the unique experiences that 
            our trips provide. We have had more than a few clients who have returned from our trips and decided to make major 
            life changes such as changing careers to pursue more meaningful work, moving countries to be closer to the tours s, 
            and changing universities to be around more like-minded people. We do not expect our trips to have such a dramatic 
            impact on all our clients, but we do hope that all our clients can be inspired in some small way from the experience 
            of sharing their passion with us. Please feel free to join our members club and enjoy great benefits on future getaways!`
        },
        {
            key: 7,
            btnName: 'About',
            txt: `
            Bonfire Adventures & Events Limited is a well established tours, travel and Events Company with over 10 years experience in handling inbound and outbound holidays not only for domestic tourists but also international tourists from all over the world. Bonfire Has been Voted Africa and Kenya’s Leading Travel Agency by World Travel Awards
            Our specialty is the ability to design unique tours and safaris to fit every type of tourist, from the budget to the luxury providing a unique opportunity to combine bush and beach adventures with East Africa’s spectacular scenery and not forgetting the rest of the world hidden treasures!
            If you’re looking for a vacation that provides a huge sense of personal recreation while still being fun, exciting, relaxing, adventurous and rewarding, we suggest you check out our wide range of tours and travel packages.
            `
        }
    ]

    return(
        <div id="footer">
            <div className="footer">
                <div id="handles">
                    <h4>Social handles</h4>
                    <div id="socialLogos">
                        <a href="https://twitter.com/bonfiresafaris" target="_blank" rel="noopener noreferrer">
                            <TwitterIcon style={{ color: "#FFA500"}}/>
                        </a>
                        <a href="https://www.instagram.com/bonfireadventures" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon style={{ color: "#FFA500"}}/>
                        </a>
                        <a href="https://web.facebook.com/bonfireadventures" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon style={{ color: "#FFA500"}}/>
                        </a>
                    </div>
                </div>
                <div id="about">
                    <h4>About us</h4>
                    {
                        abouts.map( abt =>
                            <ul>
                                <li key={abt.key}>
                                    <Pop btnName={abt.btnName} txt={abt.txt} />
                                </li>                                              
                            </ul>      
                        )
                    }
                    {/* <ul>
                        <li>Offices</li>
                        <li>Services</li>
                        <li>Vision</li>
                        <li>Mission</li>
                        <li>Environmental mission</li>
                        <li>Employee mission</li>
                        <li>Client mission</li>
                    </ul> */}
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