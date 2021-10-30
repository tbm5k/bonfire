import React, { useEffect } from 'react';
import Banner from '../../components/banner/Banner';
import Cube from '../../components/cube/Cube';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContinents } from '../../redux/actions/continentActions';
import { Link } from 'react-router-dom';

export default function Places(){

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchContinents());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //retreiving the redux state for viewing purposes by use of the useSelector hook
    const continents = useSelector( state => state.continents.continents)
    
    return(
        <div>
            <Banner />
                {
                    continents !== undefined ? (continents.map( continent => (
                        <div className='flex flex-col mt-9 mb-9'>
                            <h2 className='text-center text-4xl font-bold'>{continent.continentName}</h2>
                            <div className='flex flex-row justify-evenly overflow-hidden mt-6 mb-6'>
                                {
                                    continent.countryList.map( country => (
                                        <div>
                                            <Cube key={country.countryId} placeName={country.countryName}/>                                
                                        </div>
                                    ))
                                }
                            </div>
                            <Link to={`/country/${continent.continentId}`} className='bg-bonfireorange hover:bg-darkbonfireorange rounded-xl w-52 h-11 mx-auto'>
                                <button className="h-full w-full text-center text-white font-bold">More</button>
                            </Link>
                        </div>
                    ))) : <div>Empty list</div>
                }
        </div>
    );
}
