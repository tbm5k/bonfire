import React, { useEffect } from 'react'
import Cube from '../../components/cube/Cube';
import { fetchCountries } from '../../redux/actions/countriesAction';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const Countries = () => {

    const { continentId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCountries(continentId));
    }, [continentId]);

    const countries = useSelector( state => state.countries.countries);

    return (
        <div className="flex flex-row justify-evenly">
            {
                countries !== undefined ? (
                    countries.map( country => (
                        <Cube key={country.countryId} placeName={country.countryName}/>
                    ))
                ) : (
                    <div>No countries</div>
                )
            }
        </div>
    );
};

export default Countries;