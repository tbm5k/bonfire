import React, { useEffect } from 'react'
import Cube from '../../components/cube/Cube';
import { fetchCountries } from '../../redux/actions/countriesAction';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { Link, Route, useRouteMatch } from 'react-router-dom';
import Cities from '../cities/Cities';

const Countries = () => {

    const { path, url } = useRouteMatch();
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
                        <Link to={`${url}/country/${country.countryId}`}>
                            <Cube key={country.countryId} placeName={country.countryName}/>
                        </Link>
                    ))
                ) : (
                    <div>No countries</div>
                )
            }
            <Route path={`${path}/country/:countryId`} component={Cities}/>
        </div>
    );
};

export default Countries;