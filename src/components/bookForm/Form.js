import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotel } from "../../redux/actions/hotelActions";

const Form = ({match}) => {

    const dispatch = useDispatch()
    const hotel = useSelector(state => state.hotels.hotel)
    let hotelUrl = match.url.split(`/book`)[0]

    useEffect(() => {
        dispatch(fetchHotel(hotelUrl))
    })

    return(
        <div>
            {
                hotel? (
                    <form>
                        <div>
                            <label for="count">Numbe of people</label>
                            <input id="count" type="number"/>
                        </div>
                        <div>
                            <label for="place">Hotel</label>
                            <input id="place" type="text" value={hotel.hotelName}/>
                        </div>
                        <div>
                            <label for="plans">Meal plan</label>
                            <select id="plans" type="text">
                                {
                                    hotel.pricePackageList.map( price => (
                                        <option value={price.mealPlan}>{price.mealPlan}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <input type="submit" value="Submit"/>
                    </form>
    
                ): null
            }
        </div>
    )
}

export default Form