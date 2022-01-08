import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotel } from '../../redux/actions/hotelActions';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './item.css';

function Item({match}){

    const hotel = useSelector(state => state.hotels.hotel)
    const dispatch = useDispatch()

    console.log(hotel)

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
                        <div className="flex flex-col justify-between w-1/2">      
                            <p className="font-bold">{hotel.hotelName}</p>   
                            <table className="table-auto text-sm text-left w-full">
                                <thead>
                                    <tr>
                                        <th>Meal plan</th>
                                        <th>3 Day SGR</th>
                                        <th>5 Day SGR</th>
                                        <th>3 Day flight</th>
                                        <th>5 Day flight</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="h-24">
                                        <td>{hotel.pricePackage.mealPlan}</td>
                                        <td>{`Ksh ${hotel.pricePackage.threeDaySGR}`}</td>
                                        <td>{`Ksh ${hotel.pricePackage.fiveDaySGR}`}</td>
                                        <td>{`Ksh ${hotel.pricePackage.threeDayFlying}`}</td>
                                        <td>{`Ksh ${hotel.pricePackage.fiveDayFlying}`}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="flex flex-row justify-between">
                                <button className="bg-bonfireorange hover:bg-darkbonfireorange text-lg font-bold text-white rounded-xl w-40 h-11 mx-auto">Book</button>
                                <button className="bg-bonfireorange hover:bg-darkbonfireorange text-lg font-bold text-white rounded-xl w-40 h-11 mx-auto">Offer</button>
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
                        images.map( image => (
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