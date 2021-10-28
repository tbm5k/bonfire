import React, { useEffect} from 'react';
import Banner from '../../components/banner/Banner';
import Tile from '../../components/tile/Tile';
import Cube from '../../components/cube/Cube';
import { fetchHotels} from '../../redux/actions/hotelActions';
import { useDispatch, useSelector } from 'react-redux'

function Home(){

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(fetchHotels())
    }, [])

    const hotels = useSelector( (state) => state.hotels.hotels)

    return(
        <div id="home">
            <Banner />
            <div className='flex flex-col mt-9 mb-9'>
                <h2 className='text-center text-4xl font-bold'>Places to visit</h2>
                <div className="flex flex-row justify-evenly flex-wrap mt-6 mb-6">
                {   
                    hotels !== undefined ? (
                    hotels.map( tile => (
                        <Tile key={tile.cityId} cityName={tile.cityName} text='' image={'null'}/>
                    ))
                    ) : <div>Empty list</div>
                }
                </div>
                <button className='bg-bonfireorange hover:bg-darkbonfireorange text-lg font-bold text-white rounded-xl w-52 h-11 mx-auto'>More</button>
            </div>
            <div className='flex flex-col mt-9 mb-9'>
                <h2 className='text-center text-4xl font-bold'>Ongoing deals</h2>
                <div className="flex flex-row justify-evenly flex-wrap mt-6 mb-6">
                    {
                        hotels !== undefined ? (
                        hotels.map(city => (
                            <Cube key={city.cityId} placeName={city.cityName} offer={"10% discount"}/>
                        ))
                         ) : <div>Empty list</div>
                    }
                </div>
                <button className='bg-bonfireorange hover:bg-darkbonfireorange text-lg font-bold text-white rounded-xl w-52 h-11 mx-auto'>More</button>
            </div>
        </div>
    );
}

export default Home;