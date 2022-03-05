import React, { useEffect} from 'react';
import Banner from '../../components/banner/Banner';
import Tile from '../../components/tile/Tile';
import Cube from '../../components/cube/Cube';
import { fetchHotels} from '../../redux/actions/hotelActions';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Home(){

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(fetchHotels())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const hotels = useSelector( (state) => state.hotels.hotels)

    return(
        <div id="home">
            <Banner cityList={hotels}/>
            <div className='flex flex-col mt-9 mb-9'>
                <h2 className='text-center text-4xl font-bold'>Places to visit</h2>
                <div className="flex flex-row justify-evenly flex-wrap mt-6 mb-6">
                {   
                    hotels !== undefined ? (
                        hotels.map( tile => (
                        <Tile key={tile.cityId} cityName={tile.cityName} text='' image={tile.hotelList[0].imageList[0].imageUrl}/>
                    ))
                    ) : <div>Empty list</div>
                }
                </div>
                <Link to="/places" className='bg-bonfireorange hover:bg-darkbonfireorange rounded-xl w-52 h-11 mx-auto'>
                    <button className="h-full w-full text-center text-white font-bold">More</button>
                </Link>            
            </div>
            <div className='flex flex-col mt-9 mb-9'>
                <h2 className='text-center text-4xl font-bold'>Ongoing deals</h2>
                <div className="flex flex-row justify-evenly flex-wrap mt-6 mb-6">
                    {
                        hotels !== undefined ? (
                            hotels.map(city => (
                            <Cube key={city.cityId} placeName={city.cityName} offer={"10% discount"} image={city.hotelList[1].imageList[0].imageUrl}/>
                        ))
                         ) : <div>Empty list</div>
                    }
                </div>
                <Link to="/deals" className='bg-bonfireorange hover:bg-darkbonfireorange rounded-xl w-52 h-11 mx-auto'>
                    <button className="h-full w-full text-center text-white font-bold">More</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;