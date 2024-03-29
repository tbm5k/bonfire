import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotel } from "../../redux/actions/hotelActions";

const Form = ({match}) => {

    const dispatch = useDispatch()
    const hotel = useSelector(state => state.hotels.hotel)
    let hotelUrl = match.url.split(`/book`)[0]

    const [booking, setBooking] = useState({
        count: '',
        hotelName: hotel.hotelName,
        mealPlan: 'full meal',
        from: '',
        to: ''
    });

    useEffect(() => {
        dispatch(fetchHotel(hotelUrl))
    }, [])

    const handleChange = e => {
        const name = e.target.name
        const value = e.target.value
        setBooking({
            ...booking,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
    }
    
    return(
        <div className=" flex flex-col items-center">
            <h3 className=" font-bold pb-4 text-3xl">Booking</h3>
            {
                hotel? (
                    <form className=" w-1/2" onSubmit={handleSubmit}>
                        <div className=" flex flex-col pb-4">
                            <label for="count">Numbe of people</label>
                            <input className=" h-9 border border-gray-300 rounded-xl px-3 mt-2" name="count" id="count" type="number" onChange={handleChange} value={booking.count}/>
                        </div>
                        <div className=" flex flex-col pb-4">
                            <label for="place">Hotel</label>
                            <input className=" h-9 border border-gray-300 rounded-xl px-3 mt-2" name="hotelName" id="place" type="text" onChange={handleChange} value={hotel.hotelName}/>
                        </div>
                        <div className=" flex flex-col pb-4">
                            <label for="plans">Meal plan</label>
                            <select className=" h-9 border border-gray-300 rounded-xl px-3 mt-2" name="mealPlan" id="plans" type="text" value={booking.mealPlan} onChange={handleChange}>
                                <option value={`full meal`}>full meal</option>
                                <option value={`half meal`}>half meal</option>
                            </select>
                        </div>
                        <div className=" flex flex-rol pb-4 justify-between">
                            <div className=" flex flex-col">
                                <label>From</label>
                                <input className=" h-9 border border-gray-300 rounded-xl px-3 mt-2" type="date" name="from" value={booking.from} onChange={handleChange}/>
                            </div>
                            <div className=" flex flex-col">
                                <label>To</label>
                                <input className=" h-9 border border-gray-300 rounded-xl px-3 mt-2" type="date" name="to" value={booking.to} onChange={handleChange}/>
                            </div>
                        </div>
                        <input className=" w-24 h-8 rounded-xl text-white bg-green-400" type="submit" value="Submit"/>
                    </form>
    
                ): null
            }
        </div>
    )
}

export default Form