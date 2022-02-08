import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postHotel } from "../../redux/actions/hotelActions";

const Admin = () => {

    const [hotel, setHotel] = useState({
        continent: '',
        country: '',
        city: '',
        hotel: '',
        images: []
    })

    const dispatch = useDispatch();

    //store the required variables(continent, country, city) and use them in the post hotel action parameter
    useEffect(() => {
        dispatch(postHotel())
    }, [])

    const handleChange = e => {
        setHotel({
            ...hotel,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(hotel)
    }

    return(
        <div className=" flex justify-center">
            <form className=" w-1/2" onSubmit={handleSubmit}>
                <div className=" flex flex-col pb-4">
                    <label for="contientName">Continent</label>
                    <input onChange={handleChange} className=" h-9 border border-gray-300 rounded-xl px-3 mt-2 focus:border focus:border-bonfireorange" id="contientName" name="continent" type="text"/>
                </div>
                <div className=" flex flex-col pb-4">
                    <label for="countryName">Country</label>
                    <input onChange={handleChange} className=" h-9 border border-gray-300 rounded-xl px-3 mt-2 focus:border focus:border-bonfireorange" id="countryName" name="country" type="text"/>
                </div>
                <div className=" flex flex-col pb-4">
                    <label for="cityName">City</label>
                    <input onChange={handleChange} className=" h-9 border border-gray-300 rounded-xl px-3 mt-2 focus:border focus:border-bonfireorange" id="cityName" name="city" type="text"/>
                </div>
                <div className=" flex flex-col pb-4">
                    <label for="hotelName">Hotel name</label>
                    <input onChange={handleChange} className=" h-9 border border-gray-300 rounded-xl px-3 mt-2 focus:border focus:border-bonfireorange" id="hotelName" name="hotel" type="text"/>
                </div>
                <div>
                    <label>Images</label>
                    <input></input>
                </div>
                <input className=" w-24 h-8 rounded-xl text-white bg-green-400" type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default Admin;