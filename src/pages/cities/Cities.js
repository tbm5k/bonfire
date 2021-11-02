import React, { lazy, useEffect } from 'react'
import { fetchCities } from '../../redux/actions/citiesActions';
import { useDispatch } from 'react-redux'; 

const Tile = lazy(() => import('../../components/tile/Tile'))

const Cities = ({match}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCities(match.url));
    }, []);

    return(
        <div>
            <Tile />
        </div>
    );
};

export default Cities;