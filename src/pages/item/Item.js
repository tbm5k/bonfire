import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotel } from '../../redux/actions/hotelActions';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './item.css';
import { Link } from 'react-router-dom';

function Item({match}){

    const hotel = useSelector(state => state.hotels.hotel)
    const dispatch = useDispatch()

    useEffect(() => {  
        dispatch(fetchHotel(match.url))
    }, [])

    const images = [
        {url: "https://images.freeimages.com/images/large-previews/0d6/blue-flowers-with-macro-4-1400913.jpg"},
        {url: "https://images.freeimages.com/images/large-previews/0d6/blue-flowers-with-macro-4-1400913.jpg"},
    ];

    return(
        <div className="">
            {
                hotel ? (
                    <div className="flex flex-row justify-between">
                        <img className="h-96 w-80 object-cover rounded-2xl" src="https://images.freeimages.com/images/large-previews/0d6/blue-flowers-with-macro-4-1400913.jpg" alt=""/>
                        <div className="flex flex-col w-1/2 px-3">      
                            <p className="font-bold">{hotel.hotelName}</p>   
                            <div className=' my-6'>
                                <ul className=' flex flex-row font-bold text-lg'>
                                    <li>Meal plan</li>
                                    <li>3 Day SGR</li>
                                    <li>5 Day SGR</li>
                                    <li>3 Day flight</li>
                                    <li>5 Day flight</li>
                                </ul>
                                {
                                    hotel.pricePackageList.map( pkg => (
                                        <div className=" h-24 border border-gray-300 rounded-xl flex flex-row justify-around my-4">
                                            <p className=' flex items-center font-bold'>{pkg.mealPlan}</p>
                                            <p className=' flex items-center'>{`Ksh ${pkg.threeDaySgr}`}</p>
                                            <p className=' flex items-center'>{`Ksh ${pkg.fiveDaySgr}`}</p>
                                            <p className=' flex items-center'>{`Ksh ${pkg.threeDayFlying}`}</p>
                                            <p className=' flex items-center'>{`Ksh ${pkg.fiveDayFlying}`}</p>
                                        </div>                                    
                                    ))
                                }
                            </div>
                            <div className=' flex justify-end'>
                                <Link to={`${match.url}/book`} className=' w-28 h-10 rounded-xl text-center flex items-center justify-center text-white bg-bonfireorange'>Book</Link>
                            </div>
                        </div>
                    </div>
                    ) : (
                    <p></p>
                )
            }

            {/* Image slideshow */}
            <div className=" mt-14">
                <Slide>
                    {
                        hotel.imageList( image => (
                            <div className=" h-40 w-80 my-auto rounded-2xl mr-4 bg-gray-400" style={{'backgroundImage': `url(${image.url})`}}>
                                
                            </div>                        
                        ))
                    }
                </Slide>
            </div>
        </div>
    );
}

export default Item;