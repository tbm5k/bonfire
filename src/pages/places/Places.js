import React, {useContext, useEffect} from 'react';
//import './Places.css';
import Banner from '../../components/banner/Banner';
import {ContinentContext} from '../../context/ContinentContext';
import Cube from '../../components/cube/Cube';
import { useDispatch, useSelector } from 'react-redux';
import { setContinents } from '../../redux/actions/continentActions';
import axios from 'axios'

export default function Places(){

    //const [continents] = useContext(ContinentContext);

    //data fetching from the api and setting the redux state
    /*
    A good practise would be to put this logic into an action
    */
    const dispatch = useDispatch();
    const fetchContinents = async () => {
        await axios
        .get(`${process.env.REACT_APP_BASE_URL}/continents`)
        .then( res => {
            dispatch(setContinents(res.data));
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchContinents();
    }, [])

    //retreiving the redux state for viewing purposes by use of the useSelector hook
    const continents = useSelector( state => state.continents.continents)
    console.log(continents.length)


    return(
        <div>
            <Banner />
                {/* continents.map( continent => (
                        <div className='flex flex-col mt-9 mb-9'>
                            <h2 className='text-center text-4xl font-bold'>{continent.continentName}</h2>
                            {console.log(continent.countryList)}
                            <div className='flex flex-row justify-evenly overflow-hidden mt-6 mb-6'>
                                {
                                    continent.countryList.map( country => (
                                        <div>
                                            <Cube key={country.countryId} placeName={country.countryName}/>                                
                                        </div>
                                    ))
                                }
                            </div>
                            <button className='bg-bonfireorange hover:bg-darkbonfireorange text-lg font-bold text-white rounded-xl w-52 h-11 mx-auto'>More</button>
                        </div>
                    ))
                            */}
        </div>
    );
}