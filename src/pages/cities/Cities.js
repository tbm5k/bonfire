import React, { lazy } from 'react'

const Tile = lazy(() => import('../../components/tile/Tile'))

const Cities = ({match}) => {

    return(
        <div>
            <Tile />
        </div>
    );
};

export default Cities;