import React, { useEffect } from 'react'
import Cube from '../../components/cube/Cube';
import { fetchCountries } from '../../redux/actions/countriesAction';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'

const Countries = () => {

    const { continentId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCountries(continentId));
    }, []);

    return (
        <div className="flex flex-row justify-evenly">
            <Cube />
        </div>
    );
};

export default Countries;