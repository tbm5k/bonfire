import React from 'react';
import Banner from '../../components/banner/Banner';
import Tile from '../../components/tile/Tile';

export default function Deals(){
    return(
        <div>
            <Banner />
            <div className='flex flex-col mt-9 mb-9'>
                <h2 className='text-center text-4xl font-bold'>Ongoing deals</h2>
                <div className="flex flex-row justify-evenly flex-wrap mt-6 mb-6">
                   <Tile />     
                </div>
            </div>
        </div>
    )
}
