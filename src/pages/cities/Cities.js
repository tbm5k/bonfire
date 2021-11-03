import React, { lazy, useEffect } from 'react'
import { fetchCities } from '../../redux/actions/citiesActions';
import { useDispatch, useSelector } from 'react-redux'; 

const Tile = lazy(() => import('../../components/tile/Tile'))

const Cities = ({match}) => {

    const cities = useSelector( state => state.cities);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCities(match.url));
    }, []);

    return(
        <div>
            {
                cities.cities !== undefined ? (
                    cities.cities.cityList.map( city => (
                        <Tile />
                    ))
                ) : (
                    <div>No cities</div>
                )
            }
        </div>
    );
};

export default Cities;