import React, { useEffect } from 'react'
import { fetchCities } from '../../redux/actions/citiesActions';
import { useDispatch, useSelector } from 'react-redux'; 
import { Link } from 'react-router-dom';
import Tile from '../../components/tile/Tile';

const Cities = ({match}) => {

    const cities = useSelector( state => state.cities);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCities(match.url));
    }, []);

    return(
        <div className="">
            {
                cities.cities !== undefined ? (
                    cities.cities.cityList.map( city => (
                        <div>
                            <h3 className="font-semibold">{city.cityName}</h3>
                            <div className="flex flex-row justify-evenly flex-wrap">
                            {
                                city.hotelList.map( hotel => (
                                    <div className=' mx-3.5'>
                                        <Link to={`${match.url}/hotel/${hotel.hotelId}`}>
                                            <Tile placeName={hotel.hotelName} image={hotel.imageList[0]}/>
                                        </Link>
                                    </div>
                                ))
                            }
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No cities</div>
                )
            }
        </div>
    );
};

export default Cities;